import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

export interface PaginationProps {
  onNextPage: () => void;
  isNextDisabled: boolean;
  onPreviousPage: () => void;
  currentPage: number;
}

export const Pagination = ({
  onNextPage,
  onPreviousPage,
  isNextDisabled,
  currentPage,
}: PaginationProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, padding: 2 }}>
      <IconButton
        disabled={currentPage <= 1}
        onClick={() => {
          onPreviousPage();
        }}
        aria-label="Previous Page"
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography component="span">{currentPage}</Typography>
      <IconButton
        disabled={!isNextDisabled}
        onClick={() => {
          onNextPage();
        }}
        aria-label="Next Page"
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};
