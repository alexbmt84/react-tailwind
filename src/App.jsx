import Img1 from './g8.svg';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-dark">
      <main className="container mx-auto px-9 pt-16 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        
        <div class="containerLogo">
          <img id="logo" src={Img1} alt=""/>
        </div>

        <nav>
            <ul>
                <button class="invisibleBtn" onclick="window.location.href='login.php';">
                    <li>sign in<span></span>
                                <span></span>
                                <span></span>
                                <span></span>   
                    </li>
                </button><br />
                <button class="invisibleBtn" onclick="window.location.href='register.php';" cursor="pointer">
                    <li>sign up<span></span>
                            <span></span>
                            <span></span>
                            <span></span>   
                    </li>
                </button>
            </ul>
        </nav>

      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with 🖤 by Young Trial</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>
        </div>
      </footer>
    </div>
  )
}

export default App
