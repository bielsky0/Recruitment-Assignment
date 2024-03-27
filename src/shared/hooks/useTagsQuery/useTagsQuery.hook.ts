import { tagsService } from "src/shared/services";
import { TagsParams } from "src/shared/services/api/tags/types";
import { useApiQuery } from "src/shared/hooks";

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
