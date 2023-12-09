import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import HTML404 from './screens/404html'
import AdminRouter from './screens/admin/AdminRouter'
import Dashboard from './screens/admin/AdminDashboard'
import Editor from './screens/admin/EditBlogs'
import AddBlog from './screens/admin/AddBlog'
import AppRouter from './screens/AppRouter'
import BlogPage from './screens/BlogPage'
import Deez from './screens/Deez'
import CS from './screens/CS'
import CoffeeShops from './screens/CoffeeShops'
import About from './screens/About'
import Blogs from './screens/Blogs'
import Contact from './screens/Contact'
// import PhotoGallery from './components/ImageGallery'
const router = createBrowserRouter([
  {
    path: "/*",
    element: <AppRouter />,
    errorElement: <HTML404 />,
    children: [
      { path: ":category/:id", element: <BlogPage />, },
      { path: "deez", element: <Deez />},
      { path: "cs", element: <CS />},
      { path: "coffee-shops", element: <CoffeeShops />},
      { path: "about", element: <About />},
      { path: "blogs", element: <Blogs />},
      { path: "contact", element: <Contact />},
      // { path: "test", element: <PhotoGallery images={["Rectangle.png", "Lines.png"]}/>},
    ],
  },{
    path: "/admin/*",
    element: <AdminRouter/>,
    errorElement: <HTML404/>,
    children:[
      {path: "dashboard", element: <Dashboard/>, },
      {path: "editor/:topic/:id?", element: <Editor/>, },
      {path:"addblog", element: <AddBlog/>},
    ]
  }
], {basename: "/Coffee-Thoughts/"});

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
