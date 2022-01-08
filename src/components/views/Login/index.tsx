import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField/TextField";
import { borderRadius } from "@mui/system";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {
  addTokenUser,
  openLogin,
} from "../../../redux/slice/login/loginReducer";
import AuthenticateService from "../../../Services/AxiosAuthenticate.service";
import background from "./img/Login.png";
import logo from "./img/Logo.svg";
import "../../styles/style.css"

const styles = {
  paperContainer: {
    background: `url(${background}) no-repeat center center fixed`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },
  paperStyle: {
    padding: "24px",
    height: "312px",
    width: "328px",
    alignItems: "center",
    left: "476px",
    top: "213px",
    marginTop: "213px",
    marginBottom: "195px",
    marginLeft: "476px",
    marginRight: "476px",
    borderRadius: "12px",
    display: "flex",
  },
  buttonContainer: {
    width: "280px",
    height: "56px",
    background: "#FFA70D",
    //left: "24px",
    //top: "232px",
    border: 3,
    borderRadius: "5px",
  },
  fieldContainer: {
    width: "280px",
    height: "56px",
    borderRadius: "5px",
    border: "1px",
    order: 1,
    padding: "0px 0px 0px 16px",
  },
  logoContainer: {
    //margin: "24px 0px"
  },
};

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
    <div style={styles.paperContainer}>
      <Paper elevation={10} style={styles.paperStyle}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <img src={logo} alt="logo" style={styles.logoContainer} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={styles.fieldContainer}
              />
              <div style={{ height: "24px" }}></div>
              <TextField
                label="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                style={styles.fieldContainer}
              />
              <div style={{ height: "24px" }}></div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.buttonContainer}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Login;
