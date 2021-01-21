
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id_user: null,
          name_user: 'Guilherme',
          lastname_user: 'Castelo',
          username_user: 'castelogui',
          email_user: 'guilherme@gmail.com',
          dataNasc_user: '1999-09-19',
          on_user: 'Sobre o usuário...',
          created_at_user: null,
          password_user: 'castelo1234'
        },
        {
          id_user: null,
          name_user: 'Beatriz',
          lastname_user: 'Castelo',
          username_user: 'biacastelo',
          email_user: 'beatriz@gmail.com',
          dataNasc_user: '2001-09-11',
          on_user: 'Sobre o usuário...',
          created_at_user: null,
          password_user: 'bia1234'
        },
        {
          id_user: null,
          name_user: 'Sabrina',
          lastname_user: 'Ferreira',
          username_user: 'binafer',
          email_user: 'sabrina@gmail.com',
          dataNasc_user: '2000-02-26',
          on_user: 'Sobre o usuário...',
          created_at_user: null,
          password_user: 'sabrina1234'
        }
      ]);
    });
};
