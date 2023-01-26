import Logo from '../images/logo.svg';

export default function Footer() {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a
                    href="#"
                    className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        src={Logo}
                        className="mr-3"
                        style={{ height: '100px' }}
                        alt="Flowbite Logo"
                    />
                    Riding The Future
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    Feel free to fork the repo & experiment
                </p>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="#" className="hover:underline">
                        SpaceX Mock
                    </a>
                    . Open source
                </span>
            </div>
        </footer>
    )
}