import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Pagination } from "..";

export const Table = () => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* <TablePagination
        count={2}
        onPageChange={() => {}}
        page={1}
        rowsPerPage={1}
        component="div"
      /> */}
      <Pagination />
      <TableContainer>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Tag Name</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Has Synonyms</TableCell>
              <TableCell>Is Moderator Only</TableCell>
              <TableCell>Is Required</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>javascript</TableCell>
              <TableCell>214562</TableCell>
              <TableCell>False</TableCell>
              <TableCell>False</TableCell>
              <TableCell>False</TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
};
