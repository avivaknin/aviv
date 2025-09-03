import type { SubCategory } from '../../types';
import { 
    PlaneIcon,
    BusIcon,
    ButterflyIcon,
    WaveIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const travelNatureTransportDataSubCategories: SubCategory[] = [
    {
        id: 'link-to-travel-israel-abroad',
        text: 'טיולים בחו"ל ובארץ',
        icon: PlaneIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-travel-hidden',
        questions: [],
    },
    {
        id: 'link-to-transportation',
        text: 'תחבורה ונסיעות',
        icon: BusIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-transportation-hidden',
        questions: [],
    },
    {
        id: 'link-to-nature-animals',
        text: 'טבע ובעלי חיים',
        icon: ButterflyIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-nature-hidden',
        questions: [],
    },
    {
        id: 'link-to-sea-beaches',
        text: 'ים, חופים ושייט',
        icon: WaveIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-ocean-hidden',
        questions: [],
    },
];