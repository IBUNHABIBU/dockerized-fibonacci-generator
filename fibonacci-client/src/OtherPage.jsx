import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default () => {
  return (
    <div>OtherPage
      <Link to='/'> Go back home</Link>
    </div>
  )
}
