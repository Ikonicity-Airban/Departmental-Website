import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    // surname: String,
    // student_passport: Buffer,
    // name: {

    //     firstname: String,
    //     middlename: String,
    // },
    // reg_no: { type: String, unique: true, require: true },
    email: String,
    password: String,
    course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    // sex: {
    //     type: String,
    //     enum: ['male', 'female']
    // },
    // home_town: String,
    // mobile_phone: String,
    // contact_address: String,
    // year_of_graduation: Date,
    // year_of_study: Date
  },
  {
    timestamps: true,
  }
);

// UserSchema.virtual("course", {
//   ref: "Course",
//   localField: "course",
//   foreignField: "student",
// });
const Student = model("Student", UserSchema);
export default Student;
