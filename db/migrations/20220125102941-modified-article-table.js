'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('Articles', 'content', {
              type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.changeColumn('Articles', 'title', {
              allowNull: false,
              type: Sequelize.STRING,
          }, { transaction: t })
      ])
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.removeColumn('Articles', 'content', { transaction: t }),
          queryInterface.changeColumn('Articles', 'title', {
            type: Sequelize.STRING,
        }, { transaction: t })
      ])
  })
  }
};
