import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, toggleProductAvailability } from "../reducers/ProductsSlice";
import AddProduct from "./AddProduct";
 
export default function ProductList() {
    const products = useSelector((state) => state.productsList.array);
    const dispatch = useDispatch();

    const handleCheckboxChange = (productId) => {
        dispatch(toggleProductAvailability(productId));
    };

    return (
        <section>
            <AddProduct products={products} />
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <button onClick={() => dispatch(deleteProduct(product))}>х</button>
                        <p>Наименование: {product.name}</p>
                        <p>Описание: {product.description}</p>
                        <p>Цена: {product.price}</p>
                        <label>Доступность
                            <input
                                type="checkbox"
                                checked={product.available}
                                onChange={() => handleCheckboxChange(product.id)}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
}
