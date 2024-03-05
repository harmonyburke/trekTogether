const {Schema, model} = require ('mongoose');

const tripSchema = new Schema ({
    tripName: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
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
        type:Stringm
    },
    travelers: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});

const Trips=mongoose.model('Trips', tripSchema);

module.exports= Trips;