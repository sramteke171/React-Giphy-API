
![GA-Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

  

# React Giphy search  

Create a React app that lets a user search the Giphy API for gifs.

- [Solution App Link](https://pages.git.generalassemb.ly/marcwright-rem/js-axios-ajax-giphy-lab/)
- [Giphy Developer Portal](https://developers.giphy.com/)
- [Giphy Search Endpoint](https://developers.giphy.com/docs/api/endpoint#search)



![](https://i.imgur.com/sKjOsR3.png)


<br>

## Getting Started - API Key

Giphy requires an API key. Let's get one.

- Goto to the [Giphy Developer Portal](https://developers.giphy.com/) and sign up/login. Once you're logged in, click on the "Create an App" button in the top right.

![](https://i.imgur.com/qPkOJor.png)

- Fill in App details like this screenshot.

![](https://i.imgur.com/YBrbg9I.png)

- You should now have an API key for your app.

![](https://i.imgur.com/n16AN89.png)

- Select API

![](https://i.imgur.com/DyJFgdw.png)


<br>

## Requirements
- Create a new app in your homework folder using `create-react-app`.
- Your app should have a search bar and a button. 
- When the user presses "Enter" or click the button, the search should be executed and display the results of the search.

<br>

## Bonus
- Style it somehow. Maybe just add your style in `App.css` or Google "CSS with React" and try a couple approaches and find an approach you like. It should look nice. :wink:
- Add a button that will return a single, random gif. Here is the [Random Gif endpoint Documentation](https://developers.giphy.com/docs/api/endpoint#random).


![](https://i.imgur.com/MThUWe8.png)
 

<br>


## Hungry for More?  

* Take a look at [**Semantic UI React**]([https://react.semantic-ui.com/](https://react.semantic-ui.com/)) and give a try for styling:

<details>

<summary>Click here to see steps to install Semantic UI React</summary>

  

1. `npm install semantic-ui-css`

2. `npm install semantic-ui-react`

3. Inside of `index.js`, above your `index.css`, `import 'semantic-ui-css/semantic.min.css';`

</details>

<br />

  
<br>

## Hungry for WAY More?

  

1. Create dummy "login/logout" functionality:

* Put some text "Log in" on the top right that opens a "Login" modal.
>don't know what a modal is? check it out [here]([https://react.semantic-ui.com/modules/modal/](https://react.semantic-ui.com/modules/modal/))

* After the user "logs in" (a dummy login...just store their username in state... and maybe a set a boolean `loggedIn` in state), the modal should disappear and the top right should now show "Logged in as [username]" and a link to "log out." * Clicking "log out" should change state appropriately, and cause "Log in" to be displayed there.
