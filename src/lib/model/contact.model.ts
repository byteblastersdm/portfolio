import {Schema ,model,models} from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        toLowerCase: true,
    },
    email: {
        type: String,
        required:true,
        toLowerCase: true,
    },
    message: {
        type: String,
        required:true,
    }
});

const Contact =  models.Contact || model('Contact', contactSchema);

export default Contact;


