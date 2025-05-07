import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "@/components/Footer"; import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         <Navbar />
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//         <Footer />
//       </>
//     )
//   }
//   return (
//     <>
//       <Navbar />
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//       <Footer />
//     </>
//   )
// }

import React from 'react'

export default function Home() {
  // const [count, setCount]= useState(0)
  return (
    <div>
      <Navbar />
      my
      <Footer/>
    </div>
  );
}

