import './App.css';
import RequestToUse from './components/RequestToUse';

const App = () => {
  return (
    <div className="App">
     <div className='box'>
        <form>
          <h1>เหตุผลการขอเข้าใช้งาน</h1>
          <RequestToUse placeholder="เหตุผล"/><br/>
        </form>
    </div>
    </div>
  );
}

export default App;
