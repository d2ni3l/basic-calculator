import React from 'react'

function Copymodal() {
  return (
<>

<div class=" overflow-y-auto transition-all duration-200 flex justify-center overflow-x-hidden bg-[#0d0d0db0] fixed top-0 right-0 left-0 z-50 w-full  h-[100vh]">

    <div class="relative transition-all duration-200 flex justify-center items-center p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative transition-all duration-200 bg-[#172a46] rounded-lg shadow dark:bg-[#172a46]">
            <div class="p-4 space-y-6">
                <h3 class="text-base font-bold tracking-wider leading-relaxed text-white">
                   Copied!
                </h3>
            </div>
            
           
        </div>
    </div>
</div>

</>
  )
}

export default Copymodal;