import './App.css'
import AuthIcon from './components/header/AuthIcon';
import Logo from './components/header/Logo';
import SearchPanel from './components/header/SearchPanel'
import Folders from './components/main/Folders/Folders'
import Mails from './components/main/Mails/Mails';

function App() {
  return (
    <>
      <header className="flex h-14 items-center border-b min-w-[33.5rem] border-x bg-slate-50 mx-1 mb-2 rounded-xl">
        <Logo />
        <SearchPanel />
        <AuthIcon />
      </header>

      <main className="flex flex-auto h-full mx-1 bg-slate-50" >
        <Folders />
        <Mails />
      </main>
    </>
  );
}

export default App;
