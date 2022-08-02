 src
      ├── app.js			app entry point
      ├── /api			controller layer: api routes
      ├── /config			config settings, env variables
      ├── /services		service layer: business logic
      ├── /models			data access layer: database models	
      ├── /scripts		miscellaneous NPM scripts

Schema
worker ->
   id
   attachement
   adhar number (validation)
   photo
   gender
   phone
   name
   address
   age
   service type
   service area and pincode
   range of service(in km)
   visitingCharges
   bank details
   servicesIds:[]
  
 
 
   office details->
    id
    name
    address
    phone
    email
    TIN number
    open and close time
   
 
consumer-->
   name
   phone
   address
   gender
   id
  
 
service---->
   name
   description
