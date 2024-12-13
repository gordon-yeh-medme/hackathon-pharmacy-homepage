import { PharmacyService } from "@/app/types/pharmacy";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface PharmacyServicesProps {
  services: PharmacyService[];
}

export function PharmacyServices({ services }: PharmacyServicesProps) {
  const urlMapping: Record<string, string> = {
    "Travel Health":
      "https://medme.development.medmeapp.com/schedule/activity-groups/travel",
    "Flu Shot":
      "https://medme.development.medmeapp.com/schedule/activity-groups/flu",
    "Point of Care Testing":
      "https://medme.development.medmeapp.com/schedule/activity-groups/poct",
    "Mental Health and Addictions":
      "https://medme.development.medmeapp.com/schedule/activity-groups/pans-bloom",
    "Medication Review":
      "https://medme.development.medmeapp.com/schedule/activity-groups/medication-review",
    "Urinary Tract Infection (UTI)":
      "https://medme.development.medmeapp.com/schedule/activity-groups/uti-management",
    "Diabetes Care Services":
      "https://medme.development.medmeapp.com/schedule/activity-groups/diabetes",
    "Prescription Renewals/Refills":
      "https://medme.development.medmeapp.com/schedule/activity-groups/pans-prescription-renewals",
    "COVID-19 Vaccine":
      "https://medme.development.medmeapp.com/schedule/activity-groups/COVID-19",
    "Minor Illness Assessment":
      "https://medme.development.medmeapp.com/schedule/groups/minorAilments",
    "Diabetes Assessments":
      "https://medme.development.medmeapp.com/schedule/activity-groups/diabetes-assessments",
    "Immunizations & Injections":
      "https://medme.development.medmeapp.com/schedule/activity-groups/immunization-injection",
  };

  return (
    <section className="w-full py-8 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={
                urlMapping[service.title] ||
                "https://medme.development.medmeapp.com/schedule"
              }
            >
              <Card className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-sm md:text-base text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
