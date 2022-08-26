import type { NextApiRequest, NextApiResponse } from 'next'
//import Stripe from "stripe";
import Cors from 'micro-cors';
import buffer from "micro";
import { Stripe } from 'stripe';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!



const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

type Data = {
  name: string
};

export const config = {
  api: {
    bodyParser: false
  }
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  if (req.method === 'POST') {

    // @ts-ignore
    const buf = await buffer(req);
    
    let event: Stripe.Event = req.body;
    
    if (!!webhookSecret) {
      const sig = req.headers['stripe-signature']!
      try {
        event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)

      } catch (err: any) {
        // On error, log and return the error message
        console.log(`❌ Error message: ${err.message}`)
        res.status(400).send(`Webhook Error: ${err.message}`)
        return
      }
    }

    
    // Successfully constructed event
    console.log('✅ Success:', event.id)

    
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent: any = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      //case 'payment_'
      //case 'payment_method.attached':
        //const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        //break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
      }
      
      
      // Return a 200 response to acknowledge receipt of the event
      res.status(200).end('Event was received: ' + event);



  }
}

export default cors(webhookHandler as any);