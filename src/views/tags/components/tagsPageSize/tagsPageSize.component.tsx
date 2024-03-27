import { InputAdornment, TextField } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const TagsPageSize = () => {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Page Size"
      sx={{
        maxWidth: "100px",
      }}
      variant="outlined"
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
