import {HeroCard} from '../components';
import {useForm} from '../hooks/useForm';

export const SearchPage = () => {

  const {searchText, onInputChange} = useForm({
    searchText: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    console.log({searchText});
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h3>Searching</h3>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h3>Results</h3>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>'ABC...'</b>
          </div>

          {/* <HeroCard/> */}

        </div>
      </div>
      
    </>
  )
}
