import type { SubCategory } from '../../types';
import { 
    WrenchScrewdriverIcon,
    PowerPlugIcon,
    HomeIcon,
    ButterflyIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const homeFamilyGardenSubCategories: SubCategory[] = [
    {
        id: 'link-to-maintenance',
        text: 'תחזוקת הבית',
        icon: WrenchScrewdriverIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-home-maintenance-hidden',
        questions: [],
    },
    {
        id: 'link-to-appliances',
        text: 'מכשירים לבית',
        icon: PowerPlugIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-appliances-hidden',
        questions: [],
    },
    {
        id: 'link-to-home-and-family',
        text: 'בית ומשפחה',
        icon: HomeIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-home-and-family-hidden',
        questions: [],
    },
    {
        id: 'link-to-gardening',
        text: 'גינון וצמחי בית',
        icon: ButterflyIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-gardening-hidden',
        questions: [],
    },
];
