import styles from "./MyButton.module.css";

const MyButton = (props) => {
    return (
        <button
            variant="primary"
            type={props.type || "button"}
            className={`${styles.button} ${styles.corners} ${props.className || ""} `}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default MyButton;
