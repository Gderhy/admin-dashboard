"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  
  
  // Redirect to the dashboard page
  const router = useRouter();
  function redirect() {
    router.push("/dashboard");
  }
  redirect();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}
