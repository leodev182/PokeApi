import { Log } from "../components/Log.jsx";
import { LogIn } from "../components/LogIn.jsx";

const LogLogin = () => {
  return (
    <div style={{ display: "flex", marginTop: "5em" }}>
      <div
        style={{
          borderRight: "1px solid black",
          width: "40%",
        }}
      >
        <Log />
      </div>
      <div
        style={{
          width: "60%",
        }}
      >
        <LogIn />
      </div>
    </div>
  );
};

export default LogLogin;
