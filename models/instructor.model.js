import { Schema, model } from "mongoose";

const instructorSchema = new Schema({
    name: { type: String },
    email: { type: String },
    coursesTeaching: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
}, { timestamps: true });

const Instructor = model('Instructor', instructorSchema)
export default Instructor