const { User } = require('../../models');

module.exports = class AuthController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username}});

      res.json(user);
      
    } catch (error) {
      next(error);
    }
  }
}