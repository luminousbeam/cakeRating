const mongoose = require('mongoose');

const reviewSchema= new mongoose.Schema
({
    rating: Number,
    comment: String,
}, { timestamps: true })

const cakeSchema = new mongoose.Schema
({
    cakeName: String,
    bakerName: String,
    url: String,
    reviews: [reviewSchema]
}, { timestamps: true })

const cake = mongoose.model('cake', cakeSchema);
const review = mongoose.model('review', reviewSchema);

module.exports = {
    cake: cake,
    review: review
}