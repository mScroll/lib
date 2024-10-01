/*
 * 1.0.103.0
 * COPYRIGHT (c) 2022 mScroll
 */



/* namespace */ var x509 = {};

(function (x509){

"use strict";

var _WINDOW = window;
var _STRING = _WINDOW.String;
var _FROMCHARCODE = _STRING.fromCharCode;
var _DATE = _WINDOW.Date;
var _UTC = _DATE.UTC;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _LENGTH = "length";
var _CHARAT = "charAt";
var _CHARCODEAT = "charCodeAt";
var _SUBSTRING = "substring";
var _INDEXOF = "indexOf";
var _LASTINDEXOF = "lastIndexOf";
var _GETUTCFULLYEAR = "getUTCFullYear";
var _GETUTCMONTH = "getUTCMonth";
var _GETUTCDATE = "getUTCDate";
var _GETUTCHOURS = "getUTCHours";
var _GETUTCMINUTES = "getUTCMinutes";
var _GETUTCSECONDS = "getUTCSeconds";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _TYPEOF_STRING = typeof "";
var _NULL = null;

var _STD = std;
var _TO_HEX = _STD.to_hex;
var _TO_DEC = _STD.to_dec;
var _ENUMS = _STD.enums;
var _VECTOR = _STD.vector;
var _HTON = _STD.hton;

var _INTF = intf;
var _BASE64 = _INTF.base64;
var _DEC64 = _INTF.dec64;
var _UTF8 = _INTF.utf8;
var _UTF16 = _INTF.utf16;
var _SHA1I = _INTF.sha1i;
var _SHA1A = _INTF.sha1a;
var _CONCAT = _INTF.concat;

var _EOF;
var _ID_RSA;
var _ID_SHA1RSA;
var _ID_SHA256RSA;
var _ID_ED25519;
var _DIGITAL_SIGNATURE;
var _NON_REPUDIATION;
var _KEY_ENCIPHERMENT;
var _DATA_ENCIPHERMENT;
var _KEY_AGREEMENT;
var _KEY_CERT_SIGN;
var _CRL_SIGN;
var _ENCIPHER_ONLY;
var _DECIPHER_ONLY;
var _UNSPECIFIED;
var _KEY_COMPROMISE;
var _CA_COMPROMISE;
var _AFFILIATION_CHANGED;
var _SUPERSEDED;
var _CESSATION_OF_OPERATION;
var _CERTIFICATE_HOLD;
var _REMOVE_FROM_CRL;
var _PRIVILEGE_WITHDRAWN;
var _AA_COMPROMISE;
var _PATH_BUILDING;
var _PUSH_STACK;
var _HTTP_GET;
var _PATH_VALIDATION;
var _NOT_TRUSTED;
var _NOT_FOUND;
var _SIGNATURE_NOT_VALID;
var _NOT_IMPLEMENTED;
var _EXPIRED;
var _DN_NOT_MATCH;
var _NOT_CA;
var _PATH_TOO_LONG;
var _KEY_CERT_SIGN_NOT_SET;
var _OK;
var _CRL_REASON;
var _CRL_REASON_UNSPECIFIED;
var _CRL_REASON_KEY_COMPROMISE;
var _CRL_REASON_CA_COMPROMISE;
var _CRL_REASON_AFFILIATION_CHANGED;
var _CRL_REASON_SUPERSEDED;
var _CRL_REASON_CESSATION_OF_OPERATION;
var _CRL_REASON_CERTIFICATE_HOLD;
var _CRL_REASON_REMOVE_FROM_CRL;
var _CRL_REASON_PRIVILEGE_WITHDRAWN;
var _CRL_REASON_AA_COMPROMISE;
var _CRL_REASON_MAX;
var _UNREVOKED;
var _UNDETERMINED;
var _CRL_EXPIRED;
var _CRL_DN_NOT_MATCH;
var _CRL_SIGN_NOT_SET;
var _CRL_SIGNATURE_NOT_VALID;
var _EMPTY;
var _0;
var _Z;
var _AT;
var _LF;
var _BEGIN_PUBLIC_KEY;
var _END_PUBLIC_KEY;
var _BEGIN_PRIVATE_KEY;
var _END_PRIVATE_KEY;
var _BEGIN_CERTIFICATE_REQUEST;
var _END_CERTIFICATE_REQUEST;
var _BEGIN_CERTIFICATE;
var _END_CERTIFICATE;
var _BEGIN_X509_CRL;
var _END_X509_CRL;
var _APPLICATION_PKIX_CERT;
var _APPLICATION_PKIX_CRL;
var _BOOLEAN;
var _INTEGER;
var _BITSTRING;
var _OCTETSTRING;
var _NULLTAG;
var _OID;
var _ENUMERATED;
var _UTF8STRING;
var _PRINTABLESTRING;
var _IA5STRING;
var _UTCTIME;
var _GENERALIZEDTIME;
var _SEQUENCE;
var _SET;
var _PRIMITIVE_0;
var _PRIMITIVE_1;
var _PRIMITIVE_2;
var _PRIMITIVE_6;
var _CONSTRUCTED_0;
var _CONSTRUCTED_3;
var _OID_DC;
var _OID_RSA;
var _OID_SHA1RSA;
var _OID_SHA256RSA;
var _OID_EXTENSIONREQUEST;
var _OID_AUTHORITYINFOACCESS;
var _OID_CAISSUERS;
var _OID_ED25519;
var _OID_CN;
var _OID_C;
var _OID_L;
var _OID_S;
var _OID_O;
var _OID_OU;
var _OID_SUBJECTKEYIDENTIFIER;
var _OID_KEYUSAGE;
var _OID_SUBJECTALTNAME;
var _OID_BASICCONSTRAINTS;
var _OID_CRLNUMBER;
var _OID_CRLREASON;
var _OID_CRLDISTRIBUTIONPOINTS;
var _OID_AUTHORITYKEYIDENTIFIER;
var _OIDLIST;
var _IDLIST;
var _DN_STRINGLIST;
var _DN_OIDLIST;
var _EXTREQ_OIDLIST;
var _EXT_3_OIDLIST;
var _EXT_0_OIDLIST;
var _NUMBERLIST;
var _PRINTABLELIST;
var _ASN1TAG;
var _ATE;
var _V1;
var _V2;
var _V3;
var _TO_OCTETS;
var _INT20OCTETS;
var _SERIAL_NUMBER;
var _ALGORITHM_IDENTIFIER;
var _TIME;
var _ASN1TIME;
var _VALIDITY;
var _RDN;
var _DN;
var _PUBLIC;
var _SUBJECT_PUBLIC_KEY_INFO;
var _PRIVATE_KEY_INFO;
var _REVOKED_CERTIFICATES;
var _CRLDISTRIBUTIONPOINTS;
var _AUTHORITYINFOACCESS;
var _AUTHORITYKEYIDENTIFIER;
var _SUBJECTKEYIDENTIFIER;
var _SUBJECTALTNAME;
var _KEYUSAGE;
var _CONSTRAINTS;
var _EXTREQ;
var _EXT_3;
var _CRLNUMBER;
var _EXT_0;
var _SIGNATURE;
var _PEM;
var _DER;
var _ASN1LEN;
var _IS_V1;
var _IS_V2;
var _IS_V3;
var _TO_STRING;
var _INT20STRING;
var _GET_SERIAL_NUMBER;
var _OID_EQUAL;
var _PRINTABLESTR;
var _IA5STR;
var _DATA;
var _OID_IN;
var _GET_RDN;
var _GET_DN;
var _GET_TIME;
var _GET_ASN1TIME;
var _GET_VALIDITY;
var _GET_ALGORITHM_IDENTIFIER;
var _GET_SUBJECT_PUBLIC_KEY_INFO;
var _GET_PRIVATE_KEY_INFO;
var _GET_REVOKED_CERTIFICATES;
var _GET_EXTREQ;
var _GET_EXT_3;
var _GET_EXT_0;
var _GET_BASICCONSTRAINTS;
var _GET_KEYUSAGE;
var _GET_SUBJECTALTNAME;
var _GET_SUBJECTKEYIDENTIFIER;
var _GET_AUTHORITYKEYIDENTIFIER;
var _GET_AUTHORITYINFOACCESS;
var _GET_CRLDISTRIBUTIONPOINTS;
var _GET_CRLNUMBER;
var _GET_POS;
var _GET_SIGNATURE;

/* private: */

/* static const int */ _EOF = -1;
/* static const int */ _ID_RSA = _ENUMS(0);
/* static const int */ _ID_SHA1RSA = _ENUMS();
/* static const int */ _ID_SHA256RSA = _ENUMS();
/* static const int */ _ID_ED25519 = _ENUMS();
/* static const int */ _DIGITAL_SIGNATURE = 0x8000;
/* static const int */ _NON_REPUDIATION = 0x4000;
/* static const int */ _KEY_ENCIPHERMENT = 0x2000;
/* static const int */ _DATA_ENCIPHERMENT = 0x1000;
/* static const int */ _KEY_AGREEMENT = 0x0800;
/* static const int */ _KEY_CERT_SIGN = 0x0400;
/* static const int */ _CRL_SIGN = 0x0200;
/* static const int */ _ENCIPHER_ONLY = 0x0100;
/* static const int */ _DECIPHER_ONLY = 0x0080;
/* static const int */ _UNSPECIFIED = 0;
/* static const int */ _KEY_COMPROMISE = 1;
/* static const int */ _CA_COMPROMISE = 2;
/* static const int */ _AFFILIATION_CHANGED = 3;
/* static const int */ _SUPERSEDED = 4;
/* static const int */ _CESSATION_OF_OPERATION = 5;
/* static const int */ _CERTIFICATE_HOLD = 6;
/* static const int */ _REMOVE_FROM_CRL = 8;
/* static const int */ _PRIVILEGE_WITHDRAWN = 9;
/* static const int */ _AA_COMPROMISE = 10;
/* static const int */ _PATH_BUILDING = _ENUMS(0);
/* static const int */ _PUSH_STACK = _ENUMS();
/* static const int */ _HTTP_GET = _ENUMS();
/* static const int */ _PATH_VALIDATION = _ENUMS();
/* static const int */ _NOT_TRUSTED = _ENUMS();
/* static const int */ _NOT_FOUND = _ENUMS();
/* static const int */ _SIGNATURE_NOT_VALID = _ENUMS();
/* static const int */ _NOT_IMPLEMENTED = _ENUMS();
/* static const int */ _EXPIRED = _ENUMS();
/* static const int */ _DN_NOT_MATCH = _ENUMS();
/* static const int */ _NOT_CA = _ENUMS();
/* static const int */ _PATH_TOO_LONG = _ENUMS();
/* static const int */ _KEY_CERT_SIGN_NOT_SET = _ENUMS();
/* static const int */ _OK = _ENUMS();
/* static const int */ _CRL_REASON = _ENUMS();
/* static const int */ _CRL_REASON_UNSPECIFIED = _CRL_REASON + _UNSPECIFIED;
/* static const int */ _CRL_REASON_KEY_COMPROMISE = _CRL_REASON + _KEY_COMPROMISE;
/* static const int */ _CRL_REASON_CA_COMPROMISE = _CRL_REASON + _CA_COMPROMISE;
/* static const int */ _CRL_REASON_AFFILIATION_CHANGED = _CRL_REASON + _AFFILIATION_CHANGED;
/* static const int */ _CRL_REASON_SUPERSEDED = _CRL_REASON + _SUPERSEDED;
/* static const int */ _CRL_REASON_CESSATION_OF_OPERATION = _CRL_REASON + _CESSATION_OF_OPERATION;
/* static const int */ _CRL_REASON_CERTIFICATE_HOLD = _CRL_REASON + _CERTIFICATE_HOLD;
/* static const int */ _CRL_REASON_REMOVE_FROM_CRL = _CRL_REASON + _REMOVE_FROM_CRL;
/* static const int */ _CRL_REASON_PRIVILEGE_WITHDRAWN = _CRL_REASON + _PRIVILEGE_WITHDRAWN;
/* static const int */ _CRL_REASON_AA_COMPROMISE = _CRL_REASON + _AA_COMPROMISE;
/* static const int */ _CRL_REASON_MAX = _ENUMS(_CRL_REASON + 0xFF);
/* static const int */ _UNREVOKED = _ENUMS();
/* static const int */ _UNDETERMINED = _ENUMS();
/* static const int */ _CRL_EXPIRED = _ENUMS();
/* static const int */ _CRL_DN_NOT_MATCH = _ENUMS();
/* static const int */ _CRL_SIGN_NOT_SET = _ENUMS();
/* static const int */ _CRL_SIGNATURE_NOT_VALID = _ENUMS();
/* static const string */ _EMPTY = "";
/* static const string */ _0 = "0";
/* static const string */ _Z = "Z";
/* static const string */ _AT = "@";
/* static const string */ _LF = _FROMCHARCODE(0x0A);
/* static const string */ _BEGIN_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----";
/* static const string */ _END_PUBLIC_KEY = "-----END PUBLIC KEY-----";
/* static const string */ _BEGIN_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----";
/* static const string */ _END_PRIVATE_KEY = "-----END PRIVATE KEY-----";
/* static const string */ _BEGIN_CERTIFICATE_REQUEST = "-----BEGIN CERTIFICATE REQUEST-----";
/* static const string */ _END_CERTIFICATE_REQUEST = "-----END CERTIFICATE REQUEST-----";
/* static const string */ _BEGIN_CERTIFICATE = "-----BEGIN CERTIFICATE-----";
/* static const string */ _END_CERTIFICATE = "-----END CERTIFICATE-----";
/* static const string */ _BEGIN_X509_CRL = "-----BEGIN X509 CRL-----";
/* static const string */ _END_X509_CRL = "-----END X509 CRL-----";
/* static const string */ _APPLICATION_PKIX_CERT = "application/pkix-cert";
/* static const string */ _APPLICATION_PKIX_CRL = "application/pkix-crl";
/* static const char */ _BOOLEAN = 0x01;
/* static const char */ _INTEGER = 0x02;
/* static const char */ _BITSTRING = 0x03;
/* static const char */ _OCTETSTRING = 0x04;
/* static const char */ _NULLTAG = 0x05;
/* static const char */ _OID = 0x06;
/* static const char */ _ENUMERATED = 0x0A;
/* static const char */ _UTF8STRING = 0x0C;
/* static const char */ _PRINTABLESTRING = 0x13;
/* static const char */ _IA5STRING = 0x16;
/* static const char */ _UTCTIME = 0x17;
/* static const char */ _GENERALIZEDTIME = 0x18;
/* static const char */ _SEQUENCE = 0x30;
/* static const char */ _SET = 0x31;
/* static const char */ _PRIMITIVE_0 = 0x80;
/* static const char */ _PRIMITIVE_1 = 0x81;
/* static const char */ _PRIMITIVE_2 = 0x82;
/* static const char */ _PRIMITIVE_6 = 0x86;
/* static const char */ _CONSTRUCTED_0 = 0xA0;
/* static const char */ _CONSTRUCTED_3 = 0xA3;
/* static const char[] */ _OID_DC = [0x09, 0x92, 0x26, 0x89, 0x93, 0xF2, 0x2C, 0x64, 0x01, 0x19];
/* static const char[] */ _OID_RSA = [0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x01];
/* static const char[] */ _OID_SHA1RSA = [0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x05];
/* static const char[] */ _OID_SHA256RSA = [0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x0B];
/* static const char[] */ _OID_EXTENSIONREQUEST = [0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x09, 0x0E];
/* static const char[] */ _OID_AUTHORITYINFOACCESS = [0x2B, 0x06, 0x01, 0x05, 0x05, 0x07, 0x01, 0x01];
/* static const char[] */ _OID_CAISSUERS = [0x2B, 0x06, 0x01, 0x05, 0x05, 0x07, 0x30, 0x02];
/* static const char[] */ _OID_ED25519 = [0x2B, 0x65, 0x70];
/* static const char[] */ _OID_CN = [0x55, 0x04, 0x03];
/* static const char[] */ _OID_C = [0x55, 0x04, 0x06];
/* static const char[] */ _OID_L = [0x55, 0x04, 0x07];
/* static const char[] */ _OID_S = [0x55, 0x04, 0x08];
/* static const char[] */ _OID_O = [0x55, 0x04, 0x0A];
/* static const char[] */ _OID_OU = [0x55, 0x04, 0x0B];
/* static const char[] */ _OID_SUBJECTKEYIDENTIFIER = [0x55, 0x1D, 0x0E];
/* static const char[] */ _OID_KEYUSAGE = [0x55, 0x1D, 0x0F];
/* static const char[] */ _OID_SUBJECTALTNAME = [0x55, 0x1D, 0x11];
/* static const char[] */ _OID_BASICCONSTRAINTS = [0x55, 0x1D, 0x13];
/* static const char[] */ _OID_CRLNUMBER = [0x55, 0x1D, 0x14];
/* static const char[] */ _OID_CRLREASON = [0x55, 0x1D, 0x15];
/* static const char[] */ _OID_CRLDISTRIBUTIONPOINTS = [0x55, 0x1D, 0x1F];
/* static const char[] */ _OID_AUTHORITYKEYIDENTIFIER = [0x55, 0x1D, 0x23];
/* static const char[][] */ _OIDLIST =
   [
   _OID_ED25519,
   _OID_SHA256RSA,
   _OID_SHA1RSA,
   _OID_RSA
   ];
/* static const int[] */ _IDLIST =
   [
   _ID_ED25519,
   _ID_SHA256RSA,
   _ID_SHA1RSA,
   _ID_RSA
   ];
/* static const string[] */ _DN_STRINGLIST =
   [
   "CN=",
   "OU=",
   "O=",
   "L=",
   "S=",
   "C=",
   "DC="
   ];
/* static const char[][] */ _DN_OIDLIST =
   [
   _OID_CN,
   _OID_OU,
   _OID_O,
   _OID_L,
   _OID_S,
   _OID_C,
   _OID_DC
   ];
/* static const char[][] */ _EXTREQ_OIDLIST =
   [
   _OID_KEYUSAGE,
   _OID_SUBJECTALTNAME
   ];
/* static const char[][] */ _EXT_3_OIDLIST =
   [
   _OID_BASICCONSTRAINTS,
   _OID_KEYUSAGE,
   _OID_SUBJECTALTNAME,
   _OID_SUBJECTKEYIDENTIFIER,
   _OID_AUTHORITYKEYIDENTIFIER,
   _OID_AUTHORITYINFOACCESS,
   _OID_CRLDISTRIBUTIONPOINTS
   ];
/* static const char[][] */ _EXT_0_OIDLIST =
   [
   _OID_AUTHORITYKEYIDENTIFIER,
   _OID_CRLNUMBER
   ];
/* static const string[] */ _NUMBERLIST =
   [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
   ];
/* static const char[] */ _PRINTABLELIST =
   [
   0x20,
   0x27, 0x28, 0x29,
   0x2B, 0x2C, 0x2D, 0x2E, 0x2F,
   0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
   0x3A, 0x3D, 0x3F,
   0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x4B, 0x4C, 0x4D,
   0x4E, 0x4F, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A,
   0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x6B, 0x6C, 0x6D,
   0x6E, 0x6F, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A
   ];

/* void */ _ASN1TAG = function (
      /* char */Tag_, /* size_t */Len_, /* std::vector */Bs_)
   {
   var u;

   Bs_.ate(Tag_, 8);

   if (Len_ < 128)
      {
      Bs_.ate(Len_, 8);
      }
   else
      {
      if (Len_ < 256)
         {
         u = 1;
         }
      else if (Len_ < 65536)
         {
         u = 2;
         }
      else if (Len_ < 16777216)
         {
         u = 3;
         }
      else
         {
         u = 4;
         }

      Bs_.ate(0x80 | u, 8);
      Bs_.ate(_HTON(Len_, u), u << 3);
      }
   };

/* void */ _ATE = function (Ap_, Bs_)
      /*
       * (string Ap_, std::vector Bs_)
       * (const char[] Ap_, std::vector Bs_)
       */
   {
   var s;

   if (typeof Ap_ === _TYPEOF_STRING)
      {
      for (s = 0; s < Ap_[_LENGTH]; ++ s)
         {
         Bs_.ate(Ap_[_CHARCODEAT](s), 8);
         }
      }
   else
      {
      for (s = 0; s < Ap_[_LENGTH]; ++ s)
         {
         Bs_.ate(Ap_[s], 8);
         }
      }
   };

/* void */ _V1 = function (/* std::vector */Bs_)
   {
   _ASN1TAG(_INTEGER, 1, Bs_);
   Bs_.ate(0, 8);
   };

/* void */ _V2 = function (/* std::vector */Bs_)
   {
   _ASN1TAG(_INTEGER, 1, Bs_);
   Bs_.ate(1, 8);
   };

/* void */ _V3 = function (/* std::vector */Bs_)
   {
   _ASN1TAG(_CONSTRUCTED_0, 3, Bs_);
   _ASN1TAG(_INTEGER, 1, Bs_);
   Bs_.ate(2, 8);
   };

/* void */ _TO_OCTETS = function (
      /* string */Str_, /* std::vector */Bs_)
   {
   var u;
   var s;

   for (s = 0; s < Str_[_LENGTH]; s = u)
      {
      u = s + 2;
      Bs_.ate(_TO_DEC(Str_[_SUBSTRING](s, u)), 8);
      }
   };

/* void */ _INT20OCTETS = function (
      /* string */Int_, /* std::vector */Bs_)
   {
   _ASN1TAG(_INTEGER, Int_[_LENGTH] >>> 1, Bs_);
   _TO_OCTETS(Int_, Bs_);
   };

/* void */ _SERIAL_NUMBER = function (
      /* string */SerialNumber_, /* std::vector */Bs_)
   {
   _INT20OCTETS(SerialNumber_, Bs_);
   };

/* void */ _ALGORITHM_IDENTIFIER = function (
      /* int */Id_,
      /* std::vector */Bs_)
   {
   if (Id_ === _ID_ED25519)
      {
      _ASN1TAG(_SEQUENCE, _OID_ED25519[_LENGTH] + 2, Bs_);
      _ASN1TAG(_OID, _OID_ED25519[_LENGTH], Bs_);
      _ATE(_OID_ED25519, Bs_);
      }
   else if (Id_ === _ID_SHA256RSA)
      {
      _ASN1TAG(_SEQUENCE, _OID_SHA256RSA[_LENGTH] + 4, Bs_);
      _ASN1TAG(_OID, _OID_SHA256RSA[_LENGTH], Bs_);
      _ATE(_OID_SHA256RSA, Bs_);
      _ASN1TAG(_NULLTAG, 0, Bs_);
      }
   else if (Id_ === _ID_SHA1RSA)
      {
      _ASN1TAG(_SEQUENCE, _OID_SHA1RSA[_LENGTH] + 4, Bs_);
      _ASN1TAG(_OID, _OID_SHA1RSA[_LENGTH], Bs_);
      _ATE(_OID_SHA1RSA, Bs_);
      _ASN1TAG(_NULLTAG, 0, Bs_);
      }
   else if (Id_ === _ID_RSA)
      {
      _ASN1TAG(_SEQUENCE, _OID_RSA[_LENGTH] + 4, Bs_);
      _ASN1TAG(_OID, _OID_RSA[_LENGTH], Bs_);
      _ATE(_OID_RSA, Bs_);
      _ASN1TAG(_NULLTAG, 0, Bs_);
      }
   };

/* string */ _TIME = function (/* long */Time_) /* const */
   {
   var u = new _DATE(Time_);
   var v = _EMPTY;
   var w = u[_GETUTCFULLYEAR]();

   if (w < 2050)
      {
      w = w % 100;
      v += w < 10 ? _0 + w : w;
      }
   else
      {
      v += w;
      }

   w = u[_GETUTCMONTH]() + 1;
   v += w < 10 ? _0 + w : w;
   w = u[_GETUTCDATE]();
   v += w < 10 ? _0 + w : w;
   w = u[_GETUTCHOURS]();
   v += w < 10 ? _0 + w : w;
   w = u[_GETUTCMINUTES]();
   v += w < 10 ? _0 + w : w;
   w = u[_GETUTCSECONDS]();
   v += w < 10 ? _0 + w : w;
   v += _Z;

   return (v);
   };

/* void */ _ASN1TIME = function (
      /* long */Time_, /* std::vector */Bs_)
   {
   var u = _TIME(Time_);

   _ASN1TAG(
      u[_LENGTH] === 13 ? _UTCTIME : _GENERALIZEDTIME,
      u[_LENGTH],
      Bs_);
   _ATE(u, Bs_);
   };

/* void */ _VALIDITY = function (
      /* long */NotBefore_, /* long */NotAfter_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));

   _ASN1TIME(NotBefore_, u);
   _ASN1TIME(NotAfter_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], Bs_);
   _ATE(u, Bs_);
   };

