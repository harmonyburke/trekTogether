import "../style/auth.css";

const imgStyle = {
  backgroundImage: "url(/images/img38.jpeg",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Auth = () => {
  return (
    <section>
      <form style={imgStyle} id="auth-container" className="login">
        <button id="login" className="auth-btn" formAction="/login">
          Login
        </button>{" "}
        <br />
        <button id="signup" className="auth-btn" formAction="/signup">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Auth;
