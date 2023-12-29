import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { useGetBannersQuery } from "app/api/banner";
import { useNavigate } from "react-router-dom";
import { LeftArrow, RightArrow } from "shared/assets/svg/Arrows";
import { SCREEN } from "shared/constants/screens";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useScreenWidth } from "shared/hooks/useScreenWidth";

export default function BannerSlider(): JSX.Element {
  const lang = useGetCurrentLang();
  const { data = [], error, isLoading } = useGetBannersQuery(lang);
  const windowWidth = useScreenWidth();
  const navigate = useNavigate();

  if (isLoading || !data.length || error) {
    return (
      <div className="m-auto h-[530px] min-h-[240px] w-[90vw] animate-pulse bg-slate-200" />
    );
  }

  const slides = data.map((banner, index) => {
    return (
      <Slide index={index} key={index}>
        <Image
          src={windowWidth > SCREEN.SM ? banner.img : banner.mobileImg}
          alt={banner.link}
          onClick={() => navigate(banner.link)}
          className="!h-fit !w-[90vw] object-cover"
          hasMasterSpinner
        />
      </Slide>
    );
  });

  return (
    <CarouselProvider
      naturalSlideWidth={240}
      interval={5000}
      naturalSlideHeight={200}
      totalSlides={data.length}
      visibleSlides={1}
      currentSlide={1}
      infinite
      isPlaying
      className="relative m-auto mb-20 mt-10 h-[530px] min-h-[240px] w-[90vw] sm:h-[25vw]"
    >
      <Slider className="h-full w-full">{slides}</Slider>
      <DotGroup className="mt-3 flex justify-center" />
      {windowWidth > SCREEN.SM && (
        <>
          <ButtonBack className="group absolute top-[50%] m-1 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-blue-700">
            <LeftArrow />
          </ButtonBack>
          <ButtonNext className="group absolute right-0 top-[50%] m-1 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-blue-700">
            <RightArrow />
          </ButtonNext>
        </>
      )}
    </CarouselProvider>
  );
}
