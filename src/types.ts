export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: 'saas-healthcare' | 'saas-checkout' | 'dach-ecommerce' | 'fintech' | 'branding-lifestyle' | 'web-apps';
  role: string;
  period: string;
  location?: string;
  tagline: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyDeliverables: string[];
  behavioralInsight: string;
  challenge: string;
  solution: string;
  featured?: boolean;
  externalLink?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
  estimatedTimeframe: string;
  startingPriceNote: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string[];
  highlights: string[];
  skills: string[];
}

export interface AcademicDegree {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: 'concluded' | 'in_progress';
  highlights?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate?: string;
  credentialCode?: string;
  skills?: string[];
}

export interface CognitiveCheckResult {
  score: number;
  cognitiveLoadLevel: 'Baixa' | 'Moderada' | 'Elevada' | 'Crítica';
  recommendations: string[];
  neuromarketingTips: string[];
}
