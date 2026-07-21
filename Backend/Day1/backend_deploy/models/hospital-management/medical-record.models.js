import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        // Relationships / References
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
            index: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
            index: true,
        },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
            index: true,
        },

        // Record Information
        recordNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        visitDate: {
            type: Date,
            default: Date.now,
            required: true,
        },

        // Clinical Data
        diagnosis: {
            type: String,
            required: true,
            trim: true,
        },
        symptoms: [
            {
                type: String,
                trim: true,
            },
        ],
        notes: {
            type: String,
            trim: true,
        },

        // Vitals
        vitals: {
            bloodPressure: { type: String, trim: true }, // e.g., "120/80"
            heartRate: { type: Number }, // bpm
            temperature: { type: Number }, // Celsius or Fahrenheit
            weight: { type: Number }, // kg
        },

        // Treatment & Plan
        prescriptions: [
            {
                medicineName: { type: String, required: true, trim: true },
                dosage: { type: String, required: true, trim: true }, // e.g., "Once daily"
                duration: { type: String, trim: true }, // e.g., "7 days"
            },
        ],
        labTests: [
            {
                testName: { type: String, trim: true },
                status: {
                    type: String,
                    enum: ["Pending", "Completed", "Cancelled"],
                    default: "Pending",
                },
                result: { type: String, trim: true },
            },
        ],

        // Billing & Admin
        status: {
            type: String,
            enum: ["Active", "Archived", "Confidential"],
            default: "Active",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Indexing for faster search queries
medicalRecordSchema.index({ visitDate: -1 });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);