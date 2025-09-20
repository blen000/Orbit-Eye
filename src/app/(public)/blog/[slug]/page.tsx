import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doctors } from "@/lib/data";

function getImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

function getDoctorByName(name: string) {
    return doctors.find(doctor => doctor.name === name);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = getImage(post.imageId);
  const author = getDoctorByName(post.author);
  const authorImage = author ? getImage(author.imageId) : undefined;
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        <article className="prose prose-lg mx-auto max-w-full lg:prose-xl prose-h1:font-headline prose-h1:text-primary prose-a:text-primary hover:prose-a:text-accent prose-strong:text-primary">
          <header className="mb-8 border-b pb-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center gap-4">
              <Avatar>
                {authorImage && <AvatarImage src={authorImage.imageUrl} alt={author?.name} />}
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">
                  Published on {format(new Date(post.date), "MMMM d, yyyy")}
                </p>
              </div>
            </div>
          </header>

          {postImage && (
            <Image
              src={postImage.imageUrl}
              alt={postImage.description}
              width={1200}
              height={600}
              className="mb-8 aspect-video w-full rounded-lg object-cover shadow-lg"
              data-ai-hint={postImage.imageHint}
            />
          )}

          <div className="text-foreground/90">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}
