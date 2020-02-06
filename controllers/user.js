const User = require('../models/user');

const userInsert = async (req, res, next) => {
    const user = new User('testUser', 'testUser@test.com');
    const result = await user.save();
    res.status(200).send(result.ops);
};


const userFetch = async (req, res, next) => {
    const { id } = req.params;
    const result = await User.fetchUserById(id);
    res.status(200).send(result);
};

module.exports = {
    userInsert,
    userFetch
}