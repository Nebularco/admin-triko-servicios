import useTheme from "@mui/material/styles/useTheme";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setDrawer } from "../../redux/slice/drawer";
import { closeLogin } from "../../redux/slice/login/loginReducer";

interface Props {}

const DrawerHeader = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    dispatch(setDrawer(true));
  };

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
  };

  return null;
};

export default DrawerHeader;
