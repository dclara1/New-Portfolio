import React from 'react';
import { Spring } from 'react-spring';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const About = () => {
  return (
    
   

                <div name='about' className='w-full h-screen bg-[#03001C] text-gray-300'>
                 
                
                        <div className='flex flex-col justify-center items-center w-full h-full'>
                            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                            
                            
                                <div className='sm:text-left pb-8 pl-4'>
                                <AnimationOnScroll animateIn=" animate__fadeInBottomLeft ">  
                                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                                    </AnimationOnScroll>
                                </div>
                               
                                <div></div>


                                </div>
                                    
                            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                                <div className='sm:text-right text-4xl font-bold'> 
                                <AnimationOnScroll animateIn=" animate__fadeInBottomLeft ">  
                                <p>Hello, my name is David. Nice to meet you! Please take a look around my page. </p>
                                </AnimationOnScroll>
                                </div>
                               


                                
                                <div>
                                <AnimationOnScroll animateIn=" animate__fadeInBottomLeft ">  
                                    <p>
                                    I recently decided to continue my education with Correlation One with their Software Development Program. I am recently married and this was what motivated me to grown and think more about my career path. I am determined and motivated to gain experience/knowledge. 
                                    </p>
                                    <br/>
                                    <p>
                                        I am passionate about building websites and software that improves the lives of those around me. I also enjoy learning about new technologies in my free time. 
                                    </p>
                                    </AnimationOnScroll>
                                </div>
                                
                                
                            </div>
                        </div>
                
                
                
                </div>
   
  );
};

export default About

