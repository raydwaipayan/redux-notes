const express = require('express')
const cors = require('cors')
const graphqlHTTP=require('express-graphql')
const gql=require('graphql-tag')
const { buildASTSchema} = require('graphql')

const ARTICLES = [
    {
        id: "12",
        title:"text"
    }
]
const schema = buildASTSchema(gql`
    type Query{
        articles: [Article]
    }
    type Article{
        id: String
        title: String
    }
    type Mutation{
        submitArticle(input: ArticleInput!): Article
    }
    input ArticleInput{
        id: String!
        title: String!
    }
`)

const root={
    articles: ()=>ARTICLES,
    submitArticle: ({input: { id, title }})=>{
        const article = { id, title }
        ARTICLES.push(article)
        return (article)
    }
}

const app=express()
app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql: true
}))

const port=process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
