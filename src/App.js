import './App.css';
import {createStore} from "redux"
import{ Provider } from "react-redux"

// Pages
import Dashboard from './Pages/Dashboard';

// Reducer
import dashboardReducer from './Pages/Dashboard/redux/dashboardReducer';

const store = createStore(dashboardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Dashboard />
			</div>
		</Provider>
	);
}

export default App;
