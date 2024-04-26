import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
} from "react";
import "./infiniteScroll.css";
import useIsMobile from "../../hooks/useIsMobile";

interface InfiniteScrollProps {
  children: ReactNode;
  loadData: (isStart: boolean) => void;
  scrollableDivRef: RefObject<HTMLDivElement>;
  isInitialDataLoaded: boolean;
}

function InfiniteScroll(props: InfiniteScrollProps) {
  const { children, loadData, scrollableDivRef, isInitialDataLoaded } = props;
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const rootMarginIntersection = isMobile ? "300px" : "20%";

  function setInterSectionObserver(
    refToObserve: RefObject<HTMLDivElement>,
    isStartOfList: boolean,
  )  {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting) {
        loadData(isStartOfList);
      }
    }, {
      threshold: 0,
      rootMargin: rootMarginIntersection,
      root: scrollableDivRef.current,
    });

    if (refToObserve.current) {
      observer.observe(refToObserve.current);
    }
    return () => {
      if (refToObserve.current) {
        observer.unobserve(refToObserve.current);
      }
    };
  }

  useEffect(() => {
    isInitialDataLoaded && setInterSectionObserver(endRef, false);
  }, [endRef, isInitialDataLoaded]);

  useEffect(() => {
    isInitialDataLoaded && setInterSectionObserver(startRef, true);
  }, [startRef, isInitialDataLoaded]);

  const scrollToInitialPosition = () => {
    scrollableDivRef?.current?.children[2].scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    scrollToInitialPosition();
  })

  return (
    <>
      <div className="ref-container" ref={startRef}></div>
      {children}
      <div className="ref-container" ref={endRef}></div>
    </>
  );
}

export default InfiniteScroll;
