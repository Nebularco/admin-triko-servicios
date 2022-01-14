import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableBodyApp from "../TableBodyApp";
import TableHeadApp from "../TableHeadApp";
import "../../../styles/table/table.css"

interface Props {
  data: never[];
  nameTable: string;
  columns: readonly any[];
}

const TableApp = (props: Props) => {


  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHeadApp columns={props.columns} />
        <TableBodyApp data={props.data} nameTable={props.nameTable} />
      </Table>
    </TableContainer>
  );
};

export default TableApp;
