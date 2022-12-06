import s from './SecondPage.module.scss'
import picture from '../../../assets/svg/picture.svg'
import React from 'react'
import background from '../../../assets/svg/background.svg'

export const SecondPage = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <div className={s.description}>
            <div className={s.descHeader}>Light, Fast & Powerful</div>
            <div className={s.descContent}>
              <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus
              </span>
              <span>
                  mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.
              </span>
            </div>
            <div className={s.descBtns}>
              <div className={s.descContent}>
                <img src={picture} alt='picture' />
                <div className={s.descFooter}>
                  <div>Title Goes Here</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </div>
              </div>
              <div className={s.descContent}>
                <img src={picture} alt='picture' />
                <div className={s.descFooter}>
                  <div>Title Goes Here</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.rightBlock}>
          <img src={background} alt='background' />
        </div>
      </div>
    </div>
  )
}