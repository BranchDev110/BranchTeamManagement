import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

import './index.css'
import { useState } from "react";

const TodoComponent = ({todo, updateTodo}) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleClick = () => {
    setIsChecked(!isChecked);
    updateTodo(todo.id);
  }

  const handleEdit = (e) => {
    e.stopPropagation();
  }

  const getTodoItemTextStyle = () => {
    return `todoitem__text ${todo.isCompleted && 'todoitem__text--completed'}`;
  }

  return (
    <div className="todoitem" onClick={handleClick}>
      <div className="todoitem__checkbox">
        {isChecked && <FontAwesomeIcon icon={faCheck}/>}
      </div>
      <p className={getTodoItemTextStyle()}>{todo.data}</p>
      <div className="todoitem__control">
        <button onClick={handleEdit}><FontAwesomeIcon icon={faEdit}/></button>
      </div>
    </div>
  )
}

export default TodoComponent;