import Logo from '../images/logo.svg';

export default function Header() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3"
                            style={{ height: '100px' }}
                            alt="Flowbite Logo"
                        />
                    </a>
                </div>
            </nav>
        </header>
    )
}