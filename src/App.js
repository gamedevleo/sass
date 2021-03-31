import './scss/style.scss';

function App() {
  return (

    <div className="App">
      <header className="showcase">
        <div className="container">
          <nav>
            <h1 className='logo'>My Website</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>

          <div className="showcase-content">
            <div>
              <h1>Make Your Marketing Real</h1>
              <p className="my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a href="#" className="btn-primary">Learn More</a>
              <a href="#" className="btn-secondary">Sign Up</a>
            </div>
            <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt=""/>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