/* void */ _RDN = function (
      /* bool */Utf8_, /* string */RDN_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var v = new _VECTOR(new _UINT8ARRAY(0));
   var w;
   var s;

   for (s = 0; s < _DN_STRINGLIST[_LENGTH]; ++ s)
      {
      if (RDN_[_INDEXOF](_DN_STRINGLIST[s]) === 0)
         {
         RDN_ = RDN_[_SUBSTRING](
            _DN_STRINGLIST[s][_LENGTH],
            RDN_[_LENGTH]);
         _ASN1TAG(_OID, _DN_OIDLIST[s][_LENGTH], u);
         _ATE(_DN_OIDLIST[s], u);

         if (_DN_OIDLIST[s] === _OID_DC)
            {
            _ASN1TAG(_IA5STRING, RDN_[_LENGTH], u);
            _ATE(RDN_, u);
            }
         else if (Utf8_ && _DN_OIDLIST[s] !== _OID_C)
            {
            w = _UTF8(RDN_);
            _ASN1TAG(_UTF8STRING, w[_LENGTH], u);
            _ATE(w, u);
            }
         else
            {
            _ASN1TAG(_PRINTABLESTRING, RDN_[_LENGTH], u);
            _ATE(RDN_, u);
            }

         u = u.data();
         _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
         _ATE(u, v);
         v = v.data();
         _ASN1TAG(_SET, v[_LENGTH], Bs_);
         _ATE(v, Bs_);

         break;
         }
      }
   };

/* void */ _DN = function (
      /* bool */Utf8_, /* const string[] */DN_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var s;

   for (s = 0; s < DN_[_LENGTH]; ++ s)
      {
      _RDN(Utf8_, DN_[s], u);
      }

   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], Bs_);
   _ATE(u, Bs_);
   };

/* char[] */ _PUBLIC = function (
      /* int */Id_,
      /* const T */Public_) /* const */
   {
   var u;
   var v;

   if (Id_ === _ID_ED25519)
      {
      return (Public_);
      }
   else if (Id_ === _ID_RSA)
      {
      u = new _VECTOR();
      v = new _VECTOR();
      _ASN1TAG(_INTEGER, Public_[0][_LENGTH], u);
      _ATE(Public_[0], u);
      _ASN1TAG(_INTEGER, Public_[1][_LENGTH], u);
      _ATE(Public_[1], u);
      u = u.data();
      _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
      _ATE(u, v);

      return (v.data());
      }
   };

/* void */ _SUBJECT_PUBLIC_KEY_INFO = function (
      /* int */Id_,
      /* const T */Public_, /* std::vector */Bs_)
   {
   var u;
   var v;

   if (Id_ === _ID_ED25519)
      {
      u = _PUBLIC(Id_, Public_);
      _ASN1TAG(_SEQUENCE, u[_LENGTH] + 10, Bs_);
      _ALGORITHM_IDENTIFIER(Id_, Bs_);
      _ASN1TAG(_BITSTRING, u[_LENGTH] + 1, Bs_);
      Bs_.ate(0, 8);
      _ATE(u, Bs_);
      }
   else if (Id_ === _ID_RSA)
      {
      v = _PUBLIC(Id_, Public_);
      u = new _VECTOR();
      _ALGORITHM_IDENTIFIER(Id_, u);
      _ASN1TAG(_BITSTRING, v[_LENGTH] + 1, u);
      u.ate(0, 8);
      _ATE(v, u);
      u = u.data();
      _ASN1TAG(_SEQUENCE, u[_LENGTH], Bs_);
      _ATE(u, Bs_);
      }
   };

/* void */ _PRIVATE_KEY_INFO = function (
      /* int */Id_,
      /* const T */Private_, /* std::vector */Bs_)
   {
   var u;
   var v;

   if (Id_ === _ID_ED25519)
      {
      _ASN1TAG(_SEQUENCE, Private_[_LENGTH] + 14, Bs_);
      _ASN1TAG(_INTEGER, 1, Bs_);
      Bs_.ate(0, 8);
      _ALGORITHM_IDENTIFIER(Id_, Bs_);
      _ASN1TAG(_OCTETSTRING, Private_[_LENGTH] + 2, Bs_);
      _ASN1TAG(_OCTETSTRING, Private_[_LENGTH], Bs_);
      _ATE(Private_, Bs_);
      }
   else if (Id_ === _ID_RSA)
      {
      u = new _VECTOR();
      v = new _VECTOR();
      _ASN1TAG(_INTEGER, 1, u);
      u.ate(0, 8);
      _ASN1TAG(_INTEGER, Private_[0][_LENGTH], u);
      _ATE(Private_[0], u);
      _ASN1TAG(_INTEGER, Private_[1][_LENGTH], u);
      _ATE(Private_[1], u);
      _ASN1TAG(_INTEGER, Private_[2][_LENGTH], u);
      _ATE(Private_[2], u);
      _ASN1TAG(_INTEGER, Private_[3][_LENGTH], u);
      _ATE(Private_[3], u);
      _ASN1TAG(_INTEGER, Private_[4][_LENGTH], u);
      _ATE(Private_[4], u);
      _ASN1TAG(_INTEGER, Private_[5][_LENGTH], u);
      _ATE(Private_[5], u);
      _ASN1TAG(_INTEGER, Private_[6][_LENGTH], u);
      _ATE(Private_[6], u);
      _ASN1TAG(_INTEGER, Private_[7][_LENGTH], u);
      _ATE(Private_[7], u);
      u = u.data();
      _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
      _ATE(u, v);
      v = v.data();
      u = new _VECTOR();
      _ASN1TAG(_INTEGER, 1, u);
      u.ate(0, 8);
      _ALGORITHM_IDENTIFIER(Id_, u);
      _ASN1TAG(_OCTETSTRING, v[_LENGTH], u);
      _ATE(v, u);
      u = u.data();
      _ASN1TAG(_SEQUENCE, u[_LENGTH], Bs_);
      _ATE(u, Bs_);
      }
   };

/* void */ _REVOKED_CERTIFICATES = function (
      /* const T[][] */RevokedCertificates_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var s;

   if (RevokedCertificates_[_LENGTH] > 0)
      {
      v = new _VECTOR();

      for (s = 0; s < RevokedCertificates_[_LENGTH]; ++ s)
         {
         w = RevokedCertificates_[s];
         v.ate(_SEQUENCE, 8);
         u = v.length();
         v.ate(0, 8);
         _INT20OCTETS(w[0], v);
         _ASN1TIME(w[1], v);

         if (w[2] !== _UNSPECIFIED)
            {
            v.ate(0x0A000000 | _SEQUENCE << 16 | 0x0C00 | _SEQUENCE, 32);
            v.ate(0x0300 | _OID, 16);
            v.ate(0x151D55, 24);
            v.ate(0x01000000 | _ENUMERATED << 16 | 0x0300 | _OCTETSTRING, 32);
            v.ate(w[2], 8);
            }

         v.fill(u, 1, v.length() - u - 1);
         }

      v = v.data();
      _ASN1TAG(_SEQUENCE, v[_LENGTH], Bs_);
      _ATE(v, Bs_);
      }
   };

