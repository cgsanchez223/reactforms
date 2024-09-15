import React, { useState } from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.width.trim() !== ''
        && formData.height.trim() !== ''
        && formData.backgroundColor.trim() !== '')
        {
            addBox({ ...formData });
            setFormData(INITIAL_STATE)
        }
        else {
            alert("Something is wrong")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new box</h1>
            <div className="formGroup">
                <label htmlFor="width">Width: </label>
                <input
                    id="width"
                    type="text"
                    name="width"
                    placeholder="Enter width"
                    value={ formData.width }
                    onChange={ handleChange }
                />
            </div>

            <div className="formGroup">
                <label htmlFor="height">Height: </label>
                <input
                    id="height"
                    type="text"
                    name="height"
                    placeholder="Enter height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <div className="formGroup">
                <label htmlFor="backgroundColor">Background Color: </label>
                <input
                    id="backgroundColor"
                    type="text"
                    name="backgroundColor"
                    placeholder="Enter background color"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>

            <button>Add Item</button>
        </form>
    )
}

export default NewBoxForm;