'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutUI({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Add any routes here where you want to hide the header/footer
  const hideLayout = pathname === "/playground";

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  );
}