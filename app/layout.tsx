import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helpers/ScrollToTop";




const font = Poppins({
    weight: [ '100','200','300','400','500','600','700','800','900' ],
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel landing page",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>

        <ResponsiveNav />
        {children}
        <Footer />
        
        <ScrollToTop/>
      </body>
    </html>
  );
}
