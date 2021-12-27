import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {
  addTokenUser,
  openLogin,
} from "../../../redux/slice/login/loginReducer";
import AuthenticateService from "../../../Services/Axios/AxiosAuthenticate.service";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  localStorage.removeItem("token");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("ingrese Email");
      return;
    }
    if (!pass.trim()) {
      console.log("ingrese contraseña");
      return;
    }
    userLogin();
  };

  const userLogin = async () => {
    try {
      var data = {
        email: email,
        password: pass,
      };
      await AuthenticateService.create(data)
        .then((response: any) => {
          const user = response;
          console.log(user);
          console.log(user.data.infosesion.token_info.accessToken);
          dispatch(addTokenUser(user.data.infosesion.token_info.accessToken));
          if (response.status === 200) {
            dispatch(openLogin());
          }
        })
        .catch((e: Error) => {
          console.log(e);
          dispatch(openLogin());
        });
    } catch (error) {
      console.log("No date");
    }
  };

  return (
    <div style={{ marginRight: "auto", marginLeft: "auto" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
        }}
      >
        <TextField
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          label="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
