import React, { Component } from 'react';

export default class Home extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            title: 'Home'
        }
    };

    render() {

        return (

            <section>
                <h3> {this.state.title}  </h3>
            </section>


        )

    }
}
