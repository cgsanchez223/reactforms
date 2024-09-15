import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css'

function BoxList({ allBoxes }) {
    const [boxes, setBoxes] = useState(
        allBoxes.map(box => ({ ...box, id: uuidv4() }))
    );

    function addBox(newBox) {
        const boxWithId = { ...newBox, id: uuidv4() };
        setBoxes(boxes => [...boxes, boxWithId]);
    }

    function removeBox(id) {
        setBoxes(boxes => boxes.filter(b => b.id !== id))
    }

    return (
        <div className='boxList'>
            {boxes.map(box => (
                <Box
                    id={box.id}
                    key={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    remove={removeBox}
                />
            ))}
            <NewBoxForm addBox={addBox} />
        </div>
    );
}

BoxList.defaultProps = {
    allBoxes: [
        { width: "50", height: "50", backgroundColor: "blue" },
        { width: "50", height: "50", backgroundColor: "gray" }
    ]
};

export default BoxList;