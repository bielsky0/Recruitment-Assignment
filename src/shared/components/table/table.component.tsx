import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { Tag } from "../../services/api/tags/types";

export interface TableProps {
  Pagination?: React.ElementType;
  items: Tag[];
}

export const Table = ({ Pagination, items }: TableProps) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
            {items.map(
              ({
                name,
                count,
                has_synonyms,
                is_moderator_only,
                is_required,
              }) => {
                return (
                  <TableRow>
                    <TableCell>{name}</TableCell>
                    <TableCell>{count}</TableCell>
                    <TableCell>{has_synonyms ? "True" : "False"}</TableCell>
                    <TableCell>
                      {is_moderator_only ? "True" : "False"}
                    </TableCell>
                    <TableCell>{is_required ? "True" : "False"}</TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {Pagination && <Pagination />}
    </Paper>
  );
};
