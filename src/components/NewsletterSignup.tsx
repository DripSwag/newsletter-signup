import { useRef } from "react";
import MobileIllustration from "../assets/illustration-sign-up-mobile.svg";
import TickListItem from "../components/TickListItem";
import DesktopIllustration from "../assets/illustration-sign-up-desktop.svg";

export default function NewsletterSignup({
  handleValidSubmit,
}: {
  handleValidSubmit: Function;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(event: React.FormEvent<HTMLFormElement>) {
    handleValidSubmit(inputRef.current?.value);
    event.preventDefault();
  }

  return (
    <div className="md:max-w-5xl h-screen md:h-auto w-full bg-white md:rounded-[40px] md:flex flex-row-reverse md:p-8 md:gap-16">
      <img src={MobileIllustration} className="w-full md:hidden"></img>
      <img
        src={DesktopIllustration}
        className="flex-1 hidden flex-initial md:flex w-full max-w-[400px]"
      ></img>
      <div className="px-4 py-8 md:p-0 flex flex-col gap-4 text-darkSlate md:text-center md:justify-center grow md:px-8">
        <h1 className="font-black text-4xl md:text-6xl">Stay Updated!</h1>
        <p className="text-left">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <TickListItem text="Product discovery and building what matters" />
          <TickListItem text="Measuring to ensure updates are a success" />
          <TickListItem text="And much more!" />
        </ul>
        <form
          className="flex flex-col gap-2"
          onSubmit={(event) => {
            handleClick(event);
          }}
        >
          <label className="font-bold">Email Address</label>
          <input
            type="email"
            placeholder="email@company.com"
            className="py-4 px-6 border-2 border-grey rounded-lg"
            required={true}
            ref={inputRef}
          ></input>
          <button
            type="submit"
            className="text-white rounded-lg bg-darkSlate font-bold py-4 my-4 hover:bg-gradient-to-r from-[#ff5869] to-orange-500"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
