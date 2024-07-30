'use client'
//Z9B4IQPD2I7L8AYS9CNL

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Load the OTP-less SDK and handle login
    const script = document.createElement('script');
    script.src = 'https://otpless.com/v2/auth.js';
    script.id = 'otpless-sdk';
    script.setAttribute('data-appid', 'Z9B4IQPD2I7L8AYS9CNL');
    script.async = true;
    script.onload = () => {
      console.log('OTpless SDK script loaded');
      // Handle SDK initialization
      window.otpless = (otplessUser) => {
        console.log('OTpless User:', otplessUser);
        // Save user information to local storage
        localStorage.setItem('otplessUser', JSON.stringify(otplessUser));
        // Redirect to the user dashboard page
        router.push('/dashboard');
      };
    };
    script.onerror = () => console.error('Error loading OTpless SDK script');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [router]);

  return (
    <div>
      <Head>
        <title>Login - Next.js OTP-less App</title>
      </Head>

      <main>
        <h1>Login</h1>
        {/* OTPLESS Login UI */}
        <div id="otpless-login-page"></div>
      </main>
    </div>
  );
}
