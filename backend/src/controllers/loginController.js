const connection = require("../database/conection");

module.exports = {
  async login(request, response) {
    const { username, password } = await request.body;

    const user = await connection("user")
      .where("username_user", username)
      .select("id_user", "name_user", "username_user", "password_user")
      .first();
    if (!user) {
      const err = "Username invalid";
      return response.status(400).json({err});
    }
    if (user.password_user !== password) {
      const err = "Password invalid...";
      return response.status(400).json({err});
    }

    const message = "Login sussefull!";
    return response.json([message, user]);
  },
};
