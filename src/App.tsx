import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider  } from 'react-router-dom'
import HTML404 from './screens/404html'
import AdminRouter from './screens/admin/AdminRouter'
import Dashboard from './screens/admin/AdminDashboard'
import Editor from './screens/admin/EditBlogs'
import AddBlog from './screens/admin/AddBlog'
// import { AdminRouter } from './screens/admin/'
import { EditorLoader, DashboardLoader, adminLoader, } from './utilities/loader'
import Test from "./screens/test"
import AppRouter from './screens/AppRouter'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    errorElement: <HTML404 />,
    children: [
      // { path: "", element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },{
    path: "/admin/*",
    element: <AdminRouter/>,
    errorElement: <HTML404/>,
    children:[
      {path: "dashboard", element: <Dashboard/>, },
      {path: "editor/:topic/:id?", element: <Editor/>, 
        loader: EditorLoader,
      },
      {path: "test", element: <Test/>},
      {path:"addblog", element: <AddBlog/>},
    ]
  }
], {basename: "/Coffee-Thoughts/"});

function App() {
  return (
    // <BrowserRouter basename='/Coffee-Thoughts/'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}
    //       loader={({params})=>{
    //         console.log("here")
    //         return 1
    //       }}
    //     />
    //     <Route path="/admin/*" element={<Routing/>}/>
    //     <Route path="*" element={<HTML404 />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

export default App
