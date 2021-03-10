import React from 'react'
import logo from '../../Assets/img/logo-large.png'
function BigLogoHeader() {
    return (
        <div className="logo-wrap">
			<a href="index.html" className="inner">
				<img src={logo}/>
			</a>
		</div>
    )
}

export default BigLogoHeader