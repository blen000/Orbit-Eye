import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Providing exceptional eye care with compassion and cutting-edge technology. Your vision is our priority.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <address className="mt-4 space-y-2 not-italic text-sm text-muted-foreground">
              <p>123 Vision Avenue, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>
                Email: <a href="mailto:contact@clarityclinic.com" className="hover:text-primary transition-colors">contact@clarityclinic.com</a>
              </p>
              <p>
                Phone: <a href="tel:+12125551234" className="hover:text-primary transition-colors">(212) 555-1234</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.name}>
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Clarity Eye Clinic. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
