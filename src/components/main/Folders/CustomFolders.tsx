import styles from './Folders.module.css'
import Folder from './Folder'
import NewFolder from './NewFolder'

const customFolders = [
  'Работа',
  'Машины'
]

const CustomFolders = () => {
  return (
    <section>
      <section className='border-b'>
        <h5 className="ml-2 mt-1 text-gray-400 text-xs">Кастомные папки</h5>
        {customFolders.map((folderName, idx) => <Folder folderName={folderName} type='custom' key={idx} />)}
      </section>

      <NewFolder />
    </section>
  )
}

export default CustomFolders