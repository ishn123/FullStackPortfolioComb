import React from 'react'
import "../styles/skill.css";

import a1 from  "../../33466.jpg";
import a2 from  "../../avatar.png";
import a3 from "../../hacker.png"
function FrontendSkillsContainer() {

    return (
        <div className="outer-svg-wrapper fuck">
            {/* <svg>
              <path id="line-skill" ></path>
            </svg> */}

            <div className="svg-wrapper">
                <div className="skills-container">
                    <div className="images-icon">
                        <div className="icons-image" id='one'>
                            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-git-commit">
                                <path d="M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0Zm-1.444.75a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z" fill='gray' stroke='gray'></path>
                            </svg>
                            <div className='circle'>
                                <img src= {a1} width="28" height="28" className="avatar circle mr-3" alt="Octocat avatar" loading="lazy" decoding="async"></img>
                            </div>
                        </div>
                        <div className="icons-image" id='two'>
                            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-check-circle-fill" fill='green'>
                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                            </svg>
                            <div className='circle'>
                                <img src={a2} width="28" height="28" className="avatar circle mr-3" alt="Octocat avatar" loading="lazy" decoding="async"></img>
                            </div>
                        </div>
                        <div className="icons-image" id='three'>
                            <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-feed-rocket" fill='gray'>
                                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.031-12a4.38 4.38 0 0 0-3.097 1.283l-.23.229c-.156.157-.308.32-.452.49H5.65a.876.876 0 0 0-.746.417l-.856 1.388a.377.377 0 0 0 .21.556l1.552.477 1.35 1.35.478 1.553a.374.374 0 0 0 .555.21l1.389-.855a.876.876 0 0 0 .416-.746V8.747c.17-.144.333-.295.49-.452l.23-.23A4.379 4.379 0 0 0 12 4.969v-.093A.876.876 0 0 0 11.124 4Zm-5.107 7.144h-.001a.809.809 0 0 0-1.33-.881c-.395.394-.564 1.258-.62 1.62a.12.12 0 0 0 .035.108.12.12 0 0 0 .108.035c.362-.056 1.226-.225 1.62-.619a.803.803 0 0 0 .188-.263Z"></path>
                            </svg>
                        </div>
                        <div className="icons-image" id='four'>
                            <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-feed-merged">
                                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.25-11.25A1.75 1.75 0 1 0 6 6.428v3.144a1.75 1.75 0 1 0 1 0V8.236A2.99 2.99 0 0 0 9 9h.571a1.75 1.75 0 1 0 0-1H9a2 2 0 0 1-1.957-1.586A1.75 1.75 0 0 0 8.25 4.75Z" fill='#a371f7'></path>
                            </svg>
                            <div className='circle'>
                                <img src={a3} width="28" height="28" className="avatar circle mr-3" alt="Octocat avatar" loading="lazy" decoding="async"></img>
                            </div>
                        </div>
                    </div>
                    <div className="skills-content">

                        <div className="content-header-skill">

                            <h3 className='text-animate build-in-slideX-left' style={{ transitionDelay: "0ms" }}>Frontend: Crafting intuitive web experiences</h3>
                            <p className='text-animate build-in-slideX-left' style={{ transitionDelay: "100ms" }}>Front-end skills encompass a broad range of technologies like React, HTML, CSS, JavaScript, Vue, and a constant journey of learning and staying updated with the ever-evolving web landscape.</p>

                        </div>


                        <div className="skill-icon-container">
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                    </svg>
                                    <div className="skill-name">
                                        React
                                    </div>
                                </div>

                            </div>
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
                                    </svg>
                                    <div className="skill-name">
                                        Vue
                                    </div>
                                </div>

                            </div>
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M10.66406,5c-2.01961,0 -3.64751,1.7625 -3.48828,3.77539l0.56445,7.13477c0.03242,0.54205 0.35525,1.02427 0.84405,1.26079c0.48881,0.23652 1.06727,0.19043 1.51245,-0.12052c0.44518,-0.31095 0.68756,-0.83821 0.63373,-1.37855l-0.56445,-7.13281c-0.02477,-0.31311 0.18366,-0.53906 0.49805,-0.53906h26.67188c0.31439,0 0.52282,0.22595 0.49805,0.53906l-1.54297,19.49023c-0.06526,0.82627 0.55166,1.549 1.37793,1.61426c0.82627,0.06526 1.549,-0.55166 1.61426,-1.37793l1.54102,-19.49023c0.15923,-2.01289 -1.46867,-3.77539 -3.48828,-3.77539zM16.05859,13c-0.582,0 -1.04205,0.49422 -0.99805,1.07422l0.75,10c0.039,0.522 0.47505,0.92578 0.99805,0.92578h12.48047l-0.46875,6.38086l-4.80859,1.53906l-4.65039,-1.5293l-0.14844,-2c-0.058,-0.784 -0.71009,-1.39062 -1.49609,-1.39062c-0.873,0 -1.56109,0.74133 -1.49609,1.61133l0.25,3.33398c0.03,0.403 0.29959,0.748 0.68359,0.875l6.52734,2.1582c0.201,0.067 0.41714,0.06695 0.61914,0.00195l6.7168,-2.1543c0.388,-0.124 0.66141,-0.47291 0.69141,-0.87891l0.73047,-9.87305c0.043,-0.58 -0.41509,-1.07422 -0.99609,-1.07422h-12.7832l-0.43945,-6h13.15039c0.784,0 1.43509,-0.60377 1.49609,-1.38477c0.066,-0.871 -0.62209,-1.61523 -1.49609,-1.61523zM9.76563,20.89453c-0.42338,-0.00232 -0.82803,0.17438 -1.11411,0.4865c-0.28608,0.31212 -0.42694,0.73059 -0.38784,1.15217l1.19922,15.1582c0.10818,1.36794 1.01472,2.55612 2.30859,3.01953l11.04688,3.95898c0.00065,0 0.0013,0 0.00195,0c0.76273,0.27291 1.59664,0.27291 2.35938,0l11.04687,-3.95898c1.2947,-0.46302 2.20037,-1.65105 2.30859,-3.01953l0.28125,-3.55078c0.0549,-0.54113 -0.1874,-1.06958 -0.63325,-1.38111c-0.44585,-0.31153 -1.02539,-0.35734 -1.51464,-0.11971c-0.48925,0.23763 -0.81155,0.72146 -0.84234,1.26449l-0.28125,3.55078c-0.01578,0.19952 -0.14082,0.36466 -0.32812,0.43164c-0.00065,0 -0.0013,0 -0.00195,0l-11.04687,3.95898c-0.10927,0.0391 -0.22863,0.0391 -0.33789,0l-11.04687,-3.95898c-0.1873,-0.06699 -0.31235,-0.23212 -0.32812,-0.43164l-1.20117,-15.1582c-0.05131,-0.78553 -0.70109,-1.39779 -1.48828,-1.40234z"></path></g></g>
                                    </svg>
                                    <div className="skill-name">
                                        HTML
                                    </div>
                                </div>

                            </div>
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                        <g fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M39,40l-14,4l-14,-4l-3,-34h34c-1,11.33203 -2,22.66797 -3,34zM39.81641,8h-29.63281l2.6875,30.45313l12.12891,3.46875l12.12891,-3.46875zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
                                    </svg>
                                    <div className="skill-name">
                                        CSS
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontendSkillsContainer