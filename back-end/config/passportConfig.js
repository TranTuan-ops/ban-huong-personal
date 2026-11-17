import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

const isConfigured = (value) =>
  typeof value === "string" &&
  value.trim() !== "" &&
  !value.trim().toLowerCase().startsWith("your_");

export const googleClientIdConfigured = isConfigured(
  process.env.GOOGLE_CLIENT_ID
);
export const googleOAuthConfigured =
  googleClientIdConfigured &&
  isConfigured(process.env.GOOGLE_CLIENT_SECRET) &&
  isConfigured(process.env.GOOGLE_CALLBACK_URL);

if (googleOAuthConfigured) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ where: { googleId: profile.id } });

          if (!user) {
            user = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
              isNewUser: true,
            });
          }

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
}

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

export default passport;
