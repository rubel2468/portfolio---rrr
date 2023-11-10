import React from 'react'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';
import About from './About';
import Contuct from './Contuct';
import Footer from "./Fotter";



const Home = () => {

    return (
        <>
            <Navbar />
            <div className='container-fluid'>

                <div className='row h-back text-white'>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 h-left' data-aos="fade-left">

                        <h3>Hi <span className='text-info'>I am Rubel</span></h3>
                        <Typewriter
                            options={{
                                strings: [' i am MERN developer  code with Node. js and Express. js, using MongoDB for database storage, and developing the user interface with React. '],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <button className='my-5 btn btn-info '>
                            <span>More</span>
                        </button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 my-2' data-aos="fade-left ">
                        <div className=' img-d'>
                            <img className='img-profile  ' src="https://rare-gallery.com/thumbs/291848-wallpaper-1440-2560.jpg" alt="img" />

                        </div>

                    </div>
                </div>
            </div>
            <About />
            <Contuct/>
            <Footer/>
        </>
    )
}

export default Home