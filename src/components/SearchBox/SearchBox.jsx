import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);

  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input onChange={(e) => dispatch(changeFilter(e.target.value))} value={searchTerm} type="text" />
    </div>
  );
};

export default SearchBox;
