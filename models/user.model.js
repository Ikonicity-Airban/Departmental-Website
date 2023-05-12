import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    surname: String,
    student_passport: Buffer,
    name: {
        firstname: String,
        middlename: String,
    },
    reg_no: { type: String, unique: true, require: true },
    email: String,
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    home_town: String,
    mobile_phone: String,
    contact_address: String,
    year_of_graduation: Date,
    year_of_study: Date
}, {

})

const User = model('User', UserSchema)
export default User