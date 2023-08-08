import { JetBrains_Mono, Poppins } from 'next/font/google';

export const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--jetbrains-mono',
});

export const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--poppins',
});
