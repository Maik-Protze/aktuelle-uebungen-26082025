import Image from "next/image";
import { Todo } from "./components/Todo";

export default function Home() {
  return (
    <div className ="page">
      <h1>Todo List (worldwide)</h1>
      <ul className={"list"}>
        <h1>Todo List (worldwide)</h1>
        <li>
          <Todo todo={{
            text: "Kochen",
            id: 3,
          }} />
        </li>
      </ul>
    </div>
  );
}
