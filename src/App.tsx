import SubscribeThanks from "./components/SubscribeThanks";
import NewsletterSignup from "./components/NewsletterSignup";
import { useCallback, useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const handleValidSubmit = useCallback(
    (inputEmail: string) => {
      setSubmitted(true);
      setEmail(inputEmail);
    },
    [submitted]
  );

  return (
    <main className="font-roboto bg-charcoal h-full min-h-screen flex justify-center items-center md:px-4">
      {submitted ? (
        <SubscribeThanks email={email} />
      ) : (
        <NewsletterSignup handleValidSubmit={handleValidSubmit} />
      )}
    </main>
  );
}

export default App;
