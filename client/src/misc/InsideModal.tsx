import styles from "../styles/componentStyles/InsideModal.module.scss";
import { ReactNode } from "react";

export interface InsideModalProps {
  component: ReactNode,
  handleOnClick: () => void,
}

const InsideModal = ({ component, handleOnClick }: InsideModalProps) => {

  return (
    <div className={styles["main"]} onClick={handleOnClick}>
      <div onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div >
  );
};

export default InsideModal;
