<p align="center">
  <img 
    src="https://user-images.githubusercontent.com/70600553/194888774-24842229-d864-456a-a019-3caafde4d04d.gif"
    width=1080
  />

  <br></br>
  
  <strong>
  This project was made to help a friend, it is a simulation of the problem that needed to be solved. When receiving multiple user reviews, how could we select one of them and show all the data without having to navigate to a new page? And besides, how could we move on to the next one or go back to the previous one in an easy and practical way?
  </strong>
  
  <br><br/>
  
  So, to simulate this problem I made a Json Object that returns information about the stars of the solar system. And I created buttons to represent them that open a Modal when clicked, in this Modal the complete information will be shown. Finally, using React's Context, along whit useState and Array Manipulation, it was possible to add functionality to move to the next data or go back to the previous one.
  
  <br/>
  
  When clicking on the button that opens the Modal, the index that belongs to the item inside the array is saved in a state. Within the Modal, information regarging the array item that has the same index saved in the state previously is displayed. To show the next or previous one, just go to the next or previous value of the saved index's state. Note: Conditionals were made to know when there is no previous or next item.
  
  <br><br/>

# 🚀🔥 Technologies Used
 - Typescript
 - React
 - Vite
 - TailwindCSS
 - Radix-UI

# 💻 How to install?
```
# Clone the repository
$ git clone https://github.com/KaiqueCampos/prev-next-modal-informations.git

# Enter the project directory
$ cd prev-next-modal-informations

# Install project dependencies

$ yarn install
# or
$ npm install

# Run the project
$ yarn dev
```

