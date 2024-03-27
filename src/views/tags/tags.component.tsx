import { Box } from "@mui/material";
import { TagsTable, TagsFilters } from "./components";

export const Tags = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TagsFilters />
      <TagsTable />
    </Box>
  );
};
