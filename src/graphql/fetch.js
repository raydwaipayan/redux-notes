import { createApolloFetch } from 'apollo-fetch'

export const getState= new Promise(function(resolve,reject){
    const fetch=createApolloFetch({
      uri: 'http://localhost:4000/graphql',
    })
    fetch({
        query:`{
            articles{
                id
                title
            }
        }`
    }).then(res=> resolve(res.data.articles))
    .catch({});
})
