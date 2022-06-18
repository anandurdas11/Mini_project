import React from 'react'
import { Button, Card ,TextField } from "@material-ui/core"
import { AddComment } from '@material-ui/icons';
import './Postlist.css'
function Home() {
  return (
    <div className>
      <body>
        <div className="Post">
          <div className="Postemplate">
            <Card className="Postcard">
              <h3>Title:HELLO WORLD</h3>
              <p>flgfhjshfoihsdjkfhkldlkflsjdfjslkfjlk</p>
            </Card>
          </div>
          <div className="comment">
            <div className="addcomment">
              <TextField label="Add comment" variant='standard' size='small' fullWidth>
                
              </TextField>
            </div>
          </div>
        </div>

        <br></br>
        <Card className="Postcard">
          <h3>Title:HELLO WORLD</h3>
          <p>flgfhjshfoihsdjkfhkldlkflsjdfjslkfjlk</p>
        </Card>
        <br></br>
        <Card className="Postcard">
          <h3>Title:HELLO WORLD</h3>
          <p>flgfhjshfoihsdjkfhkldlkflsjdfjslkfjlk</p>
        </Card>
      </body>
    </div>
  );
}

export default Home