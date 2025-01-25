import React from 'react'
import { MdDelete } from "react-icons/md";

const ListItems = ({list, handleDelete, toggleComplete}) => {
    return (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.complete ? 'line-through' : 'none',
                  cursor: 'pointer',
                  flex: 1,
                }}
                onClick={() => toggleComplete(item.id)}
              >
                {item.name}
              </span>
              <MdDelete
                onClick={() => handleDelete(item.id)}
                style={{ marginLeft: '10px' }}
            />
            </li>
          ))}
        </ul>
      );
}

export default ListItems