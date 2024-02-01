import Carousel from 'react-bootstrap/Carousel';
import img1 from '../res/img1.jpg';

function GarbageSnapCarousel() {
    const style = {
        width: '70%',
    }
      
  return (
    <Carousel variant="dark" className='my-5 bg-dark'>
      <Carousel.Item interval={10000}>
            <div class="d-flex justify-content-center">
                <img src={img1} style={style}></img>
            </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
            <div class="d-flex justify-content-center">
                <img src={img1} style={style}></img>
            </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
            <div class="d-flex justify-content-center">
                <img src={img1} style={style}></img>
            </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GarbageSnapCarousel;