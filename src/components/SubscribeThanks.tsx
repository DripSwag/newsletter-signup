import Tick from "../assets/icon-success.svg";

export default function SubscribeThanks({ email }: { email: string }) {
  return (
    <div className="h-screen w-screen text-darkSlate p-4 bg-white md:max-w-xl md:max-h-[600px] md:rounded-[40px] md:p-16">
      <div className="flex flex-col gap-8 h-4/5 justify-center">
        <img src={Tick} className="w-16"></img>
        <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
      </div>
      <button className="p-4 bg-darkSlate text-white font-bold rounded-lg w-full md:my-8 hover:bg-gradient-to-r from-[#ff5869] to-orange-500">
        Dismiss Message
      </button>
    </div>
  );
}
