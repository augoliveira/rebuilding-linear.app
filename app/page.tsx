import classNames from "classnames";

import { Container } from "../components/container";
import { StarsIllustration } from "../components/icons/stars";
import { Clients } from "../components/sections/clients";
import { HomepageHero } from "../components/sections/homepage-hero";
import { UnlikeAnyTool } from "../components/sections/unlike-any-tool";
import { Card } from "../components/sections/card"
import { Header } from "#/components/header";

export default function Homepage() {
  return (
    <>
    <Header />
      <div className="bg-gray-1100 bg-fixed bg-[url('/grid.svg')]">

        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>

        <Card />

      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "before:bg-radial-faded [--color:#7877C6] before:absolute before:inset-0 before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTool />
    </>
  );
}
