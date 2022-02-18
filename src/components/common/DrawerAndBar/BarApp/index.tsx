import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography/Typography";
import { AppBar } from "../../../../styles/bar/appBar";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { setDrawer } from "../../../../redux/slice/drawer";
import logo from "../../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../../../../styles/theme";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

interface Props {}

const BarApp = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  //const handleDrawerOpen = () => {
    //dispatch(setDrawer(true));
  //};

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: "#0A214C",
        fontWeight: "400",
        fontSize: "12px",
        letterSpacing: "0.084px",
        width: "24px",
        height: "24px",
        alignItems: "center",
        textAlign: "center",
      },
      children: `${name.substring(0, 1)} ${name.substring(1, 2)}`,
    };
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <AppBar 
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: "64px",
        "& .MuiToolbar-root": {
          padding: "0px 24px",
        },
      }}
    >
      <Toolbar>
        <Typography component= "div" sx = {{flexGrow: 1}}>
          <img
            src={logo}
            alt="logo"
            style={{width: "90px", height: "45.53"}}
          />
        </Typography>
        <Container sx={{ display: "inline-block", width: "237px" }}>
          <div className="user">
            <Typography component="div" style={{ display: "inline-block" }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{
                    background: "#83CFEF",}}>
                  </Avatar>
                </Stack>
              
              </IconButton>
            </Typography>
            <Typography
              component="div"
              style={{
                marginLeft: "10px",
                display: "inline-block",
                fontWeight: "500px",
                fontSize: "14px",
                letterSpacing: "0.15px",
                color: "#000000",
                lineHeight: "24px",
                fontStyle: "normal",
              }}
            >
              admin@triko.com
            </Typography>
          </div>
        </Container>
        
      </Toolbar>
    </AppBar>
  );
};

export default BarApp;