/* void */ _CRLDISTRIBUTIONPOINTS = function (
      /* string */CRLDistributionPoints_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var v = new _VECTOR(new _UINT8ARRAY(0));

   _ASN1TAG(_PRIMITIVE_6, CRLDistributionPoints_[_LENGTH], u);
   _ATE(CRLDistributionPoints_, u);
   u = u.data();
   _ASN1TAG(_CONSTRUCTED_0, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   u = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_CONSTRUCTED_0, v[_LENGTH], u);
   _ATE(v, u);
   u = u.data();
   v = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   u = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_SEQUENCE, v[_LENGTH], u);
   _ATE(v, u);
   u = u.data();
   v = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_OID, _OID_CRLDISTRIBUTIONPOINTS[_LENGTH], v);
   _ATE(_OID_CRLDISTRIBUTIONPOINTS, v);
   _ASN1TAG(_OCTETSTRING, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   _ASN1TAG(_SEQUENCE, v[_LENGTH], Bs_);
   _ATE(v, Bs_);
   };

/* void */ _AUTHORITYINFOACCESS = function (
      /* string */AuthorityInfoAccess_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var v = new _VECTOR(new _UINT8ARRAY(0));

   _ASN1TAG(_OID, _OID_CAISSUERS[_LENGTH], u);
   _ATE(_OID_CAISSUERS, u);
   _ASN1TAG(_PRIMITIVE_6, AuthorityInfoAccess_[_LENGTH], u);
   _ATE(AuthorityInfoAccess_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   u = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_SEQUENCE, v[_LENGTH], u);
   _ATE(v, u);
   u = u.data();
   v = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_OID, _OID_AUTHORITYINFOACCESS[_LENGTH], v);
   _ATE(_OID_AUTHORITYINFOACCESS, v);
   _ASN1TAG(_OCTETSTRING, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   _ASN1TAG(_SEQUENCE, v[_LENGTH], Bs_);
   _ATE(v, Bs_);
   };

/* void */ _AUTHORITYKEYIDENTIFIER = function (
      /* string */AuthorityKeyIdentifier_, /* std::vector */Bs_)
   {
   _ASN1TAG(_SEQUENCE, _OID_AUTHORITYKEYIDENTIFIER[_LENGTH] + 28, Bs_);
   _ASN1TAG(_OID, _OID_AUTHORITYKEYIDENTIFIER[_LENGTH], Bs_);
   _ATE(_OID_AUTHORITYKEYIDENTIFIER, Bs_);
   _ASN1TAG(_OCTETSTRING, 24, Bs_);
   _ASN1TAG(_SEQUENCE, 22, Bs_);
   _ASN1TAG(_PRIMITIVE_0, 20, Bs_);
   _TO_OCTETS(AuthorityKeyIdentifier_, Bs_);
   };

/* void */ _SUBJECTKEYIDENTIFIER = function (
      /* int */Id_,
      /* const T */Public_, /* std::vector */Bs_)
   {
   var u = new _UINT8ARRAY(20);
   var v = _PUBLIC(Id_, Public_);

   _SHA1I(u);
   _CONCAT(u, new _UINT8ARRAY(0), v, v[_LENGTH], true, _SHA1A, 64);
   _ASN1TAG(_SEQUENCE, _OID_SUBJECTKEYIDENTIFIER[_LENGTH] + 26, Bs_);
   _ASN1TAG(_OID, _OID_SUBJECTKEYIDENTIFIER[_LENGTH], Bs_);
   _ATE(_OID_SUBJECTKEYIDENTIFIER, Bs_);
   _ASN1TAG(_OCTETSTRING, 22, Bs_);
   _ASN1TAG(_OCTETSTRING, 20, Bs_);
   _ATE(u, Bs_);
   };

/* void */ _SUBJECTALTNAME = function (
      /* const string[] */SubjectAltName_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var v = new _VECTOR(new _UINT8ARRAY(0));
   var w;
   var s;

   for (s = 0; s < SubjectAltName_[_LENGTH]; ++ s)
      {
      w = SubjectAltName_[s];
      _ASN1TAG(
         w[_INDEXOF](_AT) !== _EOF ?
               _PRIMITIVE_1
            :
               _PRIMITIVE_2,
         w[_LENGTH], u);
      _ATE(w, u);
      }

   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   u = new _VECTOR(new _UINT8ARRAY(0));
   _ASN1TAG(_OID, _OID_SUBJECTALTNAME[_LENGTH], u);
   _ATE(_OID_SUBJECTALTNAME, u);
   _ASN1TAG(_OCTETSTRING, v[_LENGTH], u);
   _ATE(v, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], Bs_);
   _ATE(u, Bs_);
   };

/* void */ _KEYUSAGE = function (
      /* bool */NonRepudiation_, /* std::vector */Bs_)
   {
   _ASN1TAG(_SEQUENCE, 14, Bs_);
   _ASN1TAG(_OID, _OID_KEYUSAGE[_LENGTH], Bs_);
   _ATE(_OID_KEYUSAGE, Bs_);
   _ASN1TAG(_BOOLEAN, 1, Bs_);
   Bs_.ate(0xFF, 8);
   _ASN1TAG(_OCTETSTRING, 4, Bs_);
   _ASN1TAG(_BITSTRING, 2, Bs_);

   if (NonRepudiation_)
      {
      Bs_.ate(6, 8);
      Bs_.ate((_DIGITAL_SIGNATURE | _NON_REPUDIATION) >>> 8, 8);
      }
   else
      {
      Bs_.ate(7, 8);
      Bs_.ate(_DIGITAL_SIGNATURE >>> 8, 8);
      }
   };

/* void */ _CONSTRAINTS = function (
      /* int */CA_, /* bool */NonRepudiation_, /* std::vector */Bs_)
   {
   if (CA_ === 0xFF)
      {
      _ASN1TAG(_SEQUENCE, 15, Bs_);
      _ASN1TAG(_OID, _OID_BASICCONSTRAINTS[_LENGTH], Bs_);
      _ATE(_OID_BASICCONSTRAINTS, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_OCTETSTRING, 5, Bs_);
      _ASN1TAG(_SEQUENCE, 3, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_SEQUENCE, 14, Bs_);
      _ASN1TAG(_OID, _OID_KEYUSAGE[_LENGTH], Bs_);
      _ATE(_OID_KEYUSAGE, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_OCTETSTRING, 4, Bs_);
      _ASN1TAG(_BITSTRING, 2, Bs_);
      Bs_.ate(1, 8);
      Bs_.ate((_KEY_CERT_SIGN | _CRL_SIGN) >>> 8, 8);
      }
   else if (CA_ !== 0x00)
      {
      _ASN1TAG(_SEQUENCE, 18, Bs_);
      _ASN1TAG(_OID, _OID_BASICCONSTRAINTS[_LENGTH], Bs_);
      _ATE(_OID_BASICCONSTRAINTS, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_OCTETSTRING, 8, Bs_);
      _ASN1TAG(_SEQUENCE, 6, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_INTEGER, 1, Bs_);
      Bs_.ate(CA_ - 1, 8);
      _ASN1TAG(_SEQUENCE, 14, Bs_);
      _ASN1TAG(_OID, _OID_KEYUSAGE[_LENGTH], Bs_);
      _ATE(_OID_KEYUSAGE, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_OCTETSTRING, 4, Bs_);
      _ASN1TAG(_BITSTRING, 2, Bs_);
      Bs_.ate(1, 8);
      Bs_.ate((_KEY_CERT_SIGN | _CRL_SIGN) >>> 8, 8);
      }
   else
      {
      _ASN1TAG(_SEQUENCE, 12, Bs_);
      _ASN1TAG(_OID, _OID_BASICCONSTRAINTS[_LENGTH], Bs_);
      _ATE(_OID_BASICCONSTRAINTS, Bs_);
      _ASN1TAG(_BOOLEAN, 1, Bs_);
      Bs_.ate(0xFF, 8);
      _ASN1TAG(_OCTETSTRING, 2, Bs_);
      _ASN1TAG(_SEQUENCE, 0, Bs_);
      _KEYUSAGE(NonRepudiation_, Bs_);
      }
   };

/* void */ _EXTREQ = function (
      /* bool */NonRepudiation_,
      /* const string[] */SubjectAltName_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var w = SubjectAltName_[_LENGTH] === 0;

   if (w && ! NonRepudiation_)
      {
      _ASN1TAG(_CONSTRUCTED_0, 0, Bs_);
      }
   else
      {
      u = new _VECTOR(new _UINT8ARRAY(0));
      v = new _VECTOR(new _UINT8ARRAY(0));

      if (NonRepudiation_)
         {
         _KEYUSAGE(NonRepudiation_, u);
         }

      if (! w)
         {
         _SUBJECTALTNAME(SubjectAltName_, u);
         }

      u = u.data();
      _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
      _ATE(u, v);
      v = v.data();
      u = new _VECTOR(new _UINT8ARRAY(0));
      _ASN1TAG(_OID, _OID_EXTENSIONREQUEST[_LENGTH], u);
      _ATE(_OID_EXTENSIONREQUEST, u);
      _ASN1TAG(_SET, v[_LENGTH], u);
      _ATE(v, u);
      u = u.data();
      v = new _VECTOR(new _UINT8ARRAY(0));
      _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
      _ATE(u, v);
      v = v.data();
      _ASN1TAG(_CONSTRUCTED_0, v[_LENGTH], Bs_);
      _ATE(v, Bs_);
      }
   };

/* void */ _EXT_3 = function (
      /* int */Id_,
      /* int */CA_, /* bool */NonRepudiation_,
      /* const string[] */SubjectAltName_,
      /* const T */Public_,
      /* string */AuthorityKeyIdentifier_,
      /* string */AuthorityInfoAccess_,
      /* string */CRLDistributionPoints_, /* std::vector */Bs_)
   {
   var u = new _VECTOR(new _UINT8ARRAY(0));
   var v = new _VECTOR(new _UINT8ARRAY(0));

   _CONSTRAINTS(CA_, NonRepudiation_, u);

   if (SubjectAltName_[_LENGTH] !== 0)
      {
      _SUBJECTALTNAME(SubjectAltName_, u);
      }

   _SUBJECTKEYIDENTIFIER(Id_, Public_, u);

   if (AuthorityKeyIdentifier_ !== _EMPTY)
      {
      _AUTHORITYKEYIDENTIFIER(AuthorityKeyIdentifier_, u);
      }

   if (AuthorityInfoAccess_ !== _EMPTY)
      {
      _AUTHORITYINFOACCESS(AuthorityInfoAccess_, u);
      }

   if (CRLDistributionPoints_ !== _EMPTY)
      {
      _CRLDISTRIBUTIONPOINTS(CRLDistributionPoints_, u);
      }

   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);
   v = v.data();
   _ASN1TAG(_CONSTRUCTED_3, v[_LENGTH], Bs_);
   _ATE(v, Bs_);
   };

/* void */ _CRLNUMBER = function (
      /* string */CRLNumber_, /* std::vector */Bs_)
   {
   var u = CRLNumber_[_LENGTH] >>> 1;

   _ASN1TAG(_SEQUENCE, _OID_CRLNUMBER[_LENGTH] + u + 6, Bs_);
   _ASN1TAG(_OID, _OID_CRLNUMBER[_LENGTH], Bs_);
   _ATE(_OID_CRLNUMBER, Bs_);
   _ASN1TAG(_OCTETSTRING, u + 2, Bs_);
   _INT20OCTETS(CRLNumber_, Bs_);
   };

/* void */ _EXT_0 = function (
      /* string */AuthorityKeyIdentifier_,
      /* string */CRLNumber_, /* std::vector */Bs_)
   {
   var u = CRLNumber_[_LENGTH] >>> 1;

   _ASN1TAG(_CONSTRUCTED_0, u + 46, Bs_);
   _ASN1TAG(_SEQUENCE, u + 44, Bs_);
   _AUTHORITYKEYIDENTIFIER(AuthorityKeyIdentifier_, Bs_);
   _CRLNUMBER(CRLNumber_, Bs_);
   };

/* void */ _SIGNATURE = function (
      /* int */Id_,
      /* const T */Signature_, /* std::vector */Bs_)
   {
   if (Id_ === _ID_ED25519)
      {
      _ALGORITHM_IDENTIFIER(Id_, Bs_);
      _ASN1TAG(_BITSTRING, Signature_[_LENGTH] + 1, Bs_);
      Bs_.ate(0, 8);
      _ATE(Signature_, Bs_);
      }
   else if (Id_ === _ID_SHA256RSA
         || Id_ === _ID_SHA1RSA)
      {
      _ALGORITHM_IDENTIFIER(Id_, Bs_);
      _ASN1TAG(_BITSTRING, Signature_[_LENGTH] + 1, Bs_);
      Bs_.ate(0, 8);
      _ATE(Signature_, Bs_);
      }
   };

/* char[] */ _PEM = function (
      /* string */Begin_, /* const char[] */DER_, /* string */End_) /* const */
   {
   var u = Begin_;
   var v;
   var w;
   var s;

   u += _LF;
   w = _UTF16(_BASE64(DER_));

   for (s = 0; s < w[_LENGTH]; s = v)
      {
      v = s + 64;

      if (v > w[_LENGTH])
         {
         v = w[_LENGTH];
         }

      u += w[_SUBSTRING](s, v);
      u += _LF;
      }

   u += End_;
   u += _LF;

   return (_UTF8(u, true, false));
   };

/* T */ _DER = function (
      /* string */Begin_, /* const char[] */PEM_, /* string */End_) /* const */
   {
   var u;
   var v;

   PEM_ = _UTF16(PEM_);
   u = PEM_[_INDEXOF](Begin_);
   v = PEM_[_LASTINDEXOF](End_);

   if (u === _EOF
         || v === _EOF
         || (u += Begin_[_LENGTH] , u >= v))
      {
      return (_NULL);
      }

   return (
      _DEC64(
         _UTF8(
            PEM_[_SUBSTRING](u, v),
            true,
            false)
         )
      );
   };

/* int */ _ASN1LEN = function (/* std::vector */Bs_)
   {
   var u;
   var s = Bs_.read(8);

   if (s < 0x80)
      {
      return (
         Bs_.getptr() + s > Bs_.length() ?
            _EOF
         :
            s
         );
      }

   s &= 0x7F;

   if (s === 0 || s > 4)
      {
      return (_EOF);
      }

   u = Bs_.read(8);

   if (u === 0x00)
      {
      return (_EOF);
      }

   for (-- s; 0 < s; -- s)
      {
      u <<= 8;
      u |= Bs_.read(8);
      }

   u >>>= 0;

   if (u < 0x80)
      {
      return (_EOF);
      }

   return (
      Bs_.getptr() + u > Bs_.length() ?
         _EOF
      :
         u
      );
   };

/* bool */ _IS_V1 = function (/* std::vector */Bs_)
   {
   if (Bs_.read(8) !== _INTEGER
         || _ASN1LEN(Bs_) !== 1
         || Bs_.read(8) !== 0)
      {
      return (false);
      }

   return (true);
   };

/* bool */ _IS_V2 = function (/* std::vector */Bs_)
   {
   if (Bs_.read(8) !== _INTEGER
         || _ASN1LEN(Bs_) !== 1
         || Bs_.read(8) !== 1)
      {
      return (false);
      }

   return (true);
   };

