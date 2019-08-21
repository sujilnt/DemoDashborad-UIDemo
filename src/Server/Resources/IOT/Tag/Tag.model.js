import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'point'
  },
  sensorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'sensor',
    required: true
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
})
tagSchema.index({ sensor: 1, name: 1 }, { unique: true })
export const Tag = mongoose.model('tag', tagSchema)
