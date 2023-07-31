import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export function Header() {
    const Links = [
        {name: "Funcionalidades", link:""},
        {name: "App", link:""},
        {name: "Planos", link:""},
        {name: "Contato", link:""},
    ];

    let [open, setOpen] = useState(false);

    return ( 
        <header className="shadow-md w-full  fixed top-0 left-0bg-white">
            <div className="md:flex items-center justify-around py-4 bg-white max-md:px-10 px-7">
            <img src="/src/assets/svg/headerlogo.svg" alt="Logo-company" />
            <nav className="">
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon> 
                </div>
                <ul className={`md:flex items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto
                z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 opacity-100' : 'top-[-498px]'} md:opacity-100 max-md:text-center`}> {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
                            <a href={link.link} className=" text-zinc-500 ease-in duration-300 hover:text-zinc-900">{link.name}</a>
                        </li>
                    ))
                } 
                </ul>
            </nav>
            </div>
        </header>
     );
}
