import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Alert,
  AlertColor,
} from "@mui/material";

export interface EmptyTableProps {
  headers: string[];
  message: string;
  severity: AlertColor;
}

export const EmptyTable = ({ headers, message, severity }: EmptyTableProps) => {
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
            <TableRow>
              <TableCell colSpan={5}>
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity={severity}>{message}</Alert>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
};
