
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";
import Header from "@/components/header";



const inter = Inter({ subsets: ["latin"] }) ;
export const metadata = {
  title: "XCRUM",
  description: "Product Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
       appearance={
        {
          baseTheme: shadesOfPurple,
          variables: {
            colorPrimary: "#4F46E5",
            colorBackground: "#1F2937",
            colorInputBackground: "#2D3748",
            colorInputText: "#F3F4F6",
           
          },
        }
       }
    >
      <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dotted-background`}>
         <ThemeProvider attribute="class" defaultTheme="dark" >

        <Header />

        <main className="min-h-screen">
        {children} {/*  page -- home */}
        </main>
         <Toaster richColors/>
        <footer className=" bg-gray-900 py-12 ">
       <div className="container mx-auto px-4 text-center text-gray-200"> 
       <p>Made with ❤️  by AKM</p>
       </div>
        </footer>
                </ThemeProvider>

      </body>
    </html>

    </ClerkProvider>
  );
}
