import { z } from "zod";

// Base Zod Schemas
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
  url: z.string().optional(),
  description: z.string(),
});

export const HighlightedServiceSchema = PharmacyServiceSchema.extend({
  image: z.string(),
});

export const AboutUsSchema = z.object({
  image: z.string(),
  title: z.string(),
  description: z.string(),
});

export const AnnouncementBannerSchema = z.object({
  text: z.string(),
  link: z
    .object({
      url: z.string(),
      text: z.string(),
    })
    .optional(),
});

export const PharmacyMainInfoSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  fax: z.string(),
  email: z.string(),
  coordinates: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export const AccessibilitySchema = z.object({
  isWheelchairAccessible: z.boolean(),
  acceptsWalkIns: z.boolean(),
  spokenLanguages: z.array(z.string()),
});

export const PharmacistSchema = z.object({
  name: z.string(),
  description: z.string(),
  photoUrl: z.string(),
});

export const PharmacyDataSchema = z.object({
  announcement: AnnouncementBannerSchema.optional(),
  pharmacyMainInfo: PharmacyMainInfoSchema,
  accessibility: AccessibilitySchema,
  hours: PharmacyHoursSchema,
  highlightedServices: z.array(HighlightedServiceSchema),
  services: z.array(PharmacyServiceSchema),
  aboutUs: AboutUsSchema,
  pharmacists: z.array(PharmacistSchema),
});

// Derived TypeScript types
export type RegularHours = z.infer<typeof RegularHoursSchema>;
export type HolidayHours = z.infer<typeof HolidayHoursSchema>;
export type PharmacyHours = z.infer<typeof PharmacyHoursSchema>;
export type PharmacyService = z.infer<typeof PharmacyServiceSchema>;
export type HighlightedService = z.infer<typeof HighlightedServiceSchema>;
export type PharmacyMainInfo = z.infer<typeof PharmacyMainInfoSchema>;
export type Accessibility = z.infer<typeof AccessibilitySchema>;
export type PharmacyData = z.infer<typeof PharmacyDataSchema>;
export type AboutUs = z.infer<typeof AboutUsSchema>;
export type AnnouncementBannerData = z.infer<typeof AnnouncementBannerSchema>;
export type Pharmacist = z.infer<typeof PharmacistSchema>;
