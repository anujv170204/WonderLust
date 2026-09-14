import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property.js';
import User from '../models/User.js';

dotenv.config();

const SAMPLE_PROPERTIES = [
  {
    title: 'Luxury Cliffside Villa with Private Pool',
    description: 'Breathtaking sea views, private infinity pool, chef-on-demand, and direct beach access. Perfect for families or friend getaways in North Goa.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    price: 14500,
    location: 'Goa',
    country: 'India',
    propertyType: 'Villa',
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Wi-Fi', 'Swimming Pool', 'Air Conditioning', 'Kitchen', 'Parking', 'Balcony'],
    rating: 4.95,
    numReviews: 3,
    reviews: [
      {
        name: 'Rahul Sharma',
        rating: 5,
        comment: 'Absolutely stunning villa! The infinity pool looking over the Arabian sea was unreal.',
      },
      {
        name: 'Sneha Patel',
        rating: 5,
        comment: 'Great hospitality and spotless rooms. Will definitely come back.',
      },
    ],
  },
  {
    title: 'Heritage Boutique Palace Hotel',
    description: 'Immerse in royal Rajasthani architecture, handcrafted stone archways, courtyard dining, and live traditional folk music every evening.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    price: 8500,
    location: 'Jaipur',
    country: 'India',
    propertyType: 'Hotel',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Breakfast', 'TV', 'Parking'],
    rating: 4.88,
    numReviews: 2,
    reviews: [
      {
        name: 'Amit Verma',
        rating: 5,
        comment: 'Royal treatment and delicious local breakfast included.',
      },
    ],
  },
  {
    title: 'Modern High-Rise Skyline Apartment',
    description: 'Panoramic skyline view of Mumbai, ultra-modern interior, high-speed fiber internet, and gym access located in prime Bandra West.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    price: 6200,
    location: 'Mumbai',
    country: 'India',
    propertyType: 'Apartment',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'Washing Machine', 'TV'],
    rating: 4.79,
    numReviews: 1,
    reviews: [
      {
        name: 'Pooja Iyer',
        rating: 5,
        comment: 'Super convenient location close to cafes, restaurants and airport.',
      },
    ],
  },
  {
    title: 'Tropical Beachfront Palm Resort',
    description: 'Direct step onto white sand, lush coconut groves, open-air spa, and sunset cocktail bar. Unmatched coastal relaxation.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    price: 11000,
    location: 'Goa',
    country: 'India',
    propertyType: 'Resort',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Wi-Fi', 'Swimming Pool', 'Air Conditioning', 'Breakfast', 'Parking'],
    rating: 4.85,
    numReviews: 1,
    reviews: [
      {
        name: 'Rohan Gupta',
        rating: 5,
        comment: 'Peaceful stay right on the beach. Staff is extremely courteous.',
      },
    ],
  },
  {
    title: 'Budget Comfort Business Hotel',
    description: 'Clean, secure, and hassle-free hotel rooms tailored for working professionals and travelers seeking great value in Andheri.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    price: 2900,
    location: 'Mumbai',
    country: 'India',
    propertyType: 'Hotel',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'Air Conditioning', 'TV', 'Breakfast'],
    rating: 4.65,
    numReviews: 1,
    reviews: [
      {
        name: 'Karan Mehra',
        rating: 4,
        comment: 'Best value for money near Mumbai airport.',
      },
    ],
  },
  {
    title: 'Serene Pine Forest Mountain Cottage',
    description: 'Cozy wooden cabin surrounded by Himalayan cedar and pine woods. Stone fireplace, wooden balcony, and crisp mountain fresh air.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    price: 4900,
    location: 'Manali',
    country: 'India',
    propertyType: 'Cottage',
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'Kitchen', 'Balcony', 'Parking', 'Pet Friendly'],
    rating: 4.92,
    numReviews: 2,
    reviews: [
      {
        name: 'Divya Sen',
        rating: 5,
        comment: 'Magical snow views and warmth of the fireplace. 10/10 experience.',
      },
    ],
  },
  {
    title: 'Royal Lake Pichola Palace Resort',
    description: 'Regal lakeside suites overlooking historic monuments with rooftop candlelit dinners and private boat cruise services.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    price: 13500,
    location: 'Udaipur',
    country: 'India',
    propertyType: 'Resort',
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'Swimming Pool', 'Air Conditioning', 'Breakfast', 'Balcony'],
    rating: 4.96,
    numReviews: 1,
    reviews: [
      {
        name: 'Vikas Rao',
        rating: 5,
        comment: 'Best sunset lake views anywhere in India. Highly recommended!',
      },
    ],
  },
  {
    title: 'Executive City Center Hotel',
    description: 'Upscale contemporary hotel in the heart of Connaught Place, equipped with 24/7 room service, conference lounge, and metro access.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    price: 5500,
    location: 'Delhi',
    country: 'India',
    propertyType: 'Hotel',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'Air Conditioning', 'TV', 'Breakfast', 'Parking'],
    rating: 4.74,
    numReviews: 1,
    reviews: [
      {
        name: 'Manish Kaul',
        rating: 5,
        comment: 'Super convenient for business visits. Clean and prompt service.',
      },
    ],
  },
];

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/staysphere';
    await mongoose.connect(mongoUri);
    console.log('[Seed] Connected to MongoDB.');

    // Find or create default host user
    let hostUser = await User.findOne({ role: 'host' });
    if (!hostUser) {
      hostUser = await User.findOne({});
    }

    if (!hostUser) {
      hostUser = await User.create({
        name: 'Anuj Vishwakarma',
        email: 'anujvishwakarma33033@gmail.com',
        password: 'password123',
        role: 'host',
      });
      console.log('[Seed] Created default host user: anujvishwakarma33033@gmail.com / password123');
    }

    // Attach owner and user ID to reviews
    const propertiesToInsert = SAMPLE_PROPERTIES.map((prop) => ({
      ...prop,
      owner: hostUser._id,
      reviews: prop.reviews.map((r) => ({
        ...r,
        user: hostUser._id,
      })),
    }));

    // Clear old properties & insert sample properties
    await Property.deleteMany({});
    console.log('[Seed] Cleared old properties collection.');

    const created = await Property.insertMany(propertiesToInsert);
    console.log(`[Seed] Successfully seeded ${created.length} properties into MongoDB!`);

    await mongoose.disconnect();
    console.log('[Seed] Database disconnected cleanly.');
    process.exit(0);
  } catch (error) {
    console.error(`[Seed] Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
