import { Button } from "@/components/ui/button";
import Link from "next/link";

interface StickyBottomBarProps {
  pharmacyName: string;
}

export function StickyBottomBar({ pharmacyName }: StickyBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 md:hidden">
      <div className="container flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary-foreground">
          {pharmacyName}
        </h2>
        <Link href="/booking">
          <Button variant="secondary" className="font-semibold">
            Book Now →
          </Button>
        </Link>
      </div>
    </div>
  );
}
