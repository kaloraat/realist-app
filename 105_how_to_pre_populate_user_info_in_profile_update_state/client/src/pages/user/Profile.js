import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import Sidebar from "../../components/nav/Sidebar";

export default function Profile() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  // hook
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      setUsername(auth.user?.username);
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setCompany(auth.user?.company);
      setAddress(auth.user?.username);
      setPhone(auth.user?.address);
      setAbout(auth.user?.about);
      setPhoto(auth.user?.photo);
    }
  }, []);

  return (
    <>
      <h1 className="display-1 bg-primary text-light p-5">Profile</h1>
      <div className="container-fluid">
        <Sidebar />
        <div className="container mt-2">
          <pre>
            {JSON.stringify({
              username,
              name,
              email,
              company,
              address,
              phone,
              about,
              photo,
            })}
          </pre>
        </div>
      </div>
    </>
  );
}
