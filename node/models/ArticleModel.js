import mongoose from 'mongoose'
const Schema = mongoose.Schema

const conversoSchema = new Schema(
    {
        id: {type:Number},
        image: {type:String, maxlength: 800},
        likeimg: {type:String, maxlength: 800},
        title: {type:String},
        price: {type:Number},
        style: {type:String},
        quantity: {type:Number}
        },

    {collection: 'converso'}
)

export default mongoose.model('conversoModel', conversoSchema )