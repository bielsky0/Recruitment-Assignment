import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTagsFilter } from "../../../../shared/hooks/useTagsFilter";

export const TagsSearchbox = () => {
  const { search, updateSearch } = useTagsFilter();
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Search by Tag Name"
      sx={{
        maxWidth: "350px",
      }}
      value={search}
      onChange={(event) => {
        updateSearch(event.target.value);
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
