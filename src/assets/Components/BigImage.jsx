import { useAppContext } from "../../Context";
import Button from "@mui/material/Button";
import WeatherImages from "./microComponents/WeatherImages";
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
          <input
            value={search}
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            sx={{
              borderRadius: "40px",
              height: "20%",
              fontSize: "13px",
              marginLeft: "5px",
              fontWeight: "800",
            }}
            color="success"
            variant="contained"
          >
            Search?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BigImage;
