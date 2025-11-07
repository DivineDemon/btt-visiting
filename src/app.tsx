import BowImage from "./assets/img/bow.png";

// import FacebookIcon from "./assets/img/facebook.svg";
// import InstagramIcon from "./assets/img/instagram.svg";
// import QRCode from "./assets/img/qr.png";
// import TikTokIcon from "./assets/img/tiktok.svg";

const weavePatternSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <defs>
      <pattern id="weave" patternUnits="userSpaceOnUse" width="28" height="28">
        <rect width="14" height="28" fill="#FFB6C1" fill-opacity="0.45"/>
        <rect x="14" width="14" height="28" fill="transparent"/>
        <rect width="28" height="14" fill="#FFB6C1" fill-opacity="0.45" />
        <rect y="14" width="28" height="14" fill="transparent"/>
      </pattern>
    </defs>
    <rect width="28" height="28" fill="url(#weave)"/>
  </svg>
`);

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      {/* Business Card Front */}
      {/* <div className="relative h-[326px] w-[525px] overflow-hidden border border-gray-300">
        <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0 }}>
          <defs>
            <filter id="raggedy-edge" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.12 0.15" numOctaves="5" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <radialGradient id="purple-gradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgb(220, 205, 225)" stopOpacity="0.28" />
              <stop offset="40%" stopColor="rgb(195, 180, 200)" stopOpacity="0.42" />
              <stop offset="70%" stopColor="rgb(170, 155, 175)" stopOpacity="0.56" />
              <stop offset="100%" stopColor="rgb(150, 135, 155)" stopOpacity="0.665" />
            </radialGradient>
            <radialGradient id="green-gradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgb(220, 235, 230)" stopOpacity="0.28" />
              <stop offset="40%" stopColor="rgb(195, 215, 205)" stopOpacity="0.42" />
              <stop offset="70%" stopColor="rgb(170, 195, 180)" stopOpacity="0.56" />
              <stop offset="100%" stopColor="rgb(150, 170, 160)" stopOpacity="0.665" />
            </radialGradient>
            <radialGradient id="blend-gradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgb(210, 210, 220)" stopOpacity="0.21" />
              <stop offset="50%" stopColor="rgb(185, 185, 195)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="rgb(160, 160, 170)" stopOpacity="0.49" />
            </radialGradient>
          </defs>
        </svg>
        <div
          className="absolute"
          style={{
            left: "36%",
            top: "50%",
            width: "178px",
            height: "155px",
            transform: "translate(-50%, -50%) rotate(-8deg)",
            mixBlendMode: "multiply",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 140 120">
            <path
              d="M 70 15 Q 50 8 35 20 Q 20 35 25 50 Q 18 65 30 75 Q 45 85 60 90 Q 75 95 90 88 Q 105 82 115 70 Q 125 55 120 40 Q 115 25 100 20 Q 85 15 70 15 Z"
              fill="url(#purple-gradient)"
              filter="url(#raggedy-edge)"
            />
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            left: "25%",
            top: "52%",
            width: "100px",
            height: "90px",
            transform: "translate(-50%, -50%) rotate(12deg)",
            mixBlendMode: "multiply",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 90">
            <path
              d="M 50 12 Q 35 8 25 18 Q 15 30 20 42 Q 12 55 25 62 Q 38 70 52 73 Q 65 76 75 68 Q 85 58 82 45 Q 78 30 65 25 Q 52 20 50 12 Z"
              fill="url(#purple-gradient)"
              filter="url(#raggedy-edge)"
            />
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            right: "36%",
            top: "50%",
            width: "190px",
            height: "167px",
            transform: "translate(50%, -50%) rotate(10deg)",
            mixBlendMode: "multiply",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 150 130">
            <path
              d="M 75 18 Q 55 10 38 22 Q 22 38 28 52 Q 20 68 35 78 Q 50 88 68 93 Q 85 98 102 91 Q 118 83 128 70 Q 138 54 133 38 Q 128 22 110 18 Q 92 15 75 18 Z"
              fill="url(#green-gradient)"
              filter="url(#raggedy-edge)"
            />
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            right: "25%",
            top: "52%",
            width: "110px",
            height: "95px",
            transform: "translate(50%, -50%) rotate(-15deg)",
            mixBlendMode: "multiply",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 110 95">
            <path
              d="M 55 14 Q 40 10 28 20 Q 16 32 22 44 Q 14 58 28 65 Q 42 72 58 75 Q 72 78 85 70 Q 98 60 94 47 Q 90 32 75 28 Q 60 24 55 14 Z"
              fill="url(#green-gradient)"
              filter="url(#raggedy-edge)"
            />
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            width: "201px",
            height: "178px",
            transform: "translate(-50%, -50%) rotate(5deg)",
            mixBlendMode: "multiply",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 160 140">
            <path
              d="M 80 20 Q 60 12 42 25 Q 25 40 32 55 Q 22 72 40 82 Q 58 92 78 97 Q 98 102 118 94 Q 135 85 142 70 Q 148 52 140 36 Q 132 20 110 16 Q 88 12 80 20 Z"
              fill="url(#blend-gradient)"
              filter="url(#raggedy-edge)"
            />
          </svg>
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5">
          <span className="w-full text-center font-great-vibes font-medium text-[60px] leading-[60px]">
            Bend the Trend
          </span>
          <span className="w-full text-center font-crimson-text font-semibold text-[20px] text-black/65 leading-[20px] tracking-tight">
            set your new path in this month
          </span>
        </div>
      </div> */}
      {/* Business Card Back */}
      {/* <div className="flex h-[326px] w-[525px] flex-col items-start justify-between border border-gray-300 p-10">
        <span className="w-full text-center font-great-vibes font-medium text-[48px] leading-[48px]">
          Thank you for your order
        </span>
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <span className="w-full text-left font-crimson-text font-semibold text-[30px] leading-[30px]">
            Ameena Mirza
          </span>
          <span className="font- w-full text-left font-crimson-text text-[20px] text-black/65 leading-[20px]">
            Founder & CEO
          </span>
        </div>
        <div className="flex w-full items-center justify-center gap-5">
          <img src={QRCode} alt="QR Code" className="w-22 rounded-lg border border-gray-300 grayscale" />
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-3.5">
            <div className="flex w-full items-center justify-center gap-2.5">
              <img src={InstagramIcon} alt="Instagram" className="size-5" />
              <span className="w-full text-left font-crimson-text text-[16px] leading-[16px]">@bendthe._.trend</span>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5">
              <img src={TikTokIcon} alt="TikTok" className="size-5" />
              <span className="w-full text-left font-crimson-text text-[16px] leading-[16px]">@bendthetrend49</span>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5">
              <img src={FacebookIcon} alt="Facebook" className="size-5" />
              <span className="w-full text-left font-crimson-text text-[16px] leading-[16px]">
                facebook.com/61580444663597
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Nail Card */}
      <div
        className="h-[715px] w-[570px] p-10"
        style={{
          backgroundColor: "#FCEEF3",
          backgroundImage: `url("data:image/svg+xml,${weavePatternSvg}")`,
          backgroundSize: "28px 28px",
        }}
      >
        <div className="relative h-full w-full rounded-4xl border-2 border-black bg-white p-10">
          <img src={BowImage} alt="Bow" className="-top-25 -right-10 absolute w-1/2 rotate-[12.5deg]" />
          <span className="w-full text-center font-great-vibes font-medium text-[45px] leading-[45px]">
            Bend the Trend
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