/* bool */ _IS_V3 = function (/* std::vector */Bs_)
   {
   if (Bs_.read(8) !== _CONSTRUCTED_0
         || _ASN1LEN(Bs_) !== 3
         || Bs_.read(8) !== _INTEGER
         || _ASN1LEN(Bs_) !== 1
         || Bs_.read(8) !== 2)
      {
      return (false);
      }

   return (true);
   };

/* string */ _TO_STRING = function (
      /* size_t */Len_, /* std::vector */Bs_)
   {
   var u = _EMPTY;

   Len_ += Bs_.getptr();

   for (; Bs_.getptr() < Len_; )
      {
      u += _TO_HEX(Bs_.read(8), 2);
      }

   return (u);
   };

/* string */ _INT20STRING = function (
      /* bool */Zero_, /* std::vector */Bs_)
   {
   var u;
   var v;

   if (Bs_.read(8) !== _INTEGER
         || (u = _ASN1LEN(Bs_) , u <= 0 || u > 20)
         || (v = Bs_.read(8) , v >= 0x80))
      {
      return (_EMPTY);
      }

   if (v !== 0x00)
      {
      Bs_.seek(8);
      }
   else if (u > 1)
      {
      if (Bs_.read(8) < 0x80)
         {
         return (_EMPTY);
         }

      Bs_.seek(16);
      }
   else
      {
      if (! Zero_)
         {
         return (_EMPTY);
         }

      Bs_.seek(8);
      }

   return (_TO_STRING(u, Bs_));
   };

/* string */ _GET_SERIAL_NUMBER = function (/* std::vector */Bs_)
   {
   return (_INT20STRING(false, Bs_));
   };

/* int */ _OID_EQUAL = function (
      /* const char[] */OID_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var s;

   if (Bs_.read(8) !== _OID
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_EOF);
      }

   v = Bs_.getptr();

   if (u !== OID_[_LENGTH])
      {
      Bs_.seek(_EOF, v + u);

      return (0);
      }

   for (s = 0; s < u; ++ s)
      {
      if (Bs_.read(8) !== OID_[s])
         {
         Bs_.seek(_EOF, v + u);

         return (0);
         }
      }

   return (1);
   };

/* string */ _PRINTABLESTR = function (/* const char[] */Ap_) /* const */
   {
   var u = _EMPTY;
   var s;
   var t;

   for (s = 0; s < Ap_[_LENGTH]; ++ s)
      {
      for (t = 0; t < _PRINTABLELIST[_LENGTH]; ++ t)
         {
         if (Ap_[s] === _PRINTABLELIST[t])
            {
            break;
            }
         }

      if (t === _PRINTABLELIST[_LENGTH])
         {
         return (_EMPTY);
         }

      u += _FROMCHARCODE(Ap_[s]);
      }

   return (u);
   };

/* string */ _IA5STR = function (/* const char[] */Ap_) /* const */
   {
   var u = _EMPTY;
   var s;

   for (s = 0; s < Ap_[_LENGTH]; ++ s)
      {
      if (Ap_[s] > 0x7F)
         {
         return (_EMPTY);
         }

      u += _FROMCHARCODE(Ap_[s]);
      }

   return (u);
   };

/* char[] */ _DATA = function (
      /* size_t */Off_, /* size_t */Len_, /* const std::vector */Bs_) /* const */
   {
   var u = Bs_.data();

   return (
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + Off_,
         Len_)
      );
   };

/* int */ _OID_IN = function (
      /* const char[][] */OIDList_, /* std::vector */Bs_)
   {
   var u = Bs_.getptr();
   var v;
   var s;

   for (s = 0; s < OIDList_[_LENGTH]; ++ s)
      {
      Bs_.seek(_EOF, u);
      v = _OID_EQUAL(OIDList_[s], Bs_);

      if (v === _EOF)
         {
         return (_EOF);
         }

      if (v > 0)
         {
         return (s);
         }
      }

   return (s);
   };

/* string */ _GET_RDN = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;

   if (Bs_.read(8) !== _SET
         || (v = _ASN1LEN(Bs_) , v <= 0))
      {
      return (_EMPTY);
      }

   v += Bs_.getptr();

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_EMPTY);
      }

   u += Bs_.getptr();

   if (u !== v
         || (y = _OID_IN(_DN_OIDLIST, Bs_) , y === _EOF || y === _DN_OIDLIST[_LENGTH]))
      {
      return (_EMPTY);
      }

   if (_DN_OIDLIST[y] === _OID_C)
      {
      if (Bs_.read(8) !== _PRINTABLESTRING
            || (v = _ASN1LEN(Bs_) , v !== 2)
            || (w = Bs_.getptr() , w + v > u))
         {
         return (_EMPTY);
         }

      z = _PRINTABLESTR(_DATA(w, v, Bs_));
      }
   else if (_DN_OIDLIST[y] === _OID_DC)
      {
      if (Bs_.read(8) !== _IA5STRING
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (w = Bs_.getptr() , w + v > u))
         {
         return (_EMPTY);
         }

      z = _IA5STR(_DATA(w, v, Bs_));
      }
   else
      {
      if ((v = Bs_.read(8) , x = v === _UTF8STRING , ! x && v !== _PRINTABLESTRING)
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (w = Bs_.getptr() , w + v > u))
         {
         return (_EMPTY);
         }

      z = x ?
            _UTF16(_DATA(w, v, Bs_))
         :
            _PRINTABLESTR(_DATA(w, v, Bs_));
      }

   if (z === _EMPTY)
      {
      return (_EMPTY);
      }

   z = _DN_STRINGLIST[y] + z;
   Bs_.seek(_EOF, u);

   return (z);
   };

/* T */ _GET_DN = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w = [];
   var x = Bs_.getptr();

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_NULL);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      v = _GET_RDN(Bs_);

      if (v === _EMPTY)
         {
         return (_NULL);
         }

      w[w[_LENGTH]] = v;
      }

   v = Bs_.getptr() - x;
   Bs_.seek(_EOF, x);

   return ([_TO_STRING(v, Bs_), w]);
   };

/* long */ _GET_TIME = function (
      /* string */Time_, /* size_t */Len_) /* const */
   {
   var u;
   var v;
   var s;
   var t;

   if (Time_[_LENGTH] !== Len_)
      {
      return (_EOF);
      }

   u = Time_[_LENGTH] - 1;

   if (Time_[_CHARAT](u) !== _Z)
      {
      return (_EOF);
      }

   for (s = 0; s < u; ++ s)
      {
      v = Time_[_CHARAT](s);

      for (t = 0; t < _NUMBERLIST[_LENGTH]; ++ t)
         {
         if (v === _NUMBERLIST[t])
            {
            break;
            }
         }

      if (t === _NUMBERLIST[_LENGTH])
         {
         return (_EOF);
         }
      }

   if (Len_ === 13)
      {
      v = +(Time_[_CHARAT](0) === _0 ? Time_[_CHARAT](1) : Time_[_SUBSTRING](0, 2));
      v = _UTC(
         v + (v >= 50 ? 1900 : 2000),
         +(Time_[_CHARAT](2) === _0 ? Time_[_CHARAT](3) : Time_[_SUBSTRING](2, 4)) - 1,
         +(Time_[_CHARAT](4) === _0 ? Time_[_CHARAT](5) : Time_[_SUBSTRING](4, 6)),
         +(Time_[_CHARAT](6) === _0 ? Time_[_CHARAT](7) : Time_[_SUBSTRING](6, 8)),
         +(Time_[_CHARAT](8) === _0 ? Time_[_CHARAT](9) : Time_[_SUBSTRING](8, 10)),
         +(Time_[_CHARAT](10) === _0 ? Time_[_CHARAT](11) : Time_[_SUBSTRING](10, 12)),
         0
         );
      }
   else
      {
      if (Time_[_CHARAT](0) === _0)
         {
         return (_EOF);
         }

      v = _UTC(
         +Time_[_SUBSTRING](0, 4),
         +(Time_[_CHARAT](4) === _0 ? Time_[_CHARAT](5) : Time_[_SUBSTRING](4, 6)) - 1,
         +(Time_[_CHARAT](6) === _0 ? Time_[_CHARAT](7) : Time_[_SUBSTRING](6, 8)),
         +(Time_[_CHARAT](8) === _0 ? Time_[_CHARAT](9) : Time_[_SUBSTRING](8, 10)),
         +(Time_[_CHARAT](10) === _0 ? Time_[_CHARAT](11) : Time_[_SUBSTRING](10, 12)),
         +(Time_[_CHARAT](12) === _0 ? Time_[_CHARAT](13) : Time_[_SUBSTRING](12, 14)),
         0
         );
      }

   return (v);
   };

/* long */ _GET_ASN1TIME = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;

   if ((u = Bs_.read(8) , v = u === _UTCTIME , ! v && u !== _GENERALIZEDTIME)
         || (u = _ASN1LEN(Bs_) , v ? u !== 13 : u !== 15))
      {
      return (_EOF);
      }

   w = Bs_.getptr();
   v = _GET_TIME(_UTF16(_DATA(w, u, Bs_)), u);

   if (v === _EOF)
      {
      return (_EOF);
      }

   Bs_.seek(_EOF, w + u);

   return (v);
   };

/* T */ _GET_VALIDITY = function (/* std::vector */Bs_)
   {
   var u = [];
   var s;

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0)
      {
      return (_NULL);
      }

   for (s = 0; s < 2; ++ s)
      {
      u[s] = _GET_ASN1TIME(Bs_);

      if (u[s] === _EOF)
         {
         return (_NULL);
         }
      }

   if (u[0] >= u[1])
      {
      return (_NULL);
      }

   return (u);
   };

/* int */ _GET_ALGORITHM_IDENTIFIER = function (/* std::vector */Bs_)
   {
   var u;

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0
         || (u = _OID_IN(_OIDLIST, Bs_) , u === _EOF || u === _OIDLIST[_LENGTH]))
      {
      return (_EOF);
      }

   if (_OIDLIST[u] === _OID_ED25519)
      {
      return (_IDLIST[u]);
      }
   else if (_OIDLIST[u] === _OID_SHA256RSA
         || _OIDLIST[u] === _OID_SHA1RSA
         || _OIDLIST[u] === _OID_RSA)
      {
      if (Bs_.read(8) !== _NULLTAG
            || _ASN1LEN(Bs_) !== 0)
         {
         return (_EOF);
         }

      return (_IDLIST[u]);
      }
   };

/* T */ _GET_SUBJECT_PUBLIC_KEY_INFO = function (/* std::vector */Bs_)
   {
   var u = [];
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0
         || (u[0] = _GET_ALGORITHM_IDENTIFIER(Bs_) , u[0] === _EOF)
         || Bs_.read(8) !== _BITSTRING
         || (v = _ASN1LEN(Bs_) , v <= 1)
         || (w = Bs_.getptr() , Bs_.read(8) !== 0))
      {
      return (_NULL);
      }

   u[1] = _DATA(w + 1, v - 1, Bs_);

   if (u[0] === _ID_ED25519)
      {
      if (u[1][_LENGTH] !== 32)
         {
         return (_NULL);
         }
      }
   else if (u[0] === _ID_RSA)
      {
      x = new _VECTOR(u[1]);
      y = [];
      u[1] = y;

      if (x.read(8) !== _SEQUENCE
            || _ASN1LEN(x) <= 0
            || x.read(8) !== _INTEGER
            || (z = _ASN1LEN(x) , z <= 0)
            || (r = x.read(8) , q = x.read(8) , z !== 1
               && (r === 0x00 && q < 0x80 || r === 0xFF && q >= 0x80)))
         {
         return (_NULL);
         }

      x.seek(16);
      r = x.getptr();
      y[0] = _DATA(r, z, x);
      x.seek(_EOF, r + z);

      if (x.read(8) !== _INTEGER
            || (z = _ASN1LEN(x) , z <= 0)
            || (r = x.read(8) , q = x.read(8) , z !== 1
               && (r === 0x00 && q < 0x80 || r === 0xFF && q >= 0x80)))
         {
         return (_NULL);
         }

      x.seek(16);
      y[1] = _DATA(x.getptr(), z, x);
      }
   else
      {
      return (_NULL);
      }

   Bs_.seek(_EOF, w + v);

   return (u);
   };

/* T */ _GET_PRIVATE_KEY_INFO = function (/* std::vector */Bs_)
   {
   var u = [];
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var s;

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0
         || Bs_.read(8) !== _INTEGER
         || _ASN1LEN(Bs_) !== 1
         || Bs_.read(8) !== 0
         || (u[0] = _GET_ALGORITHM_IDENTIFIER(Bs_) , u[0] === _EOF)
         || Bs_.read(8) !== _OCTETSTRING
         || (v = _ASN1LEN(Bs_) , v <= 0))
      {
      return (_NULL);
      }

   w = Bs_.getptr();
   u[1] = _DATA(w, v, Bs_);

   if (u[0] === _ID_ED25519)
      {
      x = new _VECTOR(u[1]);

      if (x.read(8) !== _OCTETSTRING
            || _ASN1LEN(x) !== 32)
         {
         return (_NULL);
         }

      u[1] = _DATA(x.getptr(), 32, x);
      }
   else if (u[0] === _ID_RSA)
      {
      x = new _VECTOR(u[1]);
      y = [];
      u[1] = y;

      if (x.read(8) !== _SEQUENCE
            || _ASN1LEN(x) <= 0
            || x.read(8) !== _INTEGER
            || _ASN1LEN(x) !== 1
            || x.read(8) !== 0
            || x.read(8) !== _INTEGER
            || (z = _ASN1LEN(x) , z <= 0)
            || (r = x.read(8) , q = x.read(8) , z !== 1
               && (r === 0x00 && q < 0x80 || r === 0xFF && q >= 0x80)))
         {
         return (_NULL);
         }

      x.seek(16);
      r = x.getptr();
      y[0] = _DATA(r, z, x);

      for (s = 1; s < 8; ++ s)
         {
         x.seek(_EOF, r + z);

         if (x.read(8) !== _INTEGER
               || (z = _ASN1LEN(x) , z <= 0)
               || (r = x.read(8) , q = x.read(8) , z !== 1
                  && (r === 0x00 && q < 0x80 || r === 0xFF && q >= 0x80)))
            {
            return (_NULL);
            }

         x.seek(16);
         r = x.getptr();
         y[s] = _DATA(r, z, x);
         }
      }
   else
      {
      return (_NULL);
      }

   Bs_.seek(_EOF, w + v);

   return (u);
   };

/* T */ _GET_REVOKED_CERTIFICATES = function (
      /* size_t */Pos_, /* std::vector */Bs_)
   {
   var u = [];
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;

   if (Bs_.getptr() === Pos_)
      {
      return (u);
      }

   v = Bs_.read(8);

   if (v === _CONSTRUCTED_0)
      {
      Bs_.seek(8);

      return (u);
      }

   if (v !== _SEQUENCE
         || (v = _ASN1LEN(Bs_) , v <= 0))
      {
      return (_NULL);
      }

   v += Bs_.getptr();

   for (; Bs_.getptr() < v; )
      {
      if (Bs_.read(8) !== _SEQUENCE
            || (w = _ASN1LEN(Bs_) , w <= 0)
            || (w += Bs_.getptr() , w > v))
         {
         return (_NULL);
         }

      x = [];
      u[u[_LENGTH]] = x;
      x[0] = _GET_SERIAL_NUMBER(Bs_);

      if (x[0] === _EMPTY)
         {
         return (_NULL);
         }

      x[1] = _GET_ASN1TIME(Bs_);

      if (x[1] === _EOF)
         {
         return (_NULL);
         }

      x[2] = _UNSPECIFIED;

      if (Bs_.getptr() < w)
         {
         if (Bs_.read(8) !== _SEQUENCE
               || (y = _ASN1LEN(Bs_) , y <= 0)
               || Bs_.getptr() + y !== w)
            {
            return (_NULL);
            }

         for (; Bs_.getptr() < w; )
            {
            if (Bs_.read(8) !== _SEQUENCE
                  || (y = _ASN1LEN(Bs_) , y <= 0)
                  || (y += Bs_.getptr() , y > w)
                  || (z = _OID_EQUAL(_OID_CRLREASON, Bs_) , z === _EOF))
               {
               return (_NULL);
               }

            r = Bs_.read(8);

            if (r === _BOOLEAN)
               {
               return (_NULL);
               }

            if (z > 0)
               {
               if (r !== _OCTETSTRING
                     || _ASN1LEN(Bs_) <= 0)
                  {
                  return (_NULL);
                  }

               if (Bs_.read(8) === _ENUMERATED
                     && _ASN1LEN(Bs_) === 1)
                  {
                  x[2] = Bs_.read(8);
                  }
               }

            Bs_.seek(_EOF, y);
            }
         }

      Bs_.seek(_EOF, w);
      }

   return (u);
   };

