import styles from "./MyButton.module.css";

const MyButton = (props) => {
    return (
        <button
            variant="primary"
            type={props.type}
            className={`${styles.button} ${styles.corners} ${props.className} `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default MyButton;
