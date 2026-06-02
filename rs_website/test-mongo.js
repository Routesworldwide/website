// Quick MongoDB connection test
// Run this with: node test-mongo.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    console.log('URI:', MONGODB_URI);

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');

    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections in database:', collections.map(c => c.name));

    // Check if shippingrates collection exists
    const hasShippingRates = collections.some(c => c.name === 'shippingrates');
    if (hasShippingRates) {
      const count = await mongoose.connection.db.collection('shippingrates').countDocuments();
      console.log(`✅ ShippingRates collection found with ${count} documents`);
    } else {
      console.log('⚠️ ShippingRates collection NOT found. You need to insert sample data.');
    }

    await mongoose.connection.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ MongoDB connection failed:');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

testConnection();
