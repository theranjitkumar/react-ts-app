import React, { Component } from 'react';
import AddPost from './addPost';

export default class Posts extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Posts:',
            posts: []
        }
    };
    componentWillMount(){
        console.log('componentWillMount called');
        
        this.getPosts();
    }
    getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({posts: res})
        }).catch(err => console.error(err))
    }
    render() {

        return (

            <section>

                <hr />
                <AddPost />
                <hr />
                <h3> {this.state.title}  </h3>
                <div>
                    
                </div>
            </section>

        )

    }
}