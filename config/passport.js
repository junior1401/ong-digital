var passport = require('passport');
var GoogleStrategy =  require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){

    passport.use(new GoogleStrategy({
        clientID: '213076885243-vicj525jsf54hp8rvpmk35tl8qmk2lkk.apps.googleusercontent.com',
        clientSecret: 'hQRdFGv0s1nkoG1lhFS8g9yF',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        scope: 'profile email'
    }, 
    function(accessToken, refreshToken, profile, done){
        console.log(profile);
        return done(null/* sem error */, profile);
    }

    ));

    passport.serializeUser(function(usuario, pronto){
        done(null, usuario._id);
    });


}
