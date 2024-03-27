import { Box } from "@mui/material";
import { TagsSearchbox, TagsPageSize, TagsOrder, TagsSort } from "..";

export const TagsFilters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TagsSearchbox />
      <Box sx={{ display: "flex", gap: 2 }}>
        <TagsPageSize />
        <TagsOrder />
        <TagsSort />
      </Box>
    </Box>
  );
};
