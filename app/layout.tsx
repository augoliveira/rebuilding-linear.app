import Cursor from "#/components/Cursor";
import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";
import "../styles/styles.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-fixed bg-gray-1100 bg-[url('/grid.svg')]">
        <div>
          <Header />
          <Cursor />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
          <CopyrightLinearBanner />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
