import React, { useState, useRef, useEffect } from 'react';

const Observer = ({ options, children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    let refCurrent = ref.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [ref, options]);

  return (
    <div className={visible ? 'show' : ''} ref={ref}>
      {children}
    </div>
  );
};

export default Observer;
