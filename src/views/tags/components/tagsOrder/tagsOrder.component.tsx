import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTagsFilter } from "src/shared/hooks/useTagsFilter";
import { Order } from "src/contexts/tagsFilter/tagsFilter.types";

export const TagsOrder = () => {
  const { order, updateOrder } = useTagsFilter();

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100px" },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Order"
          onChange={(v: SelectChangeEvent) => {
            updateOrder(v.target.value as Order);
          }}
        >
          <MenuItem value={Order.ascending}>Ascending</MenuItem>
          <MenuItem value={Order.descending}>Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
