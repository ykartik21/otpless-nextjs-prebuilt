import { Inter } from 'next/font/google';       
const inter = Inter({ subsets: ['latin'] });          
export const metadata = {
title: 'Next.js OTP-less App',
description: 'Integrate OTP-less sign-in with Next.js',
}; 
export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={inter.className}>{children}</body>
</html>
);
}