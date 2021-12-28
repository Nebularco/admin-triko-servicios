import Table from "@mui/material/Table/Table";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import React from "react";

interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const Tables = (props: Props) => {
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          {props.children}
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
