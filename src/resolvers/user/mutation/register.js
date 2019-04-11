import { createJwtToken } from '../utils';

/**
 * Create user account
 * @param {String} username
 * @param {String} email
 * @param {String} password
 * @param {String} firstName
 * @param {String} lastName
 * @return {String} jwtToken
 */
export default async (
  parent,
  { username, email, password, firstName, lastName },
  { models, secret }
) => {
  const user = await models.User.create({
    username,
    email,
    password,
    firstName,
    lastName
  });

  return { token: createJwtToken(user, secret, '7d') };
};
