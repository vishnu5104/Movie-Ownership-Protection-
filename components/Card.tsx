'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Card = () => {
const router = useRouter()
const handleClick = () =>{
  router.push('movie-details')
}



  return (
  
<Link href={'movie-details/[id]'} as='/12'>
<div className="ml-10 pt-5 max-w-sm rounded overflow-hidden shadow-lg" onClick={handleClick}>
    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
    
    <Image height={0} className='w-full' width={100} alt='' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC0CAMAAACJ8pgSAAAAMFBMVEXIyMihoaHLy8ulpaXCwsKbm5u/v7+pqanHx8eenp6jo6O8vLyoqKizs7Otra24uLiqpXiMAAACJUlEQVR4nO3b7W6CMBhAYftp35aW+7/bVVA3sJnDxCzxPc8vYySRE+jHcKcTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHewr/jvL/1+dXpB/e9v/XZWJB8m4eMvGGtciUdNKrr4o8ekM11GPF2G6DJGlzG6jCns8qfzVdcllVrL82O0dYk5iIQcnx2jrIsXafPcxDwbcJR1aVJTv5dqaOn3Y3R1idmtL57OULq6FNOWs7XN7EeYtA2lq0s00/qO24+8tk6bWUpXl+Sk9NO1JZy344utIZjyo4SuLqciUr2vsr+NZsk1h/n7DWVd7LyuX8r2pOceypa8TFYrZV36EFNbq9urxRYxl8ElGqm3GOq69EHmelGU28XRe6x3UF8Mt2sNhV1W3t3WdjHLfKsx3QZkrV1KDtcwPdD97lnCLJ/V2cUWE2pv0Pprt9kT9B7Zn7R2meUyoixhpt1WKbVlt62xS6qSl8VtD2Nkv4Psm8oeRmOXJjmuJ93DyOPna6+mr0s6B3dfv1zHmB2f9HWJ7jrjrHql8+hPMcq62OL24+x+4F3p6rLMz7sKlyXL4zG6uqzz805PUB8aqOpSxZTB2fr6+HhAUZfLim2UZUhPF9/+8NjoTk+XWdyTZyM/6emSyoEsirocQ5cxJb+vi/6gqKGLiDtMw+93m3nBYHPwaV7694CPv1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBhX1beFm7PqhzwAAAAAElFTkSuQmCC'}/>

    <div className="flex flex-row justify-between">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{'NFT DATA '}</div>
    <p className="text-gray-700 text-base">
      {'Movie Description'}
    </p>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{'Price Value'}</div>
    
  </div>
</div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'Movie tag 1'}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'Movie tag 2'}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'Movie tag 3'}</span>
    </div>
  </div>
 
</Link>
  )
}

export default Card