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

    componentWillMount() {
        this.getPosts();
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json().then(resData => {               
                this.setState({ posts: resData });
                console.log(this.state.posts);
            }))
            .catch(err => console.error(err))
    }
    
    render() {

        return (

            <section>

                <hr />
                <AddPost />
                <hr />
                <h3> {this.state.title}  </h3>
                <div>
                    {
                        this.state.posts.map((post:any) =>
                            <div key={post.id}>
                                <p> <strong> {post.title} </strong> </p>
                                <p> {post.body} </p>
                            </div>
                        )

                    }
                </div>
            </section>

        )

    }
}