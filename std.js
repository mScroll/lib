/*
 * 2.1.991.0
 * COPYRIGHT (c) 2017 mScroll
 */



/* namespace */ var std = {};

(function (std){

"use strict";

var __u;
var __v;
var __w;
var __x;
var __s;
var __t;
var __r;

var _WINDOW = window;
var _DATE = _WINDOW.Date;
var _MATH = _WINDOW.Math;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _CEIL = _MATH.ceil;
var _FLOOR = _MATH.floor;
var _POW = _MATH.pow;
var _LOG = _MATH.log;
var _RANDOM = _MATH.random;
var _AUDIO = _WINDOW.Audio;
var _SETTIMEOUT = _WINDOW.setTimeout;
var _NAVIGATOR = _WINDOW.navigator;
var _DOCUMENT = _WINDOW.document;
var _DOCUMENTELEMENT = _DOCUMENT.documentElement;
var _BODY = _DOCUMENT.body;
var _CHARAT = "charAt";
var _INDEXOF = "indexOf";
var _SUBSTRING = "substring";
var _GETTIME = "getTime";
var _TOUTCSTRING = "toUTCString";
var _TOSTRING = "toString";
var _VALUEOF = "valueOf";
var _APPLY = "apply";
var _LENGTH = "length";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _USERAGENT = "userAgent";
var _EVENT = "event";
var _KEYCODE = "keyCode";
var _LOCALSTORAGE = "localStorage";
var _GETITEM = "getItem";
var _SETITEM = "setItem";
var _REMOVEITEM = "removeItem";
var _COOKIE = "cookie";
var _GETELEMENTBYID = "getElementById";
var _ONRESIZE = "onresize";
var _ONKEYDOWN = "onkeydown";
var _ONKEYUP = "onkeyup";
var _ONCONTEXTMENU = "oncontextmenu";
var _ONSELECTSTART = "onselectstart";
var _ONDRAGSTART = "ondragstart";
var _ONDRAG = "ondrag";
var _ONDRAGENTER = "ondragenter";
var _ONDRAGOVER = "ondragover";
var _ONDROP = "ondrop";
var _CLIENTWIDTH = "clientWidth";
var _CLIENTHEIGHT = "clientHeight";
var _TITLE = "title";
var _STYLE = "style";
var _AUTOPLAY = "autoplay";
var _PRELOAD = "preload";
var _AUTO = "auto";
var _BODY_STYLE = _BODY[_STYLE];
var _TYPEOF_STRING = typeof "";
var _TYPEOF_ARRAY = typeof [];
var _UNDEFINED = _WINDOW.undefined;
var _NULL = null;

var _EOF;
var _EMPTY;
var _E0;
var _BITS_CHAR;
var _BYTES_WORD;
var _BASE_BIT;
var _BITS_NIBBLE;
var _BITSPERHEX;
var _DIGITS;
var _LOG2_MAX;
var _EXP2;
var _WORD_MAX;
var _LOG2E;
var _BASE_0X;
var _BASE_MAX;
var _BASE64;
var _BASE10;
var _LOG16_MAX;
var _EXP16;
var _LN16;
var _LOG64_MAX;
var _EXP64;
var _LN64;
var _SIZE_T_MAX;
var _MILLIS;
var _BASE_HOURS;
var _LOG60_MAX;
var _EXP60;
var _BASE_DECIMAL;
var _INITSHFT;
var _RB;
var _LOG2;
var _LOG16;
var _LOG64;
var _BASE_ENCODE;
var _BASE_DECODE;
var _REV;

var _Rand1;
var _Rand2;
var _Rand3;
var _Rand4;
var _Enum;
var _Milliseconds;
var _Seconds;

var _STD_ZLIB;
var _EOB;
var _EOB1;
var _FHFMN_L;
var _DIST_L;
var _FHFMN;
var _FHFMN2;
var _DIST;
var _DIST2;
var _LZMIN;
var _LZFWD;
var _LZMAX;
var _LIT77;
var _DIST77;
var _LZLIT;
var _ORDER;
var _BHDR;
var _BHDR_L;
var _CMFLG;
var _CMFLG_L;
var _ADLER32_HALF;
var _ADLER32_MOD;
var _ADLER32_LEN;
var _CRC32_POLYNOMIAL;
var _CRC;
var _LZDIST;
var _LZRPLC;
var _LZEXP;
var _DEFLATE;
var _DEFLATE0;
var _INFLATE;

var _STD_HTML;
var _WEBKIT;
var _MSIE;
var _TRIDENT;
var _EDGE;
var _EDG;
var _SEMICOLON;
var _MSIE_VERSION;
var _MS_EDGE;
var _MS_EDG;
var _SEMICOLON_SPACE;
var _EQUAL;
var _STORAGE_WORDS;
var _STORAGE_LENGTH;
var _LOG2_64;
var _WORD_LENGTH;
var _STORAGE_BITS;
var _EXPIRES;
var _TRUNCATE;
var _IDPREFIX;
var _IMG;
var _INPUT;
var _SPAN;
var _A;
var _LABEL;
var _CANVAS;
var _DIV;
var _TABLE;
var _WAV_AUDIO;
var _GENERIC_AUDIO;
var _SPAN_ID;
var _SPAN_STYLE;
var _BRACKET_SPAN;
var _SPAN_END;
var _IMG_ID;
var _IMG_STYLE;
var _SRC_QUOTES;
var _BGSOUND_ID;
var _A_ID;
var _LABEL_FOR;
var _ID_QUOTES;
var _INPUT_TEXT_ID;
var _INPUT_FILE_ID;
var _QUOTES_BRACKET;
var _BRACKET_A;
var _A_END;
var _BRACKET_LABEL;
var _LABEL_END;
var _CANVAS_ID;
var _BRACKET_CANVAS;
var _DIV_ID;
var _BRACKET_DIV;
var _DIV_END;
var _TABLE_ID;
var _BRACKET_TABLE;
var _TABLE_END;
var _COLON;
var _QUOTE;
var _SPACE;
var _COMMA;
var _ROUND_BRACKET;
var _QUOTE_ROUND_BRACKET;
var _PERCENT_ROUND_BRACKET;
var _RECT;
var _POLYGON;
var _URL;
var _URL_END;
var _CSS_FILTER;
var _MS_FILTER;
var _BASICIMAGE_GRAYSCALE;
var _BASICIMAGE_INVERT;
var _LIGHT;
var _ALPHA_BEGIN;
var _ALPHA_END;
var _GRAYSCALE;
var _INVERT;
var _BRIGHTNESS;
var _QUOTE_BRACKET_AUTO;
var _COMMA_AUTO;
var _0PX;
var _POSITION;
var _WIDTH;
var _HEIGHT;
var _TOP;
var _RIGHT;
var _BOTTOM;
var _LEFT;
var _FONT_SIZE;
var _FONT_FAMILY;
var _FONT_STYLE;
var _FONT_WEIGHT;
var _COLOR;
var _MARGIN_TOP;
var _MARGIN_RIGHT;
var _MARGIN_BOTTOM;
var _MARGIN_LEFT;
var _BORDER_TOP_WIDTH;
var _BORDER_TOP_STYLE;
var _BORDER_TOP_COLOR;
var _BORDER_RIGHT_WIDTH;
var _BORDER_RIGHT_STYLE;
var _BORDER_RIGHT_COLOR;
var _BORDER_BOTTOM_WIDTH;
var _BORDER_BOTTOM_STYLE;
var _BORDER_BOTTOM_COLOR;
var _BORDER_LEFT_WIDTH;
var _BORDER_LEFT_STYLE;
var _BORDER_LEFT_COLOR;
var _PADDING_TOP;
var _PADDING_RIGHT;
var _PADDING_BOTTOM;
var _PADDING_LEFT;
var _Z_INDEX;
var _VISIBILITY;
var _DISPLAY;
var _TEXT_ALIGN;
var _WHITE_SPACE;
var _LETTER_SPACING;
var _LINE_HEIGHT;
var _TEXT_DECORATION;
var _OVERFLOW;
var _BACKGROUND_REPEAT;
var _BACKGROUND_ATTACHMENT;
var _BACKGROUND_COLOR;
var _BACKGROUND_IMAGE;
var _BACKGROUND_POSITION;
var _CLIP;
var _CLIP_PATH;
var _OPACITY;
var _FILTER;
var _CURSOR;
var _SRC;
var _LOOP;
var _VOLUME;
var _INNERHTML;
var __STATIC;
var __ABSOLUTE;
var __SERIF;
var __SANS_SERIF;
var __CURSIVE;
var __MONOSPACE;
var __NORMAL;
var __ITALIC;
var __BOLD;
var __NONE;
var __SOLID;
var __REPEAT;
var __REPEAT_X;
var __REPEAT_Y;
var __NO_REPEAT;
var __SCROLL;
var __FIXED;
var __LEFT;
var __CENTER;
var __RIGHT;
var __JUSTIFY;
var __PRE;
var __NOWRAP;
var __OVERLINE;
var __UNDERLINE;
var __LINE_THROUGH;
var __INLINE;
var __BLOCK;
var __VISIBLE;
var __HIDDEN;
var __AUTO;
var __DEFAULT;
var __CROSSHAIR;
var __MOVE;
var __NS_RESIZE;
var __NWSE_RESIZE;
var __EW_RESIZE;
var __NESW_RESIZE;
var __USERFONTS;
var __P_GOTHIC;
var __BITMAP;
var __JIS;
var _OPACITY_MAX;
var _STRENGTH_MAX;
var _STRENGTH_MIN;
var _STRENGTH;
var _BRIGHTNESS_MAX;
var _IE_VOLUME_MIN;
var _VOLUME_MAX;
var _WAV_MAX;
var _BOOL_GRAYSCALE;
var _BOOL_INVERT;
var _INT_BRIGHTNESS;
var _INT_OPACITY;
var _STYLE_DECL;
var _VALUE_CACHE;
var _AP_LENGTH;
var _PROPERTY;
var _JS_PROPERTY;
var _VALUE;
var _VALUE2;
var _UNIT;
var _PARSE;
var _PARSE_A;
var _ARGS;
var _COMPARE_ARGS;
var _DEFAULT_VALUE;
var _FRMPROC;
var _SUBROUTINE;
var _KDOWN;
var _KUP;
var _CANCEL;
var _CSS;
var _RESIZE;
var _RESIZE2;
var _CREATE_AUDIO;
var _RESERVE;
var _AMBIENT;

var _Frmproc;
var _Exception;
var _Frmrate;
var _Timerid;
var _Time;
var _Pwr;
var _Subroutine;
var _Press;
var _Input;
var _Ku;
var _Key;
var _Prevent;
var _Default;
var _Temp;
var _Id;
var _Tagname;
var _Clip;
var _Width;
var _Height;
var _Resize;
var _Ap;
var _Reserve;
var _Ambients;
var _Length;

/* private: */

/* static const int */ _EOF = -1;
/* static const string */ _EMPTY = "";
/* static const string */ _E0 = "0";
/* static const size_t */ _BITS_CHAR = 8;
/* static const size_t */ _BYTES_WORD = 4;
/* static const double */ _BASE_BIT = 2;
/* static const size_t */ _BITS_NIBBLE = 4;
/* static const char[] */ _BITSPERHEX = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
/* static const size_t */ _DIGITS = _BYTES_WORD * _BITS_CHAR;
/* static const double */ _LOG2_MAX = 53;
/* static const double[] */ _EXP2 = [];

   for (__s = 0; __s <= _LOG2_MAX; ++ __s)
      {
      _EXP2[__s] = _POW(_BASE_BIT, __s);
      }

/* static const int */ _WORD_MAX = _EXP2[_DIGITS] - 1;
/* static const double */ _LOG2E = 1.442695040888963;
/* static const double */ _BASE_0X = 16;
/* static const double */ _BASE_MAX = 64;
/* static const string[] */ _BASE64 =
   [
   _E0, "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
   "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
   "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
   "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
   "y", "z", "-", "*"
   ];
/* static const char[] */ _BASE10 = {};

   for (__s = 0; __s < _BASE_MAX; ++ __s)
      {
      _BASE10[_BASE64[__s]] = __s;
      }

/* static const double */ _LOG16_MAX = 13;
/* static const double[] */ _EXP16 = [];

   for (__s = 0; __s <= _LOG16_MAX; ++ __s)
      {
      _EXP16[__s] = _POW(_BASE_0X, __s);
      }

/* static const double */ _LN16 = 2.772588722239782;
/* static const double */ _LOG64_MAX = 8;
/* static const double[] */ _EXP64 = [];

   for (__s = 0; __s <= _LOG64_MAX; ++ __s)
      {
      _EXP64[__s] = _POW(_BASE_MAX, __s);
      }

/* static const double */ _LN64 = 4.158883083359672;
/* static const size_t */ _SIZE_T_MAX = _EXP2[_DIGITS] - 1;
/* static const long */ _MILLIS = 1000;
/* static const double */ _BASE_HOURS = 60;
/* static const double */ _LOG60_MAX = 2;
/* static const double[] */ _EXP60 = [];

   for (__s = 0; __s <= _LOG60_MAX; ++ __s)
      {
      _EXP60[__s] = _POW(_BASE_HOURS, __s);
      }

/* static const double */ _BASE_DECIMAL = 10;
/* static const size_t */ _INITSHFT = _DIGITS - _BITS_CHAR;
/* static const char[] */ _RB = [];

   for (__s = 0; __s <= 0xFF; ++ __s)
      {
      __v = 0;
      __u = 0x80;

      for (__t = __s; __t !== 0; __t >>>= 1)
         {
         if ((__t & 1) !== 0)
            {
            __v |= __u;
            }

         __u >>>= 1;
         }

      _RB[__s] = __v;
      }

/* double */ _LOG2 = function (/* double */X_) /* const */
   {
   return (_LOG2E * _LOG(X_));
   };

/* double */ _LOG16 = function (/* double */X_) /* const */
   {
   return (_LOG(X_) / _LN16);
   };

/* double */ _LOG64 = function (/* double */X_) /* const */
   {
   return (_LOG(X_) / _LN64);
   };

/* string */ _BASE_ENCODE = function (Log_, Exp_, Data_, Length_) /* const */
      /*
       * (double (*)(double) const Log_, const double[] Exp_, long Data_)
       * (double (*)(double) const Log_, const double[] Exp_, long Data_, size_t Length_)
       */
   {
   var u;
   var s = 1;

   if (Length_ === _UNDEFINED)
      {
      Length_ = 0;
      }

   if (Data_ !== 0)
      {
      for (s = _FLOOR(Log_(Data_)); Data_ >= Exp_[s]; ++ s)
         {
         }
      }

   for (Length_ -= s , u = _EMPTY; u[_LENGTH] < Length_; u += _E0)
      {
      }

   for (-- s; 0 < s; -- s)
      {
      u += _BASE64[_FLOOR(Data_ / Exp_[s])];
      Data_ %= Exp_[s];
      }

   return (u += _BASE64[Data_]);
   };

/* long */ _BASE_DECODE = function (/* double */Log_max_, /* const double[] */Exp_, /* string */Code_) /* const */
   {
   var u = Code_[_LENGTH] - 1;
   var v;
   var s = u - Log_max_;

   if (s < 0)
      {
      s = 0;
      }

   for (v = 0; s <= u; ++ s)
      {
      v += _BASE10[Code_[_CHARAT](s)] * Exp_[u - s];
      }

   return (v);
   };

/* size_t */ _REV = function (/* int */Data_, /* size_t */Len_) /* const */
   {
   var u = 0;
   var s;

   for (s = _INITSHFT; Data_ !== 0; s -= _BITS_CHAR)
      {
      u |= _RB[Data_ & 0xFF] << s;
      Data_ >>>= _BITS_CHAR;
      }

   return (u >>> _DIGITS - Len_);
   };

/* static int */ _Rand1 = _FLOOR(_RANDOM() * 0x3FFFFFFF);
/* static int */ _Rand2 = _FLOOR(_RANDOM() * 0x7FFFFFFF);
/* static int */ _Rand3 = _FLOOR(_RANDOM() * 0xFFFFFFFF);
/* static int */ _Rand4 = 0x34CFD051;
/* static int */ _Enum = 0;
/* static long */ _Milliseconds = new _DATE()[_GETTIME]();
/* static long */ _Seconds = 0;

/* namespace */ _STD_ZLIB = {};

/* static const size_t */ _EOB = 0x100;
/* static const size_t */ _EOB1 = _EOB + 1;
/* static const size_t */ _FHFMN_L = 9;
/* static const size_t */ _DIST_L = 5;
/* static const size_t[] */ _FHFMN = [];

   for (__s = 0 , __t = 0; __s <= 287; ++ __s , __t += 2)
      {
      _FHFMN[__t] =
         __s <= 255 ?
            __s <= 143 ?
               (__u = 8 , _REV(__s + 48, __u))
            :
               (__u = _FHFMN_L , _REV(__s + 256, __u))
         : __s <= 279 ?
            (__u = 7 , _REV(__s - 256, __u))
         :
            (__u = 8 , _REV(__s - 88, __u));
      _FHFMN[__t + 1] = __u;
      }

/* static const size_t[][] */ _FHFMN2 = [];

   __u = [];

   for (__s = 0; __s <= 287; ++ __s)
      {
      __w = __s <= 255 ?
            __s <= 143 ?
               8
            :
               _FHFMN_L
         : __s <= 279 ?
            7
         :
            8;

      if (! (__w in __u))
         {
         __u[__w] = [];
         }

      __v = __u[__w];
      __v[__v[_LENGTH]] = [__s, _FHFMN_L - __w];
      }

   __v = 0;
   __w = 128;

   for (__s = 7; __s <= _FHFMN_L; ++ __s)
      {
      __x = __u[__s];

      for (__t = 0; __t < __x[_LENGTH]; ++ __t)
         {
         for (__r = _REV(__v, __s); __r < 512; __r += __w)
            {
            _FHFMN2[__r] = __x[__t];
            }

         ++ __v;
         }

      __v <<= 1;
      __w <<= 1;
      }

/* static const char[] */ _DIST = [];

   for (__s = 0; __s <= 31; ++ __s)
      {
      _DIST[__s] = _REV(__s, _DIST_L);
      }

/* static const char[] */ _DIST2 = [];

   for (__s = 0; __s <= 31; ++ __s)
      {
      _DIST2[_DIST[__s]] = __s;
      }

/* static const size_t */ _LZMIN = 3;
/* static const size_t */ _LZFWD = _LZMIN - 1;
/* static const size_t */ _LZMAX = 258;
/* static const size_t[] */ _LIT77 =
   [
   _LZMIN, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 1, 13, 1, 15, 1, 17, 1, 19, 2, 23, 2, 27, 2,
   31, 2, 35, 3, 43, 3, 51, 3, 59, 3, 67, 4, 83, 4, 99, 4, 115, 4, 131, 5, 163, 5, 195, 5, 227, 5, _LZMAX, 0
   ];
/* static const size_t[] */ _DIST77 =
   [
   1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 7, 1, 9, 2, 13, 2, 17, 3, 25, 3,
   33, 4, 49, 4, 65, 5, 97, 5, 129, 6, 193, 6, 257, 7, 385, 7, 513, 8, 769, 8,
   1025, 9, 1537, 9, 2049, 10, 3073, 10, 4097, 11, 6145, 11, 8193, 12, 12289, 12, 16385, 13, 24577, 13
   ];
/* static const size_t[] */ _LZLIT = [];

   for (__s = 0; __s < _LZMIN; ++ __s)
      {
      _LZLIT[__s] = 0;
      }

   for (; __s <= _LZMAX; ++ __s)
      {
      _LZLIT[__s] =
         __s <= 26 ?
            __s <= 9 ?
               __s <= 5 ?
                  __s === _LZMIN ?
                     __s - 3 << 12 | 257
                  :
                     __s === 4 ?
                        __s - 4 << 12 | 258
                     :
                        __s - 5 << 12 | 259
               :
                  __s <= 7 ?
                     __s === 6 ?
                        __s - 6 << 12 | 260
                     :
                        __s - 7 << 12 | 261
                  :
                     __s === 8 ?
                        __s - 8 << 12 | 262
                     :
                        __s - 9 << 12 | 263
            :
               __s <= 14 ?
                  __s === 10 ?
                     __s - 10 << 12 | 264
                  :
                     __s <= 12 ?
                        __s - 11 << 12 | 777
                     :
                        __s - 13 << 12 | 778
               :
                  __s <= 18 ?
                     __s <= 16 ?
                        __s - 15 << 12 | 779
                     :
                        __s - 17 << 12 | 780
                  :
                     __s <= 22 ?
                        __s - 19 << 12 | 1293
                     :
                        __s - 23 << 12 | 1294
         :
            __s <= 82 ?
               __s <= 42 ?
                  __s <= 30 ?
                     __s - 27 << 12 | 1295
                  :
                     __s <= 34 ?
                        __s - 31 << 12 | 1296
                     :
                        __s - 35 << 12 | 1809
               :
                  __s <= 58 ?
                     __s <= 50 ?
                        __s - 43 << 12 | 1810
                     :
                        __s - 51 << 12 | 1811
                  :
                     __s <= 66 ?
                        __s - 59 << 12 | 1812
                     :
                        __s - 67 << 12 | 2325
            :
               __s <= 162 ?
                  __s <= 114 ?
                     __s <= 98 ?
                        __s - 83 << 12 | 2326
                     :
                        __s - 99 << 12 | 2327
                  :
                     __s <= 130 ?
                        __s - 115 << 12 | 2328
                     :
                        __s - 131 << 12 | 2841
               :
                  __s <= 226 ?
                     __s <= 194 ?
                        __s - 163 << 12 | 2842
                     :
                        __s - 195 << 12 | 2843
                  :
                     __s <= 257 ?
                        __s - 227 << 12 | 2844
                     :
                        __s - 258 << 12 | 285;
      }

/* static const size_t[] */ _ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
/* static const char */ _BHDR = 0x3;
/* static const size_t */ _BHDR_L = 3;
/* static const size_t */ _CMFLG = 0x9C78;
/* static const size_t */ _CMFLG_L = 16;
/* static const size_t */ _ADLER32_HALF = 16;
/* static const size_t */ _ADLER32_MOD = 65521;
/* static const size_t */ _ADLER32_LEN = 1024;
/* static const size_t */ _CRC32_POLYNOMIAL = 0xEDB88320;
/* static const int[] */ _CRC = [];

   for (__s = 0; __s <= 0xFF; ++ __s)
      {
      __u = __s;

      for (__t = 0; __t < _BITS_CHAR; ++ __t)
         {
         __u = (__u & 1) !== 0 ?
               _CRC32_POLYNOMIAL ^ __u >>> 1
            :
               __u >>> 1;
         }

      _CRC[__s] = __u;
      }

/* size_t */ _LZDIST = function (/* size_t */Dist_) /* const */
   {
   return (
      Dist_ <= 192 ?
         Dist_ <= 12 ?
            Dist_ <= 3 ?
               Dist_ === 1 ?
                  Dist_ - 1 << 9
               :
                  Dist_ === 2 ?
                     Dist_ - 2 << 9 | 1
                  :
                     Dist_ - 3 << 9 | 2
            :
               Dist_ <= 6 ?
                  Dist_ === 4 ?
                     Dist_ - 4 << 9 | 3
                  :
                     Dist_ - 5 << 9 | 36
               :
                  Dist_ <= 8 ?
                     Dist_ - 7 << 9 | 37
                  :
                     Dist_ - 9 << 9 | 70
         :
            Dist_ <= 48 ?
               Dist_ <= 24 ?
                  Dist_ <= 16 ?
                     Dist_ - 13 << 9 | 71
                  :
                     Dist_ - 17 << 9 | 104
               :
                  Dist_ <= 32 ?
                     Dist_ - 25 << 9 | 105
                  :
                     Dist_ - 33 << 9 | 138
            :
               Dist_ <= 96 ?
                  Dist_ <= 64 ?
                     Dist_ - 49 << 9 | 139
                  :
                     Dist_ - 65 << 9 | 172
               :
                  Dist_ <= 128 ?
                     Dist_ - 97 << 9 | 173
                  :
                     Dist_ - 129 << 9 | 206
      :
         Dist_ <= 2048 ?
            Dist_ <= 512 ?
               Dist_ <= 256 ?
                  Dist_ - 193 << 9 | 207
               :
                  Dist_ <= 384 ?
                     Dist_ - 257 << 9 | 240
                  :
                     Dist_ - 385 << 9 | 241
            :
               Dist_ <= 1024 ?
                  Dist_ <= 768 ?
                     Dist_ - 513 << 9 | 274
                  :
                     Dist_ - 769 << 9 | 275
               :
                  Dist_ <= 1536 ?
                     Dist_ - 1025 << 9 | 308
                  :
                     Dist_ - 1537 << 9 | 309
         :
            Dist_ <= 8192 ?
               Dist_ <= 4096 ?
                  Dist_ <= 3072 ?
                     Dist_ - 2049 << 9 | 342
                  :
                     Dist_ - 3073 << 9 | 343
               :
                  Dist_ <= 6144 ?
                     Dist_ - 4097 << 9 | 376
                  :
                     Dist_ - 6145 << 9 | 377
            :
               Dist_ <= 16384 ?
                  Dist_ <= 12288 ?
                     Dist_ - 8193 << 9 | 410
                  :
                     Dist_ - 12289 << 9 | 411
               :
                  Dist_ <= 24576 ?
                     Dist_ - 16385 << 9 | 444
                  :
                     Dist_ - 24577 << 9 | 445);
   };

/* size_t */ _LZRPLC = function (/* const char[] */Data_, /* size_t */Ptr_, /* size_t */Len_,
      /* size_t */Begin_, /* size_t */End_, /* const size_t[] */Wnd_,
      /* std::vector */Lz_)
   {
   var u;
   var v;
   var w = 0;
   var s;

   -- Begin_;

   if (Begin_ < 0)
      {
      Begin_ = 0x8000;
      }

   -- End_;

   if (End_ < 0)
      {
      End_ = 0x8000;
      }

   for (; End_ !== Begin_; )
      {
      u = true;

      if (w > _LZMIN)
         {
         for (s = w - 1; _LZMIN <= s; -- s)
            {
            if (Data_[Wnd_[End_] + s] !== Data_[Ptr_ + s])
               {
               u = false;

               break;
               }
            }

         if (u)
            {
            s = w;
            }
         }
      else
         {
         s = _LZMIN;
         }

      if (u)
         {
         for (u = Ptr_ + s;
               u < Len_
                  && Data_[Wnd_[End_] + s] === Data_[u]
                  && s < _LZMAX;
               ++ s , ++ u)
            {
            }

         if (s > w)
            {
            w = s;
            v = Wnd_[End_];
            }

         if (s === _LZMAX)
            {
            break;
            }
         }

      -- End_;

      if (End_ < 0)
         {
         End_ = 0x8000;
         }
      }

   Lz_.ate(_LZLIT[w], 24);
   Lz_.ate(_LZDIST(Ptr_ - v), 24);

   return (w);
   };

/* std::vector */ _LZEXP = function (/* const char[] */Data_) /* const */
   {
   var u = new std.vector();
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q = 0;
   var s;
   var t;

   for (s = 0; s < Data_[_LENGTH]; )
      {
      v = 0;
      w = {};
      y = {};
      z = {};
      q += 0x60000;

      if (q > Data_[_LENGTH])
         {
         q = Data_[_LENGTH];
         }

      for (; s < q; ++ s)
         {
         t = s + _LZFWD;

         if (t < q)
            {
            r = 0;

            for (; s <= t; -- t)
               {
               r = r << _BITS_CHAR | Data_[t];
               }

            if (! (r in w))
               {
               w[r] = [];
               y[r] = 0;
               z[r] = 0;
               }

            x = w[r];

            if (v === 0)
               {
               for (; y[r] !== z[r] && s - x[y[r]] > 0x8000; )
                  {
                  ++ y[r];

                  if (y[r] > 0x8000)
                     {
                     y[r] = 0;
                     }
                  }

               if (y[r] !== z[r])
                  {
                  v = _LZRPLC(Data_, s, q, y[r], z[r], x, u) - 1;
                  }
               else
                  {
                  u.ate(Data_[s], 24);
                  }
               }
            else
               {
               -- v;
               }

            x[z[r]] = s;
            ++ z[r];

            if (z[r] > 0x8000)
               {
               z[r] = 0;
               }

           if (z[r] === y[r])
               {
               ++ y[r];

               if (y[r] > 0x8000)
                  {
                  y[r] = 0;
                  }
               }
            }
         else
            {
            for (s += v; s < q; ++ s)
               {
               u.ate(Data_[s], 24);
               }

            break;
            }
         }
      }

   u.ate(_EOB, 24);

   return (u);
   };

/* void */ _DEFLATE = function (/* std::vector */Lz_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var s;

   Bs_.ate(_BHDR, _BHDR_L);

   for (s = Lz_.read(24); ; s = Lz_.read(24))
      {
      u = s & 0x1FF;
      v = 2 * u;
      Bs_.ate(_FHFMN[v], _FHFMN[v + 1]);

      if (u > _EOB)
         {
         u = s >>> 9 & 0x7;

         if (u > 0)
            {
            Bs_.ate(s >>> 12, u);
            }

         s = Lz_.read(24);
         Bs_.ate(_DIST[s & 0x1F], _DIST_L);
         u = s >>> 5 & 0xF;

         if (u > 0)
            {
            Bs_.ate(s >>> 9, u);
            }
         }
      else if (u === _EOB)
         {
         break;
         }
      }
   };

/* void */ _DEFLATE0 = function (/* const char[] */Data_, /* std::vector */Bs_)
   {
   var s;
   var t;

   for (s = 0 , t = 0xFFFF; ; t += 0xFFFF)
      {
      if (t >= Data_[_LENGTH])
         {
         t = Data_[_LENGTH] - s;
         Bs_.ate(0x1, _BHDR_L);
         Bs_.end();
         Bs_.ate(~t << 16 | t, _DIGITS);

         for (; s < Data_[_LENGTH]; ++ s)
            {
            Bs_.ate(Data_[s], _BITS_CHAR);
            }

         break;
         }
      else
         {
         Bs_.ate(0x0, _BHDR_L);
         Bs_.end();
         Bs_.ate(0x0000FFFF, _DIGITS);

         for (; s < t; ++ s)
            {
            Bs_.ate(Data_[s], _BITS_CHAR);
            }
         }
      }
   };

/* bool */ _INFLATE = function (/* std::vector */Data_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var o;
   var l;
   var j;
   var i;
   var h = Data_.length();
   var s;
   var t;
   var q;
   var p;

   for (s = Data_.read(_BHDR_L); ; s = Data_.read(_BHDR_L))
      {
      if (s <= 0x1)
         {
         Data_.seek();
         u = Data_.read(16);

         if ((~Data_.read(16) & 0xFFFF) === u)
            {
            for (t = 0; t < u; ++ t)
               {
               Bs_.ate(Data_.read(_BITS_CHAR), _BITS_CHAR);
               }
            }
         else
            {
            return (false);
            }

         if (s === 0x1)
            {
            return (true);
            }
         }
      else if (s <= _BHDR)
         {
         for (t = _FHFMN2[Data_.read(_FHFMN_L)] , Data_.seek(t[1]);
               t[0] !== _EOB;
               t = _FHFMN2[Data_.read(_FHFMN_L)] , Data_.seek(t[1]))
            {
            if (Data_.getptr() <= h)
               {
               if (t[0] < _EOB)
                  {
                  Bs_.ate(t[0], _BITS_CHAR);
                  }
               else
                  {
                  u = (t[0] - _EOB1) * 2;
                  v = u + 1;

                  if (v < _LIT77[_LENGTH])
                     {
                     v = _LIT77[v];
                     }
                  else
                     {
                     return (false);
                     }

                  r = v > 0 ? _LIT77[u] + Data_.read(v) : _LIT77[u];
                  u = _DIST2[Data_.read(_DIST_L)] * 2;
                  v = u + 1;

                  if (v < _DIST77[_LENGTH])
                     {
                     v = _DIST77[v];
                     }
                  else
                     {
                     return (false);
                     }

                  u = v > 0 ? _DIST77[u] + Data_.read(v) : _DIST77[u];

                  if (Bs_.length() >= u)
                     {
                     for (; 0 < r; -- r)
                        {
                        Bs_.ate(Bs_.at(Bs_.length() - u), _BITS_CHAR);
                        }
                     }
                  else
                     {
                     return (false);
                     }
                  }
               }
            else
               {
               return (false);
               }
            }

         if (s === _BHDR)
            {
            return (true);
            }
         }
      else if (s <= 0x5)
         {
         u = Data_.read(5) + _EOB1;
         v = u + Data_.read(5) + 1;
         w = Data_.read(4) + 4;
         x = [];

         for (t = 0; t < w; ++ t)
            {
            x[_ORDER[t]] = Data_.read(3);
            }

         for (; t < _ORDER[_LENGTH]; ++ t)
            {
            x[_ORDER[t]] = 0;
            }

         w = 0;

         for (t = 0; t < x[_LENGTH]; ++ t)
            {
            if (x[t] > w)
               {
               w = x[t];
               }
            }

         if (w === 0)
            {
            return (false);
            }

         y = 0;
         z = 2;
         r = 1 << w;
         o = [];

         for (t = 1; t <= w; ++ t)
            {
            j = w - t << 16;

            for (q = 0; q < x[_LENGTH]; ++ q)
               {
               if (x[q] === t)
                  {
                  i = j | q;

                  for (p = _REV(y, t); p < r; p += z)
                     {
                     o[p] = i;
                     }

                  ++ y;
                  }
               }

            y <<= 1;
            z <<= 1;
            }

         x = [];

         for (t = 0; t < v; )
            {
            q = Data_.read(w);

            if (q in o)
               {
               Data_.seek(o[q] >>> 16);
               p = o[q] & 0xFFFF;

               if (p <= 16)
                  {
                  if (p < 16)
                     {
                     x[t] = p;
                     ++ t;
                     }
                  else if (t > 0)
                     {
                     y = x[t - 1];

                     for (p = Data_.read(2) + 3; 0 < p; -- p)
                        {
                        x[t] = y;
                        ++ t;
                        }
                     }
                  else
                     {
                     return (false);
                     }
                  }
               else
                  {
                  if (p === 17)
                     {
                     p = Data_.read(3) + 3;
                     }
                  else
                     {
                     p = Data_.read(7) + 11;
                     }

                  for (; 0 < p; -- p)
                     {
                     x[t] = 0;
                     ++ t;
                     }
                  }
               }
            else
               {
               return (false);
               }
            }

         v = 0;

         for (t = 0; t < u; ++ t)
            {
            if (x[t] > v)
               {
               v = x[t];
               }
            }

         if (v === 0)
            {
            return (false);
            }

         w = 0;

         for (; t < x[_LENGTH]; ++ t)
            {
            if (x[t] > w)
               {
               w = x[t];
               }
            }

         y = 0;
         z = 2;
         r = 1 << v;
         o = [];

         for (t = 1; t <= v; ++ t)
            {
            j = v - t << 16;

            for (q = 0; q < u; ++ q)
               {
               if (x[q] === t)
                  {
                  i = j | q;

                  for (p = _REV(y, t); p < r; p += z)
                     {
                     o[p] = i;
                     }

                  ++ y;
                  }
               }

            y <<= 1;
            z <<= 1;
            }

         y = 0;
         z = 2;
         r = 1 << w;
         l = [];

         for (t = 1; t <= w; ++ t)
            {
            j = w - t << 16;

            for (q = u; q < x[_LENGTH]; ++ q)
               {
               if (x[q] === t)
                  {
                  i = j | q - u;

                  for (p = _REV(y, t); p < r; p += z)
                     {
                     l[p] = i;
                     }

                  ++ y;
                  }
               }

            y <<= 1;
            z <<= 1;
            }

         z = w > 0;

         for (t = Data_.read(v); ; t = Data_.read(v))
            {
            if (t in o)
               {
               Data_.seek(o[t] >>> 16);

               if (Data_.getptr() <= h)
                  {
                  t = o[t] & 0xFFFF;

                  if (t > _EOB)
                     {
                     if (z)
                        {
                        u = (t - _EOB1) * 2;
                        y = u + 1;

                        if (y < _LIT77[_LENGTH])
                           {
                           y = _LIT77[y];
                           }
                        else
                           {
                           return (false);
                           }

                        q = y > 0 ? _LIT77[u] + Data_.read(y) : _LIT77[u];
                        u = Data_.read(w);

                        if (u in l)
                           {
                           Data_.seek(l[u] >>> 16);
                           u = (l[u] & 0xFFFF) * 2;
                           y = u + 1;

                           if (y < _DIST77[_LENGTH])
                              {
                              y = _DIST77[y];
                              }
                           else
                              {
                              return (false);
                              }

                           u = y > 0 ? _DIST77[u] + Data_.read(y) : _DIST77[u];

                           if (Bs_.length() >= u)
                              {
                              for (; 0 < q; -- q)
                                 {
                                 Bs_.ate(Bs_.at(Bs_.length() - u), _BITS_CHAR);
                                 }
                              }
                           else
                              {
                              return (false);
                              }
                           }
                        else
                           {
                           return (false);
                           }
                        }
                     else
                        {
                        return (false);
                        }
                     }
                  else if (t === _EOB)
                     {
                     break;
                     }
                  else
                     {
                     Bs_.ate(t, _BITS_CHAR);
                     }
                  }
               else
                  {
                  return (false);
                  }
               }
            else
               {
               return (false);
               }
            }

         if (s === 0x5)
            {
            return (true);
            }
         }
      else
         {
         return (false);
         }
      }
   };

/* namespace */ _STD_HTML = {};

   __u = _NAVIGATOR[_USERAGENT];

/* static const bool */ _WEBKIT = __u[_INDEXOF]("WebKit", 0) !== _EOF;
/* static const string */ _MSIE = "MSIE ";
/* static const string */ _TRIDENT = "Trident/";
/* static const string */ _EDGE = "Edge/";
/* static const string */ _EDG = "Edg/";
/* static const string */ _SEMICOLON = ";";

   __v = __u[_INDEXOF](_MSIE, 0);
   __w = __u[_INDEXOF](_EDG, 0) !== _EOF;

   if (__v !== _EOF)
      {
      __u = (__v += _MSIE[_LENGTH] , _FLOOR(+__u[_SUBSTRING](__v, __u[_INDEXOF](_SEMICOLON, __v))));

      if (__u < 7 || __u > 9)
         {
         __u = 1;
         }

      __v = false;
      }
   else
      {
      __v = __u[_INDEXOF](_EDGE, 0) !== _EOF;
      __u = __u[_INDEXOF](_TRIDENT, 0) !== _EOF || __v ? 1 : 0;
      }

/* static const int */ _MSIE_VERSION = __u;
/* static const bool */ _MS_EDGE = __v;
/* static const bool */ _MS_EDG = __w;
/* static const string */ _SEMICOLON_SPACE = "; ";
/* static const string */ _EQUAL = "=";
/* static const size_t */ _STORAGE_WORDS = 384;
/* static const size_t */ _STORAGE_LENGTH = _STORAGE_WORDS * _LOG64_MAX;
/* static const double */ _LOG2_64 = 6;
/* static const size_t */ _WORD_LENGTH = _LOG64_MAX * _LOG2_64;
/* static const size_t */ _STORAGE_BITS = _STORAGE_LENGTH * _LOG2_64;

   __u = "; expires=";
   __u += new _DATE(275755 * 365 * 24 * 60 * 60)[_TOUTCSTRING]();

/* static const string */ _EXPIRES = __u;

   __u = "=0; expires=";
   __u += new _DATE(0)[_TOUTCSTRING]();

/* static const string */ _TRUNCATE = __u;
/* static const string */ _IDPREFIX = "stdhtml";
/* static const int */ _IMG = (__u = 0 , __u ++);
/* static const int */ _INPUT = __u ++;
/* static const int */ _SPAN = __u ++;
/* static const int */ _A = __u ++;
/* static const int */ _LABEL = __u ++;
/* static const int */ _CANVAS = __u ++;
/* static const int */ _DIV = __u ++;
/* static const int */ _TABLE = __u ++;
/* static const int */ _WAV_AUDIO = __u ++;
/* static const int */ _GENERIC_AUDIO = __u ++;
/* static const string */ _SPAN_ID = '<span id="';
/* static const string */ _SPAN_STYLE = '<span style="';
/* static const string */ _BRACKET_SPAN = '"></span>';
/* static const string */ _SPAN_END = "</span>";
/* static const string */ _IMG_ID = '<img src="" id="';
/* static const string */ _IMG_STYLE = '<img style="';
/* static const string */ _SRC_QUOTES = '" src="';
/* static const string */ _BGSOUND_ID = '<bgsound src="" loop="0" volume="0" balance="0" id="';
/* static const string */ _A_ID = '<a href="#" download="" id="';
/* static const string */ _LABEL_FOR = '<label for="';
/* static const string */ _ID_QUOTES = '" id="';
/* static const string */ _INPUT_TEXT_ID = '<input type="text" id="';
/* static const string */ _INPUT_FILE_ID = '<input type="file" id="';
/* static const string */ _QUOTES_BRACKET = '">';
/* static const string */ _BRACKET_A = '"></a>';
/* static const string */ _A_END = "</a>";
/* static const string */ _BRACKET_LABEL = '"></label>';
/* static const string */ _LABEL_END = "</label>";
/* static const string */ _CANVAS_ID = '<canvas id="';
/* static const string */ _BRACKET_CANVAS = '"></canvas>';
/* static const string */ _DIV_ID = '<div id="';
/* static const string */ _BRACKET_DIV = '"></div>';
/* static const string */ _DIV_END = "</div>";
/* static const string */ _TABLE_ID = '<table id="';
/* static const string */ _BRACKET_TABLE = '"></table>';
/* static const string */ _TABLE_END = "</table>";
/* static const string */ _COLON = ":";
/* static const string */ _QUOTE = "'";
/* static const string */ _SPACE = " ";
/* static const string */ _COMMA = ",";
/* static const string */ _ROUND_BRACKET = ")";
/* static const string */ _QUOTE_ROUND_BRACKET = "')";
/* static const string */ _PERCENT_ROUND_BRACKET = "%)";
/* static const string */ _RECT = "rect(";
/* static const string */ _POLYGON = "polygon(";
/* static const string */ _URL = "url('";
/* static const string */ _URL_END = "') ";
/* static const string */ _CSS_FILTER = "filter";
/* static const string */ _MS_FILTER = "-ms-filter:'";
/* static const string */ _BASICIMAGE_GRAYSCALE = "progid:DXImageTransform.Microsoft.BasicImage(GrayScale=1)";
/* static const string */ _BASICIMAGE_INVERT = "progid:DXImageTransform.Microsoft.BasicImage(Invert=1)";
/* static const string */ _LIGHT = "Light";
/* static const string */ _ALPHA_BEGIN = "progid:DXImageTransform.Microsoft.Alpha(Opacity=";
/* static const string */ _ALPHA_END = ",Style=0)";
/* static const string */ _GRAYSCALE = "grayscale(100%)";
/* static const string */ _INVERT = "invert(100%)";
/* static const string */ _BRIGHTNESS = "brightness(";
/* static const string */ _QUOTE_BRACKET_AUTO = "'),auto";
/* static const string */ _COMMA_AUTO = ",auto";
/* static const string */ _0PX = "0px";
/* static const size_t */ _POSITION = (__u = 0 , __u ++);
/* static const size_t */ _WIDTH = __u ++;
/* static const size_t */ _HEIGHT = __u ++;
/* static const size_t */ _TOP = __u ++;
/* static const size_t */ _RIGHT = __u ++;
/* static const size_t */ _BOTTOM = __u ++;
/* static const size_t */ _LEFT = __u ++;
/* static const size_t */ _FONT_SIZE = __u ++;
/* static const size_t */ _FONT_FAMILY = __u ++;
/* static const size_t */ _FONT_STYLE = __u ++;
/* static const size_t */ _FONT_WEIGHT = __u ++;
/* static const size_t */ _COLOR = __u ++;
/* static const size_t */ _MARGIN_TOP = __u ++;
/* static const size_t */ _MARGIN_RIGHT = __u ++;
/* static const size_t */ _MARGIN_BOTTOM = __u ++;
/* static const size_t */ _MARGIN_LEFT = __u ++;
/* static const size_t */ _BORDER_TOP_WIDTH = __u ++;
/* static const size_t */ _BORDER_TOP_STYLE = __u ++;
/* static const size_t */ _BORDER_TOP_COLOR = __u ++;
/* static const size_t */ _BORDER_RIGHT_WIDTH = __u ++;
/* static const size_t */ _BORDER_RIGHT_STYLE = __u ++;
/* static const size_t */ _BORDER_RIGHT_COLOR = __u ++;
/* static const size_t */ _BORDER_BOTTOM_WIDTH = __u ++;
/* static const size_t */ _BORDER_BOTTOM_STYLE = __u ++;
/* static const size_t */ _BORDER_BOTTOM_COLOR = __u ++;
/* static const size_t */ _BORDER_LEFT_WIDTH = __u ++;
/* static const size_t */ _BORDER_LEFT_STYLE = __u ++;
/* static const size_t */ _BORDER_LEFT_COLOR = __u ++;
/* static const size_t */ _PADDING_TOP = __u ++;
/* static const size_t */ _PADDING_RIGHT = __u ++;
/* static const size_t */ _PADDING_BOTTOM = __u ++;
/* static const size_t */ _PADDING_LEFT = __u ++;
/* static const size_t */ _Z_INDEX = __u ++;
/* static const size_t */ _VISIBILITY = __u ++;
/* static const size_t */ _DISPLAY = __u ++;
/* static const size_t */ _TEXT_ALIGN = __u ++;
/* static const size_t */ _WHITE_SPACE = __u ++;
/* static const size_t */ _LETTER_SPACING = __u ++;
/* static const size_t */ _LINE_HEIGHT = __u ++;
/* static const size_t */ _TEXT_DECORATION = __u ++;
/* static const size_t */ _OVERFLOW = __u ++;
/* static const size_t */ _BACKGROUND_REPEAT = __u ++;
/* static const size_t */ _BACKGROUND_ATTACHMENT = __u ++;
/* static const size_t */ _BACKGROUND_COLOR = __u ++;
/* static const size_t */ _BACKGROUND_IMAGE = __u ++;
/* static const size_t */ _BACKGROUND_POSITION = __u ++;
/* static const size_t */ _CLIP = __u ++;
/* static const size_t */ _CLIP_PATH = __u ++;
/* static const size_t */ _OPACITY = __u ++;
/* static const size_t */ _FILTER = __u ++;
/* static const size_t */ _CURSOR = __u ++;
/* static const size_t */ _SRC = __u ++;
/* static const size_t */ _LOOP = __u ++;
/* static const size_t */ _VOLUME = __u ++;
/* static const size_t */ _INNERHTML = __u ++;
/* static const size_t */ __STATIC = (__u = 0 , __u ++);
/* static const size_t */ __ABSOLUTE = __u ++;
/* static const size_t */ __SERIF = __u ++;
/* static const size_t */ __SANS_SERIF = __u ++;
/* static const size_t */ __CURSIVE = __u ++;
/* static const size_t */ __MONOSPACE = __u ++;
/* static const size_t */ __NORMAL = __u ++;
/* static const size_t */ __ITALIC = __u ++;
/* static const size_t */ __BOLD = __u ++;
/* static const size_t */ __NONE = __u ++;
/* static const size_t */ __SOLID = __u ++;
/* static const size_t */ __REPEAT = __u ++;
/* static const size_t */ __REPEAT_X = __u ++;
/* static const size_t */ __REPEAT_Y = __u ++;
/* static const size_t */ __NO_REPEAT = __u ++;
/* static const size_t */ __SCROLL = __u ++;
/* static const size_t */ __FIXED = __u ++;
/* static const size_t */ __LEFT = __u ++;
/* static const size_t */ __CENTER = __u ++;
/* static const size_t */ __RIGHT = __u ++;
/* static const size_t */ __JUSTIFY = __u ++;
/* static const size_t */ __PRE = __u ++;
/* static const size_t */ __NOWRAP = __u ++;
/* static const size_t */ __OVERLINE = __u ++;
/* static const size_t */ __UNDERLINE = __u ++;
/* static const size_t */ __LINE_THROUGH = __u ++;
/* static const size_t */ __INLINE = __u ++;
/* static const size_t */ __BLOCK = __u ++;
/* static const size_t */ __VISIBLE = __u ++;
/* static const size_t */ __HIDDEN = __u ++;
/* static const size_t */ __AUTO = __u ++;
/* static const size_t */ __DEFAULT = __u ++;
/* static const size_t */ __CROSSHAIR = __u ++;
/* static const size_t */ __MOVE = __u ++;
/* static const size_t */ __NS_RESIZE = __u ++;
/* static const size_t */ __NWSE_RESIZE = __u ++;
/* static const size_t */ __EW_RESIZE = __u ++;
/* static const size_t */ __NESW_RESIZE = __u ++;
/* static const size_t */ __USERFONTS = 100;
/* static const size_t */ __P_GOTHIC = (__u = __USERFONTS , __u ++);
/* static const size_t */ __BITMAP = __u ++;
/* static const size_t */ __JIS = __u ++;
/* static const int */ _OPACITY_MAX = 100;
/* static const int */ _STRENGTH_MAX = 100;
/* static const int */ _STRENGTH_MIN = -100;
/* static const int */ _STRENGTH = _STRENGTH_MAX - _STRENGTH_MIN;
/* static const int */ _BRIGHTNESS_MAX = 200;
/* static const int */ _IE_VOLUME_MIN = -10000;
/* static const double */ _VOLUME_MAX = 1;
/* static double */ _WAV_MAX = 0.325;
/* static const size_t */ _BOOL_GRAYSCALE = (__u = 1 , __u ++);
/* static const size_t */ _BOOL_INVERT = __u ++;
/* static const size_t */ _INT_BRIGHTNESS = __u ++;
/* static const size_t */ _INT_OPACITY = __u ++;
/* static const size_t */ _STYLE_DECL = 1;
/* static const size_t */ _VALUE_CACHE = 2;
/* static const size_t */ _AP_LENGTH = 3;
/* static string[] */ _PROPERTY = [];

   _PROPERTY[_POSITION] = "position";
   _PROPERTY[_WIDTH] = "width";
   _PROPERTY[_HEIGHT] = "height";
   _PROPERTY[_TOP] = "top";
   _PROPERTY[_RIGHT] = "right";
   _PROPERTY[_BOTTOM] = "bottom";
   _PROPERTY[_LEFT] = "left";
   _PROPERTY[_FONT_SIZE] = "font-size";
   _PROPERTY[_FONT_FAMILY] = "font-family";
   _PROPERTY[_FONT_STYLE] = "font-style";
   _PROPERTY[_FONT_WEIGHT] = "font-weight";
   _PROPERTY[_COLOR] = "color";
   _PROPERTY[_MARGIN_TOP] = "margin-top";
   _PROPERTY[_MARGIN_RIGHT] = "margin-right";
   _PROPERTY[_MARGIN_BOTTOM] = "margin-bottom";
   _PROPERTY[_MARGIN_LEFT] = "margin-left";
   _PROPERTY[_BORDER_TOP_WIDTH] = "border-top-width";
   _PROPERTY[_BORDER_TOP_STYLE] = "border-top-style";
   _PROPERTY[_BORDER_TOP_COLOR] = "border-top-color";
   _PROPERTY[_BORDER_RIGHT_WIDTH] = "border-right-width";
   _PROPERTY[_BORDER_RIGHT_STYLE] = "border-right-style";
   _PROPERTY[_BORDER_RIGHT_COLOR] = "border-right-color";
   _PROPERTY[_BORDER_BOTTOM_WIDTH] = "border-bottom-width";
   _PROPERTY[_BORDER_BOTTOM_STYLE] = "border-bottom-style";
   _PROPERTY[_BORDER_BOTTOM_COLOR] = "border-bottom-color";
   _PROPERTY[_BORDER_LEFT_WIDTH] = "border-left-width";
   _PROPERTY[_BORDER_LEFT_STYLE] = "border-left-style";
   _PROPERTY[_BORDER_LEFT_COLOR] = "border-left-color";
   _PROPERTY[_PADDING_TOP] = "padding-top";
   _PROPERTY[_PADDING_RIGHT] = "padding-right";
   _PROPERTY[_PADDING_BOTTOM] = "padding-bottom";
   _PROPERTY[_PADDING_LEFT] = "padding-left";
   _PROPERTY[_Z_INDEX] = "z-index";
   _PROPERTY[_VISIBILITY] = "visibility";
   _PROPERTY[_DISPLAY] = "display";
   _PROPERTY[_TEXT_ALIGN] = "text-align";
   _PROPERTY[_WHITE_SPACE] = "white-space";
   _PROPERTY[_LETTER_SPACING] = "letter-spacing";
   _PROPERTY[_LINE_HEIGHT] = "line-height";
   _PROPERTY[_TEXT_DECORATION] = "text-decoration";
   _PROPERTY[_OVERFLOW] = "overflow";
   _PROPERTY[_BACKGROUND_REPEAT] = "background-repeat";
   _PROPERTY[_BACKGROUND_ATTACHMENT] = "background-attachment";
   _PROPERTY[_BACKGROUND_COLOR] = "background-color";
   _PROPERTY[_BACKGROUND_IMAGE] = "background-image";
   _PROPERTY[_BACKGROUND_POSITION] = "background-position";
   _PROPERTY[_CLIP] = "clip";
   _PROPERTY[_CLIP_PATH] = "clip-path";
   _PROPERTY[_OPACITY] = "opacity";
   _PROPERTY[_FILTER] = _WEBKIT ? "-webkit-filter" : _CSS_FILTER;
   _PROPERTY[_CURSOR] = "cursor";

/* static string[] */ _JS_PROPERTY = [];

   _JS_PROPERTY[_POSITION] = "position";
   _JS_PROPERTY[_WIDTH] = "width";
   _JS_PROPERTY[_HEIGHT] = "height";
   _JS_PROPERTY[_TOP] = "top";
   _JS_PROPERTY[_RIGHT] = "right";
   _JS_PROPERTY[_BOTTOM] = "bottom";
   _JS_PROPERTY[_LEFT] = "left";
   _JS_PROPERTY[_FONT_SIZE] = "fontSize";
   _JS_PROPERTY[_FONT_FAMILY] = "fontFamily";
   _JS_PROPERTY[_FONT_STYLE] = "fontStyle";
   _JS_PROPERTY[_FONT_WEIGHT] = "fontWeight";
   _JS_PROPERTY[_COLOR] = "color";
   _JS_PROPERTY[_MARGIN_TOP] = "marginTop";
   _JS_PROPERTY[_MARGIN_RIGHT] = "marginRight";
   _JS_PROPERTY[_MARGIN_BOTTOM] = "marginBottom";
   _JS_PROPERTY[_MARGIN_LEFT] = "marginLeft";
   _JS_PROPERTY[_BORDER_TOP_WIDTH] = "borderTopWidth";
   _JS_PROPERTY[_BORDER_TOP_STYLE] = "borderTopStyle";
   _JS_PROPERTY[_BORDER_TOP_COLOR] = "borderTopColor";
   _JS_PROPERTY[_BORDER_RIGHT_WIDTH] = "borderRightWidth";
   _JS_PROPERTY[_BORDER_RIGHT_STYLE] = "borderRightStyle";
   _JS_PROPERTY[_BORDER_RIGHT_COLOR] = "borderRightColor";
   _JS_PROPERTY[_BORDER_BOTTOM_WIDTH] = "borderBottomWidth";
   _JS_PROPERTY[_BORDER_BOTTOM_STYLE] = "borderBottomStyle";
   _JS_PROPERTY[_BORDER_BOTTOM_COLOR] = "borderBottomColor";
   _JS_PROPERTY[_BORDER_LEFT_WIDTH] = "borderLeftWidth";
   _JS_PROPERTY[_BORDER_LEFT_STYLE] = "borderLeftStyle";
   _JS_PROPERTY[_BORDER_LEFT_COLOR] = "borderLeftColor";
   _JS_PROPERTY[_PADDING_TOP] = "paddingTop";
   _JS_PROPERTY[_PADDING_RIGHT] = "paddingRight";
   _JS_PROPERTY[_PADDING_BOTTOM] = "paddingBottom";
   _JS_PROPERTY[_PADDING_LEFT] = "paddingLeft";
   _JS_PROPERTY[_Z_INDEX] = "zIndex";
   _JS_PROPERTY[_VISIBILITY] = "visibility";
   _JS_PROPERTY[_DISPLAY] = "display";
   _JS_PROPERTY[_TEXT_ALIGN] = "textAlign";
   _JS_PROPERTY[_WHITE_SPACE] = "whiteSpace";
   _JS_PROPERTY[_LETTER_SPACING] = "letterSpacing";
   _JS_PROPERTY[_LINE_HEIGHT] = "lineHeight";
   _JS_PROPERTY[_TEXT_DECORATION] = "textDecoration";
   _JS_PROPERTY[_OVERFLOW] = "overflow";
   _JS_PROPERTY[_BACKGROUND_REPEAT] = "backgroundRepeat";
   _JS_PROPERTY[_BACKGROUND_ATTACHMENT] = "backgroundAttachment";
   _JS_PROPERTY[_BACKGROUND_COLOR] = "backgroundColor";
   _JS_PROPERTY[_BACKGROUND_IMAGE] = "backgroundImage";
   _JS_PROPERTY[_BACKGROUND_POSITION] = "backgroundPosition";
   _JS_PROPERTY[_CLIP] = "clip";
   _JS_PROPERTY[_CLIP_PATH] = "clipPath";
   _JS_PROPERTY[_OPACITY] = "opacity";
   _JS_PROPERTY[_FILTER] = _WEBKIT ? "webkitFilter" : _CSS_FILTER;
   _JS_PROPERTY[_CURSOR] = "cursor";
   _JS_PROPERTY[_SRC] = "src";
   _JS_PROPERTY[_LOOP] = "loop";
   _JS_PROPERTY[_VOLUME] = "volume";
   _JS_PROPERTY[_INNERHTML] = "innerHTML";

/* static T[][] */ _VALUE = [];

      __u = [];
      __u[__STATIC] = "static";
      __u[__ABSOLUTE] = "absolute";
      __u[__FIXED] = "fixed";
   _VALUE[_POSITION] = __u;
      __u = [];
      __u[__SERIF] = "serif";
      __u[__SANS_SERIF] = "sans-serif";
      __u[__CURSIVE] = "cursive";
      __u[__MONOSPACE] = "monospace";
      __u[__P_GOTHIC] = "メイリオ,'MS UI Gothic','ＭＳ Ｐゴシック',sans-serif";
      __u[__BITMAP] = "'MS UI Gothic','ＭＳ Ｐゴシック','ＭＳ ゴシック',sans-serif";
      __u[__JIS] = "mScrollJ-woff2,mScrollJ-woff,mScrollJ-eot,mScrollJ,OCRB,monospace";
   _VALUE[_FONT_FAMILY] = __u;
      __u = [];
      __u[__NORMAL] = "normal";
      __u[__ITALIC] = "italic";
   _VALUE[_FONT_STYLE] = __u;
      __u = [];
      __u[__NORMAL] = "normal";
      __u[__BOLD] = "bold";
   _VALUE[_FONT_WEIGHT] = __u;
      __u = [];
      __u[__NONE] = "none";
      __u[__SOLID] = "solid";
   _VALUE[_BORDER_TOP_STYLE] = __u;
      __u = [];
      __u[__NONE] = "none";
      __u[__SOLID] = "solid";
   _VALUE[_BORDER_RIGHT_STYLE] = __u;
      __u = [];
      __u[__NONE] = "none";
      __u[__SOLID] = "solid";
   _VALUE[_BORDER_BOTTOM_STYLE] = __u;
      __u = [];
      __u[__NONE] = "none";
      __u[__SOLID] = "solid";
   _VALUE[_BORDER_LEFT_STYLE] = __u;
      __u = [];
      __u[__VISIBLE] = "visible";
      __u[__HIDDEN] = "hidden";
   _VALUE[_VISIBILITY] = __u;
      __u = [];
      __u[__INLINE] = "inline";
      __u[__BLOCK] = "block";
      __u[__NONE] = "none";
   _VALUE[_DISPLAY] = __u;
      __u = [];
      __u[__LEFT] = "left";
      __u[__CENTER] = "center";
      __u[__RIGHT] = "right";
      __u[__JUSTIFY] = "justify";
   _VALUE[_TEXT_ALIGN] = __u;
      __u = [];
      __u[__NORMAL] = "normal";
      __u[__PRE] = "pre";
      __u[__NOWRAP] = "nowrap";
   _VALUE[_WHITE_SPACE] = __u;
      __u = [];
      __u[__NONE] = "none";
      __u[__OVERLINE] = "overline";
      __u[__UNDERLINE] = "underline";
      __u[__LINE_THROUGH] = "line-through";
   _VALUE[_TEXT_DECORATION] = __u;
      __u = [];
      __u[__VISIBLE] = "visible";
      __u[__HIDDEN] = "hidden";
      __u[__SCROLL] = "scroll";
   _VALUE[_OVERFLOW] = __u;
      __u = [];
      __u[__REPEAT] = "repeat";
      __u[__REPEAT_X] = "repeat-x";
      __u[__REPEAT_Y] = "repeat-y";
      __u[__NO_REPEAT] = "no-repeat";
   _VALUE[_BACKGROUND_REPEAT] = __u;
      __u = [];
      __u[__SCROLL] = "scroll";
      __u[__FIXED] = "fixed";
   _VALUE[_BACKGROUND_ATTACHMENT] = __u;
      __u = [];
      __u[0] = _WEBKIT || _MSIE_VERSION === 0 ? false : 0;
      __u[1] = _WEBKIT || _MSIE_VERSION === 0 ? true : -1;
   _VALUE[_LOOP] = __u;

/* static T[][] */ _VALUE2 = [];

      __u = [];
      __u[__AUTO] = "auto";
      __u[__DEFAULT] = "default";
      __u[__CROSSHAIR] = "crosshair";
      __u[__MOVE] = "move";
      __u[__NS_RESIZE] = "ns-resize";
      __u[__NWSE_RESIZE] = "nwse-resize";
      __u[__EW_RESIZE] = "ew-resize";
      __u[__NESW_RESIZE] = "nesw-resize";
   _VALUE2[_CURSOR] = __u;

/* static const string[] */ _UNIT = [];

   _UNIT[_WIDTH] = "px";
   _UNIT[_HEIGHT] = "px";
   _UNIT[_TOP] = "px";
   _UNIT[_RIGHT] = "px";
   _UNIT[_BOTTOM] = "px";
   _UNIT[_LEFT] = "px";
   _UNIT[_FONT_SIZE] = "px";
   _UNIT[_MARGIN_TOP] = "px";
   _UNIT[_MARGIN_RIGHT] = "px";
   _UNIT[_MARGIN_BOTTOM] = "px";
   _UNIT[_MARGIN_LEFT] = "px";
   _UNIT[_BORDER_TOP_WIDTH] = "px";
   _UNIT[_BORDER_RIGHT_WIDTH] = "px";
   _UNIT[_BORDER_BOTTOM_WIDTH] = "px";
   _UNIT[_BORDER_LEFT_WIDTH] = "px";
   _UNIT[_PADDING_TOP] = "px";
   _UNIT[_PADDING_RIGHT] = "px";
   _UNIT[_PADDING_BOTTOM] = "px";
   _UNIT[_PADDING_LEFT] = "px";
   _UNIT[_Z_INDEX] = _EMPTY;
   _UNIT[_LETTER_SPACING] = "px";
   _UNIT[_LINE_HEIGHT] = "px";
   _UNIT[_BACKGROUND_POSITION] = "px";
   _UNIT[_CLIP] = "px";
   _UNIT[_CLIP_PATH] = "px";
   _UNIT[_OPACITY] = _EMPTY;

/* static const string (*)(size_t, const T[]) const[] */ _PARSE = [];

   _PARSE[_BACKGROUND_IMAGE] = function (Off_, Args_)
      {
      var u = _PROPERTY[_BACKGROUND_IMAGE];

      u += _COLON;

      return (u += _PARSE_A[_BACKGROUND_IMAGE](Off_, Args_));
      };

   _PARSE[_BACKGROUND_POSITION] = function (Off_, Args_)
      {
      var u = _PROPERTY[_BACKGROUND_POSITION];

      u += _COLON;

      return (u += _PARSE_A[_BACKGROUND_POSITION](Off_, Args_));
      };

   _PARSE[_CLIP] = function (Off_, Args_)
      {
      var u = _PROPERTY[_CLIP];

      u += _COLON;

      return (u += _PARSE_A[_CLIP](Off_, Args_));
      };

   _PARSE[_CLIP_PATH] = function (Off_, Args_)
      {
      var u = _PROPERTY[_CLIP_PATH];

      u += _COLON;

      return (u += _PARSE_A[_CLIP_PATH](Off_, Args_));
      };

   _PARSE[_OPACITY] =

         _MSIE_VERSION < 7 || _MSIE_VERSION === 9 ? function (Off_, Args_)
      {
      var u;
      var v = _PARSE_A[_OPACITY](Off_, Args_);

      if (v !== _EMPTY)
         {
         u = _PROPERTY[_OPACITY];
         u += _COLON;

         return (u += v);
         }

      return (_EMPTY);
      }

         : function ()
      {
      return (_EMPTY);
      };

   _PARSE[_FILTER] =

         _MSIE_VERSION <= 7 ? function (Off_, Args_)
      {
      var u;
      var v = _PARSE_A[_FILTER](Off_, Args_);

      if (v !== _EMPTY)
         {
         u = _PROPERTY[_FILTER];
         u += _COLON;

         return (u += v);
         }

      return (_EMPTY);
      }

         : function (Off_, Args_)
      {
      var u;
      var v = _PARSE_A[_FILTER](Off_, Args_);

      if (v !== _EMPTY)
         {
         u = _MS_FILTER;
         u += v;

         return (u += _QUOTE);
         }

      return (_EMPTY);
      };

   _PARSE[_CURSOR] = function (Off_, Args_)
      {
      var u;
      var v = _PARSE_A[_CURSOR](Off_, Args_);

      if (v !== _EMPTY)
         {
         u = _PROPERTY[_CURSOR];
         u += _COLON;

         return (u += v);
         }

      return (_EMPTY);
      };

/* static const T (*)(size_t, const T[]) const[] */ _PARSE_A = [];

   _PARSE_A[_BACKGROUND_IMAGE] = function (Off_, Args_)
      {
      var u = _URL;

      u += Args_[Off_ + 1];

      return (u += _QUOTE_ROUND_BRACKET);
      };

   _PARSE_A[_BACKGROUND_POSITION] = function (Off_, Args_)
      {
      var u;
      var s;

      for (u = _EMPTY , s = 1; ; )
         {
         u += Args_[Off_ + s];
         u += _UNIT[_BACKGROUND_POSITION];
         ++ s;

         if (s < _COMPARE_ARGS[_BACKGROUND_POSITION])
            {
            u += _SPACE;
            }
         else
            {
            break;
            }
         }

      return (u);
      };

   _PARSE_A[_CLIP] = function (Off_, Args_)
      {
      var u;
      var s;

      for (u = _RECT , s = 1; ; )
         {
         u += Args_[Off_ + s];
         u += _UNIT[_CLIP];
         ++ s;

         if (s < _COMPARE_ARGS[_CLIP])
            {
            u += _SPACE;
            }
         else
            {
            u += _ROUND_BRACKET;

            break;
            }
         }

      return (u);
      };

   _PARSE_A[_CLIP_PATH] = function (Off_, Args_)
      {
      var u = _POLYGON;
      var v = Args_[Off_ + 1];
      var w = Args_[Off_ + 2];
      var x = Args_[Off_ + 3];
      var y = Args_[Off_ + 4];

      u += y;
      u += _UNIT[_CLIP_PATH];
      u += _SPACE;
      u += v;
      u += _UNIT[_CLIP_PATH];
      u += _COMMA;
      u += w;
      u += _UNIT[_CLIP_PATH];
      u += _SPACE;
      u += v;
      u += _UNIT[_CLIP_PATH];
      u += _COMMA;
      u += w;
      u += _UNIT[_CLIP_PATH];
      u += _SPACE;
      u += x;
      u += _UNIT[_CLIP_PATH];
      u += _COMMA;
      u += y;
      u += _UNIT[_CLIP_PATH];
      u += _SPACE;
      u += x;
      u += _UNIT[_CLIP_PATH];

      return (u += _ROUND_BRACKET);
      };

   _PARSE_A[_OPACITY] = function (Off_, Args_)
      {
      var u = Args_[Off_ + 1];

      if (u < _OPACITY_MAX)
         {
         u /= _OPACITY_MAX;

         return (u += _UNIT[_OPACITY]);
         }

      return (_EMPTY);
      };

   _PARSE_A[_FILTER] =

         _MSIE_VERSION !== 9 ?
            _MSIE_VERSION < 7 ? function (Off_, Args_)
      {
      var u;
      var v;
      var w;
      var s;

      for (u = _EMPTY , v = false , s = 1; s < _COMPARE_ARGS[_FILTER]; ++ s)
         {
         if (s !== _INT_BRIGHTNESS)
            {
            if (Args_[Off_ + s])
               {
               if (v)
                  {
                  u += _SPACE;
                  }
               else
                  {
                  v = true;
                  }

               u += s === _BOOL_GRAYSCALE ? _GRAYSCALE : _INVERT;
               }
            }
         else
            {
            w = Args_[Off_ + s];

            if (w !== 0)
               {
               if (v)
                  {
                  u += _SPACE;
                  }

               u += _BRIGHTNESS;
               u += _FLOOR((w + _STRENGTH_MAX) / _STRENGTH * _BRIGHTNESS_MAX);
               u += _PERCENT_ROUND_BRACKET;
               }
            }
         }

      return (u);
      }

            : function (Off_, Args_)
      {
      var u;
      var v;
      var w;
      var s;

      for (u = _EMPTY , v = false , s = 1; s < _COMPARE_ARGS[_FILTER]; ++ s)
         {
         if (s !== _INT_OPACITY)
            {
            if (s !== _INT_BRIGHTNESS ? Args_[Off_ + s] : Args_[Off_ + s] !== 0)
               {
               if (v)
                  {
                  u += _SPACE;
                  }
               else
                  {
                  v = true;
                  }

               u += s === _BOOL_GRAYSCALE ? _BASICIMAGE_GRAYSCALE
                  : s === _BOOL_INVERT ? _BASICIMAGE_INVERT : _LIGHT;
               }
            }
         else
            {
            w = Args_[Off_ + s];

            if (w < _OPACITY_MAX)
               {
               if (v)
                  {
                  u += _SPACE;
                  }

               u += _ALPHA_BEGIN;
               u += w;
               u += _ALPHA_END;
               }
            }
         }

      return (u);
      }

         :
            function (Off_, Args_)
      {
      var u;
      var v;
      var s;

      for (u = _EMPTY , v = false , s = 1; s < _COMPARE_ARGS[_FILTER]; ++ s)
         {
         if (s !== _INT_BRIGHTNESS ? Args_[Off_ + s] : Args_[Off_ + s] !== 0)
            {
            if (v)
               {
               u += _SPACE;
               }
            else
               {
               v = true;
               }

            u += s === _BOOL_GRAYSCALE ? _BASICIMAGE_GRAYSCALE
               : s === _BOOL_INVERT ? _BASICIMAGE_INVERT
               : _LIGHT;
            }
         }

      return (u);
      };

   _PARSE_A[_CURSOR] = function (Off_, Args_)
      {
      var u;
      var v = Args_[Off_ + 1];

      if (typeof v !== _TYPEOF_STRING)
         {
         return (_VALUE2[_CURSOR][v]);
         }
      else if (v !== _EMPTY)
         {
         u = _URL;
         u += v;
         v = Args_[Off_ + 2];

         if (v !== _NULL)
            {
            u += _URL_END;
            u += v;
            u += _SPACE;
            u += Args_[Off_ + 3];

            return (u += _COMMA_AUTO);
            }
         else
            {
            return (u += _QUOTE_BRACKET_AUTO);
            }
         }

      return (_EMPTY);
      };

   _PARSE_A[_VOLUME] =

         _WEBKIT || _MSIE_VERSION === 0 ? function (Off_, Args_)
      {
      return (_POW((Args_[Off_ + 1] - _IE_VOLUME_MIN) / -_IE_VOLUME_MIN, 10.23) *
         (_Tagname[Args_[0]] === _WAV_AUDIO ? _WAV_MAX : _VOLUME_MAX));
      }

         : function (Off_, Args_)
      {
      return (Args_[Off_ + 1]);
      };

/* static const size_t[] */ _ARGS = [];

   _ARGS[_BACKGROUND_IMAGE] = 2;
   _ARGS[_BACKGROUND_POSITION] = 3;
   _ARGS[_CLIP] = 5;
   _ARGS[_CLIP_PATH] = 5;
   _ARGS[_OPACITY] = 2;
   _ARGS[_FILTER] = 5;
   _ARGS[_CURSOR] = 4;
   _ARGS[_VOLUME] = 2;

/* static const size_t[] */ _COMPARE_ARGS = [];

   _COMPARE_ARGS[_BACKGROUND_IMAGE] = _ARGS[_BACKGROUND_IMAGE];
   _COMPARE_ARGS[_BACKGROUND_POSITION] = _ARGS[_BACKGROUND_POSITION];
   _COMPARE_ARGS[_CLIP] = _ARGS[_CLIP];
   _COMPARE_ARGS[_CLIP_PATH] = _ARGS[_CLIP_PATH];
   _COMPARE_ARGS[_OPACITY] =
      _MSIE_VERSION < 7 || _MSIE_VERSION === 9 ?
         _ARGS[_OPACITY]
      :
         0;
   _COMPARE_ARGS[_FILTER] =
      _MSIE_VERSION === 0 || _MSIE_VERSION === 9 ?
         _ARGS[_FILTER] - 1
      : _MSIE_VERSION !== 1 ?
         _ARGS[_FILTER]
      :
         0;
   _COMPARE_ARGS[_CURSOR] = _ARGS[_CURSOR];
   _COMPARE_ARGS[_VOLUME] = _ARGS[_VOLUME];

/* static const T[][] */ _DEFAULT_VALUE = [];

   _DEFAULT_VALUE[_BACKGROUND_POSITION] = [0, 0];
   _DEFAULT_VALUE[_CLIP] = [0, 600, 450, 0];
   _DEFAULT_VALUE[_CLIP_PATH] = [0, 600, 450, 0];
   _DEFAULT_VALUE[_FILTER] = [false, false, 0, _OPACITY_MAX];
   _DEFAULT_VALUE[_CURSOR] = [_EMPTY, _NULL, _NULL];

/* void */ _FRMPROC = function (/* void */)
   {
   try
      {
      _Timerid = true;
      _Frmproc();

      if (_Timerid)
         {
         ++ _Time;
         _SETTIMEOUT(_FRMPROC, _Frmrate);
         }
      else
         {
         _SETTIMEOUT(_SUBROUTINE, _Frmrate);
         }

      _Timerid = false;
      }
   catch (e)
      {
      _Timerid = false;
      _Pwr = _Exception(e);

      if (_Pwr)
         {
         ++ _Time;
         _SETTIMEOUT(_FRMPROC, _Frmrate);
         }
      }
   };

/* void */ _SUBROUTINE = function (/* void */)
   {
   try
      {
      if (_Subroutine())
         {
         _SETTIMEOUT(_SUBROUTINE, _Frmrate);
         }
      else
         {
         ++ _Time;
         _SETTIMEOUT(_FRMPROC, _Frmrate);
         }
      }
   catch (e)
      {
      _Pwr = _Exception(e);

      if (_Pwr)
         {
         ++ _Time;
         _SETTIMEOUT(_FRMPROC, _Frmrate);
         }
      }
   };

/* T */ _KDOWN = function (/* T */Event_)
   {
   Event_ = Event_ !== _UNDEFINED ? Event_[_Key] : _WINDOW[_EVENT][_Key];

   if (Event_ in _Press)
      {
      if (_Press[Event_])
         {
         _Press[Event_] = false;
         _Input(Event_);
         }

      if (_Prevent || Event_ in _Default)
         {
         return (false);
         }
      }
   };

/* T */ _KUP = function (/* T */Event_)
   {
   Event_ = Event_ !== _UNDEFINED ? Event_[_Key] : _WINDOW[_EVENT][_Key];

   if (Event_ in _Press)
      {
      if (! _Press[Event_])
         {
         _Press[Event_] = true;
         _Ku(Event_);
         }

      if (_Prevent || Event_ in _Default)
         {
         return (false);
         }
      }
   };

/* T */ _CANCEL = function (/* T */)
   {
   return (false);
   };

/* string */ _CSS = function (/* const T[] */Args_) /* const */
   {
   var u;
   var v;
   var w;
   var s;

   for (u = _EMPTY , w = false , s = 1; ; )
      {
      if (Args_[s] in _PARSE)
         {
         v = _PARSE[Args_[s]](s, Args_);

         if (v !== _EMPTY)
            {
            if (w)
               {
               u += _SEMICOLON;
               }
            else
               {
               w = true;
               }

            u += v;
            }

         s += _ARGS[Args_[s]];
         }
      else
         {
         if (w)
            {
            u += _SEMICOLON;
            }
         else
            {
            w = true;
            }

         u += _PROPERTY[Args_[s]];
         u += _COLON;

         if (Args_[s] in _VALUE)
            {
            u += _VALUE[Args_[s]][Args_[s + 1]];
            }
         else
            {
            u += Args_[s + 1];

            if (Args_[s] in _UNIT)
               {
               u += _UNIT[Args_[s]];
               }
            }

         s += 2;
         }

      if (s >= Args_[_LENGTH])
         {
         break;
         }
      }

   return (u);
   };

/* T */ _RESIZE = function (/* T */)
   {
   var u = _DOCUMENTELEMENT[_CLIENTHEIGHT] - _Height;
   var v = _DOCUMENTELEMENT[_CLIENTWIDTH] - _Width;

   if (u < 0)
      {
      u = 0;
      }

   u = _FLOOR(u / 2);
   u += _UNIT[_TOP];
   _BODY_STYLE[_JS_PROPERTY[_TOP]] = u;

   if (v < 0)
      {
      v = 0;
      }

   v = _FLOOR(v / 2);
   v += _UNIT[_LEFT];
   _BODY_STYLE[_JS_PROPERTY[_LEFT]] = v;
   };

/* T */ _RESIZE2 = function (/* T */)
   {
   var u = _DOCUMENTELEMENT[_CLIENTWIDTH];
   var v = _DOCUMENTELEMENT[_CLIENTHEIGHT];

   _Width = u;
   _Height = v;
   u += _UNIT[_WIDTH];
   _BODY_STYLE[_JS_PROPERTY[_WIDTH]] = u;
   v += _UNIT[_HEIGHT];
   _BODY_STYLE[_JS_PROPERTY[_HEIGHT]] = v;
   _BODY_STYLE[_JS_PROPERTY[_Clip]] = _PARSE_A[_Clip](0, [_Clip, 0, _Width, _Height, 0]);
   _Resize(_Width, _Height);
   };

/* void */ _CREATE_AUDIO =

      _WEBKIT || _MSIE_VERSION === 0 ? function (/* size_t */Elemid_)
   {
   var u;
   var v = Elemid_ * _AP_LENGTH;

   u = new _AUDIO();
   u[_AUTOPLAY] = true;
   u[_PRELOAD] = _AUTO;
   u[_JS_PROPERTY[_LOOP]] = false;
   u[_JS_PROPERTY[_VOLUME]] = _Tagname[Elemid_] === _WAV_AUDIO ? _WAV_MAX : _VOLUME_MAX;
   _Ap[v] = u;
   _Ap[v + _STYLE_DECL] = _NULL;
   u = [];
   u[_SRC] = _EMPTY;
   u[_LOOP] = 0;
   u[_VOLUME] = 0;
   _Ap[v + _VALUE_CACHE] = u;
   }

      : function (/* size_t */Elemid_)
   {
   var u = Elemid_ * _AP_LENGTH;
   var v = [];

   _Ap[u] = _DOCUMENT[_GETELEMENTBYID](_Id[Elemid_]);
   _Ap[u + _STYLE_DECL] = _NULL;
   v[_SRC] = _EMPTY;
   v[_LOOP] = 0;
   v[_VOLUME] = 0;
   _Ap[u + _VALUE_CACHE] = v;
   };

/* void */ _RESERVE =

      _MSIE_VERSION < 7 ? function (/* size_t, const T[] */)
   {
   }

      : function (/* size_t */Off_, /* const T[] */Args_)
   {
   var u = Args_[Off_ + _INT_BRIGHTNESS];

   if (Args_[Off_ + 1] !== _NULL && u !== 0)
      {
      _Ambients[Args_[0]] = u;

      if (_Length < Args_[0])
         {
         _Length = Args_[0];
         }

      if (_Reserve)
         {
         _Reserve = false;
         _SETTIMEOUT(_AMBIENT, 0);
         }
      }
   else
      {
      delete _Ambients[Args_[0]];
      }
   };

/* void */ _AMBIENT = function (/* void */)
   {
   var u;

   for (; 0 <= _Length; -- _Length)
      {
      if (_Length in _Ambients)
         {
         u = _Ap[_Length * _AP_LENGTH].filters.Light;
         u.Clear();

         if (_Ambients[_Length] > 0)
            {
            u.AddAmbient(0xFF, 0xFF, 0xFF, _STRENGTH_MAX);
            u.AddAmbient(0xFF, 0xFF, 0xFF, _Ambients[_Length]);
            }
         else
            {
            u.AddAmbient(0xFF, 0xFF, 0xFF, _STRENGTH_MAX + _Ambients[_Length]);
            }

         delete _Ambients[_Length];
         }
      }

   _Reserve = true;
   };

/* static void (*)(void) */ _Frmproc = function ()
   {
   };

/* static bool (*)(T) */ _Exception = function ()
   {
   return (false);
   };

/* static long */ _Frmrate = 15;
/* static bool */ _Timerid = false;
/* static long */ _Time = 0;
/* static bool */ _Pwr = false;

/* static bool (*)(void) */ _Subroutine = function ()
   {
   return (false);
   };

/* static bool[] */ _Press =
   {
   "9": true,
   "13": true, "16": true, "17": true, "18": true, "27": true,
   "32": true, "37": true, "38": true, "39": true, "40": true,
   "48": true, "49": true, "50": true, "51": true, "52": true,
   "53": true, "54": true, "55": true, "56": true, "57": true,
   "65": true, "66": true, "67": true, "68": true, "69": true,
   "70": true, "71": true, "72": true, "73": true, "74": true,
   "75": true, "76": true, "77": true, "78": true, "79": true,
   "80": true, "81": true, "82": true, "83": true, "84": true,
   "85": true, "86": true, "87": true, "88": true, "89": true,
   "90": true
   };

/* static void (*)(T) */ _Input = function ()
   {
   };

/* static void (*)(T) */ _Ku = function ()
   {
   };

/* static string */ _Key = _KEYCODE;
/* static bool */ _Prevent = true;
/* static T[] */ _Default = {};
/* static string */ _Temp = _EMPTY;
/* static string[] */ _Id = [];
/* static int[] */ _Tagname = [];
/* static size_t */ _Clip = _CLIP;
/* static long */ _Width = 600;
/* static long */ _Height = 450;

/* static void (*)(long, long) */ _Resize = function ()
   {
   };

/* static T[] */ _Ap = [];
/* static bool */ _Reserve = true;
/* static int[] */ _Ambients = [];
/* static int */ _Length = _EOF;

   __u = _NULL;
   __v = _NULL;
   __w = _NULL;
   __x = _NULL;
   __s = _NULL;
   __t = _NULL;
   __r = _NULL;

/* public: */

/* class */ std.bitset = function (_Bits)
      /*
       * <size_t>
       * <string>
       * <const std::bitset&>
       */
   {
   var _u;
   var _v;
   var _w;
   var _s;

   var _This = this;
   var _Size;
   var _Trim;
   var _Bytes;
   var _Words;

      if (arguments[_LENGTH] === 0)
         {
         return;
         }

   /* const std::bitset& */

   if (! (_This instanceof std.bitset))
      {
      return (new std.bitset(_Bits.size())["|="](_Bits));
      }

   /* private: */

      if (_Bits === 0 || _Bits === _EMPTY)
         {
         _Bits = 1;
         }

      _u = typeof _Bits === _TYPEOF_STRING;

   /* const size_t */ _Size = _u ? _Bits[_LENGTH] : _Bits;

      _v = _Size % _DIGITS;

   /* const int */ _Trim = _v !== 0 ? (1 << _v) - 1 : _WORD_MAX;
   /* const size_t */ _Bytes = _CEIL(_Size / _DIGITS);
   /* int[] */ _Words = [];

      for (_s = 0; _s < _Bytes; ++ _s)
         {
         _Words[_s] = 0;
         }

      if (_u)
         {
         _w = _Size - 1;

         for (_u = -1 , _s = 0; _s < _Size; ++ _s)
            {
            _v = _s % _DIGITS;

            if (_v === 0)
               {
               ++ _u;
               }

            if (_Bits[_CHARAT](_w - _s) !== _E0)
               {
               _Words[_u] |= 1 << _v;
               }
            }
         }

      _u = _NULL;
      _v = _NULL;
      _w = _NULL;
      _s = _NULL;
      _Bits = _NULL;

   /* public: */

   _This.at = function (Pos_, Val_)
         /*
          * bool at(size_t Pos_) const
          * std::bitset at(size_t Pos_, bool Val_)
          */
      {
      if (arguments[_LENGTH] === 2)
         {
         if (Val_)
            {
            _Words[_FLOOR(Pos_ / _DIGITS)] |= 1 << Pos_ % _DIGITS;
            }
         else
            {
            _Words[_FLOOR(Pos_ / _DIGITS)] &= ~(1 << Pos_ % _DIGITS);
            }

         return (_This);
         }

      return ((_Words[_FLOOR(Pos_ / _DIGITS)] & 1 << Pos_ % _DIGITS) !== 0);
      };

   /* bool */ _This.any = function (/* void */) /* const */
      {
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         if (_Words[s] !== 0)
            {
            return (true);
            }
         }

      return (false);
      };

   /* bool */ _This.none = function (/* void */) /* const */
      {
      return (! _This.any());
      };

   /* size_t */ _This.count = function (/* void */) /* const */
      {
      var u;
      var s;
      var t;

      for (u = 0 , s = 0; s < _Bytes; ++ s)
         {
         for (t = _Words[s]; t !== 0; t >>>= _BITS_NIBBLE)
            {
            u += _BITSPERHEX[t & 0xF];
            }
         }

      return (u);
      };

   /* size_t */ _This.size = function (/* void */) /* const */
      {
      return (_Size);
      };

   /* std::bitset */ _This.reset = function (/* void */)
      {
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         _Words[s] = 0;
         }

      return (_This);
      };

   /* std::bitset */ _This.flip = function (Pos_)
         /*
          * (void)
          * (size_t Pos_)
          */
      {
      var s;

      if (arguments[_LENGTH] === 1)
         {
         _Words[_FLOOR(Pos_ / _DIGITS)] ^= 1 << Pos_ % _DIGITS;
         }
      else
         {
         for (s = 0; s < _Bytes; ++ s)
            {
            _Words[s] = ~_Words[s];
            }

         _Words[_Bytes - 1] &= _Trim;
         }

      return (_This);
      };

   /* int */ _This._Getword = function (/* size_t */Wpos_) /* const */
      {
      return (Wpos_ < _Bytes ? _Words[Wpos_] : 0);
      };

   /* bool operator */ _This["=="] = function (/* const std::bitset */Right_) /* const */
      {
      var u = _Bytes - 1;
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         if (_Words[s] >>> 0 !== (Right_._Getword(s) & (s < u ? _WORD_MAX : _Trim)) >>> 0)
            {
            return (false);
            }
         }

      return (true);
      };

   /* bool operator */ _This["!="] = function (/* const std::bitset */Right_) /* const */
      {
      return (! _This["=="](Right_));
      };

   /* std::bitset operator */ _This["~"] = function (/* void */) /* const */
      {
      return (std.bitset(_This).flip());
      };

   /* std::bitset operator */ _This["&="] = function (/* const std::bitset */Right_)
      {
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         _Words[s] &= Right_._Getword(s);
         }

      return (_This);
      };

   /* std::bitset operator */ _This["|="] = function (/* const std::bitset */Right_)
      {
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         _Words[s] |= Right_._Getword(s);
         }

      _Words[_Bytes - 1] &= _Trim;

      return (_This);
      };

   /* std::bitset operator */ _This["^="] = function (/* const std::bitset */Right_)
      {
      var s;

      for (s = 0; s < _Bytes; ++ s)
         {
         _Words[s] ^= Right_._Getword(s);
         }

      _Words[_Bytes - 1] &= _Trim;

      return (_This);
      };

   /* std::bitset operator */ _This["&"] = function (/* const std::bitset */Right_) /* const */
      {
      return (std.bitset(_This)["&="](Right_));
      };

   /* std::bitset operator */ _This["|"] = function (/* const std::bitset */Right_) /* const */
      {
      return (std.bitset(_This)["|="](Right_));
      };

   /* std::bitset operator */ _This["^"] = function (/* const std::bitset */Right_) /* const */
      {
      return (std.bitset(_This)["^="](Right_));
      };

   /* std::bitset operator */ _This["<<="] = function (/* size_t */Right_)
      {
      var u = _FLOOR(Right_ / _DIGITS);
      var v = _Bytes - 1;
      var s;

      if (u !== 0)
         {
         for (s = v; 0 <= s; -- s)
            {
            _Words[s] = u <= s ? _Words[s - u] : 0;
            }
         }

      Right_ %= _DIGITS;

      if (Right_ !== 0)
         {
         u = _DIGITS - Right_;

         for (s = v; 0 < s; -- s)
            {
            _Words[s] = _Words[s] << Right_ | _Words[s - 1] >>> u;
            }

         _Words[0] <<= Right_;
         }

      _Words[v] &= _Trim;

      return (_This);
      };

   /* std::bitset operator */ _This[">>="] = function (/* size_t */Right_)
      {
      var u = _FLOOR(Right_ / _DIGITS);
      var v;
      var s;

      if (u !== 0)
         {
         for (s = 0; s < _Bytes; ++ s)
            {
            _Words[s] = s + u < _Bytes ? _Words[s + u] : 0;
            }
         }

      Right_ %= _DIGITS;

      if (Right_ !== 0)
         {
         u = _Bytes - 1;
         v = _DIGITS - Right_;

         for (s = 0; s < u; ++ s)
            {
            _Words[s] = _Words[s] >>> Right_ | _Words[s + 1] << v;
            }

         _Words[u] >>>= Right_;
         }

      return (_This);
      };

   /* std::bitset operator */ _This["<<"] = function (/* size_t */Right_) /* const */
      {
      return (std.bitset(_This)["<<="](Right_));
      };

   /* std::bitset operator */ _This[">>"] = function (/* size_t */Right_) /* const */
      {
      return (std.bitset(_This)[">>="](Right_));
      };

   /* string */ _This.to_string = function (/* void */) /* const */
      {
      var u;
      var v;
      var w;
      var s;

      for (u = _EMPTY , w = _Bytes - 1 , s = _Size - 1; 0 <= s; -- s)
         {
         v = s % _DIGITS;
         u += +((_Words[w] & 1 << v) !== 0);

         if (v === 0)
            {
            -- w;
            }
         }

      return (u);
      };

   /* long */ _This.to_ulong = function (/* size_t */Pos_, /* size_t */Length_) /* const */
      {
      var u = Pos_ + Length_;
      var v = u > _Size ? (u = _Size , _Bytes - 1) : _FLOOR((u - 1) / _DIGITS);
      var w = _FLOOR(Pos_ / _DIGITS);
      var x = Pos_ % _DIGITS;
      var y = _DIGITS - x;
      var z = w + 1;
      var r = u % _DIGITS;
      var q;
      var s;

      for (q = 0 , s = v; w < s; -- s)
         {
         q += ((_Words[s] & (
               s === v && r !== 0 ? (1 << r) - 1 : _WORD_MAX
            )) >>> 0) * _EXP2[(s - z) * _DIGITS + y];
         }

      return (q += (_Words[w] & (
            v === w && r !== 0 ? (1 << r) - 1 : _WORD_MAX
         )) >>> x);
      };

   /* std::bitset */ _This.replace = function (/* size_t */Pos_, /* size_t */Length_, /* long */Word_)
      {
      var u = Pos_ + Length_;
      var v = _Bytes - 1;
      var w = u > _Size ? (u = _Size , v) : _FLOOR((u - 1) / _DIGITS);
      var x = _FLOOR(Pos_ / _DIGITS);
      var y = Pos_ % _DIGITS;
      var z = _DIGITS - y;
      var r = x + 1;
      var q = u % _DIGITS;
      var s;

      Word_ %= _EXP2[Length_];

      for (s = w; x < s; -- s)
         {
         _Words[s] &= s === w && q !== 0 ? ~((1 << q) - 1) : 0;
         _Words[s] |= _FLOOR(Word_ / _EXP2[(s - r) * _DIGITS + z]);
         }

      _Words[x] &= ~((w === x && q !== 0 ? (1 << q) - 1 : _WORD_MAX) ^ (1 << y) - 1);
      _Words[x] |= Word_ % _EXP2[z] << y;
      _Words[v] &= _Trim;

      return (_This);
      };

      _This[_TOSTRING] = _This.to_string;
      _This[_VALUEOF] = _This[_TOSTRING];
   };

