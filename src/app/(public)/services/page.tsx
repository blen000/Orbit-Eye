import Image from "next/image";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We offer a comprehensive range of eye care services to ensure your vision and eye health are at their best.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {services.map((service) => {
            const serviceImage = getImage(service.imageId);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                {serviceImage && (
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                    data-ai-hint={serviceImage.imageHint}
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-headline text-2xl font-bold text-primary">{service.title}</h2>
                    <p className="mt-4 flex-grow text-muted-foreground">{service.content}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
