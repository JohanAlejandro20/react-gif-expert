import { useState } from "react"
import { AddCategory,GifGird } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Billie eilish'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                // setCategories = {setCategories}
                onNewCategory={(valueInput) => onAddCategory(valueInput)}
            />


            {categories.map(category =>
                <GifGird key={category} category={category} />
            )}

        </>
    )
}
