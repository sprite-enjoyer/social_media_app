import ProfileRoute from "./routes/ProfileRoute";
import styles from "./styles/app.module.scss";

function App() {

  return (
    <div className={styles["main"]} >
      <ProfileRoute />
    </div>
  );
};

export default App;
