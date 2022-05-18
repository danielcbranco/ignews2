import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
	console.log(request.query)

	const users = [
		{ id: 1, name: 'Lengo' },
		{ id: 2, name: 'Abobora' },
		{ id: 2, name: 'Renzote' },
	]

	return response.json(users)
}