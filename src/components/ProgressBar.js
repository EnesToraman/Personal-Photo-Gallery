import React, { useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div className="progress-bar" style={{ width: progress + '%', height: "5px" }}>
    </div>
  );
}