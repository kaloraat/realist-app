import { useEffect, useState } from "react";
import axios from "axios";
import AdCard from "../components/cards/AdCard";

export default function Agents() {
  // state
  const [agents, setAgents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const { data } = await axios.get("/agents");
      setAgents(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Agents</h1>
      <div className="container">
        <div className="row">
          {agents?.map((agent) => (
            <h1>{agent.username}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
