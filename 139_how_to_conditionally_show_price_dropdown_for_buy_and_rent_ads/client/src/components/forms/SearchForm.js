import { useSearch } from "../../context/search";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";
import { sellPrices, rentPrices } from "../../helpers/priceList";

export default function SearchForm() {
  // context
  const [search, setSearch] = useSearch();

  console.log(sellPrices, rentPrices);

  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-lg-12 form-control">
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_PLACES_KEY}
              apiOptions="au"
              selectProps={{
                defaultInputValue: search?.address,
                placeholder: "Search for address..",
                onChange: ({ value }) => {
                  setSearch({ ...search, address: value.description });
                },
              }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary col-lg-2 square">Buy</button>
          <button className="btn btn-primary col-lg-2 square">Rent</button>
          <button className="btn btn-primary col-lg-2 square">House</button>
          <button className="btn btn-primary col-lg-2 square">Land</button>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle square"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp; Price
            </button>

            <ul className="dropdown-menu">
              {search.action === "Buy" ? (
                <>
                  {sellPrices.map((item) => (
                    <li key={item._id}>
                      <a className="dropdown-item">{item.name}</a>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {rentPrices.map((item) => (
                    <li key={item._id}>
                      <a className="dropdown-item">{item.name}</a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <button className="btn btn-danger col-lg-2 square">Search</button>
        </div>
      </div>
    </>
  );
}
