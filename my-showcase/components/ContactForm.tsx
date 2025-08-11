"use client";

import { useState } from 'react';
import { type FormData } from '@/lib/types';

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Sending form data:", formData);

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error("Server error:", result);
                alert(result.message || 'Помилка при відправці форми');
                return;
            }

            setFormData({ name: '', email: '', message: '' });
            alert(result.message || 'Повідомлення успішно відправлено!');
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Виникла помилка, спробуйте ще раз.');
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 border border-orange-200 self-stretch flex flex-col"
        >
            <h1 className="text-3xl font-bold text-orange-800 mb-6">Contact Me</h1>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="mt-auto">
                <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-200"
                >
                    Send
                </button>
            </div>
        </form>
    );
}

export default ContactForm;