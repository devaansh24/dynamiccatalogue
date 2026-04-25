import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Dynamic Multi-Category Catalog",
  description: "Starter project for the frontend developer assignment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
