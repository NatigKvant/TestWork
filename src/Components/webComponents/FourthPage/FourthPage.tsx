import s from './FourthPage.module.scss'
import React from 'react'

export const FourthPage = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.header}>A Price To Suit Everyone</div>
        <div className={s.descContent}>
          <span>Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor.
          Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus
            </span>
        </div>
        <div className={s.price}>
          <span>$40</span>
          <span>UI Design Kit</span>
        </div>
        <div className={s.footer}>
          <span>See, One price. Simple.</span>
          <button>Purchase Now</button>
        </div>
      </div>
    </div>
  )
}