import  gql from 'graphql-tag'
import client from '../apollo'

function submitArticle(id,title){
    const SUBMIT_ARTICLE=gql`
        mutation SubmitArticle($input: ArticleInput!){
            submitArticle(input: $input){
                id
                title
            }
        }
    `;
    //begin apollo process
    const input={id,title};
    client.mutate({
        variables: { input },
        mutation: SUBMIT_ARTICLE,
    });
}

export default submitArticle;