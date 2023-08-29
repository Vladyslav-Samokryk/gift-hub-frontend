import { useEffect, useState } from 'react';
import {
  Banner,
  LeftArrow,
  RightArrow,
  useInterval,
  useTypedTranslation,
} from '@shared';
import classNames from 'classnames';
import axios from 'axios';

export default function BannerSlider(): JSX.Element {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [banners, setBanners] = useState<[] | Banner[]>([]);
  const [banner, setBanner] = useState(banners[0]);
  const t = useTypedTranslation();

  const setDirection = (direction: 'back' | 'forward'): number => {
    switch (direction) {
      case 'back':
        return bannerIndex > 0 ? bannerIndex - 1 : banners.length - 1;
      case 'forward':
        return bannerIndex < banners.length - 1 ? bannerIndex + 1 : 0;
    }
  };

  useEffect(() => {
    setBanner(banners[bannerIndex]);
  }, [bannerIndex]);

  useEffect(() => {
    async function getBanners() {
      const { data } = await axios.get('https://alex-online-store.fly.dev/api/v1/shop/guest_user/banner_list/');
      setBanners(data);
    }
    getBanners();
  }, []);

  useInterval(() => setBannerIndex(setDirection('forward')), 5000);
  if(banner) return (
    <>
      <div className='relative w-[80%] h-[40vw] px-[10%]'>
        <img src={banner.img} alt={banner.title} className='absolute object-fill w-full h-full z-0'/>
        <div className='w-full h-full absolute z-10 flex items-center justify-between'>
              <button
                className='group m-1 top-[10px] rounded-full w-9 h-9 flex justify-center items-center hover:bg-accent-turkus'
                onClick={() => setBannerIndex(setDirection('back'))}
              >
                <LeftArrow />
              </button>
              <div className="w-[80%]">
                <h1 className='h1'>{banner.title}</h1>
                <h2 className='h2'>{banner.description}</h2>
                <button className='btn-effect bg-black text-white px-9 py-2 primary-bold rounded-lg'>
                  {t('goToSale')}
                </button>
              </div>
              <button
                className='m-1 group rounded-full w-9 h-9 flex justify-center items-center hover:bg-accent-turkus'
                onClick={() => setBannerIndex(setDirection('forward'))}
              >
                <RightArrow />
              </button>
        </div>
      </div>
      <div className='flex justify-center'>
        {banners.map((_, i) => {
          return (
            <button
              key={i}
              className={classNames(
                'border-accent-turkus border-2 rounded-full w-4 h-4 m-1',
                {
                  'bg-accent-turkus': i === bannerIndex,
                  'bg-white': i !== bannerIndex,
                }
              )}
              onClick={() => setBannerIndex(i)}
            />
          );
        })}
      </div>
    </>
  );
  return <div className='w-[80%] h-[40vw] mx-[10%] bg-slate-200'/>
}
