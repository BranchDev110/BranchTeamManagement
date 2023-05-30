import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoComponent } from "../../components/TodoComponent";
import { add, revert, remove } from "../../store/slice/todoSlice";

const TodoContainer = () => {
  const [newTodo, setNewTodo] = useState("");
  const [activeTodo, setActiveTodo] = useState([]);
  const [showMethod, setShowMethod] = useState(0);

  const todo = useSelector((state) => state.todo.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if(showMethod === 0) {
      setActiveTodo(todo.filter((item) => item.isDeleted === false));
    } else if(showMethod === 1) {
      setActiveTodo(todo.filter((item) => item.isDeleted === false && item.isCompleted === false))
    } else {
      setActiveTodo(todo.filter((item) => item.isDeleted === false && item.isCompleted === true))
    }
  }, [showMethod, todo]);

  const handleNewTodo = () => {
    dispatch(add(newTodo));
    setNewTodo("");
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleUpdateTodo = (id) => {
    dispatch(revert(id));
  }

  const handleDeleteTodo = () => {
    dispatch(remove());
  }

  return (
    <div className="todo__container">
      <button onClick={() => setShowMethod(0)}>All</button>
      <button onClick={() => setShowMethod(1)}>Active</button>
      <button onClick={() => setShowMethod(2)}>Completed</button>

      <button onClick={handleNewTodo}>Add</button>
      <input type="text" value={newTodo} onChange={handleChange}/>
      <button onClick={handleDeleteTodo}>Delete</button>
      <ul>
        {
          activeTodo.map(item => <TodoComponent todo={item} key={`todoitem-${item.id}`} updateTodo={handleUpdateTodo}/>)
        }
      </ul>
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