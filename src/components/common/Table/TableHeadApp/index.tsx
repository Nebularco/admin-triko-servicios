import TableCell from "@mui/material/TableCell/TableCell";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import { StyledTableCell } from "../../../../styles/table/table";
import "../../../../styles/table/table.css";


interface Props {
  columns: readonly any[];
}

const TableHeadApp = (props: Props) => {
  return (
    <TableHead className="table">
      <TableRow >
        {props.columns.map((col, index) => (
          <TableCell key={index}>{col.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadApp;
