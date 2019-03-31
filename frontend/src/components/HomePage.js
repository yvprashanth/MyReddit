import React, { Component } from "react";
import Category from './Category'
import { connect } from 'react-redux'
import {fetchGetCategories} from '../actions/categories'

class HomePage extends Component {
    componentDidMount(){
        if(this.props.fetchGetCategories){
            this.props.getCategories();
        }
    }

    render(){
        let categories = this.props.categories
        return (
            <div className="categories">
                {categories && categories.map((category, index)=> {
                    return (
                        <div key={index}>
                            <Category name={category.name} />
                            <br />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.category.categories,
    fetchCategories: !state.category.isFetch
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(fetchGetCategories())
})

HomePage.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)