export default function StickyMobileHeader() {
  const content = (
    <>
      <span className="font-bold text-[25px]">alejandrodeluis</span>
      <div className="flex flex-col items-start gap-0 leading-tight">
        <span>Information</span>
        <a
          href="https://instagram.com/alejandrodeluis_"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap"
        >
          @alejandrodeluis_
        </a>
      </div>
    </>
  );

  return (
    <>
      {/* Fixed white bar pinned to the viewport so nothing can ever show through above it */}
      <div
        className="fixed top-0 left-0 w-full bg-white z-50 md:hidden flex flex-col items-start gap-1 text-left px-8"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 2rem)", paddingBottom: "2rem" }}
      >
        {content}
      </div>

      {/* Invisible spacer with identical structure to reserve the layout space */}
      <div
        aria-hidden
        className="flex md:hidden w-full flex-col items-start gap-1 text-left invisible py-8"
      >
        {content}
      </div>
    </>
  );
}
