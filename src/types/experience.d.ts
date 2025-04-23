export interface Employer {
  companyName: string;
  companyLogo: string;
  companyIndustry: string;
  companyStaffCountRange: string;
  title: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
  activities: string;
}

export interface ExperienceData {
  employers: Employer[];
  education: Education;
  bio: string;
}

declare module '*/trevor_experience.json' {
  const value: ExperienceData;
  export default value;
} 