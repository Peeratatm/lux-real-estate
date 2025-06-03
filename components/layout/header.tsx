'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/use-translation';
import { useAuth } from '@/hooks/use-auth';
import LanguageSwitcher from '@/components/layout/language-switcher';
import ThemeToggle from '@/components/layout/theme-toggle';
import UserMenu from '@/components/layout/user-menu';

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === '/';
  
  // Apply transparent header on home page when at the top
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.properties'), href: '/properties' },
    { name: t('nav.agents'), href: '/agents' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-background/80 backdrop-blur-md border-b'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Home className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-primary'}`} />
              <span className="font-bold text-xl">LuxEstate</span>
            </Link>
            
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium ${
                    isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/70 hover:text-foreground'
                  } transition-colors after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[2px] after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    pathname === item.href ? 'after:scale-x-100' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher transparent={isTransparent} />
              <ThemeToggle transparent={isTransparent} />
              
              {user ? (
                <UserMenu transparent={isTransparent} />
              ) : (
                <>
                  <Button
                    asChild
                    variant={isTransparent ? 'outline' : 'ghost'}
                    className={isTransparent ? 'border-white text-white hover:bg-white/10' : ''}
                  >
                    <Link href="/auth/login">{t('auth.login')}</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/register">{t('auth.register')}</Link>
                  </Button>
                </>
              )}
            </div>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Home className="h-6 w-6 text-primary" />
                      <span className="font-bold text-xl">LuxEstate</span>
                    </Link>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col space-y-4 mb-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium px-2 py-2 rounded-md ${
                          pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col space-y-4 mt-auto mb-8">
                    <div className="flex items-center justify-between">
                      <LanguageSwitcher />
                      <ThemeToggle />
                    </div>
                    
                    {user ? (
                      <div className="space-y-2">
                        <Link
                          href="/dashboard"
                          className="block w-full text-center px-4 py-2 bg-primary/10 text-primary rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('nav.dashboard')}
                        </Link>
                        <Button 
                          variant="ghost" 
                          className="w-full"
                          onClick={() => {
                            // Handle logout logic
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {t('auth.logout')}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full"
                        >
                          <Link 
                            href="/auth/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t('auth.login')}
                          </Link>
                        </Button>
                        <Button 
                          asChild
                          className="w-full"
                        >
                          <Link 
                            href="/auth/register"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t('auth.register')}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}