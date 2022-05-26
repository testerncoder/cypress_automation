const tokenRequestBody = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:xtk:session">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:Logon>
         <urn:sessiontoken></urn:sessiontoken>
         <urn:strLogin>sonali</urn:strLogin>
         <urn:strPassword>sonali</urn:strPassword>
         <urn:elemParameters>
            <!--You may enter ANY elements at this point-->
         </urn:elemParameters>
      </urn:Logon>
   </soapenv:Body>
</soapenv:Envelope>`

export default tokenRequestBody
