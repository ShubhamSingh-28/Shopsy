import  mongoose, { Schema } from "mongoose";


const CategorySchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    
},{timestamps:true})

const Category = mongoose.models.Category || mongoose.model("Category",CategorySchema)
export default Category