import { useState } from "react"
import axios from 'axios'
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"



const Register = () => {

  const navigate = useNavigate()
  const [data, setData] = useState ({
    fname: '',
    lname: '',
    age: '',
    email: '',
    tel: '',
    postal: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const {fname, lname, age, email, tel, postal, password} = data
    try {
      const {data} = await axios.post('/Register', {
        fname, lname, age, email, tel, postal, password
      })
      if(data.error) {
        toast.error(data.error)
      }else {
        setData({})
        toast.success('Compte crée avec succé')
        navigate('/Home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={registerUser}>
      <label>First Name</label>
      <input type="text" placeholder='Your first name' autoComplete="given-name" value={data.fname} onChange={(e) => setData({...data, fname: e.target.value})} />

      <label>Last Name</label>
      <input type="text" placeholder='Your last name' autoComplete="family-name" value={data.lname} onChange={(e) => setData({...data, lname: e.target.value})} />

      <label>Age</label>
      <input type="date" autoComplete="bday" value={data.age} onChange={(e) => setData({...data, age: e.target.value})} />

      <label>Email</label>
      <input type="email" placeholder='Your email' autoComplete="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

      <label>Phone</label>
      <input type="tel" placeholder='Your phone number' autoComplete="tel" value={data.tel} onChange={(e) => setData({...data, tel: e.target.value})} />

      
      <label>Adresse/Zip</label>
      <input type="text" placeholder='Your postal code' autoComplete="postal-code" value={data.postal}  onChange={(e) => setData({...data, postal: e.target.value})} />

      <label>Password</label>
      <input type="password" placeholder='Your password'autoComplete="new-password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
      <label>Password/Verification</label>
      <input type="password" placeholder='Password verification' autoComplete="new-password" />
      
      <button type="submit">Submit</button>
    </form>
  )
}

export default Register