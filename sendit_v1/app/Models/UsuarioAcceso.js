'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class UsuariosAccesos extends Model {

    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (userInstance) => {
          if (userInstance.dirty.contrasena) {
            userInstance.contrasena = await Hash.make(userInstance.contrasena)
          }
        })
      }

    static get createdAtColumn () { return null; } 
    static get updatedAtColumn () { return null; }
    static get primaryKey () { return 'id_usuario_acceso';}


}

module.exports = UsuariosAccesos
