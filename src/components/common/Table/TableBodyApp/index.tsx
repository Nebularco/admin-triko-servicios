import TableBody from "@mui/material/TableBody/TableBody";
import TableCell from "@mui/material/TableCell/TableCell";
import TableRow from "@mui/material/TableRow/TableRow";
import { serviceWorkflowsLabels } from "../../../../consts/workflow";
import { DataCustomers } from "../../../views/Customers/components/rows";
import { DataOrders } from "../../../views/Orders/components/rows";
import { DataServices } from "../../../views/Services/components/rows";
import { DataTrikos } from "../../../views/Trikos/components/rows";

interface Props {
  data: never[];
  nameTable: string;
}

const TableBodyApp = (props: Props) => {
  const dataTable = (name: string) => {
    let datos = props.data;

    switch (name) {
      case (name = "Servicios"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataServices, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.client.first_name}{" "}
                {data.attributes.client.last_name}
              </TableCell>

              <TableCell component="th" scope="row">
                {data.attributes.triko.map(
                  (data: any, index) => data.first_name
                )}{" "}
                {data.attributes.triko.map(
                  (data: any, index) => data.last_name
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {serviceWorkflowsLabels[
                  data.attributes.workflow_transition_id
                ] || data.attributes.workflow_transition_id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.application_date}
              </TableCell>
            </TableRow>
          ))
        );
      case (name = "Customers"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataCustomers, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.attributes.personalInformation.firstname}{" "}
                {data.attributes.personalInformation.lastname}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.user.phonenumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.user.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.created_at}
              </TableCell>
            </TableRow>
          ))
        );
      case (name = "Trikos"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataTrikos, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.personalInformation.firstname}{" "}
                {data.attributes.personalInformation.lastname}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.user.phonenumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.user.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.workflow.workflow}
              </TableCell>
            </TableRow>
          ))
        );
      case (name = "Ordenes"):
        return (
          Array.isArray(datos) &&
          datos.map((data: DataOrders, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.attributes.order_code}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.attributes.paymentMethod.attrs?.type}
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
            </TableRow>
          ))
        );

      default:
        break;
    }
  };
  return <TableBody>{dataTable(props.nameTable)}</TableBody>;
};

export default TableBodyApp;
