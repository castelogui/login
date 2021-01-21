const connection = require("../database/conection");

module.exports = {
  async login(request, response) {
    const { username, password } = await request.params;

    const user = await connection("user")
      .where("username_user", username)
      .select("id_user", "name_user", "username_user", "password_user")
      .first();
    if (!user) {
      const message = "Username invalid";
      return response.status(400).json([message]);
    }
    if (user.password_user !== password) {
      const message = "Password invalid...";
      return response.status(400).json([message]);
    }

    const message = "Login sussefull!";
    return response.json([message, user]);
  },
};
