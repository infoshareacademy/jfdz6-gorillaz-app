import React from 'react'

class Message extends React.Component {

  sendMail(event){
    event.preventDefault()

    fetch(
      'http://localhost:6006/users/Piotrek'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'piotr.m.kramarz@gmail.com'
        })
      }
    ).then(
      console.log
    )

  }

  // constructor(props){
  //   super(props)
  // }

  render (){
    return (
      <form>
        <input type="text" name="alamakota" />
        <input type="submit" value="Wyślij" onClick={this.sendMail} />
      </form>
    )
  }

}

export default Message