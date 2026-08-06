import React from "react";

function Loginpage({ goToSignup, onAuthSubmit }) {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "350px",
        width: "700px",
        padding: "20px",
        margin: "50px auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login Page</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        onAuthSubmit();
      }}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>

        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <br />

        <div>
          <label>E-mail: </label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            required
          />
        </div>

        <br />

        <div>
          <label>Remember me </label>
          <input type="checkbox" />
        </div>

        <br />

        <button type="submit">Login</button>

        <button
          type="button"
          onClick={goToSignup}
          style={{ marginLeft: "15px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Loginpage;

