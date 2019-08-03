import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider className="slider" {...settings}>
          <div>
            <div class="frame">
              <img
                alt=""
                src="https://www.rollingstone.com/wp-content/uploads/2019/07/Stranger-Things.jpg?crop=900:600&w=1910"
              />
            </div>
          </div>
          <div>
            <div class="frame">
              <img
                alt=""
                src="https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F5dbf843fe2395edb18f31c9d7424f7b5%2F206531037%2Fsteve.jpg&client=amp-blogside-v2&signature=fcd6bc004b0e429a20c738be6da9d84950f205ce"
              />
            </div>
          </div>
          <div>
            <div class="frame">
              <img
                alt=""
                src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/07/stranger_things_s03_still_17.jpg"
              />
            </div>
          </div>
          <div>
            <div class="frame">
              <img
                alt=""
                src="https://ca-times.brightspotcdn.com/dims4/default/fa64985/2147483647/strip/true/crop/1816x1021+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2F93%2F39%2F2028d3057fd497917ec69e56eedc%2Fla-1562174513-e822lroiec-snap-image"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
