import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target: { value: value } }) => {
        setinputValue(value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue.trim().length); 
        if(inputValue.trim().length <=1 ) return;

        // setCategories( (categories) => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
