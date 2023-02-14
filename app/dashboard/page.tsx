'use client';
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "#/ui/CompareSlider";
import Footer from "#/ui/Footer";
import Header from "#/ui/Header";
import LoadingDots from "#/ui/LoadingDots";
import ResizablePanel from "#/ui/ResizablePanel";
import Toggle from "#/ui/Toggle";
import appendNewToName from "#/utils/appendNewToName";
import downloadPhoto from "#/utils/downloadPhoto";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },
};

export default function Dashboard() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null)
  const [restoredImage, setRestoredImage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false)
  const [sideBySide, setSideBySide] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [photoName, setPhotoName] = useState<string | null>(null)

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName)
          setOriginalPhoto(file[0].fileUrl.replace('raw', 'thumbnail'))
          generatePhoto(file[0].fileUrl.replace('raw', 'thumbnail'))
        }
      }}
      width="670px"
      height="250px"
    />
  )

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageUrl: fileUrl })
    })

    let newPhoto = await res.json()
    if (res.status !== 200) {
      setError(newPhoto)
    } else {
      setRestoredImage(newPhoto)
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <Head>
        <title>Restaurar imagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mt-4 mb-8 flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mb-0">
        <a
          href="https://youtu.be/FRQtFDDrUXQ"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 mb-5 rounded-2xl border py-1 px-4 text-sm transition duration-300 ease-in-out hover:scale-105"
        >
          Você precisa de image de alta qualidade?{' '}
          <span className="font-bold">Restaura aqui</span>.
        </a>
        <h1 className="font-display text-slate-900 mx-auto mb-5 max-w-4xl text-4xl font-bold tracking-normal sm:text-6xl">
          Restaurar agora
        </h1>
        <p className="text-slate-500">
          {' '}
          {/* Obtained this number from Vercel: based on how many serverless invocations happened. */}
          <CountUp start={50000} end={174851} duration={2} separator="," />{' '}
          fotos geradas e contando.
        </p>
        <ResizablePanel>
          <AnimatePresence exitBeforeEnter>
            <motion.div className="mt-4 flex w-full flex-col items-center justify-between">
              <Toggle
                className={`${restoredLoaded ? 'visible' : 'invisible'} mb-6`}
                sideBySide={sideBySide}
                setSideBySide={(newVal) => setSideBySide(newVal)}
              />
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              {!originalPhoto && <UploadDropZone />}
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div>
                    <h2 className="mb-1 text-lg font-medium">Original Photo</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="relative rounded-2xl"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="mt-8 sm:mt-0">
                    <h2 className="mb-1 text-lg font-medium">Restored Photo</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <Image
                        alt="restored photo"
                        src={restoredImage}
                        className="relative mt-2 cursor-zoom-in rounded-2xl sm:mt-0"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-black hover:bg-black/80 w-40 mt-8 rounded-full px-4 pt-2 pb-3 font-medium text-white"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border-red-400 text-red-700 mt-8 rounded-xl border px-4 py-3"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex justify-center space-x-2">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null)
                      setRestoredImage(null)
                      setRestoredLoaded(false)
                      setError(null)
                    }}
                    className="bg-black hover:bg-black/80 mt-8 rounded-full px-4 py-2 font-medium text-white transition"
                  >
                    Upload Image
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(restoredImage!, appendNewToName(photoName!))
                    }}
                    className="text-black mt-8 rounded-full border bg-white px-4 py-2 font-medium transition hover:bg-gray-100"
                  >
                    Download Image restaurada
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  )
};
