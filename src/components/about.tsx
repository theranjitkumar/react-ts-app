import React, { Component } from 'react';

export default class About extends Component {
    constructor(props: any){
        super(props);
        this.state = {
            title: 'Home'
        }
    };

    render() {

        return (

            <section>
                <h3> {'this.state.title'}  </h3>
            </section>


        )

    }
}