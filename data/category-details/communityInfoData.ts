import type { SubCategory } from '../../types';
import { 
    EnvelopeIcon,
    GlobeIcon,
    CameraIcon,
    HandRaisedIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const communityInfoDataSubCategories: SubCategory[] = [
    {
        id: 'link-to-communication',
        text: 'תקשורת וקשרים',
        icon: EnvelopeIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-communication-hidden',
        questions: [],
    },
    {
        id: 'link-to-services',
        text: 'שירותים ומידע',
        icon: GlobeIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-services-hidden',
        questions: [],
    },
    {
        id: 'link-to-photos',
        text: 'תמונות וזכרונות',
        icon: CameraIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-photos-hidden',
        questions: [],
    },
    {
        id: 'link-to-volunteering',
        text: 'התנדבות ומעורבות חברתית',
        icon: HandRaisedIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-volunteering-hidden',
        questions: [],
    },
];