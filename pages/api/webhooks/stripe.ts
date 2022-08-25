// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from "stripe";
import Cors from 'micro-cors';
//import { buffer } from 'stream/consumers';
//import loadStripe from "stripe";

//const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!

type Data = {
  name: string
};

export const config = {
  api: {
    bodyParser: false
  }
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    //const buf = await buffer(req)
    const sig = req.headers['stripe-signature']!
/*
    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
    } catch (err: any) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    
    // Successfully constructed event
    console.log('✅ Success:', event.id)


    // Handle the event
    console.log(`Unhandled event type ${event.type}`);
    
    // Return a 200 response to acknowledge receipt of the event
    res.status(200).end('Event was received: ' + event);*/
  }
}

export default cors(webhookHandler as any);