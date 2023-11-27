import React from "react"
import { Routes, Route } from 'react-router-dom'
import HTML404 from "../404html"
import AdminHome from "./AdminHome"
import Editor from "./EditBlogs"
import Dashboard from "./AdminDashboard"

const Routing: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<AdminHome/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route 
                path="/editor/:topic/:id?" element={<Editor/>}/>
            <Route path="/*" element={<HTML404/>}/>
        </Routes>
    )
}

export default Routing