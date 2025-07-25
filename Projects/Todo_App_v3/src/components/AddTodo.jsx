function AddTodo({ onNewItem }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => onNewItem("a", "b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
