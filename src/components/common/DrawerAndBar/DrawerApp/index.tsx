import Drawer from "@mui/material/Drawer/Drawer";
import IconButton from "@mui/material/IconButton/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DRAWERWIDTH } from "../../../../consts/drawer";
import { DrawerHeader } from "../../../../styles/drawer/drawerHeader";
import List from "@mui/material/List/List";
import useTheme from "@mui/material/styles/useTheme";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { setDrawer } from "../../../../redux/slice/drawer";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { VIEWS } from "../../../../consts/paths-routers";
import "../../../../styles/drawer/drawer.css";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import Navitem from "./Nav-item";

interface Props {}

const DrawerApp = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const handleDrawerClose = () => {
    dispatch(setDrawer(false));
  };

  return (
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
      <DrawerHeader className="drawer-container">
        <h3 className="title-drawer-header">Operación actual</h3>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List>
        {VIEWS.map((item, index) => (
          <Navitem
            key={index}
            href={`/${item.url}`}
            title={item.labe}
            icon={<item.icon />}
          ></Navitem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerApp;
