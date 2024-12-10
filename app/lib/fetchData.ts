import {
  PharmacyData,
  PharmacyHours,
  PharmacyService,
} from "@/app/types/pharmacy";

export async function fetchPharmacyData(): Promise<PharmacyData> {
  // In a real application, this would fetch from your API endpoint
  // For now, we'll return mock data
  const mockData: PharmacyData = {
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
    services: [
      {
        title: "Prescription Services",
        description:
          "Quick and accurate prescription filling with professional consultation.",
        icon: "/icons/prescription.svg",
      },
      {
        title: "Medication Review",
        description:
          "Comprehensive medication reviews to ensure your safety and optimal health.",
        icon: "/icons/review.svg",
      },
      {
        title: "Vaccination Services",
        description:
          "Convenient immunizations and vaccines administered by certified pharmacists.",
        icon: "/icons/vaccine.svg",
      },
      {
        title: "Health Consultations",
        description:
          "One-on-one consultations for personalized healthcare advice.",
        icon: "/icons/consultation.svg",
      },
    ],
  };

  console.log("Pharmacy Coordinates:", mockData.coordinates);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}
