const Footer = (prop) => {
  const { menus } = prop
  return (
    <footer>
      <div className="cta">
        <div className="container">
          <ul>
            {menus.CtaMenu.map(item => (
              <li key={item.id}>
                <img src={item.img} alt={item.text} />
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
            {/* <li>
              <img src="../src/assets/img/digital comicsbuy-comics-merchandise.png" alt="" />
              <a href="">dc merchandise</a>
            </li>
            <li>
              <img src="../src/assets/img/buy-comics-subscriptions.png" alt="" />
              <a href="">subscription</a>
            </li>
            <li>
              <img src="../src/assets/img/buy-comics-shop-locator.png" alt="" />
              <a href="">comic shop locator</a>
            </li>
            <li>
              <img src="../src/assets/img/buy-dc-power-visa.svg" alt="" />
              <a href="">dc power visa</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="nav">
        <div className="container">
          <div className="col">
            <ul>
              <h4>dc comics</h4>
              {menus.ComicsMenu.map(item => (
                <li key={`comics-${item.id}`}><a href={item.url}>{item.text}</a></li>
              ))}
            </ul>
            <ul>
              <h4>shop</h4>
              {menus.ShopMenu.map(item => (
                <li key={`shop-${item.id}`}><a href={item.url}>{item.text}</a></li>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h4>DC</h4>
              {menus.DcMenu.map(item => (
                <li key={`dc-${item.id}`}><a href={item.url}>{item.text}</a></li>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h4>sites</h4>

              {menus.SitesMenu.map(item => (
                <li key={`sites-${item.id}`}><a href={item.url}>{item.text}</a></li>
              ))}
            </ul>
          </div>
          <div className="logo">
            <img src="../src/assets/img/dc-logo-bg.png" alt="" />
          </div>
        </div>
      </div>
      <div className="social">
        <div className="container">
          <div className="btn">
            <button>sign-up now!</button>
          </div>
          <div className="contact">
            <ul>
              <h3>follow us</h3>
              {menus.SocialMenu.map(item => (
                <li key={`social-${item.id}`}><a href={item.url}><img src={item.img} alt="" /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
