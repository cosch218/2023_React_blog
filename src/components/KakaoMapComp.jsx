import React, { useEffect } from 'react'

export default function KakaoMapComp() {

  const kakao = window.kakao;

  // 카카오 자바스크립트에 있는 코드는 실행되자마자 출력되야하기 때문에 useEffect에 작성
  useEffect(()=>{
    const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(35.156441, 129.059360),
			level: 3
		};

		const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
    const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
    const markerPosition1  = new kakao.maps.LatLng(35.156025, 129.058801); 

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    
  },[])
  
  

  return (
    <div>
      <div id="map" style={{width:"500px", height:"400px"}}></div>
    </div>
  )
}
