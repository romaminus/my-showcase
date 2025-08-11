import { NextResponse } from 'next/server';

const BIN_ID = process.env.JSONBIN_BIN_ID;
const API_KEY = process.env.JSONBIN_API_KEY;

export async function POST(request: Request) {
    console.log("BIN ID:", BIN_ID);
    console.log("API KEY loaded:", !!API_KEY);

    if (!BIN_ID || !API_KEY) {
        console.error('Missing JSONBIN env:', { BIN_ID: !!BIN_ID, API_KEY: !!API_KEY });
        return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    try {
        // Парсимо JSON одразу
        const body = await request.json();
        console.log("Parsed body:", body);

        const { name, email, message } = body;

        if (!name || !email) {
            return NextResponse.json({ message: "Всі поля обов'язкові" }, { status: 400 });
        }

        // 1) Читаємо поточний вміст біну
        const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': API_KEY },
        });

        if (!getRes.ok) {
            const txt = await getRes.text();
            console.error('JSONBin GET failed:', getRes.status, txt);
            return NextResponse.json({ message: "Помилка читання з JSONBin" }, { status: 502 });
        }

        const getData = await getRes.json();
        const contacts = Array.isArray(getData.record) ? getData.record : [];

        // 2) Додаємо новий контакт
        const newContact = {
            id: Date.now().toString(),
            name,
            email,
            message: message ?? '',
        };
        contacts.push(newContact);

        // 3) Оновлюємо bin
        const putRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY,
            },
            body: JSON.stringify(contacts),
        });

        if (!putRes.ok) {
            const txt = await putRes.text();
            console.error('JSONBin PUT failed:', putRes.status, txt);
            return NextResponse.json({ message: "Помилка запису в JSONBin" }, { status: 502 });
        }

        return NextResponse.json({ message: 'Контакт успішно додано' }, { status: 201 });

    } catch (error) {
        console.error('Save contact error:', error);
        return NextResponse.json({ message: 'Помилка сервера' }, { status: 500 });
    }
}
