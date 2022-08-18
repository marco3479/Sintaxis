import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
import { generalData } from "../inscripcion";
require('dotenv').config()
const PASSWORD = process.env.password

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    
    const data: generalData = req.body;
    // console.log(process.env)

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
        to: data.email,
        subject: `${data.name} Subscribed`,
        text: `${data.name} has subscribed sintaxis academy`,
        html: `<h1>${data.name} has subscribed sintaxis academy</h1>`
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