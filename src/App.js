import "./App.css";
import Signup from "./pages/Signup";
import AddItem from "./pages/AddItem";
import AdminPage from "./pages/AdminPage";

import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductStatus from "./pages/ProductStatus";
import Products from "./pages/Products";
import RequestItem from "./pages/RequestItem";
import Success from "./pages/Success";
import Update from "./pages/Update";
import UserPortal from "./pages/UserPortal";
import VendorPage from "./pages/VendorPage";
import Vendor from "./pages/Vendor";

function App() {
  return (
    <div className="App">
      <Signup />
      <AdminPage />
      <AddItem />
      <Cart />
      <CheckOut />
      <Homepage />
      <Login />
      <Products />
      <ProductStatus />
      <RequestItem />
      <Success />
      <Update />
      <UserPortal />
      <Vendor />
      <VendorPage />
    </div>
  );
}

export default App;
