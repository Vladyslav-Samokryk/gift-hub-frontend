import { LeftStep, useTypedTranslation } from "@src/shared";
import { useState, useEffect, useRef } from "react";
import className from "classnames";

type CallbackFunction = () => void;

export function useInterval (callback: CallbackFunction, delay: number): void {
  const savedCallback = useRef<CallbackFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => savedCallback.current?.();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface RandomMockType {
  img: string;
  cost: number;
}

const randomMock: RandomMockType[] = [
  {
    img: "https://cdn.theatlantic.com/thumbor/RB483UuaqENhbIHsQcAMa73ipOg=/1050x0:3750x2700/1080x1080/media/img/mt/2022/12/What_Gifts_Say/original.jpg",
    cost: 300,
  },
  {
    img: "https://5.imimg.com/data5/HC/EV/MY-15940038/diwali-gift-box.jpg",
    cost: 100,
  },
  {
    img: "https://www.brides.com/thmb/4XSayGNRHjhx7zhMyTAEOweZ4Vo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gif-gettyimages-re-215ebb8f3199469184954bdbf85a5d81.jpg",
    cost: 1000,
  },
  {
    img: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/light%20blue%20gift%20box%20on%20light%20blue%20background-7944-da9c5f12366780c66aedffff40b250d0@1x.jpg",
    cost: 50,
  },
  {
    img: "https://play-lh.googleusercontent.com/jbc0ioconaE4oC5T7SKwYPzWd0nxZRBU9RKD4CHivPwlIL7ExBJXc_x7zvpakO1ne-A",
    cost: 500,
  },
];

function differ (width: number, min: number, max: number): number[] {
  const MAX_STEP = 2000;
  const STEP = 1;
  const px = width / (MAX_STEP / STEP);
  const min_step = min / STEP * px;
  const max_step = max / STEP * px;
  return [max_step - min_step, min_step, max_step];
}

export default function RandomPresent (): JSX.Element {
  const t = useTypedTranslation();
  const [max, setMax] = useState(700);
  const [min, setMin] = useState(200);
  const [random, setRandom] = useState(false);
  const [r, setR] = useState(false);

  const [style0, setStyle0] = useState({
    left: 5,
    size: 21,
    way: true,
  });

  const [style1, setStyle1] = useState({
    left: 20,
    size: 23,
    way: true,
  });

  const [style2, setStyle2] = useState({
    left: 37,
    size: 27,
    way: true,
  });

  const [style3, setStyle3] = useState({
    left: 58,
    size: 23,
    way: true,
  });

  const [style4, setStyle4] = useState({
    left: 75,
    size: 21,
    way: false,
  });


  function getLeft (way, left) {
    return way ? left + 0.1 : left - 0.5;
  }

  function getSize (way, size, left) {
    if (!way) return 21;

    if (left < 45 && size <= 27) {
      return size + 0.015;
    }else {
      return size - 0.03;
    }
  }

  function getWay(left, way) {
    if (way && left >= 75) {
      return false;
    }
    if (!way && left <= 5) {
      return true;
    }
    return way;
  }

  useInterval(() => {
    if (random) {
      setStyle0({
        left: getLeft(style0.way, style0.left), 
        size: getSize(style0.way, style0.size, style0.left), 
        way: getWay(style0.left, style0.way)});

      setStyle1({
        left: getLeft(style1.way, style1.left), 
        size: getSize(style1.way, style1.size, style1.left), 
        way: getWay(style1.left, style1.way)});

      setStyle2({
        left: getLeft(style2.way,style2.left), 
        size: getSize(style2.way, style2.size, style2.left), 
        way: getWay(style2.left, style2.way)});

      setStyle3({
        left: getLeft(style3.way, style3.left), 
        size: getSize(style3.way, style3.size, style3.left), 
        way: getWay(style3.left, style3.way)});

      setStyle4({
        left: getLeft(style4.way, style4.left), 
        size: getSize(style4.way, style4.size, style4.left), 
        way: getWay(style4.left, style4.way)});
    }
  }, 1);

  if(random) {
      setTimeout(() => {setRandom(false); setR(true)}, 10000);
  }

  function getIndex (h, way) {
    if (!way) return 0;
    if (h < 22) return 10;
    if (h < 25) return 20;
    return 30;
  }

  function getStyle (index) {
    if (index === 1) {
      return { left: `${style1.left}vw`, height: `${style1.size}vw`, width: `${style1.size}vw`, zIndex: getIndex(style1.size, style1.way) };
    }

    if (index === 2) {
      return { left: `${style2.left}vw`, height: `${style2.size}vw`, width: `${style2.size}vw`, zIndex: getIndex(style2.size, style2.way) };
    }

    if (index === 3) {
      return { left: `${style3.left}vw`, height: `${style3.size}vw`, width: `${style3.size}vw`, zIndex: getIndex(style3.size, style3.way) };
    }

    if (index === 4) {
      return { left: `${style4.left}vw`, height: `${style4.size}vw`, width: `${style4.size}vw`, zIndex: getIndex(style4.size, style4.way) };
    }

    return { left: `${style0.left}vw`, height: `${style0.size}vw`, width: `${style0.size}vw`, zIndex: getIndex(style0.size, style0.way) };
  }

  function getPresent () {
    const h = [style0.size,style1.size,style2.size,style3.size,style4.size];
    const i = Math.max(...h);
    return h.indexOf(i);
  }

  return (
    <section className='m-3 rounded-2xl bg-purple-100 px-5 py-10'>
      <h2 className='h4'>{t("randomPresent_header1")}</h2>
      <h2 className='h2 bg-gradient-primary-linear bg-clip-text text-right text-transparent'>{t("randomPresent_header2")}</h2>
      <div className='flex items-center justify-around'>
        <div className='flex items-center'><span className='text-[70px] text-purple-900'>1</span><p className='h6'>{t("randomPresent_step1")}</p> </div> <LeftStep/>
        <div className='flex items-center'><span className='text-[70px] text-purple-900'>2</span><p className='h6'>{t("randomPresent_step2")}</p> </div> <LeftStep/>
        <div className='flex items-center'><span className='text-[70px] text-purple-900'>3</span><p className='h6'>{t("randomPresent_step3")}</p> </div>
      </div>
      <div className='my-3 flex flex-col items-center justify-center'>
        <div className="relative my-3 h-8 w-[600px]">
          <div className="absolute top-2 h-2 w-[600px] rounded-sm bg-blue-300"></div>
          <div className='absolute top-2 h-2 bg-gradient-primary-linear' style={{ left: `${differ(600, min, max)[1] + 1}px`, width: `${differ(600, min, max)[0] - 2}px` }}></div>
          <input className="absolute w-[600px]" type='range' min='0' max="2000" step="1" value={min} onChange={(e) => setMin(+e.target.value >= +max - 200 ? +max - 200 : e.target.value)}/>
          <input className="absolute w-[600px]" type='range' min="0" max='2000' step="1" value={max} onChange={(e) => setMax(+e.target.value <= +min + 200 ? +min + 200 : e.target.value)}/>
          <div className="secondary absolute top-10 flex h-7 w-16 items-center justify-center rounded-full bg-white" style={{ left: `${differ(600, min, max)[1] - 33}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }}>
            <p>₴</p>
            <input className="w-10 text-center" type="number" min='0' max="2000" value={min} step='1' onChange={(e) => setMin(+e.target.value >= +max - 200 ? +max - 200 : e.target.value)}/>
          </div>
          <div className="secondary absolute top-10 flex h-7 w-16 items-center justify-center rounded-full bg-white text-center" style={{ left: `${differ(600, min, max)[2] - 33}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }} >
            <p>₴</p>
            <input className="w-10 text-center" value={max} min='0' max="2000" type="number" step='1' onChange={(e) => setMax(+e.target.value <= +min + 200 ? +min + 200 : e.target.value)}/>
          </div>
        </div>
        <button onClick={() => { setRandom(true); setR(false); }} className='second-bold my-10 h-12 w-96 rounded-md bg-blue-700 text-white'>{t("getRandomPresent")}</button>
      </div>

      <div className='mx-5 flex h-[27vw] w-[100vw] whitespace-nowrap '>
        <div className={className("flex items-center w-full", {
          an: random,
          a: !random,
        })}>
          {randomMock.map((el, i) => {
            return <div key={i} className={className("absolute")} style={getStyle(i)}>
              <img src={el.img}/>
            </div>;
          })}

        </div>
      </div>

      <div>
        {!random && r &&
          <div className="w-[27vw] h-[27vw]">
          <img src={randomMock[getPresent()].img}/>
        </div>
        }
      </div>
    </section>
  );
}