/* string */ std.to_binary = function (Decimal_, Length_) /* const */
      /*
       * (long Decimal_)
       * (long Decimal_, size_t Length_)
       */
   {
   return (_BASE_ENCODE(_LOG2, _EXP2, Decimal_, Length_));
   };

/* long */ std.to_decimal = function (/* string */Binary_) /* const */
   {
   return (_BASE_DECODE(_LOG2_MAX, _EXP2, Binary_));
   };

/* string */ std.to_hex = function (Dec_, Length_) /* const */
      /*
       * (long Dec_)
       * (long Dec_, size_t Length_)
       */
   {
   return (_BASE_ENCODE(_LOG16, _EXP16, Dec_, Length_));
   };

/* long */ std.to_dec = function (/* string */Hex_) /* const */
   {
   return (_BASE_DECODE(_LOG16_MAX, _EXP16, Hex_));
   };

/* string */ std.to_base64 = function (Base10_, Length_) /* const */
      /*
       * (long Base10_)
       * (long Base10_, size_t Length_)
       */
   {
   return (_BASE_ENCODE(_LOG64, _EXP64, Base10_, Length_));
   };

/* long */ std.to_base10 = function (/* string */Base64_) /* const */
   {
   return (_BASE_DECODE(_LOG64_MAX, _EXP64, Base64_));
   };

