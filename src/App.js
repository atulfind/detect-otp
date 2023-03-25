import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [otp, setOtp] = useState("")
  
  useEffect(() => {

    if(window.navigator.mozSms) {
      window.navigator.mozSms.addEventListener('received', function(event) {
        // Extract the message body
        const messageBody = event.message.body;
  
        // Look for a 6-digit number in the message body
        const otpRegex = /\b\d{6}\b/;
        const match = messageBody.match(otpRegex);
  
        if (match) {
          // OTP detected
          const otp = match[0];
          console.log(`OTP detected: ${otp}`);
          setOtp(otp)
        }
      });
    }

    // Listen for incoming SMS messages
    
  }, [])
  

  return (
    <div className="App">
      otp
      {
        otp && <div>{otp}</div>
      }
    </div>
  );
}

export default App;
