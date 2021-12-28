import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Divider from "@mui/material/Divider/Divider";
import Drawer from "@mui/material/Drawer/Drawer";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import useTheme from "@mui/material/styles/useTheme";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { DRAWERWIDTH } from "../../../consts/drawer";
import { VIEWS } from "../../../consts/paths-routers";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setDrawer } from "../../../redux/slice/drawer";
import { AppBar, DrawerHeader } from "../../../styles/drawer";

interface Props {}

const DrawerHeaderLoading = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    console.log(drawer);

    dispatch(setDrawer(true));
  };

  const handleDrawerClose = () => {
    dispatch(setDrawer(false));
  };

  return (
    <>
      <CssBaseline />
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
          <Typography variant="h6" noWrap component="div">
            Triko
          </Typography>
        </Toolbar>
        <LinearProgress color="secondary" />
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

export default DrawerHeaderLoading;
