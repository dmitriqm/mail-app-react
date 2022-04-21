import { useState } from 'react'

const NewFolder = () => {
  const [toggleNewFolder, setToggleNewFolder] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <section className='flex flex-col' onPointerLeave={() => setToggleNewFolder(false)}>
      <h5 className="ml-2 mt-1 text-gray-400 text-xs">Cоздать папку</h5>
      <div className='flex flex-col h-fit ml-1 my-1 w-10/12 bg-slate-200 rounded-r-xl' >
        <div className='w-full rounded-r-xl px-3 bg-yellow-100 hover:bg-yellow-200 cursor-pointer py-1' onClick={() => setToggleNewFolder(!toggleNewFolder)}>
          Создать папку
        </div>
      {
        toggleNewFolder ? (
          <div className='mx-1 border rounded-r-xl  flex flex-col py-1 items-center'>
            <input value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder='Название папки' className='px-3 w-11/12 h-8 text-sm rounded-xl mb-1 bg-slate-50 outline-none focus:border-lime-500 focus:bg-white focus:border' />

            <button className='bg-yellow-200  hover:bg-yellow-300 transition-colors duration-200 w-10/12 py-1 rounded-xl'>Создать</button>
          </div>
        ) : null
      }
      </div>

    </section>
  )
}

export default NewFolder