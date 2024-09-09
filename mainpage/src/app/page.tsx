import "./page.css";

export default function Home() {
  return (
    <div className="z-[101] absolute inset-0 overflow-auto">
      <div className="bg-iridescent-fluid absolute inset-0 pointer-events-none bg-contain bg-center bg-no-repeat my-5"></div>
      <div className="flex absolute inset-0">
        <div className="text-gray-800 tag-card w-[40%] h-[50%] text-[3em] m-auto p-[1rem] font-bold rounded-2xl border-[solid] backdrop-filter backdrop-blur-[8px]">
          <p className="text-[50%] italic font-['playfair-display']">Hi I'm</p>
          <p className="text-center">KACHAPAT</p>
          <p className="text-center">BUAKHAW</p>
        </div>
      </div>
    </div>
  );
}
