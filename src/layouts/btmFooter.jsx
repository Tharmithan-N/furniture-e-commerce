import { Col, Row } from 'antd'
import React from 'react'

const BtmFooter = ({children}) => {
  return (
      <div>
          <div>{children}</div>
          <div>
          <hr/>
          <Row justify="space-evenly" className='mt-[48px]'>
              <Col>
              <div className='text-[#000000] text-[24px] font-bold'>Funiro.</div>
              <div className='mt-[50px]'>
                  <div className='text-[#9F9F9F] text-[16px] font-regular'>400 University Drive Suite 200 Coral <br/>Gables,<br/>FL 33134 USA</div>
              </div>
          </Col>
          <Col>
              <div className='text-[#9F9F9F] text-[16px] font-medium'>Links</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[55px]'>Home</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[46px]'>Shop</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[46px]'>About</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[46px]'>Contact</div>
          </Col>
          <Col>
              <div className='text-[#9F9F9F] text-[16px] font-medium '>Help</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[55px]'>Payment options</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[46px]'>Returns</div>
              <div className='text-[#000000] text-[16px] font-medium mt-[46px]'>Privacy Policies</div>
          </Col>
          <Col>
              <div className='text-[#9F9F9F] text-[16px] font-medium '>Newsletter</div>
              <Row className='mt-[55px]'>
                  <div><input type="text" placeholder="Enter your email" className='border-b-2 mt-[3px] border-black'/></div>
                  <div><button className='text-[#000000] text-[16px] font-medium border-b-2 border-black'>Subscribe</button></div>
              </Row>
          </Col>
          </Row>
          <hr className='mt-[48px]'/>
          <div className='text-[#000000] text-[16px] font-redular mt-[35px] mb-[38px] ml-[150px]'>2023 furino. All rights reverved</div>
    </div>
      </div>
  )
}

export default BtmFooter