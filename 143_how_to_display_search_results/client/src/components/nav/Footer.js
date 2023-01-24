export default function Footer() {
  return (
    <div className="text-center p-4 bg-dark text-light mt-4">
      <h4 className="mt-4">Realist App - Buy Sell or Rent Properties</h4>
      <p className="mt-3">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
