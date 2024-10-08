import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from '../components/Product'

export default function AppRoute() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Product/>}/>
            </Routes>
        </Router>
    )
}