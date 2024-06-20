import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
const RefundPolicy = () => {
  return (
   <>
     <Meta title={"Refund Policy"}/>
      <BreadCrumb title="Refund Policy"></BreadCrumb>
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>
                <h5>A refund policy, also known as a return policy, is a document that informs your customers about how your company deals with refunds or returns of the products you're selling. A company's policy on refunds or returns is completely discretional, meaning there is no legal obligation to offer refunds or returns.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default RefundPolicy
