import React from 'react'
function ResetPasswordCard() {
    return (
        <div className="centered-content-wrap">
			<div className="centered-block">
				<h1>reset password</h1>
				<ul>
					<li>
						<input type="text" placeholder="Email" className="in-text large"/>
					</li>
					<li className="right">
						<a href="javascript:;" className="btn orange">Reset password</a>
					</li>
				</ul>
			</div>
		</div>
    )
}

export default ResetPasswordCard
