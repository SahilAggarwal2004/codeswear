import mongoose from 'mongoose';

const connectDB = handler => (req, res) => {
    if (!mongoose.connections[0].readyState) mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true })
    return handler(req, res)
}

export default connectDB