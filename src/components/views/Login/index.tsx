import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {
  addTokenUser,
  openLogin,
} from "../../../redux/slice/login/loginReducer";
import AuthenticateService from "../../../Services/AxiosAuthenticate.service";
import background from "./img/Login.png";
import logo from "../../assets/img/Logo.svg";
import "../../../styles/login/login.css";
import Container from "@mui/material/Container/Container";
import Avatar from "@mui/material/Avatar/Avatar";
import { borderRadius } from "@mui/system";

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
    <>
      <Grid container component="main" className="root">
        <Container
          component={Paper}
          elevation={5}
          maxWidth="xs"
          sx={{ maxWidth: "328px", 
                width: "328px",
                borderRadius:"12px"}}
          className="container"
        >
          <div className="div">
            <img src={logo} alt="Avatar" className="avatar" />
            <form onSubmit={handleSubmit}>
              <TextField 
                label="Nombre de usuario"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="fieldContainer"
                id="custom-css-outlined-input"
                color="info"
                
              />
              <div style={{ height: "24px" }}></div>
              <TextField
                label="Contraseña"
                type= "password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                className="fieldContainer"
                id="custom-css-outlined-input"
                color="info"
                
              />
              <div style={{ height: "24px" }}></div>
              <Button 
                sx={{backgroundColor:"#ffa70d", color: "white",
                '&:hover': {
                  background: "#ffa70d",
                  textTransform: "uppercase"//agrego uppercase Ingresar  
                  }}}
                type="submit"
                variant="contained"
                color="primary"
                className="buttonContainer"
              >
                Ingresar
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </>
  );
};

export default Login;
