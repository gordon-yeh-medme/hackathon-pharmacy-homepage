"use client";

import Image from "next/image";
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

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-full">
          <Image src={image} alt={title} width={24} height={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link href="/booking" className="mt-auto">
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
          <CarouselItem key={service.id} className="pl-2 basis-[45%] pb-4">
            <ServiceCard {...service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 mt-2">
        <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-white" />
        <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-white" />
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
    <section className="py-16 bg-gray-50">
      <div className={`${isMobile ? "" : "container max-w-6xl"} mx-auto px-4`}>
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
