import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container/Container";
import Grid, { GridSize } from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { DrawerHeader } from "../../../styles/drawer/drawerHeader";
import { Main } from "../../../styles/main";
import BarApp from "../DrawerAndBar/BarApp";
import DrawerApp from "../DrawerAndBar/DrawerApp";
import Loading from "../Loading";

interface Props {
  children: React.ReactChild[] | React.ReactChild;
  namePage?: string;
  type: string;
  typeModal?: string;
  textButtom?: string;
  lg?: boolean | GridSize;
  md?: boolean | GridSize;
  xs?: boolean | GridSize;
}

const Page = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);

  let state = false;

  const typePage = (type: string, state: boolean) => {
    if (type === "default" && state === false) {
      return (
        <Box sx={{ display: "flex" }}>
          <BarApp />
          <DrawerApp />
          <Main open={drawer}>
            <DrawerHeader />
            <Container>
              <Typography sx={{ mb: 3 }} variant="h4">
                {props.namePage}
              </Typography>

              <Grid container spacing={3}>
                <Grid item lg={props.lg} md={props.md} xs={props.xs}>
                  {props.children}
                </Grid>
              </Grid>
            </Container>
          </Main>
        </Box>
      );
    } else if (type === "loadingA" && state === true) {
      return (
        <>
          <Loading />
        </>
      );
    }
  };

  return <>{typePage(props.type, loading)}</>;
};

export default Page;
