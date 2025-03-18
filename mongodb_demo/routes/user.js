const express = require('express');
const router = express.Router();
const { handleAllUsers,
    getUserById,
    handleUserUpdateById, handleUserDeleteById, handleCreateUser } = require("../controllers/user.js")

// router.get('/', async (req, res) => {
//     const users = await User.find({});

//     const html = `
// <table border="1" cellspacing="0" cellpadding="5">
//     <tr>
//         <td>Username</td>
//         <td>Email</td>
//     </tr>
//     ${users.map(user => `
//     <tr>
//         <td>${user.first_name}</td>
//         <td>${user.email}</td>
//     </tr>`).join('')}
// </table>
// `;

//     return res.send(html);
// });

router.route('/').get(handleAllUsers).post(handleCreateUser);
router.route('/:id').get(getUserById).patch(handleUserUpdateById).delete(handleUserDeleteById);

module.exports = router;