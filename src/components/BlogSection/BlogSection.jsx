import React from 'react';

const BlogSection = () => {
    return (
        <div>
            <div>
          <h2 className="font-bold text-xl text-center">Questions  & Answer Section</h2>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">01. Props vs State</h2>
            <p>Props is an object which stores the value of attributes of a tag and work similar to the HTML attributes. Using props, we can pass data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are read-only components. That’s mean props is immutable so we cannot modify the props from inside the component. Stateless component can have Props. Props make components reusable.
            <br />
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. Stateless components cannot have State. State cannot make components reusable.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">02. How does useState() work?</h2>
            <p>A Hook is a special function that lets you “hook into” React features. In this case,useState()is a Hook that lets you add React state to function components.
            <br />
            The useState()is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">03. Purpose of useEffect() other than fetching data</h2>
            <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
            There are more usecase of useEffect(). For example:
            <li>Fetching data</li>
            <li>Reading from local storage</li>
            <li>Registering and deregistering event listeners</li>
            <br />
            On Every Component, Render
            To call the useEffect function on every component render, skip adding the dependency list. When the dependency list is not present, react will have nothing to compare the previous value with; as a result, the effect will run every time.  

            On Every Component, Render with a Condition
            To call the useEffect functionality based on any condition, we have to specify the list of dependencies. And the thumb rule is always to add those dependencies that you are using inside the useEffect(). 

            When Component Unmounts
            To clean up the mounting actions like removing event listeners or stopping data fetching with a side effect we call the useEffect after the component unmounts. A return statement with a function should be added inside the useEffect() hook.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2">04. How does React work?</h2>
            <p>
            React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries.
            React is divided into two major APIs. First, there's the React DOM. This is the API that's used to perform the actual rendering on a web page. Second, there's the React component API. These are the parts of the page that are actually rendered by React DOM.
            Within a React component, we have the following areas to think about:
            <li>Data: This is data that comes from somewhere (the component doesn't care where), and is rendered by the component.</li>
            <li>Lifecycle: These are methods that we implement that respond to changes in the lifecycle of the component. For example, the component is about to be rendered.</li>
            <li>Events: This is code that we write for responding to user interactions.</li>
            <li>JSX: This is the syntax of React components used to describe UI structures.</li>
            <br />
            The syntax used by React components is called JSX (JavaScript XML). The idea is actually quite simple. A component renders content by returning some JSX. The JSX itself is usually HTML markup, mixed with custom tags for the React components. What's absolutely groundbreaking here is that we don't have to perform little micro-operations to change the content of a component.
            </p>
        </div>
        </div>
    );
};

export default BlogSection;