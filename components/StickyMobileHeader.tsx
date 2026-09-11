export default function StickyMobileHeader() {
  return (
    <div className="flex md:hidden sticky top-0 z-40 w-full flex-col items-start gap-1 text-left bg-white py-6">
      <span className="font-bold text-[25px]">alejandrodeluis</span>
      <div className="flex flex-col items-start gap-0 leading-tight">
        <span>Information</span>
        <a href="https://instagram.com/alejandrodeluis_" className="whitespace-nowrap">
          @alejandrodeluis_
        </a>
      </div>
    </div>
  );
}
