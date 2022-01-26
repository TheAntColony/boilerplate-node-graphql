const graphql = require('graphql');
const { ArticleType } = require('./article');
const {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} = graphql

const Articles = {
    type: GraphQLList(ArticleType),
    resolve (parentValue, args, context) {
        return context.db.Article.findAll({});
    }
};
const Article = {
    type: ArticleType,
    args: {
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
    resolve (parentValue, args, context) {
        return context.db.Article.findOne({
            where: {
                title: args.title
            },
        });
    }
};
module.exports = {
    Articles,
    Article
}