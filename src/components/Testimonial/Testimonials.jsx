import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        
                      </h6>
                      <p>
                        This paltform has been a game changer for me . I enrolled in "Web Development course" to enhance my skills , and I was bloen away by the depth of content and engagging learning experience. The practical knowledge I gained immediately translated into better performance at work. I can confidently say that this platform has been instrumental in my professional growth.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sachin Yadav</h6>
                        <p>Delhi</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        
                      </h6>
                      <p>
                        Hi! , This is Anshiv , I enrolled in the "UI/UX designing". This really help me to enhance my knowledge.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Anshiv Sahu</h6>
                        <p>Noida , Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>

                 
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
