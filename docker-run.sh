npx wait-port db:5432
cd /usr/src/app/db
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd ../
npm start