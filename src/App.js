import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import Login from "./components/Login";
function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
