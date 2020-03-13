import React, { useState } from 'react';

function Footer(){

    return(
        
                <footer className="page-footer font-small bg-dark tezt-light"> 
                    <div className="container">
                        <div className="row">    
                            <div className="col-md-12 py-5">
                                <div className="mb-5 flex-center text-light">
                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a className="tw-ic">
                                    <i className="fab fa-twitter fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a className="gplus-ic">
                                    <i className="fab fa-google-plus-g fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a className="li-ic">
                                    <i className="fab fa-linkedin-in fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a className="ins-ic">
                                    <i className="fab fa-instagram fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a className="pin-ic">
                                    <i className="fab fa-pinterest fa-lg  fa-2x"> </i>
                                </a>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className="footer-copyright text-center text-light py-3">© 2020 Copyright
                    </div>
                </footer>


    )

}

export default Footer;