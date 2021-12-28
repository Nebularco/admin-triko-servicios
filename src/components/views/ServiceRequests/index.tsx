import TablePagination from "@mui/material/TablePagination/TablePagination";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/slice/loading";
import ServicesRequestsService from "../../../Services/AxiosServicesRequests.service";
import Pages from "../../common/Pages";
import TableBodys from "../../common/TableBodys";
import TableHeads from "../../common/TableHead";
import Tables from "../../common/Tables";

interface Props {}

const ServiceRequests = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      ServicesRequestsService.get(token).then((response: any) => {
        setDataUser(response.data);
        dispatch(setLoading(false));
      });
    }
  }, []);
  return (
    <>
      <Pages drawer={drawer}>
        <Tables>
          <TableHeads columns={columns} />
          <TableBodys dataUser={dataUser} namePage="ServiceRequests" />
        </Tables>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={5}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Pages>
    </>
  );
};

export default ServiceRequests;
function setDataUser(data: any) {
    throw new Error("Function not implemented.");
}

