import { Box, Skeleton } from "@mui/material";

export const TableSkeleton = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Skeleton variant="rectangular" width="100%" height={36} />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={32} height={32} />
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
    </Box>
  );
};
