import {
  PharmacyHours,
  PharmacyService,
  AboutUs,
  HighlightedService,
} from "@/app/types/pharmacy";

export async function fetchPharmacyData(): Promise<{
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
  highlightedServices: HighlightedService[];
  services: PharmacyService[];
  aboutUs: AboutUs;
}> {
  // For development, you can use this mock data
  const mockData = {
    name: "Pharmacy " + Math.floor(Math.random() * 1000),
    address: "155 Queens Quay E, Toronto, ON, Canada M5A 0W4",
    phone: "(123) 456-7890",
    fax: "(123) 456-7891",
    email: "contact@pharmacy" + Math.floor(Math.random() * 1000) + ".com",
    coordinates: {
      latitude: 43.644356,
      longitude: -79.366614,
    },
    hours: {
      regularHours: [
        { day: "Monday", openTime: "9:00 AM", closeTime: "7:00 PM" },
        { day: "Tuesday", openTime: "9:00 AM", closeTime: "7:00 PM" },
        { day: "Wednesday", openTime: "9:00 AM", closeTime: "7:00 PM" },
        { day: "Thursday", openTime: "9:00 AM", closeTime: "7:00 PM" },
        { day: "Friday", openTime: "9:00 AM", closeTime: "7:00 PM" },
        { day: "Saturday", openTime: "10:00 AM", closeTime: "5:00 PM" },
        { day: "Sunday", openTime: "Closed", closeTime: "Closed" },
      ],
      holidayHours: [
        {
          date: "December 25, 2024",
          name: "Christmas Day",
          openTime: "Closed",
          closeTime: "Closed",
        },
        {
          date: "January 1, 2025",
          name: "New Year's Day",
          openTime: "11:00 AM",
          closeTime: "4:00 PM",
        },
      ],
    } as PharmacyHours,
    highlightedServices: [
      {
        id: "hl1",
        title: "Prescription Filling",
        description:
          "Quick and accurate prescription filling service with professional consultation.",
        image: "/icons/prescription.svg",
      },
      {
        id: "hl2",
        title: "Medication Review",
        description:
          "Comprehensive medication reviews to ensure your safety and optimal health.",
        image: "/icons/review.svg",
      },
      {
        id: "hl3",
        title: "Vaccination Services",
        description:
          "Convenient immunizations and vaccines administered by certified pharmacists.",
        image: "/icons/vaccine.svg",
      },
      {
        id: "hl4",
        title: "Health Consultations",
        description:
          "One-on-one consultations for personalized healthcare advice.",
        image: "/icons/consultation.svg",
      },
    ],
    services: [
      {
        id: "1",
        title: "Prescription Filling",
        description: "Quick and accurate prescription filling service",
      },
      {
        id: "2",
        title: "Medication Review",
        description: "Comprehensive medication review with our pharmacists",
      },
      {
        id: "3",
        title: "Vaccinations",
        description: "Various vaccination services available",
      },
      {
        id: "4",
        title: "Health Consultations",
        description: "One-on-one health consultations with our experts",
      },
      {
        id: "5",
        title: "Compounding",
        description: "Custom medication preparation for your specific needs",
      },
      {
        id: "6",
        title: "Diabetes Care",
        description: "Specialized diabetes management and supplies",
      },
      {
        id: "7",
        title: "Blood Pressure Monitoring",
        description: "Regular blood pressure checks and monitoring",
      },
      {
        id: "8",
        title: "Travel Health",
        description: "Travel vaccination and health consultation",
      },
    ],
    aboutUs: {
      image: "/about-us-sample.webp",
      title: "Your Trusted Healthcare Partner",
      description:
        "Founded in 1995, our pharmacy has been serving the local community with dedication and care. We believe in providing personalized attention to each customer and ensuring they receive the best possible healthcare services.\n\nOur team of experienced pharmacists and healthcare professionals work tirelessly to maintain the highest standards of pharmaceutical care. We are committed to improving the health and wellness of our community by providing accessible, high-quality pharmaceutical care and personalized healthcare services.",
    },
  };

  // TODO: Replace with actual API call
  return mockData;
}
