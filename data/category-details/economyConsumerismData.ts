import type { SubCategory } from '../../types';
import { 
    BankIcon,
    ChartBarIcon,
    ShoppingBagIcon,
    BriefcaseIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const economyConsumerismSubCategories: SubCategory[] = [
    {
        id: 'link-to-finance',
        text: 'כספים וכלכלה',
        icon: BankIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-finance-hidden',
        questions: [],
    },
    {
        id: 'link-to-investments',
        text: 'השקעות',
        icon: ChartBarIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-investments-hidden',
        questions: [],
    },
    {
        id: 'link-to-consumerism',
        text: 'צרכנות נבונה',
        icon: ShoppingBagIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-consumerism-hidden',
        questions: [],
    },
    {
        id: 'link-to-work-rights',
        text: 'זכויות בעבודה ופנסיה',
        icon: BriefcaseIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-work-rights-hidden',
        questions: [],
    },
];