'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('workspaces', 'url_image', {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: 'https://res.cloudinary.com/dxdet2cn6/image/upload/v1708451676/mvy4aqpk6svncgazbgcq.webp'
    })
    await queryInterface.addColumn('workspaces', 'slug', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('workspaces', 'url_image')
    await queryInterface.removeColumn('workspaces', 'slug')
  }
}
