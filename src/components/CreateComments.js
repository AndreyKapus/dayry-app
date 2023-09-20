import { useState } from "react";
import { useNotes } from "../store/store";

const CreateComments = ({ selectedItem }) => {
  const [color, setColor] = useState(null);
  const [text, setText] = useState(null);

  const addComment = useNotes((state) => state.setNote);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "color":
        setColor(value);
        break;

      case "text":
        setText(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // addComment({
    //   selectedItem: { ...selectedItem, comment: { color: color, text: text } },
    // });
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input type="color" name="color" onChange={handleChange} />
        <input
          type="text"
          name="text"
          onChange={handleChange}
          placeholder="Type comment here..."
          required=""
        ></input>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default CreateComments;
