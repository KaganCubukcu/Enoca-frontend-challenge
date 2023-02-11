import "./header.css";
import { useDispatch } from "react-redux";
import { filterText } from "../../redux/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSearchValue = (event) => {
    dispatch(filterText(event.target.value));
  };

  return (
    <div className="header-container">
      <h1>Kağan Çubukçu</h1>
      <div>
        <input
          type="text"
          onChange={handleSearchValue}
          placeholder="Search here..."
        />
      </div>
    </div>
  );
};

export default Header;
