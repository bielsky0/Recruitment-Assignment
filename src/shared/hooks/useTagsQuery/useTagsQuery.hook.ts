import { useQuery } from "@tanstack/react-query";
import { tagsService } from "../../services";
import { TagsParams } from "../../services/api/tags/types";

export const useTagsQuery = (params: TagsParams) => {
  const { status, data, error, isFetching } = useQuery({
    queryKey: [
      "tags",
      params.inname,
      params.order,
      params.page,
      params.pagesize,
      params.sort,
    ],
    queryFn: () => tagsService.getTags(params),
  });
  return { status, data, error, isFetching };
};
