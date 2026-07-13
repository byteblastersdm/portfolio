'use server'
import { connectToDatabase } from "@/lib/db/dbConnect";
import Contact from "@/lib/model/contact.model";
import { revalidatePath } from "next/cache";

type Contact = {
    name: string;
    email: string;
    message: string;
}
export async function addData(data: Contact) {
    try {
        await connectToDatabase();
        const contact = new Contact(data);
        await contact.save();
        revalidatePath('/message')
        return JSON.parse(JSON.stringify(contact));
    } catch (error) {
        return error;
    }
}

export async function getData() {
    try {
        await connectToDatabase();
        const contacts = await Contact.find({});
        revalidatePath('/message')
        return JSON.parse(JSON.stringify(contacts));
    } catch (error) {
        return error;
    }
}


export async function deleteData(id: string) {
    try {
        await connectToDatabase();
        const contact = await Contact.findByIdAndDelete(id);
        revalidatePath('/message')
        return JSON.parse(JSON.stringify(contact));
    } catch (error) {
        return error;
    }
}