/* int */ std.sign = function (/* double */Data_) /* const */
   {
   return (Data_ < 0 ? -1 : Data_ === 0 ? 0 : 1);
   };

/* size_t */ std.rand = function (/* void */)
   {
   var u = _Rand1 ^ _Rand1 << 11;

   _Rand1 = _Rand2;
   _Rand2 = _Rand3;
   _Rand3 = _Rand4;
   _Rand4 = _Rand4 ^ _Rand4 >>> 19 ^ (u ^ u >>> 8);

   return (_Rand4 >>> 0);
   };

/* class */ std.basic_string = function (_Array, _Delimiter, _Counts)
      /*
       * <string>
       * <string, string>
       * <string, string, size_t>
       * <const std::basic_string&>
       */
   {
   var _u;
   var _v;
   var _s;

   var _This = this;
   var _Container;
   var _Size;

      if (arguments[_LENGTH] === 0)
         {
         return;
         }

   /* const std::basic_string& */

   if (! (_This instanceof std.basic_string))
      {
      return (_Array.substr(0, _Array.size()));
      }

   /* private: */

   /* string[] */ _Container = [];
   /* size_t */ _Size = 0;

      if (arguments[_LENGTH] === 1)
         {
         for (; _Size < _Array[_LENGTH]; ++ _Size)
            {
            _Container[_Size] = _Array[_CHARAT](_Size);
            }
         }
      else
         {
         if (arguments[_LENGTH] === 2)
            {
            _Counts = 1;
            }

         if (_Delimiter !== _EMPTY)
            {
            for (_v = 0 , _s = 0; ; _s = _u + _Delimiter[_LENGTH])
               {
               _u = _s < _Array[_LENGTH] ? _Array[_INDEXOF](_Delimiter, _s) : _EOF;

               if (_u !== _EOF)
                  {
                  if (_s !== _u)
                     {
                     if (_v === 0)
                        {
                        ++ _v;
                        _Container[_Size] = _Array[_SUBSTRING](_s, _u);
                        }
                     else
                        {
                        _Container[_Size] += _Array[_SUBSTRING](_s, _u);
                        }

                     if (_v < _Counts)
                        {
                        ++ _v;
                        }
                     else if (_Counts !== 0)
                        {
                        _v = 0;
                        ++ _Size;
                        }
                     }
                  }
               else
                  {
                  if (_s !== _Array[_LENGTH])
                     {
                     if (_v === 0)
                        {
                        _Container[_Size] = _Array[_SUBSTRING](_s, _Array[_LENGTH]);
                        }
                     else
                        {
                        _Container[_Size] += _Array[_SUBSTRING](_s, _Array[_LENGTH]);
                        }

                     ++ _Size;
                     }
                  else if (_v !== 0)
                     {
                     ++ _Size;
                     }

                  break;
                  }
               }
            }
         else if (_Counts !== 0)
            {
            for (_s = _Counts; _s <= _Array[_LENGTH]; ++ _Size , _s += _Counts)
               {
               _Container[_Size] = _Array[_SUBSTRING](_s - _Counts, _s);
               }

            if (_s - _Array[_LENGTH] !== _Counts)
               {
               _Container[_Size] = _Array[_SUBSTRING](_s - _Counts, _Array[_LENGTH]);
               ++ _Size;
               }
            }
         else if (_Array !== _EMPTY)
            {
            _Container[_Size] = _Array;
            ++ _Size;
            }
         }

      _u = _NULL;
      _v = _NULL;
      _s = _NULL;
      _Array = _NULL;
      _Delimiter = _NULL;
      _Counts = _NULL;

   /* public: */

   _This.at = function (Where_, Val_)
         /*
          * string at(size_t Where_) const
          * std::basic_string at(size_t Where_, string Val_)
          */
      {
      if (arguments[_LENGTH] === 2)
         {
         if (Val_ === _EMPTY)
            {
            Val_ = _E0;
            }

         if (_Size <= Where_)
            {
            _Container[_Size] = Val_;
            ++ _Size;
            }
         else
            {
            _Container[Where_] = Val_;
            }

         return (_This);
         }

      return (_Container[Where_]);
      };

   /* size_t */ _This.size = function (/* void */) /* const */
      {
      return (_Size);
      };

   /* bool */ _This.empty = function (/* void */) /* const */
      {
      return (_Size === 0);
      };

   /* std::basic_string */ _This.resize = function (Newsize_, Elem_)
         /*
          * (size_t Newsize_)
          * (size_t Newsize_, string Elem_)
          */
      {
      if (arguments[_LENGTH] === 1 || Elem_ === _EMPTY)
         {
         Elem_ = _E0;
         }

      for (; _Size < Newsize_; ++ _Size)
         {
         _Container[_Size] = Elem_;
         }

      _Size = Newsize_;

      return (_This);
      };

   /* std::basic_string */ _This.clear = function (/* void */)
      {
      return (_This.resize(0));
      };

   /* int */ _This.find = function (Check_, Off_) /* const */
         /*
          * (const std::basic_string Check_)
          * (const std::basic_string Check_, size_t Off_)
          */
      {
      var u;
      var v = Check_.size() - 1;
      var w;

      if (arguments[_LENGTH] === 1)
         {
         Off_ = 0;
         }

      for (u = 0; Off_ < _Size; )
         {
         if (_Container[Off_] === Check_.at(u))
            {
            if (u === 0)
               {
               w = Off_;
               }

            if (u === v)
               {
               return (w);
               }

            ++ u;
            ++ Off_;
            }
         else
            {
            Off_ -= u - 1;
            u = 0;
            }
         }

      return (_EOF);
      };

   /* int */ _This.rfind = function (Check_, Off_) /* const */
         /*
          * (const std::basic_string Check_)
          * (const std::basic_string Check_, size_t Off_)
          */
      {
      var u;
      var v = Check_.size() - 1;
      var w = v - 1;

      if (arguments[_LENGTH] === 1)
         {
         Off_ = _Size - 1;
         }

      for (u = v; 0 <= Off_; )
         {
         if (_Container[Off_] === Check_.at(u))
            {
            if (u === 0)
               {
               return (Off_);
               }

            -- u;
            -- Off_;
            }
         else
            {
            Off_ += w - u;
            u = v;
            }
         }

      return (_EOF);
      };

   /* std::basic_string */ _This.substr = function (/* size_t */Off_, /* size_t */Length_) /* const */
      {
      var u = new std.basic_string(_EMPTY);
      var s;

      for (s = 0; s < Length_; ++ s)
         {
         u.at(s, _Container[Off_ + s]);
         }

      return (u);
      };

   /* std::basic_string */ _This.replace = function (/* size_t */Off_, /* const std::basic_string */Array_)
      {
      var s;

      for (s = Array_.size() - 1; 0 <= s; -- s)
         {
         _Container[Off_ + s] = Array_.at(s);
         }

      return (_This);
      };

   /* std::basic_string */ _This.insert = function (/* size_t */Where_, /* const std::basic_string */Array_)
      {
      var u = Array_.size();
      var s;

      for (s = _Size - 1; Where_ <= s; -- s)
         {
         _Container[s + u] = _Container[s];
         }

      _Size += u;

      for (s = 0; s < u; ++ s)
         {
         _Container[Where_ + s] = Array_.at(s);
         }

      return (_This);
      };

   /* std::basic_string */ _This.erase = function (Where_, Length_)
         /*
          * (size_t Where_)
          * (size_t Where_, size_t Length_)
          */
      {
      if (arguments[_LENGTH] === 1)
         {
         Length_ = 1;
         }

      _Size -= Length_;

      for (; Where_ < _Size; ++ Where_)
         {
         _Container[Where_] = _Container[Where_ + Length_];
         }

      return (_This);
      };

   /* bool operator */ _This["=="] = function (/* const std::basic_string */Right_) /* const */
      {
      var s;

      if (_Size !== Right_.size())
         {
         return (false);
         }

      for (s = 0; s < _Size; ++ s)
         {
         if (_Container[s] !== Right_.at(s))
            {
            return (false);
            }
         }

      return (true);
      };

   /* bool operator */ _This["!="] = function (/* const std::basic_string */Right_) /* const */
      {
      return (! _This["=="](Right_));
      };

   /* std::basic_string operator */ _This["+="] = function (/* const std::basic_string */Right_)
      {
      var u = Right_.size();
      var s;

      for (s = 0; s < u; ++ s)
         {
         _Container[_Size + s] = Right_.at(s);
         }

      _Size += u;

      return (_This);
      };

   /* std::basic_string operator */ _This["+"] = function (/* const std::basic_string */Right_) /* const */
      {
      return (std.basic_string(_This)["+="](Right_));
      };

   /* string */ _This.to_string = function (/* void */) /* const */
      {
      var u;
      var s;

      for (u = _EMPTY , s = 0; s < _Size; ++ s)
         {
         u += _Container[s];
         }

      return (u);
      };

      _This[_TOSTRING] = _This.to_string;
      _This[_VALUEOF] = _This[_TOSTRING];
   };

