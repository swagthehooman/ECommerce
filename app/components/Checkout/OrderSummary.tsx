import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem';
import SummaryCard from '../Cart/SummaryCard';

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-md border'>
                <AddressCard />
            </div>
            <div className='mt-4 lg:grid grid-cols-3  relative'>
                <div className='col-span-2'>
                    {[1, 1, 1, 1].map((item) => <CartItem />)}
                </div>
                <SummaryCard />
            </div>
        </div>
    )
}

export default OrderSummary