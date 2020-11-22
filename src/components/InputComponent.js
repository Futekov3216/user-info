import { useState, memo } from 'react';

/**
 * 
 * @param {string, number} name 
 * @param {string, number} defaultValue 
 */
const InputComponent = memo(({ name, defaultValue }) => {

    const [input, setInput] = useState({})

    const handleChange = (e) => {
        const {value, name} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div className="input-wrapper">
            <input
                name={name}
                onChange={handleChange}
                value={input[name] || defaultValue}
            />
        </div>
    );
})

export default InputComponent;