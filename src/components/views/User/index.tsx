import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/slice/loading";
import ClientsService from "../../../Services/AxiosCostumers.service";
import { DataCustomer } from "../../../types/IDataCustomers.type";
import Pages from "../../common/Pages";

interface Props {}

const User = (props: Props) => {
  const [dataUser, setDataUser] = useState<DataCustomer>();
  const drawer = useAppSelector((state) => state.drawer.open);
  const loading = useAppSelector((state) => state.loading.open);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      ClientsService.get(token).then((res: any) => {
        const response = res.data;
        dispatch(setLoading(false));
        setDataUser(response.data[Number(id)].attributes);
      });
    }
  }, [setDataUser]);

  return (
    <Pages drawer={drawer}>
      <h1>
        Nombre: {dataUser?.personalInformation.firstname}{" "}
        {dataUser?.personalInformation.lastname}
      </h1>
      <h1>Email: {dataUser?.user.email}</h1>
      <h1>Telefono: {dataUser?.user.phonenumber}</h1>
    </Pages>
  );
};

export default User;
