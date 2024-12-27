import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosClient } from '../../axiosClient';
const PaymentForm = ({ totalPrice, cartItems, userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      toast.error('Please provide valid card details.');
      return;
    }

    setProcessing(true);
    try {
      const { data } = await axiosClient.post('/api/create-payment-intent', { totalPrice });
      const paymentResult = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        toast.error(`Payment failed: ${paymentResult.error.message}`);
      } else {
        toast.success('Payment successful!');
        await axiosClient.post('/api/checkout', {
          cartItems,
          totalPrice,
          userInfo,
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handlePaymentSubmit} className="payment-form">
      <h3>Informations de paiement</h3>
      <p>Veuillez entrer vos informations de paiement pour finaliser la commande.</p>
      <div className="card-element-wrapper">
        <CardElement
          options={{
            style: {
              base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
              },
            },
          }}
        />
      </div>
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;
