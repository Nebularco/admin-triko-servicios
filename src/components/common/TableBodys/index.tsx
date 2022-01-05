import Button from "@mui/material/Button/Button";
import TableBody from "@mui/material/TableBody/TableBody";
import TableCell from "@mui/material/TableCell/TableCell";
import TableRow from "@mui/material/TableRow/TableRow";
import React from "react";
import { useDispatch } from "react-redux";
import { serviceWorkflowsLabels } from "../../../consts/workflow";
import { addDataUser } from "../../../redux/slice/dataTable";
import { DataCustomers } from "../../../types/IDataCustomers.type";
import { DataOrders } from "../../../types/IDataOrders.type";
import { DataServiceRequests } from "../../../types/IDataServiceRequests.type";
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

  const dataTable = ({ dataUser: datos, namePage }: Props) => {
    console.log("namePage: ", namePage);
    switch (namePage) {
      case (namePage = "DataCustomers"):
        console.log("datos: ", datos);
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
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
        console.log("datos: ", datos);
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
      case (namePage = "ServiceRequests"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataServiceRequests, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.address}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.duration}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.client.id_number} -{" "}
                {data.attributes.client.first_name}{" "}
                {data.attributes.client.last_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.triko.id_number} -{" "}
                {data.attributes.triko.first_name}{" "}
                {data.attributes.triko.last_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.application_date}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.type}
              </TableCell>
              <TableCell component="th" scope="row">
                {serviceWorkflowsLabels[
                  data.attributes.workflow_transition_id
                ] || data.attributes.workflow_transition_id}
              </TableCell>
              <TableCell component="th" scope="row">
                accion
              </TableCell>
            </TableRow>
          ))
        );
      case (namePage = "Orders"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataOrders, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.order_code}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.paymentMethod.name?.es}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.subtotal}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.taxtotal}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.total}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.workflow.workflow}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.created_at}
              </TableCell>
              <TableCell component="th" scope="row">
                accion
              </TableCell>
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
