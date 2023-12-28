import { cache } from "react";
import { axiosService } from "../../../common";

export const getArticle = cache(async () => {
    const data = await axiosService.get(
        "articles?sort_by=added&order_by=desc&level=all&privacy=all&categories=0&page_size=12&type=article"
    );
    return data.data;
});
