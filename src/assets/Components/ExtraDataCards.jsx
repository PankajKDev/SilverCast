import { useAppContext } from "../../Context";

function ExtraDataCards() {
  const { darkMode, data } = useAppContext();
  return (
    <>
      <div className="container">
        <div className="card">
          <div className={`spCard ${darkMode ? "neoColor" : "xeoColor"}`}>
            <h2 className="wowtxt">
              Precipitation:&nbsp;{data?.current?.precip_mm}&nbsp;mm
            </h2>
            <h2>
              Visibility:&nbsp;{data?.current?.vis_km}kms&#47;
              {data?.current?.vis_miles}miles
            </h2>
            <h2>UV Index:{data?.current?.uv}</h2>
            <h2 className="wowtxt">
              Cloud Coverage: {data?.current?.cloud}&#37;
            </h2>
          </div>
        </div>

        <div className="card">
          <div
            style={{ display: "flex", gap: "5px" }}
            className={`spCard ${darkMode ? "neoColor" : "xeoColor"}`}
          >
            <h1 style={{ fontWeight: "750", fontStyle: "larger" }}>AQI :</h1>
            <h2>CO: &nbsp;{data?.current?.air_quality?.co} ppm</h2>
            <h2>NO2:&nbsp;{data?.current?.air_quality?.no2} ppb</h2>
            <h2>PM 2.5:&nbsp;{data?.current?.air_quality?.pm2_5} μg/m&sup3;</h2>
            <h2>SO2:&nbsp;{data?.current?.air_quality?.so2} ppb</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExtraDataCards;
