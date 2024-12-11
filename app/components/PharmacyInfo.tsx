"use client";

import {
  Phone,
  Mail,
  MapPin,
  Printer,
  Languages,
  Accessibility,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface PharmacyInfoProps {
  address: string;
  phone: string;
  fax: string;
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  spokenLanguages?: string[];
  isWheelchairAccessible?: boolean;
  acceptsWalkIns?: boolean;
}

export function PharmacyInfo({
  address,
  phone,
  fax,
  email,
  coordinates,
  spokenLanguages = [],
  isWheelchairAccessible = false,
  acceptsWalkIns = false,
}: PharmacyInfoProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Pharmacy Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="p-6">
            {/* Primary Information */}
            <div className="space-y-6">
              {/* Primary Contact Section */}
              <div className="space-y-4 border-b pb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-foreground">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary Information */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Printer className="w-5 h-5 mt-1 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground">Fax</p>
                    <p className="text-muted-foreground">{fax}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 mt-1 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Languages Spoken
                    </p>
                    <p className="text-muted-foreground">
                      {spokenLanguages.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Accessibility className="w-5 h-5 mt-1 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Accessibility
                    </p>
                    <p className="text-muted-foreground">
                      {isWheelchairAccessible
                        ? "Wheelchair accessible"
                        : "Not wheelchair accessible"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-1 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Walk-in Policy
                    </p>
                    <p className="text-muted-foreground">
                      {acceptsWalkIns
                        ? "Walk-ins welcome"
                        : "Appointments only"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Mapbox Card */}
          <Card className="w-full h-[300px] md:h-full overflow-hidden">
            <Map
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: coordinates.longitude,
                latitude: coordinates.latitude,
                zoom: 14,
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/basic-v9"
              interactive={true}
              attributionControl={true}
              reuseMaps
            >
              <Marker
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                anchor="bottom"
              >
                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="-mt-4 animate-bounce"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      className="fill-red-500 stroke-red-500"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      className="fill-white stroke-none"
                    />
                  </svg>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500/20 rounded-full blur-sm" />
                </div>
              </Marker>
            </Map>
          </Card>
        </div>
      </div>
    </section>
  );
}
