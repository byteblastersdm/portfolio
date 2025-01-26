import * as yup from "yup";


//signup schema for validation
export const contactSchema = yup
.object({
    name: yup.string().required(
        "Name is required"
    ).min(3),
    email: yup.string().required(
        "Email is required"
    ),
    message: yup.string().required(
        "Message is required"
    ).min(10),
})
.required()