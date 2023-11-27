import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HTML404 from "../404html"
import Login from "./Login"
import Editor from "./EditBlogs"
import Dashboard from "./AdminDashboard"

const Routing: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route 
                path="/editor/:id" 

                element={<Editor/>}
            />
            <Route path="/*" element={<HTML404/>}/>
        </Routes>
    )
}

export default Routing