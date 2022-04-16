import connectDB from "../../../middleware/connectDB"
import Product from "../../../models/Product"

const handler = async (req, res) => {
    let products = [];
    const { id } = req.query;
    if (id) products = await Product.find({ id }).select("-_id -__v");
    else products = await Product.find().select("-_id -__v");
    return res.status(200).json(products)
}

export default connectDB(handler)