import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'

const ShippingPolicy = () => {
  return (
    <>
        <Meta title={"Shipping Policy"}/>
      <BreadCrumb title="Shipping Policy"></BreadCrumb>
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>
                <h5>A Shipping Policy is where you let your customers know important details about how you ship your goods, such as what shipping services you use, what shipping fees are, and what timeframe customers should expect for delivery.

This article will break down the benefits of having a Shipping Policy, and show you what information you should include in your policy. We've also put together a Sample Shipping Policy Template that you can use to help write your own.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShippingPolicy
