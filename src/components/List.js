import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { deleteArticle } from "../actions/index.js";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import spacing from "@material-ui/core/styles/spacing";

const mapStateToProps = state =>{
    return {articles: state.articles };
};
const mapDispatchToProps = dispatch =>{
    return{
        deleteArticle: article => dispatch(deleteArticle(article))
    }
};

class ConnectecList extends React.Component{
    handleDelete=article=> {
        this.props.deleteArticle(article);
    }
    render(){
        console.log(this.props.articles);
        return(
        <List>
        {this.props.articles.map(article => (
            <ListItem key={article.id} alignItems="flex-start">
                <ListItemText>
                    <Typography variant="h6">
                       {article.title}
                    </Typography>
                </ListItemText>
                <Button 
                    variant="contained"
                    color="secondary"
                    styles={{margin: spacing.unit}}
                    onClick={()=>this.handleDelete(article)}
                    >
                    DELETE
                </Button>
            </ListItem>
        ))}
        </List>
    )};
}

const list = connect(mapStateToProps,mapDispatchToProps)(ConnectecList);

export default list;