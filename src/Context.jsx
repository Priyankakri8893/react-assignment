
import { createContext} from "react";

const AppContext= createContext()

const AppProvider= ({children}) => {
    const userData= {
        name: "Priyanka Kumari",
        age: 24
    }
// console.log(AppContext)
    return <AppContext.Provider value= {userData}>{children}</AppContext.Provider>;
}

export {AppContext, AppProvider}




// 1. `import`: This keyword is used in JavaScript to bring in functionality from external modules or libraries. In this case, it is used to import the `createContext` function from the "react" library.

// 2. `createContext()`: `createContext` is a function provided by the React library. It is used to create a new context object. Context in React allows you to pass data down the component tree without having to pass props manually at every level.

// 3. `const AppContext = createContext()`: This line of code creates a new context object named `AppContext` using the `createContext` function. This context object will be used to store and share data across components.

// 4. `const AppProvider = ({children}) => { ... }`: This code defines a React functional component named `AppProvider`. This component will serve as a provider for the `AppContext` and will wrap around other components to make the context data available to them.

// 5. `({children})`: This is a destructuring assignment in the function parameter. It extracts the `children` prop from the props object passed to the `AppProvider` component. The `children` prop refers to the components that are nested within the `AppProvider` component.

// 6. `const userData = { ... }`: Inside the `AppProvider` component, a variable named `userData` is defined. It's an object that contains some sample data, such as a name and age.

// 7. `<AppContext.Provider value={userData}> ... </AppContext.Provider>`: This JSX code is rendering the `AppContext.Provider` component. It wraps around the `children` components, making the `userData` object available to them via the context. The `value` prop is used to pass the data (`userData`) to the context, making it accessible to any component that consumes this context.

// 8. `export { AppContext, AppProvider }`: These export statements make the `AppContext` and `AppProvider` variables available for other modules to import and use.
