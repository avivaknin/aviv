import type { SubCategory } from '../../types';
import { 
    ExclamationTriangleIcon,
    TankIcon,
    ShieldIcon,
    HomeIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const securityEmergencySuperDataSubCategories: SubCategory[] = [
    {
        id: 'link-to-security-emergency-main',
        text: 'בטיחות אישית ומוכנות לחירום',
        icon: ExclamationTriangleIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-security-emergency-main-hidden',
        questions: [],
    },
    {
        id: 'link-to-security-military',
        text: 'ביטחון וצבא',
        icon: TankIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-security-military-hidden',
        questions: [],
    },
    {
        id: 'link-to-security-privacy',
        text: 'אבטחה ופרטיות',
        icon: ShieldIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-security-privacy-hidden',
        questions: [],
    },
    {
        id: 'link-to-civil-defense',
        text: 'עורף והתגוננות אזרחית',
        icon: HomeIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-civil-defense-hidden',
        questions: [],
    },
];