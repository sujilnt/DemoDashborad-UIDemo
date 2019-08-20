import mongoose from 'mongoose'
const sensorSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    tags: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'tag',
      default: ['point']
    },
    events: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'event'
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
    }
  },
  { timetamp: true }
)
sensorSchema.index({ user: 1, id: 1 }, { unique: true })
export const sensor = mongoose.model('sensor', sensorSchema)
