import React, { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
import HTML404 from "../404html"
import AdminHome from "./AdminHome"
import Editor from "./EditBlogs"
import Dashboard from "./AdminDashboard"
import Test from "../test"
import AddBlog from "./AddBlog"

const AdminRouter: React.FC = () => {
    const [loggedIn, setLog] = useState(false);

    useEffect(()=>{
        if (localStorage.getItem("uid") != undefined)
            setLog(true);
    })

    return(
        <Routes>
            <Route path="/" element={<AdminHome/>}/>
            <Route path="/dashboard" element={loggedIn ? <Dashboard/> : <HTML404/>}/>
            <Route path="/editor/:topic/:id?" element={loggedIn ? <Editor/> : <HTML404/>}/>
            <Route path="/addblog" element={loggedIn ? <AddBlog/> : <HTML404/>}/>
            <Route path="/*" element={<HTML404/>}/>
            <Route path="/test" element={loggedIn ? <Test/> : <HTML404/>}/>
        </Routes>
    )
}

export default AdminRouter