import { useEffect, useState } from "react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import dayjs from "dayjs";
import axios from "axios";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function UserCard({ user }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (user?._id) fetchAdCount();
  }, [user?._id]);

  const fetchAdCount = async () => {
    try {
      const { data } = await axios.get(`/agent-ad-count/${user._id}`);
      setCount(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-lg-4 p-4 gx-4 gy-4">
      <Link to={`/agent/${user.username}`}>
        <Badge.Ribbon text={`${count} listings`}>
          <div className="card hoverable shadow">
            <img
              src={user?.photo?.Location ?? Logo}
              alt={user.username}
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h3>{user?.name ?? user?.username}</h3>
              <p className="card-text">
                Joined {dayjs(user.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}
