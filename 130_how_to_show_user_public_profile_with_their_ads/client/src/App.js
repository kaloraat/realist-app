import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Main from "./components/nav/Main";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountActivate from "./pages/auth/AccountActivate";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AccessAccount from "./pages/auth/AccessAccount";
import Dashboard from "./pages/user/Dashboard";
import AdCreate from "./pages/user/ad/AdCreate";
import PrivateRoute from "./components/routes/PrivateRoute";
import SellHouse from "./pages/user/ad/SellHouse";
import SellLand from "./pages/user/ad/SellLand";
import RentHouse from "./pages/user/ad/RentHouse";
import RentLand from "./pages/user/ad/RentLand";
import AdView from "./pages/AdView";
import Footer from "./components/nav/Footer";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";
import AdEdit from "./pages/user/ad/AdEdit";
import Wishlist from "./pages/user/Wishlist";
import Enquiries from "./pages/user/Enquiries";
import Agents from "./pages/Agents";
import Agent from "./pages/Agent";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/auth/account-activate/:token"
            element={<AccountActivate />}
          />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/auth/access-account/:token"
            element={<AccessAccount />}
          />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ad/create" element={<AdCreate />} />
            <Route path="ad/create/sell/house" element={<SellHouse />} />
            <Route path="ad/create/sell/land" element={<SellLand />} />
            <Route path="ad/create/rent/house" element={<RentHouse />} />
            <Route path="ad/create/rent/land" element={<RentLand />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/settings" element={<Settings />} />
            <Route path="user/ad/:slug" element={<AdEdit />} />
            <Route path="user/wishlist" element={<Wishlist />} />
            <Route path="user/enquiries" element={<Enquiries />} />
          </Route>

          <Route path="/ad/:slug" element={<AdView />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agent/:username" element={<Agent />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
