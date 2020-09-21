import React, { Component } from 'react'
import {Student, Lecturer} from './Class'
export default class componentName extends Component {
    componentDidMount(){
        var st = new Student();
        st.setInfo('Dung', 21)
        st.showInfo()
        st.Test()
        var lt = new Lecturer();
        lt.showInfo()
    }
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}