import styles from "../styles/componentStyles/InsideModal.module.scss";
import { ReactNode } from "react";

export interface InsideModalProps {
  children: ReactNode,
  handleOnClick: () => void,
}

const InsideModal = ({ children, handleOnClick }: InsideModalProps) => {

  return (
    <div className={styles["main"]} onClick={handleOnClick}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div >
  );
};

export default InsideModal;
