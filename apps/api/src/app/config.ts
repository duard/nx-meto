export const config = () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  database: {
    type: 'mysql',
    host: process.env.DB_METO_HOST,
    port: 3306,
    username: process.env.DB_METO_USERNAME,
    password: process.env.DB_METO_PASSWORD,
    database: process.env.DB_METO_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity.js'],
  },
});


// export DB_METO_HOSTNAME=localhost
// export DB_METO_USERNAME=dev-user
// export DB_METO_PASSWORD=teste123
// export DB_METO_DATABASE=dev-migra
