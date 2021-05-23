import React, { Component } from 'react'
import FeaturedProductCard from './FeaturedProductCard'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import '../sass/components/_FeaturedProducts.scss'

const CARD_WIDTH = 260

class FeaturedProducts extends Component {
    state = {
        cards: 4
    }

    selfRef = React.createRef()
    
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
            <section className="featured_products-container">
                <h2>featured Products</h2>
                <div ref={this.selfRef} style={{ height: "100%", width:"90%", margin: "auto"}}>
                  <CarouselProvider 
                    isPlaying= 'true'
                    naturalSlideWidth={CARD_WIDTH}
                    naturalSlideHeight={340}
                    totalSlides={5}
                    visibleSlides={this.state.width / CARD_WIDTH}
                    step={this.state.cards}
                  >
                    <Slider>
                      <Slide>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
                      </Slide>
                      <Slide>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
                      </Slide>
                      <Slide>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
                      </Slide>
                      <Slide>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
                      </Slide>
                      <Slide>
                        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                      It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
                      </Slide>
                    </Slider>
                    <DotGroup />
                  </CarouselProvider>
                </div>
            </section>
        );
    }
}

export default FeaturedProducts;