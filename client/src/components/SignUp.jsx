import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const Signup = (user) => {
  const [addUser, { data: newUser }] = useMutation(ADD_USER);

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({
        variables: {
          email,
          username,
          password,
        },
      });
      console.log("New User added!");
      window.location.href="/login?"
    } catch (err) {
      console.error("Error creating user.", err);
    }
  };

  const imgStyle = {
    backgroundImage: "url(/images/img1.jpeg",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <form id="signUp-container" onClick={handleSubmit} action="/signup" style={imgStyle}>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Name input */}
        <input
          className="input"
          type="text"
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => setUsername(e.target.value)}
          required
        />{" "}
        <br />
        <input
          className="input"
          type="email"
          placeholder="Email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        {/* Password Input */}
        <input
          className="input"
          type="password"
          placeholder="Password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <button type="submit" id="login-signup-btn" >
          Sign Up
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </section>
  );
};

export default Signup;
