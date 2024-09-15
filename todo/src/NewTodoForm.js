import { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({ addTask }) => {
    const INITIAL_STATE = {
        text: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.text.trim() !== '') {
            formData.props = {text: formData.text}
            addTask(formData);
            setFormData(INITIAL_STATE)
        } else {
            alert('Enter a task!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Add new to-do</label>
            <input
                id="task"
                type="text"
                name="text"
                placeholder="Task"
                value={formData.text}
                onChange={handleChange}
            />
            <button className='addTask'>Add</button>
        </form>
    )
}

export default NewTodoForm;