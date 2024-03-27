import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTagsFilter } from "src/shared/hooks/useTagsFilter";
import { Sort } from "src/contexts/tagsFilter/tagsFilter.types";

export const TagsSort = () => {
  const { sort, updateSort } = useTagsFilter();

  return (
    <Box sx={{ width: { xs: "100%", md: "100px" } }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={(v: SelectChangeEvent) => {
            updateSort(v.target.value as Sort);
          }}
        >
          <MenuItem value={Sort.popular}>Popular</MenuItem>
          <MenuItem value={Sort.activity}>Activity</MenuItem>
          <MenuItem value={Sort.name}>Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
