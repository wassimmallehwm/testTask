import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftDark, ArrowRightDark } from '../../svgs';
import {
  Image,
  Container,
  RelativeContainer,
} from "./style";

const Slider = ({ images }) => {

  const carouselRef = useRef()


  return (
    <RelativeContainer>
      <button
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '40%',
          right: '-10px',
          zIndex: '999',
          border: 'none',
          background: 'transparent'
        }}
        onClick={() => carouselRef?.current.decrement()}>
        <ArrowRightDark />
      </button>
      <Carousel
        ref={carouselRef}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((img, i) => (
          <Container key={img}>
            <Image src={img} />
          </Container>
        ))}
      </Carousel>
      <button
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '40%',
          left: '-10px',
          zIndex: '999',
          border: 'none',
          background: 'transparent'
        }}
        onClick={() => carouselRef?.current.increment()}>
        <ArrowLeftDark />
      </button>
    </RelativeContainer>
  );
};

export default Slider;
