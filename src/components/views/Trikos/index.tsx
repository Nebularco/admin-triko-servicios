import Typography from "@mui/material/Typography/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/slice/loading";
import TrikosService from "../../../Services/AxiosTrikos.service";
import Page from "../../common/Page";
import TableApp from "../../common/Table/TableApp/table2";
import { columns } from "./components/columns";

interface Props {}

const Trikos = (props: Props) => {
  const [dataUser, setDataUser] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [typePage, setTypePage] = useState("default");

  const dispatch = useDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    if (newPage < 1) {
      setPage((newPage = 1));
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (page === 1 && rowsPerPage === 10) {
        dispatch(setLoading(true));
        setTypePage("loadingA");
      }
      TrikosService.getPage(token, rowsPerPage, page).then((res: any) => {
        console.log("rowsPerPage: ", rowsPerPage);
        console.log("page: ", page);
        const response = res.data;
        const { data, meta } = response;
        setDataUser(data);
        console.log(meta.page);
        setTotalCustomers(meta.page.total);
        console.log(page);
        if (page === 1 && rowsPerPage === 10) {
          dispatch(setLoading(false));
          setTypePage("default");
        }
      });
    }
  }, [rowsPerPage, page]);
  console.log(dataUser);

  return (
    <>
      <Page namePage="Trikos" type={typePage} lg={12} md={12} xs={12}>
        <Typography paragraph>
          <TableApp
            data={dataUser}
            nameTable="Trikos"
            columns={columns}
            rows={[5]}
            pageCount={totalCustomers}
            changePage={handleChangePage}
            pageNumber={page}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Typography>
      </Page>
    </>
  );
};

export default Trikos;
