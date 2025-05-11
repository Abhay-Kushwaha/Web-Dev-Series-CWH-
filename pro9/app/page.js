'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionWrapper from "@/components/SessionWrapper";
import "@/app/globals.css"

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <SessionWrapper>
      <>
        <Navbar />
        <div className="main-content container mt-4">
          {status === "loading" ? (
            <p>Loading session...</p>
          ) : session ? (
            <>
              <p>Signed in as {session.user.email}</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              <p>Not signed in</p>
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </div>
        <Footer />
      </>
    </SessionWrapper>
  );
}

// import React from 'react'
// export default function Home() {
//   // const [count, setCount]= useState(0)
//   return (
//     <div>
//       <Navbar />
//       my web page
//       <Footer/>
//     </div>
//   );
// }

