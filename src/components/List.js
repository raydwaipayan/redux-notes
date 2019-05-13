import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const mapStateToProps = state =>{
    return {articles: state.articles };
};

const ConnectecList= ( {articles} ) =>(
    <List>
        {articles.map(article => (
            <ListItem key={article.id} alignItems="flex-start">
                <ListItemText>
                    <Typography variant="h6">
                       {article.title}
                    </Typography>
                </ListItemText>
            </ListItem>
        ))}
    </List>
);

const list = connect(mapStateToProps)(ConnectecList);

export default list;