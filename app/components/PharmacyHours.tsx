import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type PharmacyHours } from "@/app/types/pharmacy";
import Link from "next/link";

interface PharmacyHoursProps {
  hours: PharmacyHours;
}

export default function PharmacyHours({ hours }: PharmacyHoursProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Hours of Operation</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Regular Hours Card */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Regular Hours</h3>
            <div className="space-y-2">
              {hours.regularHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-1 border-b last:border-b-0 border-muted"
                >
                  <span className="font-medium min-w-[100px]">
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
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Holiday Hours</h3>
            <div className="space-y-2">
              {hours.holidayHours.map((holiday) => (
                <div key={holiday.date} className="flex flex-col mb-3">
                  <div className="font-medium">{holiday.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {holiday.date}
                  </div>
                  <div>
                    {holiday.openTime} - {holiday.closeTime}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/booking">
            <Button size="lg" className="w-full md:w-auto">
              Book an appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
