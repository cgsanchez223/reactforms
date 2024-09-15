import React from 'react';
import './Box.css';

function Box({ id, width, height, backgroundColor, remove }) {
    function handleRemove() {
        remove(id);
    }

    return (
        <div data-testid={`box-${id}`}>
            <div 
                className='box' 
                style={{ 
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: `${backgroundColor}`
            }}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;