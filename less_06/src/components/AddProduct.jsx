import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/ProductsSlice";
import { useState } from "react";
 
export default function AddProduct({ products }) {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        available: false
    });
    
    function inputHandler(e) {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: newValue
        }));
    }
    
    function addNewProduct() {
        dispatch(addProduct({ 
            id: products.length + 1, 
            ...product, // Передаем весь объект product
            price: parseFloat(product.price)
        }));
        setProduct({
            name: '',
            description: '',
            price: '',
            available: false
        });
    }
    
    return (
        <div className="form__add-product">
            <label>Наименование
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={inputHandler}
                />
            </label>
            <label>Описание
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={inputHandler}
                />
            </label>
            <label>Цена
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={inputHandler}
                />
            </label>
            <label>Доступность
                <input
                    type="checkbox"
                    name="available"
                    checked={product.available}
                    onChange={inputHandler}
                />
            </label>
            <button onClick={addNewProduct}>Добавть</button>
        </div>
    );
}
