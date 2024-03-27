import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useDebounce, useTagsFilter } from "src/shared/hooks";

export const TagsSearchbox = () => {
  const { updateSearch } = useTagsFilter();
  const [value, setValue] = useState("");
  const debounced = useDebounce((event: string) => {
    updateSearch(event);
  }, 1000);

  return (
    <TextField
      id="input-with-icon-textfield"
      label="Search by Tag Name"
      sx={{
        maxWidth: { xs: "100%", md: "350px" },
      }}
      value={value}
      onChange={(event) => {
        debounced(event.target.value);
        setValue(event.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};
