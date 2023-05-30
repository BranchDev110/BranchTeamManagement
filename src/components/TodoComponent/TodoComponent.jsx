import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCheck,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const TodoComponent = ({ todo, updateTodo, deleteTodo, editTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [editValue, setEditValue] = useState(todo.data);
  const [isEdit, setIsEdit] = useState(false);
  const editInput = useRef(null);

  useEffect(() => {
    if(isEdit) editInput.current.focus();
  }, [isEdit]);

  const handleClick = () => {
    setIsChecked(!isChecked);
    updateTodo(todo.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEdit(true);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };

  const handleUpdate = (e) => {
    setIsEdit(false);
    if(editValue !== todo.data)
      editTodo(todo.id, editValue);
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleUpdate();
    }
  }

  const getTodoItemTextStyle = () => {
    return `todoitem__text ${todo.isCompleted && "todoitem__text--completed"}`;
  };

  return (
    <div className="todoitem" onClick={handleClick}>
      <div className="todoitem__checkbox">
        {isChecked && <FontAwesomeIcon icon={faCheck} />}
      </div>
      {!isEdit ? (
        <div>
          <span className={getTodoItemTextStyle()}>
            {todo.data}
          </span>
          {todo.isEdit && <span className="editflag">Edited <FontAwesomeIcon icon={faPencil} /></span>}
        </div>
      ) : (
        <div className="todoitem__editform">
          <input
            type="text"
            className="todoitem__editinput"
            onClick={(e) => e.stopPropagation()}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={editInput}
          />
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
      <div className="todoitem__control">
        <button onClick={handleEdit} className="iconbtn">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handleDelete} className="iconbtn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TodoComponent;
