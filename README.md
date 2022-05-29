![facenforce](public/images/icon.png)
# FACENFORCE

## To run the application in local environment -
### Pre-requisites :
Git and Node.js should be installed in your system .

### Steps to run the application :
1. Open CLI ( terminal , powershell or any other ).
2. Clone the github repo by using the command -
```
git clone https://github.com/codemukul/facenforce.git
```
3. After the repo is cloned , go inside the directory facenforce by using the command 
```
cd facenforce
```
4. Now  install the node packages by using the command-
```
npm i
```
5. Now start the server by using the command-
```
npm start
```
or
```
node index.js
```
6. Application will start at the port 8080 in your local host - go to https://127.0.0.1:8080 (default)

## What is FACENFORCE ?
Facenforce is my project as part of Microsoft Engage 2022 Mentorship Program , which is based on the application of Face-recognition.

## Why FACENFORCE ?
I saw many people who were infected with Covid-19 and also doesn't obeyed the home-quarantine properly . They go to the public places and spread the disease further .
But the problem is in their survelliance . It is practically not possible to detect all the infected people from a huge crowd of people specially in population dense areas like in metros .
The spread of infection can be controlled by proper test and quarantine .

So we can take the help of AI . We can setup the devices to periodically capture the image / cctv cameras to live-detect the in the crowded areas , places at more risk . 
" FACENFORCE " is the small scale (only image ) prototype of the solution .

Facenforce can help . The person in home-quarantine can be registered in the application . And then we can check if the person is in the public-places or not. We can take the images of the people in the public areas and then the application will recognize all the people who are in quarantine .

This will help contol the spread of the disease in the situations of pandemic / epidemic .

## The ideas
### (only first is implemented in the prototype yet )
1. People can be scanned in the public places and crowd from the database of all the people in quarantine .
2. People can be asked to occasionally take their selfies to prove they are at their home . Location data and other factors can also be taken in consideration .
3. Their social-media posts with profile-photos and updates can also help .
4. Neighbours and other people can also report ( this can also be incentivized ).
5. Detect the symptoms using the AI for improvement or worsening .
