import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const TagsSort = () => {
  const [value, setValue] = useState("Popular");

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Sort"
          onChange={(v: SelectChangeEvent) => {
            setValue(v.target.value);
          }}
        >
          <MenuItem value="Popular">Popular</MenuItem>
          <MenuItem value="Activity">Activity</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
