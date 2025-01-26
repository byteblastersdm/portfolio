'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/lib/validation/contact-schema';
import { useState } from 'react';

type Inputs = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        resolver: yupResolver(contactSchema),
        mode: 'onChange', // Enable real-time validation
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true); // Show loading state

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Message sent successfully');
                reset();
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to send message');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false); // Hide loading state
        }
    };

    return (
        <div className="flex md:w-[50%] px-5 md:px-0 w-full min-h-full flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Contact Me
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input
                                id="name"
                                {...register('name')}
                                type="text"
                                className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                                    errors.name ? 'ring-red-500' : 'ring-gray-300'
                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        </div>
                        {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                {...register('email')}
                                type="email"
                                className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                                    errors.email ? 'ring-red-500' : 'ring-gray-300'
                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        </div>
                        {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                        <div className="mt-2">
                            <textarea
                                rows={5}
                                id="message"
                                {...register('message')}
                                className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                                    errors.message ? 'ring-red-500' : 'ring-gray-300'
                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        </div>
                        {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
                    </div>

                    {/* Submit Button */}
                    {isValid && (
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading} // Disable button during loading
                                className={`flex w-full justify-center rounded-md ${
                                    isLoading
                                        ? 'bg-gray-400'
                                        : 'bg-black hover:bg-gray-900 text-white'
                                } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                                    isLoading ? 'cursor-not-allowed' : ''
                                }`}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
