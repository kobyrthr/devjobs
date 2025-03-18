'use client';
import Image from 'next/image';
import logo from '@/../public/logo.svg';
import BgPatternHeader from '@/../public/bg-pattern-header.svg';
import BgPatternHeaderMobile from '@/../public/bg-pattern-header-mobile.svg';
import IconSun from '@/../public/icon-sun.svg';
import IconMoon from '@/../public/icon-moon.svg';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export function AppNavbar({ className = '' }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav
      className={cn(
        className,
        'w-full relative pb-6 h-40 rounded-none flex items-center justify-between gap-3 px-10 lg:px-40'
      )}
    >
      <Image
        src={BgPatternHeader}
        alt="Header Background Pattern"
        className="hidden sm:block absolute rounded-bl-[80px] top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <Image
        src={BgPatternHeaderMobile}
        alt="Header Background Pattern"
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <Link href="/">
        <Image src={logo} alt="Devjobs Logo" />
      </Link>

      <div className="flex gap-4 items-center relative">
        <label htmlFor="theme-switch" className="">
          <Image src={IconSun} alt="Icon Sun" />
        </label>
        <Switch
          id="theme-switch"
          checked={theme == 'dark'}
          onCheckedChange={toggleTheme}
        />
        <label htmlFor="theme-switch" className="">
          <Image src={IconMoon} alt="Icon Moon" />
        </label>
      </div>
    </nav>
  );
}
