import CustomHookComponent from './components/CustomHookComponent';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div className="App">
      <h1>Typescript Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <UseReducerComponent />
      <UseRefComponent />
      <UseContextComponent />
      <CustomHookComponent />
    </div>
  );
}

export default App;
