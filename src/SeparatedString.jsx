import React from 'react'
import { useLocation } from 'react-router-dom'

function SeparatedString() {
    const location=useLocation();
    const InputString=location.state?.InputString || ''
    const separatedVowels=(str)=>{
        return str.replace(/[^aeiouAEIOU]/g,'');
    }
    const SeparatedString=separatedVowels(InputString)
  return (
    <div className='main1'>
       <div><b>Original String:</b><q>{InputString}</q></div>
       <div><b>Vowels from Given String:</b><q>{SeparatedString}</q></div>
    </div>
    
  )
}

export default SeparatedString