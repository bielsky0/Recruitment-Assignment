import { tagsService } from "../../services";
import { TagsParams } from "../../services/api/tags/types";
import { useApiQuery } from "..";

export const useTagsQuery = (params: TagsParams) => {
  const { status, data, error, isFetching, customError } = useApiQuery({
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

  return { status, data, error, isFetching, customError };
};
