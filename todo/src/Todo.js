import './Todo.css'

function Todo({ text, id, remove }) {
    function handleRemove() {
        remove(id);
    }

    return (
        <div>
            <span className='task'>{text} </span>
            <button className='removeTask' onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;