import mongoose from "mongoose";

const connectToMongoDb = async () => {
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Error in connecting db: ",error);
}
}

export default connectToMongoDb