import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import HTML404 from './screens/404html'
import Routing from './screens/admin/Routing'
import Dashboard from './screens/admin/AdminDashboard'
import AdminHome from './screens/admin/AdminHome'
import Editor from './screens/admin/EditBlogs'
import EditorLoader from './loaders/loader'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <HTML404 />,
    children: [
      // { path: "", element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },{
    path: "/admin",
    element: <Routing/>,
    errorElement: <HTML404/>,
    children:[
      {path: "dashboard", element: <Dashboard/>},
      {path: "editor/:topic/:id?", element: <Editor/>, 
        loader: EditorLoader,
      },
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
