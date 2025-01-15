import Header from "../src/components/Header"
import Main from "../src/components/Main"
import Footer from "../src/components/Footer"

import HeaderMenu from "./components/HeaderMenu"
import FooterMenu from "./components/FooterMenu"
import Comics from "./data/comics"

const App = () => {
  return (
    <>
      <Header menu={HeaderMenu} />
      <Main comics={Comics} />
      <Footer menus={FooterMenu} />
    </>
  )
}

export default App
