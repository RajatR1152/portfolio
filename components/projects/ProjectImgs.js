import React from 'react'
import Mobile from '../view/Mobile'
import Laptop from '../view/Laptop'

export default function ProjectImgs({ data }) {
    return (
        <div className="container w-full h-fit md:h-screen overflow-y-auto p-2 md:p-10 flex flex-col gap-10">

            <div className="container w-full">
                {
                    data?.imgs?.map((p, i) => {
                        if (i < 2) { return <Mobile img={p} /> }
                        else { return <Laptop img={p} /> }
                    })
                }
            </div>
        </div>
    )
}
