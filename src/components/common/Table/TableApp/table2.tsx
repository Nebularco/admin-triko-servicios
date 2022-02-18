import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableContainer from "@mui/material/TableContainer/TableContainer";
/*import TablePagination from "@mui/material/TablePagination/TablePagination";*/
import TablePagination from '@mui/material/TablePagination';
import TableBodyApp from "../TableBodyApp";
import TableHeadApp from "../TableHeadApp";
import "../../../../styles/table/table.css";

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
    <TableContainer className="table-container" component={Paper} >
      <Table className="table" sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHeadApp columns={props.columns} />
        <TableBodyApp data={props.data} nameTable={props.nameTable}  />
      </Table>
      <TablePagination className="table-pagination"
        component="div"
        count={props.pageCount}
        page={props.pageNumber}
        onPageChange={props.changePage}
        rowsPerPage={props.rowsPerPage}
        onRowsPerPageChange={props.onRowsPerPageChange}
        labelRowsPerPage={"Filas por página"}
    />
      
    </TableContainer>
  );
};

export default TableApp;
