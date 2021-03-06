import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { Link_Github, Link_Instagram, Link_Naver } from '../state'
import React from 'react'

function Footer() {

    return (
        <div className="Footer">
            © 2022 Wisesaturn All Rights Reserved. Powered by Github with React/Next.JS <br />
            Thanks to Myself by 맨 땅에 헤딩
            <div className="Wrap_SNS">
                <div className="SNS">
                    <a href={Link_Github}><AiFillGithub size="32" /></a>
                </div>
                <div className="SNS">
                    <a href={Link_Naver}><Naver size="32" /></a>
                </div>
                <div className="SNS">
                    <a href={Link_Instagram}><AiFillInstagram size="32" /></a>
                </div>
            </div>
        </div>
    )
}

const Naver = (props) => {
    return <svg width={props.size} height={props.size} viewBox="0 0 64 64" fill='currentColor'>
        <path className="st0" d="M50.49,25.88c0.3,0.37,0.47,0.84,0.47,1.35c0,0.54-0.19,1.05-0.52,1.42c-0.4,0.48-1.01,0.79-1.69,0.79 c-1.22,0-2.21-0.99-2.21-2.21c0-1.21,0.99-2.21,2.21-2.21C49.46,25.03,50.09,25.36,50.49,25.88z M35.86,25.33c-1.21,0-2.21,1.01-2.21,2.24c0,1.24,0.99,2.24,2.21,2.24c1.22,0,2.21-1,2.21-2.24 C38.06,26.34,37.08,25.33,35.86,25.33z M35.86,25.33c-1.21,0-2.21,1.01-2.21,2.24c0,1.24,0.99,2.24,2.21,2.24 c1.22,0,2.21-1,2.21-2.24C38.06,26.34,37.08,25.33,35.86,25.33z M53.1,6.19H11.99c-4.18,0-7.57,3.44-7.57,7.69V38.5 c0,4.24,3.38,7.69,7.57,7.69h13.24l5.98,12.1c0.55,1.12,2.12,1.12,2.67,0l5.98-12.1H53.1c4.18,0,7.57-3.45,7.57-7.69V13.88 C60.67,9.63,57.28,6.19,53.1,6.19z M22.05,28.65c-0.07,0.68-0.28,1.93-1.43,2.9c-1.15,0.97-3.11,1.2-3.11,1.2 c-2.11,0.26-2.81-1.1-2.81-1.1v0.71h-3.45V18.33h3.38l0.12,5.13c0.47-0.54,1.27-0.9,1.27-0.9c1.85-0.61,2.86-0.02,3.59,0.27 c0.75,0.29,1.58,1.22,2.11,2.44C22.25,26.48,22.13,27.97,22.05,28.65z M28,22.56v9.81h-3.33c0,0,0-8.76,0-9.88 c0-1.12-1.58-1.34-1.58-1.34v-3.31c0,0,1.86,0.22,2.56,0.61c0.7,0.39,1.01,0.66,1.76,1.69C28.14,21.15,28,22.56,28,22.56z M35.96,32.72c-3.11,0-5.63-2.3-5.63-5.14s2.52-5.13,5.63-5.13s5.63,2.29,5.63,5.13S39.07,32.72,35.96,32.72z M53.33,35.13 c-0.64,1.38-1.43,1.68-2.61,2.23c-1.17,0.56-3.21,0.27-3.21,0.27v-3.16c0,0,0.24,0.03,0.89,0c0.64-0.03,0.86-0.07,1.41-0.61 c0.54-0.54,0.57-1.41,0.57-1.41l0.02-1.11c-0.78,0.86-1.84,1.38-2.99,1.38c-2.45,0-4.44-2.34-4.44-5.22c0-2.88,1.99-5.22,4.44-5.22 c1.22,0,2.32,0.58,3.12,1.52l0.02-1.23h3.3c0,0,0.03,9.89,0,10.28C53.84,33.23,53.98,33.73,53.33,35.13z M35.86,25.33 c-1.21,0-2.21,1.01-2.21,2.24c0,1.24,0.99,2.24,2.21,2.24c1.22,0,2.21-1,2.21-2.24C38.06,26.34,37.08,25.33,35.86,25.33z M16.68,25.56c-1.09,0-1.97,0.89-1.97,2c0,1.11,0.88,2.01,1.97,2.01s1.98-0.9,1.98-2.01C18.66,26.45,17.77,25.56,16.68,25.56z M35.86,25.33c-1.21,0-2.21,1.01-2.21,2.24c0,1.24,0.99,2.24,2.21,2.24c1.22,0,2.21-1,2.21-2.24 C38.06,26.34,37.08,25.33,35.86,25.33z M35.86,25.33c-1.21,0-2.21,1.01-2.21,2.24c0,1.24,0.99,2.24,2.21,2.24 c1.22,0,2.21-1,2.21-2.24C38.06,26.34,37.08,25.33,35.86,25.33z" />
    </svg>
}

export default Footer
