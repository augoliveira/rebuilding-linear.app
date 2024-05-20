import Cursor from "#/components/Cursor";
import { usePathname } from "next/navigation"
import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Social from "#/components/Social"
import "../styles/globals.css";
import "../styles/styles.css";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="PT-BR" className="[color-scheme:dark]">
      <head />
      <body className="bg-fill bg-[url('/background.png')] bg-fixed bg-no-repeat">

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
