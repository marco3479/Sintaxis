import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
import { GeneralData } from "../inscripcion";
require('dotenv').config()
const PASSWORD = process.env.password

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    
    const data: GeneralData = req.body;

    const rows = [
        ["name", "address", "birthdate", "city", "country", "email", "phoneNumber", "acknowledgementSource"],
        [data.name, data.address, data.birthdate, data.city, data.country, data.email, data.phoneNumber, data.acknowledgementSource]
    ];

    let csvContent = "" + rows.map(e => e.join(",")).join("\n");

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: 'sintaxisacademy@gmail.com',
            pass: PASSWORD
        }
    });

    const mailData = {
        from: 'sintaxisacademy@gmail.com',
        to: 'sintaxisacademy@gmail.com', //data.email,
        subject: `${data.name} Subscribed`,
        text: `${data.name} has subscribed to sintaxis academy`,
        attachments: [
            {
                filename: `${data.name}Subscription.csv`,
                content: csvContent,
                encoding: 'utf-8'
            }
        ],
        html: `
        <h1>${data.name} has subscribed to sintaxis academy</h1>
        <div // General
        style='
            display: grid;
            border-width: 2px;
            border-color: white;
            border-radius: 0.375rem;
            padding: 1.25rem;
            align-self: center;
        '
        >
            <span><b>Nombre:</b> ${data.name}</span>
            <span><b>Dirección:</b> ${data.address}</span>
            <span><b>Cumpleaños:</b> ${data.birthdate}</span>
            <span><b>Ciudad:</b> ${data.city}</span>
            <span><b>País:</b> ${data.country}</span>
            <span><b>Correo Electrónico:</b> ${data.email}</span>
            <span><b>Número de Teléfono:</b> ${data.phoneNumber}</span>
            <span><b>Dónde aprendió de nosotros:</b> ${data.acknowledgementSource}</span>
        </div>
        `
    }

    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.log(err)
            res.status(500).json({message: 'Error sending email'})
        } else {
            console.log(info)
            res.status(200).json({message: 'Email sent'})
        }
    } )

    console.log(req.body);


/*
    const message = new Message({
        text: 'Hello world!',
        from: 'sintaxis.academy@gmail.com',
        to: email,
        subject: 'Hello world!'
    })
    
    try {

    }

    catch (err) {
        res.status(400).end(JSON.stringify({ mssage: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Email'}))
    */
}