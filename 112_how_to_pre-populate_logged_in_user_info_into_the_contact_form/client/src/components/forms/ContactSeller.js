import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactSeller({ ad }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  // hooks
  const navigate = useNavigate();

  const loggedIn = auth.user !== null && auth.token !== "";

  useEffect(() => {
    if (loggedIn) {
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/contact-seller", {
        name,
        email,
        message,
        phone,
        adId: ad._id,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        toast.success("You enquiry has been emailed to the seller");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3>
            Contact{" "}
            {ad?.postedBy?.name ? ad?.postedBy?.name : ad?.postedBy?.username}
          </h3>

          <form onSubmit={handleSubmit}>
            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
              disabled={!loggedIn}
            ></textarea>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!loggedIn}
            />

            <button
              className="btn btn-primary mt-4 mb-5"
              disabled={!name || !email || loading}
            >
              {loggedIn
                ? loading
                  ? "Please wait"
                  : "Send enquiry"
                : "Login to send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
