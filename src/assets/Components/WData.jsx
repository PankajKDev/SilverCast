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
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              wrap: "column",
              alignItems: "center",
            }}
          >
            <div className="subNeo">
              <img src={data?.current?.condition?.icon || "error"} alt="" />
              <div
                style={{
                  marginTop: "15px",
                  fontSize: "3rem",
                  alignItems: "center",
                }}
                className="AQI"
              >
                {data?.current?.condition?.text || "error"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "5px",
                alignItems: "center",
              }}
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
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WData;
