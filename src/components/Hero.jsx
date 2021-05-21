import codingSvg from '../imgs/coding.svg';
import TypedReact from './TypedReact';
function Hero() {
    return (
        <div className='flex flex-col md:flex-row h-screen overflow-hidden'>
            <div className='hero-text pt-32 w-1/2 pl-32 flex items-center'>
                <div className="flex-col ">
                    <h4 className='text-2xl text-indigo-800'>Hi,</h4>
                    <h1 className='text-7xl pb-5'>I am Khalil Rohani</h1>
                    <h3 className='text-3xl text-indigo-600'>
                    <TypedReact text={['Web Developer', 'Front-end Developer', 'React Developer']}/>
                    </h3>
                    <div className='mt-5'>
                        <button className='bg-indigo-800 text-white rounded-lg px-5 py-3'>
                            Resume
                        </button>
                        <button>
                            <a className='bg-indigo-500 text-white rounded-lg px-5 py-3 ml-3' href="tel:0426731478"> Call Me</a>
                        </button>
                    </div>

                </div>
                </div>
            <div className="hero-img mx-auto md:mx-0 w-1/2 md:bg-purple-500 h-full relative">
                <img className='bottom-0 absolute ' src={codingSvg} alt="gogop"/>
            </div>

        </div>
    )
}

export default Hero
