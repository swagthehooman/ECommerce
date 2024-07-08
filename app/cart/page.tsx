import { Button, Divider } from '@mui/material'
import React from 'react'
import CartItem from '../components/Cart/CartItem'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SummaryCard from 'app/components/Cart/SummaryCard';

export default function Cart() {
    return (
        <div className='mt-4 lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='px-4 col-span-2'>
                {[1, 1, 1, 1].map((item) => <CartItem />)}
            </div>
            <SummaryCard />
        </div>
    )
}