import { useAppContext } from "../../Context";
import Button from "@mui/material/Button";
import WeatherImages from "./microComponents/WeatherImages";
import searchIcon from "../Components/Images/searchIcon.svg";
function BigImage() {
  const { data, search, setSearch, fetchData } = useAppContext();
  const handleSearch = () => {
    fetchData();
  };
  return (
    <div className="big-image-container">
      <img
        style={{ backgroundImage: `url(${WeatherImages()})` }}
        alt=""
        className="background-image"
      />
      <div className="overlay">
        <div className="bigContainer">
          <p className="big-text">{data?.location?.name}</p>
          <span
            style={{
              color: "white",
              fontWeight: "800",
              fontSize: "larger",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 40)",
            }}
          >
            {data?.location?.region}
          </span>

          <form
            style={{ display: "flex", alignItems: "center" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              value={search}
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              sx={{
                borderRadius: "10px",
                height: "20%",
                fontSize: "13px",
                marginLeft: "3px",
                fontWeight: "800",
              }}
              color="success"
              variant="contained"
            >
              <img src={searchIcon} alt="s" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BigImage;
