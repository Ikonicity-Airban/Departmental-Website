import mongoose from "mongoose";

export default async function connect(uri) {
    try {
        mongoose.set("strictQuery", false)
        const { connection } = await mongoose.connect(uri);
        console.log(`${connection.host} has connected to the ${connection.name} database sucessfully`)
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}