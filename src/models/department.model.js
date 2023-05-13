import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the department schema
const departmentSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    headOfDepartment: { type: String },
    coursesOffered: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
}, { timestamps: true });

const Department = model('Department', departmentSchema)
export default Department