/* T */ _GET_EXTREQ = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y = Bs_.getptr();
   var z =
      [
      0,
      []
      ];

   if (Bs_.read(8) !== _CONSTRUCTED_0
         || _ASN1LEN(Bs_) !== 0)
      {
      Bs_.seek(_EOF, y);

      if (Bs_.read(8) !== _CONSTRUCTED_0
            || (y = _ASN1LEN(Bs_) , y <= 0))
         {
         return (_NULL);
         }

      y += Bs_.getptr();

      for (; Bs_.getptr() < y; )
         {
         if (Bs_.read(8) !== _SEQUENCE
               || (v = _ASN1LEN(Bs_) , v <= 0)
               || (v += Bs_.getptr() , v > y)
               || (w = _OID_EQUAL(_OID_EXTENSIONREQUEST, Bs_) , w === _EOF))
            {
            return (_NULL);
            }

         if (w > 0)
            {
            if (Bs_.read(8) !== _SET
                  || _ASN1LEN(Bs_) <= 0
                  || Bs_.read(8) !== _SEQUENCE
                  || (u = _ASN1LEN(Bs_) , u <= 0)
                  || (u += Bs_.getptr() , u > v))
               {
               return (_NULL);
               }

            for (; Bs_.getptr() < u; )
               {
               if (Bs_.read(8) !== _SEQUENCE
                     || (v = _ASN1LEN(Bs_) , v <= 0)
                     || (v += Bs_.getptr() , v > u)
                     || (w = _OID_IN(_EXTREQ_OIDLIST, Bs_) , w === _EOF))
                  {
                  return (_NULL);
                  }

               if (w < _EXTREQ_OIDLIST[_LENGTH])
                  {
                  x = Bs_.read(8);

                  if (x === _BOOLEAN)
                     {
                     if (_ASN1LEN(Bs_) !== 1
                           || Bs_.read(8) !== 0xFF)
                        {
                        return (_NULL);
                        }

                     x = Bs_.read(8);
                     }

                  if (x !== _OCTETSTRING
                        || _ASN1LEN(Bs_) <= 0)
                     {
                     return (_NULL);
                     }

                  if (_EXTREQ_OIDLIST[w] === _OID_KEYUSAGE)
                     {
                     z[0] = _GET_KEYUSAGE(Bs_);
                     }
                  else if (_EXTREQ_OIDLIST[w] === _OID_SUBJECTALTNAME)
                     {
                     z[1] = _GET_SUBJECTALTNAME(Bs_);
                     }
                  }

               Bs_.seek(_EOF, v);
               }

            break;
            }

         Bs_.seek(_EOF, v);
         }

      Bs_.seek(_EOF, y);
      }

   return (z);
   };

/* T */ _GET_EXT_3 = function (
      /* size_t */Pos_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z =
      [
      0x00,
      0,
      [],
      _EMPTY,
      _EMPTY,
      [],
      []
      ];
   var r = false;
   var q = false;

   if (Bs_.getptr() === Pos_)
      {
      return (z);
      }

   if (Bs_.read(8) !== _CONSTRUCTED_3
         || _ASN1LEN(Bs_) <= 0
         || Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_NULL);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      if (Bs_.read(8) !== _SEQUENCE
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (v += Bs_.getptr() , v > u)
            || (w = _OID_IN(_EXT_3_OIDLIST, Bs_) , w === _EOF))
         {
         return (_NULL);
         }

      x = Bs_.read(8);

      if (x === _BOOLEAN)
         {
         if (_ASN1LEN(Bs_) !== 1
               || Bs_.read(8) !== 0xFF)
            {
            return (_NULL);
            }

         x = Bs_.read(8);
         y = true;
         }
      else
         {
         y = false;
         }

      if (w === _EXT_3_OIDLIST[_LENGTH])
         {
         if (y)
            {
            return (_NULL);
            }
         }
      else
         {
         if (x !== _OCTETSTRING
               || _ASN1LEN(Bs_) <= 0)
            {
            return (_NULL);
            }

         if (_EXT_3_OIDLIST[w] === _OID_BASICCONSTRAINTS)
            {
            z[0] = _GET_BASICCONSTRAINTS(Bs_);
            r = z[0] !== 0x00;

            if (r && ! y)
               {
               return (_NULL);
               }
            }
         else if (_EXT_3_OIDLIST[w] === _OID_KEYUSAGE)
            {
            z[1] = _GET_KEYUSAGE(Bs_);
            q = (z[1] & _KEY_CERT_SIGN) !== 0;

            if (! y && (q || (z[1] & _CRL_SIGN) !== 0))
               {
               return (_NULL);
               }
            }
         else if (_EXT_3_OIDLIST[w] === _OID_SUBJECTALTNAME)
            {
            if (y)
               {
               return (_NULL);
               }

            z[2] = _GET_SUBJECTALTNAME(Bs_);
            }
         else if (_EXT_3_OIDLIST[w] === _OID_SUBJECTKEYIDENTIFIER)
            {
            if (y)
               {
               return (_NULL);
               }

            z[3] = _GET_SUBJECTKEYIDENTIFIER(Bs_);
            }
         else if (_EXT_3_OIDLIST[w] === _OID_AUTHORITYKEYIDENTIFIER)
            {
            if (y)
               {
               return (_NULL);
               }

            z[4] = _GET_AUTHORITYKEYIDENTIFIER(Bs_);
            }
         else if (_EXT_3_OIDLIST[w] === _OID_AUTHORITYINFOACCESS)
            {
            if (y)
               {
               return (_NULL);
               }

            z[5] = _GET_AUTHORITYINFOACCESS(Bs_);
            }
         else if (_EXT_3_OIDLIST[w] === _OID_CRLDISTRIBUTIONPOINTS)
            {
            if (y)
               {
               return (_NULL);
               }

            z[6] = _GET_CRLDISTRIBUTIONPOINTS(Bs_);
            }
         }

      Bs_.seek(_EOF, v);
      }

   if (q && ! r)
      {
      return (_NULL);
      }

   return (z);
   };

/* T */ _GET_EXT_0 = function (
      /* size_t */Pos_, /* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y =
      [
      _EMPTY,
      _EMPTY
      ];

   if (Bs_.getptr() === Pos_)
      {
      return (y);
      }

   if (Bs_.read(8) !== _CONSTRUCTED_0
         || _ASN1LEN(Bs_) <= 0
         || Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_NULL);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      if (Bs_.read(8) !== _SEQUENCE
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (v += Bs_.getptr() , v > u)
            || (w = _OID_IN(_EXT_0_OIDLIST, Bs_) , w === _EOF))
         {
         return (_NULL);
         }

      x = Bs_.read(8);

      if (x === _BOOLEAN)
         {
         return (_NULL);
         }

      if (w < _EXT_0_OIDLIST[_LENGTH])
         {
         if (x !== _OCTETSTRING
               || _ASN1LEN(Bs_) <= 0)
            {
            return (_NULL);
            }

         if (_EXT_0_OIDLIST[w] === _OID_AUTHORITYKEYIDENTIFIER)
            {
            y[0] = _GET_AUTHORITYKEYIDENTIFIER(Bs_);
            }
         else if (_EXT_0_OIDLIST[w] === _OID_CRLNUMBER)
            {
            y[1] = _GET_CRLNUMBER(Bs_);
            }
         }

      Bs_.seek(_EOF, v);
      }

   return (y);
   };

/* int */ _GET_BASICCONSTRAINTS = function (/* std::vector */Bs_)
   {
   var u;

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0)
         || Bs_.read(8) !== _BOOLEAN
         || _ASN1LEN(Bs_) !== 1
         || Bs_.read(8) !== 0xFF)
      {
      return (0x00);
      }

   if (u === 3)
      {
      return (0xFF);
      }

   if (u !== 6
         || Bs_.read(8) !== _INTEGER
         || _ASN1LEN(Bs_) !== 1
         || (u = Bs_.read(8) , u >= 0x80))
      {
      return (0x00);
      }

   return (u + 1);
   };

/* int */ _GET_KEYUSAGE = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;

   if (Bs_.read(8) !== _BITSTRING
         || (u = _ASN1LEN(Bs_) , u <= 1 || u > 3)
         || (v = Bs_.read(8) , v > 7))
      {
      return (0);
      }

   -- u;
   w = u << 3;
   w = (_HTON(Bs_.read(w), u) & ~((1 << v) - 1)) << 16 - w;

   return (w >>> 0);
   };

/* string[] */ _GET_SUBJECTALTNAME = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z = [];

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return ([]);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      v = Bs_.read(8);

      if ((w = _ASN1LEN(Bs_) , w <= 0)
            || (x = Bs_.getptr() , y = x + w , y > u))
         {
         return ([]);
         }

      if (v === _PRIMITIVE_1 || v === _PRIMITIVE_2)
         {
         v = _IA5STR(_DATA(x, w, Bs_));

         if (v === _EMPTY)
            {
            return ([]);
            }

         z[z[_LENGTH]] = v;
         }

      Bs_.seek(_EOF, y);
      }

   return (z);
   };

/* string */ _GET_SUBJECTKEYIDENTIFIER = function (/* std::vector */Bs_)
   {
   var u;

   if (Bs_.read(8) !== _OCTETSTRING
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_EMPTY);
      }

   return (_TO_STRING(u, Bs_));
   };

/* string */ _GET_AUTHORITYKEYIDENTIFIER = function (/* std::vector */Bs_)
   {
   var u;

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0
         || Bs_.read(8) !== _PRIMITIVE_0
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return (_EMPTY);
      }

   return (_TO_STRING(u, Bs_));
   };

/* string[] */ _GET_AUTHORITYINFOACCESS = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y = [];

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return ([]);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      if (Bs_.read(8) !== _SEQUENCE
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (v += Bs_.getptr() , v > u)
            || (w = _OID_EQUAL(_OID_CAISSUERS, Bs_) , w === _EOF))
         {
         return ([]);
         }

      if (w > 0)
         {
         x = Bs_.read(8);

         if ((u = _ASN1LEN(Bs_) , u <= 0)
               || (w = Bs_.getptr() , w + u > v))
            {
            return ([]);
            }

         if (x === _PRIMITIVE_6)
            {
            x = _IA5STR(_DATA(w, u, Bs_));

            if (x === _EMPTY)
               {
               return ([]);
               }

            y[y[_LENGTH]] = x;
            }
         }

      Bs_.seek(_EOF, v);
      }

   return (y);
   };

