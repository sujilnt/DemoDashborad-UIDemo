import mongoose from 'mongoose'
const sensorSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    sensortype: {
      type: String,
      enum: ['Temperature', 'Proximity', 'Touch'],
      required: true
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    sensor: {
      type: Boolean,
      default: true
    }
  },
  { timetamp: true }
)
sensorSchema.index({ user: 1, uid: 1 }, { unique: true })
export const Sensor = mongoose.model('sensor', sensorSchema)
