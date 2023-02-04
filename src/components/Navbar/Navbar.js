import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] =useState(false);
    const routs = [
        { id: 1, name: 'Home', link: './home' },
        { id: 2, name: 'Shop', link: './shop' },
        { id: 3, name: 'Deals', link: './deals' },
        { id: 4, name: 'Coupons', link: './Coupons' },
        { id: 5, name: 'Contac', link: './contact' }
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=>setOpen
            (!open)} className='h-6 w-6
             md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md:flex justify-center md:static absolute bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6':'top-[-120px]'}`}>
                {
                    routs.map(route => <Link
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;