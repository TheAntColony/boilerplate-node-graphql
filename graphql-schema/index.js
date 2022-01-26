const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { Article, Articles } = require('./article/queries');
const { AddArticle, UpdateArticle } = require('./article/mutations');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            Article,
            Articles,
        }),
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            AddArticle,
            UpdateArticle,
        }),
    }),
});