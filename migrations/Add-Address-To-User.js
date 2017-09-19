module.exports = {
  up: (queryInterface, Sequelize) => {
      // logic for transforming into the new state
    return queryInterface.addColumn(
      'User',
      'Address',
      {
        type     : Sequelize.STRING,
        allowNull: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'User',
      'Address'
    );
  },
};
