import TablePagination from "@mui/material/TablePagination/TablePagination";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/slice/loading";
import ClientsService from "../../../Services/AxiosCostumers.service";
import Pages from "../../common/Pages";
import TableBodys from "../../common/TableBodys";
import TableHeads from "../../common/TableHead";
import Tables from "../../common/Tables";
import { columns } from "./components/column";

interface Props {}

const Custumers = (props: Props) => {
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
      ClientsService.getPagination(token, rowsPerPage, page).then((res) => {
        const response = res.data;
        const { data, meta } = response;
        setDataUser(data);
        console.log(meta.page);
        setTotalCustomers(meta.page.total);
        console.log(page);
        if (page === 1 && rowsPerPage === 10) {
          dispatch(setLoading(false));
        }
      });
    }
  }, [setDataUser, rowsPerPage, page]);

  return (
    <Pages drawer={drawer} loading={loading} styles="loadingB">
      <Tables>
        <TableHeads columns={columns} />
        <TableBodys dataUser={dataUser} namePage="DataCustomers" />
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
  );
};

export default Custumers;
