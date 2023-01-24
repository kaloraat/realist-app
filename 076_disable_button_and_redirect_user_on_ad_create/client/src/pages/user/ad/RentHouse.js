import Sidebar from "../../../components/nav/Sidebar";
import AdForm from "../../../components/forms/AdForm";

export default function RentHouse() {
  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Rent House</h1>
      <Sidebar />
      <div className="container mt-2">
        <AdForm action="Rent" type="House" />
      </div>
    </div>
  );
}
