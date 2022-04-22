import MainFolders from './MainFolders'
import CustomFolders from './CustomFolders'

const Folders = () => {
  return (
    <section className="border rounded-xl flex-shrink-0 w-52 mr-2">
      <MainFolders />
      <CustomFolders />
    </section>)
}

export default Folders