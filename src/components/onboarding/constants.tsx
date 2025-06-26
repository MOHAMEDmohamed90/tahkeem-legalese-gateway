
import { 
  GraduationCap, 
  Scale, 
  Globe, 
  Calendar, 
  MessageSquare, 
  FileText 
} from 'lucide-react';

export const specializations = [
  'القانون التجاري',
  'القانون المدني',
  'قانون العمل',
  'قانون الأسرة',
  'قانون العقارات',
  'الملكية الفكرية',
  'قانون العقود',
  'القانون المصرفي'
];

export const languages = ['العربية', 'الإنجليزية', 'الفرنسية', 'الإسبانية'];

export const lawyerOnboardingSteps = [
  {
    title: "مرحباً بك أيها المحامي المحترم",
    subtitle: "انضم إلى شبكة المحامين المتميزين",
    content: "welcome"
  },
  {
    title: "إعداد ملفك المهني",
    subtitle: "أضف مؤهلاتك وخبراتك القانونية",
    content: "profile-setup"
  },
  {
    title: "تخصصاتك ولغاتك",
    subtitle: "حدد مجالات خبرتك واللغات التي تتقنها",
    content: "specializations"
  },
  {
    title: "أدوات المحامي الرقمية",
    subtitle: "تعرف على الأدوات المتاحة لك",
    content: "tools"
  },
  {
    title: "ابدأ ممارسة عملك",
    subtitle: "أصبحت جاهزاً لاستقبال القضايا",
    content: "completion"
  }
];

export const toolsData = [
  {
    icon: Calendar,
    title: "تقويم القضايا",
    description: "إدارة مواعيدك وجلساتك القانونية بسهولة",
    color: "text-blue-600"
  },
  {
    icon: MessageSquare,
    title: "التواصل الآمن",
    description: "تواصل مع العملاء والمحكمين بشكل مشفر وآمن",
    color: "text-green-600"
  },
  {
    icon: FileText,
    title: "إدارة الملفات",
    description: "تنظيم وإدارة مستندات القضايا بكل سهولة",
    color: "text-purple-600"
  }
];
