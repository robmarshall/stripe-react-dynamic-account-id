import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";

function StripeWrapper({ accountId, children }) {
  const [stripeObject, setStripeObject] = useState(null);

  // This function will re-run if the accountId prop changes.
  useEffect(() => {
    const fetchStripeObject = async () => {
      // If there is no accountId, do not run the loadStripe function.
      if (accountId) {
        const res = await loadStripe(
          "YOUR_ACCOUNT_ID",
          {
            stripeAccount: accountId
          }
        );
        // When we have got the Stripe object, pass it into our useState.
        setStripeObject(res);
      }
    };
    fetchStripeObject();
  }, [accountId]);

  // If no Stripe object, do not render the Stripe Element.
  if (!stripeObject) {
    return <p>Loading...</p>;
  }

  // Once we have the Stripe object, load everything.
  return <Elements stripe={stripeObject}>{children}</Elements>;
}

export default StripeWrapper;
