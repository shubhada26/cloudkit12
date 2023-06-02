import mongoose from 'mongoose';
const foodOrder= new mongoose.Schema({
    username:{
        type: String,
        required:true,
    }, 
    phone:{
        type: String,
    },
    email:{
        type: String,
        required:true,
    }, 
    gender:{
        type: String,
    },
    
}, {timestamps: true})

export default mongoose.model('Appointments', appointMentSchema)