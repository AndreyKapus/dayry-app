const CreateNote = () => {
  return (
    <div>
      <h2>Items</h2>
      <form>
        <label className="visually-hidden">Note</label>
        <input type="text" placeholder="Type name here" required />

        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default CreateNote;
