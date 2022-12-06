import React from 'react'
import { MainPage } from './webComponents/MainPage/MainPage'
import { SecondPage } from './webComponents/SecondPage/SecondPage'
import { FourthPage } from './webComponents/FourthPage/FourthPage'
import { ThirdPage } from './webComponents/ThirdPage/ThirdPage'
import { Footer } from './webComponents/Footer/Footer'

export const WebComponent = () => {

  return (
    <>
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  )
}