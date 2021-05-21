function Card({imgURL, title, list}) {
    const lists = list.map(e => <span className='bg-indigo-200 px-2 py-1 mr-2 rounded text-sm' key={e}>{e}</span>)
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 px-2 py-5'>
            <img className='rounded' src={imgURL} alt="" />
            <h3 className='text-2xl pb-2'>{title}</h3>
            {lists}
        </div>
    )
}

export default Card
