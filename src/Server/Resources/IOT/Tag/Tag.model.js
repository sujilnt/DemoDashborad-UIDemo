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
  tag:{
    type: Boolean,
    default: true,
  }
});
//tagSchema.index({ sensor: 1, name: 1 }, { unique: true });
export const Tag = mongoose.model('tag', tagSchema);
