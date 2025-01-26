import './App.css';
import Pagination from './component/Pagination/Pagination';
import data from './Folder.json';
import Toggle from './component/FolderFileToggle/Toggle';
// import Timer from './component/Timer/Timer';
import Todo from './component/Todo/Todo';
import IncDecNum from './component/IncDecUserNum/IncDecNum';
import Weather from './component/Weather/Weather';
import Folder from './component/Folder/Folder';
import Folderfile from './Folder1.json'
import PageResize from './component/PageResize/PageResize';
import Usecallback from './component/Usecallback/Usecallback';
import DebounceSearch from './component/DebounceSearch/DebounceSearch';
import DebounceSearch2 from './component/DebounceSearch/DebounceSearch2';
import Pagination2 from './component/Pagination2/Pagination2';
function App() {
  return (
    <div className="App">
      <Pagination2/>
      {/* <DebounceSearch /> */}
      {/* <DebounceSearch2 /> */}
      {/* <Usecallback/> */}
      {/* <PageResize/> */}
      {/* <IncDecNum /> */}
      {/* <Folder data={Folderfile} key={Folderfile.id}/> */}
      {/* <Weather/> */}
      {/* <Pagination /> */}
      {/* {data.map((msg) => (
        <Toggle key={msg.id} node={msg}/>
      ))} 
       */}
       {/* <Timer/> */}

       {/* <Todo/> */}
      
    </div>
  );
}

export default App;
