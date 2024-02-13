import AQImage from "./Images/aqi.svg";
import Wind from "./Images/wind.svg";
import Humid from "./Images/humid.svg";
import { useAppContext } from "../../Context";

function WData() {
  const { data, darkMode } = useAppContext();

  return (
    <>
      <div
        style={{ margin: "auto" }}
        className={`HItem BoxCenter neoBox ${
          darkMode ? "neoColor" : "xeoColor"
        }`}
      >
        <div className={`neoBox${darkMode ? "neoColor" : "xeoColor"}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div className="subNeo">
              <img src={data?.current?.condition?.icon || "error"} alt="" />
              <div
                style={{
                  marginTop: "15px",
                  fontSize: "3rem",
                }}
                className="AQI"
              >
                {data?.current?.condition?.text || "error"}
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              className="subNeo"
            >
              <h2 className="wowtxt">
                Wind Direction: {data?.current?.wind_dir}&nbsp;
              </h2>
              <h2 className="wowtxt">
                Humidity: {data?.current?.humidity} &#37;
              </h2>
              <h2 className="wowtxt">
                Pressure: {data?.current?.pressure_mb}&nbsp;mHa
              </h2>
              <h2 className="wowtxt">
                Wind Speed: {data?.current?.wind_kph}kmph&#47;
                {data?.current?.wind_mph}mph
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WData;
