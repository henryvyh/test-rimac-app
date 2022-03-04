import "../src/assets/sass/app.sass"
import AppRouter from "./router/AppRouter"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import store from "./redux/redux"
import { Provider } from "react-redux"
const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        limit={8}
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
