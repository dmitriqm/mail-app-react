const SearchPanel = () => {
  return (
    <form className="flex items-center flex-auto" onSubmit={(e) => e.preventDefault()}>
      <input className="px-3 outline-none flex-auto max-w-3xl border mr-1 h-10 rounded-lg bg-slate-200 focus:bg-slate-50 focus:shadow-sm transition-all duration-600" placeholder="Поиск письма..."></input>
      <button type={'submit'} className='flex items-center border h-10 rounded-full p-2 bg-green-400 hover:bg-green-500 transition-colors'>
        <span className="material-icons">
          search
        </span>
      </button>
    </form>
  )
}

export default SearchPanel