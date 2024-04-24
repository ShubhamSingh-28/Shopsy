import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
     product_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "products",
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
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

    status: {
      type: String,
      default: "order_placed",
      required: true,
      enum: ["order_placed", "cancelled", "delivered", "pending"],
    },
}, {
    timestamps: true
})

let order = mongoose.models.order || mongoose.model('order', orderSchema)
export default order