import { Log } from "../components/Log.jsx";
import { LogIn } from "../components/LogIn.jsx";
import error404 from "../assets/images/404.png";
const chari = "https://assets.stickpng.com/thumbs/5859662e4f6ae202fedf2878.png";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        backgroundImage: `url(${error404})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        marginTop: "150PX",
      }}
    >
      <div />
      <div
        style={{
          height: "42vh",
          width: " 60vh",
          backgroundImage: `url(${chari})`,
          backgroundRepeat: "no-repeat",
          display: "grid",
          placeItems: "center",
          color: "blue",
        }}
      >
        <h1>Pagina no econtrada</h1>
      </div>
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
    </div>
  );
};

export default NotFound;