/* string[][] */ _GET_CRLDISTRIBUTIONPOINTS = function (/* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q = [];

   if (Bs_.read(8) !== _SEQUENCE
         || (u = _ASN1LEN(Bs_) , u <= 0))
      {
      return ([]);
      }

   u += Bs_.getptr();

   for (; Bs_.getptr() < u; )
      {
      if (Bs_.read(8) !== _SEQUENCE
            || (v = _ASN1LEN(Bs_) , v <= 0)
            || (v += Bs_.getptr() , v > u)
            || Bs_.read(8) !== _CONSTRUCTED_0
            || (w = _ASN1LEN(Bs_) , w <= 0)
            || (w += Bs_.getptr() , w > v))
         {
         return ([]);
         }

      if (w === v)
         {
         x = Bs_.read(8);

         if ((w = _ASN1LEN(Bs_) , w <= 0)
               || Bs_.getptr() + w !== v)
            {
            return ([]);
            }

         if (x === _CONSTRUCTED_0)
            {
            r = [];

            for (; Bs_.getptr() < v; )
               {
               z = Bs_.read(8);

               if ((w = _ASN1LEN(Bs_) , w <= 0)
                     || (x = Bs_.getptr() , y = x + w , y > v))
                  {
                  return ([]);
                  }

               if (z === _PRIMITIVE_6)
                  {
                  z = _IA5STR(_DATA(x, w, Bs_));

                  if (z === _EMPTY)
                     {
                     return ([]);
                     }

                  r[r[_LENGTH]] = z;
                  }

               Bs_.seek(_EOF, y);
               }

            if (r[_LENGTH] > 0)
               {
               q[q[_LENGTH]] = r;
               }
            }
         }

      Bs_.seek(_EOF, v);
      }

   return (q);
   };

/* string */ _GET_CRLNUMBER = function (/* std::vector */Bs_)
   {
   return (_INT20STRING(true, Bs_));
   };

/* T */ _GET_POS = function (/* std::vector */Bs_)
   {
   var u = [];

   if (Bs_.read(8) !== _SEQUENCE
         || _ASN1LEN(Bs_) <= 0
         || (u[0] = Bs_.getptr() , Bs_.read(8) !== _SEQUENCE)
         || (u[1] = _ASN1LEN(Bs_) , u[1] <= 0))
      {
      return (_NULL);
      }

   u[1] += Bs_.getptr();
   u[2] = _DATA(u[0], u[1] - u[0], Bs_);

   return (u);
   };

/* T */ _GET_SIGNATURE = function (/* size_t */Pos_, /* std::vector */Bs_)
   {
   var u = [];
   var v;
   var w;

   if (Bs_.getptr() !== Pos_
         || (u[0] = _GET_ALGORITHM_IDENTIFIER(Bs_) , u[0] === _EOF)
         || Bs_.read(8) !== _BITSTRING
         || (v = _ASN1LEN(Bs_) , v <= 1)
         || (w = Bs_.getptr() , Bs_.read(8) !== 0))
      {
      return (_NULL);
      }

   u[1] = _DATA(w + 1, v - 1, Bs_);

   if (u[0] === _ID_ED25519)
      {
      if (u[1][_LENGTH] !== 64)
         {
         return (_NULL);
         }
      }
   else if (u[0] !== _ID_SHA256RSA
         && u[0] !== _ID_SHA1RSA)
      {
      return (_NULL);
      }

   Bs_.seek(_EOF, w + v);

   return (u);
   };

/* public: */

/*
 * X.509
 *
 *    x509::public_key(public_id, public_key) const
 *       ->
 *          subjectPublicKeyInfo   (char[])
 *
 *    x509::private_key(private_id, private_key) const
 *       ->
 *          PrivateKeyInfo   (char[])
 *
 *    x509::certification_request_info(
 *          public_id,
 *          subject_utf8, subject,
 *          public_key,
 *          nonRepudiation,
 *          subjectAltName) const
 *       ->
 *          certificationRequestInfo   (char[])
 *
 *    x509::csr(
 *          signature_id,
 *          certificationRequestInfo,
 *          signature) const
 *       ->
 *          CSR   (char[])
 *
 *    x509::tbs_certificate(
 *          signature_id, public_id,
 *          serialNumber,
 *          issuer_utf8, issuer,
 *          notBefore, notAfter,
 *          subject_utf8, subject,
 *          public_key,
 *          cA, nonRepudiation,
 *          subjectAltName,
 *          authorityKeyIdentifier,
 *          authorityInfoAccess,
 *          cRLDistributionPoints) const
 *       ->
 *          tbsCertificate   (char[])
 *
 *    x509::cert(
 *          signature_id,
 *          tbsCertificate,
 *          signature) const
 *       ->
 *          Cert   (char[])
 *
 *    x509::tbs_cert_list(
 *          signature_id,
 *          issuer_utf8, issuer,
 *          thisUpdate, nextUpdate,
 *          revokedCertificates[],
 *          authorityKeyIdentifier,
 *          cRLNumber) const
 *       ->
 *          tbsCertList   (char[])
 *
 *    x509::crl(
 *          signature_id,
 *          tbsCertList,
 *          signature) const
 *       ->
 *          CRL   (char[])
 *
 *    x509::public_key_pem(subjectPublicKeyInfo) const
 *       ->
 *          PEM   (char[])
 *
 *    x509::private_key_pem(PrivateKeyInfo) const
 *       ->
 *          PEM   (char[])
 *
 *    x509::csr_pem(CSR) const
 *       ->
 *          PEM   (char[])
 *
 *    x509::cert_pem(Cert) const
 *       ->
 *          PEM   (char[])
 *
 *    x509::crl_pem(CRL) const
 *       ->
 *          PEM   (char[])
 *
 *    x509::public_key_der(PEM) const
 *       ->
 *          subjectPublicKeyInfo   (nullable char[])
 *
 *    x509::private_key_der(PEM) const
 *       ->
 *          PrivateKeyInfo   (nullable char[])
 *
 *    x509::csr_der(PEM) const
 *       ->
 *          CSR   (nullable char[])
 *
 *    x509::cert_der(PEM) const
 *       ->
 *          Cert   (nullable char[])
 *
 *    x509::crl_der(PEM) const
 *       ->
 *          CRL   (nullable char[])
 *
 *    x509::parse_public_key(subjectPublicKeyInfo) const
 *       ->
 *          nullable sPKI
 *             [0]   public_id   (int)
 *             [1]   public_key   (T)
 *
 *    x509::parse_private_key(PrivateKeyInfo) const
 *       ->
 *          nullable
 *          [0]   private_id   (int)
 *          [1]   private_key   (T)
 *
 *    x509::parse_csr(CSR) const
 *       ->
 *          nullable
 *          [0]   certificationRequestInfo   (char[])
 *          [1]
 *             [0]   subject_der_string   (string)
 *             [1]   subject   (string[])
 *          [2]   sPKI
 *             [0]   public_id   (int)
 *             [1]   public_key   (T)
 *          [3]
 *             [0]   keyUsage   (int)
 *             [1]   subjectAltName   (string[])
 *          [4]
 *             [0]   signature_id   (int)
 *             [1]   signature   (T)
 *
 *    x509::parse_cert(Cert) const
 *       ->
 *          nullable certStruct
 *             [0]   tbsCertificate   (char[])
 *             [1]   serialNumber   (string)
 *             [2]
 *                [0]   issuer_der_string   (string)
 *                [1]   issuer   (string[])
 *             [3]
 *                [0]   notBefore   (long)
 *                [1]   notAfter   (long)
 *             [4]
 *                [0]   subject_der_string   (string)
 *                [1]   subject   (string[])
 *             [5]   sPKI
 *                [0]   public_id   (int)
 *                [1]   public_key   (T)
 *             [6]
 *                [0]   cA   (int)
 *                [1]   keyUsage   (int)
 *                [2]   subjectAltName   (string[])
 *                [3]   subjectKeyIdentifier   (string)
 *                [4]   authorityKeyIdentifier   (string)
 *                [5]   authorityInfoAccess[]   (string)
 *                [6]   cRLDistributionPoints[][]   (string)
 *             [7]
 *                [0]   signature_id   (int)
 *                [1]   signature   (T)
 *
 *    x509::parse_crl(CRL) const
 *       ->
 *          nullable
 *          [0]   tbsCertList   (char[])
 *          [1]
 *             [0]   issuer_der_string   (string)
 *             [1]   issuer   (string[])
 *          [2]   thisUpdate   (long)
 *          [3]   nextUpdate   (long)
 *          [4]   revokedCertificates[]
 *             [0]   serialNumber   (string)
 *             [1]   revocationDate   (long)
 *             [2]   cRLReason   (int)
 *          [5]
 *             [0]   authorityKeyIdentifier   (string)
 *             [1]   cRLNumber   (string)
 *          [6]
 *             [0]   signature_id   (int)
 *             [1]   signature   (T)
 *
 *    class x509::path
 *       x509::path()
 *
 *       x509::path::add_trust_anchor(Cert)
 *          ->
 *             trust_anchor_index   (int)
 *                [-1, size_t]
 *
 *       x509::path::add_cert(Cert)
 *          ->
 *             cert_index   (int)
 *                [-1, size_t]
 *
 *       x509::path::add_crl(CRL)
 *          ->
 *             crl_index   (int)
 *                [-1, size_t]
 *
 *       x509::path::set_response(reg_index)
 *
 *       x509::path::set_time(time)
 *
 *       x509::path::set_target_cert(cert_index)
 *
 *       x509::path::set_algorithm(signature_id, IAlgorithm)
 *
 *       x509::path::set_crl_check(crl_check)
 *
 *       x509::path::_SetTrustAnchors(trustAnchors)
 *
 *       x509::path::_GetTrustAnchors() const
 *          ->
 *             trustAnchors   (T[])
 *
 *       x509::path::process()
 *
 *       x509::path::state() const
 *          ->
 *             state_value   (int)
 *
 *       x509::path::uri() const
 *          ->
 *             uRI   (string)
 *
 *       x509::path::mime() const
 *          ->
 *             mIME   (string)
 *
 *       x509::path::length() const
 *          ->
 *             pathLen   (size_t)
 *
 *       x509::path::cert(index) const
 *          ->
 *             certStruct   (nullable T)
 *
 *       x509::path::dispose()
 *
 *    public_id   (int)
 *    private_id   (int)
 *       x509::Ed25519
 *       x509::RSA
 *
 *    subject_utf8   (bool)
 *    issuer_utf8   (bool)
 *
 *    nonRepudiation   (bool)      keyUsage
 *
 *    signature_id   (int)
 *       x509::Ed25519
 *       x509::sha256RSA
 *       x509::sha1RSA
 *
 *    cA   (int)      basicConstraints
 *       0x00      end entity
 *       [0x01, 0x80]      certification authority, pathLenConstraint cA - 1
 *       0xFF      certification authority
 *
 *    keyUsage   (int)
 *       x509::digitalSignature
 *       x509::nonRepudiation
 *       x509::keyEncipherment
 *       x509::dataEncipherment
 *       x509::keyAgreement
 *       x509::keyCertSign
 *       x509::cRLSign
 *       x509::encipherOnly
 *       x509::decipherOnly
 *
 *    cRLReason   (int)
 *       x509::unspecified
 *       x509::keyCompromise
 *       x509::cACompromise
 *       x509::affiliationChanged
 *       x509::superseded
 *       x509::cessationOfOperation
 *       x509::certificateHold
 *       x509::removeFromCRL
 *       x509::privilegeWithdrawn
 *       x509::aACompromise
 *
 *    reg_index   (int)
 *       cert_index
 *       crl_index
 *
 *    time   (long)
 *
 *    IAlgorithm   (T)
 *       ec25519
 *       pkcs15::sha256rsa
 *       pkcs15::sha1rsa
 *
 *    crl_check   (bool)
 *
 *    state_value   (int)
 *       x509::PATH_BUILDING
 *       x509::PUSH_STACK
 *       x509::HTTP_GET
 *       x509::PATH_VALIDATION
 *       x509::NOT_TRUSTED
 *       x509::NOT_FOUND
 *       x509::SIGNATURE_NOT_VALID
 *       x509::NOT_IMPLEMENTED
 *       x509::EXPIRED
 *       x509::DN_NOT_MATCH
 *       x509::NOT_CA
 *       x509::PATH_TOO_LONG
 *       x509::KEY_CERT_SIGN_NOT_SET
 *       x509::OK
 *       x509::CRL_REASON
 *       x509::CRL_REASON_UNSPECIFIED
 *       x509::CRL_REASON_KEY_COMPROMISE
 *       x509::CRL_REASON_CA_COMPROMISE
 *       x509::CRL_REASON_AFFILIATION_CHANGED
 *       x509::CRL_REASON_SUPERSEDED
 *       x509::CRL_REASON_CESSATION_OF_OPERATION
 *       x509::CRL_REASON_CERTIFICATE_HOLD
 *       x509::CRL_REASON_REMOVE_FROM_CRL
 *       x509::CRL_REASON_PRIVILEGE_WITHDRAWN
 *       x509::CRL_REASON_AA_COMPROMISE
 *       x509::CRL_REASON_MAX
 *       x509::UNREVOKED
 *       x509::UNDETERMINED
 *       x509::CRL_EXPIRED
 *       x509::CRL_DN_NOT_MATCH
 *       x509::CRL_SIGN_NOT_SET
 *       x509::CRL_SIGNATURE_NOT_VALID
 *
 *    mIME   (string)
 *       x509::application_pkix_cert
 *       x509::application_pkix_crl
 *
 *    index   (size_t)
 */

/* const int */ x509.Ed25519 = _ID_ED25519;
/* const int */ x509.sha256RSA = _ID_SHA256RSA;
/* const int */ x509.sha1RSA = _ID_SHA1RSA;
/* const int */ x509.RSA = _ID_RSA;
/* const int */ x509.digitalSignature = _DIGITAL_SIGNATURE;
/* const int */ x509.nonRepudiation = _NON_REPUDIATION;
/* const int */ x509.keyEncipherment = _KEY_ENCIPHERMENT;
/* const int */ x509.dataEncipherment = _DATA_ENCIPHERMENT;
/* const int */ x509.keyAgreement = _KEY_AGREEMENT;
/* const int */ x509.keyCertSign = _KEY_CERT_SIGN;
/* const int */ x509.cRLSign = _CRL_SIGN;
/* const int */ x509.encipherOnly = _ENCIPHER_ONLY;
/* const int */ x509.decipherOnly = _DECIPHER_ONLY;
/* const int */ x509.unspecified = _UNSPECIFIED;
/* const int */ x509.keyCompromise = _KEY_COMPROMISE;
/* const int */ x509.cACompromise = _CA_COMPROMISE;
/* const int */ x509.affiliationChanged = _AFFILIATION_CHANGED;
/* const int */ x509.superseded = _SUPERSEDED;
/* const int */ x509.cessationOfOperation = _CESSATION_OF_OPERATION;
/* const int */ x509.certificateHold = _CERTIFICATE_HOLD;
/* const int */ x509.removeFromCRL = _REMOVE_FROM_CRL;
/* const int */ x509.privilegeWithdrawn = _PRIVILEGE_WITHDRAWN;
/* const int */ x509.aACompromise = _AA_COMPROMISE;
/* const int */ x509.PATH_BUILDING = _PATH_BUILDING;
/* const int */ x509.PUSH_STACK = _PUSH_STACK;
/* const int */ x509.HTTP_GET = _HTTP_GET;
/* const int */ x509.PATH_VALIDATION = _PATH_VALIDATION;
/* const int */ x509.NOT_TRUSTED = _NOT_TRUSTED;
/* const int */ x509.NOT_FOUND = _NOT_FOUND;
/* const int */ x509.SIGNATURE_NOT_VALID = _SIGNATURE_NOT_VALID;
/* const int */ x509.NOT_IMPLEMENTED = _NOT_IMPLEMENTED;
/* const int */ x509.EXPIRED = _EXPIRED;
/* const int */ x509.DN_NOT_MATCH = _DN_NOT_MATCH;
/* const int */ x509.NOT_CA = _NOT_CA;
/* const int */ x509.PATH_TOO_LONG = _PATH_TOO_LONG;
/* const int */ x509.KEY_CERT_SIGN_NOT_SET = _KEY_CERT_SIGN_NOT_SET;
/* const int */ x509.OK = _OK;
/* const int */ x509.CRL_REASON = _CRL_REASON;
/* const int */ x509.CRL_REASON_UNSPECIFIED = _CRL_REASON_UNSPECIFIED;
/* const int */ x509.CRL_REASON_KEY_COMPROMISE = _CRL_REASON_KEY_COMPROMISE;
/* const int */ x509.CRL_REASON_CA_COMPROMISE = _CRL_REASON_CA_COMPROMISE;
/* const int */ x509.CRL_REASON_AFFILIATION_CHANGED = _CRL_REASON_AFFILIATION_CHANGED;
/* const int */ x509.CRL_REASON_SUPERSEDED = _CRL_REASON_SUPERSEDED;
/* const int */ x509.CRL_REASON_CESSATION_OF_OPERATION = _CRL_REASON_CESSATION_OF_OPERATION;
/* const int */ x509.CRL_REASON_CERTIFICATE_HOLD = _CRL_REASON_CERTIFICATE_HOLD;
/* const int */ x509.CRL_REASON_REMOVE_FROM_CRL = _CRL_REASON_REMOVE_FROM_CRL;
/* const int */ x509.CRL_REASON_PRIVILEGE_WITHDRAWN = _CRL_REASON_PRIVILEGE_WITHDRAWN;
/* const int */ x509.CRL_REASON_AA_COMPROMISE = _CRL_REASON_AA_COMPROMISE;
/* const int */ x509.CRL_REASON_MAX = _CRL_REASON_MAX;
/* const int */ x509.UNREVOKED = _UNREVOKED;
/* const int */ x509.UNDETERMINED = _UNDETERMINED;
/* const int */ x509.CRL_EXPIRED = _CRL_EXPIRED;
/* const int */ x509.CRL_DN_NOT_MATCH = _CRL_DN_NOT_MATCH;
/* const int */ x509.CRL_SIGN_NOT_SET = _CRL_SIGN_NOT_SET;
/* const int */ x509.CRL_SIGNATURE_NOT_VALID = _CRL_SIGNATURE_NOT_VALID;
/* const string */ x509.application_pkix_cert = _APPLICATION_PKIX_CERT;
/* const string */ x509.application_pkix_crl = _APPLICATION_PKIX_CRL;

/* char[] */ x509.public_key = function (
      /* int */Public_Id_,
      /* const T */Public_) /* const */
   {
   var u = new _VECTOR();

   _SUBJECT_PUBLIC_KEY_INFO(Public_Id_, Public_, u);

   return (u.data());
   };

/* char[] */ x509.private_key = function (
      /* int */Private_Id_,
      /* const T */Private_) /* const */
   {
   var u = new _VECTOR();

   _PRIVATE_KEY_INFO(Private_Id_, Private_, u);

   return (u.data());
   };

/* char[] */ x509.certification_request_info = function (
      /* int */Public_Id_,
      /* bool */Subject_Utf8_, /* const string[] */Subject_,
      /* const T */Public_,
      /* bool */NonRepudiation_,
      /* const string[] */SubjectAltName_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _V1(u);
   _DN(Subject_Utf8_, Subject_, u);
   _SUBJECT_PUBLIC_KEY_INFO(Public_Id_, Public_, u);
   _EXTREQ(
      NonRepudiation_,
      SubjectAltName_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.csr = function (
      /* int */Signature_Id_,
      /* const char[] */CertificationRequestInfo_,
      /* const T */Signature_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _ATE(CertificationRequestInfo_, u);
   _SIGNATURE(Signature_Id_, Signature_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.tbs_certificate = function (
      /* int */Signature_Id_, /* int */Public_Id_,
      /* string */SerialNumber_,
      /* bool */Issuer_Utf8_, /* const string[] */Issuer_,
      /* long */NotBefore_, /* long */NotAfter_,
      /* bool */Subject_Utf8_, /* const string[] */Subject_,
      /* const T */Public_,
      /* int */CA_, /* bool */NonRepudiation_,
      /* const string[] */SubjectAltName_,
      /* string */AuthorityKeyIdentifier_,
      /* string */AuthorityInfoAccess_,
      /* string */CRLDistributionPoints_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _V3(u);
   _SERIAL_NUMBER(SerialNumber_, u);
   _ALGORITHM_IDENTIFIER(Signature_Id_, u);
   _DN(Issuer_Utf8_, Issuer_, u);
   _VALIDITY(NotBefore_, NotAfter_, u);
   _DN(Subject_Utf8_, Subject_, u);
   _SUBJECT_PUBLIC_KEY_INFO(Public_Id_, Public_, u);
   _EXT_3(
      Public_Id_,
      CA_, NonRepudiation_,
      SubjectAltName_,
      Public_,
      AuthorityKeyIdentifier_,
      AuthorityInfoAccess_,
      CRLDistributionPoints_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.cert = function (
      /* int */Signature_Id_,
      /* const char[] */TBSCertificate_,
      /* const T */Signature_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _ATE(TBSCertificate_, u);
   _SIGNATURE(Signature_Id_, Signature_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.tbs_cert_list = function (
      /* int */Signature_Id_,
      /* bool */Issuer_Utf8_, /* const string[] */Issuer_,
      /* long */ThisUpdate_, /* long */NextUpdate_,
      /* const T[][] */RevokedCertificates_,
      /* string */AuthorityKeyIdentifier_,
      /* string */CRLNumber_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _V2(u);
   _ALGORITHM_IDENTIFIER(Signature_Id_, u);
   _DN(Issuer_Utf8_, Issuer_, u);
   _ASN1TIME(ThisUpdate_, u);
   _ASN1TIME(NextUpdate_, u);
   _REVOKED_CERTIFICATES(RevokedCertificates_, u);
   _EXT_0(
      AuthorityKeyIdentifier_,
      CRLNumber_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.crl = function (
      /* int */Signature_Id_,
      /* const char[] */TBSCertList_,
      /* const T */Signature_) /* const */
   {
   var u = new _VECTOR();
   var v = new _VECTOR();

   _ATE(TBSCertList_, u);
   _SIGNATURE(Signature_Id_, Signature_, u);
   u = u.data();
   _ASN1TAG(_SEQUENCE, u[_LENGTH], v);
   _ATE(u, v);

   return (v.data());
   };

/* char[] */ x509.public_key_pem = function (
      /* const char[] */DER_) /* const */
   {
   return (
      _PEM(
         _BEGIN_PUBLIC_KEY,
         DER_,
         _END_PUBLIC_KEY)
      );
   };

/* char[] */ x509.private_key_pem = function (
      /* const char[] */DER_) /* const */
   {
   return (
      _PEM(
         _BEGIN_PRIVATE_KEY,
         DER_,
         _END_PRIVATE_KEY)
      );
   };

/* char[] */ x509.csr_pem = function (
      /* const char[] */DER_) /* const */
   {
   return (
      _PEM(
         _BEGIN_CERTIFICATE_REQUEST,
         DER_,
         _END_CERTIFICATE_REQUEST)
      );
   };

/* char[] */ x509.cert_pem = function (
      /* const char[] */DER_) /* const */
   {
   return (
      _PEM(
         _BEGIN_CERTIFICATE,
         DER_,
         _END_CERTIFICATE)
      );
   };

/* char[] */ x509.crl_pem = function (
      /* const char[] */DER_) /* const */
   {
   return (
      _PEM(
         _BEGIN_X509_CRL,
         DER_,
         _END_X509_CRL)
      );
   };

/* T */ x509.public_key_der = function (
      /* const char[] */PEM_) /* const */
   {
   return (
      _DER(
         _BEGIN_PUBLIC_KEY,
         PEM_,
         _END_PUBLIC_KEY)
      );
   };

/* T */ x509.private_key_der = function (
      /* const char[] */PEM_) /* const */
   {
   return (
      _DER(
         _BEGIN_PRIVATE_KEY,
         PEM_,
         _END_PRIVATE_KEY)
      );
   };

/* T */ x509.csr_der = function (
      /* const char[] */PEM_) /* const */
   {
   return (
      _DER(
         _BEGIN_CERTIFICATE_REQUEST,
         PEM_,
         _END_CERTIFICATE_REQUEST)
      );
   };

/* T */ x509.cert_der = function (
      /* const char[] */PEM_) /* const */
   {
   return (
      _DER(
         _BEGIN_CERTIFICATE,
         PEM_,
         _END_CERTIFICATE)
      );
   };

/* T */ x509.crl_der = function (
      /* const char[] */PEM_) /* const */
   {
   return (
      _DER(
         _BEGIN_X509_CRL,
         PEM_,
         _END_X509_CRL)
      );
   };

/* T */ x509.parse_public_key = function (
      /* const char[] */DER_) /* const */
   {
   var u = new _VECTOR(DER_);

   u = _GET_SUBJECT_PUBLIC_KEY_INFO(u);

   if (u === _NULL)
      {
      return (_NULL);
      }

   return (u);
   };

/* T */ x509.parse_private_key = function (
      /* const char[] */DER_) /* const */
   {
   var u = new _VECTOR(DER_);

   u = _GET_PRIVATE_KEY_INFO(u);

   if (u === _NULL)
      {
      return (_NULL);
      }

   return (u);
   };

/* T */ x509.parse_csr = function (
      /* const char[] */DER_) /* const */
   {
   var u = new _VECTOR(DER_);
   var v = _GET_POS(u);
   var w = [];

   if (v === _NULL)
      {
      return (_NULL);
      }

   w[0] = v[2];

   if (! _IS_V1(u))
      {
      return (_NULL);
      }

   w[1] = _GET_DN(u);

   if (w[1] === _NULL)
      {
      return (_NULL);
      }

   w[2] = _GET_SUBJECT_PUBLIC_KEY_INFO(u);

   if (w[2] === _NULL)
      {
      return (_NULL);
      }

   w[3] = _GET_EXTREQ(u);

   if (w[3] === _NULL)
      {
      return (_NULL);
      }

   w[4] = _GET_SIGNATURE(v[1], u);

   if (w[4] === _NULL)
      {
      return (_NULL);
      }

   return (w);
   };

/* T */ x509.parse_cert = function (
      /* const char[] */DER_) /* const */
   {
   var u = new _VECTOR(DER_);
   var v = _GET_POS(u);
   var w = [];
   var x;

   if (v === _NULL)
      {
      return (_NULL);
      }

   w[0] = v[2];

   if (! _IS_V3(u))
      {
      return (_NULL);
      }

   w[1] = _GET_SERIAL_NUMBER(u);

   if (w[1] === _EMPTY)
      {
      return (_NULL);
      }

   x = _GET_ALGORITHM_IDENTIFIER(u);

   if (x === _EOF)
      {
      return (_NULL);
      }

   w[2] = _GET_DN(u);

   if (w[2] === _NULL)
      {
      return (_NULL);
      }

   w[3] = _GET_VALIDITY(u);

   if (w[3] === _NULL)
      {
      return (_NULL);
      }

   w[4] = _GET_DN(u);

   if (w[4] === _NULL)
      {
      return (_NULL);
      }

   w[5] = _GET_SUBJECT_PUBLIC_KEY_INFO(u);

   if (w[5] === _NULL)
      {
      return (_NULL);
      }

   w[6] = _GET_EXT_3(v[1], u);

   if (w[6] === _NULL)
      {
      return (_NULL);
      }

   w[7] = _GET_SIGNATURE(v[1], u);

   if (w[7] === _NULL
         || w[7][0] !== x)
      {
      return (_NULL);
      }

   return (w);
   };

/* T */ x509.parse_crl = function (
      /* const char[] */DER_) /* const */
   {
   var u = new _VECTOR(DER_);
   var v = _GET_POS(u);
   var w = [];
   var x;
   var y;
   var s;

   if (v === _NULL)
      {
      return (_NULL);
      }

   w[0] = v[2];

   if (! _IS_V2(u))
      {
      return (_NULL);
      }

   x = _GET_ALGORITHM_IDENTIFIER(u);

   if (x === _EOF)
      {
      return (_NULL);
      }

   w[1] = _GET_DN(u);

   if (w[1] === _NULL)
      {
      return (_NULL);
      }

   w[2] = _GET_ASN1TIME(u);

   if (w[2] === _EOF)
      {
      return (_NULL);
      }

   w[3] = _GET_ASN1TIME(u);

   if (w[3] === _EOF
         || w[2] >= w[3])
      {
      return (_NULL);
      }

   y = _GET_REVOKED_CERTIFICATES(v[1], u);

   if (y === _NULL)
      {
      return (_NULL);
      }

   for (s = 0; s < y[_LENGTH]; ++ s)
      {
      if (y[s][1] >= w[2])
         {
         return (_NULL);
         }
      }

   w[4] = y;
   w[5] = _GET_EXT_0(v[1], u);

   if (w[5] === _NULL)
      {
      return (_NULL);
      }

   w[6] = _GET_SIGNATURE(v[1], u);

   if (w[6] === _NULL
         || w[6][0] !== x)
      {
      return (_NULL);
      }

   return (w);
   };

/* class */ x509.path = function ()
   {
   var _This = this;
   var _Target;
   var _State;
   var _Error;
   var _Result;
   var _TrustAnchors;
   var _X509Certs;
   var _X509CRLs;
   var _IAlgorithm;
   var _CRLCheck;
   var _Stack;
   var _Depth;
   var _StackPtr;
   var _Path;
   var _CRLPath;
   var _PathPtr;
   var _Checked;
   var _Issuer;
   var _Aki;
   var _Uri;
   var _Mime;
   var _Response;
   var _Aia;
   var _AiaPtr;
   var _Cdp;
   var _CdpPtr1;
   var _CdpPtr2;
   var _CRLPaths;
   var _CRLPathsPtr;
   var _Paths;
   var _CRLs;
   var _Stats;
   var _Ptr;
   var _Index;
   var _Time;
   var _WkPkAlgorithm;
   var _WkPk;
   var _WkIssuer;
   var _MaxPathLen;
   var _Init;
   var _Build;
   var _Push;
   var _Get;
   var _Validate;
   var _CRLValidate;
   var _PkEquals;
   var _Equals;
   var _Verify;
   var _Sort;

      if (! (_This instanceof x509.path))
         {
         return;
         }

   /* private: */

   /* int */ _Target = _EOF;
   /* int */ _State = _EOF;
   /* int */ _Error = _EOF;
   /* int */ _Result = _EOF;
   /* T[] */ _TrustAnchors = [];
   /* T[] */ _X509Certs = [];
   /* T[] */ _X509CRLs = [];
   /* T[] */ _IAlgorithm = [];
   /* bool */ _CRLCheck = true;
   /* size_t[] */ _Stack = [];
   /* size_t[] */ _Depth = [];
   /* size_t */ _StackPtr = 0;
   /* size_t[] */ _Path = [];
   /* int[] */ _CRLPath = [];
   /* size_t */ _PathPtr = 0;
   /* size_t[] */ _Checked = [];
   /* string */ _Issuer = _EMPTY;
   /* string */ _Aki = _EMPTY;
   /* string */ _Uri = _EMPTY;
   /* string */ _Mime = _EMPTY;
   /* int */ _Response = _EOF;
   /* string[] */ _Aia = [];
   /* int */ _AiaPtr = _EOF;
   /* string[][] */ _Cdp = [];
   /* int */ _CdpPtr1 = _EOF;
   /* int */ _CdpPtr2 = _EOF;
   /* int[][] */ _CRLPaths = [];
   /* size_t */ _CRLPathsPtr = 0;
   /* size_t[][] */ _Paths = [];
   /* int[][] */ _CRLs = [];
   /* int[] */ _Stats = [];
   /* size_t */ _Ptr = 0;
   /* size_t */ _Index = 0;
   /* long */ _Time = _EOF;
   /* int */ _WkPkAlgorithm = _EOF;
   /* T */ _WkPk = _NULL;
   /* string */ _WkIssuer = _EMPTY;
   /* size_t */ _MaxPathLen = 0;

   /* bool */ _Init = function (/* void */)
      {
      if (_Target === _EOF)
         {
         return (true);
         }

      if (_Error !== _EOF
            || _Result !== _EOF)
         {
         _Error = _EOF;
         _Result = _EOF;
         _Stack = [];
         _Depth = [];
         _StackPtr = 0;
         _Path = [];
         _CRLPath = [];
         _PathPtr = 0;
         _Checked = [];
         _Issuer = _EMPTY;
         _Aki = _EMPTY;
         _Uri = _EMPTY;
         _Mime = _EMPTY;
         _Response = _EOF;
         _Aia = [];
         _AiaPtr = _EOF;
         _Cdp = [];
         _CdpPtr1 = _EOF;
         _CdpPtr2 = _EOF;
         _CRLPaths = [];
         _CRLPathsPtr = 0;
         _Paths = [];
         _CRLs = [];
         _Stats = [];
         _Ptr = 0;
         _Index = 0;
         _Time = _EOF;
         _WkPkAlgorithm = _EOF;
         _WkPk = _NULL;
         _WkIssuer = _EMPTY;
         _MaxPathLen = 0;
         }

      _Stack[_StackPtr] = _Target;
      _Depth[_StackPtr] = _PathPtr;
      ++ _StackPtr;
      _State = _PATH_BUILDING;

      return (false);
      };

   /* bool */ _Build = function (/* void */)
      {
      var u;
      var v;
      var w;
      var x;
      var s;
      var t;

      -- _StackPtr;

      if (_Depth[_StackPtr] < _PathPtr)
         {
         for (s = _Depth[_StackPtr]; s < _PathPtr; ++ s)
            {
            delete _Checked[_Path[s]];
            }

         _PathPtr = _Depth[_StackPtr];
         }

      u = _PathPtr;
      _Path[u] = _Stack[_StackPtr];
      _Checked[_Stack[_StackPtr]] = u;
      ++ _PathPtr;
      v = _X509Certs[_Stack[_StackPtr]];
      _Issuer = v[2][0];

      if (v[4][0] === _Issuer)
         {
         w = v[5];

         for (s = 0; s < _TrustAnchors[_LENGTH]; ++ s)
            {
            v = _TrustAnchors[s];

            if (v[4][0] === _Issuer
                  && _PkEquals(v[5], w))
               {
               x = [];
               x[0] = s;
               _Paths[_Paths[_LENGTH]] = x;
               _CRLs[_CRLs[_LENGTH]] = [];
               _Stats[_Stats[_LENGTH]] = _EOF;
               }
            }

         if (_Paths[_LENGTH] === 0)
            {
            _State = _EOF;
            _Error = _NOT_TRUSTED;

            return (true);
            }

         _State = _PATH_VALIDATION;

         return (true);
         }

      v = v[6];
      _Aki = v[4];
      w = _Aki === _EMPTY;
      _Aia = v[5];
      _AiaPtr = 0;
      _Cdp = v[6];
      _CdpPtr1 = 0;
      _CdpPtr2 = 0;
      _CRLPath[u] = _EOF;
      _CRLPathsPtr = 0;

      for (s = _X509CRLs[_LENGTH] - 1; 0 <= s; -- s)
         {
         v = _X509CRLs[s];
         x = v[5][0];

         if (v[1][0] === _Issuer
               && (w || x === _EMPTY || x === _Aki))
            {
            _CRLPath[u] = s;
            _CdpPtr1 = _EOF;

            break;
            }
         }

      for (s = 0; s < _TrustAnchors[_LENGTH]; ++ s)
         {
         v = _TrustAnchors[s];

         if (v[4][0] === _Issuer
               && (w || v[6][3] === _Aki))
            {
            v = [];
            x = [];
            v[0] = s;

            for (t = u; 0 <= t; -- t)
               {
               v[v[_LENGTH]] = _Path[t];
               x[x[_LENGTH]] = _CRLPath[t];
               }

            _CRLPaths[_CRLPathsPtr] = x;
            ++ _CRLPathsPtr;
            _Paths[_Paths[_LENGTH]] = v;
            _CRLs[_CRLs[_LENGTH]] = x;
            _Stats[_Stats[_LENGTH]] = _EOF;
            _AiaPtr = _EOF;
            }
         }

      if (_CdpPtr1 !== _EOF)
         {
         _Mime = _APPLICATION_PKIX_CRL;
         _Response = _EOF;
         _State = _HTTP_GET;

         return (false);
         }

      _State = _PUSH_STACK;

      return (false);
      };

   /* bool */ _Push = function (/* void */)
      {
      var u = _Aki === _EMPTY;
      var v;
      var w;
      var s;

      for (s = 0; s < _X509Certs[_LENGTH]; ++ s)
         {
         v = _X509Certs[s];
         w = v[4][0];

         if (! (s in _Checked)
               && v[2][0] !== w
               && w === _Issuer
               && (u || v[6][3] === _Aki))
            {
            _Stack[_StackPtr] = s;
            _Depth[_StackPtr] = _PathPtr;
            ++ _StackPtr;
            _AiaPtr = _EOF;
            }
         }

      if (_AiaPtr !== _EOF)
         {
         _Mime = _APPLICATION_PKIX_CERT;
         _Response = _EOF;
         _State = _HTTP_GET;

         return (false);
         }

      if (_StackPtr !== 0)
         {
         _State = _PATH_BUILDING;

         return (false);
         }

      if (_Paths[_LENGTH] === 0)
         {
         _State = _EOF;
         _Error = _NOT_FOUND;

         return (true);
         }

      _Sort();
      _State = _PATH_VALIDATION;

      return (true);
      };

   /* bool */ _Get = function (/* void */)
      {
      var u;
      var s;

      if (_Response === _EOF)
         {
         if (_Mime === _APPLICATION_PKIX_CRL)
            {
            if (_CdpPtr1 < _Cdp[_LENGTH])
               {
               u = _Cdp[_CdpPtr1];
               _Uri = u[_CdpPtr2];
               ++ _CdpPtr2;

               if (_CdpPtr2 === u[_LENGTH])
                  {
                  ++ _CdpPtr1;
                  _CdpPtr2 = 0;
                  }

               return (true);
               }

            _State = _PUSH_STACK;

            return (false);
            }
         else if (_Mime === _APPLICATION_PKIX_CERT)
            {
            if (_AiaPtr < _Aia[_LENGTH])
               {
               _Uri = _Aia[_AiaPtr];
               ++ _AiaPtr;

               return (true);
               }
            }
         }
      else if (_Mime === _APPLICATION_PKIX_CRL)
         {
         _CRLPath[_PathPtr - 1] = _Response;

         for (s = 0; s < _CRLPathsPtr; ++ s)
            {
            _CRLPaths[s][0] = _Response;
            }

         _State = _PUSH_STACK;

         return (false);
         }
      else if (_Mime === _APPLICATION_PKIX_CERT)
         {
         u = _X509Certs[_Response];

         if (_Response in _Checked
               || u[2][0] === u[4][0])
            {
            if (_AiaPtr < _Aia[_LENGTH])
               {
               _Response = _EOF;
               _Uri = _Aia[_AiaPtr];
               ++ _AiaPtr;

               return (true);
               }
            }
         else
            {
            _Stack[_StackPtr] = _Response;
            _Depth[_StackPtr] = _PathPtr;
            ++ _StackPtr;
            }
         }

      if (_StackPtr !== 0)
         {
         _State = _PATH_BUILDING;

         return (false);
         }

      if (_Paths[_LENGTH] === 0)
         {
         _State = _EOF;
         _Error = _NOT_FOUND;

         return (true);
         }

      _Sort();
      _State = _PATH_VALIDATION;

      return (true);
      };

   /* bool */ _Validate = function (/* void */)
      {
      var u = _Paths[_Ptr];
      var v = _Index === 0;
      var w = u[_LENGTH] - 1;
      var x = v ? _TrustAnchors[u[_Index]] : _X509Certs[u[_Index]];
      var y = x[5];
      var z = x[6];
      var r = ! v;
      var q;
      var p = x[4][0];

      if (_Time === _EOF)
         {
         return (true);
         }

      for (; ; )
         {
         if (v)
            {
            _WkPkAlgorithm = y[0];
            _WkPk = y[1];
            _WkIssuer = p;
            _MaxPathLen = w;
            }

         q = x[7];

         if (! _Equals(q[0], _WkPkAlgorithm))
            {
            _Stats[_Ptr] = _SIGNATURE_NOT_VALID;

            break;
            }

         if (! (q[0] in _IAlgorithm))
            {
            _Stats[_Ptr] = _NOT_IMPLEMENTED;

            break;
            }

         if (! _Verify(q[0], _WkPk, x[0], q[1]))
            {
            _Stats[_Ptr] = _SIGNATURE_NOT_VALID;

            break;
            }

         q = x[3];

         if (_Time < q[0]
               || _Time > q[1])
            {
            _Stats[_Ptr] = _EXPIRED;

            break;
            }

         if (r && _CRLCheck)
            {
            q = _CRLValidate();

            if (q !== _UNREVOKED)
               {
               _Stats[_Ptr] = q;

               break;
               }
            }

         if (x[2][0] !== _WkIssuer)
            {
            _Stats[_Ptr] = _DN_NOT_MATCH;

            break;
            }

         if (_Index < w)
            {
            _WkIssuer = p;
            _WkPk = y[1];
            _WkPkAlgorithm = y[0];

            if (z[0] === 0x00)
               {
               _Stats[_Ptr] = _NOT_CA;

               break;
               }

            if (r)
               {
               if (_MaxPathLen === 0)
                  {
                  _Stats[_Ptr] = _PATH_TOO_LONG;

                  break;
                  }

               -- _MaxPathLen;
               }

            if (z[0] !== 0xFF)
               {
               q = z[0] - 1;

               if (q < _MaxPathLen)
                  {
                  _MaxPathLen = q;
                  }
               }

            if (z[1] !== 0 && (z[1] & _KEY_CERT_SIGN) === 0)
               {
               _Stats[_Ptr] = _KEY_CERT_SIGN_NOT_SET;

               break;
               }

            ++ _Index;

            return (true);
            }

         _Stats[_Ptr] = _OK;

         break;
         }

      ++ _Ptr;
      _Index = 0;

      if (_Ptr === _Paths[_LENGTH])
         {
         _State = _EOF;

         for (_Result = 0; _Result < _Paths[_LENGTH]; ++ _Result)
            {
            if (_Stats[_Result] === _OK)
               {
               break;
               }
            }

         if (_Result === _Paths[_LENGTH])
            {
            _Result = 0;
            }
         }

      return (true);
      };

   /* int */ _CRLValidate = function (/* void */) /* const */
      {
      var u = _Paths[_Ptr];
      var v = _Index - 1;
      var w = _CRLs[_Ptr][v];
      var x;
      var y;
      var z;
      var s;

      if (w === _EOF)
         {
         return (_UNDETERMINED);
         }

      w = _X509CRLs[w];

      if (_Time > w[3])
         {
         return (_CRL_EXPIRED);
         }

      x = v === 0 ? _TrustAnchors[u[v]] : _X509Certs[u[v]];

      if (w[1][0] !== x[4][0])
         {
         return (_CRL_DN_NOT_MATCH);
         }

      y  = x[6];

      if (y[1] !== 0 && (y[1] & _CRL_SIGN) === 0)
         {
         return (_CRL_SIGN_NOT_SET);
         }

      y = x[5];
      z = w[6];

      if (! _Equals(z[0], y[0]))
         {
         return (_CRL_SIGNATURE_NOT_VALID);
         }

      if (! (z[0] in _IAlgorithm))
         {
         return (_NOT_IMPLEMENTED);
         }

      if (! _Verify(z[0], y[1], w[0], z[1]))
         {
         return (_CRL_SIGNATURE_NOT_VALID);
         }

      x = _X509Certs[u[_Index]][1];
      y = w[4];

      for (s = 0; s < y[_LENGTH]; ++ s)
         {
         z = y[s];

         if (z[0] === x
               && _Time >= z[1])
            {
            if (z[2] === _REMOVE_FROM_CRL)
               {
               break;
               }

            return (_CRL_REASON + z[2]);
            }
         }

      return (_UNREVOKED);
      };

   /* bool */ _PkEquals = function (
         /* const T */SPKI1_, /* const T */SPKI2_) /* const */
      {
      var u;
      var v;
      var w;
      var x;
      var s;

      if (SPKI1_[0] !== SPKI2_[0])
         {
         return (false);
         }

      u = SPKI1_[1];
      v = SPKI2_[1];

      if (SPKI1_[0] === _ID_ED25519)
         {
         for (s = 0; s < 32; ++ s)
            {
            if (u[s] !== v[s])
               {
               return (false);
               }
            }
         }
      else if (SPKI1_[0] === _ID_RSA)
         {
         w = u[0];
         x = v[0];

         if (w[_LENGTH] !== x[_LENGTH])
            {
            return (false);
            }

         for (s = 0; s < w[_LENGTH]; ++ s)
            {
            if (w[s] !== x[s])
               {
               return (false);
               }
            }

         w = u[1];
         x = v[1];

         if (w[_LENGTH] !== x[_LENGTH])
            {
            return (false);
            }

         for (s = 0; s < w[_LENGTH]; ++ s)
            {
            if (w[s] !== x[s])
               {
               return (false);
               }
            }
         }

      return (true);
      };

   /* bool */ _Equals = function (
         /* int */Signature_Id_, /* int */Public_Id_) /* const */
      {
      if (Public_Id_ === _ID_RSA)
         {
         if (Signature_Id_ !== _ID_SHA256RSA
               && Signature_Id_ !== _ID_SHA1RSA)
            {
            return (false);
            }
         }
      else if (Signature_Id_ !== Public_Id_)
         {
         return (false);
         }

      return (true);
      };

   /* bool */ _Verify = function (
         /* int */Signature_Id_,
         /* const T */Public_,
         /* const char[] */Message_,
         /* const T */Signature_) /* const */
      {
      if (Signature_Id_ === _ID_ED25519)
         {
         return (_IAlgorithm[Signature_Id_].verify_eddsa_signature(
            Public_, Message_, Signature_));
         }
      else if (Signature_Id_ === _ID_SHA256RSA
            || Signature_Id_ === _ID_SHA1RSA)
         {
         return (_IAlgorithm[Signature_Id_].verify_pkcs15_signature(
            Public_, Message_, Signature_));
         }

      return (false);
      };

   /* void */ _Sort = function (/* void */)
      {
      var u;
      var v;
      var s;
      var t;
      var r;
      var q;
      var p;
      var o;
      var l;

      for (s = 1;
            s < _Paths[_LENGTH];
            s += s)
         {
         for (t = 0;
               t < _Paths[_LENGTH];
               t = q)
            {
            r = t + s;
            q = r + s;

            if (r < _Paths[_LENGTH])
               {
               if (q > _Paths[_LENGTH])
                  {
                  q = _Paths[_LENGTH];
                  }

               u = [];
               v = [];

               for (p = t , o = r , l = 0;
                     p < r && o < q;
                     ++ l)
                  {
                  if (_Paths[p][_LENGTH] <= _Paths[o][_LENGTH])
                     {
                     u[l] = _Paths[p];
                     v[l] = _CRLs[p];
                     ++ p;
                     }
                  else
                     {
                     u[l] = _Paths[o];
                     v[l] = _CRLs[o];
                     ++ o;
                     }
                  }

               if (p === r)
                  {
                  for (;
                        o < q;
                        ++ l)
                     {
                     u[l] = _Paths[o];
                     v[l] = _CRLs[o];
                     ++ o;
                     }
                  }
               else
                  {
                  for (;
                        p < r;
                        ++ l)
                     {
                     u[l] = _Paths[p];
                     v[l] = _CRLs[p];
                     ++ p;
                     }
                  }

               for (p = 0 , o = t;
                     p < l;
                     ++ p , ++ o)
                  {
                  _Paths[o] = u[p];
                  _CRLs[o] = v[p];
                  }
               }
            }
         }
      };

   /* public: */

   /* int */ _This.add_trust_anchor = function (/* const char[] */DER_)
      {
      var u;
      var v;

      u = x509.parse_cert(DER_);

      if (u === _NULL
            || u[2][0] !== u[4][0])
         {
         return (_EOF);
         }

      v = _TrustAnchors[_LENGTH];
      _TrustAnchors[v] = u;

      return (v);
      };

   /* int */ _This.add_cert = function (/* const char[] */DER_)
      {
      var u;
      var v;

      u = x509.parse_cert(DER_);

      if (u === _NULL)
         {
         return (_EOF);
         }

      v = _X509Certs[_LENGTH];
      _X509Certs[v] = u;

      return (v);
      };

   /* int */ _This.add_crl = function (/* const char[] */DER_)
      {
      var u;
      var v;

      u = x509.parse_crl(DER_);

      if (u === _NULL)
         {
         return (_EOF);
         }

      v = _X509CRLs[_LENGTH];
      _X509CRLs[v] = u;

      return (v);
      };

   /* void */ _This.set_response = function (/* int */Response_)
      {
      _Response = Response_;
      };

   /* void */ _This.set_time = function (/* long */Time_)
      {
      _Time = Time_;
      };

   /* void */ _This.set_target_cert = function (/* int */Target_)
      {
      _Target = Target_;
      };

   /* void */ _This.set_algorithm = function (
         /* int */Signature_Id_,
         /* const T */IAlgorithm_)
      {
      _IAlgorithm[Signature_Id_] = IAlgorithm_;
      };

   /* void */ _This.set_crl_check = function (/* bool */CRLCheck_)
      {
      _CRLCheck = CRLCheck_;
      };

   /* void */ _This._SetTrustAnchors = function (/* const T[] */TrustAnchors_)
      {
      _TrustAnchors = TrustAnchors_;
      };

   /* T[] */ _This._GetTrustAnchors = function (/* void */) /* const */
      {
      return (_TrustAnchors);
      };

   /* void */ _This.process = function (/* void */)
      {
      for (; ; )
         {
         if (_State === _EOF && _Init()
               || _State === _PATH_BUILDING && _Build()
               || _State === _PUSH_STACK && _Push()
               || _State === _HTTP_GET && _Get()
               || _State === _PATH_VALIDATION && _Validate())
            {
            return;
            }
         }
      };

   /* int */ _This.state = function (/* void */) /* const */
      {
      if (_State !== _EOF)
         {
         return (_State);
         }

      if (_Error !== _EOF)
         {
         return (_Error);
         }

      if (_Result === _EOF)
         {
         return (_EOF);
         }

      return (_Stats[_Result]);
      };

   /* string */ _This.uri = function (/* void */) /* const */
      {
      if (_State !== _HTTP_GET)
         {
         return (_EMPTY);
         }

      return (_Uri);
      };

   /* string */ _This.mime = function (/* void */) /* const */
      {
      if (_State !== _HTTP_GET)
         {
         return (_EMPTY);
         }

      return (_Mime);
      };

   /* size_t */ _This.length = function (/* void */) /* const */
      {
      if (_Result === _EOF)
         {
         return (0);
         }

      return (_Paths[_Result][_LENGTH]);
      };

   /* T */ _This.cert = function (/* size_t */Index_) /* const */
      {
      if (_Result === _EOF)
         {
         return (_NULL);
         }

      return (Index_ === 0 ?
            _TrustAnchors[_Paths[_Result][Index_]]
         :
            _X509Certs[_Paths[_Result][Index_]]);
      };

   /* void */ _This.dispose = function (/* void */)
      {
      _IAlgorithm = [];
      };
   };

})(x509);



/* EOF */