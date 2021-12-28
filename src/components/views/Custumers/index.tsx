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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dataUser, setDataUser] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();

  const handleChangePage = () => {
    setPage(page + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      ClientsService.getPagination(token, rowsPerPage, page).then((res) => {
        const response = res.data;
        const { data, meta } = response;
        setDataUser(data);
        setPage(meta.page["current-page"]);
        setTotalCustomers(meta.page.total);
        console.log(meta.page["current-page"]);
        dispatch(setLoading(false));
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
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Pages>
  );
};

export default Custumers;
