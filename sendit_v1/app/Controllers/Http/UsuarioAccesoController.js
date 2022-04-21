'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UsuarioAcceso = use ('App/Models/UsuarioAcceso');


/**
 * Resourceful controller for interacting with usuarioaccesos
 */
class UsuarioAccesoController {

  async login ({request, auth}){
    const {email, contrasena} = request.all();
    const token = await auth.attempt(email, contrasena);
    return token;
  }




  /**
   * Show a list of all usuarioaccesos.
   * GET usuarioaccesos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new usuarioacceso.
   * GET usuarioaccesos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new usuarioacceso.
   * POST usuarioaccesos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const {id_usuario, email, contrasena, id_departamento, id_cargo, id_estado_acceso} = request.all();
    console.log(request.all());
    const user = await UsuarioAcceso.create({
      id_usuario,
      email,
      contrasena,
      id_departamento,
      id_cargo,
      id_estado_acceso
    });

    return user;
  }

  /**
   * Display a single usuarioacceso.
   * GET usuarioaccesos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing usuarioacceso.
   * GET usuarioaccesos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update usuarioacceso details.
   * PUT or PATCH usuarioaccesos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a usuarioacceso with id.
   * DELETE usuarioaccesos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UsuarioAccesoController
