'use client';

import Container from '../Container';
import { MdOutlineBakeryDining } from "react-icons/md";
import { IoBeerOutline } from "react-icons/io5";
import { IoIosRestaurant } from "react-icons/io";
import { TbCoffee } from "react-icons/tb";
import { IoBusinessOutline } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { PiHamburger } from "react-icons/pi";
import { GiTacos } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";
import { LuCandy } from "react-icons/lu";
import { GiSushis } from "react-icons/gi";

export const categories = [
    {
        label: 'Bakery',
        icon: MdOutlineBakeryDining,
        description: 'The smell of freshly baked bread is what will attract you.'
    },
    {
        label: 'Coffee Bar',
        icon: IoBeerOutline,
        description: 'Part and share unforgettable moments.'
    },
    {
        label: 'Coffee',
        icon: TbCoffee,
        description: 'Being able to share in this place is what complements your life.'
    },
    {
        label: 'Small Businesses',
        icon: IoBusinessOutline,
        description: 'Undertaking and understanding.'
    },
    {
        label: 'Colombian Food',
        icon: PiHamburger,
        description: ''
    },
    
    {
        label: 'Fast Food',
        icon: CiFries,
        description: ''
    },
    {
        label: 'Mexican Food',
        icon: GiTacos,
        description: ''
    },
    
    {
        label: 'Restaurant',
        icon: IoIosRestaurant,
        description: 'Food that will fill your heart and stomach.'
    },
    {
        label: 'Italian Food',
        icon: CiPizza,
        description: ''
    },
    
    {
        label: 'Store',
        icon: MdStorefront,
        description: 'Find what you want, buy what you can.'
    },
    {
        label: 'Japanesse Food',
        icon: GiSushis,
        description: ''
    },
    {
        label: 'Artisanal sweets',
        icon: LuCandy,
        description: ''
    },
];

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()
    const isMainPage = pathname === '/'

    if (!isMainPage) {
        return null
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container >
    );
}

export default Categories;
