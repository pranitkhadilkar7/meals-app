import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './routes/Routes'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}
