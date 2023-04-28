import React, { Component } from "react";
import Slider from "react-slick";


// 폰트 어썸에서 아이콘을 가져오기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 두가지 종류의 아이콘 이름이 같을 때 as를 사용햇 ㅓ이름을 바꿔 불러올 수 있다
import { faEnvelope, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <FontAwesomeIcon
        icon={faChevronRight}
        className={className}
        style={{ ...style, display: "block", color: "red", width: "40px", height: "40px", zIndex: "10" }}
        onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={className}
        style={{ ...style, display: "block", color: "green", width: "40px", height: "40px" }}
        onClick={onClick}
      />
  );
}


export default function SimpleSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // map()을 이용하여 배열 안의 이미지를 화면에 출력하기 위함
  const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];


  return (
    <div style={{width: "90%", height:"100vh", margin: "auto", position: "relative"}}>
      {/*<h2> Single Item</h2>*/}
      <Slider {...settings}>
        <div>
          <img src={require('../img/pic1.jpg')} alt="" width={"50%"}/>
        </div>
        <div>
          <img src={require('../img/pic2.jpg')} alt="" width={"50%"}/>
        </div>
        <div>
          <img src={require('../img/pic3.jpg')} alt="" width={"50%"}/>
        </div>
        {
          pictures.map((pic)=>(
            <div>
              <img src={require(`../img/${pic}`)} alt="" width={"50%"}/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
  
}