import Card from "./Card";
import imgses from '../imgs/responsive-website.png'
 
let list = [
    {imgURL : imgses,
     title: 'my-project1',
     list: ['HTML', 'CSS', 'Bootstrap']
    },
    {imgURL : imgses,
        title: 'my-project2',
        list: ['html', 'css', 'react']
       },
       {imgURL : imgses,
        title: 'my-project3',
        list: ['html', 'css', 'react']
       },
       {imgURL : imgses,
        title: 'my-project4',
        list: ['html', 'css', 'react']
       },
       {imgURL : imgses,
        title: 'my-project5',
        list: ['html', 'css', 'react']
       },
       {imgURL : imgses,
        title: 'my-project6',
        list: ['html', 'css', 'react']
       }
]

function Portfolio() {
    const cards = list.map(e => <Card imgURL={e.imgURL} title={e.title} list={e.list} key={e.title}/>)
    return (
        <section id='portfolio' className='pt-32 pb-12 bg-gray-200 w-full'>
            <h1 className='text-5xl text-center'>
                Portfolio
            </h1>
            <div className="cardFolder flex flex-wrap mx-auto max-w-7xl">
            {cards}
            </div>
            <div className="flex justify-center pt-9">
            <button className='uppercase bg-indigo-800 text-white p-6 rounded hover:bg-indigo-600'>See More</button>
            </div>
        </section>
    )
}

export default Portfolio
