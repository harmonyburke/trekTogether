import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const imgStyle = {
    backgroundImage: "url(/images/img38.jpeg",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit} id="login-form" style={imgStyle}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Email input */}
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />{" "}
        <br />
        {/* Password Input */}
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit" id="login-signup-btn">
          Login
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </section>
  );
}

export default Login;
