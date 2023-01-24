import Sidebar from "../../../components/nav/Sidebar";
import AdForm from "../../../components/forms/AdForm";

export default function SellLand() {
  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Sell Land</h1>
      <Sidebar />
      <div className="container mt-2">
        <AdForm action="Sell" type="Land" />
      </div>
    </div>
  );
}
