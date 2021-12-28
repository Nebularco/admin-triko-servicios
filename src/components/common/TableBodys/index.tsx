import Button from "@mui/material/Button/Button";
import TableBody from "@mui/material/TableBody/TableBody";
import TableCell from "@mui/material/TableCell/TableCell";
import TableRow from "@mui/material/TableRow/TableRow";
import React from "react";
import { useDispatch } from "react-redux";
import { addDataUser } from "../../../redux/slice/dataTable";
import { DataCustomers } from "../../../types/IDataCustomers.type";
import { DataServices } from "../../../types/IDataServices.type";
import { DataServiceTypes } from "../../../types/IDataServiceTypes.type";

interface Props {
  dataUser: never[];
  namePage: string;
}

const TableBodys = ({ dataUser, namePage }: Props) => {
  const dispatch = useDispatch();
  const getOpen = (data: DataCustomers, index: any) => {
    dispatch(addDataUser(data));
  };
  //TrikosAprobados
  const dataTable = ({ dataUser: datos, namePage }: Props) => {
    switch (namePage) {
      case (namePage = "DataCustomers"):
        return (
          Array.isArray(datos) &&
          datos.map((user: DataCustomers, index) => (
            <TableRow hover role="checkbox" tabIndex={index}>
              <TableCell component="th" scope="row">
                {user.attributes.user.phonenumber}
              </TableCell>
              <TableCell align="right">{user.attributes.user.email}</TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.idnumber}
              </TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.firstname}
              </TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.lastname}
              </TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  href={`users/Costumers/${index}`}
                  onClick={() => getOpen(user, index)}
                >
                  Boton {index}
                </Button>
              </TableCell>
            </TableRow>
          ))
        );
      case (namePage = "DataServices"):
        return (
          Array.isArray(datos) &&
          datos.map((user: DataServices, index) => (
            <TableRow hover role="checkbox" tabIndex={index}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.address}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.duration}hr
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.client.id_number}
                {" - "}
                {user.attributes.client.first_name}{" "}
                {user.attributes.client.last_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.triko.id_number}
                {" - "}
                {user.attributes.triko.first_name}{" "}
                {user.attributes.triko.last_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.application_date}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.type}
              </TableCell>
              <TableCell component="th" scope="row">
                Estado
              </TableCell>
              <TableCell component="th" scope="row">
                Acciones
              </TableCell>
            </TableRow>
          ))
        );
      case (namePage = "ServiceType"):
        return (
          Array.isArray(datos) &&
          datos.map((user: DataServiceTypes, index) => (
            <TableRow hover role="checkbox" tabIndex={index}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.name.es}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.attributes.description}
              </TableCell>
              <TableCell component="th" scope="row">
                Acciones
              </TableCell>
            </TableRow>
          ))
        );
      case (namePage = "TrikosAprobados"):
        return (
          Array.isArray(dataUser) &&
          dataUser.map((user: DataCustomers) => (
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell component="th" scope="row">
                {user.attributes.user.phonenumber}
              </TableCell>
              <TableCell align="right">{user.attributes.user.email}</TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.idnumber}
              </TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.firstname}
              </TableCell>
              <TableCell align="right">
                {user.attributes.personalInformation.lastname}
              </TableCell>
              <TableCell align="right">estado</TableCell>
              <TableCell align="right">accion</TableCell>
            </TableRow>
          ))
        );
      default:
        break;
    }
  };
  return <TableBody>{dataTable({ dataUser, namePage })}</TableBody>;
};

export default TableBodys;
