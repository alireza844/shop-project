import { Routes , Route, Navigate } from 'react-router-dom'
import './App.css';

//context
import ProductsContextProvider from './context/ProductsContextProvider'
import CartContextProvider from './context/CardContextProvider';

//components
import Store from './components/Store.js';
import ProductDetails from './components/shared/ProductDetails'


export default function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}