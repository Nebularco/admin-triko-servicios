import { AccountCircle, Logout } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Menu from "@mui/material/Menu/Menu";
import useTheme from "@mui/material/styles/useTheme";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setDrawer } from "../../redux/slice/drawer";
import { closeLogin } from "../../redux/slice/login/loginReducer";
import { AppBar, DrawerHeader } from "../../styles/drawer";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Divider from "@mui/material/Divider/Divider";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import Drawer from "@mui/material/Drawer/Drawer";
import { NavLink, useNavigate } from "react-router-dom";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { VIEWS } from "../../consts/paths-routers";
import { DRAWERWIDTH } from "../../consts/drawer";

interface Props {}

const DrawerAndHeader = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  //Se usa para establecer como abierto el Drawer.
  const handleDrawerOpen = () => {
    dispatch(setDrawer(true));
  };

  //Se usa para establecer como cerrado el Drawer.
  const handleDrawerClose = () => {
    dispatch(setDrawer(false));
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAnchorEl(null);
    dispatch(closeLogin());
    navigate("/");
  };

  return (
    <>
      <AppBar position="fixed" open={drawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(drawer && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Triko
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: DRAWERWIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWERWIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {VIEWS.map((text) => (
            <NavLink
              key={text.labe}
              to={`/${text.url}`}
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                  textDecoration: "none",
                  background: isActive ? "gray" : "",
                };
              }}
            >
              <ListItem autoFocus alignItems="center">
                <ListItemText primary={text.labe} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerAndHeader;
