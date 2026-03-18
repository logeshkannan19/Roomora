'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: React.ComponentProps<'div'>) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('roomora-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, [setTheme]);

  if (!mounted) {
    return <div {...props}>{children}</div>;
  }

  return <div {...props}>{children}</div>;
}
