/*
The zustand module is a state management library for React applications. It provides a simple and flexible way to manage state without the need for complex setups or boilerplate code.

With zustand, you can create stores that hold your application state and define actions to update that state. These stores can be easily consumed by components, allowing them to access and modify the shared state.
In terms of functionality it is similar to context hook and allows to share the state
*/
import {create} from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/*
Here, the create function is used to create a custom store called useRegisterModal. It takes two arguments: a function that modifies the store's state (set function), and an initial state object.

The function passed to create is a callback that receives the set function as an argument. In this callback, the initial state object is defined using an object literal notation. The initial state sets isOpen to false and provides implementations for onOpen and onClose that modify the state accordingly using the set function. When onOpen is called, it sets isOpen to true, and when onClose is called, it sets isOpen to false.
*/
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}));

export default useRegisterModal;
