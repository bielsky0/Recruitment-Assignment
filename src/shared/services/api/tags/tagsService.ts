import { axiosClient } from "../../httpService";
import { UncheckedTag, Tag, TagsParams } from "./types";

export class TagsService {
  public async getTags(
    params: TagsParams
  ): Promise<{ items: Tag[]; hasMore: boolean }> {
    try {
      const response = await axiosClient.get<{
        items: Tag[];
        has_more: boolean;
      }>(`tags?site=stackoverflow&key=rzL)B9GRLKBp8vQsT4vmag((`, {
        ...params,
      });

      const requiredFields = ["count", "name"];

      response.items.forEach((uncheckedTag: UncheckedTag) => {
        requiredFields.forEach((field) => {
          if (!uncheckedTag[field]) throw new Error(`No ${field} field`);
        });
      });

      return {
        items: response.items.map((tag) => ({
          has_synonyms: tag.has_synonyms,
          is_moderator_only: tag.is_moderator_only,
          is_required: tag.is_required,
          count: tag.count,
          name: tag.name,
        })),
        hasMore: response.has_more,
      };
    } catch (error) {
      throw new Error(`Error while fetching tags ${error}`);
    }
  }
}
