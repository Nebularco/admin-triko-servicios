import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/slice/loading";
import OrdersService from "../../../Services/AxiosOrder.service";
import Page from "../../common/Page";
import TableApp from "../../common/Table/TableApp/table2";
import { columns } from "./components/columns";

interface Props {}

const Orders = (props: Props) => {
  const [dataUser, setDataUser] = useState([]);
  const [typePage, setTypePage] = useState("default");

  //Sistema de paginacion propia.
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const displayDatas = dataUser.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );
  const pageCount = Math.ceil(dataUser.length / usersPerPage);
  const changePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log("ChangePage: ", newPage);
    setPageNumber(newPage);
  };
  console.log("Con Pagination: ", displayDatas);
  console.log("Numero de paginas: ", pageCount);
  //-----

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      setTypePage("loadingA");
      OrdersService.get(token).then((res: any) => {
        const response = res.data;
        const { data } = response;
        setDataUser(data);
        console.log(data);
        dispatch(setLoading(false));
        setTypePage("default");
      });
    }
  }, []);

  return (
    <>
      <Page
        namePage="Órdenes"
        type="default"
        lg={12}
        md={12}
        xs={12}
        textButtom="Nuevo Cliente"
      >
        <Typography paragraph>
          <TableApp
            data={displayDatas}
            nameTable="Ordenes"
            columns={columns}
            rows={[5]}
            pageCount={pageCount}
            changePage={changePage}
            pageNumber={pageNumber}
            rowsPerPage={5}
          />
        </Typography>
      </Page>
    </>
  );
};

export default Orders;
