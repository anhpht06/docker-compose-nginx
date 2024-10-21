import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('phone', 15).nullable()
      table.boolean('is_active').defaultTo(true)
      table.timestamps(true)
    })
  } 

  async down() {
    this.schema.dropTable(this.tableName)
  }
}