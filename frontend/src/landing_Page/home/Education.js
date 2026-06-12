import React from 'react';
 
function Education() {
  return (
      <div className='container mt-5'> 
    <div className='row'> 
      <div className='col-6'>
        <img src="media/images/education.svg" alt="Education" className='img-fluid' style={{width : "70%"}} />

       </div>
        <div className='col-6'>
           <h1 className='mt-3 fs-2 mb-3'> Free And Open Market Education</h1>
           <p>Versity , the largest online stock market education book in the world
            convering everything from the basics to advanced Trading.</p>
<a href="#" style={{ textDecoration: 'none' }}> Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
<p className='mt-5'> TraidingQ&A , the most active traiding and investment community in India for all your market related queries. </p>
<a href="#" style={{ textDecoration: 'none' }}> TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

        </div>
      </div>
    </div>
  );
};

export default Education;