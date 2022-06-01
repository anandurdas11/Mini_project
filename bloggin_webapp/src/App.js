import './App.css';

import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <div>
      <body>
        <AppBar className="Appbar" position="static">
          <Toolbar>
            <header>
              <img
                src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/blog-128.png"
                className="topAvatar" alt="icon"
              />
              
            </header>
          </Toolbar>
        </AppBar>
        
      </body>
    </div>
  );
}

export default App;
