import React, { useEffect, useState } from "react";
import StripeWrapper from "./StripeWrapper";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

function App() {
  const [exampleAccountId, setExampleAccountId] = useState("");

  useEffect(() => {
    const fakeApiCall = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setExampleAccountId("fake_account_id_here");
    };
    fakeApiCall();
  }, []);

  return (
    <div>
      <StripeWrapper accountId={exampleAccountId}>
        <CheckoutForm />
      </StripeWrapper>
    </div>
  );
}

export default App;
