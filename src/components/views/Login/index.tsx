import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField/TextField";
import { borderRadius } from "@mui/system";
import { useState } from "react";
import { HeadProvider, Title } from "react-head";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {
  addTokenUser,
  openLogin,
} from "../../../redux/slice/login/loginReducer";
import AuthenticateService from "../../../Services/AxiosAuthenticate.service";
import background from "./img/Login.png";
import logo from "./img/Logo.svg";


interface Props {}

const Login: React.FC = () => {
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
    <>
      <HeadProvider>
        <div className="Home">
          <Title>Login - Triko</Title>
        </div>
      </HeadProvider>
      <div className="paperContainer">
        <Paper className="paperStyle" elevation={10}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <img src={logo} alt="logo" className="logoContainer" />
            </Grid>
            <div style={{ height: "24px" }}></div>
            <Grid item xs={12} sm={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="fieldContainer"
                />
                <div style={{ height: "24px" }}></div>
                <TextField
                  label="password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                  className="fieldContainer"
                />
                <div style={{ height: "24px" }}></div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="buttonContainer"
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default Login;
