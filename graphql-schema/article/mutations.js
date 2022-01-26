const {
    ArticleType,
    InputNewArticleType,
    InputUpdateArticleType
} = require('./article');

const AddArticle = {
    type: ArticleType,
    args: {
        article: {
            type: InputNewArticleType
          },
      },
    resolve (parentValue, args, context) {
        return context.db.Article.create({
            title,
            content
          } = args.article);
    }
};
const UpdateArticle = {
    type: ArticleType,
    args: {
        article: {
            type: InputUpdateArticleType
          },
      },
    resolve (parentValue, args, context) {
        return context.db.Article.update({
           id,
           title,
           content
          } = args.article);
    }
};
module.exports = {
    AddArticle,
    UpdateArticle
}