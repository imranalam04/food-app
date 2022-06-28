import React from "react";
import './FoodStyles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Food = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return (
        <>
     {/* <div style={{background:`url('${props}') no-repeat center center/cover`}} className="food"> */}
            <div className="container">
                
                
                <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
>
  <div style={{background:`url('${props.bgImg1}') no-repeat center center/cover`}} className="left">
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia dolores illo. Molestiae voluptatibus ipsam magnam cumque nesciunt voluptates quo nostrum aliquid odit aspernatur! Nam possimus reprehenderit aliquid dolorum facere? */}
  </div>
  <div style={{background:`url('${props.bgImg2}') no-repeat center center/cover`}} className="right">
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repudiandae ducimus, tenetur deserunt accusamus natus cum incidunt earum minus culpa iste expedita excepturi, velit reprehenderit adipisci est? Dolor, porro laboriosam.  */}
  </div>

</Carousel>
            </div>
        {/* </div> */}
        </>
    )
}

export default Food;