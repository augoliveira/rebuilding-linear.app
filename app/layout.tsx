"use client"
import Cursor from "#/components/Cursor";
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import SplashScreen from "#/components/SplashScreen"
import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Social from "#/components/Social"
import "../styles/globals.css";
import "../styles/styles.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])
  return (
    <html lang="PT-BR" className="[color-scheme:dark]">
      <head />
      <body className="bg-fill bg-[url('/background.png')] bg-fixed bg-no-repeat">
      {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
        <><div>
              <Cursor />
              <Social />
              <main className="bg-page-gradient pt-navigation-height">
                {children}
              </main>
              <Footer />
              <CopyrightLinearBanner />
            </div><AnalyticsWrapper /></>
        )}
      </body>
    </html>
  );
}
