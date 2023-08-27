import { LeftArrow, useTypedTranslation } from '@src/shared';
import React, { useState } from 'react'
import className from 'classnames';

import { useEffect, useRef } from "react";

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
      img: 'pink',
      cost: 300
    },
    {
        img: 'red',
        cost: 100
      },
      {
        img: 'green',
        cost: 1000
      },

      {
        img: 'blue',
        cost: 50
      },
      {
          img: 'purple',
          cost: 500
        },
        /* {
          img: 'yellow',
          cost: 1500
        },
        {
          img: 'green2',
          cost: 400
        },
  
        {
          img: 'blue2',
          cost: 600
        },
        {
            img: 'purple2',
            cost: 800
          },
          {
            img: 'yellow2',
            cost: 1700
          }, */
  ];

  function differ(width:number, min:number, max:number):number[] {
    const MAX_STEP=2000;
    const STEP=1;
    const px = width/(MAX_STEP/STEP);
    const min_step = min/STEP*px;
    const max_step = max/STEP*px;
    return [max_step-min_step, min_step, max_step]
  } 

export default function RandomPresent() {
    const t = useTypedTranslation()
    const [max, setMax] = useState(700);
    const [min, setMin] = useState(200);

/*     const [banner, setBanner] = useState(randomMock);
    const lastIndex = randomMock.length - 1;

    useInterval(() => {
        let a = banner[lastIndex];
        setBanner([a, ...banner.filter((el) => el.cost !== a.cost)])
    }, 5000); */

  return (
    <section className='bg-purple-100 rounded-2xl m-3 py-10 px-5'>
        <h2 className='h4'>{t("randomPresent_header1")}</h2>
        <h2 className='h2 text-transparent bg-clip-text bg-gradient-primary-linear text-right'>{t("randomPresent_header2")}</h2>
        <div className='flex items-center justify-around'>
            <div className='flex items-center'><span className='text-[70px] text-purple-900'>1</span><p className='h6'>{t('randomPresent_step1')}</p> </div> <LeftArrow/>
            <div className='flex items-center'><span className='text-[70px] text-purple-900'>2</span><p className='h6'>{t('randomPresent_step2')}</p> </div> <LeftArrow/>
            <div className='flex items-center'><span className='text-[70px] text-purple-900'>3</span><p className='h6'>{t('randomPresent_step3')}</p> </div>
        </div>
        <div className='flex flex-col items-center justify-center my-3'>
            <div className="relative h-8 w-[600px] my-3">
                <div className="w-[600px] h-2 bg-blue-300 absolute top-2 rounded-sm"></div>
                <div className='h-2 bg-gradient-primary-linear absolute top-2' style={{left: `${differ(600, min, max)[1]+1}px`, width: `${differ(600, min, max)[0]-2}px`}}></div>
                <input className="absolute w-[600px]" type='range' min='0' max="2000" step="1" value={min} onChange={(e) => setMin(+e.target.value >= +max-200 ? +max-200 : e.target.value)}/>
                <input className="absolute w-[600px]" type='range' min="0" max='2000' step="1" value={max} onChange={(e) => setMax(+e.target.value <= +min+200 ? +min+200 : e.target.value)}/>
                <div className="flex items-center justify-center bg-white secondary absolute rounded-full w-16 h-7 top-10" style={{left:`${differ(600, min, max)[1]-33}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))"}}>
                <p>₴</p>
                <input className="w-10 text-center" type="number" min='0' max="2000" value={min} step='1' onChange={(e) => setMin(+e.target.value >= +max-200? +max-200 : e.target.value)}/>
                </div>
                <div className="flex items-center justify-center bg-white secondary absolute rounded-full text-center w-16 h-7 top-10" style={{left: `${differ(600, min, max)[2]-33}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))"}} >
                <p>₴</p>
                <input className="w-10 text-center" value={max} min='0' max="2000" type="number" step='1' onChange={(e) => setMax(+e.target.value <= +min+200 ? +min+200 : e.target.value)}/>
                </div>
            </div>
            <button className='my-10 rounded-md bg-blue-700 text-white second-bold w-96 h-12'>{t("getRandomPresent")}</button>
        </div>
{/*        <div className='flex items-center w-max h-96 mx-5'>
            {randomMock.map((el, i) => {
        return <div className={className('w-96 h-96 border-black bg-white border-2', {
            "transition ease-in-out scale-125": i === 2,
            "transition ease-in-out scale-100": i === 3 || i === 1,
            "transition ease-in-out scale-75": i === 0 || i === 4
        })}> 
            <p>{el.img}</p>
            <b>{el.cost}</b>
        </div>
      })}  
        </div>

        <div className='w-10 h-10 border-2 border-black transition-all duration-500 translate-x-full scale-150'>{banner[0].cost}</div>
     */}
    </section>
  )
}
