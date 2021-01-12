/*
 * 1.2.0.0
 * COPYRIGHT (c) 2017 mScroll
 */



(function (){

"use strict";

var _WINDOW = window;
var _LOG = _WINDOW.Math.log;
var _LENGTH = "length";
var _WIDTH = "width";
var _HEIGHT = "height";
var _BASE1_2 = _LOG(1.2);
var _NULL = null;

var _Nw;
var _Nw_window;
var _This_window;
var _Ws;
var _Scale;
var _Ptr;

if ("nw" in _WINDOW)
   {
   _Nw = _WINDOW.nw;
   _Nw_window = _Nw.Window;
   _This_window = _Nw_window.get();
   _Ws = {};
   _Ws[_WIDTH] = 400;
   _Ws[_HEIGHT] = 300;
   _Scale = [50, 57.1428, 66.6666, 80, 100, 114.286, 133.333, 160, 200];
   _Ptr = 4;

   _Nw.mScrollNwZoom = function (Reset_)
      {
      if (arguments[_LENGTH] === 1 && Reset_)
         {
         _Ptr = 4;
         }
      else
         {
         ++ _Ptr;

         if (_Ptr >= _Scale[_LENGTH])
            {
            _Ptr = 0;
            }
         }

      _This_window.zoomLevel = _LOG(_Scale[_Ptr] / 100) / _BASE1_2;
      };

   _Nw.mScrollNwOpen = function (Url_, Width_, Height_)
      {
      _Ws[_WIDTH] = Width_;
      _Ws[_HEIGHT] = Height_;
      _Nw_window.open(Url_, _Ws);
      };
   }
else
   {
   _Nw = {};
   _Nw_window = _NULL;
   _This_window = _NULL;
   _Ws = _NULL;
   _Scale = _NULL;
   _Ptr = 4;

   _Nw.mScrollNwZoom = function ()
      {
      };

   _Nw.mScrollNwOpen = function ()
      {
      };

   _WINDOW.nw = _Nw;
   }

})();



/* EOF */