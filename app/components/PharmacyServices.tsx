import { PharmacyService } from "@/app/types/pharmacy";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface PharmacyServicesProps {
  services: PharmacyService[];
}

export function PharmacyServices({ services }: PharmacyServicesProps) {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-sm md:text-base text-foreground">
                  {service.title}
                </CardTitle>
                {service.description && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {service.description}
                  </p>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
