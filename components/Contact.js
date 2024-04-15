import React from 'react'

export default function Contact() {
    return (
        <div id="container" className="w-full md:mt-0 mt-[500px] h-fit md:h-screen p-5 md:p-20">

            <h1 className="text-3xl md:text-5xl font-semibold text-center my-14 md:my-5 capitalize">leave a message</h1>

            <form action="https://formspree.io/f/mvoevyne" method="POST" className='w-full md:w-6/12 mx-auto flex flex-col gap-8'>

                <div className="container w-full flex flex-col gap-3">
                    <label className='text-lg'>
                        Your name:
                    </label>
                    <input className='w-full p-4 focus:outline-none' placeholder='name...' />
                </div>

                <div className="container w-full flex flex-col gap-3">
                    <label className='text-lg'>
                        Your email:
                    </label>
                    <input type="email" name="email" className='w-full p-4 focus:outline-none' placeholder='email...' />
                </div>

                <div className="cotnainer w-full flex flex-col gap-3">
                    <label  className='text-lg'>
                        Your message:
                    </label>
                    <textarea name="message" rows={8} className='text-black w-full p-4 focus:outline-none' placeholder='message...' ></textarea>
                </div>
                
                <button className='w-full p-4 bg-red-600 text-lg font-semibold text-white' type="submit">Send</button>
           
            </form>

        </div>
    )
}
