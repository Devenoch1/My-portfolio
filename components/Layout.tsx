import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../pages";


const Layout = () => {
    return (
        <div className="bg-blue-300">
           <Navbar />
              <Home />  
           <Footer />   
             
        </div>
    );
}
 
export default Layout;