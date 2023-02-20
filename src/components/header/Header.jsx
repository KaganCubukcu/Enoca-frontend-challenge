import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { filterText } from "../../redux/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSearchValue = (event) => {
    dispatch(filterText(event.target.value));
  };
  const selectedCategory = useSelector(
    (state) => state.filterSlice.selectedCategory
  );
  return (
    <div className="header-container">
      <h1>Kağan Çubukçu</h1>
      <div>
        <input
          type="text"
          onChange={handleSearchValue}
          placeholder="Search here..."
          style={{
            display: selectedCategory === "" ? "none" : "flex",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
