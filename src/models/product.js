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
  },{
    timestamps: true
})

let product = mongoose.models.products || mongoose.model('products', productSchema)
export default product