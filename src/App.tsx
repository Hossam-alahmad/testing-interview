import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
function App() {
    return (
        <ChakraProvider disableGlobalStyle>
            <div className="min-h-screen">
                <Home />
            </div>
            <Toaster />
        </ChakraProvider>
    );
}

export default App;
