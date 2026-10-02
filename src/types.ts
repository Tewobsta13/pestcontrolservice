export type Language = "am" | "en";

export type PageView =
  | "home"
  | "services"
  | "service-detail"
  | "how-it-works"
  | "about"
  | "contact";

export interface PestService {
  id: string;

  nameAm: string;
  nameEn: string;

  taglineAm: string;
  taglineEn: string;

  shortDescriptionAm: string;
  shortDescriptionEn: string;

  fullDescriptionAm: string;
  fullDescriptionEn: string;

  commonSignsAm: string[];
  commonSignsEn: string[];

  targetAreasInHomeAm: string[];
  targetAreasInHomeEn: string[];

  treatmentApproachAm: string[];
  treatmentApproachEn: string[];

  homeownerPrepTipsAm: string[];
  homeownerPrepTipsEn: string[];

  safetyNotesAm: string;
  safetyNotesEn: string;

  badgeAm: string;
  badgeEn: string;

  image: string;
}

export interface HowItWorksStep {
  stepNumber: number;

  titleAm: string;
  titleEn: string;

  subtitleAm: string;
  subtitleEn: string;

  descriptionAm: string;
  descriptionEn: string;

  detailPointsAm: string[];
  detailPointsEn: string[];
}

export interface ServiceArea {
  subcityAm: string;
  subcityEn: string;

  descriptionAm: string;
  descriptionEn: string;

  popularZonesAm: string[];
  popularZonesEn: string[];

  available: boolean;
}

export interface TestimonialPlaceholder {
  id: string;

  customerTypeAm: string;
  customerTypeEn: string;

  locationAm: string;
  locationEn: string;

  placeholderTextAm: string;
  placeholderTextEn: string;

  serviceReceivedAm: string;
  serviceReceivedEn: string;

  datePlaceholderAm: string;
  datePlaceholderEn: string;
}

export interface CallbackRequest {
  fullName: string;
  phoneNumber: string;
  neighborhood: string;
  pestType: string;
  preferredTime: string;
  notes?: string;
}
