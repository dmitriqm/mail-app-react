import Folder from "./Folder"
import { mainFolders } from "./mainFolders"

const MainFolders = () => {
  return (
    <section className="border-b">
      <h5 className="ml-2 mt-1 text-gray-400 text-xs">Основные</h5>      
      { mainFolders.map((folderName, idx) => <Folder folderName={folderName} type={"main"} key={idx}/>)}
    </section>
  )
}

export default MainFolders