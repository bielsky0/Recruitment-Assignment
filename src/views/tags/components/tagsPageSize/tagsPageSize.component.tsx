import { InputAdornment, TextField } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useTagsFilter } from "../../../../shared/hooks/useTagsFilter";

export const TagsPageSize = () => {
  const { pageSize, updatePageSize } = useTagsFilter();
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Page Size"
      sx={{
        maxWidth: "100px",
      }}
      type="number"
      variant="outlined"
      value={pageSize}
      onChange={(event) => {
        updatePageSize(Number(event.target.value));
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AutoStoriesIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
