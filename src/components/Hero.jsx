import codingSvg from '../imgs/coding.svg';
import TypedReact from './TypedReact';
function Hero() {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='hero-text w-1/2 pl-32 flex items-center'>
                <div className="flex-col ">
                    <h1 className='text-7xl pb-5'>I am Khalil Rohani</h1>
                    <h3 className='text-3xl'>
                    <TypedReact text={['Web Developer', 'Front-end Developer', 'React Developer']}/>
                    </h3>
                    <div className='mt-5'>
                        <button className='bg-indigo-800 text-white rounded-lg px-5 py-3'>
                            Resume
                        </button>
                        <button >
                            <a className='bg-indigo-500 text-white rounded-lg px-5 py-3 ml-3' href="tel:0426731478"> Call Me</a>
                        </button>
                    </div>

                </div>
                </div>
            <div className="hero-img w-1/2 bg-purple-500 h-full relative">
                <img className='bottom-0 absolute' src={codingSvg} alt="gogop"/>
            </div>

        </div>
    )
}

export default Hero
