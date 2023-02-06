import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
/**
 * @returns component for routing 
 */
function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
};

export default Routing;
