export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  imageId: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageId: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
