import React from 'react'
import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.firstBlock}>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div className={s.secondBlock}>
          <span>Landie</span>
        </div>
        <div className={s.thirdBlock}>
          <button>Buy Now</button>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <div className={s.description}>
            <div className={s.descHeader}>Introduce Your Product Quickly & Effectively</div>
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
            <div className={s.descBtns}>
              <button>Purchase UI Kit</button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className={s.rightBlock}></div>
      </div>
    </div>
  )
}