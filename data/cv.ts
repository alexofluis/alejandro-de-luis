export type ExperienceItem = {
  role: string;
  company: string;
  type: string;
  period: string;
};

export type EducationItem = {
  degree: string;
  title: string;
  location: string;
};

export type LanguageItem = {
  level: string;
  language: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Industrial Designer",
    company: "ARTEFAKT Design",
    type: "Jornada completa",
    period: "jun. 2026 - dec. 2026",
  },
  {
    role: "Industrial Designer",
    company: "Cecotec Innovaciones",
    type: "Jornada completa",
    period: "mar. 2024 - jun. 2024",
  },
  {
    role: "Product Designer Junior",
    company: "Heaps & Woods",
    type: "Jornada parcial",
    period: "ago. 2023 - feb. 2024",
  },
  {
    role: "Departamento de diseño de productos",
    company: ".annud",
    type: "Contrato de prácticas",
    period: "feb. 2023 - may. 2023",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master's degree",
    title: "Master's Degree in Design Engineering",
    location: "Valencia",
  },
  {
    degree: "Bachelor's degree",
    title: "Industrial Design",
    location: "Valencia",
  },
  {
    degree: "CFGM",
    title: "Administrative Management",
    location: "Valencia",
  },
];

export const languages: LanguageItem[] = [
  { level: "Basic Level II", language: "Chinese (Mandarin)" },
  { level: "IELTS Academic", language: "English CEFR Level C1" },
  { level: "Native", language: "Spanish" },
];
