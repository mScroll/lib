/*
 * 1.0.100.0
 * COPYRIGHT (c) 2026 mScroll
 */



/* namespace */ var azbsdrv = {};

(function (azbsdrv){

"use strict";

var _WINDOW = window;
var _MATH = _WINDOW.Math;
var _FLOOR = _MATH.floor;
var _DATE = _WINDOW.Date;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _ENCODEURICOMPONENT = _WINDOW.encodeURIComponent;
var _XMLHTTPREQUEST = _WINDOW.XMLHttpRequest;
var _LENGTH = "length";
var _CHARAT = "charAt";
var _SUBSTRING = "substring";
var _INDEXOF = "indexOf";
var _TOUTCSTRING = "toUTCString";
var _BYTELENGTH = "byteLength";
var _OPEN = "open";
var _SETREQUESTHEADER = "setRequestHeader";
var _RESPONSETYPE = "responseType";
var _TIMEOUT = "timeout";
var _SEND = "send";
var _ABORT = "abort";
var _RESPONSE = "response";
var _STATUS = "status";
var _ARRAYBUFFER = "arraybuffer";
var _ONLOAD = "onload";
var _ONABORT = "onabort";
var _ONERROR = "onerror";
var _ONTIMEOUT = "ontimeout";
var _NULL = null;

var _INTF = intf;
var _BASE64 = _INTF.base64;
var _UTF16 = _INTF.utf16;

var _MSAL = msal;

var _EOF;
var _MSAL_ERROR;
var _CLIENT_ERROR;
var _ARGUMENT_ERROR;
var _EXPLICIT_SIGNED_IN;
var _OK;
var _CREATED;
var _ACCEPTED;
var _BAD_REQUEST;
var _UNAUTHORIZED;
var _FORBIDDEN;
var _NOT_FOUND;
var _CONTENT_TOO_LARGE;
var _INTERNAL_SERVER_ERROR;
var _SERVICE_UNAVAILABLE;
var _STATE;
var _A;
var _B;
var _C;
var _D;
var _X;
var _S;
var _AC;
var _EMPTY;
var _ZERO;
var _SLASH;
var _QUESTION;
var _CHARSET;
var _MSAL_SCOPES;
var _MSAL_SELECT_ACCOUNT;
var _GET;
var _PUT;
var _DELETE;
var _HTTPS;
var _DNS_NAME;
var _AUTHORIZATION;
var _CONTENT_TYPE;
var _CACHE_CONTROL;
var _CONTENT_MD5;
var _X_MS_BLOB_TYPE;
var _X_MS_VERSION;
var _X_MS_DATE;
var _PRAGMA;
var _EXPIRES;
var _BEARER;
var _BLOCK_BLOB;
var _AZBLOB_VERSION;
var _NO_STORE;
var _NO_CACHE;

var _CHARSET_CHECK;
var _ENCODE;
var _ROTATE_LEFT;
var _F;
var _G;
var _H;
var _I;
var _FF;
var _GG;
var _HH;
var _II;
var _MD5_TRANSFORM;
var _MD5_INIT;
var _MD5_UPDATE;
var _MD5_FINAL;
var _COMPUTE_MD5;
var _SIGN_IN;
var _MSAL_THEN;
var _MSAL_CATCH;
var _REQUEST;
var _XHR_THEN;
var _XHR_CATCH;
var _PROCESS;
var _EXPLICIT_MSAL_THEN;
var _EXPLICIT_MSAL_CATCH;

var _MsalInstance;
var _Rfc822Name;
var _StorageAccount;
var _SignedIn;
var _RetryCount;
var _ExplicitSignIn;
var _Buf1;
var _Buf2;
var _Buf3;
var _Digest;
var _Xhr;
var _Milliseconds;
var _HttpMethod;
var _Container;
var _Path;
var _ContentType;
var _CacheControl;
var _RequestBody;
var _Status;
var _HttpRedirected;
var _ResponseBody;
var _Ready;
var _Callback;

/* private: */

/* static const int */ _EOF = -1;
/* static const int */ _MSAL_ERROR = -2;
/* static const int */ _CLIENT_ERROR = -3;
/* static const int */ _ARGUMENT_ERROR = -4;
/* static const int */ _EXPLICIT_SIGNED_IN = -32768;
/* static const int */ _OK = 200;
/* static const int */ _CREATED = 201;
/* static const int */ _ACCEPTED = 202;
/* static const int */ _BAD_REQUEST = 400;
/* static const int */ _UNAUTHORIZED = 401;
/* static const int */ _FORBIDDEN = 403;
/* static const int */ _NOT_FOUND = 404;
/* static const int */ _CONTENT_TOO_LARGE = 413;
/* static const int */ _INTERNAL_SERVER_ERROR = 500;
/* static const int */ _SERVICE_UNAVAILABLE = 503;
/* static const size_t[] */ _STATE = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476];
/* static const size_t[] */ _A = [0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1];
/* static const size_t[] */ _B = [1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2];
/* static const size_t[] */ _C = [2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3];
/* static const size_t[] */ _D = [3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0];
/* static const size_t[] */ _X =
   [
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
   1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12,
   5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2,
   0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9
   ];
/* static const size_t[] */ _S =
   [
   7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
   5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
   4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
   6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
   ];
/* static const size_t[] */ _AC =
   [
   0xD76AA478, 0xE8C7B756, 0x242070DB, 0xC1BDCEEE, 0xF57C0FAF, 0x4787C62A, 0xA8304613, 0xFD469501,
   0x698098D8, 0x8B44F7AF, 0xFFFF5BB1, 0x895CD7BE, 0x6B901122, 0xFD987193, 0xA679438E, 0x49B40821,
   0xF61E2562, 0xC040B340, 0x265E5A51, 0xE9B6C7AA, 0xD62F105D, 0x02441453, 0xD8A1E681, 0xE7D3FBC8,
   0x21E1CDE6, 0xC33707D6, 0xF4D50D87, 0x455A14ED, 0xA9E3E905, 0xFCEFA3F8, 0x676F02D9, 0x8D2A4C8A,
   0xFFFA3942, 0x8771F681, 0x6D9D6122, 0xFDE5380C, 0xA4BEEA44, 0x4BDECFA9, 0xF6BB4B60, 0xBEBFBC70,
   0x289B7EC6, 0xEAA127FA, 0xD4EF3085, 0x04881D05, 0xD9D4D039, 0xE6DB99E5, 0x1FA27CF8, 0xC4AC5665,
   0xF4292244, 0x432AFF97, 0xAB9423A7, 0xFC93A039, 0x655B59C3, 0x8F0CCC92, 0xFFEFF47D, 0x85845DD1,
   0x6FA87E4F, 0xFE2CE6E0, 0xA3014314, 0x4E0811A1, 0xF7537E82, 0xBD3AF235, 0x2AD7D2BB, 0xEB86D391
   ];
/* static const string */ _EMPTY = "";
/* static const string */ _ZERO = "0";
/* static const string */ _SLASH = "/";
/* static const string */ _QUESTION = "?";
/* static const string[] */ _CHARSET =
   [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
   "u", "v", "w", "x", "y", "z"
   ];
/* static const string[] */ _MSAL_SCOPES = ["https://storage.azure.com/user_impersonation"];
/* static const string */ _MSAL_SELECT_ACCOUNT = "select_account";
/* static const string */ _GET = "GET";
/* static const string */ _PUT = "PUT";
/* static const string */ _DELETE = "DELETE";
/* static const string */ _HTTPS = "https://";
/* static const string */ _DNS_NAME = ".blob.core.windows.net/";
/* static const string */ _AUTHORIZATION = "Authorization";
/* static const string */ _CONTENT_TYPE = "Content-Type";
/* static const string */ _CACHE_CONTROL = "Cache-Control";
/* static const string */ _CONTENT_MD5 = "Content-MD5";
/* static const string */ _X_MS_BLOB_TYPE = "x-ms-blob-type";
/* static const string */ _X_MS_VERSION = "x-ms-version";
/* static const string */ _X_MS_DATE = "x-ms-date";
/* static const string */ _PRAGMA = "Pragma";
/* static const string */ _EXPIRES = "Expires";
/* static const string */ _BEARER = "Bearer ";
/* static const string */ _BLOCK_BLOB = "BlockBlob";
/* static const string */ _AZBLOB_VERSION = "2026-02-06";
/* static const string */ _NO_STORE = "no-store,no-cache,must-revalidate";
/* static const string */ _NO_CACHE = "no-cache";

/* bool */ _CHARSET_CHECK = function (/* string */Value_) /* const */
   {
   var u;
   var s;
   var t;

   if (Value_[_LENGTH] < 3 || Value_[_LENGTH] > 24)
      {
      return (false);
      }

   for (s = 0; s < Value_[_LENGTH]; ++ s)
      {
      u = Value_[_CHARAT](s);

      for (t = 0; t < _CHARSET[_LENGTH]; ++ t)
         {
         if (_CHARSET[t] === u)
            {
            break;
            }
         }

      if (t === _CHARSET[_LENGTH])
         {
         return (false);
         }
      }

   return (true);
   };

/* string */ _ENCODE = function (/* string */Value_, /* bool */Container_) /* const */
   {
   var u = _EMPTY;
   var v = 0;
   var w;
   var s;

   try
      {
      if (Container_ && Value_[_INDEXOF](_SLASH) !== _EOF)
         {
         return (_EMPTY);
         }

      for (s = 0; s < Value_[_LENGTH]; )
         {
         w = Value_[_CHARAT](s);

         if (w === _SLASH)
            {
            if (v < s)
               {
               if (u !== _EMPTY)
                  {
                  u += _SLASH;
                  }

               u += _ENCODEURICOMPONENT(Value_[_SUBSTRING](v, s));
               }

            ++ s;
            v = s;
            }
         else if (w === _QUESTION)
            {
            if (s === 0)
               {
               return (_EMPTY);
               }

            Value_ = Value_[_SUBSTRING](0, s);

            break;
            }
         else
            {
            ++ s;
            }
         }

      if (v < Value_[_LENGTH])
         {
         if (u !== _EMPTY)
            {
            u += _SLASH;
            }

         u += _ENCODEURICOMPONENT(Value_[_SUBSTRING](v, Value_[_LENGTH]));
         }

      return (u);
      }
   catch (e)
      {
      return (_EMPTY);
      }
   };

/* size_t */ _ROTATE_LEFT = function (/* size_t */X_, /* size_t */N_) /* const */
   {
   return ((X_ << N_ | X_ >>> 32 - N_) >>> 0);
   };

/* size_t */ _F = function (/* size_t */X_, /* size_t */Y_, /* size_t */Z_) /* const */
   {
   return ((X_ & Y_ | ~X_ & Z_) >>> 0);
   };

/* size_t */ _G = function (/* size_t */X_, /* size_t */Y_, /* size_t */Z_) /* const */
   {
   return ((X_ & Z_ | Y_ & ~Z_) >>> 0);
   };

/* size_t */ _H = function (/* size_t */X_, /* size_t */Y_, /* size_t */Z_) /* const */
   {
   return ((X_ ^ Y_ ^ Z_) >>> 0);
   };

/* size_t */ _I = function (/* size_t */X_, /* size_t */Y_, /* size_t */Z_) /* const */
   {
   return ((Y_ ^ (X_ | ~Z_)) >>> 0);
   };

/* size_t */ _FF = function (/* size_t */A_, /* size_t */B_, /* size_t */C_, /* size_t */D_,
      /* size_t */X_, /* size_t */S_, /* size_t */Ac_) /* const */
   {
   return (_ROTATE_LEFT(A_ + _F(B_, C_, D_) + X_ + Ac_ >>> 0, S_) + B_ >>> 0);
   };

/* size_t */ _GG = function (/* size_t */A_, /* size_t */B_, /* size_t */C_, /* size_t */D_,
      /* size_t */X_, /* size_t */S_, /* size_t */Ac_) /* const */
   {
   return (_ROTATE_LEFT(A_ + _G(B_, C_, D_) + X_ + Ac_ >>> 0, S_) + B_ >>> 0);
   };

/* size_t */ _HH = function (/* size_t */A_, /* size_t */B_, /* size_t */C_, /* size_t */D_,
      /* size_t */X_, /* size_t */S_, /* size_t */Ac_) /* const */
   {
   return (_ROTATE_LEFT(A_ + _H(B_, C_, D_) + X_ + Ac_ >>> 0, S_) + B_ >>> 0);
   };

/* size_t */ _II = function (/* size_t */A_, /* size_t */B_, /* size_t */C_, /* size_t */D_,
      /* size_t */X_, /* size_t */S_, /* size_t */Ac_) /* const */
   {
   return (_ROTATE_LEFT(A_ + _I(B_, C_, D_) + X_ + Ac_ >>> 0, S_) + B_ >>> 0);
   };

/* void */ _MD5_TRANSFORM = function (/* size_t[] */State_, /* const size_t[] */Block_,
      /* size_t[] */B_)
   {
   var s;
   var t;

   for (s = 0; s < 4; ++ s)
      {
      B_[s] = State_[s];
      }

   t = 0;

   for (s = 0; s < 16; ++ s , ++ t)
      {
      B_[_A[s]] = _FF(B_[_A[s]], B_[_B[s]], B_[_C[s]], B_[_D[s]], Block_[_X[t]], _S[t], _AC[t]);
      }

   for (s = 0; s < 16; ++ s , ++ t)
      {
      B_[_A[s]] = _GG(B_[_A[s]], B_[_B[s]], B_[_C[s]], B_[_D[s]], Block_[_X[t]], _S[t], _AC[t]);
      }

   for (s = 0; s < 16; ++ s , ++ t)
      {
      B_[_A[s]] = _HH(B_[_A[s]], B_[_B[s]], B_[_C[s]], B_[_D[s]], Block_[_X[t]], _S[t], _AC[t]);
      }

   for (s = 0; s < 16; ++ s , ++ t)
      {
      B_[_A[s]] = _II(B_[_A[s]], B_[_B[s]], B_[_C[s]], B_[_D[s]], Block_[_X[t]], _S[t], _AC[t]);
      }

   for (s = 0; s < 4; ++ s)
      {
      State_[s] = State_[s] + B_[s] >>> 0;
      }
   };

/* void */ _MD5_INIT = function (/* size_t[] */State_, /* size_t[] */Block_)
   {
   var s;

   for (s = 0; s < 4; ++ s)
      {
      State_[s] = _STATE[s];
      }

   for (s = 0; s < 16; ++ s)
      {
      Block_[s] = 0x00000000;
      }
   };

/* size_t */ _MD5_UPDATE = function (/* size_t[] */State_, /* size_t[] */Block_,
      /* const char[] */Input_, /* size_t */Count_,
      /* size_t[] */B_)
   {
   var u;
   var v;
   var s;

   for (s = 0; s < Input_[_LENGTH]; ++ s)
      {
      u = Count_ >>> 2;
      v = Count_ << 3 & 0x18;
      Block_[u] = (Block_[u] & ~(0x000000FF << v) | Input_[s] << v) >>> 0;
      ++ Count_;

      if (Count_ === 64)
         {
         _MD5_TRANSFORM(State_, Block_, B_);
         Count_ = 0;
         }
      }

   return (Count_);
   };

/* void */ _MD5_FINAL = function (/* char[] */Digest_,
      /* size_t[] */State_, /* size_t[] */Block_,
      /* size_t */Length_, /* size_t */Count_,
      /* size_t[] */B_)
   {
   var u;
   var v;
   var w;
   var s;

   u = Count_ >>> 2;
   v = Count_ << 3 & 0x18;
   Block_[u] = (Block_[u] & ~(0xFFFFFFFF << v) | 0x80 << v) >>> 0;

   for (++ u , w = u; u < 16; ++ u)
      {
      Block_[u] = 0x00000000;
      }

   if (Count_ >= 56)
      {
      _MD5_TRANSFORM(State_, Block_, B_);

      for (u = 0; u < w; ++ u)
         {
         Block_[u] = 0x00000000;
         }
      }

   Block_[14] = (Length_ << 3) >>> 0;
   Block_[15] = (_FLOOR(Length_ / 0x100000000) << 3 | Length_ >>> 29) >>> 0;
   _MD5_TRANSFORM(State_, Block_, B_);

   for (s = 0 , u = 0; s < 16; s += 4 , ++ u)
      {
      Digest_[s] = State_[u];
      Digest_[s + 1] = State_[u] >>> 8;
      Digest_[s + 2] = State_[u] >>> 16;
      Digest_[s + 3] = State_[u] >>> 24;
      }
   };

/* void */ _COMPUTE_MD5 = function (/* char[] */Digest_, /* const char[] */Input_,
      /* size_t[] */B1_, /* size_t[] */B2_, /* size_t[] */B3_)
   {
   var u;

   _MD5_INIT(B1_, B2_);
   u = 0;
   u = _MD5_UPDATE(B1_, B2_, Input_, u, B3_);
   _MD5_FINAL(Digest_, B1_, B2_, Input_[_LENGTH], u, B3_);
   };

/* void */ _SIGN_IN = function (/* void */)
   {
   try
      {
      if (_SignedIn)
         {
         _MsalInstance.acquireTokenSilent({
            scopes: _MSAL_SCOPES,
            account: _MsalInstance.getAccountByUsername(_Rfc822Name)
            }).then(_MSAL_THEN, _MSAL_CATCH);
         }
      else
         {
         _MsalInstance.ssoSilent({
            scopes: _MSAL_SCOPES,
            loginHint: _Rfc822Name
            }).then(_MSAL_THEN, _MSAL_CATCH);
         }
      }
   catch (e)
      {
      _RetryCount = 0;
      _Status = _MSAL_ERROR;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _MSAL_THEN = function (/* T */MsalResponse_)
   {
   _SignedIn = true;
   _RetryCount = 0;
   _REQUEST(MsalResponse_.accessToken);
   };

/* void */ _MSAL_CATCH = function (/* T */)
   {
   if (_SignedIn && _RetryCount < 3)
      {
      ++ _RetryCount;
      _SIGN_IN();
      }
   else
      {
      _RetryCount = 0;
      _Status = _MSAL_ERROR;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _REQUEST = function (/* string */BearerToken_)
   {
   var u;

   try
      {
      _Xhr = new _XMLHTTPREQUEST();
      _Xhr[_OPEN](_HttpMethod,
         _Container === _EMPTY ?
               _StorageAccount + _Path
            :
               _StorageAccount + _Container + _SLASH + _Path);
      _Xhr[_SETREQUESTHEADER](_AUTHORIZATION, _BEARER + BearerToken_);
      _Xhr[_SETREQUESTHEADER](_X_MS_VERSION, _AZBLOB_VERSION);
      _Xhr[_SETREQUESTHEADER](_X_MS_DATE, new _DATE()[_TOUTCSTRING]());

      if (_HttpMethod === _PUT)
         {
         _Xhr[_SETREQUESTHEADER](_CONTENT_TYPE, _ContentType);
         _Xhr[_SETREQUESTHEADER](_CACHE_CONTROL, _CacheControl);
         _COMPUTE_MD5(_Digest, _RequestBody, _Buf1, _Buf2, _Buf3);
         _Xhr[_SETREQUESTHEADER](_CONTENT_MD5, _UTF16(_BASE64(_Digest, true)));
         _Xhr[_SETREQUESTHEADER](_X_MS_BLOB_TYPE, _BLOCK_BLOB);
         }

      u = _HttpMethod === _GET;

      if (u)
         {
         _Xhr[_SETREQUESTHEADER](_CACHE_CONTROL, _NO_STORE);
         _Xhr[_SETREQUESTHEADER](_PRAGMA, _NO_CACHE);
         _Xhr[_SETREQUESTHEADER](_EXPIRES, _ZERO);
         }

      _Xhr[_ONLOAD] = _XHR_THEN;
      _Xhr[_ONABORT] = _XHR_CATCH;
      _Xhr[_ONERROR] = _XHR_CATCH;
      _Xhr[_ONTIMEOUT] = _XHR_CATCH;

      if (u)
         {
         _Xhr[_RESPONSETYPE] = _ARRAYBUFFER;
         }

      _Xhr[_TIMEOUT] = _Milliseconds;

      if (_RequestBody === _NULL)
         {
         _Xhr[_SEND]();
         }
      else
         {
         _Xhr[_SEND](_RequestBody);
         }
      }
   catch (e)
      {
      _Xhr[_ONLOAD] = _NULL;
      _Xhr[_ONABORT] = _NULL;
      _Xhr[_ONERROR] = _NULL;
      _Xhr[_ONTIMEOUT] = _NULL;
      _Xhr = _NULL;
      _Status = _CLIENT_ERROR;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _XHR_THEN = function (/* T */)
   {
   _PROCESS(true);
   };

/* void */ _XHR_CATCH = function (/* T */)
   {
   _PROCESS(false);
   };

/* void */ _PROCESS = function (/* bool */Onload_)
   {
   var u = _NULL;

   if (Onload_)
      {
      try
         {
         _Status = _Xhr[_STATUS];

         if (_Status >= 200 && _Status < 400)
            {
            if (_Status >= 300)
               {
               _HttpRedirected = true;
               }

            if (_HttpMethod === _GET)
               {
               u = _Xhr[_RESPONSE];

               if (u !== _NULL)
                  {
                  u = new _UINT8ARRAY(u, 0, u[_BYTELENGTH]);
                  }
               }
            }
         }
      catch (e)
         {
         u = _NULL;
         }
      }

   _Xhr[_ONLOAD] = _NULL;
   _Xhr[_ONABORT] = _NULL;
   _Xhr[_ONERROR] = _NULL;
   _Xhr[_ONTIMEOUT] = _NULL;
   _Xhr = _NULL;
   _ResponseBody = u;
   _Ready = true;
   _Callback();
   };

/* void */ _EXPLICIT_MSAL_THEN = function (/* T */MsalResponse_)
   {
   var u;
   var v;

   try
      {
      u = MsalResponse_.account.username;
      }
   catch (e)
      {
      u = _NULL;
      }

   v = _Rfc822Name === _EMPTY;

   if (v || _Rfc822Name === u)
      {
      _Rfc822Name = u;
      _SignedIn = true;
      _Status = _EXPLICIT_SIGNED_IN;
      _Ready = true;
      }
   else
      {
      _Status = _MSAL_ERROR;
      _Ready = ! v;
      }

   _ExplicitSignIn = true;
   _Callback();
   };

/* void */ _EXPLICIT_MSAL_CATCH = function (/* T */)
   {
   _Status = _MSAL_ERROR;
   _Ready = _Rfc822Name !== _EMPTY;
   _ExplicitSignIn = true;
   _Callback();
   };

/* static T */ _MsalInstance = _NULL;
/* static string */ _Rfc822Name = _EMPTY;
/* static string */ _StorageAccount = _EMPTY;
/* static bool */ _SignedIn = false;
/* static size_t */ _RetryCount = 0;
/* static bool */ _ExplicitSignIn = true;
/* static size_t[] */ _Buf1 = [];
/* static size_t[] */ _Buf2 = [];
/* static size_t[] */ _Buf3 = [];
/* static char[] */ _Digest = new _UINT8ARRAY(16);
/* static T */ _Xhr = _NULL;
/* static long */ _Milliseconds = 30000;
/* static string */ _HttpMethod = _EMPTY;
/* static string */ _Container = _EMPTY;
/* static string */ _Path = _EMPTY;
/* static string */ _ContentType = _EMPTY;
/* static string */ _CacheControl = _EMPTY;
/* static T */ _RequestBody = _NULL;
/* static int */ _Status = _EOF;
/* static bool */ _HttpRedirected = false;
/* static T */ _ResponseBody = _NULL;
/* static bool */ _Ready = false;

/* static void (*)(void) */ _Callback = function ()
   {
   };

/* public: */

/*
 * Azure Blob Storage Driver
 *
 *    azbsdrv::init(clientId, authority, rfc822Name, storageAccount)
 *
 *    azbsdrv::upload(container, path, contentType, cacheControl, File)
 *
 *    azbsdrv::download(container, path)
 *
 *    azbsdrv::ready() const
 *       ->
 *          true      upload/download available
 *          false      upload/download not available
 *
 *    azbsdrv::response() const
 *       ->
 *          File   (nullable char[])
 *
 *    azbsdrv::redirected() const
 *       ->
 *          true      3xx Redirection HTTP status codes (rarely true)
 *          false      other HTTP status codes
 *
 *    azbsdrv::status() const
 *       ->
 *          statusCode   (int)
 *
 *    azbsdrv::callback(callbackFunction)
 *
 *    azbsdrv::sign_in(interaction)
 *
 *    azbsdrv::remove(container, path)
 *
 *    azbsdrv::timeout(milliseconds)
 *
 *    azbsdrv::abort()
 *
 *    azbsdrv::md5::init(state, block)
 *
 *    azbsdrv::md5::update(state, block, message, epsilon)
 *       ->
 *          epsilon   (size_t)
 *
 *    azbsdrv::md5::final(digest, state, block, length, epsilon)
 *
 *    azbsdrv::md5::compute(message) const
 *       ->
 *          digest   (char[])
 *
 *    clientId   (string)
 *
 *    authority   (string)
 *
 *    rfc822Name   (string)
 *
 *    storageAccount   (string)
 *
 *    container   (string)
 *
 *    path   (string)
 *
 *    contentType   (string)
 *
 *    cacheControl   (string)
 *
 *    statusCode   (int)
 *       azbsdrv::RETRYABLE      network and other retryable errors
 *       azbsdrv::MSAL_ERROR      general MSAL errors
 *       azbsdrv::CLIENT_ERROR      XMLHttpRequest exception
 *       azbsdrv::ARGUMENT_ERROR      invalid container or path
 *       azbsdrv::EXPLICIT_SIGNED_IN      explicit sign-in success
 *       azbsdrv::OK      Get Blob success
 *       azbsdrv::CREATED      Put Blob success
 *       azbsdrv::ACCEPTED      Delete Blob success
 *       azbsdrv::BAD_REQUEST
 *       azbsdrv::UNAUTHORIZED
 *       azbsdrv::FORBIDDEN
 *       azbsdrv::NOT_FOUND
 *       azbsdrv::CONTENT_TOO_LARGE
 *       azbsdrv::INTERNAL_SERVER_ERROR
 *       azbsdrv::SERVICE_UNAVAILABLE
 *       ...
 *
 *    callbackFunction   (void (*)(void))
 *
 *    interaction   (bool)
 *
 *    milliseconds   (long)      XMLHttpRequest.timeout
 *
 *    state   (size_t[])
 *
 *    block   (size_t[])
 *
 *    message   (char[])
 *
 *    length   (size_t)
 */

/* const int */ azbsdrv.RETRYABLE = _EOF;
/* const int */ azbsdrv.MSAL_ERROR = _MSAL_ERROR;
/* const int */ azbsdrv.CLIENT_ERROR = _CLIENT_ERROR;
/* const int */ azbsdrv.ARGUMENT_ERROR = _ARGUMENT_ERROR;
/* const int */ azbsdrv.EXPLICIT_SIGNED_IN = _EXPLICIT_SIGNED_IN;
/* const int */ azbsdrv.OK = _OK;
/* const int */ azbsdrv.CREATED = _CREATED;
/* const int */ azbsdrv.ACCEPTED = _ACCEPTED;
/* const int */ azbsdrv.BAD_REQUEST = _BAD_REQUEST;
/* const int */ azbsdrv.UNAUTHORIZED = _UNAUTHORIZED;
/* const int */ azbsdrv.FORBIDDEN = _FORBIDDEN;
/* const int */ azbsdrv.NOT_FOUND = _NOT_FOUND;
/* const int */ azbsdrv.CONTENT_TOO_LARGE = _CONTENT_TOO_LARGE;
/* const int */ azbsdrv.INTERNAL_SERVER_ERROR = _INTERNAL_SERVER_ERROR;
/* const int */ azbsdrv.SERVICE_UNAVAILABLE = _SERVICE_UNAVAILABLE;

/* void */ azbsdrv.init = function (
      /* string */ClientId_, /* string */Authority_,
      /* string */Rfc822Name_,
      /* string */StorageAccount_)
   {
   if (_MsalInstance === _NULL && _CHARSET_CHECK(StorageAccount_))
      {
      _MsalInstance = new _MSAL.PublicClientApplication({
         auth:
            {
            clientId: ClientId_,
            authority: Authority_
            }
         });
      _Rfc822Name = Rfc822Name_;
      _StorageAccount = _HTTPS + StorageAccount_ + _DNS_NAME;
      _Ready = _Rfc822Name !== _EMPTY;
      }
   };

/* void */ azbsdrv.upload = function (/* string */Container_, /* string */Path_,
      /* string */ContentType_, /* string */CacheControl_,
      /* const char[] */File_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Container_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Container_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _PUT;
         _Container = u;
         _Path = v;
         _ContentType = ContentType_;
         _CacheControl = CacheControl_;
         _RequestBody = File_;
         _Status = _EOF;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _SIGN_IN();
         }
      else
         {
         _Status = _ARGUMENT_ERROR;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _Callback();
         }
      }
   };

/* void */ azbsdrv.download = function (/* string */Container_, /* string */Path_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Container_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Container_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _GET;
         _Container = u;
         _Path = v;
         _ContentType = _EMPTY;
         _CacheControl = _EMPTY;
         _RequestBody = _NULL;
         _Status = _EOF;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _SIGN_IN();
         }
      else
         {
         _Status = _ARGUMENT_ERROR;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _Callback();
         }
      }
   };

/* bool */ azbsdrv.ready = function (/* void */) /* const */
   {
   return (_Ready);
   };

/* T */ azbsdrv.response = function (/* void */) /* const */
   {
   return (_ResponseBody);
   };

/* bool */ azbsdrv.redirected = function (/* void */) /* const */
   {
   return (_HttpRedirected);
   };

/* int */ azbsdrv.status = function (/* void */) /* const */
   {
   return (_Status);
   };

/* void */ azbsdrv.callback = function (/* void (*)(void) */Callback_)
   {
   if (_ExplicitSignIn && (_Ready || _Rfc822Name === _EMPTY))
      {
      _Callback = Callback_;
      }
   };

/* void */ azbsdrv.sign_in = function (/* bool */Interaction_)
   {
   var u;

   if (_MsalInstance !== _NULL)
      {
      u = _Rfc822Name === _EMPTY;

      if (_ExplicitSignIn && (_Ready || u))
         {
         _ExplicitSignIn = false;
         _Ready = false;

         try
            {
            if (Interaction_)
               {
               _MsalInstance.loginPopup({
                  scopes: _MSAL_SCOPES,
                  prompt: _MSAL_SELECT_ACCOUNT
                  }).then(_EXPLICIT_MSAL_THEN, _EXPLICIT_MSAL_CATCH);
               }
            else
               {
               _MsalInstance.ssoSilent({
                  scopes: _MSAL_SCOPES
                  }).then(_EXPLICIT_MSAL_THEN, _EXPLICIT_MSAL_CATCH);
               }
            }
         catch (e)
            {
            _Status = _MSAL_ERROR;
            _Ready = ! u;
            _ExplicitSignIn = true;
            _Callback();
            }
         }
      }
   };

/* void */ azbsdrv.remove = function (/* string */Container_, /* string */Path_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Container_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Container_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _DELETE;
         _Container = u;
         _Path = v;
         _ContentType = _EMPTY;
         _CacheControl = _EMPTY;
         _RequestBody = _NULL;
         _Status = _EOF;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _SIGN_IN();
         }
      else
         {
         _Status = _ARGUMENT_ERROR;
         _HttpRedirected = false;
         _ResponseBody = _NULL;
         _Callback();
         }
      }
   };

/* void */ azbsdrv.timeout = function (/* long */Milliseconds_)
   {
   if (_ExplicitSignIn && (_Ready || _Rfc822Name === _EMPTY))
      {
      _Milliseconds = Milliseconds_ < 0 ? 0 : Milliseconds_;
      }
   };

/* void */ azbsdrv.abort = function (/* void */)
   {
   if (_Xhr !== _NULL)
      {
      try
         {
         _Xhr[_ABORT]();
         }
      catch (e)
         {
         _XHR_CATCH();
         }
      }
   };

/* namespace */ azbsdrv.md5 = {};

/* void */ azbsdrv.md5.init = function (/* size_t[] */State_, /* size_t[] */Block_)
   {
   _MD5_INIT(State_, Block_);
   };

/* size_t */ azbsdrv.md5.update = function (/* size_t[] */State_, /* size_t[] */Block_,
      /* const char[] */Input_, /* size_t */Count_)
   {
   var u;

   u = [];

   return (_MD5_UPDATE(State_, Block_, Input_, Count_, u));
   };

/* void */ azbsdrv.md5.final = function (/* char[] */Digest_,
      /* size_t[] */State_, /* size_t[] */Block_,
      /* size_t */Length_, /* size_t */Count_)
   {
   var u;

   u = [];

   _MD5_FINAL(Digest_, State_, Block_, Length_, Count_, u);
   };

/* char[] */ azbsdrv.md5.compute = function (/* const char[] */Input_) /* const */
   {
   var u;
   var v;
   var w;
   var x;

   u = [];
   v = [];
   w = [];
   x = new _UINT8ARRAY(16);
   _COMPUTE_MD5(x, Input_, u, v, w);

   return (x);
   };

})(azbsdrv);



/* EOF */