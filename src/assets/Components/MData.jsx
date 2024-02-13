import { useAppContext } from "../../Context";
import thermo from "./Images/thermo.svg";
function MData() {
  const { darkMode, data } = useAppContext();
  return (
    <>
      <>
        <div className="HItem BoxCenter">
          <div className={`neoBox ${darkMode ? "neoColor" : "xeoColor"}`}>
            <div id="TEMPX">
              <img src={thermo} alt="" />
              <span style={{ marginRight: "-5px" }}>
                {data?.current?.temp_c !== undefined
                  ? data.current.temp_c === 0
                    ? "0"
                    : data.current.temp_c
                  : "error"}
              </span>
              °C
            </div>
            <h2 className="wowtxt">
              feels like :{data?.current?.feelslike_c || "error"}
              &deg;c
            </h2>
          </div>
        </div>
      </>
    </>
  );
}

export default MData;
