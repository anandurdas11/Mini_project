import React from 'react'
import {  Avatar, Card ,TextField, Toolbar,Button } from "@material-ui/core"
import { SendRounded ,MoreVert } from '@material-ui/icons';
import './Postlist.css'
import Moreoptions from './Moreoptions';
function Home() {
  return (
    <div className>
      <body>
        <div className="Post">
          <div className="Postemplate">
            <Card
              className="Postcard"
              style={{ borderRadius: "20px 20px 0px 0px " }}
            >
              <Toolbar className="toppostbar">
                <Avatar
                  src="https://lh3.googleusercontent.com/a-/AOh14GjIq7jWeduBBxCLuIj3uG_ct5fx_F7S0ZKb4CdT=s96-c-rg-br100"
                  className="topavatar"
                  alt="icon"
                />
                <div className='Name'>jdslkjflk</div>
                <div className="More">
                  <Button>
                    <Moreoptions />
                  </Button>
                </div>
              </Toolbar>
              <div className="content">
                <h3>Title:HELLO WORLD</h3>
                <p>flgfhjshfoihsdjkfhkldlkflsjdfjslkfjlk</p>
              </div>
            </Card>
          </div>
          <div className="comment">
            <div className="addcomment">
              <TextField
                label="Add comment"
                variant="standard"
                size="small"
                fullWidth
              ></TextField>
              <br></br>
              <div className="send">
                <SendRounded></SendRounded>
              </div>
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