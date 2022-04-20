import { setActiveFolder } from '../../../store/activeFolder/activeFolder.slice'
import { useAppSelector,useAppDispatch } from '../../../store/hooks'
import styles from './Folders.module.css'
import { FolderProps } from "./foldersInterfaces"


const Folder = ({folderName,type} : FolderProps) => {
  const {activeFolder} = useAppSelector(store => store.activeFolder)
  const dispatch = useAppDispatch()
  
  const cls = [styles[type + '_folder']]
  
  if (folderName === activeFolder) {
    cls.push(styles.active) 
  }

  return (
    <div className={cls.join(' ')} onClick={() => dispatch(setActiveFolder(folderName))}>
      {folderName}
    </div>
  )
}

export default Folder