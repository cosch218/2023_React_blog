import React, { useEffect, useState } from 'react'
import SimpleSlider from '../components/SimpleSlider'

// 날씨 API를 사용하기 위해서 axios 를 이용하여 작성
// >> Fetch 대신 axios 사용
import axios from 'axios'
import KakaoMapComp from '../components/KakaoMapComp';
//const axios = require('axios');



export default function Home() {

  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  // axios를 통해 값을 받아오기 위해 비동기 함수 작성
  // >> 비동기 함수 : useEffect 안에 있거나 밖에 있어도 무관
  // >> 원하는 위치에 작성 가능
  // useEffect를 사용하는 이유 : 실행할 때 바로 값을 가져오기 위함
  useEffect(()=>{
    async function getWheather() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=254c6dca8d810880ce0908fe17200ef3&lang=kr');
        console.log(response);
        console.log(response.data.weather[0].main);
        console.log(response.data.weather[0].description);
        console.log(response.data.weather[0].icon);
        setWeather(response.data.weather[0].description);
        setWeatherIcon(response.data.weather[0].icon);
      } catch (error) {
        console.error(error);
      }
    }
    getWheather();
  },[])


  return (
    <div>
      <SimpleSlider/>
      <h3>날씨 API</h3>
      <p>{weather}, {weatherIcon}</p>
      <br />
      <h3>카카오 맵 API</h3>
      <KakaoMapComp/>
    </div>
  )
}
