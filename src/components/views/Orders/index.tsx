import TablePagination from "@mui/material/TablePagination/TablePagination";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/slice/loading";
import OrdersService from "../../../Services/AxiosOrder.service";
import Pages from "../../common/Pages";
import TableBodys from "../../common/TableBodys";
import TableHeads from "../../common/TableHead";
import Tables from "../../common/Tables";
import { columns } from "./components/columns";

interface Props {}

const Orders = (props: Props) => {
  const [dataUser, setDataOrders] = useState([]);

  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      OrdersService.get(token).then((res: any) => {
        const response = res.data;
        const { data } = response;
        setDataOrders(data);
        console.log(data);
        dispatch(setLoading(false));
      });
    }
  }, []);

  return (
    <>
      <Pages drawer={drawer} loading={loading} styles="loadingB">
        <Tables>
          <TableHeads columns={columns} />
          <TableBodys dataUser={dataUser} namePage="Orders" />
        </Tables>        
      </Pages>
    </>
  );
};

export default Orders;
