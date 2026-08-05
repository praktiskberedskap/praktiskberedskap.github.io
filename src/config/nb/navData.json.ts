import { countItems, getAllPosts, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

const posts = await getAllPosts("nb");
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

const categoryOrder = ["vann-og-mat", "lys-og-varme", "mental-beredskap", "kommunikasjon", "diverse"];
processedCategories.sort(([a], [b]) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

const sentenceCase = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
    {
        text: "Kom i gang",
        link: "/beredskapslager-for-en-uke-du-kan-ordne-pa-en-ettermiddag/",
    },
    {
        text: "Beredskapstemaer",
        dropdown: processedCategories.map(([category, count]) => {
            return {
                text: sentenceCase(humanize(category)),
                link: `/categories/${category}/`,
            };
        }),
    },
    
];

export default navConfig;