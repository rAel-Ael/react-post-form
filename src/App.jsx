const APIURL = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';
import CheckBox from "./components/CheckBox";
import Form from "./components/Form";
import { useState } from "react";



function App() {
const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false 
  });
const handleSubmit = () => {
    fetch(APIURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) 
    })
  .then(response => response.json()) 
  .then(data => {
  
    console.log("Dati inviati", data);
    alert("Post creato");
  });
};
  
  
  
  return (
    <>
      <Form formData={formData} setFormData={setFormData}/>
      <CheckBox formData={formData} 
      setFormData={setFormData} 
      onSend={handleSubmit}/>
    </>


  )


  }

export default App; 