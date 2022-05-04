import React, { useState } from 'react';
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    /// state (variaveis).
    const [inputData, setInputData] = useState('');

    ///metodos auxiliares.
    const handleInputChange = (e) => {
        /// pegar dados do input
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
       /// adiciona dados do formulario a função que foi passada como props
        handleTaskAddition(inputData);
    };

    ///componente retornado.
    return (
        <div className='add-task-container'>
            <input
             onChange={handleInputChange}
             value={inputData}
              className='add-task-input' 
              type="text" 
             />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

/// exportação do componente.
export default AddTask;