/* int */ std.allocate = function (Array_, Reserve_)
      /*
       * (T[] Array_)
       * (T[] Array_, bool Reserve_)
       */
   {
   var s;

   for (s = 0; s < Array_[_LENGTH] && s in Array_; ++ s)
      {
      }

   if (s < Array_[_LENGTH])
      {
      Array_[s] = _UNDEFINED;

      return (s);
      }
   else if (arguments[_LENGTH] === 2
         && Reserve_
         && s < _SIZE_T_MAX)
      {
      Array_[s] = _UNDEFINED;

      return (s);
      }

   return (_EOF);
   };

/* void */ std.deallocate = function (Where_, Array_, Shrink_)
      /*
       * (size_t Where_, T[] Array_)
       * (size_t Where_, T[] Array_, bool Shrink_)
       */
   {
   delete Array_[Where_];

   if (arguments[_LENGTH] === 3 && Shrink_)
      {
      for (Where_ = Array_[_LENGTH] - 1; 0 <= Where_ && ! (Where_ in Array_); -- Where_)
         {
         }

      Array_[_LENGTH] = Where_ + 1;
      }
   };

/* void */ std.swap = function (/* size_t */Index1_, /* size_t */Index2_, /* T[] */Array1_ /*, ...*/)
   {
   var u;
   var v;
   var s;

   for (s = arguments[_LENGTH] - 1; 2 <= s; -- s)
      {
      v = arguments[s];
      u = v[Index1_];
      v[Index1_] = v[Index2_];
      v[Index2_] = u;
      }
   };

