import Image from "next/image";
import { AboutUs as AboutUsType } from "@/app/types/pharmacy";

interface AboutUsProps {
  data: AboutUsType;
}

export function AboutUs({ data }: AboutUsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={data.image}
              alt="About Our Pharmacy"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{data.title}</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
