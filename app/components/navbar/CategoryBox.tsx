'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        };

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = `/?${qs.stringify(updatedQuery, { skipNull: true })}`;

        console.log('URL generada: ', url);

        router.push(url);
        console.log('Redirección realizada a: ', url);
    }, [label, params, router]);

    useEffect(() => {
        console.log('Parámetros de búsqueda actualizados: ', params?.toString());
    }, [params]);

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
                        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}>
            <Icon size={26} />
            <div className='font-medium text-sm'>
                {label}
            </div>
        </div >
    );
}

export default CategoryBox;
