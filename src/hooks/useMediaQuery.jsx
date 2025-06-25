import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  //Using the query parameter, you can make your React components responsive by dynamically reacting to changes in viewport size or other media conditions.

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); // Checks if the specified media query matches the current viewport.
    if (media.matches !== matches) {
      // If the current state of matches differs from media.matches, the state is updated using setMatches.
      setMatches(media.matches);
    }

    const listner = () => setMatches(media.matches); //listner updates the matches state based on the media query match.

    window.addEventListener("resize", listner); //Adds a listener to the resize event on the window, which calls the listner function whenever the window is resized.

    //clean up
    return () => window.removeEventListener("resize", listner); //Returns a cleanup function that removes the event listener when the component unmounts or when the dependencies (matches or query) change.
  }, [matches, query]);

  return matches; //The useMediaQuery hook returns the current value of matches
};

export default useMediaQuery;
