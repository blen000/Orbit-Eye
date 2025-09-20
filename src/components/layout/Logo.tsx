import { Eye } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-primary',
        className
      )}
    >
      <div className="rounded-full bg-primary p-2 text-primary-foreground">
        <Eye className="h-5 w-5" />
      </div>
      <span className="font-headline">Clarity Eye Clinic</span>
    </Link>
  );
}
