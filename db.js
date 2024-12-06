const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ganti dengan URI MongoDB Anda
    await mongoose.connect('mongodb://localhost:27017/userDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Exit dengan status 1 jika gagal terkoneksi
  }
};

module.exports = connectDB;
