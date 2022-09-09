import React from "react";

function TodoForm({ handleSubmit, todo, editId, setTodo }) {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Enter your item"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit">{editId ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

export default TodoForm;
