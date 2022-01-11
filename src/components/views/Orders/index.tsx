import Typography from "@mui/material/Typography/Typography";
import Page from "../../common/Page";

interface Props {}

const Orders = (props: Props) => {
  return (
    <>
      <Page
        namePage="Ordenes"
        type="default"
        lg={12}
        md={12}
        xs={12}
        textButtom="Nuevo Cliente"
      >
        <Typography paragraph></Typography>
      </Page>
    </>
  );
};

export default Orders;
