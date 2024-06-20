import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
const TermAndContions = () => {
  return (
    <>
        <Meta title={"Term And Condition"}/>
      <BreadCrumb title="Term And Condition"></BreadCrumb>
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermAndContions
