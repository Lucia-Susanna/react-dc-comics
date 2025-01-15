const Header = (prop) => {
  const { menu } = prop

  return (
    <header>
      <div className="container">
        <figure>
          <img src="/dc-logo.png" alt="logo" />
        </figure>
        <nav>
          <ul>
            {menu.map(item => (
              <li key={`header-${item.id}`}>
                <a className={item.isActive ? 'active' : ''} href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
