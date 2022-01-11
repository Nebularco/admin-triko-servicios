import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TablePagination from "@mui/material/TablePagination/TablePagination";
import TableBodyApp from "../TableBodyApp";
import TableHeadApp from "../TableHeadApp";

interface Props {
  data: never[];
  nameTable: string;
  columns: readonly any[];
  rows: number[];
  pageCount: number;
  changePage: any;
  pageNumber: number;
  rowsPerPage: number;
  onRowsPerPageChange?: any;
}

const TableApp = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHeadApp columns={props.columns} />
        <TableBodyApp data={props.data} nameTable={props.nameTable} />
      </Table>
      <TablePagination
        rowsPerPageOptions={props.rows}
        component="div"
        count={props.pageCount} //Numero de paginas que tiene
        onPageChange={props.changePage}
        page={props.pageNumber} //La pagina en la que se encuentra
        rowsPerPage={props.rowsPerPage} // la cantida de filas que tiene que mostrar
        onRowsPerPageChange={props.onRowsPerPageChange}
      />
    </TableContainer>
  );
};

export default TableApp;
