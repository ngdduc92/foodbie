import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function Ongoing() {
  return (
    <div className="bg-light vh-100 text-center px-5 d-flex flex-column pt-5 align-items-center">
      {/* <FontAwesomeIcon icon={faClipboard} className='display-1 text-danger my-4' /> */}
      <Image src="https://cdn-icons-png.flaticon.com/512/223/223002.png" rounded className='w-25 my-5' />
      <span>Have you ordered?</span>
      <p className='text-secondary mt-2'>Confirmed items which are currently being prepared and delivered will show up here so you can track your delivery!</p>
    </div>
  )
}

