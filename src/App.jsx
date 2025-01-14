import Header from "../src/components/Header"
import Main from "../src/components/Main"
import Footer from "../src/components/Footer"

import HeaderMenu from "./components/HeaderMenu"
import FooterMenu from "./components/FooterMenu"

const App = () => {
  return (
    <>
      <Header menu={HeaderMenu} />
      <Main />
      <Footer menus={FooterMenu} />
    </>
  )
}

export default App
