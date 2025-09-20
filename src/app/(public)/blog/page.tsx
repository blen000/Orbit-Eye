import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function BlogPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Orbit Clinic Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Insights and articles on eye health, clinic news, and wellness from our experts.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const postImage = getImage(post.imageId);
            return (
              <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                {postImage && (
                  <Link href={`/blog/${post.slug}`} className="block">
                    <Image
                      src={postImage.imageUrl}
                      alt={postImage.description}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover"
                      data-ai-hint={postImage.imageHint}
                    />
                  </Link>
                )}
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                    <span className="mx-2">&middot;</span>
                    <span>{post.author}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
