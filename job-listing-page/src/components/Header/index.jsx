import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav
                    className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a
                        href="https://jobpulse.fyi/"
                        className="flex items-center"><img
                        src="/static/media/logo-light.8a3507456199afe312cf.png" className="h-8 mr-3"
                        alt="JobPulse Logo"/>
                        <p className="appTitle ml-2">JobPulse</p></a>
                        <div className="flex md:order-2">
                            <div className="mr-2">
                                <button type="button"
                                        className=" sm:inline-block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-full text-sm px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    🔔 Job Alert
                                </button>
                            </div>
                            <div className="relative">
                                <div className="relative w-7 h-7 rounded-full"><img
                                    className="w-7 h-7 rounded-full cursor-pointer"
                                    src="https://lh3.googleusercontent.com/a/ACg8ocLCjf9gSEvjvoTnnKENkJsl0TgDmLpbiVX4IetC222Mpg=s96-c"
                                    alt="User Profile"/></div>
                            </div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                             id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li><a href="/Software-Engineer-NewGrad"
                                       className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 rounded md:p-0"
                                       aria-current="page">👩🏻‍💻 Software NewGrad</a></li>
                                <li><a href="/Software-Engineer-Internship"
                                       className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🧑🏽‍💻
                                    Software Intern</a></li>
                                <li><a href="/Product-Manager"
                                       className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🙋🏼‍♂️
                                    Product Full-Time</a></li>
                                <li><a href="/Product-Manager-Internship"
                                       className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🙋
                                    Product Intern</a></li>
                                <li><a href="https://discord.gg/R6rWBFhzF2" target="_blank" rel="noopener noreferrer"
                                       className="flex items-center block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 rounded md:p-0 md:dark:hover:text-blue-500"><img
                                    src="/static/media/discord_icon.c53585e869842f5ff01d.png" className="w-4 h-4 mr-2"/>Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;