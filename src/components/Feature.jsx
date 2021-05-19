import imgses from '../imgs/responsive-website.png'
function Feature() {
    return (
        <section className='flex py-32 items-center w-full justify-center'>
            <div className="flex w-2/5 2xl:w-1/3 justify-end">
                <img className='pl-9' src={imgses} alt="" />
            </div>
            <div className="flex flex-col w2/5 2xl:w-1/3 ml-9 ">
                <h3 className=" text-indigo-900 uppercase block">feature project</h3>
                <h2 className='text-black text-3xl'>Painthouse</h2>
                <p className='text-gray-800 w-96 text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatibus eveniet alias nostrum, ipsum ipsam beatae, suscipit saepe eaque facere temporibus quod. Quasi placeat modi iste obcaecati saepe voluptates recusandae.
                </p>
            </div>
        </section>
    )
}

export default Feature
