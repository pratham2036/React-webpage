
import Color from './components/Pract_proj/color_cards';
import Homy from './components/Pract_proj/Home';
import { createBrowserRouter,RouterProvider } from "react-router-dom";





function App() {
  const router =createBrowserRouter([
    {
        path:"/sign",
        element:<><Color/></>
    },
    {
      path:"/",
      element:<><Homy/></>
  }
])
  return (
    <div>
<RouterProvider router={router}/>

    </div>
  );
}

export default App;
