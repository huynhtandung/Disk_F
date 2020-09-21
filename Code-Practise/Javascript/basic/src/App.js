/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
/* eslint-disable eqeqeq */
import React, { Component } from 'react'

/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

export default class componentName extends Component {

    componentDidMount() {
        //Add Event Listener
        var AEL = document.getElementById("addEventListener")
        AEL.addEventListener('click', function () {
            alert("Click Add Event Listener")
        })

        AEL.addEventListener('mouseover',  () => {
            this.mouseover()
        })
        AEL.removeEventListener('mouseover', () => {
            this.mouseover()
        })
        
        AEL.addEventListener('mouseout', function () {
            alert("Mouseout Add Event Listener")
        })
        AEL.removeEventListener('mouseover', function () {
        })

        //add EventListener cho nhieu element
        var ob = document.getElementsByClassName('btn_click')
        for (var i = 0; i < ob.length; i++) {
            ob[i].onclick = function () {
                console.log('onclick')
            }
        }
        
        //ham onload luon chay cuoi cung
        window.onload = () => {
            console.log('Da load xong moi thu')
        }

        //tao timer online
        this.timerOnline()
        
    }

    timerOnline = () =>{
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        document.getElementById('timer').innerHTML = hour + ' : ' + minute + ' : ' + seconds

        setTimeout(() => {
            this.timerOnline()
        }, 1000);
    }

    mouseover = () =>{
        console.log('Mouse Over')
    }

    handleConfirm = () => {
        var res = confirm('Are you sure?')
        console.log(res)
    }

    handlePrompt = () => {
        var res = prompt('What your name?')
        switch (res % 2) {
            case 1: {
                console.log(res, " is odd")
                break;
            }
            case 0: {
                console.log(res, " is even")
                break;
            }
            case 3:
            case 4:
            case 5:
                //chung cho ca 3 cai
                break;
            default: {
                console.log("Incorrect Format")
            }
        }
    }

    /* 
        setTimeout and setInterval
        announce = () = >{
            alert('Hello')
        }
        var timeout = setTimeout(announce, 3000)
        clearTimeout(timeout)

        var interval = setInterval(announce, 3000)
        clearInterval(interval)
    */
    validate = () => {

        // Lấy giá trị
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var re_password = document.getElementById("re-password").value;

        // Kiểm tra các giá trị
        if (username == "") {
            alert("Bạn chưa nhập tên đăng nhập");
            return false;
        }

        if (password == "") {
            alert("Bạn chưa nhập mật khẩu");
            return false;
        }


        if (password != re_password) {
            alert("Mật khẩu nhập lại không đúng");
            return false;
        }

        return true;
    }

    changeInput = (type) =>{
        var elemnt = document.getElementById('input');
        if(type === 'type')
            elemnt.type = 'button'
        else if(type === 'color')
            elemnt.style.backgroundColor = 'red'
        else{
            var newElement = document.createElement('p')
            newElement.innerHTML = 'The input above';
            // hoac 
            /*var textNode = document.createTextNode('The input above')
            newElement.appendChild(textNode)*/

            //insert vao cuoi the cha
            var father = document.getElementById('father');
            father.appendChild(newElement)
            //Insert vao vi tri muon father.insertBefore(nodeMuonInsert, inserBefore?)

            /*appendChild
            insertBefore
            removeChild
            replaceChid*/
        }
    }

    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-danger" id="addEventListener">Add Event Listener</button>
                <button type="button" className="btn btn-danger" onClick={() => this.handleConfirm()}>Confirm</button>
                <button type="button" className="btn btn-danger" onClick={() => this.handlePrompt()}>Prompt</button>
                {console.log(2 == '2'), console.log(2 === '2')}
                {console.log(10 || 'Ve trai khac NULL'), console.log(null || 'Ve trai la NULL')}

                <div className="btn btn-default btn_click">Div 1</div>
                <div className="btn btn-default btn_click">Div 2</div>
                <div className="btn btn-default btn_click">Div 3</div>

                <form>
                    Username: <input type="text" name="username" id="username" /> <br />
                    Password: <input type="text"  name="password" id="password" /> <br />
                    Re Password: <input type="text"  name="re-password" id="re-password" /> <br />
                    <input type="submit" value="Register" onClick={()=>this.validate()} />
                </form>

                <div id='father'>
                    <input type="text" id="input" className="form-control" />
                </div>
                
                <button type="button" onClick={()=>this.changeInput('type')} className="btn btn-primary">Change Type</button>
                <button type="button" onClick={()=>this.changeInput('color')} className="btn btn-primary">Change Color</button>
                <button type="button" onClick={()=>this.changeInput('child')} className="btn btn-primary">Add Child</button>

                <br />
                <div>Timer online</div>
                <div id='timer'></div>

                <br />
                <div>Reload Page</div>
                
                <button type="button" onClick={()=>window.location.reload()} className="btn btn-primary">Click to reload</button>
                
                
            </div>
        )
    }
}
