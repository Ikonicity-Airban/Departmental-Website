import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
  },
  { timestamps: true }
);

const Course = model("Course", courseSchema);
export default Course;
