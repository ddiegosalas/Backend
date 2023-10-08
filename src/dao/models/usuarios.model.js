import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    pass: String,
});

const userModel = mongoose.model(userCollection, userSchema);
export {userModel};