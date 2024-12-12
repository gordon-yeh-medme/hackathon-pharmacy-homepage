import { AnnouncementBannerData } from "../types/pharmacy";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  data: AnnouncementBannerData;
}

export function HeroBanner({ data }: HeroBannerProps) {
  return (
    <div className="relative w-full bg-primary">
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {data.text}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Your trusted neighborhood pharmacy providing exceptional care and
            service to our community.
          </p>
          {data.link && (
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="group relative overflow-hidden rounded-full px-8 py-6 transition-all hover:shadow-lg hover:shadow-secondary/20"
                asChild
              >
                <a href={data.link.url} className="flex items-center gap-2">
                  {data.link.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
