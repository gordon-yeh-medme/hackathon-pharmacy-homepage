import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  pharmacyName: string;
  className?: string;
}

export function Header({ pharmacyName, className }: HeaderProps) {
  return (
    <header className={cn("w-full bg-background border-border", className)}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            {pharmacyName}
          </h1>
          <Link href="https://medme.development.medmeapp.com/schedule">
            <Button variant="default" className="font-semibold">
              Book Now →
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
