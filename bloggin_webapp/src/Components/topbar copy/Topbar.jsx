/* Topbar Component */

import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';


export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">foam</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Settings/>
                    
                </div>
                <img src="https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg" alt="AVATAR" className='topAvatar'  />
            </div>

        </div>
    </div>
  )
}
