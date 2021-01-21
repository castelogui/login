const connection = require('../database/conection');

module.exports = {
  async oneUser(request, response){
    const { id_user } = await request.params;

    const user = await connection('user')
    .select([
      'name_user',
      'lastname_user',
      'username_user',
      'email_user',
      'dataNasc_user',
      'on_user'
    ]).where('id_user', id_user)

    return response.json(user)
  }
}