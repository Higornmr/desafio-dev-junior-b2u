import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  cars: {
    category: {
      Sting,
      required: true,
    },
    models: {
      name: {
        Sting,
        required: true,
      },
      brand: {
        Sting,
        required: true,
      },
      image: { String, required: true },
      year: { Number, required: true },
      description: {
        Sting,
        required: true,
      },
      owner: {
        name: {
          String,
          required: true,
        },
        email: { String, required: true },
        phone: {
          Number,
          required: true,
        },
      },
    },
  },
});
