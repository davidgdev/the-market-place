import React, { Component } from 'react'
import FeaturedProductCard from './FeaturedProductCard'
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import '../sass/components/_FeaturedProducts.scss'

const CARD_WIDTH = 270;

class FeaturedProducts extends Component {
    state = {
      cards: 2
    };
  
    selfRef = React.createRef();

    updateDimensions = () => {
      this.setState({
        width: this.selfRef.current.offsetWidth,
        cards: Math.floor(this.selfRef.current.offsetWidth / CARD_WIDTH) || 1
      });
    };

    componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
    render() {
        return (
            <section className="featured_products-container"
              ref={this.selfRef}
            >
                <h2>featured Products</h2>
                  <CarouselProvider 
                    isPlaying= 'false'
                    naturalSlideWidth={CARD_WIDTH}
                    naturalSlideHeight={340}
                    totalSlides={5}
                    visibleSlides={this.state.width / CARD_WIDTH}
                    currentSlide={1}
                  >
                    <Slider>
                      <Slide index={0}>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="0" />
                      </Slide>
                      <Slide index={1}>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5" index="1" />
                      </Slide>
                      <Slide index={2}>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5" index="2" />
                      </Slide>
                      <Slide index={3}>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5" index="3" />
                      </Slide>
                      <Slide index={4}>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5" index="4" />
                      </Slide>
                    </Slider>
                  </CarouselProvider>
            </section>
        );
    }
}

export default FeaturedProducts;