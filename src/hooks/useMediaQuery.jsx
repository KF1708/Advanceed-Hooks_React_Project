import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  //Using the query parameter, you can make your React components responsive by dynamically reacting to changes in viewport size or other media conditions.

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listner = () => setMatches(media.matches);
    window.addEventListener("resize", listner);

    //clean up
    return () => window.removeEventListener("resize", listner);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
