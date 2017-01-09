import React from 'react';
import ReactDOM from 'react-dom';

import { mountComponents } from 'react-sinatra-ujs';

import CommentBox from './components/CommentBox';

addEventListener('load', function() { mountComponents({ CommentBox: CommentBox }) }, false);
