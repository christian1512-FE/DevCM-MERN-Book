const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
        return user
      }
      throw new AuthenticationError('Must be logged in')
    },

  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new AuthenticationError('Invalid username & password')
      }
      const correctPassword = await user.isCorrectPassword({ password })
      if (!correctPassword) {
        throw new AuthenticationError('Invalid username & password')
      }
      const token = signToken(user)
      return{user, token}
    },

    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)
      return { token, user }

    },

    saveBook: async (parent, { bookData }) => {

    },
    removeBook: async (parent, { bookId }) => {

    },
  },
};

module.exports = resolvers;
