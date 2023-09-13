import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Welcome to our Quick Learning section, where you can acquire new knowledge and skills in just a few minutes. Whether you have a busy schedule or simply want to explore a new topic quickly, Our Quick Learning resourse are designed to provide you with valuable insight and actionable information.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "We are committed to providing you with exceptional support whenever you need it.We understand that learning can sometimes come with questions, challenges,or the need for guidance. That's why we offer all-time support to ensure your learning experince is smooth and successful.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "We believe that education should not only be a journey of learning but also a path to recognition and advancement.That's why we offer industry recognized certificates upon successful course completion.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
