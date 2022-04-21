'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioAccesoSchema extends Schema {
  up () {
    this.table('usuarios_accesos', (table) => {
      // alter table
    })
  }

  down () {
    this.table('usuarios_accesos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsuarioAccesoSchema
