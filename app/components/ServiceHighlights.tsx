"use client";

// import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HighlightedService } from "@/app/types/pharmacy";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
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
    <Card className="bg-card text-card-foreground border-border shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-full">
          {/* <Image src={image} alt={title} width={24} height={24} /> */}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground flex-grow mb-4">{description}</p>
        <Link
          href={
            urlMapping[title] ||
            "https://medme.development.medmeapp.com/schedule"
          }
          className="mt-auto"
        >
          <Button className="w-full" variant="outline">
            Book Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const MobileCarousel = ({ services }: { services: HighlightedService[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: true,
      }}
      className="pl-4 pb-6"
    >
      <CarouselContent className="-ml-2 cursor-grab active:cursor-grabbing">
        {services.map((service) => (
          <CarouselItem key={service.id} className="pl-2 basis-[90%] pb-4">
            <ServiceCard {...service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 mt-2">
        <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-primary-foreground" />
      </div>
    </Carousel>
  );
};

const DesktopGrid = ({ services }: { services: HighlightedService[] }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
};

interface ServiceHighlightsProps {
  services: HighlightedService[];
}

export default function ServiceHighlights({
  services,
}: ServiceHighlightsProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="py-16 bg-secondary">
      <div className={`${isMobile ? "" : "container max-w-6xl"} mx-auto px-4`}>
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of pharmacy services to meet all your
            healthcare needs
          </p>
        </div>
        {isMobile ? (
          <div className="overflow-visible -mx-4">
            <MobileCarousel services={services} />
          </div>
        ) : (
          <DesktopGrid services={services} />
        )}
      </div>
    </section>
  );
}
