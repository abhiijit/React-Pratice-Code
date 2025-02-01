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
import PaginationImage from './component/PaginationImage/PaginationImage';
import WorkoutTimer from './component/WorkoutTimer/WorkoutTimer';
import DragDrop from './component/DragAndDrop/DragDrop';
import ObservableEle from './component/ObservableComp/ObservableEle';
import Timer2 from './component/WorkOutTimer_2/Timer2';
import FormFillTbl from './component/FormFillTable/FormFillTbl'
function App() {
  return (
    <div className="App">
      <FormFillTbl/>
      {/* <Timer2/> */}
      {/* <ObservableEle /> */}
      {/* <DragDrop/> */}
      {/* <WorkoutTimer/> */}
      {/* <Pagination2/> */}
      {/* <PaginationImage /> */}
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
