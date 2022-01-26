const graphql = require('graphql')
const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLInputObjectType
} = graphql

const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
    })
})

const InputUpdateArticleType = new GraphQLInputObjectType({
    name: 'UpdateArticle',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
    })
})

const InputNewArticleType = new GraphQLInputObjectType({
    name: 'NewArticle',
    fields: () => ({
        title: { type: GraphQLString },
        content: { type: GraphQLString },
    })
})
module.exports = {
    ArticleType,
    InputUpdateArticleType,
    InputNewArticleType
};