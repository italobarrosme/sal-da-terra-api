export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'dbsaldaterra'),
			user: env('DATABASE_USERNAME', 'userdbsaldaterra'),
			password: env('DATABASE_PASSWORD', 'saldaterra100'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
