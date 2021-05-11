import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className='flex w-full bg-indigo-900 text-white dark:bg-gray-200 dark:text-indigo-700 shadow-md'>
            <nav className='flex ml-auto mr-5'>
                <HeaderItem title={'home'}/>
                <HeaderItem title={'about'}/>
                <HeaderItem title={'portifolio'}/>
            </nav>
        </header>
    )
}

export default Header