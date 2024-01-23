import React, { useEffect, useRef } from 'react'
import port01 from "../assets/images/port01.jpg"
import port02 from "../assets/images/port02.jpg"
import port03 from "../assets/images/port03.jpg"
import port04 from "../assets/images/port01.jpg"
import port05 from "../assets/images/port02.jpg"
import port06 from "../assets/images/port03.jpg"

import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const portText =[
  {
    num:"01",
    title:"Team Ace 팀프로젝트",
    site:"http://jok874.dothome.co.kr/main/",
    img:port01,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"TeamACE 포토폴리오",
  },
  {
    num:"02",
    title:"Team Hwasung 팀프로젝트",
    site:"http://kimmina.dothome.co.kr/hwasung/",
    img:port02,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"Team Hwasung 팀프로젝트",
  },
  {
    num:"03",
    title:"Team C 팀프로젝트",
    site:"http://kimmina.dothome.co.kr/hwasung/",
    img:port03,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"Team Hwasung 팀프로젝트",
    alt:"Team C 팀프로젝트",
  },
  {
    num:"04",
    title:"Team Ace 팀프로젝트",
    site:"http://jok874.dothome.co.kr/main/",
    img:port01,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"TeamACE 포토폴리오",
  },
  {
    num:"05",
    title:"Team Hwasung 팀프로젝트",
    site:"http://kimmina.dothome.co.kr/hwasung/",
    img:port02,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"Team Hwasung 팀프로젝트",
  },
  {
    num:"06",
    title:"Team C 팀프로젝트",
    site:"http://kimmina.dothome.co.kr/hwasung/",
    img:port03,
    desc:"고난과 역경이 가득한 프로젝트 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"Team Hwasung 팀프로젝트",
    alt:"Team C 팀프로젝트",
  },
]

const Port = () => {
  const horizontalRef = useRef(null);
  //변수를 생성하고 초기화
  const sectionRef = useRef([]);
  // 변수를 생성하고 비어있는 배열로 초기화


  useEffect(()=>{
  // useEffect(()=>{}) : 컴퍼넌트가 랜더링될 때 어떠한 작업을 수행하도록 해야한다면, 그것을 설정해주는 hook명령
    gsap.registerPlugin(ScrollTrigger);
    //트리거는 어느 특정한 동작에 반응해 자동으로 필요한 동작을 실행하는 것을 말한다.
    // ScrollTrigger 플러그인을 등록함.

    const horizontal = horizontalRef.current;
    //horizontalRef의 현재값을 horizontal에 대입
    const sections = sectionRef.current;
    //sectionRef현재값 배열요소를 sections 대입

    let scrollTween = gsap.to(sections,{
      xPercent:-120*(sections.length-1),
      scrollTrigger:{
        trigger:horizontal,
        start:"top 56px",
        end:()=> "+="+horizontal.offsetWidth,
        pin:true,
        //활성상태에서 트리거 요소 고정
        scrub:1,
        //스크롤이 화면움직임을 따라가는데 1초 걸림
      }
    });

    return()=>{
      scrollTween.kill();
      // 스크롤 애니메이션을 제거합니다. 컴포넌트가 언마운팅할때 메모리 누수를 방지해줌.
      // 마운트: 화면에 데이터가 보여지는 것을 의미함

    }

    // (sections{},[]); : 랜더링 완료 후 한번 실행.
  },[]);


  return (
    <section id="port" ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portofolio <em>포폴 작업물</em>
                </div>
                <div className="port_wrap">
                  {portText.map((port,key)=>(
                    <article className={`port_item p${key + 1}`} key={key}
                      ref={(el)=>(sectionRef.current[key] = el)}
                    >
                        <span className="num">{port.num}.</span>
                        <a href={port.site} target="_blank" className="img" rel='noopener noreferrer'>
                            <img src={port.img} alt={port.alt}/>
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">
                            {port.desc}
                        </p>
                        <a href={port.site} target="_blank" className="site" rel='noopener noreferrer'>사이트 보기</a>
                    </article>
                  ))}
                </div>
            </div>
        </section>
  )
}

export default Port
