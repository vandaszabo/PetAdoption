import React from 'react'
import GetStartedBtn from './GetStartedBtn'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className="left-footer">
          <span>Ready to find the <strong>one</strong>?</span>
          <GetStartedBtn />
        </div>
        <div className="community-icons">
            <Image className='instagram-icon' src='/instagram.png' alt="instagram" width={50} height={50} />
            <Image className='facebook-icon' src='/facebook.png' alt="facebook" width={50} height={50} />
            <Image className='github-icon' src='/github2.png' alt="github" width={50} height={50} />
        </div>
      </div>
      <div className='footer-info'>
        <div className='email'>
          <Image className='email-icon' src='/email.png' alt="email" width={50} height={50} />
          <p>info@adopt-a-pal.com</p>
        </div>
        <div className='footer-info-right'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer