import mongoose from 'mongoose'
const userschema = new mongoose.schema(
  {
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamp: true }
)

export const User = mongoose.model('user', userschema)
