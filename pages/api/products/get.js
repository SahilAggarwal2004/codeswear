import connectDB from "../../../middleware/connectDB"
import Product from "../../../models/Product"

const handler = async (req, res) => {
    let products = [];
    let { id, category } = req.query;
    if (id && category) products = await Product.find({ id, category }).select("-_id -__v");
    else if (category) products = await Product.find({ category }).select("id name image price title -_id");
    else if (id) products = await Product.find({ id }).select("-_id -__v");
    else products = await Product.find().select("-_id -__v");
    return res.status(200).json(products)
}

export default connectDB(handler)