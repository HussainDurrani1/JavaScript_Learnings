import mongoose from "mongoose";

const orderItemSchema = new Mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            default: 1,
            required: true
        }
    },
    { timestamps: true }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        orderItems: {   //  Array of different orderItems
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Canceled", "Delivered"],
            default: "Pending"
        }
    },
    { timestamps: true }
);


export const Order = mongoose.model("Order", orderSchema);