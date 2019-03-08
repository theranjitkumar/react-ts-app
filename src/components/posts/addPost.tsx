import React, { Component } from 'react';

export default class AddPost extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Add Posts:',
            post: {
                title: 'Test Title',
                body: 'Test body......'
            }
        }
        this.addPost = this.addPost.bind(this);
    };

    addPost() {
        console.log('post added');
    }

    render() {

        return (

            <section>
                <h3> {this.state.title}  </h3>
                <div>
                    <form>
                        <div>
                            <label htmlFor="">Title</label> <br />
                            <input type="text" name="title" id="title" />
                        </div>
                        <div>
                            <label htmlFor="">Body</label> <br />
                            <input type="text" name="body" id="body" />
                        </div>
                        <input type="button" value="submit" onClick={this.addPost} />
                    </form>
                </div>
            </section>


        )

    }
}