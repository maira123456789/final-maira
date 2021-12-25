import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
  } = useAuth();
  return (
    <section className="login">
      <div className="login-container">
        <input
          placeholder="E-mail👤"
          className="auth-input"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="error-msg">{emailError}</p>
        <input
          placeholder="Password🔑"
          className="auth-input"
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="error-msg">{passwordError}</p>

        <div className="btn-container">
          {hasAccount ? (
            <>
              <button className="auth-btn" onClick={handleLogin}>
                Sign in
              </button>
              <p className="auth-text">
                Don't have an account?
                <span
                  className="auth-span"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="auth-btn" onClick={handleSignUp}>
                Sign up
              </button>
              <p className="auth-text">
                Have an account?{" "}
                <span
                  className="auth-span"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
        <button
          style={{
            backgroundColor: "#674ea7",
            height: "55px",
            borderRadius: "50%",
            alignItems: "center",
          }}
          onClick={authWithGoogle}
        >
          <p style={{ textAlign: "center", color: "white" }}>
            Войти с помощью
            <img
              className="google-logo"
              onClick={authWithGoogle}
              src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
              alt="google"
            />
          </p>
        </button>
      </div>
    </section>
  );
};

export default Login;
