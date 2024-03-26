import { useQuery } from "@tanstack/react-query";
import { tagsService } from "../../services";

export const useTagsQuery = (page: number) => {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["tags", page],
    queryFn: () => tagsService.getTags(page),
  });

  return { status, data, error, isFetching };
};
