import { Button } from "@mui/material";

export default function SummaryCard() {
    return <div className='px-8 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-5'>
                <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>₹299</span>
                </div>
                <div className='flex justify-between pt-3'>
                    <span>Discount</span>
                    <span className=' text-green-700'>-₹100</span>
                </div>
                <div className='flex justify-between pt-3 '>
                    <span>Delivery Charges</span>
                    <span className='text-green-700'>Free</span>
                </div>
                <div className='flex justify-between pt-3  font-bold'>
                    <span>Total Amount</span>
                    <span className='text-green-700'>₹339</span>
                </div>

            </div>
            <Button href={'/checkout'} variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", mt: "1rem" }}>
                Check Out
            </Button>
        </div>
    </div>
}