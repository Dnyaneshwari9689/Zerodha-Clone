import React from 'react';

function LeftSection({
    imageURL , 
    productName , 
    productDescription , 
    tryDemo , 
    learnMore , 
    googlePlay , 
    appStore
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
        <div>
        <a href={tryDemo} > Try Demo
                            <i class="fa fa-long-arrow-right" />

        </a>
        <a href={learnMore} style = {{marginLeft: '50px'}} > Learn More
                            <i class="fa fa-long-arrow-right" />

        </a>
        </div>

        <div className="mt-3">
        <a href={googlePlay} >
        <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" />
        </a>
        <a href={appStore} >
<img src="media/images/appStoreBadge.svg" alt="App Store" className="img-fluid" />
    </a>
                    </div>
                </div>
                      </div>
                      </div>
        );
        }

export default LeftSection;