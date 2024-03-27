import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  Stack,
} from "@mui/material";

export interface TableProps<T extends object> {
  Pagination?: React.ElementType;
  items: T[];
  headers: string[];
  rowRenderer: (item: T) => React.ReactNode;
}

export const Table = <T extends object>({
  Pagination,
  items,
  rowRenderer,
  headers,
}: TableProps<T>) => {
  const renderNoData = () => {
    return (
      <TableRow>
        <TableCell colSpan={5}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="info">There is no data to show</Alert>
          </Stack>
        </TableCell>
      </TableRow>
    );
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {headers.map((name) => (
                <TableCell key={name}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length === 0
              ? renderNoData()
              : items.map((item) => rowRenderer(item))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {Pagination && <Pagination />}
    </Paper>
  );
};
