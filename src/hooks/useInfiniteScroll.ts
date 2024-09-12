import { useEffect, useState, useCallback } from "react";

// The custom hook that handles infinite scroll detection
export const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    // Check if the user has scrolled near the bottom of the page and if more data is available
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      hasMore &&
      !loading
    ) {
      setLoading(true); // Set loading state to true
    }
  }, [loading, hasMore]);

  useEffect(() => {
    if (loading) {
      callback(); // Call the fetchData function passed as a parameter
      setLoading(false); // Reset the loading state after fetching the data
    }
  }, [loading, callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, [handleScroll]);

  return loading; // Return the loading state
};
