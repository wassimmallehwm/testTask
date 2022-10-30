import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import {
  Container,
  Wrapper,
  Text,
  Slide,
  SliderBtn,
  MobileCard,
  ImageCard,
  WrapPlayer,
  WrapControl,
  ButtonVolumeMobile,
  TextSelect,
  ContainerSelect,
  ContainerCloseButton,
  ContainerButton,
  ContainerCloseButtonMobile,
  TextMobile, ContainerModal, ContainerInnerModal
} from "./style/custom-styles";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CustomButton, CustomSelectbox, PlayButton, Slider } from "./components";

import productJson from "./product.json";
import PlayerControl from "./components/playerControl/PlayerControl";
import { ArrowLeft, ArrowRight, Times, VolumeOff, VolumeOn } from "./svgs";

const init_progress = {
  played: 0,
  playedSeconds: 0,
  loaded: 0,
  loadedSeconds: 0
}

function App() {
  const [play, setPlay] = useState(true)
  const [volume, setVolume] = useState(true)
  const [progress, setProgress] = useState(init_progress)
  const [modalVisible, setModalVisible] = useState(false)
  const videoPlayer = useRef([])
  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [product, setProduct] = useState(null)


  const nextSlide = () => {
    let index = currentIndex + 1
    if (currentIndex === productJson?.length - 1) {
      index = 0
    }
    setCurrentIndex(index);
    carouselRef.current.increment()
  };

  const prevSlide = () => {
    let index = currentIndex - 1
    if (currentIndex === 0) {
      index = productJson?.length - 1
    }
    setCurrentIndex(index);
    carouselRef.current.decrement()
  };


  useEffect(() => {
    setProduct(productJson[currentIndex])
  }, [currentIndex])


  const onSwipe = (index) => {
    setCurrentIndex(index)
    setProgress(init_progress)
  }

  return product && (
    <>
      <SliderBtn up onClick={prevSlide}>
        <ArrowLeft />
      </SliderBtn>

      <SliderBtn onClick={nextSlide}>
        <ArrowRight />
      </SliderBtn>

      <Slide active={true} >
        <WrapControl>
          <Carousel
            ref={carouselRef}
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            onChange={onSwipe}
            axis="vertical"
          >
            {productJson.map((prod, i) => {
              return (
                <WrapPlayer key={i} onClick={() => setPlay(!play)}>
                  {window?.innerWidth > 500
                    ? null
                    : <ContainerCloseButtonMobile>
                      <Times />
                    </ContainerCloseButtonMobile>
                  }
                  {
                    play === false && <PlayButton />
                  }
                  <ReactPlayer
                    ref={el => videoPlayer.current[i] = el}
                    className="react-player"
                    url={prod?.video}
                    playing={play}
                    loop={true}
                    muted={volume}
                    pip={true}
                    onProgress={(progress) => {
                      setProgress(progress);
                    }}
                    playsinline={true}
                  />
                  <PlayerControl setVolume={setVolume} reload={() => videoPlayer.current[i].seekTo(0, 'seconds')} volume={volume} progress={progress} />
                </WrapPlayer>
              )
            })}
          </Carousel>
        </WrapControl>
        <Wrapper show>
          <Container col justify>
            <ContainerCloseButton>
              <Times />
            </ContainerCloseButton>
            <Slider images={product?.images} />
            <Container col items margin>
              <Text>{product?.name}</Text>
              <Text bigger margin>{product?.price}</Text>
            </Container>
            <ContainerSelect>
              <TextSelect>colour</TextSelect>
              <CustomSelectbox disabled name={'colour'}>
                <option value="" hidden>
                  {product?.color}
                </option>
              </CustomSelectbox>
            </ContainerSelect>
            <ContainerSelect>
              <TextSelect>size</TextSelect>
              <CustomSelectbox>
                <option value="" hidden style={{}}>
                  Select one size
                </option>
                {product?.sizes.map((size) => (
                  <option value={size} key={size}>
                    {size}
                  </option>
                ))}
              </CustomSelectbox>
            </ContainerSelect>
            <ContainerButton>
              <CustomButton title="Add to cart" primary />
              <CustomButton title="Product details" />
            </ContainerButton>
          </Container>
        </Wrapper>
        <ButtonVolumeMobile onClick={() => setVolume(!volume)}>
          {volume ? <VolumeOff /> : <VolumeOn />}
        </ButtonVolumeMobile>
        <MobileCard onClick={() => setModalVisible(true)}>
          <ImageCard src={product?.images[0]} alt="" />
          <Container col items>
            <Container padding col items>
              <TextMobile primary>{product?.name}</TextMobile>
              <TextMobile bold primary>
                {product?.price}
              </TextMobile>
              <CustomButton title="Shop" primary width="fit-content" />
            </Container>
          </Container>
        </MobileCard>
        {modalVisible
          ? <ContainerModal>
            <ContainerInnerModal col justify>
              <ContainerCloseButton modal onClick={() => setModalVisible(false)}>
                <Times />
              </ContainerCloseButton>
              <Slider images={product?.images} />
              <Container col items margin>
                <Text>{product?.name}</Text>
                <Text bigger margin>{product?.price}</Text>
              </Container>
              <ContainerSelect>
                <TextSelect>colour</TextSelect>
                <CustomSelectbox disabled name={'colour'}>
                  <option value="" hidden>
                    {product?.color}
                  </option>
                </CustomSelectbox>
              </ContainerSelect>
              <ContainerSelect>
                <TextSelect>size</TextSelect>
                <CustomSelectbox>
                  <option value="" hidden style={{}}>
                    Select one size
                  </option>
                  {product?.sizes.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </CustomSelectbox>
              </ContainerSelect>
              <ContainerButton>
                <CustomButton title="Add to cart" primary />
                <CustomButton title="Product details" />
              </ContainerButton>
            </ContainerInnerModal>
          </ContainerModal>
          : ''}
      </Slide>
    </>
  );
}

export default App;
