import { ReactNode } from "react";

export interface User {
  name: string;
  username: string;
  handle: string;
  tagline: string;
  verified: boolean;
  profileImage: string;
}

export interface Stat {
  label: string;
  value: string;
  changePercentage: number;
  icon: ReactNode;
}

export interface Platform {
  id: string;
  name: string;
  username: string;
  icon: ReactNode;
  bgColor: string;
  active: boolean;
}

export interface ChartDataPoint {
  day: string;
  reached: number;
  engaged: number;
  isActive?: boolean;
}

export interface InsightData {
  chartData: ChartDataPoint[];
}

export interface NotificationUser {
  username: string;
  avatar: string;
}

export interface Notification {
  user: NotificationUser;
  action: string;
  actionObject?: string;
  actionImage?: string;
  postExcerpt?: string;
  time: string;
  showFollow?: boolean;
}

export interface NotificationData {
  inbox: Notification[];
  following: Notification[];
}

export interface DemographicData {
  ageRange: string;
  percentage: number;
  femalePercentage: number;
  malePercentage: number;
}

export interface AudienceData {
  demographics: DemographicData[];
}