/* void */ std.reverse = function (/* size_t */Begin_, /* size_t */End_, /* T[] */Array1_ /*, ...*/)
   {
   var u = std.swap;

   for (-- arguments[1]; arguments[0] < arguments[1]; ++ arguments[0] , -- arguments[1])
      {
      u[_APPLY](std, arguments);
      }
   };

/* void */ std.random_shuffle = function (/* size_t */Begin_, /* size_t */End_, /* T[] */Array1_ /*, ...*/)
   {
   var u = Begin_;
   var v = u - 1;
   var w = std.swap;
   var s;

   for (s = End_ - u; 1 < s; -- s)
      {
      arguments[0] = s + v;
      arguments[1] = std.rand() % s + u;
      w[_APPLY](std, arguments);
      }
   };

/* T[][] */ std.slice = function (/* size_t */Begin_, /* size_t */End_, /* const T[] */Array1_ /*, ...*/) /* const */
   {
   var u = std.layered_array(arguments[_LENGTH] - 2);
   var v;
   var w;
   var s;
   var t;

   for (s = arguments[_LENGTH] - 1; 2 <= s; -- s)
      {
      w = u[s - 2];
      v = arguments[s];

      for (t = Begin_; t < End_; ++ t)
         {
         w[t - Begin_] = v[t];
         }
      }

   return (u);
   };

