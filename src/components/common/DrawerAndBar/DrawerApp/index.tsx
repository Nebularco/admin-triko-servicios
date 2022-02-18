import Drawer from "@mui/material/Drawer/Drawer";
import { DRAWERWIDTH } from "../../../../consts/drawer";
import { DrawerHeader } from "../../../../styles/drawer/drawerHeader";
import List from "@mui/material/List/List";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { VIEWS } from "../../../../consts/paths-routers";
import "../../../../styles/drawer/drawer.css";
import Navitem from "./component/Nav-item";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";

interface Props {}

const DrawerApp = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Drawer
    variant = "permanent"
      sx={{
        width: DRAWERWIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: DRAWERWIDTH, boxSizing: "border-box" },
        [`& .MuiSvgIcon-root`]: { fontSize: "23px" },
        }}
    >
      <Toolbar />
      <DrawerHeader sx= {{ display: "block", marginTop: "20px"}} >
        <Typography
          sx ={{
            fontSize: "22px",
            fontWeight: 500,
            fontFamily: "Roboto",
            fontStyle: "normal",
            lineHeight: "28px",
          }}
          className= "ListItemText"
          >
            Operación actual
          </Typography>
      </DrawerHeader>
        
      <List disablePadding>
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
