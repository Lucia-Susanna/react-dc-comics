import Header from "../src/components/Header"
import Main from "../src/components/Main"
import Footer from "../src/components/Footer"

import HeaderMenu from "./components/HeaderMenu"

const App = () => {
  return (
    <>
      <Header menu={HeaderMenu} />
      <Main />
      <Footer />
    </>
  )
}

export default App
