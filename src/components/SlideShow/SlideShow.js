import React, { Component } from 'react';
import styled from 'styled-components';

class SlideShow extends Component {
  render() {
    const imageSlide = [
      {
        id: 1,
        name: 'Image Slide One',
        image: '/images/slide-img-1.jpg'
      },

      {
        id: 2,
        name: 'Image Slide Two',
        image: '/images/slide-img-2.jpg'
      },
      {
        id: 3,
        name: 'Image Slide Three',
        image: '/images/slide-img-3.jpg'
      },
      {
        id: 4,
        name: 'Image Slide Four',
        image: '/images/slide-img-4.jpg'
      }
    ];

    let images = null;

    images = (
      <React.Fragment>
        {imageSlide.map(images => {
          return <img src={images.image} alt={images.name} />;
        })}
      </React.Fragment>
    );

    return (
      <SlidesShow>
        <button className="slide-btn slide-btn-1" />
        <button className="slide-btn slide-btn-2" />
        <button className="slide-btn slide-btn-3" />
        <button className="slide-btn slide-btn-4" />
        <div className="slideshow-wrapper">
          <div className="slide">{images}</div>
        </div>
      </SlidesShow>
    );
  }
}

export default SlideShow;

const SlidesShow = styled.div`
  display: none;
`;
