//PropTypes체크하고 싶을때 npm install prop-types
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button
      className={styles.btn}
      //creat-react-app에서 styles도 모듀러되서 다른파일에서 쓸수있다
      //   style={{
      //     backgroundColor: "tomato",
      //     color: "white",
      //   }} //모든 요소에 css적용안되게 하고 한곳에 적용하려면 직접 넣어줘야됨
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
