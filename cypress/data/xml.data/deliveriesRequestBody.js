const xmlBody = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:xtk:queryDef">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ExecuteQuery>
         <urn:sessiontoken>${Cypress.env('token')}</urn:sessiontoken>
         <urn:entity>
           <queryDef schema="nms:delivery" operation="select">
  <!-- fields to retrieve -->
 <select>
    <node expr="@label"/>
    <node expr="@deliveryCode"/>
    <node expr="@nature"/>
    <node expr="[typology/@label]"/>
    <node expr="[execution/@retryPeriod]"/>
    <node expr="[execution/@maxRetry]"/>
    <node expr="[validation/@useContentValidation]"/>
    <node expr="[validation/@useTargetValidation]"/>
    <node expr="[validation/@useBudgetValidation]"/>
  </select>
  <!-- condition on email -->
  <where>
    <condition expr="[operation/@internalName]= 'AB_Test_Campaign'"/>
    <!-- OP510 -->
  </where>
</queryDef>
         </urn:entity>
      </urn:ExecuteQuery>
   </soapenv:Body>
</soapenv:Envelope>`

export default xmlBody
