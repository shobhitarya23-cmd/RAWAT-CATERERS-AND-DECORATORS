import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'rawat_events';

let cached = global._mongo;
if (!cached) cached = global._mongo = { client: null, promise: null };

async function getDb() {
  if (cached.client) return cached.client.db(dbName);
  if (!cached.promise) cached.promise = new MongoClient(uri).connect();
  cached.client = await cached.promise;
  return cached.client.db(dbName);
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: CORS }); }

function pathOf(req) {
  const url = new URL(req.url);
  return url.pathname.replace(/^\/api\/?/, '').replace(/\/$/, '');
}

export async function GET(request) {
  const path = pathOf(request);
  try {
    if (path === '' || path === 'health') {
      return NextResponse.json({ ok: true, service: 'rawat-caterers', time: new Date().toISOString() }, { headers: CORS });
    }
    if (path === 'enquiries') {
      const db = await getDb();
      const items = await db.collection('enquiries').find({}).sort({ createdAt: -1 }).limit(100).toArray();
      return NextResponse.json({ items }, { headers: CORS });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: CORS });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: CORS });
  }
}

export async function POST(request) {
  const path = pathOf(request);
  try {
    const body = await request.json().catch(() => ({}));
    if (path === 'enquiries') {
      if (!body.name || !body.phone) {
        return NextResponse.json({ error: 'Name and phone are required' }, { status: 400, headers: CORS });
      }
      const doc = {
        id: uuidv4(),
        name: String(body.name).slice(0, 120),
        phone: String(body.phone).slice(0, 40),
        email: (body.email || '').slice(0, 120),
        eventType: (body.eventType || '').slice(0, 80),
        eventDate: (body.eventDate || '').slice(0, 40),
        guests: (body.guests || '').slice(0, 40),
        venue: (body.venue || '').slice(0, 200),
        services: (body.services || '').slice(0, 120),
        budget: (body.budget || '').slice(0, 80),
        message: (body.message || '').slice(0, 1500),
        createdAt: new Date(),
      };
      const db = await getDb();
      await db.collection('enquiries').insertOne(doc);
      return NextResponse.json({ ok: true, id: doc.id }, { headers: CORS });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: CORS });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: CORS });
  }
}
