import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
const ErrorPage = () => {
	const error = useRouteError()

	console.log(error)
	return (
		<div>
			<p className='text-3xl font-bold'>Opps!</p>
			<p>Sorry, an unexpected error has occurred</p>
			{isRouteErrorResponse(error) && (
				<p>{error.statusText}</p>
			)}
		</div>
	)
}

export default ErrorPage