import { Route, Routes } from "react-router-dom";
import CallBack from "./components/CallBack/CallBack";
import Reducer from "./components/Reducer/Reducer";
import Ref from "./components/Ref/Ref";
import Rendering from "./components/Rendering";
import useMediaQuery from "./hooks/useMediaQuery";
import SignUp from "./components/UserLoging/SignUp";
import SignIn from "./components/UserLoging/SignIn";

function App() {
  const isMobile = useMediaQuery("(max-width: 600px");

  console.log("isMobile", isMobile);

  const isDesktop = useMediaQuery("(max-width: 786px");

  console.log("isDesktop", isDesktop);

  return (
    <>
      <Routes>
        <Route path="/ref" element={<Ref />}></Route>
        <Route path="/rendering" element={<Rendering />}></Route>
        <Route path="/callback" element={<CallBack />}></Route>
        <Route path="/reducer" element={<Reducer />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
