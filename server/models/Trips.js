const {Schema, model} = require ('mongoose');


const tripSchema = new Schema ({
    tripName: {
        type: String,
        required: true
    },
    budget: {
        type: Float,
        required:true,
        
    },
    location: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required:true,
        maxLength: 500
    },
    image:{
        type:String
    },
    travelers: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdBy:{
        type: Schema.Types. ObjectId,
        ref:'User'
    }

});

const Trips=model('Trips', tripSchema);

module.exports= Trips;