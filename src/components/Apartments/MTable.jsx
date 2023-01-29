import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, query } from "firebase/firestore";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const MTable = () => {
  const [apartments, setApartments] = useState([]);
  const apartmentsCollectionRef = collection(db, "apartments");

  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    const getApartments = async () => {
      const q = query(collection(db, "apartments"));
      const data = await getDocs(q);
      setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);

  return (
    <div className="text-center mx-8 my-2 py-6 bg-slate-50 rounded-lg h-screen">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Apartment</TableCell>
              <TableCell align="right">Rent</TableCell>
              <TableCell align="right">Rating&nbsp;(1-5)</TableCell>
              <TableCell align="right">Bed/Bath</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apartments.map((apartment) => (
              <TableRow key={apartment.id}>
                <TableCell component="th" scope="apartment">
                  {apartment.address}
                </TableCell>
                <TableCell align="right">{apartment.rent}</TableCell>
                <TableCell align="right">{apartment.rating}</TableCell>
                <TableCell align="right">
                  {apartment.beds}B/{apartment.baths}B
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MTable;

{
  /* {apartments &&
          apartments.map((apartment) => {
            return (
              
            );
          })} */
}