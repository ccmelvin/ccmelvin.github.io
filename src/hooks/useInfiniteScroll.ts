import { useEffect, useState, useCallback } from "react";


export const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      hasMore &&
      !loading
    ) {
      setLoading(true); 
    }
  }, [loading, hasMore]);

  useEffect(() => {
    if (loading) {
      callback(); 
      setLoading(false); 
    }
  }, [loading, callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return loading;
};
