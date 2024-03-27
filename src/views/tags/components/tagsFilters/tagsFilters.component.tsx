import { Box } from "@mui/material";
import {
  TagsSearchbox,
  TagsPageSize,
  TagsOrder,
  TagsSort,
} from "src/views/tags/components";

export const TagsFilters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      <TagsSearchbox />
      <Box sx={{ display: "flex", gap: 2, width: { xs: "100%", md: "unset" } }}>
        <TagsPageSize />
        <TagsOrder />
        <TagsSort />
      </Box>
    </Box>
  );
};
