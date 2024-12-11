import {
  PharmacyData,
  PharmacyDataSchema,
  PharmacyHours,
} from "@/app/types/pharmacy";
import { headers } from "next/headers";

// Domain to locationId mapping
const DOMAIN_MAPPING: Record<string, string> = {
  "localhost:3000": "7bdb92eb-4580-4bd1-bec7-ff4f316e1f98",
  "hackathon-pharmacy-homepage.vercel.app":
    "7bdb92eb-4580-4bd1-bec7-ff4f316e1f98",
};

export async function fetchPharmacyData(): Promise<PharmacyData> {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

  if (useMockData) {
    return getMockData();
  }

  try {
    // Get domain from request headers
    const headersList = headers();
    const domain = headersList.get("host");
    if (!domain) {
      throw new Error("Host header not found");
    }

    // Get locationId from domain mapping
    const locationId = DOMAIN_MAPPING[domain];
    if (!locationId) {
      throw new Error("Domain not found in mapping");
    }

    // Fetch data from S3
    const s3BucketUrl = process.env.S3_BUCKET_URL;
    const response = await fetch(`${s3BucketUrl}/pharmacy/${locationId}.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch pharmacy data: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate data against schema
    const validatedData = PharmacyDataSchema.parse(data);

    return validatedData;
  } catch (error) {
    console.error("Error fetching pharmacy data:", error);
    throw error; // Let the error boundary handle this
  }
}

function getMockData(): PharmacyData {
  const mockData = {
    announcement: {
      text: "Get your flu shot today!",
      link: {
        url: "/book-appointment",
        text: "Book Now",
      },
    },
    name: "Pharmacy " + Math.floor(Math.random() * 1000),
    address: "155 Queens Quay E, Toronto, ON, Canada M5A 0W4",
    phone: "(123) 456-7890",
    fax: "(123) 456-7891",
    email: "contact@pharmacy" + Math.floor(Math.random() * 1000) + ".com",
    coordinates: {
      latitude: 43.644356,
      longitude: -79.366614,
    },
    spokenLanguages: ["English", "French", "Mandarin", "Spanish"],
    isWheelchairAccessible: true,
    acceptsWalkIns: true,
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

  // Validate mock data against schema
  return PharmacyDataSchema.parse(mockData);
}
