import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],

    shippingAdress: {
      address: 
      {
        type: String,
        required: true,
      },
      city:
      {
        type: String,
        required: true,
      },
      postalCode:
      {
        type: String,
        required: true,
      },
      country:
      {
        type: String,
        required: true,
      },
    },

    taxPrice: {
      type: Number,
      required: true,
      defualt: 0.0
    },
    paymentResult: {
    id:{ type: String},
    status:{ type: String},
    updateTime:{ type: String},
    email_address:{ type: String},
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    
    shippingPrice: {
      type: Number,
      required: true,
      defualt: 0.0
    },
    
    totalPrice: {
      type: Number,
      required: true,
      defualt: 0.0
    },
    isPaid:{
        type:Boolean,
        required: true,
        defualt: false
    },
    paidAt:{
        type: Date
    },
    isDelivered:{
        type: Boolean,
        required: true,
        defualt: false
    },
    deliveredAt:{
        type: Date
    }
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
