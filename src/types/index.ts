export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  location?: string;
  category: 'admin' | 'customer_service' | 'commercial' | 'training';
  responsibilities: string[];
  keyAchievements?: string[];
  skillsUsed: string[];
  isHighlighted?: boolean;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  duration?: string;
  description: string;
  highlights: string[];
  type: 'fp' | 'course' | 'secondary';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Avanzado", "Experto", "Competente"
    description?: string;
  }[];
}

