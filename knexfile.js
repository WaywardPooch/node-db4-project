export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipebook.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // Foreign Key Enforcement
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};
