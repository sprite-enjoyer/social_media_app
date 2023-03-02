import SignInRoute from "./routes/SignInRoute";
import styles from "./styles/app.module.scss";

function App() {

  return (
    <div className={styles["main"]} >
      <SignInRoute />
    </div>
  );
};

export default App;
