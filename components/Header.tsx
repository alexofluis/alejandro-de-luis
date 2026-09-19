import SlimeText from "@/components/SlimeText";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-6 pt-[20px] pb-16 px-4 md:px-0 md:pt-[20px]">
      {/* Desktop: original single row */}
      <div className="hidden md:grid w-full grid-cols-3 items-center">
        <span className="font-bold text-[40px] justify-self-start">alejandrodeluis</span>
        <a href="#experience" className="justify-self-center">Information</a>
        <a href="https://instagram.com/alejandrodeluis_" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap justify-self-end">
          @alejandrodeluis_
        </a>
      </div>

      <p className="max-w-2xl text-gray-500">
        I'm an industrial designer based in Valencia, with a soft spot for Asian design, late '70s groove, and objects that feel{" "}
        <span className="text-black">just right</span> in every detail. I enjoy experimenting, refining, and
        embracing new challenges to make a design feel effortless.
      </p>

      <p className="max-w-2xl text-gray-500">
        Feel free to reach out for more info, collaborations, or just to{" "}
        <SlimeText text="chat over a coffee" />!
      </p>

      <div className="flex flex-col items-center gap-1">
        <a href="mailto:alexofluis@hotmail.com" className="underline">
          alexofluis@hotmail.com
        </a>
        <span>+34 691 382 281</span>
      </div>
    </header>
  );
}
