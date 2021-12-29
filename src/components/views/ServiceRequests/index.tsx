import TablePagination from "@mui/material/TablePagination/TablePagination";
import { useEffect, useState } from "react";
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
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    if (newPage < 1) {
      setPage((newPage = 1));
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (page === 1 && rowsPerPage === 10) {
        dispatch(setLoading(true));
      }
      ServicesRequestsService.getPage(token, rowsPerPage, page).then(
        (res: any) => {
          const response = res.data;
          const { data, meta } = response;
          setDataUser(data);
          console.log(meta.page);
          setTotalCustomers(meta.page.total);
          console.log(page);
          if (page === 1 && rowsPerPage === 10) {
            dispatch(setLoading(false));
          }
        }
      );
    }
  }, []);
  return (
    <>
      <Pages drawer={drawer} loading={loading} styles="loadingB">
        <Tables>
          <TableHeads columns={columns} />
          <TableBodys dataUser={dataUser} namePage="ServiceRequests" />
        </Tables>
        <TablePagination
          rowsPerPageOptions={[5, 10, 100]}
          component="div"
          count={totalCustomers}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Pages>
    </>
  );
};

export default ServiceRequests;
