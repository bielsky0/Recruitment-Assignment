import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

export interface PaginationProps {
  onNextPage: (hasMore: boolean) => void;
  hasMore: boolean;
  onPreviousPage: () => void;
  currentPage: number;
}

export const Pagination = ({
  onNextPage,
  onPreviousPage,
  hasMore,
  currentPage,
}: PaginationProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        disabled={currentPage <= 1}
        onClick={() => {
          onPreviousPage();
        }}
        aria-label="Previous Page"
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography component="span">{currentPage}</Typography>
      <IconButton
        onClick={() => {
          onNextPage(hasMore);
        }}
        aria-label="Next Page"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
