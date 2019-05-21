import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import { TextField } from "@material-ui/core";
import spacing from "@material-ui/core/styles/spacing";
import Button from '@material-ui/core/Button';
import submitArticle from "../graphql/modify";

const mapDispatchToProps = dispatch =>{
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component{
    constructor()
    {
        super();
        this.state={
            title:"",
        };
    }
    handleChange= event =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit= event =>{
        event.preventDefault();
        const { title } = this.state;
        const id=uuidv1();
        this.props.addArticle({title,id});
        this.setState({title: ""});
        submitArticle(id,title);
    }
    render(){
        const { title } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="title"
                    type="text"
                    value={title}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                    style={{
                        marginLeft: spacing.unit,
                        marginRight: spacing.unit
                    }}
                />
                <Button 
                    variant="contained"
                    color="primary"
                    styles={{margin: spacing.unit}}
                    type="submit"
                    >
                    SAVE
                </Button>
            </form>
        );
    }
}

const Form= connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;