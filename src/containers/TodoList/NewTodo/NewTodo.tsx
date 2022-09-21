import { useState } from "react";
import "./NewTodo.css";

export default function NewTodo() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <div className="NewTodo">
      <h1>Add a Todo</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        rows={4}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button onClick={() => alert("Submitted")}>Submit</button>
    </div>
  );
}
