'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from "react-dom/server";

import CommentBox from './components/CommentBox'

// To load on server runtime
global.CommentBox = CommentBox;
