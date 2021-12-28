import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { DrawerHeader } from "../../../styles/drawer";
import { Main } from "../../../styles/main";
import DrawerHeaderLoading from "../DrawerHeaderLoading";
import Loading from "../Loading";

interface Props {
  children: React.ReactChild[] | React.ReactChild;
  drawer: boolean;
  title?: string;
  loading?: boolean;
  styles?: string;
}

const Pages = (props: Props) => {
  const page = () => {
    return (
      <>
        <Main open={props.drawer}>
          <DrawerHeader />
          <Typography paragraph>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              {props.children}
            </Paper>
          </Typography>
        </Main>
      </>
    );
  };

  const loadingA = (e: boolean | undefined) => {
    if (e === true) {
      return (
        <>
          <Loading />
        </>
      );
    } else if (e === false) {
      return <>{page()}</>;
    }
  };

  const loadingB = (e: boolean | undefined) => {
    if (e === true) {
      return (
        <>
          <DrawerHeaderLoading />
        </>
      );
    } else if (e === false) {
      return <>{page()}</>;
    }
  };

  const loadingPage = (e: boolean | undefined, style: string | undefined) => {
    if (props.loading !== undefined && style !== undefined) {
      switch (style) {
        case (style = "loadingA"):
          return loadingA(e);
        case (style = "loadingB"):
          return loadingB(e);
        default:
          break;
      }
    } else {
      return <>{page()}</>;
    }
  };

  return <>{loadingPage(props.loading, props.styles)}</>;
};

export default Pages;
