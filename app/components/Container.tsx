"use client";

/*
An interface in TypeScript is used to define the shape of an object or the contract that a certain entity must adhere to 
*/

interface ContainerProps {
  /*
React.ReactNode is a type that represents the possible types of values that can be rendered as children in a React component. It is a union type that includes several different types: JSX, numbers, strings, arrays, fragments, null or undefined etc.
*/
  children: React.ReactNode;
}

/*
Container expects a single argument which is an object. This argument is destructured to extract the children property using object destructuring syntax.
*/

/*
React.FC is a generic type that stands for "React Function Component". It is a shorthand way of defining a functional component in React
*/
const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm: px-2 px-4">
      {children}
    </div>
  );
};
export default Container;
