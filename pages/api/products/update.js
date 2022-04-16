import connectDB from "../../../middleware/connectDB"
import Product from "../../../models/Product"

const handler = (req, res) => {
    try {
        if (req.method !== 'PUT' || !req.body) return res.status(400).json({ error: 'Bad Request!' })
        req.body.forEach(async ({ id, name, description, image, category, title, price, sizes, availableQuantity }) => {
            await Product.findOneAndUpdate({ id }, { id, name, description, image, category, title, price, sizes, availableQuantity });
        });
        return res.status(200).json({ success: true })
    } catch { return res.status(500).json({ error: 'Internal Server Error!' }) }
}

export default connectDB(handler)