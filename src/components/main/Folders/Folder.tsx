import { useState } from 'react'
import { setActiveFolder } from '../../../store/activeFolder/activeFolder.slice'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import styles from './Folders.module.css'
import { FolderProps } from "./foldersTypes"


const Folder = ({ folderName, type }: FolderProps) => {
  const [changed, setChanged] = useState<null | 'delete' | 'edit'>(null)
  const [inputValue, setInputValue] = useState('')

  const { activeFolder } = useAppSelector(store => store.activeFolder)
  const dispatch = useAppDispatch()

  const cls = [styles[type + '_folder']]

  if (folderName === activeFolder) {
    cls.push(styles.active)
  }


  if (type === 'main') {
    return (
      <div className={cls.join(' ')} onClick={dispatch.bind(null, setActiveFolder(folderName))}>
        {folderName}
      </div>
    )
  }

  const handleDeleteButton = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation()
    setChanged('delete')
  }

  const handleEditButton = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation()
    setChanged('edit')
  }


  return (
    <div className={styles['custom_folder__wrapper']} onPointerLeave={() => setChanged(null)}>
      <div className={cls.join(' ')} onClick={dispatch.bind(null, setActiveFolder(folderName))}>
        {folderName}

        <div className={styles['custom_folder__buttons']}>
          <span className="material-icons hover:text-red-600" onClick={(e) => handleDeleteButton(e)}>
            delete
          </span>
          <span className="material-icons hover:text-yellow-400" onClick={(e) => handleEditButton(e)}>
            edit
          </span>
        </div>


      </div>
      {changed === 'delete' ? (
        <div className='text-center py-2 text-sm text-opacity-40 flex flex-col justify-around items-center'>
          <button className='bg-red-400 w-10/12 py-1 rounded-xl'>Удалить</button>
        </div>
      ) : null}
      {changed === 'edit' ? (
        <div className='text-center py-2 text-sm text-opacity-40 flex flex-col justify-around items-center'>
          <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder='Новое название' className='px-3 w-10/12 h-8 rounded-xl mb-1 bg-slate-100 outline-none focus:border-lime-500 focus:border'/>
          <button className='bg-yellow-200 hover:bg-yellow-300 transition-colors duration-200 w-10/12 py-1 rounded-xl'>Изменить</button>
        </div>
      ) : null}
    </div>
  )

}

export default Folder