import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helpers/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";




const font = Poppins({
    weight: [ '100','200','300','400','500','600','700','800','900' ],
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel landing page",
};



const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={publishableKey}>
        <html lang="en">
            <body className={`${font.className}`}>

                <ResponsiveNav />
                {children}
                <Footer />
                
                <ScrollToTop/>
            </body>
        </html>
    </ClerkProvider>
  );
}
