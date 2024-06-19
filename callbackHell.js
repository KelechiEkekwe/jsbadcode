function authenticateUser(username, password, callback) {
    database.query('SELECT * FROM users WHERE username = ?', [username], function (err, user) {
        if (err) {
            callback(err);
            return;
        }

        if (user.password === password) {
            tokenService.createToken(user.id, function (err, token) {
                if (err) {
                    callback(err);
                    return;
                }

                emailService.sendLoginNotification(user.email, function (err) {
                    if (err) {
                        callback(err);
                        return;
                    }

                    callback(null, token);
                });
            });
        } else {
            callback('Invalid password');
        }
    });
}

authenticateUser('user1', 'password123', function (err, token) {
    if (err) {
        console.log("Authentication failed:", err);
    } else {
        console.log("Authentication successful, token:", token);
    }
});
