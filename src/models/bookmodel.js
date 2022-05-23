const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

    title: { type: String, required: "Title is required", unique: true, trim: true },
    excerpt: { type: String, required: "Excerpts is required", trim: true },
    ISBN: { type: String, required: "ISBN is required", unique: true, trim: true },
    category: { type: String, required: "category is required", trim: true },
    subcategory: { type: String, required: "Subcategory is required", trim: true },
    reviews: { type: Number, default: 0 },
    deletedAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
    releasedAt: { type: Date, required: "Released date is required", trim: true },
    coverLink: { type: String, required: true, trim: true }
}, { timestamps: true })

module.exports = mongoose.model('Book_cover', bookSchema)