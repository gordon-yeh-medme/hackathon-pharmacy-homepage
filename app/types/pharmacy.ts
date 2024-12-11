import { z } from "zod";

// Base schemas
export const RegularHoursSchema = z.object({
  day: z.string(),
  openTime: z.string(),
  closeTime: z.string(),
});

export const HolidayHoursSchema = z.object({
  date: z.string(),
  name: z.string(),
  openTime: z.string(),
  closeTime: z.string(),
});

export const PharmacyHoursSchema = z.object({
  regularHours: z.array(RegularHoursSchema),
  holidayHours: z.array(HolidayHoursSchema),
});

export const PharmacyServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
});

export const PharmacyDataSchema = z.object({
  announcement: z
    .object({
      text: z.string(),
      link: z
        .object({
          url: z.string(),
          text: z.string(),
        })
        .optional(),
    })
    .optional(),
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  fax: z.string(),
  email: z.string(),
  coordinates: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  spokenLanguages: z.array(z.string()),
  isWheelchairAccessible: z.boolean(),
  acceptsWalkIns: z.boolean(),
  hours: PharmacyHoursSchema,
  highlightedServices: z.array(PharmacyServiceSchema),
  services: z.array(PharmacyServiceSchema),
  aboutUs: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export interface PharmacyData {
  name: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  hours: PharmacyHours;
  services: PharmacyService[];
  aboutUs: AboutUs;
  // We'll add more fields as we build other components
}

export interface RegularHours {
  day: string;
  openTime: string;
  closeTime: string;
}

export interface HolidayHours {
  date: string;
  name: string;
  openTime: string;
  closeTime: string;
}

export interface PharmacyHours {
  regularHours: RegularHours[];
  holidayHours: HolidayHours[];
}

export interface PharmacyService {
  id: string;
  title: string;
  description?: string;
}

export interface AboutUs {
  image: string;
  title: string;
  description: string;
}

export interface HighlightedService {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
}

export interface AnnouncementBannerData {
  text: string;
  link?: {
    url: string;
    text: string;
  };
}
