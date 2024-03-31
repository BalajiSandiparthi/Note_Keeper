import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  }
  function handleClick(event) {
    props.onClicked({ title, content });
    setTitle("");
    setContent("");
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
