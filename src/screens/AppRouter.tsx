import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogPage from './BlogPage';
import Deez from './Deez';
import CS from './CS';
import CoffeeShops from './CoffeeShops';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
// import PhotoGallery from '../components/ImageGallery';

const AppRouter:React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:category/:id" element={<BlogPage/>}/>
            <Route path="/deez" element={<Deez/> }/>
            <Route path="/cs" element={<CS/>}/>
            <Route path="/coffee-shops" element={<CoffeeShops/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/test" element={<PhotoGallery images={["Rectangle.png", "Lines.png"]}/>}/> */}
        </Routes>
    )
}

export default AppRouter;