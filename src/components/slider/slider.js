import { Carousel } from 'react-responsive-carousel';
import {
  Image,
  Container,
  RelativeContainer,
} from "./style";

const Slider = ({ images }) => {

  return (
    <RelativeContainer>
      <Carousel
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((img, i) => (
          <Container key={img}>
            <Image src={img} />
          </Container>
        ))}
      </Carousel>
    </RelativeContainer>
  );
};

export default Slider;
