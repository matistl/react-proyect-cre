import { Routes, Route } from 'react-router-dom'
import Layout from './pages/__layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
};