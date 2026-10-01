"use client";

import { usePathname } from "next/navigation";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/FooterPage";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}