import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store/store';

import './css/style.css';

import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent'

import MainPage from './components/MainPage';
import CatalogPage from './components/CatalogPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import RegistrationPage from './components/RegistrationPage';

function App() {
    
    return (
        // <Provider store={store}>
        //     <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Header />

                    <Routes >
                        <Route path="/" element={<MainPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>

                    <Footer />
                    
                </BrowserRouter>
        //     </PersistGate>
        // </Provider>
    );
}

export default App;
