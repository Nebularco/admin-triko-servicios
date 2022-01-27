import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import ListItem from "@mui/material/ListItem/ListItem";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  href: string;
  icon: any;
  title: string;
}

const Navitem = (props: Props) => {
  const router = useLocation();
  const active = props.href ? router.pathname === props.href : false;
  console.log("pathname: ", router.pathname);
  console.log("href: ", props.href);
  console.log("active: ", active);

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <NavLink to={props.href} style={{ textDecoration: "none" }}>
        <Button
          component="a"
          startIcon={props.icon}
          disableRipple
          sx={{
            width: "227.69px",
            height: "56px",
            left: "0px",
            top: "opx",
            backgroundColor: active ? "#FFA70D" : "",
            borderRadius: "100px",
            margin: "0px 0px",
            paddingLeft: "25px",

            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: active ? "primary.main" : "rgba(0, 0, 0, 0.6)",

            textTransform: "none",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: active ? "#FFA70D" : "rgba(103, 80, 164, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1, left: "22.84%" }}>{props.title}</Box>
        </Button>
      </NavLink>
    </ListItem>
  );
};

export default Navitem;
