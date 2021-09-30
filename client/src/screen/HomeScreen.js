import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HeroIMage from "../images/image.png";
const words = ["Enterprenuers", "Business"];

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        <Col md={6} sm={12} lg={6}>
          <div class="text-center-sm">
            <h1>
              MOPAYBE for{" "}
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </h1>
            <p>
              Welcome to <i>mopaybe</i> a fast paced digital platform that
              investment companies and investors to both new and fast growing
              businesses in <i>Africa</i> to invest
            </p>
            <a
              href="/business/register"
              class="btn btn-dark btn-lg"
              style={{ backgroundColor: "#10F504", border: "none" }}
            >
              Get Started for Free
            </a>
          </div>
        </Col>
        <Col md={6} sm={12} lg={6}>
          <div>
            <Image
              src={HeroIMage}
              style={{ height: "100%", width: "100%", objectFit: "center" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
