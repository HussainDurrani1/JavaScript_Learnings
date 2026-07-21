import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema(
    {
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        },
        timeInhours: {
            type: Number,
            required: true,
        },
        fromTime: {
            required: true,
            hours: { type: Number, min: 0, max: 23 },
            minutes: { type: Number, min: 0, max: 59 }
        },
        toTime: {
            required: true,
            hours: { type: Number, min: 0, max: 23 },
            minutes: { type: Number, min: 0, max: 59 }
        },
        days: [
            {
                type: String,
                required: true,
                enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            }
        ]
    },
    { timestamps: true }
);


const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        worksInHospitals: {
            type: [hospitalHoursSchema],
            required: true,
        }
    },
    { timestamps: true }
);


export const Doctor = mongoose.model("Doctor", doctorSchema);