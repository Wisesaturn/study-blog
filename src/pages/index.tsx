import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import React, { ReactNode, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'
import Navigator from '../components/Content/Navigator/Navigator'
import Search from '../components/Content/Search_area'
import { checkEnv } from '../components/state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
// import required modules

interface BG_Type {
    children : ReactNode
    main : string
}

const IndexPage = () => {
    const ENV = useRecoilValue(checkEnv)
    const typingContent = '재한쓰 스터디 블로그'
    const [text, setText] = useState('')
    const [iter, setIter] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setText(text + typingContent[iter])
            setIter(iter + 1)
        }, 300)
        if (text.length === typingContent.length) {
            clearInterval(time) // 길이가 같으면 setInterval 종료
        }

        return () => clearInterval(time) // SSR용 return 값
    })
    // Title 타이핑용 (useEffect 이용)
    // 참고 : https://wazacs.tistory.com/35

    return (
        <BG main={`${ENV}resource/photo/main.jpg`}>
            <Search />
            <div className="forIndexNavi">
                <Navigator />
                <div className="dim" />
            </div>
            <Wrap>
                <Title>
                    <h2 id='title'>{text}<span>|</span></h2>
                </Title>
                <Area>
                    <Swiper /* Swiper 설정값 */
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={50}
                        loop={false}
                        loopedSlides={1}
                        coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                        }}
                        modules={[EffectCoverflow]}
                        className="mySwiper"
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction :false,
                        }}
                    >
                        {/* 카테고리 - 기록 */}
                        <SwiperSlide>  {/* Slide Box */}
                            <div className="swiper-slide">
                                <Link href={`${ENV}posts/developLog/blog`} passHref>
                                    <div className="box">
                                        <div className="imgbox">
                                            <Image
                                                src={`${ENV}resource/photo/write.jpg`}
                                                width='200px'
                                                height='200px'
                                                layout='intrinsic' />
                                        </div>
                                        <div className="contentBox">
                                                <h2>Blog<br/><span>기록</span></h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <Link href={`${ENV}posts/programmers/Lv1`} passHref>
                                    <div className="box">
                                        <div className="imgbox">
                                            <Image
                                                src={`${ENV}resource/photo/programming.jpg`}
                                                width='200px'
                                                height='200px'
                                                layout='intrinsic' />
                                        </div>
                                        <div className="contentBox">
                                                <h2>Level 1<br/><span>프로그래머스</span></h2>
                                        </div>
                                    </div>
                                </Link>
                        </div>
                        </SwiperSlide>
                       </Swiper>
                </Area>
            </Wrap>
        </BG>
    )
}

// Swiper 참고 : https://youtu.be/kX6MLRc_Qmg

const Wrap = styled.div`
    // 세로 정렬용 (flex)
    display : flex;
    flex-direction : column;
    height : 100%;  
    padding-top : 2rem;
`

const BG = styled.div<BG_Type>`
    // 배경사진
    display : flex;
    justify-content : center;
    position : relative;
    width : 100%;
    height : 100%;
    background : url(${props => props.main}) no-repeat;
    background-size : cover;
    background-position : 50% 50%;

    @media only screen and (max-width:768px) {
        flex-direction : column;
    }
`

const Area = styled.div`
// 슬라이드 영역
// 참고 : https://youtu.be/RPFfpG0SvV0
    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;
    min-height : 30vh;

    .swiper-slide {
        // custom data
        display : flex;
        background-position : center;
        background-size : cover;
        width : 300px;
        height : 300px;
        -webkit-box-reflect : below 1px linear-gradient(transparent,transparent,#0006);
    }

    .box {
        // 메뉴 전체 영역
        position : relative;
        width : 200px;
        height : 200px;
        display : flex;
        justify-content : center;
        align-items : center;
        margin : auto;
        transition : .5s;

        // 메뉴 영역 hover 상태 ---------------------
        &:hover {
            height : 270px;
            cursor : pointer;
            > .imgbox {
                // imgbox의 hover 상태
                background-color : none;
                img {
                    // img hover
                    opacity : 1;
                }
            }
            .contentBox {
                // contentBox의 hover 상태
                opacity : 1;
            }
        }
        // 메뉴 영역 hover 상태 ---------------------

        &:active {
            cursor : wait;
        }

        // 메뉴 뒤 색상용 ---------------------
         &:before {
            content: '';
            position : absolute;
            top : -2px;
            left : -2px;
            right : -2px;
            bottom: -2px;
            background : #fff;
            z-index : 1;
        }

        &:after {
            content: '';
            position : absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background : #fff;
            z-index : 0;
            -webkit-filter : blur(10px);
        }

        &:before, &:after {
            background: linear-gradient(235deg,#71B280,#222,#38ef7d);
        }
        // 메뉴 뒤 색상용 ---------------------
        
        .imgbox {
            // 이미지 영역
            position : absolute;
            top : 0;
            left : 0;
            width : 100%;
            height : 100%;
            padding : 0;
            z-index : 2;
            background-color : #060c21;
            box-sizing : border-box;

            img {
                max-width : 100%;
                opacity : .1;
                transition : .5s;
                z-index : 2;
            }
        }

        .contentBox {
            // 내용 영역
            position : absolute;
            left : 10px;
            right : 10px;
            bottom : 5px;
            height : 60px;
            background : rgba(0,0,0,.4);
            display : flex;
            justify-content : center;
            align-items : center;
            opacity: 0;
            z-index : 2;
            transition : .5s;

            h2 {
                font-size : 1.4rem;
                text-align : center;
                color : #fff;
                font-weight : 500;
                line-height : 20px;
                letter-spacing : 1px;

                > span {
                    font-size : .8rem;
                    color : #71B280;
                    font-weight : 200;
                    letter-spacing : 2px;
                }
            }
        }
    }

    @media only screen and (max-width : 768px) {
        // 태블릿 이하는 Swipter X
        display : none;
    }
`

const Title = styled.div`
// 제목 영역
    display : block;
    height : 20vh;
    h2 {
        font-size : 36px;
        text-align : center;
        color : #222;
        margin-top : 5vh;
        
        > span {
            font-size : 36px;
            padding-left : 4px;
            color : black;
            animation : typing 1.4s infinite;
        }

        @keyframes typing {
            0% {
                opacity : 1;
            }
            49% {
                opacity : 1;
            }
            50% {
                opacity : 0;
            }
            100% {
                opacity : 0;
            }
        }
    }

    @media only screen and (max-width : 768px) {
        // 태블릿 이하는 Swipter X
        h2 {
            margin-top : 15vh;
        }
    }   
`

export default IndexPage

// 1. Index 페이지 다시 만들기 (카테고리 영역처럼 확실하게 Navigator, Data 영역으로 나눈 후에 할 것)
// 2. Navigator 버튼 애니메이션 넣기 (기본 말고 중간 width 밑으로 animation이 없음)
// 3. Navigator 중간 디자인 다시 손보기 (그대로 가기엔 뭔가 미흡)
// 이것만 해결하면 반응형 끝
// 구글 검색만 넣으면 완성
