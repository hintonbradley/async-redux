import React from 'react';
import Instruction from './InstructionDetail';

function Instructions() {
	return (
		<div className="instructions">
			<h1 className='header'>This is the Instructions page</h1>
            <h4 className='header'>
                <a target="_blank" href="https://jhb-redux.netlify.com/">Intro to Redux</a>
            </h4>
            < Instruction card="light" obj={[
                {type:'header',text:'Create React App and add React Router'},
                {type:'text',text:'Create a React application and create a router by following the instructions in the router-notes.txt file.'},
            ]} />

			< Instruction card="dark" obj={[
                {type:'header',text:'Dependencies'},
                {type:'text',text:'We install all the dependencies.'},
                {type:'image',text:'Redux Thunk',name:'installDependencies',classes:'img-lg center'},
                {type:'text',text:'Let\'s look at all the dependencies and see what each will do.'},
                {type:'image',text:'Redux Thunk',name:'reduxThunk',classes:'img-sm center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Boilerplate React-Redux set up'},
                {type:'text',text:'Set up the basic index.js boilerplate for typical React-Redux applications in the index.js file.'},
                {type:'image',text:'indexBoilerplate',name:'indexBoilerplate',classes:'img-sm center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Boilerplate App.js file'},
                {type:'text',text:'Create an App.js file in your components directory to display content of app.'},
                {type:'image',text:'App.js creation',name:'appjsCreation',classes:'img-md center'},
                {type:'text', classes: "last danger", text:'Checkpoint: Can\'t resolve \'./reducers\' in...'},
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Create Reducers'},
                {type:'text',text:'Add a folder called reducers to your /src folder and add an index.js file inside with reducers boilerplate code to get your app up and running.'},
                {type:'text',text:'Note: The method toBeReplaced is only there to prevent Redux from throwing an error. It will be replaced later.'},
                {type:'image',text:'Reducers boilerplate code',name:'reducersBoilerplate',classes:'img-sm center'},
                {type:'text', classes: "last success", text:'Checkpoint: OK'},
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Creating Components'},
                {type:'text',text:'Create a component that will display the data and add it to the App.js file. Then we can create an Action Creator to go fetch the data for this component.'},
                {type:'image',text:'Creating PostList component',name:'createPostList',classes:'img-sm center'},
                {type:'text',text:'We then add the Post List component to the main component (Home.js) to display it on our site.'},
                {type:'image',text:'Adding Post List',name:'postListAdd',classes:'img-md center'}
            ]} />

            < Instruction card="dark" obj={[
                {type:'header',text:'Data Loading'},
                {type:'text',text:'A step by step outline of how we load data into our React project with notes for specific steps.'},
                {type:'image',text:'Data Loading Outline',name:'dataLoadingOutline',classes:'img-lg center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Create Action Creators'},
                {type:'text',text:'Create an action creator in the newly created file src/actions/index.js to fetch data from the API.'},
                {type:'image',text:'Data Loading Outline',name:'createFetchPosts',classes:'img-xs center'},
                {type:'text',text:'Wire up the newly created Action Creator by importing the connect function (from react-redux) and the action creator (that you just created).'},
                {type:'text',text:'We also need to call the connect function.'},
                {type:'text',text:' - Note that the first argument to the connect method is the method you need to call to retrieve your data (usually mapStateToProps). Since we currently don\'t have access to a mapStateToProps method yet, we instead use "null" for our first argument (to prevent errors).'},
                {type:'text',text:' - Note that the second argument to the connect method is a collection of all your Action Creators - in this case it would be fetchPosts that you just imported.'},
                {type:'text',text:'Finally, we add a lifecycle method (componentDidMount) to fetch our data once the component is rendered.'},
                {type:'image',text:'Add Action Creator',name:'addActionCreator',classes:'img-sm center'},
                {type:'text', classes: "last success", text:'Checkpoint: OK'},
            ]} />

            < Instruction card='dark' obj={[
                {type:'header',text:'Why we use Middleware'},
                {type:'text',text:'1. In order to have an API call to retrieve data that needs to be displayed in a component, we need that call to be asynchronous - meaning we will have to wait in order to retrieve that data.'},
                {type:'text',text:'2. Basically, if we use "await" and "async" keywords, the Action Creator does not initially return a simple (or plain) object (an object that only has "type" and "paylod" properties). Instead, it returns a complex object with other methods and properties. This throws an error.'},
                {type:'image',text:'Async error',name:'acAsyncError',classes:'img-sm center'},
                {type:'image',text:'Fetch Posts issues',name:'fetchPostsIssues',classes:'img-md center'},
                {type:'text',text:'3. Therefore, if we need to retrieve data asynchronously from an API, we need to use Middleware in order to be able to retrieve data and return the simple object that Redux requires.'},
                {type:'text',text:'The image below shows where the Middleware steps are brought in within the Redux cycle.'},
                {type:'image',text:'cycle with middleware',name:'cycleWithMiddleware',classes:'img-lg center'},
                {type:'image',text:'What is middleware?',name:'middlewareExplanation',classes:'img-sm center'},
            ]} />

            < Instruction card='dark' obj={[
                {type:'header',text:'What Redux-Thunk does'},
                {type:'image',text:'Redux Thunk Process', name:'reduxThunkProcess1',classes:'img-md center'},
                {type:'image',text:'Redux Thunk Process', name:'reduxThunkProcess2',classes:'img-lg center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Hook up Middleware to the Redux Store'},
                {type:'text',text:'1. In the root index.js file we import thunk from redux-thunk'},
                {type:'text',text:'2. In the root index.js file we import a second function (applyMiddleware) from the redux library.'},
                {type:'text',text:'3. Since we need to use the applyMiddleware function to hook up our redux store, we need to add it to the store to be able to hook up redux-thunk.'},
                {type:'text',text:'4. When we call applyMiddleware when we create our store, we need to pass thunk as an argument.'},
                {type:'image',text:'Data Loading Outline',name:'addReduxThunk',classes:'img-lg center'},
                {type:'header',text:'Use Middleware in Action Creator'},
                {type:'text',text:'When using Redux-Thunk we are not returning any actions from the inner fuction. Instead we need to call the dispatch function to return an action (object) after we have received data from our API. '},
                {type:'text',text:'1. To use the dispatch function we call it using our payload (action object) as an argument.'},
                {type:'text',text:'2. In order to be sure we receive a response from our APi before we can add it to the dispatch payload (as response), we need to use the javascript async/await keywords.'},
                {type:'text',text:'Note: To clean up our function we can write it as an arrow function, and get rid of getState argument since we do not need it. We can also remove the return keyword and put the async dispatch line on the same line to immediately return that function.'},
                {type:'image',text:'Data Loading Outline',name:'middlewareDispatch',classes:'img-md center'},
            ]} />

            < Instruction card="dark" obj={[
                {type:'header',text:'Action Creators, Actions and Reducers and the roles they play'},
                {type:'image',text:'Action Creator to Reducer',name:'acToReducers',classes:'img-lg center'},
            ]} />  

            < Instruction card="light" obj={[
                {type:'header',text:'Creating a Reducer'},
                {type:'text',text:'In the "reducers" folder, create a new reducer (postsReducer.js) file and add code for a new reducer (see below) being sure that you return some value so it doesn\'t throw an error.'},
                {type:'image',text:'Creating a reducer',name:'createReducer',classes:'img-sm center'},
                {type:'text',text:'In the index.js file (in the reducers folder), import your new reducer and assign it to the combineReducers method. (Replace the fake reducer with your newly created reducer - see below)'},
                {type:'image',text:'Import your new reducer',name:'importPostsReducer',classes:'img-sm center'}
            ]} /> 

            < Instruction card="dark" obj={[
                {type:'header',text:'Reducers'},
                {type:'text',text:'1. If a javascript method (including reducers) doesn\'t return anything, javascript will automatically return "undefined". If a reducer returns undefined, Redux will automatically throw an error. (If the reducer returns anything else, it will not throw an error.'},
                {type:'image',text:'Rules of Reducers',name:'reducerRules',classes:'img-md center'},
                {type:'text',text:'2. What happens when your app is initialized, and your reducers are automatically called to initialize state...'},
                {type:'image',text:'Initializing reducers',name:'reducerInitialize',classes:'img-md center'},
                {type:'text',text:'...and then what happens each other time your reducers are called to modify state.'},
                {type:'image',text:'What happens each time after a reducer is called',name:'reducerCalls',classes:'img-sm center'},
                {type:'text',text:'3. Reducers should never have code that reaches outside of the function to grab code (aka: DOM manipulation, RESTful API calls, etc. The Reducer should ONLY use code that is provided in the arguments used when calling the Reducer, aka: previouse state, Action.payload'},
                {type:'image',text:'Pure reducers',name:'pureReducers',classes:'img-sm center'},
                {type:'text',text:'4. Never modify the previous state. In your Reducer object always return a new value that isn\'t the previous state or a modified version of it. (See below for good and bad ways to create new state.)'},
                {type:'image',text:'Bad and good methods in Reducers',name:'methodsInReducers',classes:'img-lg center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Reducer Syntax'},
                {type:'text',text:'1. When the app is first initialized in order for state (or the Reducer) to not be returned as "Undefined", this syntax will define state as null so an error won\' be thrown.'},
                {type:'text',text:'2. Instead of if, else statements, Reducers generally have switch statements instead. There is a case for each type of Action and additionally some functionality that will be run for each, returning the new state.'},
                {type:'text',text:'3. In switch statements, there should always be a "default" case, in case none of the other cases are hit. This will automatically return state instead of "undefined".'},
                {type:'image',text:'Reducer syntax',name:'reducerSyntax',classes:'img-sm center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Getting data to our component'},
                {type:'image',text:'Getting data in component',name:'dataInComponent',classes:'img-sm center'},
                {type:'text',text:'1. Any time we want to get some data From Redux into React, we always need to define the mapStateToProps method and pass it into the connect method  of your component. The mapStateToProps method will be called with the state from the Redux Store. If you look in the Reducers file, remember that we defined our posts in the React store as "posts", so we will use that name in our mapStateToProps method.'},
                {type:'image',text:'Defining our state',name:'definedPosts',classes:'img-sm center'},
                {type:'text',text:'2. We call the mapStateToProps method (which will return the posts object from our state) in our connect method. This will add the posts object as a prop in our component.'},
                {type:'text',text:'3. We can console.log and view our object to be sure we are receiveing the correct data from our Redux Store.'},
                {type:'image',text:'Payload response',name:'payloadResponse',classes:'img-lg center'},
                {type:'text',text:'...so in your Action Creator index.js file, change "response" to "response.data" so that only the data value will be returned.'},
                {type:'image',text:'Updating payload response',name:'acResponse',classes:'img-md center'},
            ]} />

            < Instruction card="light" obj={[
                {type:'header',text:'Presenting data in UI'},
                {type:'text',text:'We create a new method to present the data in the UI to keep the render method clean. In this method, we map through the data and return JSX for each element.'},
                {type:'image',text:'Showing data in component',name:'dataUI',classes:'img-md center'},
                {type:'text',text:'Then we call the new method (renderList) in the render method to show it in the UI when the component is rendered. (Note: we first wrap the renderList method in a wrapper div so it doesn\'t throw an error'},
                {type:'image',text:'rendering the list',name:'renderingList',classes:'img-md center'},
            ]} /> 

            < Instruction card="dark" obj={[
                {type:'header',text:'Set up to fetch user data'},
                {type:'text',text:'Each post has a userId. We are going to take that id for each post and return the user data. This means we have to make another API call after our initial API call.'},
                {type:'image',text:'Fetch UserId setup',name:'userIdSetup',classes:'img-lg center'},
                {type:'text',text:'The process of how we will fetch our user data (and posts data) is below.'},
                {type:'image',text:'How we fetch our data',name:'fetchProcess',classes:'img-lg center'},
                {type:'text',text:'The process of how we will fetch all data and process it is below:'},
                {type:'image',text:'How we fetch our data',name:'fetchingUserProcess',classes:'img-lg center'},
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Creating Action Creator to fetch User'},
                {type:'text',text:'In the "actions/index.js" file, this Action Creator will look very similar to our fetchPosts action creator we already created. The main difference being we need to pass in the id and use it in our endpoint to fetch a particular user\'s data.'},
                {type:'image',text:'Create User Action Creator',name:'userAC',classes:'img-lg center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Create a component to display User info'},
                {type:'text',text:'Create a new UserHeader component'},
                {type:'image',text:'Create a new UserHeader component',name:'userHeaderComponent',classes:'img-lg center'},
                {type:'text',text:'Import the new component so it displays on your page. Be sure to pass in the userId as a prop so it can reference it when the component calls an Action Creator.'},
                {type:'image',text:'Import User Header componenet',name:'importUserHeaderComponent',classes:'img-lg center'},
                {type:'text', classes: "last success", text:'Checkpoint: OK'},
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Updating UserHeader Component'},
                {type:'text',text:'1. Import the "connect" method from React-Redux to allow React component to connect to the Redux Store.'},
                {type:'text',text:'2. Import the fetchUser Action Creator so it can be called when this component is rendered.'},
                {type:'text',text:'3. We then call the connect function when we export the file. (For an explanation of this, see "Create Action Creators"'},
                {type:'text',text:'4. In the componentDidMount method, we need to call the fetchUser Action Creator with the userId that was passed down to us in the props object, so we can display the User information when this component is rendered.'},
                {type:'image',text:'Updating the UserHeader component',name:'updatingUserHeader',classes:'img-lg center'}
            ]} /> 

            < Instruction card="dark" obj={[
                {type:'header',text:'Flow for fetching user information'},
                {type:'image',text:'Fetching user information flow',name:'fetchUserFlow',classes:'img-lg center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Creating and wiring up a new Reducer'},
                {type:'text',text:'In the reducers folder, create a new file and add the typical boilerplate below:'},
                {type:'image',text:'User Reducer file',name:'userReducer',classes:'img-lg center'},
                {type:'text',text:'In the reducers index.js file, add your new Reducer:'},
                {type:'image',text:'Adding User Reducer file',name:'addingUsersReducer',classes:'img-lg center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Giving UserHeader component access to Redux level State'},
                {type:'text',text:'Note: if you understand what\'s going on, simply skip to the next section for the refactor.'},
                {type:'text',text:'1. Add the mapStateToProps function to give the component access to the Redux Store State.'},
                {type:'text',text:'2. In that function we return all the users from the Redux State object.'},
                {type:'text',text:'3. In the render method, iterate through the list of users to find the user that has the id given in this.props.users.'},
                {type:'text',text:'4. If no user is found, then nothing is displayed.'},
                {type:'text',text:'5. If a user is found, then display the user\'s name.'},
                {type:'text',text:'6. Add the mapStateToProps method to the connect function.'},
                {type:'image',text:'User Reducer file',name:'userHeaderUpdate',classes:'img-lg center'},
            ]} /> 
            < Instruction card="light" obj={[
                {type:'header',text:'Refactor of the UserHeader component.'},
                {type:'text',text:'1. Instead of finding the specific user in the render method, we instead move it to the mapStateToProps method.'},
                {type:'text',text:'2. In order to get access to this components props, we use the "ownProps" argument in the mapStateToProps method. We then use that to compare the user.id from our Redux State, with this component\'s userId prop.'},
                {type:'text',text:'3. Since we are returning one user, we change the property from "users" to "user".'},
                {type:'text',text:'4. In the render method, we get access to the "user" property. We do this by destructuring the value off of the props object.'},
                {type:'image',text:'User Reducer file',name:'refactorUserHeader',classes:'img-lg center'},
            ]} />
            < Instruction card="dark" obj={[
                {type:'header',text:'Action Creator to fetch Posts and Users'},
                {type:'image',text:'The fetch posts and users Action Creator',name:'fetchPostsAndUsersProcess',classes:'img-lg center'}
            ]} />  

            < Instruction card="light" obj={[
                {type:'header',text:'Calling an Action Creator inside an Action Creator'},
                {type:'image',text:'Calling an Action Creator inside an Action Creator',name:'callingACInsideAC',classes:'img-lg center'},
                {type:'text',text:'1. We call an Action Creator inside another Action Creator.'},
                {type:'text',text:'2. That call invokes the action creator (function), that returns an inner function.'},
                {type:'text',text:'3. We dispatch that inner function.'},
                {type:'text',text:'4. Whenever we dispatch a function, Redux-Thunk will pick it up and (using dispatch as an argument) will automatically invoke it. Once it makes the call to the API and returns the data, it dispatches the Action Creator to all the Reducers.'},
                {type:'image',text:'Calling an Action Creator inside an Action Creator',name:'ACInsideAC',classes:'img-lg center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Wire up fetchPostsAndUsers Action Creator (in PostList Component)'},
                {type:'text',text:'1. First we must inport the new Action Creator to our component.'},
                {type:'text',text:'2. Then we need to call the new Action Creator in the componentDidMount method. Note: we commented out the original fetchPosts method since we will not be using that in the componentDidMount method.'},
                {type:'image',text:'Wiring up new Action Creator',name:'wireUpNewAC',classes:'img-lg center'},
                {type:'text',text:'3. In the connect function, we swap out the old Action Creator (fetchPosts), with our new one - fetchPostsAndUsers.'},
                {type:'image',text:'Connecting new Action Creator',name:'connectingNewAC',classes:'img-lg center'}
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Update Action Creator to fetch unique user\'s info'},
                {type:'image',text:'Getting and fetching unique users',name:'fetchUniqueUsers',classes:'img-lg center'},
            ]} /> 

            < Instruction card="light" obj={[
                {type:'header',text:'Update Action Creator to fetch unique user\'s info'},
                {type:'text',text:'1. Since we now have the fetchPostsAndUsers Action Creator fetching all data, we don\'t need to use fetchUser Action Creator in this component. (Component will update automatically when state.users is updated).'},
                {type:'text',text:'2. Remove the import of fetchUser.'},
                {type:'text',text:'3. Remove fetchUser from connect function.'},
                {type:'image',text:'Updating User Component',name:'updateUserNameComponent',classes:'img-lg center'},
            ]} /> 

		</div>
	);
}

export default Instructions;