/* void */ std.replace = function (/* size_t */Off_, /* const T[][] */Slice_, /* T[] */Array1_ /*, ...*/)
   {
   var u;
   var v = Slice_[0][_LENGTH];
   var w;
   var s;
   var t;

   for (s = arguments[_LENGTH] - 3; 0 <= s; -- s)
      {
      w = arguments[2 + s];
      u = Slice_[s];

      for (t = 0; t < v; ++ t)
         {
         w[Off_ + t] = u[t];
         }
      }
   };

/* void */ std.insert = function (/* size_t */Where_, /* const T[][] */Slice_, /* T[] */Array1_ /*, ...*/)
   {
   var u;
   var v = Slice_[0][_LENGTH];
   var s;
   var t;

   for (s = arguments[_LENGTH] - 3; 0 <= s; -- s)
      {
      u = arguments[2 + s];

      for (t = u[_LENGTH] - 1; Where_ <= t; -- t)
         {
         u[t + v] = u[t];
         }
      }

   std.replace[_APPLY](std, arguments);
   };

/* void */ std.erase = function (/* size_t */Where_, /* size_t */Length_, /* T[] */Array1_ /*, ...*/)
   {
   var u;
   var v;
   var s;
   var t;

   for (s = arguments[_LENGTH] - 1; 2 <= s; -- s)
      {
      v = arguments[s];
      u = v[_LENGTH] - Length_;

      for (t = Where_; t < u; ++ t)
         {
         v[t] = v[t + Length_];
         }

      v[_LENGTH] = u;
      }
   };

/* void */ std.concat = function (/* const T[][] */Rights_, /* T[] */Array1_ /*, ...*/)
   {
   var u;
   var v;
   var w;
   var x;
   var s;
   var t;

   for (s = arguments[_LENGTH] - 2; 0 <= s; -- s)
      {
      w = arguments[1 + s];
      x = Rights_[s];
      v = x[_LENGTH];
      u = w[_LENGTH];

      for (t = 0; t < v; ++ t)
         {
         w[u + t] = x[t];
         }
      }
   };

/* T[][] */ std.layered_array = function (/* size_t */Size_) /* const */
   {
   var u = [];

   if (Size_ === 0)
      {
      Size_ = 1;
      }

   for (-- Size_; 0 <= Size_; -- Size_)
      {
      u[Size_] = [];
      }

   return (u);
   };

/* int */ std.enums = function (Val_)
      /*
       * (void)
       * (int Val_)
       */
   {
   return (arguments[_LENGTH] === 0 ?
         _Enum ++
      :
         (_Enum = Val_ , _Enum ++)
      );
   };

/* long */ std.time = function (Adjust_)
      /*
       * (void)
       * (long Adjust_)
       */
   {
   var u;

   if (arguments[_LENGTH] === 1)
      {
      _Milliseconds = new _DATE()[_GETTIME]();

      return (_Seconds = Adjust_);
      }

   u = _FLOOR((new _DATE()[_GETTIME]() - _Milliseconds) / _MILLIS);

   if (u < 0)
      {
      u = 0;
      }

   _Milliseconds += u * _MILLIS;

   return (_Seconds += u);
   };

