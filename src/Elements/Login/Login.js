import React, { useState } from 'react'
import axios from 'axios'

function Login() {

  // Storage
  const data = { Username: "", Gmail: "", link: "", Money: "", Name: "", Server: "", Text: "" }

  // useState
  const [detail, setDetail] = useState(data)

  // Input Form
  const handle = (e) => {
    setDetail({ ...detail, [e.target.name]: [e.target.value] })
  }

  // Submit Button
  const handlesubmit = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", detail)
      .then((response) => {
        console.log(response.data)
      })
  }

  return (
    <>
      <div className="margin-f-div">

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" name="Username" value={detail.Username} onChange={handle} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <input type="gmail" name="Gmail" value={detail.Gmail} onChange={handle} className="form-control" placeholder="Enter Your Gmail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">@gmail.com</span>
        </div>

        <div className="mb-3">
          <label for="basic-url" className="form-label">Your vanity URL</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" name="link" value={detail.link} onChange={handle} className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
          </div>
          <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="number" name="Money" value={detail.Money} onChange={handle} className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input type="text" name="Name" value={detail.Name} onChange={handle} className="form-control" placeholder="Full Name" aria-label="Username" />
          <span className="input-group-text">@</span>
          <input type="text" name="Server" value={detail.Server} onChange={handle} className="form-control" placeholder="Server" aria-label="Server" />
        </div>

        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea name="Text" value={detail.Text} onChange={handle} className="form-control" aria-label="With textarea"></textarea>
        </div>

        <div className="input-button">
          <button onClick={handlesubmit} >Submit Your Form</button>
        </div>

      </div>

    </>
  )
}

export default Login