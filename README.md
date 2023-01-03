# React Portals Example
We can use portals to address stacking issues encountered from displayed components rendered on the DOM. 

There are a few things we will need to do and this is:
- Create a new div at the root of the react project (index.html)
- It must have the same id as the modal
- import { createPortal} from ‘react-dom’;
- Wrap the function for the modal or component with createPortal
- It takes two parameters (component, document.getElementId(‘modal-root’)
- This must match what is in the index.html file
- Important to note that the component stil exists where it was in the React tree

The  use of the portal allows to address the stacking of contexts that may be related to CSS
Inspect the dev console to ensure the display is as expected

Feel free to pull down the code from here and then enter the following in the terminal:
- npm install 
- npm start
- In the new tab that opens up when the project is running inspect the page (developer console)

- We will see that the layout of the modal is independent of the main root of the project

![react-portal-dev-console-elements](https://user-images.githubusercontent.com/5911897/210295315-7b1b9b39-063f-4346-a0e9-466ab3cd94e7.PNG)
