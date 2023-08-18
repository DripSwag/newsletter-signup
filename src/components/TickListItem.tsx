import Tick from "../assets/icon-list.svg";

export default function TickListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4 my-2">
      <img src={Tick}></img>
      <p className="text-left">{text}</p>
    </li>
  );
}
