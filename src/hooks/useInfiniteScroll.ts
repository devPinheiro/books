import { useState, useEffect, useCallback } from 'react';

export const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const threshold = 1000; // Start loading when 1000px from bottom

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      setIsLoading(true);
      callback();
    }
  }, [callback, isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const setLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return { isLoading, setLoadingComplete };
};