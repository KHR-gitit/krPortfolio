import iadobe from '../imgs/adobe-xd.svg'
import ibootstrap from '../imgs/bootstrap.svg'
import icss from '../imgs/css-5.svg'
import ihtml from '../imgs/html5.svg'
import ijavascript from '../imgs/javascript.svg'
import ireact from '../imgs/react.svg'
import itailwind from '../imgs/tailwindcss.svg'


function Skills() {
    return (
        <section className='bg-indigo-900 text-white flex w-full items-center justify-center h-96 py-24'>

            <div className="flex flex-col">            
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={iadobe} alt="" />
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={ibootstrap} alt="" />
            </div>
            <div className="flex flex-col">            
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={icss} alt="" />
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={ihtml} alt="" />
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={ijavascript} alt="" />
            </div>
            <div className="flex flex-col">            
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={ireact} alt="" />
                <img className='p-9 h-32 w-32 bg-indigo-200 rounded m-2' src={itailwind} alt="" />
            </div>

        </section>
    )
}

export default Skills