/* string */ std.to_hours = function (Delimiter_, Time_) /* const */
      /*
       * (string Delimiter_)
       * (string Delimiter_, long Time_)
       */
   {
   var u;
   var v = arguments[_LENGTH] === 1 ? _Seconds : Time_;
   var w;
   var s;

   for (u = _EMPTY , s = _LOG60_MAX; 1 <= s; v %= _EXP60[s] , -- s)
      {
      w = _FLOOR(v / _EXP60[s]);

      if (s < _LOG60_MAX && w < _BASE_DECIMAL)
         {
         u += _E0;
         }

      u += w;
      u += Delimiter_;
      }

   if (v < _BASE_DECIMAL)
      {
      u += _E0;
      }

   return (u += v);
   };

/* class */ std.vector = function (_Data)
      /*
       * <>
       * <const char[]>
       */
   {
   var _u;

   var _This = this;
   var _Pos;
   var _Ptr;
   var _End;
   var _Index;
   var _Size;
   var _Word;
   var _Reserve;

      if (! (_This instanceof std.vector))
         {
         return;
         }

   /* private: */

   /* size_t */ _Pos = 0;
   /* size_t */ _Ptr = 0;
   /* size_t */ _End = 0;

      _u = arguments[_LENGTH] === 0;

   /* size_t */ _Index = _u ? 0 : _Data[_LENGTH];
   /* size_t */ _Size = _u ? 0x8000 : _Index;
   /* char[] */ _Word = _u ? new _UINT8ARRAY(_Size) : _Data;

   /* void */ _Reserve = function (/* void */)
      {
      var u;
      var s = _Size;

      if (_Size < 4)
         {
         _Size = 8;
         }
      else
         {
         _Size *= 2;
         }

      u = new _UINT8ARRAY(_Size);

      for (-- s; 0 <= s; -- s)
         {
         u[s] = _Word[s];
         }

      _Word = u;
      };

      _u = _NULL;
      _Data = _NULL;

   /* public: */

   /* char */ _This.at = function (/* size_t */Index_) /* const */
      {
      return (_Word[Index_]);
      };

   /* size_t */ _This.getptr = function (/* void */) /* const */
      {
      return (_Ptr);
      };

   /* size_t */ _This.length = function (/* void */) /* const */
      {
      return (_Index);
      };

   /* char[] */ _This.data = function (/* void */) /* const */
      {
      return (new _UINT8ARRAY(_Word[_BUFFER], _Word[_BYTEOFFSET], _Index));
      };

   /* size_t */ _This.read = function (/* size_t */Len_)
      {
      var u = _Pos + Len_;
      var v = _Ptr + _FLOOR((u - 1) / _BITS_CHAR);
      var w;
      var x;
      var y;
      var s;

      if (_Ptr < _Size)
         {
         w = 0;
         x = _Ptr + 1;
         y = _BITS_CHAR - _Pos;

         for (s = v; _Ptr < s; -- s)
            {
            if (s < _Size)
               {
               w |= _Word[s] << y + _BITS_CHAR * (s - x);
               }
            }

         w |= _Word[_Ptr] >>> _Pos;
         _Pos = u % _BITS_CHAR;
         _Ptr = _Pos === 0 ? v + 1 : v;

         return ((Len_ < _DIGITS ? w & (1 << Len_) - 1 : w) >>> 0);
         }
      else
         {
         _Pos = u % _BITS_CHAR;
         _Ptr = _Pos === 0 ? v + 1 : v;

         return (0);
         }
      };

   /* void */ _This.seek = function (Off_, Index_)
         /*
          * (void)
          * (int Off_)
          * (int Off_, size_t Index_)
          */
      {
      if (arguments[_LENGTH] === 0)
         {
         if (_Pos !== 0)
            {
            _Pos = 0;
            ++ _Ptr;
            }
         }
      else if (Off_ === _EOF)
         {
         _Pos = 0;
         _Ptr = arguments[_LENGTH] === 1 ? _Index : Index_;
         }
      else
         {
         _Pos -= Off_;

         if (_Pos < 0)
            {
            _Ptr += _FLOOR(_Pos / _BITS_CHAR);
            _Pos += _DIGITS;
            _Pos %= _BITS_CHAR;

            if (_Ptr < 0)
               {
               _Pos = 0;
               _Ptr = 0;
               }
            }
         }
      };

   /* void */ _This.fill = function (/* size_t */Index_, /* size_t */Bytes_, /* int */Data_)
      {
      var s;

      Bytes_ += Index_;

      for (s = Index_; s < Bytes_; ++ s)
         {
         _Word[s] |= Data_ >>> (s - Index_) * _BITS_CHAR;
         }
      };

   /* void */ _This.ate = function (/* int */Data_, /* size_t */Len_)
      {
      var u = _End + Len_;
      var v = u % _BITS_CHAR;
      var w = _Index + 1;
      var x = _BITS_CHAR - _End;
      var s = _Index + _FLOOR((u - 1) / _BITS_CHAR);

      u = v === 0 ? s + 1 : s;

      if (u >= _Size)
         {
         _Reserve();
         }

      for (; _Index < s; -- s)
         {
         _Word[s] = Data_ >>> x + _BITS_CHAR * (s - w);
         }

      _Word[_Index] |= Data_ << _End;
      _End = v;
      _Index = u;
      };

   /* void */ _This.end = function (/* void */)
      {
      if (_End !== 0)
         {
         _End = 0;
         ++ _Index;
         }
      };
   };

/* size_t */ std.hton = function (Data_, Len_) /* const */
      /*
       * (size_t Data_)
       * (size_t Data_, size_t Len_)
       */
   {
   var u = 0;
   var s;

   if (arguments[_LENGTH] === 2)
      {
      s = Len_ * _BITS_CHAR;

      if (s < _DIGITS)
         {
         Data_ %= 1 << s;
         }
      }
   else
      {
      s = _DIGITS;
      }

   for (s -= _BITS_CHAR; Data_ !== 0; s -= _BITS_CHAR)
      {
      u |= (Data_ & 0xFF) << s;
      Data_ >>>= _BITS_CHAR;
      }

   return (u >>> 0);
   };

/* const bool */ std.__use_strict__ = this === _UNDEFINED;

/* namespace */ std.zlib = _STD_ZLIB;

/* void */ _STD_ZLIB.deflate = function (Data_, Bs_, Cmp_, Fmt_)
      /*
       * (const char[] Data_, std::vector Bs_, bool Cmp_)
       * (const char[] Data_, std::vector Bs_, bool Cmp_, bool Fmt_)
       */
   {
   if (arguments[_LENGTH] === 4 && Fmt_)
      {
      Bs_.end();
      Bs_.ate(_CMFLG, _CMFLG_L);

      if (Cmp_)
         {
         _DEFLATE(_LZEXP(Data_), Bs_);
         }
      else
         {
         _DEFLATE0(Data_, Bs_);
         }

      Bs_.end();
      Bs_.ate(std.hton(_STD_ZLIB.adler32(Data_, 0, Data_[_LENGTH])), _DIGITS);
      }
   else if (Cmp_)
      {
      _DEFLATE(_LZEXP(Data_), Bs_);
      }
   else
      {
      _DEFLATE0(Data_, Bs_);
      }
   };

/* bool */ _STD_ZLIB.inflate = function (Data_, Bs_, Fmt_)
      /*
       * (std::vector Data_, std::vector Bs_)
       * (std::vector Data_, std::vector Bs_, bool Fmt_)
       */
   {
   var u;
   var v;

   if (arguments[_LENGTH] === 3 && Fmt_)
      {
      Data_.seek();
      u = Data_.read(_BITS_CHAR);

      if ((u & 0xF) === 0x8
            && u >>> _BITS_NIBBLE <= 0x7)
         {
         v = Data_.read(_BITS_CHAR);

         if ((v & 0x20) === 0
               && (u << _BITS_CHAR | v) % 0x1F === 0
               && (Bs_.end() , u = Bs_.length() , _INFLATE(Data_, Bs_)))
            {
            Data_.seek();

            return (std.hton(Data_.read(_DIGITS)) === _STD_ZLIB.adler32(Bs_, u, Bs_.length() - u));
            }
         }

      return (false);
      }
   else
      {
      return (_INFLATE(Data_, Bs_));
      }
   };

/* size_t */ _STD_ZLIB.adler32 = function (/* const T */Data_, /* size_t */Off_, /* size_t */Len_) /* const */
   {
   var u = 1;
   var v = 0;
   var w = Data_ instanceof std.vector;
   var s;
   var t;

   for (t = Off_; 0 < Len_; )
      {
      for (s = Len_ < _ADLER32_LEN ? Len_ : _ADLER32_LEN , Len_ -= s; 0 < s; -- s , ++ t)
         {
         u += w ? Data_.at(t) : Data_[t];
         v += u;
         }

      u %= _ADLER32_MOD;
      v %= _ADLER32_MOD;
      }

   return ((v << _ADLER32_HALF | u) >>> 0);
   };

/* size_t */ _STD_ZLIB.crc32 = function (/* const T */Data_, /* size_t */Off_, /* size_t */Len_) /* const */
   {
   var u = 0xFFFFFFFF;
   var v = Data_ instanceof std.vector;

   for (Len_ += Off_; Off_ < Len_; ++ Off_)
      {
      u = _CRC[(u ^ (v ? Data_.at(Off_) : Data_[Off_])) & 0xFF] ^ u >>> _BITS_CHAR;
      }

   return (~u >>> 0);
   };

/* size_t */ _STD_ZLIB.crc32a = function (/* int */Crc_, /* int */Data_) /* const */
   {
   return ((_CRC[(Crc_ ^ Data_) & 0xFF] ^ Crc_ >>> _BITS_CHAR) >>> 0);
   };

/* namespace */ std.html = _STD_HTML;

/* const bool */ _STD_HTML.webkit = _WEBKIT;
/* const int */ _STD_HTML.msie_version = _MSIE_VERSION;
/* const bool */ _STD_HTML.ms_edge = _MS_EDGE;
/* const bool */ _STD_HTML.ms_edg = _MS_EDG;
/* const size_t */ _STD_HTML.position = _POSITION;
/* const size_t */ _STD_HTML.width = _WIDTH;
/* const size_t */ _STD_HTML.height = _HEIGHT;
/* const size_t */ _STD_HTML.top = _TOP;
/* const size_t */ _STD_HTML.right = _RIGHT;
/* const size_t */ _STD_HTML.bottom = _BOTTOM;
/* const size_t */ _STD_HTML.left = _LEFT;
/* const size_t */ _STD_HTML.font_size = _FONT_SIZE;
/* const size_t */ _STD_HTML.font_family = _FONT_FAMILY;
/* const size_t */ _STD_HTML.font_style = _FONT_STYLE;
/* const size_t */ _STD_HTML.font_weight = _FONT_WEIGHT;
/* const size_t */ _STD_HTML.color = _COLOR;
/* const size_t */ _STD_HTML.margin_top = _MARGIN_TOP;
/* const size_t */ _STD_HTML.margin_right = _MARGIN_RIGHT;
/* const size_t */ _STD_HTML.margin_bottom = _MARGIN_BOTTOM;
/* const size_t */ _STD_HTML.margin_left = _MARGIN_LEFT;
/* const size_t */ _STD_HTML.border_top_width = _BORDER_TOP_WIDTH;
/* const size_t */ _STD_HTML.border_top_style = _BORDER_TOP_STYLE;
/* const size_t */ _STD_HTML.border_top_color = _BORDER_TOP_COLOR;
/* const size_t */ _STD_HTML.border_right_width = _BORDER_RIGHT_WIDTH;
/* const size_t */ _STD_HTML.border_right_style = _BORDER_RIGHT_STYLE;
/* const size_t */ _STD_HTML.border_right_color = _BORDER_RIGHT_COLOR;
/* const size_t */ _STD_HTML.border_bottom_width = _BORDER_BOTTOM_WIDTH;
/* const size_t */ _STD_HTML.border_bottom_style = _BORDER_BOTTOM_STYLE;
/* const size_t */ _STD_HTML.border_bottom_color = _BORDER_BOTTOM_COLOR;
/* const size_t */ _STD_HTML.border_left_width = _BORDER_LEFT_WIDTH;
/* const size_t */ _STD_HTML.border_left_style = _BORDER_LEFT_STYLE;
/* const size_t */ _STD_HTML.border_left_color = _BORDER_LEFT_COLOR;
/* const size_t */ _STD_HTML.padding_top = _PADDING_TOP;
/* const size_t */ _STD_HTML.padding_right = _PADDING_RIGHT;
/* const size_t */ _STD_HTML.padding_bottom = _PADDING_BOTTOM;
/* const size_t */ _STD_HTML.padding_left = _PADDING_LEFT;
/* const size_t */ _STD_HTML.z_index = _Z_INDEX;
/* const size_t */ _STD_HTML.visibility = _VISIBILITY;
/* const size_t */ _STD_HTML.display = _DISPLAY;
/* const size_t */ _STD_HTML.text_align = _TEXT_ALIGN;
/* const size_t */ _STD_HTML.white_space = _WHITE_SPACE;
/* const size_t */ _STD_HTML.letter_spacing = _LETTER_SPACING;
/* const size_t */ _STD_HTML.line_height = _LINE_HEIGHT;
/* const size_t */ _STD_HTML.text_decoration = _TEXT_DECORATION;
/* const size_t */ _STD_HTML.overflow = _OVERFLOW;
/* const size_t */ _STD_HTML.background_repeat = _BACKGROUND_REPEAT;
/* const size_t */ _STD_HTML.background_attachment = _BACKGROUND_ATTACHMENT;
/* const size_t */ _STD_HTML.background_color = _BACKGROUND_COLOR;
/* const size_t */ _STD_HTML.background_image = _BACKGROUND_IMAGE;
/* const size_t */ _STD_HTML.background_position = _BACKGROUND_POSITION;
/* const size_t */ _STD_HTML.clip = _CLIP;
/* const size_t */ _STD_HTML.clip_path = _CLIP_PATH;
/* const size_t */ _STD_HTML.opacity = _OPACITY;
/* const size_t */ _STD_HTML.filter = _FILTER;
/* const size_t */ _STD_HTML.cursor = _CURSOR;
/* const size_t */ _STD_HTML.src = _SRC;
/* const size_t */ _STD_HTML.loop = _LOOP;
/* const size_t */ _STD_HTML.volume = _VOLUME;
/* const size_t */ _STD_HTML.innerHTML = _INNERHTML;
/* const size_t */ _STD_HTML.cssStatic = __STATIC;
/* const size_t */ _STD_HTML.absolute = __ABSOLUTE;
/* const size_t */ _STD_HTML.serif = __SERIF;
/* const size_t */ _STD_HTML.sans_serif = __SANS_SERIF;
/* const size_t */ _STD_HTML.cursive = __CURSIVE;
/* const size_t */ _STD_HTML.monospace = __MONOSPACE;
/* const size_t */ _STD_HTML.normal = __NORMAL;
/* const size_t */ _STD_HTML.italic = __ITALIC;
/* const size_t */ _STD_HTML.bold = __BOLD;
/* const size_t */ _STD_HTML.none = __NONE;
/* const size_t */ _STD_HTML.solid = __SOLID;
/* const size_t */ _STD_HTML.repeat = __REPEAT;
/* const size_t */ _STD_HTML.repeat_x = __REPEAT_X;
/* const size_t */ _STD_HTML.repeat_y = __REPEAT_Y;
/* const size_t */ _STD_HTML.no_repeat = __REPEAT;
/* const size_t */ _STD_HTML.scroll = __SCROLL;
/* const size_t */ _STD_HTML.fixed = __FIXED;
/* const size_t */ _STD_HTML.Left = __LEFT;
/* const size_t */ _STD_HTML.center = __CENTER;
/* const size_t */ _STD_HTML.Right = __RIGHT;
/* const size_t */ _STD_HTML.justify = __JUSTIFY;
/* const size_t */ _STD_HTML.pre = __PRE;
/* const size_t */ _STD_HTML.nowrap = __NOWRAP;
/* const size_t */ _STD_HTML.overline = __OVERLINE;
/* const size_t */ _STD_HTML.underline = __UNDERLINE;
/* const size_t */ _STD_HTML.line_through = __LINE_THROUGH;
/* const size_t */ _STD_HTML.cssInline = __INLINE;
/* const size_t */ _STD_HTML.block = __BLOCK;
/* const size_t */ _STD_HTML.visible = __VISIBLE;
/* const size_t */ _STD_HTML.hidden = __HIDDEN;
/* const size_t */ _STD_HTML.auto = __AUTO;
/* const size_t */ _STD_HTML.cssDefault = __DEFAULT;
/* const size_t */ _STD_HTML.crosshair = __CROSSHAIR;
/* const size_t */ _STD_HTML.move = __MOVE;
/* const size_t */ _STD_HTML.ns_resize = __NS_RESIZE;
/* const size_t */ _STD_HTML.nwse_resize = __NWSE_RESIZE;
/* const size_t */ _STD_HTML.ew_resize = __EW_RESIZE;
/* const size_t */ _STD_HTML.nesw_resize = __NESW_RESIZE;
/* const size_t */ _STD_HTML.p_gothic = __P_GOTHIC;
/* const size_t */ _STD_HTML.bitmap = __BITMAP;
/* const size_t */ _STD_HTML.jis = __JIS;

/* void */ _STD_HTML.start = function (Frmproc_, Exception_, Frmrate_)
      /*
       * (void (*)(void) Frmproc_, bool (*)(T) Exception_)
       * (void (*)(void) Frmproc_, bool (*)(T) Exception_, long Frmrate_)
       */
   {
   if (! _Pwr)
      {
      _Frmproc = Frmproc_;
      _Exception = Exception_;

      if (arguments[_LENGTH] === 3)
         {
         _Frmrate = Frmrate_;
         }

      _Pwr = true;
      _SETTIMEOUT(_FRMPROC, _Frmrate);
      }
   };

/* long */ _STD_HTML.frames = function (/* void */) /* const */
   {
   return (_Time);
   };

/* void */ _STD_HTML.extend = function (/* bool (*)(void) */Ptr_)
   {
   if (_Timerid)
      {
      _Timerid = false;
      _Subroutine = Ptr_;
      }
   };

/* void */ _STD_HTML.register_input = function (Ptr_, Keymap_, Property_)
      /*
       * (void (*)(T) Ptr_)
       * (void (*)(T) Ptr_, const bool[] Keymap_, string Property_)
       */
   {
   if (arguments[_LENGTH] === 3)
      {
      _Press = Keymap_;
      _Key = Property_;
      }

   _Input = Ptr_;
   _Prevent = true;
   _Default = {};
   _DOCUMENT[_ONKEYDOWN] = _KDOWN;
   _DOCUMENT[_ONKEYUP] = _KUP;
   _DOCUMENT[_ONCONTEXTMENU] = _CANCEL;
   _DOCUMENT[_ONSELECTSTART] = _CANCEL;
   };

