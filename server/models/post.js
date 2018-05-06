import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  nickname: { type: 'String', required: true },
  name: { type: 'String', required: true },
  color: { type: 'String', required: true },
  strength: { type: 'String', required: true },
  weakness: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);
