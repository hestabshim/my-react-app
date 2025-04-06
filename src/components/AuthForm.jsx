import { useState, useEffect, useContext, useRef } from "react";
import style from "../styles/ProfileForm.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useAuthForm from "../hooks/authFormHook";

const AuthForm = ({ isRegister = false }) => {

  const { data, error, submitting, successMessage, handleChange, handleSubmit } = useAuthForm(isRegister);

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style["profile-form"]}>
      <input
        ref={usernameRef}
        type="text"
        name="username"
        placeholder="Username"
        required
        value={data.username}
        onChange={handleChange}
      />
      {isRegister && (
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={data.email}
          onChange={handleChange}
        />
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        minLength="8"
        value={data.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={
          submitting ||
          data.username.trim() === "" ||
          (isRegister && data.email.trim() === "") ||
          data.password.trim() === ""
        }
      >
        Submit
      </button>
      {error && <p className={style["error"]}>{error}</p>}
      {successMessage && <p className={style["success"]}>{successMessage}</p>}
    </form>
  );
};
export default AuthForm;