import { axiosClient } from "../../httpService";
import { UncheckedTag, Tag } from "./types";

export class TagsService {
  public async getTags(): Promise<Tag[]> {
    try {
      const response = await axiosClient.get<{ items: Tag[] }>(
        "tags?order=desc&sort=popular&site=stackoverflow&key=rzL)B9GRLKBp8vQsT4vmag(("
      );

      const requiredFields = ["count", "name"];

      response.items.forEach((uncheckedTag: UncheckedTag) => {
        requiredFields.forEach((field) => {
          if (!uncheckedTag[field]) throw new Error(`No ${field} field`);
        });
      });

      return response.items.map((tag) => ({
        has_synonyms: tag.has_synonyms,
        is_moderator_only: tag.is_moderator_only,
        is_required: tag.is_required,
        count: tag.count,
        name: tag.name,
      }));
    } catch (error) {
      throw new Error(`Error while fetching tags ${error}`);
    }
  }
}
