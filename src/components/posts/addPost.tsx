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
        var title = document.getElementById('title');
        var body = document.getElementById('title');
        var data: any = {
            // title: title !== null || undefined ? title : 'Test Title',
            // body: body !== null || undefined ? body : 'Test body ....'
            title: 'Test Title',
            body: 'Test body ....'
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(response => console.log(response))
            .catch(err => console.error('Error:', err));
    }

    render() {

        return (

            <section>
                <h4> {this.state.title}  </h4>
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