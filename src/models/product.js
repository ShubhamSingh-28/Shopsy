import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    
    product_name: {
      type: String,
      required: true,
    },

    product_price: {
      type: Number,
      required: true,
    },

    product_image: {
      type: String,
    },

    product_detail: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    Stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      default: 1,
    },
  },{
    timestamps: true
})

let product = mongoose.models.products || mongoose.model('products', productSchema)
export default product