module.exports = {
    isLoggedIn(request, response, next) {
        if (request.isAuthenticated()) {
            return next();
        }
        return response.redirect('/login');
    },
    isNotLoggedIn(request, response, next) {
        if (!request.isAuthenticated()) {
            return next();
        }
        return response.redirect('/classes');
    }
}