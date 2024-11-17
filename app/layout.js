import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Grass Konbini",
  description: "Adam is Hella Sus aint gonna lie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-slate-100 flex flex-row min-h-[100vh]"
      >
       
        <div className=" w-full">{children}</div>

        
      </body>
      
    </html>
  );
}
