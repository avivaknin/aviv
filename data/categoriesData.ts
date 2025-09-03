import type { MainCategory, SubCategory } from '../types';
import { 
    HeartIcon, 
    BankIcon, 
    PhoneIcon, 
    MapIcon, 
    TvIcon, 
    CameraIcon, 
    MonitorIcon,
    BookOpenIcon,
    WrenchScrewdriverIcon,
    HomeIcon,
    ShieldIcon,
    BookmarkIcon,
    FitnessIcon,
    PlaneIcon,
    WaveIcon,
    ButterflyIcon,
    MusicNoteIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    StarOfDavidIcon,
    PowerPlugIcon,
    MenorahIcon,
    AiIcon,
    SparklesIcon,
    ShoppingBagIcon,
    PencilIcon,
    FilmIcon,
    EnvelopeIcon,
    TabletIcon,
    AppleIcon,
    GlobeIcon,
    TicketIcon,
    BusIcon,
    CakeIcon,
    ExclamationTriangleIcon,
    PaintBrushIcon,
    TankIcon,
    PlusIcon,
    DocumentTextIcon,
    CogIcon,
    DownloadIcon,
    PrinterIcon,
    BriefcaseIcon,
    ScrollIcon,
    UsersIcon,
    HandRaisedIcon
} from '../components/icons';

import { financeSubCategories } from './category-details/financeData';
import { communicationSubCategories } from './category-details/communicationData';
import { transportationSubCategories } from './category-details/transportationData';
import { entertainmentSubCategories } from './category-details/entertainmentData';
import { memoriesSubCategories } from './category-details/memoriesData';
import { securityPrivacySubCategories } from './category-details/securityPrivacyData';
import { computersSubCategories } from './category-details/computersData';
import { learningSubCategories } from './category-details/learningData';
import { servicesSubCategories } from './category-details/servicesData';
import { travelSubCategories } from './category-details/travelData';
import { homeSubCategories } from './category-details/homeData';
import { oceanSubCategories } from './category-details/oceanData';
import { artSubCategories } from './category-details/artData';
import { investmentsSubCategories } from './category-details/investmentsData';
import { securityMilitarySubCategories } from './category-details/securityMilitaryData';
import { jewishTraditionSubCategories } from './category-details/jewishTraditionData';
import { jewishHistorySubCategories } from './category-details/jewishHistoryData';
import { appliancesSubCategories } from './category-details/appliancesData';
import { foodSubCategories } from './category-details/foodData';
import { maintenanceSubCategories } from './category-details/maintenanceData';
import { natureSubCategories } from './category-details/natureData';
import { aiSubCategories } from './category-details/aiData';
import { healthSubCategories } from './category-details/healthData';
import { securityEmergencySubCategories } from './category-details/securityEmergencyData';
import { 
    aiAdvancedSubCategories,
    aiAdvBusinessSubCategories,
    aiAdvTechSubCategories,
    aiAdvLeisureSubCategories,
    aiAdvInspirationSubCategories,
    aiAdvMedicineSubCategories,
    aiAdvEducationSubCategories
} from './category-details/aiAdvancedData';
import { aiEthicsSubCategories } from './category-details/aiEthicsData';
import { aiProductivitySubCategories } from './category-details/aiProductivityData';
import { contentCreationSubCategories } from './category-details/contentCreationData';
import { leisureEntertainmentSubCategories } from './category-details/leisureEntertainmentData';
import { androidSubCategories } from './category-details/androidData';
import { androidTabletSubCategories } from './category-details/tabletData';
import { iphoneSubCategories } from './category-details/iphoneData';
import { ipadSubCategories } from './category-details/ipadData';
import { androidAdvancedSubCategories } from './category-details/androidAdvancedData';
import { iosAdvancedSubCategories } from './category-details/iosAdvancedData';
import { personalComputerSubCategories } from './category-details/personalComputerData';
import { pcHardwareSubCategoryList } from './category-details/pcHardwareData';
import { pcSoftwareSubCategoryList } from './category-details/pcSoftwareData';
import { pcInternetSubCategories } from './category-details/pcInternetData';
import { pcMaintenanceSubCategories } from './category-details/pcMaintenanceData';
import { pcSecuritySubCategories } from './category-details/pcSecurityData';
import { pcCreativitySubCategories } from './category-details/pcCreativityData';
import { pcAdvancedSubCategories } from './category-details/pcAdvancedData';
import { pcScreensSubCategories } from './category-details/pcScreensData';
import { pcKeyboardMouseSubCategories } from './category-details/pcKeyboardMouseData';
import { pcPrintersScannersSubCategories } from './category-details/pcPrintersScannersData';
import { pcSpeakersSubCategories } from './category-details/pcSpeakersData';
import { pcWebcamsSubCategories } from './category-details/pcWebcamsData';
import { pcExternalDrivesSubCategories } from './category-details/pcExternalDrivesData';
import { pcCablesSubCategories } from './category-details/pcCablesData';
import { pcComponentsSubCategories } from './category-details/pcComponentsData';
import { pcHardwareMaintenanceSubCategories } from './category-details/pcHardwareMaintenanceData';
import { pcUpgradesSubCategories } from './category-details/pcUpgradesData';
import { aiShoppingSubCategories } from './category-details/aiShoppingData';
import { aiTravelSubCategories } from './category-details/aiTravelData';
import { mobileAccessoriesSubCategories } from './category-details/mobileAccessoriesData';
import { mobileAccessibilitySubCategories } from './category-details/mobileAccessibilityData';
import { homeFamilyGardenSubCategories } from './category-details/homeFamilyGardenData';
import { gardeningSubCategories } from './category-details/gardeningData';
import { healthWellbeingSubCategories } from './category-details/healthWellbeingData';
import { sportsSubCategories } from './category-details/sportsData';
import { mentalHealthSubCategories } from './category-details/mentalHealthData';
import { economyConsumerismSubCategories } from './category-details/economyConsumerismData';
import { consumerismSubCategories } from './category-details/consumerismData';
import { workRightsSubCategories } from './category-details/workRightsData';
import { cultureLearningLeisureSubCategories } from './category-details/cultureLearningLeisureData';
import { musicCinemaSubCategories } from './category-details/musicCinemaData';
import { travelNatureTransportDataSubCategories } from './category-details/travelNatureTransportData';
import { securityEmergencySuperDataSubCategories } from './category-details/securityEmergencySuperData';
import { civilDefenseSubCategories } from './category-details/civilDefenseData';
import { heritageTraditionDataSubCategories } from './category-details/heritageTraditionData';
import { hebrewCultureSubCategories } from './category-details/hebrewCultureData';
import { archaeologySubCategories } from './category-details/archaeologyData';
import { communityInfoDataSubCategories } from './category-details/communityInfoData';
import { volunteeringSubCategories } from './category-details/volunteeringData';


