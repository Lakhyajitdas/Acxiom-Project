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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaintainUser from "./pages/MaintainUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/usersignup" element={<Signup name={"user"} />} />
          <Route path="/vendorsignup" element={<Signup name={"vendor"} />} />
          <Route path="/maintainuser" element={<MaintainUser />} />

          <Route path="/adminsignup" element={<Signup name={"admin"} />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/adminlogin" element={<Login name={"admin"} />} />
          <Route path="/vendorlogin" element={<Login name={"vendor"} />} />
          <Route path="/userlogin" element={<Login name={"user"} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productstatus" element={<ProductStatus />} />
          <Route path="/requestitem" element={<RequestItem />} />
          <Route path="/success" element={<Success />} />
          <Route path="/update" element={<Update />} />
          <Route path="/user" element={<UserPortal />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/vendorpage" element={<VendorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
