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
