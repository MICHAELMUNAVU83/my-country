import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import africa from '../assets/africa.png';

const Continent = () => (
  <div style={{ overflow: 'none' }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={africa}
          className="d-block w-100"
          alt="stock"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>Check accurate coin data 💯</h3>
          <p>We provide accurate coin data all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={africa}
          className="d-block w-100"
          alt="stock"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>Check accurate coin data 💯</h3>
          <p>We provide accurate coin data all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={africa}
          className="d-block w-100"
          alt="stock"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>Check accurate coin data 💯</h3>
          <p>We provide accurate coin data all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={africa}
          className="d-block w-100"
          alt="stock"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>Check accurate coin data 💯</h3>
          <p>We provide accurate coin data all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={africa}
          alt="stock2"
          className="d-block w-100"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>Check data of all coins 😇</h3>
          <p>We provide data about all coins</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={africa}
          alt="stock4"
          className="d-block w-100"
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>We record changes every minute👌</h3>
          <p>We provide all crypto changes every minute</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Continent;