/* void */ _STD_HTML.prevent_transfer = function (/* void */)
   {
   _DOCUMENT[_ONDRAGSTART] = _CANCEL;
   _DOCUMENT[_ONDRAG] = _CANCEL;
   _DOCUMENT[_ONDRAGENTER] = _CANCEL;
   _DOCUMENT[_ONDRAGOVER] = _CANCEL;
   _DOCUMENT[_ONDROP] = _CANCEL;
   };

/* void */ _STD_HTML.use_kuproc = function (/* void (*)(T) */Ptr_)
   {
   _Ku = Ptr_;
   };

/* void */ _STD_HTML.allow_default = function (/* void */)
   {
   _Prevent = false;
   };

/* void */ _STD_HTML.prevent_default = function (/* T */Key1_ /*, ...*/)
   {
   var s;

   for (s = 0; s < arguments[_LENGTH]; ++ s)
      {
      _Default[arguments[s]] = true;
      }
   };

/* bool */ _STD_HTML.pressed = function (/* T */Key_) /* const */
   {
   return (Key_ in _Press && ! _Press[Key_]);
   };

/* string */ _STD_HTML.get_persistent =

      _MSIE_VERSION === 0 ? function (/* string */Prefix_) /* const */
   {
   var u;

   if (Prefix_ !== _EMPTY)
      {
      u = _WINDOW[_LOCALSTORAGE][_GETITEM](Prefix_);

      if (typeof u === _TYPEOF_STRING && u[_LENGTH] === _STORAGE_LENGTH)
         {
         return (u);
         }
      }

   return (_EMPTY);
   }

      : function (/* string */Prefix_) /* const */
   {
   var u;
   var v;
   var s;

   if (Prefix_ !== _EMPTY)
      {
      u = new std.basic_string(_DOCUMENT[_COOKIE], _SEMICOLON_SPACE);
      Prefix_ += _EQUAL;

      for (s = u.size() - 1; 0 <= s; -- s)
         {
         v = u.at(s);

         if (v[_INDEXOF](Prefix_, 0) === 0)
            {
            v = v[_SUBSTRING](Prefix_[_LENGTH], v[_LENGTH]);

            if (v[_LENGTH] === _STORAGE_LENGTH)
               {
               return (v);
               }

            break;
            }
         }
      }

   return (_EMPTY);
   };

/* void */ _STD_HTML.set_persistent =

      _MSIE_VERSION === 0 ? function (Prefix_, Base64_)
      /*
       * (string Prefix_)
       * (string Prefix_, string Base64_)
       */
   {
   if (Prefix_ !== _EMPTY)
      {
      if (arguments[_LENGTH] === 1)
         {
         _WINDOW[_LOCALSTORAGE][_REMOVEITEM](Prefix_);
         }
      else if (Base64_[_LENGTH] <= _STORAGE_LENGTH)
         {
         for (; Base64_[_LENGTH] < _STORAGE_LENGTH; Base64_ += _E0)
            {
            }

         _WINDOW[_LOCALSTORAGE][_SETITEM](Prefix_, Base64_);
         }
      }
   }

      : function (Prefix_, Base64_)
      /*
       * (string Prefix_)
       * (string Prefix_, string Base64_)
       */
   {
   if (Prefix_ !== _EMPTY)
      {
      if (arguments[_LENGTH] === 1)
         {
         _Temp = Prefix_;
         _Temp += _TRUNCATE;
         _DOCUMENT[_COOKIE] = _Temp;
         }
      else if (Base64_[_LENGTH] <= _STORAGE_LENGTH)
         {
         for (; Base64_[_LENGTH] < _STORAGE_LENGTH; Base64_ += _E0)
            {
            }

         _Temp = Prefix_;
         _Temp += _EQUAL;
         _Temp += Base64_;
         _Temp += _EXPIRES;
         _DOCUMENT[_COOKIE] = _Temp;
         }
      }

   _Temp = _EMPTY;
   };

/* std::bitset */ _STD_HTML.parse = function (/* string */Base64_) /* const */
   {
   var u = new std.bitset(_STORAGE_BITS);
   var s;

   if (Base64_ !== _EMPTY)
      {
      for (s = _STORAGE_LENGTH; _LOG64_MAX <= s; s -= _LOG64_MAX)
         {
         u.replace(_STORAGE_BITS - s * _LOG2_64,
            _WORD_LENGTH,
            std.to_base10(Base64_[_SUBSTRING](s - _LOG64_MAX, s)));
         }
      }

   return (u);
   };

/* string */ _STD_HTML.stringify = function (/* const std::bitset */Array_) /* const */
   {
   var u;
   var s;

   for (u = _EMPTY , s = _STORAGE_BITS - _WORD_LENGTH;
         0 <= s;
         s -= _WORD_LENGTH)
      {
      u += std.to_base64(Array_.to_ulong(s, _WORD_LENGTH), _LOG64_MAX);
      }

   return (u);
   };

/* void */ _STD_HTML.adjust_wav_volume = function (/* double */Wav_max_)
   {
   _WAV_MAX = Wav_max_;
   };

/* void */ _STD_HTML.remove_webkit_prefix = function (/* void */)
   {
   _PROPERTY[_FILTER] = _CSS_FILTER;
   _JS_PROPERTY[_FILTER] = _CSS_FILTER;
   };

/* void */ _STD_HTML.use_clip_path = function (Clip_path_)
      /*
       * (void)
       * (bool Clip_path_)
       */
   {
   _Clip = arguments[_LENGTH] > 0 && Clip_path_ ? _CLIP_PATH : _CLIP;
   };

/* size_t */ _STD_HTML.add_font_family = function (/* string */Font_family_)
   {
   var u = _VALUE[_FONT_FAMILY];
   var v = u[_LENGTH];

   u[v] = Font_family_;

   return (v);
   };

/* string */ _STD_HTML.span = function (T1, T2, Css_value1_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, string Html_)
       * (string Html_, size_t Css_property1_, T Css_value1_, ...) const
       */
   {
   var u;

   if (arguments[_LENGTH] < 3)
      {
      _Tagname[T1] = _SPAN;
      _Id[T1] = _IDPREFIX;
      _Id[T1] += T1;
      u = _SPAN_ID;
      u += _Id[T1];

      if (arguments[_LENGTH] === 1)
         {
         u += _BRACKET_SPAN;
         }
      else
         {
         u += _QUOTES_BRACKET;
         u += T2;
         u += _SPAN_END;
         }
      }
   else
      {
      u = _SPAN_STYLE;
      u += _CSS(arguments);
      u += _QUOTES_BRACKET;
      u += T1;
      u += _SPAN_END;
      }

   return (u);
   };

/* string */ _STD_HTML.img = function (T, Css_property1_, Css_value1_)
      /*
       * (size_t Elemid_)
       * (string Path_, size_t Css_property1_, T Css_value1_, ...) const
       */
   {
   var u;

   if (arguments[_LENGTH] === 1)
      {
      _Tagname[T] = _IMG;
      _Id[T] = _IDPREFIX;
      _Id[T] += T;
      u = _IMG_ID;
      u += _Id[T];
      }
   else
      {
      u = _IMG_STYLE;
      u += _CSS(arguments);
      u += _SRC_QUOTES;
      u += T;
      }

   return (u += _QUOTES_BRACKET);
   };

/* string */ _STD_HTML.audio =

      _WEBKIT || _MSIE_VERSION === 0 ? function (Elemid_, Wavfile_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, bool Wavfile_)
       */
   {
   _Tagname[Elemid_] = arguments[_LENGTH] === 2 && Wavfile_ ? _WAV_AUDIO : _GENERIC_AUDIO;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;

   return (_EMPTY);
   }

      : function (Elemid_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, bool)
       */
   {
   var u = _BGSOUND_ID;

   _Tagname[Elemid_] = _GENERIC_AUDIO;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   return (u += _QUOTES_BRACKET);
   };

/* string */ _STD_HTML.a = function (Elemid_, Html_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, string Html_)
       */
   {
   var u = _A_ID;

   _Tagname[Elemid_] = _A;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   if (arguments[_LENGTH] === 1)
      {
      return (u += _BRACKET_A);
      }
   else
      {
      u += _QUOTES_BRACKET;
      u += Html_;
      }

   return (u += _A_END);
   };

/* string */ _STD_HTML.label = function (Elemid_, For_, Html_)
      /*
       * (size_t Elemid_, size_t For_)
       * (size_t Elemid_, size_t For_, string Html_)
       */
   {
   var u = _LABEL_FOR;

   u += (_IDPREFIX + For_);
   u += _ID_QUOTES;
   _Tagname[Elemid_] = _LABEL;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   if (arguments[_LENGTH] === 1)
      {
      return (u += _BRACKET_LABEL);
      }
   else
      {
      u += _QUOTES_BRACKET;
      u += Html_;
      }

   return (u += _LABEL_END);
   };

/* string */ _STD_HTML.input_text = function (/* size_t */Elemid_)
   {
   var u = _INPUT_TEXT_ID;

   _Tagname[Elemid_] = _INPUT;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   return (u += _QUOTES_BRACKET);
   };

/* string */ _STD_HTML.input_file = function (/* size_t */Elemid_)
   {
   var u = _INPUT_FILE_ID;

   _Tagname[Elemid_] = _INPUT;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   return (u += _QUOTES_BRACKET);
   };

/* string */ _STD_HTML.canvas = function (/* size_t */Elemid_)
   {
   var u = _CANVAS_ID;

   _Tagname[Elemid_] = _CANVAS;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   return (u += _BRACKET_CANVAS);
   };

/* string */ _STD_HTML.div = function (Elemid_, Html_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, string Html_)
       */
   {
   var u = _DIV_ID;

   _Tagname[Elemid_] = _DIV;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   if (arguments[_LENGTH] === 1)
      {
      return (u += _BRACKET_DIV);
      }
   else
      {
      u += _QUOTES_BRACKET;
      u += Html_;
      }

   return (u += _DIV_END);
   };

/* string */ _STD_HTML.table = function (Elemid_, Html_)
      /*
       * (size_t Elemid_)
       * (size_t Elemid_, string Html_)
       */
   {
   var u = _TABLE_ID;

   _Tagname[Elemid_] = _TABLE;
   _Id[Elemid_] = _IDPREFIX;
   _Id[Elemid_] += Elemid_;
   u += _Id[Elemid_];

   if (arguments[_LENGTH] === 1)
      {
      return (u += _BRACKET_TABLE);
      }
   else
      {
      u += _QUOTES_BRACKET;
      u += Html_;
      }

   return (u += _TABLE_END);
   };

/* void */ _STD_HTML.flush = function (Title_, Html_, T, Height_)
      /*
       * (string Title_, string Html_, void (*)(long, long) Resize_)
       * (string Title_, string Html_, long Width_, long Height_)
       */
   {
   var u = "　";
   var v;
   var w;
   var s;

   _DOCUMENT[_TITLE] = Title_;
   u += Html_;
   Html_ = _NULL;
   _BODY[_JS_PROPERTY[_INNERHTML]] = u;
   u = _NULL;
   _BODY_STYLE[_JS_PROPERTY[_POSITION]] = _VALUE[_POSITION][__ABSOLUTE];

   if (arguments[_LENGTH] === 4)
      {
      _Width = T;
      _Height = Height_;
      w = _RESIZE;
      }
   else
      {
      _Resize = T;
      T = _DOCUMENTELEMENT[_CLIENTWIDTH];
      Height_ = _DOCUMENTELEMENT[_CLIENTHEIGHT];
      _Width = T;
      _Height = Height_;
      w = _RESIZE2;
      _BODY_STYLE[_JS_PROPERTY[_TOP]] = _0PX;
      _BODY_STYLE[_JS_PROPERTY[_LEFT]] = _0PX;
      }

   T += _UNIT[_WIDTH];
   _BODY_STYLE[_JS_PROPERTY[_WIDTH]] = T;
   Height_ += _UNIT[_HEIGHT];
   _BODY_STYLE[_JS_PROPERTY[_HEIGHT]] = Height_;
   _BODY_STYLE[_JS_PROPERTY[_OVERFLOW]] = _VALUE[_OVERFLOW][__HIDDEN];
   _BODY_STYLE[_JS_PROPERTY[_Clip]] = _PARSE_A[_Clip](0, [_Clip, 0, _Width, _Height, 0]);
   u = 0;
   u += _UNIT[_MARGIN_TOP];
   _BODY_STYLE[_JS_PROPERTY[_MARGIN_TOP]] = u;
   _BODY_STYLE[_JS_PROPERTY[_MARGIN_RIGHT]] = u;
   _BODY_STYLE[_JS_PROPERTY[_MARGIN_BOTTOM]] = u;
   _BODY_STYLE[_JS_PROPERTY[_MARGIN_LEFT]] = u;

   if (w === _RESIZE)
      {
      w(0);
      }

   for (s = 0; s < _Id[_LENGTH]; ++ s)
      {
      if (s in _Id)
         {
         if (_Tagname[s] < _WAV_AUDIO)
            {
            u = s * _AP_LENGTH;
            _Ap[u] = _DOCUMENT[_GETELEMENTBYID](_Id[s]);
            _Ap[u + _STYLE_DECL] = _Ap[u][_STYLE];
            v = [];
            v[_BACKGROUND_POSITION] = [];
            v[_CLIP] = [];
            v[_CLIP_PATH] = [];
            v[_FILTER] = [];
            v[_CURSOR] = [];

            if (_Tagname[s] === _IMG)
               {
               v[_SRC] = _EMPTY;
               }
            else if (_Tagname[s] !== _INPUT)
               {
               v[_INNERHTML] = _EMPTY;
               }

            _Ap[u + _VALUE_CACHE] = v;
            }
         else
            {
            _CREATE_AUDIO(s);
            }
         }
      }

   if (w === _RESIZE2)
      {
      w(0);
      }

   _WINDOW[_ONRESIZE] = w;
   };

/* T */ _STD_HTML.nth_element = function (/* size_t */Elemid_) /* const */
   {
   return (_Ap[Elemid_ * _AP_LENGTH]);
   };

/* void */ _STD_HTML.setvalue = function (/* size_t */Elemid_, /* size_t */Property1_, /* T */Val1_ /*, ...*/)
   {
   var u = Elemid_ * _AP_LENGTH;
   var v = _Ap[u];
   var w = _Ap[u + _STYLE_DECL];
   var x = _Ap[u + _VALUE_CACHE];
   var y;
   var z;
   var r;
   var q;
   var s;
   var t;

   for (s = 1; s < arguments[_LENGTH]; )
      {
      y = arguments[s] < _SRC ? w : v;

      if (arguments[s] in _PARSE_A)
         {
         if (_COMPARE_ARGS[arguments[s]] > 2)
            {
            u = x[arguments[s]];

            if (arguments[s + 1] !== _NULL)
               {
               t = 1;
               z = 0 in u;

               if (z)
                  {
                  for (; t < _COMPARE_ARGS[arguments[s]]; ++ t)
                     {
                     r = arguments[s + t];

                     if (r !== _UNDEFINED && r !== u[t - 1])
                        {
                        break;
                        }
                     }
                  }

               if (t < _COMPARE_ARGS[arguments[s]])
                  {
                  r = z ? u : _DEFAULT_VALUE[arguments[s]];

                  for (t = 1; t < _COMPARE_ARGS[arguments[s]]; ++ t)
                     {
                     q = t - 1;
                     z = s + t;
                     u[q] =
                        arguments[z] !== _UNDEFINED ?
                           arguments[z]
                        :
                           (arguments[z] = r[q] , arguments[z]);
                     }

                  y[_JS_PROPERTY[arguments[s]]] = _PARSE_A[arguments[s]](s, arguments);

                  if (arguments[s] === _FILTER)
                     {
                     _RESERVE(s, arguments);
                     }
                  }
               }
            else if (0 in u)
               {
               delete u[0];
               y[_JS_PROPERTY[arguments[s]]] = _EMPTY;

               if (arguments[s] === _FILTER)
                  {
                  _RESERVE(s, arguments);
                  }
               }
            }
         else if (_COMPARE_ARGS[arguments[s]] !== 0)
            {
            z = arguments[s + 1];

            if (z !== _NULL)
               {
               if (x[arguments[s]] !== z)
                  {
                  x[arguments[s]] = z;
                  y[_JS_PROPERTY[arguments[s]]] = _PARSE_A[arguments[s]](s, arguments);
                  }
               }
            else if (arguments[s] in x)
               {
               delete x[arguments[s]];
               y[_JS_PROPERTY[arguments[s]]] = _EMPTY;
               }
            }

         s += _ARGS[arguments[s]];
         }
      else
         {
         z = arguments[s + 1];

         if (z !== _NULL)
            {
            if (x[arguments[s]] !== z)
               {
               x[arguments[s]] = z;
               y[_JS_PROPERTY[arguments[s]]] =
                  arguments[s] in _VALUE ?
                     _VALUE[arguments[s]][z]
                  :
                     arguments[s] in _UNIT ? (z += _UNIT[arguments[s]] , z) : z;
               }
            }
         else if (arguments[s] in x)
            {
            delete x[arguments[s]];
            y[_JS_PROPERTY[arguments[s]]] = _EMPTY;
            }

         s += 2;
         }
      }
   };

/* void */ _STD_HTML.setvalue2 = function (/* size_t */Elemid_, /* size_t */Property_, /* string */Val_)
   {
   var u = Elemid_ * _AP_LENGTH;

   _Ap[u + _VALUE_CACHE][Property_] = Val_;
   _Ap[u][_JS_PROPERTY[Property_]] = Val_;
   };

/* T */ _STD_HTML.getvalue = function (Elemid_, Property_, Index_) /* const */
      /*
       * (size_t Elemid_, size_t Property_)
       * (size_t Elemid_, size_t Property_, size_t Index_)
       */
   {
   var u = _Ap[Elemid_ * _AP_LENGTH + _VALUE_CACHE][Property_];

   if (arguments[_LENGTH] === 2)
      {
      return (typeof u !== _TYPEOF_ARRAY ? u : 0 in u);
      }
   else
      {
      return (0 in u ? u[Index_] : _UNDEFINED);
      }
   };

})(std);



/* EOF */