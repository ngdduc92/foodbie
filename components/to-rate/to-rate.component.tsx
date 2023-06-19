import React from 'react'
import { Image } from 'react-bootstrap'

export default function ToRate() {
  return (
    <div className="bg-light vh-100 text-center px-5 d-flex flex-column pt-5 border-top align-items-center">
      <Image src="https://www.nicepng.com/png/detail/214-2148603_you-eat-ready-to-eat-food-icon.png" rounded className='w-50 my-5' />
      <span>No order to rate</span>
      <p className='text-secondary mt-2'>Wow, good job! All orders have been rated</p>
    </div>
  )
}