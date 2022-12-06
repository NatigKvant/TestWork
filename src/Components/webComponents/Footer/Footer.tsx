import React from 'react'
import s from './Footer.module.scss'
import facebookIcon from '../../../assets/svg/facebookIcon.svg'
import linkedinIcon from '../../../assets/svg/linkedinIcon.svg'
import twitterIcon from '../../../assets/svg/twitterIcon.svg'
import youtubeIcon from '../../../assets/svg/youtubeIcon.svg'
import instagramIcon from '../../../assets/svg/instagramIcon.svg'

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.leftSide}>
          <span>©2020 Yourcompany</span>
        </div>
        <div className={s.middleSide}>
          <span>Landie</span>
        </div>
        <div className={s.rightSide}>
          <button>Purchase now</button>
        </div>
      </div>
      <div className={s.secondContent}>
        <div className={s.firstBlock}>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div className={s.secondBlock}>
          <img src={facebookIcon} alt='facebookIcon' />
          <img src={linkedinIcon} alt='linkedinIcon' />
          <img src={twitterIcon} alt='twitterIcon' />
          <img src={youtubeIcon} alt='youtubeIcon' />
          <img src={instagramIcon} alt='instagramIcon' />
        </div>
      </div>
    </div>
  )
}