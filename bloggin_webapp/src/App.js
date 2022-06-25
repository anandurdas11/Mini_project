import './App.css';

import { AppBar, Toolbar } from '@material-ui/core';
import Test from './Test';

function App() {
  return (
    <div>
      <body>
        <AppBar className="Appbar" position="static">
          <Toolbar>
            <header>
              <img
                src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/blog-128.png"
                className="topAvatar"
                alt="icon"
              />
            </header>
          </Toolbar>
        </AppBar>
        
      </body>
      <Test />
    </div>
  );
}

export default App;
