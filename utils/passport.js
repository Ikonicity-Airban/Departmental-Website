import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user.model.js';

// Configure passport
passport.use(
    new LocalStrategy(function (email, password, done) {
        // Lookup user in database
        console.log('hi')
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.validPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

export default passport