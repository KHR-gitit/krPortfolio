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
        <section className='py-32 bg-gray-100'>
            <h1 className='text-5xl text-center'>
                Portfolio
            </h1>
            <div className="cardFolder flex flex-wrap mx-auto max-w-7xl">
            {cards}
            </div>
            <button>TO portfolio</button>
        </section>
    )
}

export default Portfolio
