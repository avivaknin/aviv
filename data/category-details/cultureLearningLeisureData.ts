import type { SubCategory } from '../../types';
import { 
    TicketIcon,
    PaintBrushIcon,
    BookOpenIcon,
    FilmIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const cultureLearningLeisureSubCategories: SubCategory[] = [
    {
        id: 'link-to-entertainment',
        text: 'בידור ופנאי',
        icon: TicketIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-entertainment-hidden',
        questions: [],
    },
    {
        id: 'link-to-art',
        text: 'אומנות',
        icon: PaintBrushIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-art-hidden',
        questions: [],
    },
    {
        id: 'link-to-learning',
        text: 'למידה והתפתחות',
        icon: BookOpenIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-learning-hidden',
        questions: [],
    },
    {
        id: 'link-to-music-cinema',
        text: 'מוזיקה וקולנוע',
        icon: FilmIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-music-cinema-hidden',
        questions: [],
    },
];
