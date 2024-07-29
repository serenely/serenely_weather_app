import React from 'react';
import { Provider } from 'react-redux';
import WeatherComponent from './components/WeatherComponent';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <WeatherComponent />
    </Provider>
  );
};

export default App;
