import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tijinamariam:Justintijina123@cluster0.x8jch.mongodb.net/fooddelivery')
        .then(() => console.log('DB Connected'))
        
};