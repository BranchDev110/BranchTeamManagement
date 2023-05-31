import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoComponent } from "../../components/TodoComponent";
import {
  add,
  revert,
  remove,
  removeItem,
  edit,
} from "../../store/slice/todoSlice";

import "./index.css";

const TodoContainer = () => {
  const [newTodo, setNewTodo] = useState("");
  const [activeTodo, setActiveTodo] = useState([]);
  const [showMethod, setShowMethod] = useState(0);

  const todo = useSelector((state) => state.todo.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (showMethod === 0) {
      setActiveTodo(todo.filter((item) => item.isDeleted === false));
    } else if (showMethod === 1) {
      setActiveTodo(
        todo.filter(
          (item) => item.isDeleted === false && item.isCompleted === false
        )
      );
    } else {
      setActiveTodo(
        todo.filter(
          (item) => item.isDeleted === false && item.isCompleted === true
        )
      );
    }
  }, [showMethod, todo]);

  const handleNewTodo = () => {
    if (!!newTodo) {
      dispatch(add(newTodo));
      setNewTodo("");
    }
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleUpdateTodo = (id) => {
    dispatch(revert(id));
  };

  const handleDeleteTodo = () => {
    dispatch(remove());
  };

  const getControlClass = (id) => {
    return showMethod === id ? "btn btn--selected" : "btn";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNewTodo();
    }
  };

  const handleEditTodo = (id, newData) => {
    dispatch(edit({ id, data: newData }));
  };

  const handleDeleteTodoItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="todo__container">
      <div className="todo__header">
        <h2>Todo App</h2>
        <p>{`${
          todo
            .filter((item) => !item.isDeleted)
            .filter((item) => item.isCompleted).length
        } todo completed of ${
          todo.filter((item) => !item.isDeleted).length
        }`}</p>
      </div>
      <div className="todo__body">
        <div className="todo__control">
          <div className="todo__displaycontrol">
            <button
              onClick={() => setShowMethod(0)}
              className={getControlClass(0)}
            >
              All
            </button>
            <button
              onClick={() => setShowMethod(1)}
              className={getControlClass(1)}
            >
              Active
            </button>
            <button
              onClick={() => setShowMethod(2)}
              className={getControlClass(2)}
            >
              Completed
            </button>
          </div>

          <div className="todo__managementcontrol">
            <input
              type="text"
              value={newTodo}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleNewTodo} className="btn btn-primary">
              Add
            </button>
            <button onClick={handleDeleteTodo} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <ul className="todo__list">
          {activeTodo.map((item) => (
            <TodoComponent
              todo={item}
              key={`todoitem-${item.id}`}
              updateTodo={handleUpdateTodo}
              editTodo={handleEditTodo}
              deleteTodo={handleDeleteTodoItem}
            />
          ))}
        </ul>
      </div>
      <div className="todo__footer"></div>
    </div>
  );
};

export default TodoContainer;

/*
 {
   id: 1,
   content: '',
   isComplete: true,
   isDeleted: true
 }
 */
