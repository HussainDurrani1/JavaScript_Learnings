import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//         username: String,
//         email: String,
//         isActive: Boolean,
//     }
// );

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password is Required."],
        }
    }, { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// "User" will always be 'users' in a database
// Similarly, "Todo" will be "todos"