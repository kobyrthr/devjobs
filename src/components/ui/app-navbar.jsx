import Image from 'next/image';
import logo from '@/../public/logo.svg';
import BgPatternHeader from '@/../public/bg-pattern-header.svg';
import BgPatternHeaderMobile from '@/../public/bg-pattern-header-mobile.svg';
import { cn } from '@/lib/utils';

export function AppNavbar({ className = '' }) {
  return (
    <nav
      className={cn(
        className,
        ' w-full relative h-20 rounded-none flex items-center justify-between gap-3 px-6 sm:px-20 lg:px-40'
      )}
    >
      <Image
        src={BgPatternHeader}
        alt="Header Background Pattern"
        className="hidden sm:block absolute rounded-bl-full top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <Image
        src={BgPatternHeaderMobile}
        alt="Header Background Pattern"
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <Image src={logo} alt="Devjobs Logo" />
    </nav>
  );
}
