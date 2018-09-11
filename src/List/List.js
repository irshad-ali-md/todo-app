import React from 'react';
import './List.css';

const List = (props) => {
    return(
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index} className="ul">
                            {item}
                            <button 
                                onClick={() => props.delete(index)} 
                                className="Button">Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;