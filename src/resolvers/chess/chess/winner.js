/**
 * Winner user
 * @return {Object} User
 */
export default async (chessGame, args, { models }) => {
  return models.User.findById(chessGame.winnerID).select('-email');
};
