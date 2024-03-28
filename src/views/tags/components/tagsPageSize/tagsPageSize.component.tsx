import { InputAdornment, TextField } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useTagsFilter } from "src/shared/hooks/useTagsFilter";
import { useDebounce } from "src/shared/hooks";
import { useState } from "react";
import { INITIAL_STATE } from "src/contexts/tagsFilter/tagsFilter.reducer";

export const TagsPageSize = () => {
  const { updatePageSize } = useTagsFilter();
  const [value, setValue] = useState(INITIAL_STATE.pageSize);

  const debounced = useDebounce((newPageSize: number) => {
    updatePageSize(newPageSize);
  }, 500);

  return (
    <TextField
      id="input-with-icon-textfield"
      label="Page Size"
      sx={{
        maxWidth: { xs: "100%", md: "100px" },
      }}
      type="number"
      variant="outlined"
      value={value}
      onChange={(event) => {
        setValue(Number(event.target.value));
        debounced(Number(event.target.value));
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            sx={{ display: { xs: "none", md: "flex" } }}
            position="start"
          >
            <AutoStoriesIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