export const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

// Colors from the first 8 main categories
const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };
const color5 = { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' };
const color6 = { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', hoverBorder: 'hover:border-yellow-500' };
const color7 = { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' };
const color8 = { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-500', hoverBorder: 'hover:border-pink-500' };

const mobileDevicesSubCategories: SubCategory[] = [
    {
      id: 'sub-cat-android',
      text: 'סמרטפון אנדרואיד',
      icon: PhoneIcon,
      colorClasses: color1,
      linkedCategoryId: 'cat-android-smartphone',
      questions: [],
    },
    {
      id: 'sub-cat-android-tablet',
      text: 'טאבלטים אנדרואיד',
      icon: TabletIcon,
      colorClasses: color2,
      linkedCategoryId: 'cat-android-tablet',
      questions: [],
    },
    {
      id: 'sub-cat-iphone',
      text: 'אייפון אפל',
      icon: AppleIcon,
      colorClasses: color3,
      linkedCategoryId: 'cat-iphone',
      questions: [],
    },
    {
      id: 'sub-cat-ipad',
      text: 'אייפד, אפל',
      icon: TabletIcon, // Changed to Tablet for consistency
      colorClasses: color4,
      linkedCategoryId: 'cat-ipad',
      questions: [],
    },
    {
      id: 'sub-cat-android-advanced',
      text: 'אנדרואיד וטאבלט מתקדם',
      icon: SparklesIcon,
      colorClasses: color5,
      linkedCategoryId: 'cat-android-advanced',
      questions: [],
    },
     {
      id: 'sub-cat-ios-advanced',
      text: 'אייפון ואייפד מתקדם',
      icon: SparklesIcon, // Changed to SparklesIcon for advanced
      colorClasses: color6,
      linkedCategoryId: 'cat-ios-advanced',
      questions: [],
    },
    {
      id: 'sub-cat-mobile-accessories',
      text: 'אביזרים נלווים',
      icon: PowerPlugIcon,
      colorClasses: color7,
      linkedCategoryId: 'cat-mobile-accessories',
      questions: [],
    },
    {
      id: 'sub-cat-mobile-accessibility',
      text: 'נגישות והתאמה אישית',
      icon: CogIcon,
      colorClasses: color8,
      linkedCategoryId: 'cat-mobile-accessibility',
      questions: [],
    },
];

const initialCategories: MainCategory[] = [
    {
        id: 'cat-ai',
        text: 'AI',
        icon: SparklesIcon,
        displayMode: 'grid',
        colorClasses: color1,
        subCategories: aiSubCategories,
    },
    {
        id: 'cat-ai-advanced',
        text: 'AI מתקדם',
        icon: AiIcon,
        displayMode: 'grid',
        colorClasses: color2,
        subCategories: aiAdvancedSubCategories,
    },
    {
        id: 'cat-mobile-devices',
        text: 'מכשירים ניידים',
        icon: PhoneIcon,
        displayMode: 'grid',
        colorClasses: color3,
        subCategories: mobileDevicesSubCategories,
    },
    {
        id: 'cat-personal-computer',
        text: 'המחשב האישי',
        icon: MonitorIcon,
        displayMode: 'grid',
        colorClasses: color4,
        subCategories: personalComputerSubCategories,
    },
    {
        id: 'cat-home-family-garden',
        text: 'הבית, המשפחה והגינה',
        icon: HomeIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-cyan-100', border: 'border-cyan-300', text: 'text-cyan-700', hoverBorder: 'hover:border-cyan-500' }, 
        subCategories: homeFamilyGardenSubCategories,
    },
    {
        id: 'cat-health-wellbeing',
        text: 'בריאות ואיכות חיים',
        icon: HeartIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-700', hoverBorder: 'hover:border-lime-500' },
        subCategories: healthWellbeingSubCategories,
    },
    {
        id: 'cat-economy-consumerism',
        text: 'כלכלה, צרכנות וזכויות',
        icon: BankIcon,
        displayMode: 'grid',
        colorClasses: color5,
        subCategories: economyConsumerismSubCategories,
    },
     {
        id: 'cat-culture-learning-leisure',
        text: 'תרבות, למידה ופנאי',
        icon: BookOpenIcon,
        displayMode: 'grid',
        colorClasses: color8,
        subCategories: cultureLearningLeisureSubCategories,
    },
    {
        id: 'cat-travel-nature-transport',
        text: 'טיולים, טבע ותחבורה',
        icon: MapIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-700', hoverBorder: 'hover:border-sky-500' },
        subCategories: travelNatureTransportDataSubCategories,
    },
    {
        id: 'cat-security',
        text: 'ביטחון',
        icon: ShieldCheckIcon,
        displayMode: 'grid',
        colorClasses: color6,
        subCategories: securityEmergencySuperDataSubCategories,
    },
    {
        id: 'cat-heritage-tradition',
        text: 'מורשת ומסורת',
        icon: MenorahIcon,
        displayMode: 'grid',
        colorClasses: color7,
        subCategories: heritageTraditionDataSubCategories,
    },
    {
        id: 'cat-community-info',
        text: 'קהילה, תקשורת ומידע',
        icon: UsersIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-500', hoverBorder: 'hover:border-pink-500' },
        subCategories: communityInfoDataSubCategories,
    },
    // Hidden Categories
    {
        id: 'cat-android-smartphone',
        text: 'סמרטפון אנדרואיד',
        icon: PhoneIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color1,
        subCategories: androidSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-android-tablet',
        text: 'טאבלטים אנדרואיד',
        icon: TabletIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color2,
        subCategories: androidTabletSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-iphone',
        text: 'אייפון אפל',
        icon: AppleIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color3,
        subCategories: iphoneSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-ipad',
        text: 'אייפד, אפל',
        icon: TabletIcon, // Changed to TabletIcon for consistency
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color4,
        subCategories: ipadSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-android-advanced',
        text: 'אנדרואיד וטאבלט מתקדם',
        icon: SparklesIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color5,
        subCategories: androidAdvancedSubCategories,
        displayMode: 'list'
    },
     {
        id: 'cat-ios-advanced',
        text: 'אייפון ואייפד מתקדם',
        icon: SparklesIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color6,
        subCategories: iosAdvancedSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-mobile-accessories',
        text: 'אביזרים נלווים',
        icon: PowerPlugIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color7,
        subCategories: mobileAccessoriesSubCategories,
        displayMode: 'list'
    },
    {
        id: 'cat-mobile-accessibility',
        text: 'נגישות והתאמה אישית',
        icon: CogIcon,
        isHidden: true,
        parentId: 'cat-mobile-devices',
        colorClasses: color8,
        subCategories: mobileAccessibilitySubCategories,
        displayMode: 'list'
    },
    // Hidden AI Categories
    {
      id: 'hidden-ai-health',
      text: 'AI - בריאות ואיכות חיים',
      icon: HeartIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color1,
      subCategories: healthSubCategories,
    },
    {
      id: 'hidden-ai-finance',
      text: 'AI - כספים וכלכלה',
      icon: BankIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color2,
      subCategories: financeSubCategories,
    },
    {
      id: 'hidden-ai-content',
      text: 'AI - יצירת תוכן',
      icon: PencilIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color3,
      subCategories: contentCreationSubCategories,
    },
    {
      id: 'hidden-ai-leisure',
      text: 'AI - בידור ופנאי',
      icon: SparklesIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color4,
      subCategories: leisureEntertainmentSubCategories,
    },
    {
      id: 'hidden-ai-art',
      text: 'AI - אומנות',
      icon: MusicNoteIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color5,
      subCategories: artSubCategories,
    },
    {
      id: 'hidden-ai-learning',
      text: 'AI - למידה והתפתחות',
      icon: BookOpenIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color6,
      subCategories: learningSubCategories,
    },
    {
      id: 'hidden-ai-shopping',
      text: 'AI - קניות וצרכנות',
      icon: ShoppingBagIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color7,
      subCategories: aiShoppingSubCategories,
    },
    {
      id: 'hidden-ai-travel',
      text: 'AI - טיולים ונסיעות',
      icon: PlaneIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: color8,
      subCategories: aiTravelSubCategories,
    },
    // Hidden Advanced AI Categories
    {
      id: 'hidden-ai-adv-business',
      text: 'AI מתקדם - ניתוח עסקי ונתונים',
      icon: ChartBarIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color1,
      subCategories: aiAdvBusinessSubCategories,
    },
    {
      id: 'hidden-ai-adv-tech',
      text: 'AI מתקדם - טכנולוגיה ותכנות',
      icon: MonitorIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color2,
      subCategories: aiAdvTechSubCategories,
    },
    {
      id: 'hidden-ai-adv-leisure',
      text: 'AI מתקדם - פנאי ובידור',
      icon: FilmIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color3,
      subCategories: aiAdvLeisureSubCategories,
    },
    {
      id: 'hidden-ai-adv-inspiration',
      text: 'AI מתקדם - השראה ויצירתיות',
      icon: SparklesIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color4,
      subCategories: aiAdvInspirationSubCategories,
    },
    {
      id: 'hidden-ai-adv-medicine',
      text: 'AI מתקדם - רפואה ובריאות',
      icon: HeartIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color5,
      subCategories: aiAdvMedicineSubCategories,
    },
    {
      id: 'hidden-ai-adv-education',
      text: 'AI מתקדם - חינוך ולמידה',
      icon: BookOpenIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color6,
      subCategories: aiAdvEducationSubCategories,
    },
    {
      id: 'hidden-ai-adv-ethics',
      text: 'AI ואתיקה',
      icon: ShieldCheckIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color7,
      subCategories: aiEthicsSubCategories,
    },
    {
      id: 'hidden-ai-adv-productivity',
      text: 'AI ופרודוקטיביות אישית',
      icon: FitnessIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: color8,
      subCategories: aiProductivitySubCategories,
    },
    // Hidden Personal Computer Categories
    {
      id: 'cat-pc-basics-hidden',
      text: 'יסודות המחשב',
      icon: MonitorIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color1,
      subCategories: computersSubCategories,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-hardware-hidden',
      text: 'חומרה וציוד היקפי',
      icon: PowerPlugIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color2,
      subCategories: pcHardwareSubCategoryList,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-software-hidden',
      text: 'תוכנות ויישומים',
      icon: DocumentTextIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color3,
      subCategories: pcSoftwareSubCategoryList,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-internet-hidden',
      text: 'אינטרנט וגלישה',
      icon: GlobeIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color4,
      subCategories: pcInternetSubCategories,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-maintenance-hidden',
      text: 'תחזוקה ופתרון תקלות',
      icon: WrenchScrewdriverIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color5,
      subCategories: pcMaintenanceSubCategories,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-security-hidden',
      text: 'אבטחה ופרטיות',
      icon: ShieldCheckIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color6,
      subCategories: pcSecuritySubCategories,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-creativity-hidden',
      text: 'יצירתיות ותחביבים',
      icon: PaintBrushIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color7,
      subCategories: pcCreativitySubCategories,
      displayMode: 'list',
    },
    {
      id: 'cat-pc-advanced-hidden',
      text: 'שימוש מתקדם',
      icon: SparklesIcon,
      isHidden: true,
      parentId: 'cat-personal-computer',
      colorClasses: color8,
      subCategories: pcAdvancedSubCategories,
      displayMode: 'list',
    },
    {
      id: 'hidden-pc-hw-screens',
      text: 'מסכים ותצוגה',
      icon: MonitorIcon,
      isHidden: true,
      parentId: 'cat-pc-hardware-hidden',
      colorClasses: color2,
      subCategories: pcScreensSubCategories,
      displayMode: 'list',
    },
    {
      id: 'hidden-pc-hw-keyboard-mouse',
      text: 'מקלדות ועכברים',
      icon: PencilIcon, // Placeholder, can be changed
      isHidden: true,
      parentId: 'cat-pc-hardware-hidden',
      colorClasses: color2,
      subCategories: pcKeyboardMouseSubCategories,
      displayMode: 'list',
    },
    {
      id: 'hidden-pc-hw-printers',
      text: 'מדפסות וסורקים',
      icon: PrinterIcon,
      isHidden: true,
      parentId: 'cat-pc-hardware-hidden',
      colorClasses: color2,
      subCategories: pcPrintersScannersSubCategories,
      displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-speakers',
        text: 'רמקולים ואוזניות',
        icon: MusicNoteIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcSpeakersSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-webcams',
        text: 'מצלמות רשת ומיקרופונים',
        icon: CameraIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcWebcamsSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-drives',
        text: 'כוננים חיצוניים ו-USB',
        icon: DownloadIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcExternalDrivesSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-cables',
        text: 'חיבורים וכבלים',
        icon: PowerPlugIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcCablesSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-components',
        text: 'רכיבים פנימיים',
        icon: CogIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcComponentsSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-maintenance',
        text: 'תחזוקה וניקיון חומרה',
        icon: WrenchScrewdriverIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcHardwareMaintenanceSubCategories,
        displayMode: 'list',
    },
    {
        id: 'hidden-pc-hw-upgrades',
        text: 'שדרוג המחשב',
        icon: SparklesIcon,
        isHidden: true,
        parentId: 'cat-pc-hardware-hidden',
        colorClasses: color2,
        subCategories: pcUpgradesSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Home, Family, Garden X" super-category
    {
        id: 'cat-home-maintenance-hidden',
        text: 'תחזוקת הבית',
        icon: WrenchScrewdriverIcon,
        isHidden: true,
        parentId: 'cat-home-family-garden',
        colorClasses: color1,
        subCategories: maintenanceSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-appliances-hidden',
        text: 'מכשירים לבית',
        icon: PowerPlugIcon,
        isHidden: true,
        parentId: 'cat-home-family-garden',
        colorClasses: color2,
        subCategories: appliancesSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-home-and-family-hidden',
        text: 'בית ומשפחה',
        icon: HomeIcon,
        isHidden: true,
        parentId: 'cat-home-family-garden',
        colorClasses: color3,
        subCategories: homeSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-gardening-hidden',
        text: 'גינון וצמחי בית',
        icon: ButterflyIcon,
        isHidden: true,
        parentId: 'cat-home-family-garden',
        colorClasses: color4,
        subCategories: gardeningSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Health & Wellbeing X" super-category
    {
        id: 'cat-health-hidden',
        text: 'בריאות ואיכות חיים',
        icon: HeartIcon,
        isHidden: true,
        parentId: 'cat-health-wellbeing',
        colorClasses: color1,
        subCategories: healthSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-food-hidden',
        text: 'אוכל ומתכונים',
        icon: CakeIcon,
        isHidden: true,
        parentId: 'cat-health-wellbeing',
        colorClasses: color2,
        subCategories: foodSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-sports-hidden',
        text: 'ספורט וכושר גופני',
        icon: FitnessIcon,
        isHidden: true,
        parentId: 'cat-health-wellbeing',
        colorClasses: color3,
        subCategories: sportsSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-mental-health-hidden',
        text: 'בריאות הנפש ומיינדפולנס',
        icon: SparklesIcon, // Placeholder icon
        isHidden: true,
        parentId: 'cat-health-wellbeing',
        colorClasses: color4,
        subCategories: mentalHealthSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Economy, Consumerism & Rights X" super-category
    {
        id: 'cat-finance-hidden',
        text: 'כספים וכלכלה',
        icon: BankIcon,
        isHidden: true,
        parentId: 'cat-economy-consumerism',
        colorClasses: color1,
        subCategories: financeSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-investments-hidden',
        text: 'השקעות',
        icon: ChartBarIcon,
        isHidden: true,
        parentId: 'cat-economy-consumerism',
        colorClasses: color2,
        subCategories: investmentsSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-consumerism-hidden',
        text: 'צרכנות נבונה',
        icon: ShoppingBagIcon,
        isHidden: true,
        parentId: 'cat-economy-consumerism',
        colorClasses: color3,
        subCategories: consumerismSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-work-rights-hidden',
        text: 'זכויות בעבודה ופנסיה',
        icon: BriefcaseIcon,
        isHidden: true,
        parentId: 'cat-economy-consumerism',
        colorClasses: color4,
        subCategories: workRightsSubCategories,
        displayMode: 'list',
    },
     // Hidden categories for the new "Culture, Learning & Leisure X" super-category
    {
        id: 'cat-entertainment-hidden',
        text: 'בידור ופנאי',
        icon: TicketIcon,
        isHidden: true,
        parentId: 'cat-culture-learning-leisure',
        colorClasses: color1,
        subCategories: entertainmentSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-art-hidden',
        text: 'אומנות',
        icon: PaintBrushIcon,
        isHidden: true,
        parentId: 'cat-culture-learning-leisure',
        colorClasses: color2,
        subCategories: artSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-learning-hidden',
        text: 'למידה והתפתחות',
        icon: BookOpenIcon,
        isHidden: true,
        parentId: 'cat-culture-learning-leisure',
        colorClasses: color3,
        subCategories: learningSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-music-cinema-hidden',
        text: 'מוזיקה וקולנוע',
        icon: FilmIcon,
        isHidden: true,
        parentId: 'cat-culture-learning-leisure',
        colorClasses: color4,
        subCategories: musicCinemaSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Travel, Nature & Transport X" super-category
    {
        id: 'cat-travel-hidden',
        text: 'טיולים בחו"ל ובארץ',
        icon: PlaneIcon,
        isHidden: true,
        parentId: 'cat-travel-nature-transport',
        colorClasses: color1,
        subCategories: travelSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-transportation-hidden',
        text: 'תחבורה ונסיעות',
        icon: BusIcon,
        isHidden: true,
        parentId: 'cat-travel-nature-transport',
        colorClasses: color2,
        subCategories: transportationSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-nature-hidden',
        text: 'טבע ובעלי חיים',
        icon: ButterflyIcon,
        isHidden: true,
        parentId: 'cat-travel-nature-transport',
        colorClasses: color3,
        subCategories: natureSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-ocean-hidden',
        text: 'ים, חופים ושייט',
        icon: WaveIcon,
        isHidden: true,
        parentId: 'cat-travel-nature-transport',
        colorClasses: color4,
        subCategories: oceanSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Security & Emergency X" super-category
    {
        id: 'cat-security-emergency-main-hidden',
        text: 'בטיחות אישית ומוכנות לחירום',
        icon: ExclamationTriangleIcon,
        isHidden: true,
        parentId: 'cat-security',
        colorClasses: color1,
        subCategories: securityEmergencySubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-security-military-hidden',
        text: 'ביטחון וצבא',
        icon: TankIcon,
        isHidden: true,
        parentId: 'cat-security',
        colorClasses: color2,
        subCategories: securityMilitarySubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-security-privacy-hidden',
        text: 'אבטחה ופרטיות',
        icon: ShieldIcon,
        isHidden: true,
        parentId: 'cat-security',
        colorClasses: color3,
        subCategories: securityPrivacySubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-civil-defense-hidden',
        text: 'עורף והתגוננות אזרחית',
        icon: HomeIcon,
        isHidden: true,
        parentId: 'cat-security',
        colorClasses: color4,
        subCategories: civilDefenseSubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Heritage & Tradition X" super-category
    {
        id: 'cat-jewish-tradition-hidden',
        text: 'מסורת יהודית',
        icon: MenorahIcon,
        isHidden: true,
        parentId: 'cat-heritage-tradition',
        colorClasses: color1,
        subCategories: jewishTraditionSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-jewish-history-hidden',
        text: 'היסטוריה יהודית',
        icon: StarOfDavidIcon,
        isHidden: true,
        parentId: 'cat-heritage-tradition',
        colorClasses: color2,
        subCategories: jewishHistorySubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-hebrew-culture-hidden',
        text: 'שפה ותרבות עברית',
        icon: BookOpenIcon,
        isHidden: true,
        parentId: 'cat-heritage-tradition',
        colorClasses: color3,
        subCategories: hebrewCultureSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-archaeology-hidden',
        text: 'ארכיאולוגיה והיסטוריה של א"י',
        icon: ScrollIcon,
        isHidden: true,
        parentId: 'cat-heritage-tradition',
        colorClasses: color4,
        subCategories: archaeologySubCategories,
        displayMode: 'list',
    },
    // Hidden categories for the new "Community, Communication & Info X" super-category
    {
        id: 'cat-communication-hidden',
        text: 'תקשורת וקשרים',
        icon: EnvelopeIcon,
        isHidden: true,
        parentId: 'cat-community-info',
        colorClasses: color1,
        subCategories: communicationSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-services-hidden',
        text: 'שירותים ומידע',
        icon: GlobeIcon,
        isHidden: true,
        parentId: 'cat-community-info',
        colorClasses: color2,
        subCategories: servicesSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-photos-hidden',
        text: 'תמונות וזכרונות',
        icon: CameraIcon,
        isHidden: true,
        parentId: 'cat-community-info',
        colorClasses: color3,
        subCategories: memoriesSubCategories,
        displayMode: 'list',
    },
    {
        id: 'cat-volunteering-hidden',
        text: 'התנדבות ומעורבות חברתית',
        icon: HandRaisedIcon,
        isHidden: true,
        parentId: 'cat-community-info',
        colorClasses: color4,
        subCategories: volunteeringSubCategories,
        displayMode: 'list',
    },
];

const deepCopyCategories = (categories: MainCategory[]): MainCategory[] => {
    return categories.map(category => ({
      ...category,
      // Icon components are functions, so we just copy the reference.
      icon: category.icon,
      subCategories: (category.subCategories || []).map(subCategory => ({
        ...subCategory,
        icon: subCategory.icon,
        questions: (subCategory.questions || []).map(question => ({ ...question }))
      }))
    }));
};
  
export const getInitialCategories = (): MainCategory[] => {
    // Using a custom deep copy function because JSON.parse(JSON.stringify()) 
    // strips out function components, which are used for icons.
    // This ensures icons are displayed correctly while preventing mutation of the original data.
    return deepCopyCategories(initialCategories);
};