import React from 'react'

function Bottons({text,color}) {
  return (
    <button className={`bg-[${color}] w-52 py-4 px-5 text-md font-semibold hover:brightness-110 transition-all ease-in duration-200 rounded-sm`}>{text}</button>
  )
}

export default Bottons