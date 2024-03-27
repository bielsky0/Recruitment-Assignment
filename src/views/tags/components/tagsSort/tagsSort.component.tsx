import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTagsFilter } from "../../../../shared/hooks/useTagsFilter";
import { Sort } from "../../../../contexts/tagsFilter/tagsFilter.types";

export const TagsSort = () => {
  const { sort, updateSort } = useTagsFilter();

  return (
    <Box sx={{ minWidth: 120 }}>
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
