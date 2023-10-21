'use client'

import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Router, { useRouter } from 'next/router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const plans =[
  {
    plainId:1,
    planName:'Basic Plan',
    price:'0 ETH',
    duration:'10 Days'
  },
  {
    plainId:2,
    planName:'Pro Plan',
    price:'0.002 ETH',
    duration:'1 Month'  
  },

]
const PurchasePlan = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const route = useRouter();
  return (
    <section>
     <div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <div className='flex gap-[30px]'>

          <Image height={400} width={400} alt='' src={'https://media.istockphoto.com/id/1163699020/vector/3d-headphone-with-sound-waves-on-dark-background.jpg?s=612x612&w=0&k=20&c=ruKHhUDC_n14Hg8U7djH6QKELYyp_u1EZiAVRxGtxyc='}/>
         <div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <div className='mt-5 flex gap-5'>
        <button onClick={()=>{route.push('/upload-nft-ticket')}} >Check Out</button>
        <button>Cancel</button>
         </div>
       </div>
       </div>
      
        </Box>
      </Modal>
    </div>
  <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
  <div className='flex justify-center'>Sample NFT Ticket With MetaData</div>
  <div className='flex justify-center'></div>
  <Image height={0} className='ml-52' width={700} alt='' src={'https://i.ibb.co/dBZS0jv/NFT-TICKET-2.png'}/>

    <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
      <div className="justify-center mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:max-w-2xl xl:mx-0 xl:grid-cols-2">
        <div className="bg-gray-50 rounded-xl">
          <div className="p-6 text-center">
            <h2 className="text-lg font-medium leading-6 text-neutral-600">Basic</h2>

            <p className="mt-8 text-4xl">
              <span className="font-black text-blue-600 uppercase">free</span>
              <span className="font-medium text-gray-500">/mo</span>
            </p>
            <span className="text-xs text-neutral-600">{'Sign With Wallet'}</span>
            <div className="mt-6">
              <a href="#" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Now</a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <div className="p-6 text-center">
            <h2 className="text-lg font-medium leading-6 text-neutral-600">Premium</h2>

            <p className="mt-8 text-4xl">
              <span className="font-black text-gray-500 uppercase">0.2 ETH</span>
              <span className="font-medium text-gray-500">/mo</span>
            </p>
            <span className="text-xs text-neutral-600">{'Pay With (Wallet Name)'}</span>
            <div className="mt-6">
              <a href="#" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><Button onClick={handleOpen}>Buy Now {'0.02 ETH'}</Button></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default PurchasePlan