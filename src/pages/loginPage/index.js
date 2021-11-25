

function Login() {



	return (
		<div className="content">
			{/*{isAuthenticated ? (*/}
			{/*	<>*/}
			{/*		<p>You're logged in.</p>*/}
			{/*	</>*/}
			{/*) : (*/}
				<>
					<p>You're in the Home page. Login to visit protected pages.</p>
					<button className="button">
						Login as Admin
					</button>
					<button className="button" >
						Login as Employer
					</button>
					<button className="button" >
						Login as Talent
					</button>
				</>
			{/*)}*/}

		</div>
	)
}

export default Login
