import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('appcursos', 'root', '6576',{
    host: 'localhost',
    dialect: 'mysql'

});

export default sequelize;