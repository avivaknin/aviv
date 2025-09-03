import type { SubCategory } from '../../types';
import { 
    MonitorIcon,
    PowerPlugIcon,
    DocumentTextIcon,
    GlobeIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon,
    PaintBrushIcon,
    SparklesIcon
} from '../../components/icons';

// Colors from the first 8 main categories
const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };
const color5 = { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' };
const color6 = { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', hoverBorder: 'hover:border-yellow-500' };
const color7 = { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' };
const color8 = { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-500', hoverBorder: 'hover:border-pink-500' };


export const personalComputerSubCategories: SubCategory[] = [
    {
        id: 'sub-cat-pc-basics',
        text: 'יסודות המחשב',
        icon: MonitorIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-pc-basics-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-hardware',
        text: 'חומרה וציוד היקפי',
        icon: PowerPlugIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-pc-hardware-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-software',
        text: 'תוכנות ויישומים',
        icon: DocumentTextIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-pc-software-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-internet',
        text: 'אינטרנט וגלישה',
        icon: GlobeIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-pc-internet-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-maintenance',
        text: 'תחזוקה ופתרון תקלות',
        icon: WrenchScrewdriverIcon,
        colorClasses: color5,
        linkedCategoryId: 'cat-pc-maintenance-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-security',
        text: 'אבטחה ופרטיות',
        icon: ShieldCheckIcon,
        colorClasses: color6,
        linkedCategoryId: 'cat-pc-security-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-creativity',
        text: 'יצירתיות ותחביבים',
        icon: PaintBrushIcon,
        colorClasses: color7,
        linkedCategoryId: 'cat-pc-creativity-hidden',
        questions: [],
    },
    {
        id: 'sub-cat-pc-advanced',
        text: 'שימוש מתקדם',
        icon: SparklesIcon,
        colorClasses: color8,
        linkedCategoryId: 'cat-pc-advanced-hidden',
        questions: [],
    },
];