import TablePagination from "@mui/material/TablePagination/TablePagination";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/slice/loading";
import ServicesRequestsService from "../../../Services/AxiosServicesRequests.service";
import Pages from "../../common/Pages";
import TableBodys from "../../common/TableBodys";
import TableHeads from "../../common/TableHead";
import Tables from "../../common/Tables";
import { columns } from "./components/columns";

interface Props {}

const ServiceRequests = (props: Props) => {
  const [dataUser, setDataUser] = useState([]);

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

  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));

      ServicesRequestsService.get(token).then((res: any) => {
        const response = res.data;
        const { data, meta } = response;
        setDataUser(data);
        dispatch(setLoading(false));
      });
    }
  }, []);
  return (
    <>
      <Pages drawer={drawer} loading={loading} styles="loadingB">
        <Tables>
          <TableHeads columns={columns} />
          <TableBodys dataUser={displayDatas} namePage="ServiceRequests" />
        </Tables>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={pageCount} //Numero de paginas que tiene
          onPageChange={changePage}
          page={pageNumber} //La pagina en la que se encuentra
          rowsPerPage={5} // la cantida de filas que tiene que mostrar
        />
      </Pages>
    </>
  );
};

export default ServiceRequests;
