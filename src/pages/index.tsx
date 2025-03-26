import 'iframe-resizer/js/iframeResizer';
import { useEffect, useRef } from 'react';

export default function Home() {
  const iframe = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // @ts-expect-error - iframeResizer is not typed on Window
    iFrameResize({
      checkOrigin: false,
      heightCalculationMethod: 'taggedElement',
      scrolling: false,
    }, iframe.current);
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">iframe resizer parent</h1>
        <iframe ref={iframe} src="https://iframe-resizer-child.vercel.app" className="max-w-screen-lg w-full mx-auto min-h-64" />
      </main>
    </div>
  );
}
