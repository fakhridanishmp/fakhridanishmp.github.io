// components/Header.js
export default function Header() {
    return (
        <header className="flex absolute top-0 left-0 z-10 items-center w-full bg-transparent pt-2 font-mono">
            <div className="container">
                <div className="flex relative justify-between items-center">
                    <div className="px-8">
                        <a className="block py-6 font-bold transition duration-300 text-2xl text-primary text-sky-400"
                            href="#">𝑓</a>
                    </div>
                    <div className="flex items-center px-4">
                        <nav id="nav-menu"
                            className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none transition duration-150">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a className="flex py-2 mx-6 text-base transition duration-300 dark:text-white"
                                        href="#about"><p className="text-sky-400 pr-2">01.</p>About</a>
                                </li>
                                <li className="group">
                                    <a className="flex py-2 mx-6 text-base transition duration-300 dark:text-white"
                                        href="#projects"><p className="text-sky-400 pr-2">02.</p>Projects</a>
                                </li>
                                <li className="group">
                                    <a className="flex py-2 mx-6 text-base transition duration-300 dark:text-white"
                                        href="#achievements"><p className="text-sky-400 pr-2">03.</p>Achievements</a>
                                </li>
                                <li className="group">
                                    <a className="flex py-2 mx-6 text-base transition duration-300 dark:text-white"
                                        href="#reachme"><p className="text-sky-400 pr-2">04.</p>Reach me</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
