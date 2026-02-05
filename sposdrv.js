/*
 * 1.0.100.0
 * COPYRIGHT (c) 2026 mScroll
 */



/* namespace */ var sposdrv = {};

(function (sposdrv){

"use strict";

var _WINDOW = window;
var _MATH = _WINDOW.Math;
var _FLOOR = _MATH.floor;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _ENCODEURICOMPONENT = _WINDOW.encodeURIComponent;
var _XMLHTTPREQUEST = _WINDOW.XMLHttpRequest;
var _STRINGIFY = _WINDOW.JSON.stringify;
var _LENGTH = "length";
var _CHARAT = "charAt";
var _SUBSTRING = "substring";
var _INDEXOF = "indexOf";
var _LASTINDEXOF = "lastIndexOf";
var _TOLOWERCASE = "toLowerCase";
var _BYTELENGTH = "byteLength";
var _OPEN = "open";
var _SETREQUESTHEADER = "setRequestHeader";
var _RESPONSETYPE = "responseType";
var _TIMEOUT = "timeout";
var _SEND = "send";
var _ABORT = "abort";
var _RESPONSE = "response";
var _STATUS = "status";
var _JSON = "json";
var _ARRAYBUFFER = "arraybuffer";
var _ONLOAD = "onload";
var _ONABORT = "onabort";
var _ONERROR = "onerror";
var _ONTIMEOUT = "ontimeout";
var _TYPEOF_NUMBER = typeof 0;
var _TYPEOF_STRING = typeof "";
var _TYPEOF_OBJECT = typeof {};
var _NULL = null;

var _INTF = intf;
var _BASE64 = _INTF.base64;
var _UTF16 = _INTF.utf16;

var _MSAL = msal;

var _EOF;
var _MSAL_ERROR;
var _CLIENT_ERROR;
var _ARGUMENT_ERROR;
var _RESOLVE_SITE_ERROR;
var _RESOLVE_LIBRARY_ERROR;
var _CREATE_FOLDER_ERROR;
var _EXPLICIT_SIGNED_IN;
var _OK;
var _CREATED;
var _NO_CONTENT;
var _UNAUTHORIZED;
var _FORBIDDEN;
var _NOT_FOUND;
var _CONFLICT;
var _CONTENT_TOO_LARGE;
var _INTERNAL_SERVER_ERROR;
var _SERVICE_UNAVAILABLE;
var _EMPTY;
var _ZERO;
var _COLON;
var _SLASH;
var _QUESTION;
var _NUMBER_SIGN;
var _CHARSET;
var _MSAL_SCOPES;
var _MSAL_SELECT_ACCOUNT;
var _SP_LIB;
var _SP_ROOT;
var _SP_PATH;
var _GET;
var _PUT;
var _DELETE;
var _POST;
var _HTTPS;
var _SP_DNS_NAME;
var _SHARED_DOCUMENTS;
var _SHARED20DOCUMENTS;
var _DNS_NAME;
var _BEGIN_SITE;
var _GET_DRIVES;
var _DRIVE_ROOT;
var _DRIVES;
var _ROOT;
var _CHILDREN;
var _BEGIN_PATH;
var _PATH_CONTENT;
var _PATH_CHILDREN;
var _AUTHORIZATION;
var _CONTENT_TYPE;
var _CACHE_CONTROL;
var _PRAGMA;
var _EXPIRES;
var _BEARER;
var _APPLICATION_JSON;
var _APPLICATION_OCTET_STREAM;
var _NO_STORE;
var _NO_CACHE;

var _PARSE_WEBURL;
var _CHARSET_CHECK;
var _SP_SITE;
var _SITE_ID;
var _ENCODE;
var _PATH_ARRAY;
var _WEB_ADDRESS;
var _DRIVE_ID;
var _DRIVE_PATH;
var _ADD_DRIVE_ID;
var _QUICK_XOR_HASH_INIT;
var _QUICK_XOR_HASH_UPDATE;
var _QUICK_XOR_HASH_FINAL;
var _COMPUTE_QUICK_XOR_HASH;
var _SIGN_IN;
var _MSAL_THEN;
var _MSAL_CATCH;
var _RESUME;
var _RESOLVE;
var _SITE_ID_REQUEST;
var _SITE_ID_THEN;
var _SITE_ID_CATCH;
var _SITE_ID_PROCESS;
var _DRIVE_ID_REQUEST;
var _DRIVE_ID_THEN;
var _DRIVE_ID_CATCH;
var _DRIVE_ID_PROCESS;
var _REQUEST_INIT;
var _CACHE;
var _TRAVERSE;
var _REQUEST;
var _XHR_THEN;
var _XHR_CATCH;
var _PROCESS;
var _EXPLICIT_MSAL_THEN;
var _EXPLICIT_MSAL_CATCH;

var _MsalInstance;
var _Rfc822Name;
var _SpSite;
var _SiteId;
var _DriveId;
var _FolderCache;
var _SignedIn;
var _RetryCount;
var _ExplicitSignIn;
var _Hash;
var _BearerToken;
var _PathArray;
var _FolderPath;
var _Index;
var _Folder;
var _PostObject;
var _Xhr;
var _Milliseconds;
var _HttpMethod;
var _Library;
var _Path;
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
/* static const int */ _RESOLVE_SITE_ERROR = -5;
/* static const int */ _RESOLVE_LIBRARY_ERROR = -6;
/* static const int */ _CREATE_FOLDER_ERROR = -7;
/* static const int */ _EXPLICIT_SIGNED_IN = -32768;
/* static const int */ _OK = 200;
/* static const int */ _CREATED = 201;
/* static const int */ _NO_CONTENT = 204;
/* static const int */ _UNAUTHORIZED = 401;
/* static const int */ _FORBIDDEN = 403;
/* static const int */ _NOT_FOUND = 404;
/* static const int */ _CONFLICT = 409;
/* static const int */ _CONTENT_TOO_LARGE = 413;
/* static const int */ _INTERNAL_SERVER_ERROR = 500;
/* static const int */ _SERVICE_UNAVAILABLE = 503;
/* static const string */ _EMPTY = "";
/* static const string */ _ZERO = "0";
/* static const string */ _COLON = ":";
/* static const string */ _SLASH = "/";
/* static const string */ _QUESTION = "?";
/* static const string */ _NUMBER_SIGN = "#";
/* static const string[] */ _CHARSET =
   [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
   "u", "v", "w", "x", "y", "z"
   ];
/* static const string[] */ _MSAL_SCOPES = ["Files.ReadWrite.All"];
/* static const string */ _MSAL_SELECT_ACCOUNT = "select_account";
/* static const string */ _SP_LIB = "sp_lib_";
/* static const string */ _SP_ROOT = "sp_root:";
/* static const string */ _SP_PATH = "sp_path:/";
/* static const string */ _GET = "GET";
/* static const string */ _PUT = "PUT";
/* static const string */ _DELETE = "DELETE";
/* static const string */ _POST = "POST";
/* static const string */ _HTTPS = "https://";
/* static const string */ _SP_DNS_NAME = ".sharepoint.com";
/* static const string */ _SHARED_DOCUMENTS = "/shared documents/";
/* static const string */ _SHARED20DOCUMENTS = "/shared%20documents/";
/* static const string */ _DNS_NAME = "graph.microsoft.com/v1.0/sites/";
/* static const string */ _BEGIN_SITE = ":/";
/* static const string */ _GET_DRIVES = "/drives?$select=id,webUrl,driveType";
/* static const string */ _DRIVE_ROOT = "/drive/root";
/* static const string */ _DRIVES = "/drives/";
/* static const string */ _ROOT = "/root";
/* static const string */ _CHILDREN = "/children";
/* static const string */ _BEGIN_PATH = ":/";
/* static const string */ _PATH_CONTENT = ":/content";
/* static const string */ _PATH_CHILDREN = ":/children";
/* static const string */ _AUTHORIZATION = "Authorization";
/* static const string */ _CONTENT_TYPE = "Content-Type";
/* static const string */ _CACHE_CONTROL = "Cache-Control";
/* static const string */ _PRAGMA = "Pragma";
/* static const string */ _EXPIRES = "Expires";
/* static const string */ _BEARER = "Bearer ";
/* static const string */ _APPLICATION_JSON = "application/json";
/* static const string */ _APPLICATION_OCTET_STREAM = "application/octet-stream";
/* static const string */ _NO_STORE = "no-store,no-cache,must-revalidate";
/* static const string */ _NO_CACHE = "no-cache";

/* T */ _PARSE_WEBURL = function (/* string */Value_) /* const */
   {
   var u;
   var v;
   var w;
   var x;

   w = Value_[_TOLOWERCASE]();

   if (w[_INDEXOF](_HTTPS) === 0)
      {
      if (_HTTPS[_LENGTH] === Value_[_LENGTH])
         {
         return (_NULL);
         }

      Value_ = Value_[_SUBSTRING](_HTTPS[_LENGTH], Value_[_LENGTH]);
      w = Value_[_TOLOWERCASE]();
      }

   u = w[_LASTINDEXOF](_SHARED_DOCUMENTS);
   v = w[_LASTINDEXOF](_SHARED20DOCUMENTS);

   if (u === 0 || v === 0)
      {
      return (_NULL);
      }
   else if (u !== _EOF && u === Value_[_LENGTH] - _SHARED_DOCUMENTS[_LENGTH])
      {
      Value_ = Value_[_SUBSTRING](0, u);
      w = Value_[_TOLOWERCASE]();
      }
   else if (v !== _EOF && v === Value_[_LENGTH] - _SHARED20DOCUMENTS[_LENGTH])
      {
      Value_ = Value_[_SUBSTRING](0, v);
      w = Value_[_TOLOWERCASE]();
      }

   u = w[_INDEXOF](_SP_DNS_NAME);

   if (u <= 0)
      {
      return (_NULL);
      }

   x = [];
   x[0] = Value_[_SUBSTRING](0, u);
   u += _SP_DNS_NAME[_LENGTH];

   if (u < Value_[_LENGTH])
      {
      if (Value_[_CHARAT](u) !== _SLASH)
         {
         return (_NULL);
         }

      v = Value_[_LENGTH] - 1;

      if (Value_[_CHARAT](v) !== _SLASH)
         {
         ++ v;
         }

      ++ u;

      if (u < v)
         {
         x[1] = Value_[_SUBSTRING](u, v);
         }
      else
         {
         x[1] = _EMPTY;
         }
      }
   else
      {
      x[1] = _EMPTY;
      }

   return (x);
   };

/* bool */ _CHARSET_CHECK = function (/* string */Value_) /* const */
   {
   var u;
   var s;
   var t;

   if (Value_[_LENGTH] < 3 || Value_[_LENGTH] > 27)
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

/* string */ _SP_SITE = function (
      /* string */Tenant_, /* string */RelativePath_) /* const */
   {
   return (_HTTPS + _DNS_NAME + Tenant_ + _SP_DNS_NAME + _BEGIN_SITE + RelativePath_);
   };

/* string */ _SITE_ID = function (/* string */SiteId_) /* const */
   {
   return (_HTTPS + _DNS_NAME + SiteId_);
   };

/* string */ _ENCODE = function (/* string */Value_, /* bool */Library_) /* const */
   {
   var u;
   var v;
   var w;
   var s;

   if (Value_[_INDEXOF](_COLON) !== _EOF
         || Library_ && Value_[_INDEXOF](_SLASH) !== _EOF)
      {
      return (_EMPTY);
      }

   try
      {
      u = _EMPTY;
      v = 0;

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
         else if (w === _QUESTION
               || w === _NUMBER_SIGN)
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

      if (Library_)
         {
         u = u[_TOLOWERCASE]();
         }

      return (u);
      }
   catch (e)
      {
      return (_EMPTY);
      }
   };

/* string[] */ _PATH_ARRAY = function (/* string */Value_) /* const */
   {
   var u;
   var v;
   var s;
   var t;

   u = [];
   v = 0;

   for (s = 0 , t = 0; s < Value_[_LENGTH]; )
      {
      if (Value_[_CHARAT](s) === _SLASH)
         {
         u[t] = Value_[_SUBSTRING](v, s);
         ++ t;
         ++ s;
         v = s;
         }
      else
         {
         ++ s;
         }
      }

   u[t] = Value_[_SUBSTRING](v, Value_[_LENGTH]);

   return (u);
   };

/* string */ _WEB_ADDRESS = function (/* string */Value_) /* const */
   {
   var u;

   u = Value_[_LASTINDEXOF](_SLASH);

   if (u !== _EOF && u === Value_[_LENGTH] - 1)
      {
      Value_ = Value_[_SUBSTRING](0, u);
      }

   u = Value_[_LASTINDEXOF](_SLASH);

   if (u > 0)
      {
      ++ u;

      if (u < Value_[_LENGTH])
         {
         return (Value_[_SUBSTRING](u, Value_[_LENGTH])[_TOLOWERCASE]());
         }
      }

   return (_EMPTY);
   };

/* string */ _DRIVE_ID = function (/* string */Value_) /* const */
   {
   var u;

   u = _SP_LIB + Value_;

   if (u in _DriveId)
      {
      return (_DriveId[u]);
      }

   return (_EMPTY);
   };

/* string */ _DRIVE_PATH = function (
      /* string */Library_,
      /* const string[] */PathArray_, /* size_t */Index_,
      /* bool */Current_, /* bool */Content_) /* const */
   {
   var u;
   var v;
   var s;

   if (Library_ === _EMPTY)
      {
      u = _DRIVE_ROOT;
      }
   else
      {
      u = _DRIVES + _DRIVE_ID(Library_) + _ROOT;
      }

   v = _EMPTY;

   if (Current_)
      {
      ++ Index_;
      }

   for (s = 0; s < Index_; ++ s)
      {
      if (v !== _EMPTY)
         {
         v += _SLASH;
         }

      v += PathArray_[s];
      }

   if (v === _EMPTY)
      {
      if (Content_)
         {
         u += _CHILDREN;
         }
      }
   else
      {
      u += _BEGIN_PATH + v;

      if (Current_)
         {
         if (Content_)
            {
            if (Index_ < PathArray_[_LENGTH])
               {
               u += _PATH_CHILDREN;
               }
            else
               {
               u += _PATH_CONTENT;
               }
            }
         }
      else if (Content_)
         {
         u += _PATH_CHILDREN;
         }
      }

   return (u);
   };

/* void */ _ADD_DRIVE_ID = function (/* string */Library_, /* string */DriveId_)
   {
   if (_DRIVE_ID(Library_) === _EMPTY)
      {
      _DriveId[_SP_LIB + Library_] = DriveId_;
      }
   };

/* void */ _QUICK_XOR_HASH_INIT = function (/* char[] */Hash_)
   {
   var s;

   for (s = 0; s < 20; ++ s)
      {
      Hash_[s] = 0;
      }
   };

/* size_t */ _QUICK_XOR_HASH_UPDATE = function (/* char[] */Hash_,
      /* const char[] */Input_, /* size_t */Offset_)
   {
   var u;
   var v;
   var s;

   for (s = 0; s < Input_[_LENGTH]; ++ s)
      {
      u = Offset_ >>> 3;
      v = Offset_ & 7;
      Hash_[u] ^= Input_[s] << v;

      if (v !== 0)
         {
         ++ u;

         if (u === 20)
            {
            u = 0;
            }

         Hash_[u] ^= Input_[s] >>> 8 - v;
         }

      Offset_ += 11;

      if (Offset_ >= 160)
         {
         Offset_ -= 160;
         }
      }

   return (Offset_);
   };

/* void */ _QUICK_XOR_HASH_FINAL = function (/* char[] */Hash_, /* size_t */Length_)
   {
   var u;
   var v;
   var s;
   var t;

   u = _FLOOR(Length_ / 0x100000000);
   v = Length_ >>> 0;

   for (s = 12 , t = 0; s < 16; ++ s , t += 8)
      {
      Hash_[s] ^= v >>> t;
      }

   for (t = 0; s < 20; ++ s , t += 8)
      {
      Hash_[s] ^= u >>> t;
      }
   };

/* void */ _COMPUTE_QUICK_XOR_HASH = function (/* char[] */Hash_, /* const char[] */Input_)
   {
   var u;

   _QUICK_XOR_HASH_INIT(Hash_);
   u = 0;
   u = _QUICK_XOR_HASH_UPDATE(Hash_, Input_, u);
   _QUICK_XOR_HASH_FINAL(Hash_, Input_[_LENGTH]);
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
   var u;

   try
      {
      u = MsalResponse_.accessToken;

      if (typeof u !== _TYPEOF_STRING
            || u === _EMPTY)
         {
         u = _NULL;
         }
      }
   catch (e)
      {
      u = _NULL;
      }

   if (u !== _NULL)
      {
      _SignedIn = true;
      _RetryCount = 0;
      _RESUME(u);
      }
   else
      {
      _RetryCount = 0;
      _Status = _MSAL_ERROR;
      _Ready = true;
      _Callback();
      }
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

/* void */ _RESUME = function (/* string */BearerToken_)
   {
   _BearerToken = BearerToken_;
   _RESOLVE();
   };

/* void */ _RESOLVE = function (/* void */)
   {
   if (_SiteId === _EMPTY)
      {
      _SITE_ID_REQUEST();
      }
   else if (_Library !== _EMPTY && _DRIVE_ID(_Library) === _EMPTY)
      {
      _DRIVE_ID_REQUEST(_EMPTY);
      }
   else
      {
      _REQUEST_INIT();
      }
   };

/* void */ _SITE_ID_REQUEST = function (/* void */)
   {
   try
      {
      _Xhr = new _XMLHTTPREQUEST();
      _Xhr[_OPEN](_GET, _SpSite);
      _Xhr[_SETREQUESTHEADER](_AUTHORIZATION, _BEARER + _BearerToken);
      _Xhr[_SETREQUESTHEADER](_CACHE_CONTROL, _NO_STORE);
      _Xhr[_SETREQUESTHEADER](_PRAGMA, _NO_CACHE);
      _Xhr[_SETREQUESTHEADER](_EXPIRES, _ZERO);
      _Xhr[_ONLOAD] = _SITE_ID_THEN;
      _Xhr[_ONABORT] = _SITE_ID_CATCH;
      _Xhr[_ONERROR] = _SITE_ID_CATCH;
      _Xhr[_ONTIMEOUT] = _SITE_ID_CATCH;
      _Xhr[_RESPONSETYPE] = _JSON;
      _Xhr[_TIMEOUT] = _Milliseconds;
      _Xhr[_SEND]();
      }
   catch (e)
      {
      _Xhr[_ONLOAD] = _NULL;
      _Xhr[_ONABORT] = _NULL;
      _Xhr[_ONERROR] = _NULL;
      _Xhr[_ONTIMEOUT] = _NULL;
      _Xhr = _NULL;
      _BearerToken = _EMPTY;
      _Status = _CLIENT_ERROR;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _SITE_ID_THEN = function (/* T */)
   {
   _SITE_ID_PROCESS(true);
   };

/* void */ _SITE_ID_CATCH = function (/* T */)
   {
   _SITE_ID_PROCESS(false);
   };

/* void */ _SITE_ID_PROCESS = function (/* bool */Onload_)
   {
   var u;

   if (Onload_)
      {
      try
         {
         u = _Xhr[_STATUS];

         if (u === _OK)
            {
            u = _Xhr[_RESPONSE];

            if (u !== _NULL
                  && typeof u === _TYPEOF_OBJECT
                  && "id" in u
                  && typeof u.id === _TYPEOF_STRING
                  && u.id !== _EMPTY)
               {
               _SiteId = _SITE_ID(u.id);
               }
            else
               {
               _Status = _RESOLVE_SITE_ERROR;
               }
            }
         else
            {
            _Status = _RESOLVE_SITE_ERROR;
            }
         }
      catch (e)
         {
         }
      }

   _Xhr[_ONLOAD] = _NULL;
   _Xhr[_ONABORT] = _NULL;
   _Xhr[_ONERROR] = _NULL;
   _Xhr[_ONTIMEOUT] = _NULL;
   _Xhr = _NULL;

   if (_SiteId !== _EMPTY)
      {
      _RESOLVE();
      }
   else
      {
      _BearerToken = _EMPTY;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _DRIVE_ID_REQUEST = function (/* string */NextLink_)
   {
   try
      {
      _Xhr = new _XMLHTTPREQUEST();
      _Xhr[_OPEN](_GET,
         NextLink_ === _EMPTY ?
            _SiteId + _GET_DRIVES
         :
            NextLink_);
      _Xhr[_SETREQUESTHEADER](_AUTHORIZATION, _BEARER + _BearerToken);
      _Xhr[_SETREQUESTHEADER](_CACHE_CONTROL, _NO_STORE);
      _Xhr[_SETREQUESTHEADER](_PRAGMA, _NO_CACHE);
      _Xhr[_SETREQUESTHEADER](_EXPIRES, _ZERO);
      _Xhr[_ONLOAD] = _DRIVE_ID_THEN;
      _Xhr[_ONABORT] = _DRIVE_ID_CATCH;
      _Xhr[_ONERROR] = _DRIVE_ID_CATCH;
      _Xhr[_ONTIMEOUT] = _DRIVE_ID_CATCH;
      _Xhr[_RESPONSETYPE] = _JSON;
      _Xhr[_TIMEOUT] = _Milliseconds;
      _Xhr[_SEND]();
      }
   catch (e)
      {
      _Xhr[_ONLOAD] = _NULL;
      _Xhr[_ONABORT] = _NULL;
      _Xhr[_ONERROR] = _NULL;
      _Xhr[_ONTIMEOUT] = _NULL;
      _Xhr = _NULL;
      _BearerToken = _EMPTY;
      _Status = _CLIENT_ERROR;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _DRIVE_ID_THEN = function (/* T */)
   {
   _DRIVE_ID_PROCESS(true);
   };

/* void */ _DRIVE_ID_CATCH = function (/* T */)
   {
   _DRIVE_ID_PROCESS(false);
   };

/* void */ _DRIVE_ID_PROCESS = function (/* bool */Onload_)
   {
   var u;
   var v;
   var w;
   var x = false;
   var y = false;
   var z;
   var s;

   if (Onload_)
      {
      try
         {
         u = _Xhr[_STATUS];

         if (u === _OK)
            {
            u = _Xhr[_RESPONSE];

            if (u !== _NULL
                  && typeof u === _TYPEOF_OBJECT
                  && "value" in u)
               {
               if ("@odata.nextLink" in u)
                  {
                  y = true;
                  z = u["@odata.nextLink"];
                  }

               u = u.value;

               if (u !== _NULL
                     && typeof u === _TYPEOF_OBJECT
                     && _LENGTH in u
                     && typeof u[_LENGTH] === _TYPEOF_NUMBER)
                  {
                  for (s = 0; s < u[_LENGTH]; ++ s)
                     {
                     if (s in u)
                        {
                        v = u[s];

                        if (v !== _NULL
                              && typeof v === _TYPEOF_OBJECT
                              && "driveType" in v
                              && v.driveType === "documentLibrary"
                              && "webUrl" in v
                              && typeof v.webUrl === _TYPEOF_STRING
                              && "id" in v
                              && typeof v.id === _TYPEOF_STRING
                              && v.id !== _EMPTY)
                           {
                           w = _WEB_ADDRESS(v.webUrl);

                           if (w !== _EMPTY)
                              {
                              _ADD_DRIVE_ID(w, v.id);
                              }
                           }
                        }
                     }
                  }
               }
            }

         if (_DRIVE_ID(_Library) !== _EMPTY)
            {
            x = true;
            }
         else if (! y)
            {
            _Status = _RESOLVE_LIBRARY_ERROR;
            }
         }
      catch (e)
         {
         }
      }

   _Xhr[_ONLOAD] = _NULL;
   _Xhr[_ONABORT] = _NULL;
   _Xhr[_ONERROR] = _NULL;
   _Xhr[_ONTIMEOUT] = _NULL;
   _Xhr = _NULL;

   if (x)
      {
      _RESOLVE();
      }
   else if (y)
      {
      _DRIVE_ID_REQUEST(z);
      }
   else
      {
      _BearerToken = _EMPTY;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _REQUEST_INIT = function (/* void */)
   {
   _PathArray = _PATH_ARRAY(_Path);
   _FolderPath = _Library === _EMPTY ?
         _SP_ROOT
      :
         _SP_PATH + _Library;
   _Index = _EOF;
   _Folder = false;

   if (_HttpMethod === _PUT)
      {
      _TRAVERSE(0);
      }
   else
      {
      _TRAVERSE(_PathArray[_LENGTH] - 1);
      }

   _REQUEST(true, ! _Folder && _HttpMethod !== _DELETE);
   };

/* void */ _CACHE = function (/* void */)
   {
   _FolderCache[_FolderPath] = true;
   };

/* void */ _TRAVERSE = function (/* size_t */Index_)
   {
   var u;
   var v;
   var w;

   w = _PathArray[_LENGTH] - 1;
   v = _Index;

   if (Index_ > v)
      {
      for (; Index_ < w; )
         {
         _FolderPath += _SLASH + _PathArray[Index_][_TOLOWERCASE]();

         if (! (_FolderPath in _FolderCache))
            {
            break;
            }

         ++ Index_;
         }
      }

   _Index = Index_;
   u = _Folder;
   _Folder = _Index < w;

   if (_Folder)
      {
      if (_Index !== v)
         {
         _HttpMethod = _GET;
         }
      else
         {
         _HttpMethod = _POST;
         }
      }
   else if (u)
      {
      _HttpMethod = _PUT;
      }
   };

/* void */ _REQUEST = function (/* bool */Current_, /* bool */Content_)
   {
   var u;
   var v;
   var w;

   try
      {
      _Xhr = new _XMLHTTPREQUEST();
      _Xhr[_OPEN](_HttpMethod,
         _SiteId + _DRIVE_PATH(_Library, _PathArray, _Index, Current_, Content_));
      _Xhr[_SETREQUESTHEADER](_AUTHORIZATION, _BEARER + _BearerToken);
      v = _HttpMethod === _PUT;
      w = _HttpMethod === _POST;

      if (v)
         {
         _Xhr[_SETREQUESTHEADER](_CONTENT_TYPE, _APPLICATION_OCTET_STREAM);
         }
      else if (w)
         {
         _Xhr[_SETREQUESTHEADER](_CONTENT_TYPE, _APPLICATION_JSON);
         }

      u = _HttpMethod === _GET;

      if (u || v)
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
         if (Content_)
            {
            _Xhr[_RESPONSETYPE] = _ARRAYBUFFER;
            }
         else
            {
            _Xhr[_RESPONSETYPE] = _JSON;
            }
         }
      else if (v)
         {
         _Xhr[_RESPONSETYPE] = _JSON;
         }

      _Xhr[_TIMEOUT] = _Milliseconds;

      if (w)
         {
         _PostObject.name = _PathArray[_Index];
         _Xhr[_SEND](_STRINGIFY(_PostObject));
         }
      else if (_RequestBody === _NULL)
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
      _BearerToken = _EMPTY;
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
   var v;
   var w;
   var x = false;
   var y;
   var z;

   if (Onload_)
      {
      try
         {
         if (_Folder)
            {
            y = _Xhr[_STATUS];

            if (_HttpMethod === _GET)
               {
               if (y === _OK)
                  {
                  z = _Xhr[_RESPONSE];

                  if (z !== _NULL
                        && typeof z === _TYPEOF_OBJECT
                        && "folder" in z
                        && z.folder !== _NULL
                        && typeof z.folder === _TYPEOF_OBJECT)
                     {
                     _CACHE();
                     _TRAVERSE(_Index + 1);
                     v = true;
                     w = ! _Folder;
                     x = true;
                     }
                  else
                     {
                     _Status = _CREATE_FOLDER_ERROR;
                     }
                  }
               else if (y === _NOT_FOUND)
                  {
                  _TRAVERSE(_Index);
                  v = false;
                  w = true;
                  x = true;
                  }
               else
                  {
                  _Status = _CREATE_FOLDER_ERROR;
                  }
               }
            else if (y === _CREATED)
               {
               _CACHE();
               _TRAVERSE(_Index + 1);
               v = true;
               w = ! _Folder;
               x = true;
               }
            else if (y === _CONFLICT)
               {
               _Status = _CONFLICT;
               }
            else
               {
               _Status = _CREATE_FOLDER_ERROR;
               }
            }
         else
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
               else if (_HttpMethod === _PUT)
                  {
                  v = _Xhr[_RESPONSE];

                  if (v !== _NULL)
                     {
                     v = v.file.hashes.quickXorHash;

                     if (typeof v === _TYPEOF_STRING)
                        {
                        _COMPUTE_QUICK_XOR_HASH(_Hash, _RequestBody);
                        w = _UTF16(_BASE64(_Hash, true));
                        u = v === w;
                        }
                     }
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

   if (x)
      {
      _REQUEST(v, w);
      }
   else
      {
      _BearerToken = _EMPTY;
      _ResponseBody = u;
      _Ready = true;
      _Callback();
      }
   };

/* void */ _EXPLICIT_MSAL_THEN = function (/* T */MsalResponse_)
   {
   var u;
   var v;

   try
      {
      u = MsalResponse_.account.username;

      if (typeof u !== _TYPEOF_STRING
            || u === _EMPTY)
         {
         u = _NULL;
         }
      }
   catch (e)
      {
      u = _NULL;
      }

   v = _Rfc822Name === _EMPTY;

   if (u !== _NULL && (v || _Rfc822Name === u))
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
/* static string */ _SpSite = _EMPTY;
/* static string */ _SiteId = _EMPTY;
/* static T */ _DriveId = {};
/* static T */ _FolderCache = {};
/* static bool */ _SignedIn = false;
/* static size_t */ _RetryCount = 0;
/* static bool */ _ExplicitSignIn = true;
/* static char[] */ _Hash = new _UINT8ARRAY(20);
/* static string */ _BearerToken = _EMPTY;
/* static string[] */ _PathArray = [];
/* static string */ _FolderPath = _EMPTY;
/* static int */ _Index = _EOF;
/* static bool */ _Folder = false;
/* static T */ _PostObject =
   {
   name: "",
   folder: {},
   "@microsoft.graph.conflictBehavior": "fail"
   };
/* static T */ _Xhr = _NULL;
/* static long */ _Milliseconds = 30000;
/* static string */ _HttpMethod = _EMPTY;
/* static string */ _Library = _EMPTY;
/* static string */ _Path = _EMPTY;
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
 * SharePoint Online Driver
 *
 *    sposdrv::init(clientId, authority, rfc822Name, webUrl)
 *
 *    sposdrv::upload(library, path, File)
 *
 *    sposdrv::download(library, path)
 *
 *    sposdrv::ready() const
 *       ->
 *          true      upload/download/remove available
 *          false      upload/download/remove not available
 *
 *    sposdrv::response() const
 *       ->
 *          nullable
 *          File   (char[])      GET response
 *          true      PUT integrity verification passed
 *          false      PUT integrity verification failed
 *
 *    sposdrv::redirected() const
 *       ->
 *          true      3xx Redirection HTTP status codes (rarely true)
 *          false      other HTTP status codes
 *
 *    sposdrv::status() const
 *       ->
 *          statusCode   (int)
 *
 *    sposdrv::callback(callbackFunction)
 *
 *    sposdrv::sign_in(interaction)
 *
 *    sposdrv::remove(library, path)
 *
 *    sposdrv::timeout(milliseconds)
 *
 *    sposdrv::abort()
 *
 *    sposdrv::clear_cache(library, path)
 *
 *    sposdrv::quick_xor_hash::init(hash)
 *
 *    sposdrv::quick_xor_hash::update(hash, message, epsilon)
 *       ->
 *          epsilon   (size_t)
 *
 *    sposdrv::quick_xor_hash::final(hash, length)
 *
 *    sposdrv::quick_xor_hash::compute(message) const
 *       ->
 *          hash   (char[])
 *
 *    clientId   (string)
 *
 *    authority   (string)
 *
 *    rfc822Name   (string)
 *
 *    webUrl   (string)      site URL on SharePoint Online
 *
 *    library   (string)      web address for document library
 *
 *    path   (string)
 *
 *    statusCode   (int)
 *       sposdrv::RETRYABLE      network and other retryable errors
 *       sposdrv::MSAL_ERROR      general MSAL errors
 *       sposdrv::CLIENT_ERROR      XMLHttpRequest exception
 *       sposdrv::ARGUMENT_ERROR      invalid library or path
 *       sposdrv::RESOLVE_SITE_ERROR      resolve site URL errors
 *       sposdrv::RESOLVE_LIBRARY_ERROR      resolve document library errors
 *       sposdrv::CREATE_FOLDER_ERROR      create folder errors (excluding CONFLICT)
 *       sposdrv::EXPLICIT_SIGNED_IN      explicit sign-in success
 *       sposdrv::OK      GET or PUT (update) success
 *       sposdrv::CREATED      PUT (create) success
 *       sposdrv::NO_CONTENT      DELETE success
 *       sposdrv::UNAUTHORIZED
 *       sposdrv::FORBIDDEN
 *       sposdrv::NOT_FOUND
 *       sposdrv::CONFLICT
 *       sposdrv::CONTENT_TOO_LARGE
 *       sposdrv::INTERNAL_SERVER_ERROR
 *       sposdrv::SERVICE_UNAVAILABLE
 *       ...
 *
 *    callbackFunction   (void (*)(void))
 *
 *    interaction   (bool)
 *
 *    milliseconds   (long)      XMLHttpRequest.timeout
 *
 *    message   (char[])
 *
 *    length   (size_t)
 */

/* const int */ sposdrv.RETRYABLE = _EOF;
/* const int */ sposdrv.MSAL_ERROR = _MSAL_ERROR;
/* const int */ sposdrv.CLIENT_ERROR = _CLIENT_ERROR;
/* const int */ sposdrv.ARGUMENT_ERROR = _ARGUMENT_ERROR;
/* const int */ sposdrv.RESOLVE_SITE_ERROR = _RESOLVE_SITE_ERROR;
/* const int */ sposdrv.RESOLVE_LIBRARY_ERROR = _RESOLVE_LIBRARY_ERROR;
/* const int */ sposdrv.CREATE_FOLDER_ERROR = _CREATE_FOLDER_ERROR;
/* const int */ sposdrv.EXPLICIT_SIGNED_IN = _EXPLICIT_SIGNED_IN;
/* const int */ sposdrv.OK = _OK;
/* const int */ sposdrv.CREATED = _CREATED;
/* const int */ sposdrv.NO_CONTENT = _NO_CONTENT;
/* const int */ sposdrv.UNAUTHORIZED = _UNAUTHORIZED;
/* const int */ sposdrv.FORBIDDEN = _FORBIDDEN;
/* const int */ sposdrv.NOT_FOUND = _NOT_FOUND;
/* const int */ sposdrv.CONFLICT = _CONFLICT;
/* const int */ sposdrv.CONTENT_TOO_LARGE = _CONTENT_TOO_LARGE;
/* const int */ sposdrv.INTERNAL_SERVER_ERROR = _INTERNAL_SERVER_ERROR;
/* const int */ sposdrv.SERVICE_UNAVAILABLE = _SERVICE_UNAVAILABLE;

/* void */ sposdrv.init = function (
      /* string */ClientId_, /* string */Authority_,
      /* string */Rfc822Name_,
      /* string */WebUrl_)
   {
   var u;
   var v;

   if (_MsalInstance === _NULL)
      {
      u = _PARSE_WEBURL(WebUrl_);

      if (u !== _NULL && _CHARSET_CHECK(u[0]))
         {
         v = _ENCODE(u[1], false);

         if (u[1] === _EMPTY || v !== _EMPTY)
            {
            try
               {
               _MsalInstance = new _MSAL.PublicClientApplication({
                  auth:
                     {
                     clientId: ClientId_,
                     authority: Authority_
                     }
                  });
               }
            catch (e)
               {
               _MsalInstance = _NULL;
               }

            if (_MsalInstance !== _NULL)
               {
               _Rfc822Name = Rfc822Name_;
               _SpSite = _SP_SITE(u[0], v);
               _Ready = _Rfc822Name !== _EMPTY;
               }
            }
         }
      }
   };

/* void */ sposdrv.upload = function (/* string */Library_, /* string */Path_,
      /* const char[] */File_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Library_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Library_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _PUT;
         _Library = u;
         _Path = v;
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

/* void */ sposdrv.download = function (/* string */Library_, /* string */Path_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Library_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Library_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _GET;
         _Library = u;
         _Path = v;
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

/* bool */ sposdrv.ready = function (/* void */) /* const */
   {
   return (_Ready);
   };

/* T */ sposdrv.response = function (/* void */) /* const */
   {
   return (_ResponseBody);
   };

/* bool */ sposdrv.redirected = function (/* void */) /* const */
   {
   return (_HttpRedirected);
   };

/* int */ sposdrv.status = function (/* void */) /* const */
   {
   return (_Status);
   };

/* void */ sposdrv.callback = function (/* void (*)(void) */Callback_)
   {
   if (_ExplicitSignIn && (_Ready || _Rfc822Name === _EMPTY))
      {
      _Callback = Callback_;
      }
   };

/* void */ sposdrv.sign_in = function (/* bool */Interaction_)
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

/* void */ sposdrv.remove = function (/* string */Library_, /* string */Path_)
   {
   var u;
   var v;

   if (_Ready)
      {
      u = _ENCODE(Library_, true);
      v = _ENCODE(Path_, false);

      if (v !== _EMPTY
            && (Library_ === _EMPTY || u !== _EMPTY))
         {
         _Ready = false;
         _HttpMethod = _DELETE;
         _Library = u;
         _Path = v;
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

/* void */ sposdrv.timeout = function (/* long */Milliseconds_)
   {
   if (_ExplicitSignIn && (_Ready || _Rfc822Name === _EMPTY))
      {
      _Milliseconds = Milliseconds_ < 0 ? 0 : Milliseconds_;
      }
   };

/* void */ sposdrv.abort = function (/* void */)
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

/* void */ sposdrv.clear_cache = function (/* string */Library_, /* string */Path_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var s;
   var t;

   if (_Ready)
      {
      u = _ENCODE(Library_, true);
      v = _ENCODE(Path_, false);
      w = u === _EMPTY;
      r = v === _EMPTY;

      if ((Path_ === _EMPTY || ! r)
            && (Library_ === _EMPTY || ! w))
         {
         x = w ?
               r ?
                  _SP_ROOT + _SLASH
               :
                  _SP_ROOT + _SLASH + v[_TOLOWERCASE]() + _SLASH
            :
               r ?
                  _SP_PATH + u + _SLASH
               :
                  _SP_PATH + u + _SLASH + v[_TOLOWERCASE]() + _SLASH;
         y = [];
         s = 0;

         for (z in _FolderCache)
            {
            q = z + _SLASH;

            if (q[_INDEXOF](x) === 0)
               {
               y[s] = z;
               ++ s;
               }
            }

         for (t = 0; t < s; ++ t)
            {
            delete _FolderCache[y[t]];
            }
         }
      }
   };

/* namespace */ sposdrv.quick_xor_hash = {};

/* void */ sposdrv.quick_xor_hash.init = function (/* char[] */Hash_)
   {
   _QUICK_XOR_HASH_INIT(Hash_);
   };

/* size_t */ sposdrv.quick_xor_hash.update = function (/* char[] */Hash_,
      /* const char[] */Input_, /* size_t */Offset_)
   {
   return (_QUICK_XOR_HASH_UPDATE(Hash_, Input_, Offset_));
   };

/* void */ sposdrv.quick_xor_hash.final = function (/* char[] */Hash_, /* size_t */Length_)
   {
   _QUICK_XOR_HASH_FINAL(Hash_, Length_);
   };

/* char[] */ sposdrv.quick_xor_hash.compute = function (/* const char[] */Input_) /* const */
   {
   var u;

   u = new _UINT8ARRAY(20);
   _COMPUTE_QUICK_XOR_HASH(u, Input_);

   return (u);
   };

})(sposdrv);



/* EOF */