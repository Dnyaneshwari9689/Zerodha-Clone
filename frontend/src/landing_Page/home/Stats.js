import React from 'react';
 
function Stats() {
  return (
    <div className='container p-3'> 
        <div className='row p-5'> 
            <div className='col-6 p-5'>
              <h1 className='fs-2 mb-3'>Trust With Confidence</h1> 
              <h2 className='fs-4'>Customer-first always</h2>
              <p className='text-muted'>Thats why 1.3+ crore customers trust Zerodha with &#8377; 3.5+ crores 
                lakh crore worth of wquality investments. </p>
                <h2 className='fs-4'>No spam or gimmicks</h2>
              <p className='text-muted'>No Gimmicks , spam , "gamification" , or annoying push 
                notifications. High quality apps that you use at your pace , the
                way you like. </p>
              <h2 className='fs-4'>Zerodha Universe</h2>
              <p className='text-muted'>Not just an app , but a whole ecosystem. Our investments in 
                30+ fintech startups offer you tailored services specific to 
                your needs.
              </p>
                <h2 className='fs-4'>Do Better with Money</h2>
              <p className='text-muted'>With initiative like Nudge and kill Switch , we don't just 
                facilitate transactions , but actively help you de better with 
                your money.</p>
               </div>
              <div className='col-6 p-5'>
                <img src="media/images/ecosystem.png" alt="Empty State" style={{width:"90%"}} />
             
              <div>
              <a href="" className="mx-5" style={{ textDecoration: 'none' }}>Explore Our Products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <a href="" className='mx-5' style={{ textDecoration: 'none' }}>Try Kite Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
               </div>
           </div>
           </div> 
  );
};

export default Stats;