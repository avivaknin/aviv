import type { SubCategory } from '../../types';
import { 
    MenorahIcon,
    StarOfDavidIcon,
    BookOpenIcon,
    ScrollIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const heritageTraditionDataSubCategories: SubCategory[] = [
    {
        id: 'link-to-jewish-tradition',
        text: 'מסורת יהודית',
        icon: MenorahIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-jewish-tradition-hidden',
        questions: [],
    },
    {
        id: 'link-to-jewish-history',
        text: 'היסטוריה יהודית',
        icon: StarOfDavidIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-jewish-history-hidden',
        questions: [],
    },
    {
        id: 'link-to-hebrew-culture',
        text: 'שפה ותרבות עברית',
        icon: BookOpenIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-hebrew-culture-hidden',
        questions: [],
    },
    {
        id: 'link-to-archaeology',
        text: 'ארכיאולוגיה והיסטוריה של א"י',
        icon: ScrollIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-archaeology-hidden',
        questions: [],
    },
];
