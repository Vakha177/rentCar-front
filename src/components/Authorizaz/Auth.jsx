import { useEffect, useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../features/applicationSlice";
import { createPortal } from "react-dom";

const modalNode = document.getElementById("modal-root");

function Auth({ setOpen }) {
  const [auth, setAuth] = useState(false);
  const [success, setSucces] = useState(false);

  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const dispatch = useDispatch();
  const signIn = useSelector((state) => state.application.signIn);
  const signUp = useSelector((state) => state.application.signUp);


  const handleAuth = () => {
    auth
      ? dispatch(register({ login: text, password, name, surname }))
      : dispatch(login({ login: text, password }));
    setSucces(true);
    setText("");
    setPassword("");
  };

  useEffect(() => {
    signIn && success && setOpen(false);
    signUp && success && setAuth(false)
  }, [signUp, signIn, success]);

  return createPortal(
    <div className="wrapper">
      <div className="form">
        <button onClick={() => setOpen(false)} className="exit">
          X
        </button>
        <h1 className="heading">{auth ? "Регистрация" : "Вход"}</h1>
        <input
          type="login"
          placeholder="login"
          className="email"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="off"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {auth && (
          <>
            <input
              type="name"
              placeholder="name"
              autoComplete="off"
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="surname"
              placeholder="surname"
              autoComplete="off"
              className="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </>
        )}

        <button onClick={handleAuth} className="sumbit-btn">
          {" "}
          {auth ? "Регистрация" : "Войти"}
        </button>

        <div onClick={() => setAuth(!auth)}>
          {auth ? (
            <p className="auth-change-text">
              Если у вас есть аккаунт то{" "}
              <span className="auth-change">войдите</span>
            </p>
          ) : (
            <p className="auth-change-text">
              Если у вас нет аккаунта{" "}
              <span className="auth-change">зарегистрируйтесь</span>
            </p>
          )}
        </div>
      </div>
    </div>,

    modalNode
  );
}

export default Auth;