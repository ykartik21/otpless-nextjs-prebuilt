'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUser = localStorage.getItem('otplessUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login page if no user information is found
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Dashboard - Next.js OTP-less App</title>
      </Head>

      <main>
        <h1>Dashboard</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.identities[0].identityValue}!</h2>
            <p>User ID: {user.userId}</p>
            <p>Status: {user.status}</p>
            <p>Email: {user.identities[0].identityValue}</p>
            <p>Login Time: {new Date(user.timestamp).toLocaleString()}</p>
            <p>Location: {user.network.ipLocation.city.name}, {user.network.ipLocation.country.name}</p>
            <p>Device: {user.deviceInfo.userAgent}</p>
            {/* Display more user information as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
