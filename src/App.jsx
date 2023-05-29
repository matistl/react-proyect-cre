import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" key="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
