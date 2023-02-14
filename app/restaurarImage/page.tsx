'use client';

import { useRouter } from 'next/navigation';
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "#/ui/Header";
import SquigglyLines from "#/ui/SquigglyLines";
import { Testimonials } from "#/ui/Testimonials";
import { Analytics } from '@vercel/analytics/react';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <Analytics />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1620493265865957376"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Usado por mais de <span className="font-black">100,000</span> cliente satisfeito
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restaure image{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">para alta qualidade</span>
          </span>{" "}
          Rapido e facil.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        Tem fotos de rosto antigas e embaçadas? Deixe a <span  className="relative whitespace-nowrap text-[#3290EE]">up</span> restaurá-los para que essas memórias possam viver. – restaure suas fotos hoje.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            onClick={() => router.push('/')}
          >
            Home
          </button>
          <button className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80" type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Foto original</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">foto restaurada</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
    </div>
  );
};

export default Home;
