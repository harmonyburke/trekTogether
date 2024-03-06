const {Schema, model} = require ('mongoose');

const tripSchema = new Schema ({
    
    location: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required:true,
        
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
    },
    dateCreated:{
        type: Date,
        required:true
    },

});

const Trips=model('Trips', tripSchema);

module.exports= Trips;