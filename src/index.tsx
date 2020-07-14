import React from 'react';
import { render } from 'react-dom';

function domLoaded(evt: Event) {
  const doc = evt.target as Document;
  const rootEl = doc.getElementById('root');

  if (!rootEl) {
    return;
  }

  render(<h1>App</h1>, rootEl);
}

document.addEventListener('DOMContentLoaded', domLoaded);
