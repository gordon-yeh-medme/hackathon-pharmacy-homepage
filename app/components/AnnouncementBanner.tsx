"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnnouncementBannerData } from "../types/pharmacy";

interface AnnouncementBannerProps {
  data: AnnouncementBannerData;
}

export function AnnouncementBanner({ data }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const isBannerClosed = localStorage.getItem("bannerClosed");
    setIsVisible(!isBannerClosed);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem("bannerClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-primary text-primary-foreground">
      <div className="flex items-center justify-center">
        <div className="relative flex max-w-2xl items-center justify-between px-4 py-3 text-sm w-full">
          <div className="flex items-center gap-2">
            <p>{data.text}</p>
            {data.link && (
              <a
                href={data.link.url}
                className="underline underline-offset-2 hover:opacity-80"
              >
                {data.link.text}
              </a>
            )}
          </div>
          <button
            onClick={closeBanner}
            className="ml-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
