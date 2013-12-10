# CORS Proxy

CORS proxy for serving images through XHR. Written in node.js


#### Setup:
Make sure you have node.js and npm installed.  
Run  
`npm install`  
to install dependencies

#### Usage:  
###### Start Server:   
`node proxy.js`  
###### Request Format:  

`http://proxy:8000/[image_url]`


###### Added Response Headers:  
Access-Control-Allow-Origin: *  
Access-Control-Allow-Credentials: true  
