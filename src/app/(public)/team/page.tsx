import Image from "next/image";
import { doctors } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function TeamPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Meet Our Expert Team</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our ophthalmologists are dedicated to providing the highest standard of care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => {
            const doctorImage = getImage(doctor.imageId);
            return (
              <Card key={doctor.id} className="overflow-hidden text-center shadow-lg transition-transform hover:scale-105">
                <div className="bg-secondary p-8">
                  {doctorImage && (
                    <Image
                      src={doctorImage.imageUrl}
                      alt={doctorImage.description}
                      width={400}
                      height={400}
                      className="mx-auto h-48 w-48 rounded-full object-cover ring-4 ring-white"
                      data-ai-hint={doctorImage.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{doctor.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground">{doctor.specialty}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{doctor.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
