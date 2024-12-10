"use client";

import { Phone, Mail, MapPin, Printer } from "lucide-react";
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
}

export function PharmacyInfo({
  address,
  phone,
  fax,
  email,
  coordinates,
}: PharmacyInfoProps) {
  console.log("Mapbox Token:", process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Printer className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Fax</p>
                  <p className="text-muted-foreground">{fax}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
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
              onError={(e) => console.error("Mapbox Error:", e)}
              onLoad={(e) => console.log("Map Loaded:", e)}
            >
              <Marker
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                anchor="bottom"
              >
                <MapPin className="w-6 h-6 text-primary -mt-3" />
              </Marker>
            </Map>
          </Card>
        </div>
      </div>
    </section>
  );
}
