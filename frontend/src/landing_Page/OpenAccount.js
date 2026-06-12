import React from 'react';

function OpenAccount() {
    return ( 
    <div className='container p-5 mb-5'>
    <div className="row text-center">
      <img src='media/images/homeHero.png' alt="Hero Image" className='mb-5'/>
      <h1 className='mt-5'> Open a Zerodha Account </h1>
    <p> 
        Modern Platform andd Apps ,  &#8377;0 investments , and flat &#8377;20 intraday and F&O Trades.  
    </p>
      <button 
      class="p-2 btn btn-primary fs-5 mb-5" 
      style={{width:"20%" , margin:"0 auto"}}
      > SignUp Now </button>
    </div>
    </div>
     );
}

export default OpenAccount;