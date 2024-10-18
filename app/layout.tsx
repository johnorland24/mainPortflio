import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Orland Portfolio | Full Stack Developer",
  description:
    "I’m a Full Stack Developer proficient in React, Next.js, Node.js, MongoDB, Tailwind CSS, and Laravel. Explore my projects showcasing modern web development.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, MongoDB, Tailwind CSS, Laravel, Web Development, Portfolio, John, John Orland Sudoy, Best Full Stack Developer in Philippines, Software Engineer, Best Web Designer, SEO Developer, Front End Developer Portfolio, Front End Developer, Back End Developer, Full Stack Development, Web Application Developer, JavaScript, HTML, CSS, Progressive Web Apps, Responsive Design, Cross-Browser Compatibility, Git, GitHub",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
