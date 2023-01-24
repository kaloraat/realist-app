import { useSearch } from "../../context/search";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";

export default function SearchForm() {
  // context
  const [search, setSearch] = useSearch();

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
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary col-lg-2">Buy</button>
        <button className="btn btn-primary col-lg-2">Rent</button>
        <button className="btn btn-primary col-lg-2">House</button>
        <button className="btn btn-primary col-lg-2">Land</button>
        <button className="btn btn-primary col-lg-2">Price</button>
        <button className="btn btn-danger col-lg-2">Search</button>
      </div>
    </>
  );
}
