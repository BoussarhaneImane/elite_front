import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosClient } from '../../axiosClient';

const PaymentForm = ({ totalPrice, cartItems, userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      toast.error('Please provide valid card details.');
      return;
    }

    setProcessing(true);
    try {
      const { data } = await axiosClient.post(
        'https://elit-backend-6rid.onrender.com/api/create-payment-intent',
        { totalPrice }
      );

      const paymentResult = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardNumberElement,
        },
      });

      if (paymentResult.error) {
        toast.error(`Payment failed: ${paymentResult.error.message}`);
      } else {
        toast.success('Payment successful!');
        await axiosClient.post(
          'https://elit-backend-6rid.onrender.com/api/checkout',
          {
            cartItems,
            totalPrice,
            userInfo,
          }
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handlePaymentSubmit}
      className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg sm:p-8"
    >
      <div className="space-y-4">
        {/* Card Number */}
        <div className="w-full border border-black rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-gray-800">
          <CardNumberElement
            options={{
              style: {
                base: {
                  color: '#32325d',
                  fontFamily: 'Arial, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
                },
              },
            }}
          />
        </div>

        {/* Expiry Date and CVC */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex-1 border border-black rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-gray-800">
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    color: '#32325d',
                    fontFamily: 'Arial, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a',
                  },
                },
              }}
            />
          </div>
          <div className="flex-1 border border-black rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-gray-800">
            <CardCvcElement
              options={{
                style: {
                  base: {
                    color: '#32325d',
                    fontFamily: 'Arial, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <button
        type="submit"
        disabled={!stripe || processing}
        className={`p-3 h-12 sm:w-52 px-2 text-white transition duration-300 ease-in-out font-medium text-sm ${
          processing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-black hover:bg-slate-950'
        }`}
      >
        {processing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;
