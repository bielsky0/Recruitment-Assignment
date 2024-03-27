import { InputAdornment, TextField } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useTagsFilter } from "src/shared/hooks/useTagsFilter";

export const TagsPageSize = () => {
  const { pageSize, updatePageSize } = useTagsFilter();

  return (
    <TextField
      id="input-with-icon-textfield"
      label="Page Size"
      sx={{
        maxWidth: { xs: "100%", md: "100px" },
      }}
      type="number"
      variant="outlined"
      value={pageSize}
      onChange={(event) => {
        updatePageSize(Number(event.target.value));
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
