import React, { useState } from 'react';

function Footer(){

    return(
        
                <footer class="page-footer font-small bg-dark tezt-light"> 
                    <div class="container">
                        <div class="row">    
                            <div class="col-md-12 py-5">
                                <div class="mb-5 flex-center text-light">
                                <a class="fb-ic">
                                    <i class="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a class="tw-ic">
                                    <i class="fab fa-twitter fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a class="gplus-ic">
                                    <i class="fab fa-google-plus-g fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a class="li-ic">
                                    <i class="fab fa-linkedin-in fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a class="ins-ic">
                                    <i class="fab fa-instagram fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                
                                <a class="pin-ic">
                                    <i class="fab fa-pinterest fa-lg  fa-2x"> </i>
                                </a>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div class="footer-copyright text-center text-light py-3">© 2020 Copyright
                    </div>
                </footer>


    )

}

export default Footer;