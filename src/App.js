import { Provider } from 'react-redux';
import { store } from './redux/store';
import Activity from './components/Activity';
import ActivityButton from './components/ActivityButton';
import ChangeName from './components/ChangeName';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>Meow Mix Reducer</h1>
                <ChangeName />
                <hr />
                <Activity />
                <ActivityButton />
            </div>
        </Provider>
    );
}

export default App;