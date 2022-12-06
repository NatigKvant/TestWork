import s from './ThirdPage.module.scss'
import React from 'react'
import background from '../../../assets/svg/background2.svg'

export const ThirdPage = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <img src={background} alt='background' />
        </div>
        <div className={s.rightBlock}>
          <div className={s.description}>
            <div className={s.descHeader}>Light, Fast & Powerful</div>
            <div className={s.descContent}>
              <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus
              </span>
              <span>mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}