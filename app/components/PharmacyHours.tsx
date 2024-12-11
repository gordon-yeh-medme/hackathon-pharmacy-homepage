import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type PharmacyHours } from "@/app/types/pharmacy";
import Link from "next/link";

interface PharmacyHoursProps {
  hours: PharmacyHours;
}

export default function PharmacyHours({ hours }: PharmacyHoursProps) {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Hours of Operation
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Regular Hours Card */}
          <Card className="p-6 bg-card text-card-foreground">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Regular Hours
            </h3>
            <div className="space-y-2">
              {hours.regularHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-1 border-b last:border-b-0 border-border"
                >
                  <span className="font-medium min-w-[100px] text-foreground">
                    {schedule.day}
                  </span>
                  <span className="text-muted-foreground">
                    {schedule.openTime === "Closed"
                      ? "Closed"
                      : `${schedule.openTime} - ${schedule.closeTime}`}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Holiday Hours Card */}
          <Card className="p-6 bg-card text-card-foreground">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Holiday Hours
            </h3>
            <div className="space-y-2">
              {hours.holidayHours.map((holiday) => (
                <div key={holiday.date} className="flex flex-col mb-3">
                  <div className="font-medium text-foreground">
                    {holiday.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {holiday.date}
                  </div>
                  <div className="text-muted-foreground">
                    {holiday.openTime} - {holiday.closeTime}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/booking">
            <Button variant="default" size="lg" className="w-full md:w-auto">
              Book an appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
