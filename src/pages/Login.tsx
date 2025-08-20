// const style = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/authSlice";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isFormValid: boolean = password.length < 6 || password.length < 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function hundleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch(
      "https://dev02.arabeeworld.com/api/v2/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceId: "1234789",
          email,
          password,
          platform: "web",
        }),
      }
    );
    const data = await res.json();

    console.log(data);

    if (!data.success) {
      alert("Email or Password is wrong");
    }

    localStorage.setItem("user", JSON.stringify(data.body));

    dispatch(setData(data.body));

    navigate("lessons");
  }

  return (
    <form onSubmit={hundleSubmit}>
      <label htmlFor="email">Username or Email</label>
      <br />
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setMail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <br />
      {password.length > 0 && isFormValid ? (
        <p style={{ color: "red" }}>Enter a valid password</p>
      ) : (
        ""
      )}
      <button disabled={isFormValid}>Login</button>
    </form>
  );
}
