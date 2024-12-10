import { PharmacyData } from "@/app/types/pharmacy";
import { PharmacyHours } from "@/app/types/pharmacy";

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
        { day: "Monday - Friday", openTime: "9:00 AM", closeTime: "7:00 PM" },
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
  };

  console.log("Pharmacy Coordinates:", mockData.coordinates);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}
