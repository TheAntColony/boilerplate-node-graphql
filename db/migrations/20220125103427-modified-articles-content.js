'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.changeColumn('Articles', 'content', {
              type: Sequelize.TEXT,
          }, { transaction: t })
      ])
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.changeColumn('Articles', 'content', {
            type: Sequelize.STRING,
        }, { transaction: t })
      ])
  })
  }
};
