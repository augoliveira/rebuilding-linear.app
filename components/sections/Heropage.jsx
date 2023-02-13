/* eslint-disable @next/next/no-img-element */
"use client";
import addParlx from "/common/addParlx.js";
import initIsotope from "/common/initIsotope";
import { Button, Highlight } from "../button";
import { ChevronIcon } from "../icons/chevron";

import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Bg from "/public/img/parallax/bg.jpg";

const Wrapper = styled.div`
  z-index: -3;
`;

const Demos = () => {

  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
      addParlx();
      document.querySelector("body").style.backgroundColor = "#121214";
    }
  }, [pageLoaded]);
  const [displayImage, setDisplayImage] = useState(true);

  useEffect(() => {
    setDisplayImage(false);
  }, []);

  return (
    <>
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        data-overlay-dark="7"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <Button
                    className="translate-y-[-1rem] animate-fade-in opacity-0"
                    href="https://wzap.me/121844149042"
                    variant="secondary"
                    size="small"
                  >
                    <span>Agência de estratégia digital</span>{" "}
                    <Highlight>→</Highlight>
                  </Button>
                  <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#6E4BEC` }}
                    >
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255)` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <h3>
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-900",
                        strings: [
                          "Desenvolvimento de marca",
                          "Comunicação digital",
                          "Grafica e impressos",
                          "Desenvolvimento de sites, landing page",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                        typewriter;
                      }}
                    />
                  </h3>

                <div>
                <Button
                  className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                  href="/"
                  variant="primary"
                  size="large"
                >
                  <span>WhatsApp </span>
                  <Highlight>
                    <ChevronIcon />
                  </Highlight>
                </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}></div>
    </>
  );
};

export default Demos;
