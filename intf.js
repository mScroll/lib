/*
 * 1.2.255.0
 * COPYRIGHT (c) 2017 mScroll
 */



/* namespace */ var intf = {};

(function (intf){

"use strict";

var __u;
var __v;
var __w;
var __x;
var __s;
var __t;

var _WINDOW = window;
var _STRING = _WINDOW.String;
var _FROMCHARCODE = _STRING.fromCharCode;
var _MATH = _WINDOW.Math;
var _CEIL = _MATH.ceil;
var _FLOOR = _MATH.floor;
var _DATE = _WINDOW.Date;
var _DOCUMENT = _WINDOW.document;
var _NAVIGATOR = _WINDOW.navigator;
var _IMAGE = _WINDOW.Image;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _BLOB = _WINDOW.Blob;
var _URL = _WINDOW.URL;
var _FILEREADER = _WINDOW.FileReader;
var _LENGTH = "length";
var _CHARCODEAT = "charCodeAt";
var _SUBSTRING = "substring";
var _LASTINDEXOF = "lastIndexOf";
var _GETTIME = "getTime";
var _GETFULLYEAR = "getFullYear";
var _GETMONTH = "getMonth";
var _GETDATE = "getDate";
var _GETHOURS = "getHours";
var _GETMINUTES = "getMinutes";
var _GETSECONDS = "getSeconds";
var _SRC = "src";
var _WIDTH = "width";
var _HEIGHT = "height";
var _IMAGESMOOTHINGENABLED = "imageSmoothingEnabled";
var _GLOBALCOMPOSITEOPERATION = "globalCompositeOperation";
var _DATA = "data";
var _VALUE = "value";
var _FILES = "files";
var _HREF = "href";
var _DOWNLOAD = "download";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _BYTELENGTH = "byteLength";
var _NAME = "name";
var _RESULT = "result";
var _LASTMODIFIED = "lastModified";
var _LASTMODIFIEDDATE = "lastModifiedDate";
var _SIZE = "size";
var _ONLOAD = "onload";
var _ONABORT = "onabort";
var _ONERROR = "onerror";
var _CREATEELEMENT = "createElement";
var _MSSAVEOROPENBLOB = "msSaveOrOpenBlob";
var _GETCONTEXT = "getContext";
var _DRAWIMAGE = "drawImage";
var _GETIMAGEDATA = "getImageData";
var _PUTIMAGEDATA = "putImageData";
var _CREATEOBJECTURL = "createObjectURL";
var _REVOKEOBJECTURL = "revokeObjectURL";
var _READASARRAYBUFFER = "readAsArrayBuffer";
var _GETRANDOMVALUES = "getRandomValues";
var _CANVAS = "canvas";
var _2D = "2d";
var _COPY = "copy";
var _TYPEOF_NUMBER = typeof 0;
var _TYPEOF_ARRAY = typeof [];
var _UNDEFINED = _WINDOW.undefined;
var _NULL = null;

var _STD = std;
var _VECTOR = _STD.vector;
var _HTON = _STD.hton;
var _STD_ZLIB = _STD.zlib;
var _DEFLATE = _STD_ZLIB.deflate;
var _INFLATE = _STD_ZLIB.inflate;
var _CRC32 = _STD_ZLIB.crc32;
var _CRC32A = _STD_ZLIB.crc32a;
var _STD_HTML = _STD.html;
var _MSIE_VERSION = _STD_HTML.msie_version;
var _MS_EDGE = _STD_HTML.ms_edge;
var _EXTEND = _STD_HTML.extend;
var _NTH_ELEMENT = _STD_HTML.nth_element;

var _CRYPTO = _MS_EDGE || _MSIE_VERSION === 0 ? _WINDOW.crypto : _WINDOW.msCrypto;

var _EOF;
var _EMPTY;
var _BITS_CHAR;
var _BITS_CHAR2;
var _BITS_CHAR3;
var _BYTES_WORD;
var _BYTES_WORD2;
var _DIGITS;
var _PNG;
var _PNG1;
var _ZIP;
var _ZIP1C;
var _ZIP1E;
var _JPG;
var _ICO;
var _CUR;
var _SL;
var _ZG;
var _YQT;
var _UVQT;
var _SF;
var _YUV1;
var _YUV2;
var _YUV3;
var _YUV4;
var _YUV5;
var _YUV67;
var _YUV8;
var _YUV9;
var _Y_DC_L;
var _Y_DC;
var _Y_AC_L;
var _Y_AC;
var _UV_DC_L;
var _UV_DC;
var _UV_AC_L;
var _UV_AC;
var _Y_DC_HF;
var _Y_DC_HF_L;
var _Y_AC_HF;
var _Y_AC_HF_L;
var _UV_DC_HF;
var _UV_DC_HF_L;
var _UV_AC_HF;
var _UV_AC_HF_L;
var _HF;
var _HF_L;
var _BASE64;
var _INV_BASE64;
var _K_U;
var _K_L;
var _SBOX;
var _SUB_MIX1;
var _SUB_MIX2;
var _SUB_MIX3;
var _SUB_MIX4;
var _INV_SBOX;
var _INV_SUB_MIX1;
var _INV_SUB_MIX2;
var _INV_SUB_MIX3;
var _INV_SUB_MIX4;
var _RCON;
var _OCTET_STREAM;
var _SIGNATURE;
var _FORMAT;
var _ZIP_PROC;
var _ATE;
var _DCT;
var _DIB;
var _AES256_CIPHER;
var _CFBSTR;
var _CFBDIR;
var _CFBKDF;
var _CFB_IV;
var _CFBCIPHER;
var _CFBCIPHER_INV;
var _LOAD;
var _ERROR;
var _LOAD2;
var _ERROR2;

var _Zip_name;
var _Zip_file;
var _Zip_cmd;
var _Zip_cmdm;
var _Zip_fp;
var _Zip_fs;
var _Zip_fo;
var _Zip_fc;
var _Zip_fl;
var _Zip_fd;
var _Zip_cl;
var _Zip_crc;
var _Zip_u;
var _Zip_t;
var _Zip_a;
var _Zip_2;
var _Zip_z;
var _Zip_v;
var _Zip_f;
var _Zip_m;
var _Zip_date;
var _Zip_cmp;
var _Zip_stream;
var _Jpg_q;
var _Jpg_y;
var _Jpg_uv;
var _Jpg_d_y;
var _Jpg_d_uv;
var _Jpg_mcu_y;
var _Jpg_mcu_u;
var _Jpg_mcu_v;
var _Jpg_mcu;
var _Jpg_dc_y;
var _Jpg_dc_u;
var _Jpg_dc_v;
var _Jpg_dct_len;
var _Jpg_dct_val;
var _Load;
var _Bloburl;
var _Image;
var _Canvas;
var _Context;
var _Name;
var _Time;
var _Reader;
var _Proc;
var _Proc2;
var _Data;
var _Blob;
var _Href;
var _Ms_blob;
var _Ms_filename;

/* private: */

/* static const int */ _EOF = -1;
/* static const string */ _EMPTY = "";
/* static const size_t */ _BITS_CHAR = 8;
/* static const size_t */ _BITS_CHAR2 = _BITS_CHAR * 2;
/* static const size_t */ _BITS_CHAR3 = _BITS_CHAR * 3;
/* static const size_t */ _BYTES_WORD = 4;
/* static const size_t */ _BYTES_WORD2 = _BYTES_WORD * 2;
/* static const size_t */ _DIGITS = _BYTES_WORD * _BITS_CHAR;
/* static const size_t */ _PNG = (__u = 0 , __u ++);
/* static const size_t */ _PNG1 = __u ++;
/* static const size_t */ _ZIP = __u ++;
/* static const size_t */ _ZIP1C = __u ++;
/* static const size_t */ _ZIP1E = __u ++;
/* static const size_t */ _JPG = __u ++;
/* static const size_t */ _ICO = __u ++;
/* static const size_t */ _CUR = __u ++;
/* static const string */ _SL = "/";
/* static const size_t[] */ _ZG =
   [
   0, 1, 5, 6, 14, 15, 27, 28,
   2, 4, 7, 13, 16, 26, 29, 42,
   3, 8, 12, 17, 25, 30, 41, 43,
   9, 11, 18, 24, 31, 40, 44, 53,
   10, 19, 23, 32, 39, 45, 52, 54,
   20, 22, 33, 38, 46, 51, 55, 60,
   21, 34, 37, 47, 50, 56, 59, 61,
   35, 36, 48, 49, 57, 58, 62, 63
   ];
/* static const int[] */ _YQT =
   [
   16, 11, 10, 16, 24, 40, 51, 61,
   12, 12, 14, 19, 26, 58, 60, 55,
   14, 13, 16, 24, 40, 57, 69, 56,
   14, 17, 22, 29, 51, 87, 80, 62,
   18, 22, 37, 56, 68, 109, 103, 77,
   24, 35, 55, 64, 81, 104, 113, 92,
   49, 64, 78, 87, 103, 121, 120, 101,
   72, 92, 95, 98, 112, 100, 103, 99
   ];
/* static const int[] */ _UVQT =
   [
   17, 18, 24, 47, 99, 99, 99, 99,
   18, 21, 26, 66, 99, 99, 99, 99,
   24, 26, 56, 99, 99, 99, 99, 99,
   47, 66, 99, 99, 99, 99, 99, 99,
   99, 99, 99, 99, 99, 99, 99, 99,
   99, 99, 99, 99, 99, 99, 99, 99,
   99, 99, 99, 99, 99, 99, 99, 99,
   99, 99, 99, 99, 99, 99, 99, 99
   ];
/* static const double[] */ _SF =
   [
   1, 1.387039845, 1.306562965, 1.175875602,
   1, 0.785694958, 0.5411961, 0.275899379
   ];
/* static const int[] */ _YUV1 = [];
/* static const int[] */ _YUV2 = [];
/* static const int[] */ _YUV3 = [];
/* static const int[] */ _YUV4 = [];
/* static const int[] */ _YUV5 = [];
/* static const int[] */ _YUV67 = [];
/* static const int[] */ _YUV8 = [];
/* static const int[] */ _YUV9 = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _YUV1[__s] = 19595 * __s;
      _YUV2[__s] = 38470 * __s;
      _YUV3[__s] = 7471 * __s + 32768;
      _YUV4[__s] = -11059 * __s;
      _YUV5[__s] = -21709 * __s;
      _YUV67[__s] = 32768 * __s + 8421375;
      _YUV8[__s] = -27439 * __s;
      _YUV9[__s] = -5329 * __s;
      }

/* static const char[] */ _Y_DC_L = [0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
/* static const char[] */ _Y_DC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0x0A, 0x0B];
/* static const char[] */ _Y_AC_L = [0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7D];
/* static const char[] */ _Y_AC =
   [
   0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12,
   0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07,
   0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xA1, 0x08,
   0x23, 0x42, 0xB1, 0xC1, 0x15, 0x52, 0xD1, 0xF0,
   0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0A, 0x16,
   0x17, 0x18, 0x19, 0x1A, 0x25, 0x26, 0x27, 0x28,
   0x29, 0x2A, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
   0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
   0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
   0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69,
   0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79,
   0x7A, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89,
   0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98,
   0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7,
   0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6,
   0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5,
   0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4,
   0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE1, 0xE2,
   0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA,
   0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
   0xF9, 0xFA
   ];
/* static const char[] */ _UV_DC_L = [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
/* static const char[] */ _UV_DC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0x0A, 0x0B];
/* static const char[] */ _UV_AC_L = [0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
/* static const char[] */ _UV_AC =
   [
   0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21,
   0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71,
   0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91,
   0xA1, 0xB1, 0xC1, 0x09, 0x23, 0x33, 0x52, 0xF0,
   0x15, 0x62, 0x72, 0xD1, 0x0A, 0x16, 0x24, 0x34,
   0xE1, 0x25, 0xF1, 0x17, 0x18, 0x19, 0x1A, 0x26,
   0x27, 0x28, 0x29, 0x2A, 0x35, 0x36, 0x37, 0x38,
   0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48,
   0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
   0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68,
   0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
   0x79, 0x7A, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
   0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96,
   0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5,
   0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4,
   0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3,
   0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2,
   0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA,
   0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9,
   0xEA, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
   0xF9, 0xFA
   ];
/* static const size_t[] */ _Y_DC_HF = [];
/* static const size_t[] */ _Y_DC_HF_L = [];

   __u = 0;
   __v = 0;

   for (__w = 1 , __s = 0; __s < 16; ++ __s , ++ __w)
      {
      for (__t = 0; __t < _Y_DC_L[__s]; ++ __t)
         {
         _Y_DC_HF[_Y_DC[__u]] = __v;
         _Y_DC_HF_L[_Y_DC[__u]] = __w;
         ++ __u;
         ++ __v;
         }

      __v <<= 1;
      }

/* static const size_t[] */ _Y_AC_HF = [];
/* static const size_t[] */ _Y_AC_HF_L = [];

   __u = 0;
   __v = 0;

   for (__w = 1 , __s = 0; __s < 16; ++ __s , ++ __w)
      {
      for (__t = 0; __t < _Y_AC_L[__s]; ++ __t)
         {
         _Y_AC_HF[_Y_AC[__u]] = __v;
         _Y_AC_HF_L[_Y_AC[__u]] = __w;
         ++ __u;
         ++ __v;
         }

      __v <<= 1;
      }

/* static const size_t[] */ _UV_DC_HF = [];
/* static const size_t[] */ _UV_DC_HF_L = [];

   __u = 0;
   __v = 0;

   for (__w = 1 , __s = 0; __s < 16; ++ __s , ++ __w)
      {
      for (__t = 0; __t < _UV_DC_L[__s]; ++ __t)
         {
         _UV_DC_HF[_UV_DC[__u]] = __v;
         _UV_DC_HF_L[_UV_DC[__u]] = __w;
         ++ __u;
         ++ __v;
         }

      __v <<= 1;
      }

/* static const size_t[] */ _UV_AC_HF = [];
/* static const size_t[] */ _UV_AC_HF_L = [];

   __u = 0;
   __v = 0;

   for (__w = 1 , __s = 0; __s < 16; ++ __s , ++ __w)
      {
      for (__t = 0; __t < _UV_AC_L[__s]; ++ __t)
         {
         _UV_AC_HF[_UV_AC[__u]] = __v;
         _UV_AC_HF_L[_UV_AC[__u]] = __w;
         ++ __u;
         ++ __v;
         }

      __v <<= 1;
      }

/* static const size_t[] */ _HF = [];
/* static const size_t[] */ _HF_L = [];

   __u = 1;
   __v = 2;

   for (__s = 1; __s < 16; ++ __s)
      {
      for (__w = 0x7FFF + __u , __t = __u; __t < __v; ++ __t , ++ __w)
         {
         _HF[__w] = __t;
         _HF_L[__w] = __s;
         }

      __x = __v - 1 - __u;
      __w = 0x7FFF - __u;

      for (__t = __u; __t < __v; ++ __t)
         {
         _HF[__w] = __x;
         _HF_L[__w] = __s;
         -- __w;
         -- __x;
         }

      __u <<= 1;
      __v <<= 1;
      }

/* static const char[] */ _BASE64 = [];
/* static const char[] */ _INV_BASE64 = [];

   for (__s = 0; __s < 62; ++ __s)
      {
      _BASE64[__s] =
         __s < 26 ?
            65 + __s
         : __s < 52 ?
            71 + __s
         :
            __s - 4;
      _INV_BASE64[_BASE64[__s]] = __s;
      }

   _BASE64[62] = 43;
   _BASE64[63] = 47;
   _BASE64[64] = 61;
   _INV_BASE64[43] = 62;
   _INV_BASE64[47] = 63;
   _INV_BASE64[61] = 64;

/* static const size_t[] */ _K_U =
   [
   0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
   0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
   0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
   0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
   0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
   0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
   0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
   0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
   0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
   0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
   0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
   0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
   0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
   0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
   0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
   0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2,
   0xCA273ECE, 0xD186B8C7, 0xEADA7DD6, 0xF57D4F7F,
   0x06F067AA, 0x0A637DC5, 0x113F9804, 0x1B710B35,
   0x28DB77F5, 0x32CAAB7B, 0x3C9EBE0A, 0x431D67C4,
   0x4CC5D4BE, 0x597F299C, 0x5FCB6FAB, 0x6C44198C
   ];
/* static const size_t[] */ _K_L =
   [
   0xD728AE22, 0x23EF65CD, 0xEC4D3B2F, 0x8189DBBC,
   0xF348B538, 0xB605D019, 0xAF194F9B, 0xDA6D8118,
   0xA3030242, 0x45706FBE, 0x4EE4B28C, 0xD5FFB4E2,
   0xF27B896F, 0x3B1696B1, 0x25C71235, 0xCF692694,
   0x9EF14AD2, 0x384F25E3, 0x8B8CD5B5, 0x77AC9C65,
   0x592B0275, 0x6EA6E483, 0xBD41FBD4, 0x831153B5,
   0xEE66DFAB, 0x2DB43210, 0x98FB213F, 0xBEEF0EE4,
   0x3DA88FC2, 0x930AA725, 0xE003826F, 0x0A0E6E70,
   0x46D22FFC, 0x5C26C926, 0x5AC42AED, 0x9D95B3DF,
   0x8BAF63DE, 0x3C77B2A8, 0x47EDAEE6, 0x1482353B,
   0x4CF10364, 0xBC423001, 0xD0F89791, 0x0654BE30,
   0xD6EF5218, 0x5565A910, 0x5771202A, 0x32BBD1B8,
   0xB8D2D0C8, 0x5141AB53, 0xDF8EEB99, 0xE19B48A8,
   0xC5C95A63, 0xE3418ACB, 0x7763E373, 0xD6B2B8A3,
   0x5DEFB2FC, 0x43172F60, 0xA1F0AB72, 0x1A6439EC,
   0x23631E28, 0xDE82BDE9, 0xB2C67915, 0xE372532B,
   0xEA26619C, 0x21C0C207, 0xCDE0EB1E, 0xEE6ED178,
   0x72176FBA, 0xA2C898A6, 0xBEF90DAE, 0x131C471B,
   0x23047D84, 0x40C72493, 0x15C9BEBC, 0x9C100D4C,
   0xCB3E42B6, 0xFC657E2A, 0x3AD6FAEC, 0x4A475817
   ];
/* static const char[] */ _SBOX = [];
/* static const int[] */ _SUB_MIX1 = [];
/* static const int[] */ _SUB_MIX2 = [];
/* static const int[] */ _SUB_MIX3 = [];
/* static const int[] */ _SUB_MIX4 = [];
/* static const char[] */ _INV_SBOX = [];
/* static const int[] */ _INV_SUB_MIX1 = [];
/* static const int[] */ _INV_SUB_MIX2 = [];
/* static const int[] */ _INV_SUB_MIX3 = [];
/* static const int[] */ _INV_SUB_MIX4 = [];

   __x = [];

   for (__s = 0; __s <= 0xFF; ++ __s)
      {
      __x[__s] = __s < 0x80 ? __s << 1 : __s << 1 ^ 0x11B;
      }

   __u = 0;
   __v = 0;

   for (__s = 0; __s <= 0xFF; ++ __s)
      {
      __w = __u ^ __u << 1 ^ __u << 2 ^ __u << 3 ^ __u << 4;
      __w = __w >>> 8 ^ __w & 0xFF ^ 0x63;
      _SBOX[__v] = __w;
      _INV_SBOX[__w] = __v;
      __t = __x[__w] * 0x00000101 ^ __w * 0x01010100;
      _SUB_MIX1[__v] = __t << 24 | __t >>> 8;
      _SUB_MIX2[__v] = __t << 16 | __t >>> 16;
      _SUB_MIX3[__v] = __t << 8 | __t >>> 24;
      _SUB_MIX4[__v] = __t;
      __t = __x[__x[__x[__v]]] * 0x01010101
         ^ __x[__x[__v]] * 0x00010001
         ^ __x[__v] * 0x00000101
         ^ __v * 0x01010100;
      _INV_SUB_MIX1[__w] = __t << 24 | __t >>> 8;
      _INV_SUB_MIX2[__w] = __t << 16 | __t >>> 16;
      _INV_SUB_MIX3[__w] = __t << 8 | __t >>> 24;
      _INV_SUB_MIX4[__w] = __t;

      if (__v === 0)
         {
         __u = 1;
         __v = 1;
         }
      else
         {
         __u ^= __x[__x[__u]];
         __v = __x[__v] ^ __x[__x[__x[__x[__x[__x[__v]]] ^ __x[__v]]]];
         }
      }

/* static const char[] */ _RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36];
/* static const string[] */ _OCTET_STREAM = {type: "application/octet-stream"};
/* static const size_t[] */ _SIGNATURE = [];

   _SIGNATURE[_PNG] = 0x474E5089;
   _SIGNATURE[_PNG1] = 0x0A1A0A0D;
   _SIGNATURE[_ZIP] = 0x04034B50;
   _SIGNATURE[_ZIP1C] = 0x02014B50;
   _SIGNATURE[_ZIP1E] = 0x06054B50;

/* static const char[] (*)(const T[])[] */ _FORMAT = [];

   _FORMAT[_PNG] = function (Args_)
      {
      var u = new _VECTOR();
      var v;
      var w;
      var x;
      var y;
      var z;
      var r;
      var q;
      var p;
      var s;

      u.ate(_SIGNATURE[_PNG], _DIGITS);
      u.ate(_SIGNATURE[_PNG1], _DIGITS);
      u.ate(0x0D000000, _DIGITS);
      u.ate(0x52444849, _DIGITS);
      u.ate(_HTON(Args_[2]), _DIGITS);
      u.ate(_HTON(Args_[3]), _DIGITS);
      u.ate(0, _BITS_CHAR);
      u.ate(0x00000002, _DIGITS);
      u.ate(0, _DIGITS);
      x = 4;

      if (Args_[_LENGTH] > 5)
         {
         v = Args_[x];
         r = v[_LENGTH] / 3;
         r = r <= 4 ? r <= 2 ? 0x0001 : 0x0002 : r <= 16 ? 0x0004 : 0x0008;
         u.fill(24, 2, 0x0100 | r);
         u.ate(_HTON(v[_LENGTH]), _DIGITS);
         w = u.length();
         u.ate(0x45544C50, _DIGITS);

         for (s = 0; s < v[_LENGTH]; ++ s)
            {
            u.ate(v[s], _BITS_CHAR);
            }

         u.ate(_HTON(_CRC32(u, w, u.length() - w)), _DIGITS);
         ++ x;

         if (Args_[_LENGTH] === 7)
            {
            v = Args_[x];
            u.ate(_HTON(v[_LENGTH]), _DIGITS);
            w = u.length();
            u.ate(0x534E5274, _DIGITS);

            for (s = 0; s < v[_LENGTH]; ++ s)
               {
               u.ate(v[s], _BITS_CHAR);
               }

            u.ate(_HTON(_CRC32(u, w, u.length() - w)), _DIGITS);
            ++ x;
            }
         }
      else
         {
         r = 0x08;
         u.fill(24, 1, r);
         }

      w = Args_[x];
      y = w[_LENGTH] / Args_[3];
      v = new _UINT8ARRAY((_CEIL(y * r / _BITS_CHAR) + 1) * Args_[3]);

      if (y / Args_[2] === 4)
         {
         u.fill(24, 2, 0x0400);
         }

      u.fill(29, _BYTES_WORD, _HTON(_CRC32(u, 12, 17)));
      q = _BITS_CHAR - r;
      z = q;
      p = y;
      x = 0;

      for (s = 0; s < w[_LENGTH]; p += y)
         {
         if (z !== q)
            {
            z = q;
            x += 2;
            }
         else
            {
            ++ x;
            }

         for (; s < p; ++ s)
            {
            v[x] |= w[s] << z;

            if (z === 0)
               {
               z = q;
               ++ x;
               }
            else
               {
               z -= r;
               }
            }
         }

      w = u.length();
      u.ate(0, _DIGITS);
      u.ate(0x54414449, _DIGITS);
      _DEFLATE(v, u, Args_[1], true);
      u.fill(w, _BYTES_WORD, _HTON(u.length() - w - _BYTES_WORD2));
      w += _BYTES_WORD;
      u.ate(_HTON(_CRC32(u, w, u.length() - w)), _DIGITS);
      u.ate(0x00000000, _DIGITS);
      u.ate(0x444E4549, _DIGITS);
      u.ate(0x826042AE, _DIGITS);

      return (u);
      };

   _FORMAT[_ZIP] = function (Args_)
      {
      var u = new _DATE();

      _Zip_name = Args_[2];
      _Zip_file = Args_[3];
      _Zip_cmd = Args_[_LENGTH] < 5 ? [] : Args_[4];
      _Zip_cmdm = 0 in _Zip_cmd && typeof _Zip_cmd[0] !== _TYPEOF_ARRAY;
      _Zip_fp = 0;
      _Zip_fs = _Zip_name[_LENGTH];
      _Zip_fo = [];
      _Zip_fc = [];
      _Zip_fl = [];
      _Zip_fd = [];
      _Zip_cl = [];
      _Zip_crc = [];
      _Zip_u = [];
      _Zip_t = [];
      _Zip_a = [];
      _Zip_2 = [];
      _Zip_z = [];
      _Zip_v = [];
      _Zip_f = [];
      _Zip_m = [];
      _Zip_date = u[_GETFULLYEAR]() - 1980 << 25
         | u[_GETMONTH]() + 1 << 21
         | u[_GETDATE]() << 16
         | u[_GETHOURS]() << 11
         | u[_GETMINUTES]() << 5
         | _FLOOR(u[_GETSECONDS]() / 2);
      _Zip_cmp = Args_[1];
      _EXTEND(_ZIP_PROC);

      return (_Zip_stream = new _VECTOR());
      };

   _FORMAT[_JPG] = function (Args_)
      {
      var u;
      var v;
      var w;
      var x;
      var y;
      var z;
      var p;
      var o;
      var l;
      var j;
      var i;
      var h;
      var g;
      var e;
      var f;
      var s;
      var t;
      var r;
      var q;

      if (Args_[1] !== _Jpg_q)
         {
         _Jpg_q = Args_[1];

         if (_Jpg_q < 50)
            {
            w = _FLOOR(5000 / _Jpg_q);
            }
         else
            {
            w = _FLOOR(200 - _Jpg_q * 2);
            }

         for (s = 0; s < 64; ++ s)
            {
            u = _FLOOR((_YQT[s] * w + 50) / 100);
            _Jpg_y[_ZG[s]] = u < 0x01 ? 0x01 : u > 0xFF ? 0xFF : u;
            u = _FLOOR((_UVQT[s] * w + 50) / 100);
            _Jpg_uv[_ZG[s]] = u < 0x01 ? 0x01 : u > 0xFF ? 0xFF : u;
            }

         u = 0;

         for (s = 0; s < 8; ++ s)
            {
            for (t = 0; t < 8; ++ t)
               {
               v = 8 * _SF[s] * _SF[t];
               _Jpg_d_y[u] = 1 / (_Jpg_y[_ZG[u]] * v);
               _Jpg_d_uv[u] = 1 / (_Jpg_uv[_ZG[u]] * v);
               ++ u;
               }
            }
         }

      u = new _VECTOR();
      u.ate(0xE0FFD8FF, _DIGITS);
      u.ate(0x1000, _BITS_CHAR2);
      u.ate(0x4649464A, _DIGITS);
      u.ate(0x00010100, _DIGITS);
      u.ate(0x01000100, _DIGITS);
      u.ate(0xDBFF0000, _DIGITS);
      u.ate(0x008400, _BITS_CHAR3);

      for (s = 0; s < 64; ++ s)
         {
         u.ate(_Jpg_y[s], _BITS_CHAR);
         }

      u.ate(0x01, _BITS_CHAR);

      for (s = 0; s < 64; ++ s)
         {
         u.ate(_Jpg_uv[s], _BITS_CHAR);
         }

      u.ate(0x1100C0FF, _DIGITS);
      u.ate(_HTON(Args_[3], 2) << _BITS_CHAR | 0x08, _BITS_CHAR3);
      u.ate(0x01030000 | _HTON(Args_[2], 2), _DIGITS);
      u.ate(0x11020011, _DIGITS);
      u.ate(0x01110301, _DIGITS);
      u.ate(0xA201C4FF, _DIGITS);
      u.ate(0x00, _BITS_CHAR);

      for (s = 0; s < 16; ++ s)
         {
         u.ate(_Y_DC_L[s], _BITS_CHAR);
         }

      for (s = 0; s <= 0x0B; ++ s)
         {
         u.ate(_Y_DC[s], _BITS_CHAR);
         }

      u.ate(0x10, _BITS_CHAR);

      for (s = 0; s < 16; ++ s)
         {
         u.ate(_Y_AC_L[s], _BITS_CHAR);
         }

      for (s = 0; s <= 0xA1; ++ s)
         {
         u.ate(_Y_AC[s], _BITS_CHAR);
         }

      u.ate(0x01, _BITS_CHAR);

      for (s = 0; s < 16; ++ s)
         {
         u.ate(_UV_DC_L[s], _BITS_CHAR);
         }

      for (s = 0; s <= 0x0B; ++ s)
         {
         u.ate(_UV_DC[s], _BITS_CHAR);
         }

      u.ate(0x11, _BITS_CHAR);

      for (s = 0; s < 16; ++ s)
         {
         u.ate(_UV_AC_L[s], _BITS_CHAR);
         }

      for (s = 0; s <= 0xA1; ++ s)
         {
         u.ate(_UV_AC[s], _BITS_CHAR);
         }

      u.ate(0xDAFF, _BITS_CHAR2);
      u.ate(0x01030C00, _DIGITS);
      u.ate(0x03110200, _DIGITS);
      u.ate(0x003F0011, _DIGITS);
      _Jpg_dc_y = 0;
      _Jpg_dc_u = 0;
      _Jpg_dc_v = 0;
      _Jpg_dct_len = _BITS_CHAR;
      _Jpg_dct_val = 0;
      z = Args_[4];
      v = z[_LENGTH];
      w = v / Args_[3];
      y = 8 * w;
      x = y / Args_[2];
      o = x / 8;

      for (s = 0; s < v; s += y)
         {
         for (t = 0; t < w; t += x)
            {
            l = s + t;
            p = 0;

            for (e = true , r = 0; r < y; r += w)
               {
               if (e)
                  {
                  j = l + r;

                  if (j >= v)
                     {
                     e = false;
                     j -= w;
                     }
                  }

               for (f = true , q = 0; q < x; q += o)
                  {
                  if (f)
                     {
                     i = j + q;

                     if (t + q >= w)
                        {
                        f = false;
                        i -= o;
                        }
                     }

                  h = z[i + 1];
                  g = z[i + 2];
                  _Jpg_mcu_y[p] = (_YUV1[z[i]] + _YUV2[h] + _YUV3[g] >> 16) - 128;
                  _Jpg_mcu_u[p] = (_YUV4[z[i]] + _YUV5[h] + _YUV67[g] >> 16) - 128;
                  _Jpg_mcu_v[p] = (_YUV67[z[i]] + _YUV8[h] + _YUV9[g] >> 16) - 128;
                  ++ p;
                  }
               }

            _Jpg_dc_y = _DCT(_Jpg_dc_y, _Jpg_mcu_y, _Jpg_d_y,
               _Y_DC_HF, _Y_DC_HF_L, _Y_AC_HF, _Y_AC_HF_L, u);
            _Jpg_dc_u = _DCT(_Jpg_dc_u, _Jpg_mcu_u, _Jpg_d_uv,
               _UV_DC_HF, _UV_DC_HF_L, _UV_AC_HF, _UV_AC_HF_L, u);
            _Jpg_dc_v = _DCT(_Jpg_dc_v, _Jpg_mcu_v, _Jpg_d_uv,
               _UV_DC_HF, _UV_DC_HF_L, _UV_AC_HF, _UV_AC_HF_L, u);
            }
         }

      if (_Jpg_dct_len < _BITS_CHAR)
         {
         _ATE((1 << _Jpg_dct_len) - 1, _Jpg_dct_len, u);
         }

      u.ate(0xD9FF, _BITS_CHAR2);

      return (u);
      };

   _FORMAT[_ICO] = function (Args_)
      {
      var u = new _VECTOR();
      var v = Args_[1];
      var w = Args_[2];
      var x = Args_[3];
      var y = Args_[4];
      var z = Args_[5];
      var r = Args_[6];
      var q;
      var p = [];
      var o = [];
      var l = [];
      var j = [];
      var s;

      u.ate(0x00010000, _DIGITS);
      u.ate(v[_LENGTH], _BITS_CHAR2);

      for (s = 0; s < v[_LENGTH]; ++ s)
         {
         u.ate(v[s] & 0xFF | (w[s] & 0xFF) << _BITS_CHAR, _BITS_CHAR2);
         o[s] = s in x;

         if (o[s])
            {
            q = x[s][_LENGTH] / 3;
            }

         u.ate(o[s] ? q & 0xFF : 0, _BITS_CHAR2);
         j[s] = typeof r[s] === _TYPEOF_NUMBER;

         if (j[s])
            {
            l[s] = r[s] | 0x100;
            u.ate(r[s] << _BITS_CHAR2 | 0x0001, _DIGITS);
            }
         else
            {
            l[s] = r[s];
            u.ate(
               q <= 2 ?
                  0x00010001
               : q <= 16 ?
                  0x00040001
               :
                  0x00080001,
               _DIGITS);
            }

         p[s] = u.length();
         u.ate(0, _DIGITS);
         u.ate(0, _DIGITS);
         }

      for (s = 0; s < v[_LENGTH]; ++ s)
         {
         q = u.length();
         u.fill(p[s] + _BYTES_WORD, _BYTES_WORD, q);

         if (o[s])
            {
            if (s in y && j[s])
               {
               _DIB(v[s], w[s], x[s], y[s], z[s], l[s], u);
               }
            else
               {
               _DIB(v[s], w[s], x[s], z[s], l[s], u);
               }
            }
         else
            {
            _DIB(v[s], w[s], z[s], l[s], u);
            }

         u.fill(p[s], _BYTES_WORD, u.length() - q);
         }

      return (u);
      };

   _FORMAT[_CUR] = function (Args_)
      {
      var u = new _VECTOR();
      var v = Args_[1];
      var w = Args_[2];
      var x = Args_[5];
      var y = Args_[6];
      var z = Args_[7];
      var r = Args_[8];
      var q;
      var p = [];
      var o = [];
      var l = [];
      var j = [];
      var i = Args_[3];
      var h = Args_[4];
      var s;

      u.ate(0x00020000, _DIGITS);
      u.ate(v[_LENGTH], _BITS_CHAR2);

      for (s = 0; s < v[_LENGTH]; ++ s)
         {
         u.ate(v[s] & 0xFF | (w[s] & 0xFF) << _BITS_CHAR, _BITS_CHAR2);
         o[s] = s in x;
         u.ate(o[s] ? x[s][_LENGTH] / 3 & 0xFF : 0, _BITS_CHAR2);
         j[s] = typeof r[s] === _TYPEOF_NUMBER;
         l[s] = j[s] ? r[s] | 0x100 : r[s];
         u.ate(i[s] | h[s] << _BITS_CHAR2, _DIGITS);
         p[s] = u.length();
         u.ate(0, _DIGITS);
         u.ate(0, _DIGITS);
         }

      for (s = 0; s < v[_LENGTH]; ++ s)
         {
         q = u.length();
         u.fill(p[s] + _BYTES_WORD, _BYTES_WORD, q);

         if (o[s])
            {
            if (s in y && j[s])
               {
               _DIB(v[s], w[s], x[s], y[s], z[s], l[s], u);
               }
            else
               {
               _DIB(v[s], w[s], x[s], z[s], l[s], u);
               }
            }
         else
            {
            _DIB(v[s], w[s], z[s], l[s], u);
            }

         u.fill(p[s], _BYTES_WORD, u.length() - q);
         }

      return (u);
      };

/* bool */ _ZIP_PROC = function (/* void */)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var s;
   var t;

   if (_Zip_fp < _Zip_fs)
      {
      if (_Zip_cmdm || _Zip_fp in _Zip_cmd)
         {
         u = _Zip_cmdm ? _Zip_cmd : _Zip_cmd[_Zip_fp];
         _Zip_u[_Zip_fp] = u[0];
         _Zip_t[_Zip_fp] =
            u[1] < 0 ?
               _Zip_date
            :
               (v = new _DATE(u[1]) , v[_GETFULLYEAR]() - 1980 << 25
               | v[_GETMONTH]() + 1 << 21
               | v[_GETDATE]() << 16
               | v[_GETHOURS]() << 11
               | v[_GETMINUTES]() << 5
               | _FLOOR(v[_GETSECONDS]() / 2));
         _Zip_a[_Zip_fp] = u[3] !== _EMPTY;
         _Zip_2[_Zip_fp] = u[4] ? 0x45410001 : 0x45410002;
         _Zip_z[_Zip_fp] = u[2] !== _EMPTY;
         _Zip_v[_Zip_fp] = _Zip_a[_Zip_fp] ? 0x0033 : 0x0014;
         _Zip_f[_Zip_fp] = _Zip_u[_Zip_fp] ? 0x0800 : 0x0000;
         _Zip_m[_Zip_fp] = _Zip_a[_Zip_fp] ? 0x0063 : 0x0008;

         if (_Zip_a[_Zip_fp])
            {
            p = intf.utf8(u[3]);
            _Zip_f[_Zip_fp] |= 0x0001;
            }
         else if (_Zip_z[_Zip_fp])
            {
            p = intf.utf8(u[2]);
            _Zip_f[_Zip_fp] |= 0x0001;
            }
         }
      else
         {
         _Zip_u[_Zip_fp] = false;
         _Zip_t[_Zip_fp] = _Zip_date;
         _Zip_a[_Zip_fp] = false;
         _Zip_2[_Zip_fp] = 0x00000000;
         _Zip_z[_Zip_fp] = false;
         _Zip_v[_Zip_fp] = 0x0014;
         _Zip_f[_Zip_fp] = 0x0000;
         _Zip_m[_Zip_fp] = 0x0008;
         }

      _Zip_fo[_Zip_fp] = _Zip_stream.length();
      _Zip_stream.ate(_SIGNATURE[_ZIP], _DIGITS);
      _Zip_stream.ate(_Zip_f[_Zip_fp] << _BITS_CHAR2 | _Zip_v[_Zip_fp], _DIGITS);
      _Zip_stream.ate(_Zip_m[_Zip_fp], _BITS_CHAR2);
      _Zip_stream.ate(_Zip_t[_Zip_fp], _DIGITS);
      u = _Zip_file[_Zip_fp];
      _Zip_fl[_Zip_fp] = u[_LENGTH];
      _Zip_crc[_Zip_fp] =
         _Zip_a[_Zip_fp] && _Zip_2[_Zip_fp] === 0x45410002 ?
            0x00000000
         :
            _CRC32(u, 0, u[_LENGTH]);
      _Zip_stream.ate(_Zip_crc[_Zip_fp], _DIGITS);
      v = _Zip_stream.length();
      _Zip_stream.ate(0, _DIGITS);
      _Zip_stream.ate(u[_LENGTH], _DIGITS);
      w =
         _Zip_u[_Zip_fp] || ! intf.sjis2 ?
            intf.utf8(_Zip_name[_Zip_fp])
         :
            intf.to_sjis(_Zip_name[_Zip_fp]);
      _Zip_fd[_Zip_fp] = _Zip_a[_Zip_fp] ? 0x000B0000 | w[_LENGTH] : w[_LENGTH];
      _Zip_stream.ate(_Zip_fd[_Zip_fp], _DIGITS);

      for (s = 0; s < w[_LENGTH]; ++ s)
         {
         _Zip_stream.ate(w[s], _BITS_CHAR);
         }

      _Zip_cl[_Zip_fp] = w;

      if (_Zip_a[_Zip_fp])
         {
         _Zip_stream.ate(0x00079901, _DIGITS);
         _Zip_stream.ate(_Zip_2[_Zip_fp], _DIGITS);
         _Zip_stream.ate(0x000803, _BITS_CHAR3);
         }

      w = _Zip_stream.length();

      if (_Zip_a[_Zip_fp])
         {
         x = new _UINT8ARRAY(16);
         _CRYPTO[_GETRANDOMVALUES](x);
         _Zip_stream.ate(x[3] << _BITS_CHAR3 | x[2] << _BITS_CHAR2 | x[1] << _BITS_CHAR | x[0], _DIGITS);
         _Zip_stream.ate(x[7] << _BITS_CHAR3 | x[6] << _BITS_CHAR2 | x[5] << _BITS_CHAR | x[4], _DIGITS);
         _Zip_stream.ate(x[11] << _BITS_CHAR3 | x[10] << _BITS_CHAR2 | x[9] << _BITS_CHAR | x[8], _DIGITS);
         _Zip_stream.ate(x[15] << _BITS_CHAR3 | x[14] << _BITS_CHAR2 | x[13] << _BITS_CHAR | x[12], _DIGITS);
         y = new _UINT8ARRAY(66);
         intf.pbkdf2(y, p, x, 1000, intf.sha1i, intf.sha1a, 20, 64);
         _Zip_stream.ate(y[65] << _BITS_CHAR | y[64], _BITS_CHAR2);
         x = [];
         intf.aes256i(x, new _UINT8ARRAY(y[_BUFFER], y[_BYTEOFFSET], 32));
         r = new _VECTOR();
         _DEFLATE(u, r, _Zip_cmp);
         r.end();
         r = r.data();
         u = new _UINT8ARRAY(16);
         q = new _UINT8ARRAY(16);
         p = 16;

         for (s = 0; s < r[_LENGTH]; ++ s)
            {
            if (p === 16)
               {
               p = 0;

               for (t = 0; t < 8 && (++ u[t] , u[t] === 0x00); ++ t)
                  {
                  }

               intf.aes256a(q, u, 0, x);
               }

            r[s] ^= q[p];
            ++ p;
            _Zip_stream.ate(r[s], _BITS_CHAR);
            }

         u = new _UINT8ARRAY(20);
         x = new _UINT8ARRAY(64);
         q = new _UINT8ARRAY(64);
         intf.hmac_i(u, x, q, new _UINT8ARRAY(y[_BUFFER], y[_BYTEOFFSET] + 32, 32), intf.sha1i, intf.sha1a, 64);
         p = intf.hmac_a0(u, q, intf.sha1i, intf.sha1a);
         intf.hmac_a(u, p, r, 64 + r[_LENGTH], x, true, intf.sha1i, intf.sha1a, 64);
         _Zip_stream.ate(u[3] << _BITS_CHAR3 | u[2] << _BITS_CHAR2 | u[1] << _BITS_CHAR | u[0], _DIGITS);
         _Zip_stream.ate(u[7] << _BITS_CHAR3 | u[6] << _BITS_CHAR2 | u[5] << _BITS_CHAR | u[4], _DIGITS);
         _Zip_stream.ate(u[9] << _BITS_CHAR | u[8], _BITS_CHAR2);
         }
      else if (_Zip_z[_Zip_fp])
         {
         z = 0x12345678;
         r = 0x23456789;
         q = 0x34567890;

         for (s = 0; s < p[_LENGTH]; ++ s)
            {
            z = _CRC32A(z, p[s]);
            r = (((r + (z & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            q = _CRC32A(q, r >>> 24);
            }

         x = new _UINT8ARRAY(11);
         _CRYPTO[_GETRANDOMVALUES](x);

         for (s = 0; s < 12; ++ s)
            {
            p = s < 11 ? x[s] : _Zip_crc[_Zip_fp] >>> _BITS_CHAR3;
            y = (q | 2) & 0xFFFF;
            _Zip_stream.ate((p ^ y * ((y ^ 1) >>> 0) >>> 8) & 0xFF, _BITS_CHAR);
            z = _CRC32A(z, p);
            r = (((r + (z & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            q = _CRC32A(q, r >>> 24);
            }

         x = new _VECTOR();
         _DEFLATE(u, x, _Zip_cmp);
         x.end();
         x = x.data();

         for (s = 0; s < x[_LENGTH]; ++ s)
            {
            y = (q | 2) & 0xFFFF;
            _Zip_stream.ate((x[s] ^ y * ((y ^ 1) >>> 0) >>> 8) & 0xFF, _BITS_CHAR);
            z = _CRC32A(z, x[s]);
            r = (((r + (z & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            q = _CRC32A(q, r >>> 24);
            }
         }
      else
         {
         _DEFLATE(u, _Zip_stream, _Zip_cmp);
         _Zip_stream.end();
         }

      _Zip_fc[_Zip_fp] = _Zip_stream.length() - w;
      _Zip_stream.fill(v, _BYTES_WORD, _Zip_fc[_Zip_fp]);
      ++ _Zip_fp;
      }
   else
      {
      v = _Zip_stream.length();

      for (s = 0; s < _Zip_fs; ++ s)
         {
         _Zip_stream.ate(_SIGNATURE[_ZIP1C], _DIGITS);
         _Zip_stream.ate(_Zip_v[s] << _BITS_CHAR2 | _Zip_v[s], _DIGITS);
         _Zip_stream.ate(_Zip_m[s] << _BITS_CHAR2 | _Zip_f[s], _DIGITS);
         _Zip_stream.ate(_Zip_t[s], _DIGITS);
         _Zip_stream.ate(_Zip_crc[s], _DIGITS);
         _Zip_stream.ate(_Zip_fc[s], _DIGITS);
         _Zip_stream.ate(_Zip_fl[s], _DIGITS);
         _Zip_stream.ate(_Zip_fd[s], _DIGITS);
         _Zip_stream.ate(0x00000000, _DIGITS);
         _Zip_stream.ate(0x0000, _BITS_CHAR2);
         _Zip_stream.ate(0x00000000, _DIGITS);
         _Zip_stream.ate(_Zip_fo[s], _DIGITS);
         u = _Zip_cl[s];

         for (t = 0; t < u[_LENGTH]; ++ t)
            {
            _Zip_stream.ate(u[t], _BITS_CHAR);
            }

         if (_Zip_a[s])
            {
            _Zip_stream.ate(0x00079901, _DIGITS);
            _Zip_stream.ate(_Zip_2[s], _DIGITS);
            _Zip_stream.ate(0x000803, _BITS_CHAR3);
            }
         }

      w = _Zip_stream.length() - v;
      _Zip_stream.ate(_SIGNATURE[_ZIP1E], _DIGITS);
      _Zip_stream.ate(0x00000000, _DIGITS);
      _Zip_stream.ate(_Zip_fs << _BITS_CHAR2 | _Zip_fs, _DIGITS);
      _Zip_stream.ate(w, _DIGITS);
      _Zip_stream.ate(v, _DIGITS);
      _Zip_stream.ate(0x0000, _BITS_CHAR2);
      _Zip_name = _NULL;
      _Zip_file = _NULL;
      _Zip_cmd = _NULL;
      _Zip_fo = _NULL;
      _Zip_fc = _NULL;
      _Zip_fl = _NULL;
      _Zip_fd = _NULL;
      _Zip_cl = _NULL;
      _Zip_crc = _NULL;
      _Zip_u = _NULL;
      _Zip_t = _NULL;
      _Zip_a = _NULL;
      _Zip_2 = _NULL;
      _Zip_z = _NULL;
      _Zip_v = _NULL;
      _Zip_f = _NULL;
      _Zip_m = _NULL;
      _Zip_stream = _NULL;

      return (false);
      }

   return (true);
   };

/* void */ _ATE = function (/* size_t */Val_, /* size_t */Len_, /* std::vector */Bs_)
   {
   for (; 0 < Len_; )
      {
      _Jpg_dct_len -= Len_;

      if (_Jpg_dct_len <= 0)
         {
         Len_ = -_Jpg_dct_len;
         _Jpg_dct_val |= (Val_ >>> Len_) & 0xFF;

         if (_Jpg_dct_val === 0xFF)
            {
            Bs_.ate(0x00FF, _BITS_CHAR2);
            }
         else
            {
            Bs_.ate(_Jpg_dct_val, _BITS_CHAR);
            }

         _Jpg_dct_len = _BITS_CHAR;
         _Jpg_dct_val = 0;
         }
      else
         {
         _Jpg_dct_val |= (Val_ << _Jpg_dct_len) & 0xFF;

         break;
         }
      }
   };

/* int */ _DCT = function (/* int */Dc_, /* int[] */Mcu_, /* const double[] */D_,
      /* const size_t[] */Dc_hf_, /* const size_t[] */Dc_hf_l_,
      /* const size_t[] */Ac_hf_, /* const size_t[] */Ac_hf_l_,
      /* std::vector */Bs_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var t;
   var e;
   var f;
   var s;

   for (u = 0 , s = 0; s < 8; ++ s , u += 8)
      {
      v = u + 1;
      w = u + 2;
      x = u + 3;
      y = u + 4;
      z = u + 5;
      r = u + 6;
      q = u + 7;
      p = Mcu_[u] + Mcu_[q];
      o = Mcu_[v] + Mcu_[r];
      l = Mcu_[w] + Mcu_[z];
      j = Mcu_[x] + Mcu_[y];
      g = Mcu_[u] - Mcu_[q];
      t = Mcu_[v] - Mcu_[r];
      e = Mcu_[w] - Mcu_[z];
      f = Mcu_[x] - Mcu_[y];
      i = p + j;
      h = o + l;
      Mcu_[u] = i + h;
      Mcu_[y] = i - h;
      i = p - j;
      h = (i + o - l) * 0.707106781;
      Mcu_[w] = i + h;
      Mcu_[r] = i - h;
      i = f + e;
      h = t + g;
      p = (i - h) * 0.382683433;
      o = i * 0.5411961 + p;
      l = h * 1.306562965 + p;
      p = (e + t) * 0.707106781;
      i = g + p;
      h = g - p;
      Mcu_[z] = h + o;
      Mcu_[x] = h - o;
      Mcu_[v] = i + l;
      Mcu_[q] = i - l;
      }

   for (s = 0; s < 8; ++ s)
      {
      v = s + 8;
      w = s + 16;
      x = s + 24;
      y = s + 32;
      z = s + 40;
      r = s + 48;
      q = s + 56;
      p = Mcu_[s] + Mcu_[q];
      o = Mcu_[v] + Mcu_[r];
      l = Mcu_[w] + Mcu_[z];
      j = Mcu_[x] + Mcu_[y];
      g = Mcu_[s] - Mcu_[q];
      t = Mcu_[v] - Mcu_[r];
      e = Mcu_[w] - Mcu_[z];
      f = Mcu_[x] - Mcu_[y];
      i = p + j;
      h = o + l;
      Mcu_[s] = i + h;
      Mcu_[y] = i - h;
      i = p - j;
      h = (i + o - l) * 0.707106781;
      Mcu_[w] = i + h;
      Mcu_[r] = i - h;
      i = f + e;
      h = t + g;
      p = (i - h) * 0.382683433;
      o = i * 0.5411961 + p;
      l = h * 1.306562965 + p;
      p = (e + t) * 0.707106781;
      i = g + p;
      h = g - p;
      Mcu_[z] = h + o;
      Mcu_[x] = h - o;
      Mcu_[v] = i + l;
      Mcu_[q] = i - l;
      }

   for (s = 0; s < 64; ++ s)
      {
      u = Mcu_[s] * D_[s];
      _Jpg_mcu[_ZG[s]] = (u > 0 ? u + 0.5 : u - 0.5) >> 0;
      }

   u = _Jpg_mcu[0] - Dc_;

   if (u === 0)
      {
      _ATE(Dc_hf_[0], Dc_hf_l_[0], Bs_);
      }
   else
      {
      u += 0x7FFF;
      _ATE(Dc_hf_[_HF_L[u]], Dc_hf_l_[_HF_L[u]], Bs_);
      _ATE(_HF[u], _HF_L[u], Bs_);
      }

   for (u = 63; 0 < u && _Jpg_mcu[u] === 0; -- u)
      {
      }

   if (u === 0)
      {
      _ATE(Ac_hf_[0x00], Ac_hf_l_[0x00], Bs_);
      }
   else
      {
      for (s = 1; s <= u; ++ s)
         {
         v = s;

         for (; _Jpg_mcu[s] === 0; ++ s)
            {
            }

         v = s - v;

         if (v >= 16)
            {
            for (w = v >>> 4; 0 < w; -- w)
               {
               _ATE(Ac_hf_[0xF0], Ac_hf_l_[0xF0], Bs_);
               }

            v &= 0xF;
            }

         w = 0x7FFF + _Jpg_mcu[s];
         v = v << 4 | _HF_L[w];
         _ATE(Ac_hf_[v], Ac_hf_l_[v], Bs_);
         _ATE(_HF[w], _HF_L[w], Bs_);
         }

      if (u !== 63)
         {
         _ATE(Ac_hf_[0x00], Ac_hf_l_[0x00], Bs_);
         }
      }

   return (_Jpg_mcu[0]);
   };

/* void */ _DIB = function (W_, H_, T1, T2, T3, T4, Bs_)
      /*
       * (size_t W_, size_t H_, const char[] Bm_, int Fmt_, std::vector Bs_)
       * (size_t W_, size_t H_, const char[] P_, const char[] Bm_, int Fmt_, std::vector Bs_)
       * (size_t W_, size_t H_, const char[] P_, const char[] Xm_, const char[] Am_, std::vector Bs_)
       * (size_t W_, size_t H_, const char[] P_, const char[] T_, const char[] Bm_, int Fmt_, std::vector Bs_)
       */
   {
   var u = arguments[_LENGTH] > 5;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var n;
   var m;
   var k;
   var s;
   var t;
   var f;

   if (u)
      {
      z = arguments[_LENGTH] === 7;
      g = T1[_LENGTH] / 3;

      if (z)
         {
         w = T3;
         m = false;
         x = T4;
         y = Bs_;
         }
      else
         {
         w = T2;
         m = typeof T3 !== _TYPEOF_NUMBER;

         if (m)
            {
            x =
               g <= 2 ?
                  0x101
               : g <= 16 ?
                  0x104
               :
                  0x108;
            }
         else
            {
            x = T3;
            }

         y = T4;
         }

      v = new _UINT8ARRAY(g * 4);

      for (s = 0 , t = 0 , f = 0; s < T1[_LENGTH]; s += 3 , t += 4 , ++ f)
         {
         v[t] = T1[s];
         v[t + 1] = T1[s + 1];
         v[t + 2] = T1[s + 2];
         v[t + 3] = z && f < T2[_LENGTH] ? T2[f] : 0xFF;
         }
      }
   else
      {
      w = T1;
      x = T2;
      y = T3;
      }

   z = w[_LENGTH] / H_;
   r = z / W_;
   q = r === 4;
   p = (x & 0x100) !== 0;
   o = x & 0xFF;
   l = o <= 0x08;
   j = _CEIL(W_ * o / _BITS_CHAR);
   h = j % _BYTES_WORD;
   i = h !== 0;
   h = i ? _BYTES_WORD - h : 0;
   y.ate(0x00000028, _DIGITS);
   y.ate(W_, _DIGITS);
   y.ate(p ? H_ * 2 : H_, _DIGITS);
   y.ate(o << _BITS_CHAR2 | 0x0001, _DIGITS);
   y.ate(0x00000000, _DIGITS);
   y.ate((j + h) * H_, _DIGITS);
   h *= _BITS_CHAR;
   y.ate(0x00000000, _DIGITS);
   y.ate(0x00000000, _DIGITS);

   if (l)
      {
      y.ate(g, _DIGITS);
      y.ate(g, _DIGITS);

      for (s = 0; s < v[_LENGTH]; s += 4)
         {
         y.ate(v[s + 2] | v[s + 1] << _BITS_CHAR | v[s] << _BITS_CHAR2, _DIGITS);
         }
      }
   else
      {
      y.ate(0x00000000, _DIGITS);
      y.ate(0x00000000, _DIGITS);
      }

   k = w[_LENGTH] - z;

   if (l)
      {
      e = _BITS_CHAR - o;

      for (f = w[_LENGTH] , s = k; 0 <= s; s -= z , f -= z)
         {
         g = 0;
         n = e;

         for (t = s; t < f; t += r)
            {
            g |= w[t] << n;
            n -= o;

            if (n < 0)
               {
               y.ate(g, _BITS_CHAR);
               g = 0;
               n = e;
               }
            }

         if (n < e)
            {
            y.ate(g, _BITS_CHAR);
            }

         if (i)
            {
            y.ate(0, h);
            }
         }
      }
   else
      {
      n = o === 0x18;

      for (f = w[_LENGTH] , s = k; 0 <= s; s -= z , f -= z)
         {
         for (t = s; t < f; t += r)
            {
            y.ate(
               n ?
                  w[t + 2] | w[t + 1] << _BITS_CHAR | w[t] << _BITS_CHAR2
               :
                  w[t + 2] | w[t + 1] << _BITS_CHAR | w[t] << _BITS_CHAR2
                  | (q ? w[t + 3] << _BITS_CHAR3 : 0xFF000000),
               o);
            }

         if (i)
            {
            y.ate(0, h);
            }
         }
      }

   if (p)
      {
      j = _CEIL(W_ / _BITS_CHAR);
      h = j % _BYTES_WORD;
      i = h !== 0;
      h = i ? (_BYTES_WORD - h) * _BITS_CHAR : 0;
      e = _BITS_CHAR - 1;

      for (f = w[_LENGTH] , s = k; 0 <= s; s -= z , f -= z)
         {
         g = 0;
         n = e;

         for (t = s; t < f; t += r)
            {
            if (u ? (m ? T3[t] : v[w[t] * 4 + 3]) === 0x00 : q && w[t + 3] === 0x00)
               {
               g |= 1 << n;
               }

            -- n;

            if (n < 0)
               {
               y.ate(g, _BITS_CHAR);
               g = 0;
               n = e;
               }
            }

         if (n < e)
            {
            y.ate(g, _BITS_CHAR);
            }

         if (i)
            {
            y.ate(0, h);
            }
         }
      }
   };

/* void */ _AES256_CIPHER = function (/* char[] */C_,
      /* const char[] */M_, /* size_t */O_, /* const int[] */Key_schedule_,
      /* const char[] */Sbox_, /* const int[] */Sub_mix1_, /* const int[] */Sub_mix2_,
      /* const int[] */Sub_mix3_, /* const int[] */Sub_mix4_)
   {
   var u = M_[O_] << _BITS_CHAR3
      | M_[O_ + 1] << _BITS_CHAR2
      | M_[O_ + 2] << _BITS_CHAR
      | M_[O_ + 3];
   var v = M_[O_ + 4] << _BITS_CHAR3
      | M_[O_ + 5] << _BITS_CHAR2
      | M_[O_ + 6] << _BITS_CHAR
      | M_[O_ + 7];
   var w = M_[O_ + 8] << _BITS_CHAR3
      | M_[O_ + 9] << _BITS_CHAR2
      | M_[O_ + 10] << _BITS_CHAR
      | M_[O_ + 11];
   var x = M_[O_ + 12] << _BITS_CHAR3
      | M_[O_ + 13] << _BITS_CHAR2
      | M_[O_ + 14] << _BITS_CHAR
      | M_[O_ + 15];
   var y = u ^ Key_schedule_[0];
   var z = v ^ Key_schedule_[1];
   var r = w ^ Key_schedule_[2];
   var q = x ^ Key_schedule_[3];
   var p;
   var o;
   var l;
   var j;
   var s = 1;
   var t = 4;

   for (; s < 14; ++ s)
      {
      p = Sub_mix1_[y >>> _BITS_CHAR3]
         ^ Sub_mix2_[z >>> _BITS_CHAR2 & 0xFF]
         ^ Sub_mix3_[r >>> _BITS_CHAR & 0xFF]
         ^ Sub_mix4_[q & 0xFF]
         ^ Key_schedule_[t];
      ++ t;
      o = Sub_mix1_[z >>> _BITS_CHAR3]
         ^ Sub_mix2_[r >>> _BITS_CHAR2 & 0xFF]
         ^ Sub_mix3_[q >>> _BITS_CHAR & 0xFF]
         ^ Sub_mix4_[y & 0xFF]
         ^ Key_schedule_[t];
      ++ t;
      l = Sub_mix1_[r >>> _BITS_CHAR3]
         ^ Sub_mix2_[q >>> _BITS_CHAR2 & 0xFF]
         ^ Sub_mix3_[y >>> _BITS_CHAR & 0xFF]
         ^ Sub_mix4_[z & 0xFF]
         ^ Key_schedule_[t];
      ++ t;
      j = Sub_mix1_[q >>> _BITS_CHAR3]
         ^ Sub_mix2_[y >>> _BITS_CHAR2 & 0xFF]
         ^ Sub_mix3_[z >>> _BITS_CHAR & 0xFF]
         ^ Sub_mix4_[r & 0xFF]
         ^ Key_schedule_[t];
      ++ t;
      y = p;
      z = o;
      r = l;
      q = j;
      }

   p = (Sbox_[y >>> _BITS_CHAR3] << _BITS_CHAR3
      | Sbox_[z >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
      | Sbox_[r >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
      | Sbox_[q & 0xFF])
      ^ Key_schedule_[56];
   o = (Sbox_[z >>> _BITS_CHAR3] << _BITS_CHAR3
      | Sbox_[r >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
      | Sbox_[q >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
      | Sbox_[y & 0xFF])
      ^ Key_schedule_[57];
   l = (Sbox_[r >>> _BITS_CHAR3] << _BITS_CHAR3
      | Sbox_[q >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
      | Sbox_[y >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
      | Sbox_[z & 0xFF])
      ^ Key_schedule_[58];
   j = (Sbox_[q >>> _BITS_CHAR3] << _BITS_CHAR3
      | Sbox_[y >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
      | Sbox_[z >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
      | Sbox_[r & 0xFF])
      ^ Key_schedule_[59];
   C_[0] = p >>> _BITS_CHAR3;
   C_[1] = p >>> _BITS_CHAR2;
   C_[2] = p >>> _BITS_CHAR;
   C_[3] = p;
   C_[4] = o >>> _BITS_CHAR3;
   C_[5] = o >>> _BITS_CHAR2;
   C_[6] = o >>> _BITS_CHAR;
   C_[7] = o;
   C_[8] = l >>> _BITS_CHAR3;
   C_[9] = l >>> _BITS_CHAR2;
   C_[10] = l >>> _BITS_CHAR;
   C_[11] = l;
   C_[12] = j >>> _BITS_CHAR3;
   C_[13] = j >>> _BITS_CHAR2;
   C_[14] = j >>> _BITS_CHAR;
   C_[15] = j;
   };

/* void */ _CFBSTR = function (/* string */Str_, /* size_t */Siz_, /* std::vector */Bs_)
   {
   var u = Bs_.length() + Siz_;
   var s;

   for (s = 0; s < Str_[_LENGTH]; ++ s)
      {
      Bs_.ate(Str_[_CHARCODEAT](s), _BITS_CHAR2);
      }

   for (s = Bs_.length(); s < u; s += 2)
      {
      Bs_.ate(0x0000, _BITS_CHAR2);
      }
   };

/* void */ _CFBDIR = function (/* string */Name_,
      /* int */Type_, /* int */Col_, /* int */Left_, /* int */Right_, /* int */Child_, /* int */Loc_,
      /* size_t */Size_, /* std::vector */Bs_)
   {
   _CFBSTR(Name_, 64, Bs_);
   Bs_.ate(Col_ << _BITS_CHAR3
      | Type_ << _BITS_CHAR2
      | (Name_[_LENGTH] === 0 ? 0 : (Name_[_LENGTH] + 1) * 2), _DIGITS);
   Bs_.ate(Left_, _DIGITS);
   Bs_.ate(Right_, _DIGITS);
   Bs_.ate(Child_, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(0x00000000, _DIGITS);
   Bs_.ate(Loc_, _DIGITS);
   Bs_.ate(Size_ & 0xFFFFFFFF, _DIGITS);
   Bs_.ate(_FLOOR(Size_ / 0x100000000), _DIGITS);
   };

/* char[] */ _CFBKDF = function (/* const char[] */S_, /* string */P_, /* int */I_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var s;
   var t;
   var r;

   x = new _UINT8ARRAY(P_[_LENGTH] * 2);

   for (s = 0 , t = 0; s < P_[_LENGTH]; ++ s , t += 2)
      {
      r = P_[_CHARCODEAT](s);
      x[t] = r;
      x[t + 1] = r >>> _BITS_CHAR;
      }

   u = new _UINT8ARRAY(16 + x[_LENGTH]);
   v = new _UINT8ARRAY(64);
   w = new _UINT8ARRAY(4);

   for (s = 0; s < 16; ++ s)
      {
      u[s] = S_[s];
      }

   for (t = 0; t < x[_LENGTH]; ++ t , ++ s)
      {
      u[s] = x[t];
      }

   intf.sha512i(v);

   for (s = 0; s < u[_LENGTH]; s += 128)
      {
      intf.sha512a(v, u, s, u[_LENGTH], true);
      }

   u = new _UINT8ARRAY(68);

   for (s = 0; s < I_; ++ s)
      {
      for (t = 0; t < 4; ++ t)
         {
         u[t] = w[t];
         }

      for (r = 0; r < 64; ++ r , ++ t)
         {
         u[t] = v[r];
         }

      intf.sha512i(v);
      intf.sha512a(v, u, 0, 68, true);

      for (t = 0; t < 4 && (++ w[t] , w[t] === 0x00); ++ t)
         {
         }
      }

   return (v);
   };

/* char[] */ _CFB_IV = function (/* const char[] */S_, /* const int[] */B_, /* size_t */L_) /* const */
   {
   var u = new _UINT8ARRAY(64);
   var v = new _UINT8ARRAY(S_[_LENGTH] + B_[_LENGTH]);
   var s;
   var t;

   for (s = 0; s < S_[_LENGTH]; ++ s)
      {
      v[s] = S_[s];
      }

   for (t = 0; t < B_[_LENGTH]; ++ t , ++ s)
      {
      v[s] = B_[t];
      }

   intf.sha512i(u);
   intf.sha512a(u, v, 0, v[_LENGTH], true);

   return (new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET], L_));
   };

/* char[] */ _CFBCIPHER = function (/* const char[] */M_,
      /* const char[] */K_, /* const int[] */Ks_, /* const char[] */IV_) /* const */
   {
   var u;
   var v = new _UINT8ARRAY(16);
   var w = M_[_LENGTH] % 16;
   var s;
   var t;
   var r;
   var q;

   w = new _UINT8ARRAY(
      w === 0 ?
         M_[_LENGTH]
      :
         M_[_LENGTH] + 16 - w
      );

   if (Ks_[_LENGTH] === 0)
      {
      u = [];
      intf.aes256i(u, K_);
      }
   else
      {
      u = Ks_;
      }

   for (s = 0; s < 16; ++ s)
      {
      v[s] = IV_[s];
      }

   for (s = 0 , t = 0; ; )
      {
      if (t + 16 <= M_[_LENGTH])
         {
         for (r = 0; r < 16; ++ r , ++ t)
            {
            v[r] ^= M_[t];
            }
         }
      else
         {
         for (r = 0; t < M_[_LENGTH]; ++ r , ++ t)
            {
            v[r] ^= M_[t];
            }

         for (; r < 16; ++ r)
            {
            v[r] ^= 0x00;
            }
         }

      intf.aes256a(new _UINT8ARRAY(w[_BUFFER], w[_BYTEOFFSET] + s, 16), v, 0, u);
      q = s;
      s += 16;

      if (s === w[_LENGTH])
         {
         return (w);
         }

      for (r = 0; r < 16; ++ r , ++ q)
         {
         v[r] = w[q];
         }
      }
   };

/* char[] */ _CFBCIPHER_INV = function (/* const char[] */C_,
      /* const char[] */K_, /* const int[] */Ks_, /* const char[] */IV_) /* const */
   {
   var u;
   var v = new _UINT8ARRAY(16);
   var w = new _UINT8ARRAY(C_[_LENGTH]);
   var s;
   var t;
   var r;

   if (Ks_[_LENGTH] === 0)
      {
      u = [];
      intf.aes256inv_i(u, K_);
      }
   else
      {
      u = Ks_;
      }

   for (s = 0; s < 16; ++ s)
      {
      v[s] = IV_[s];
      }

   for (s = 0; ; )
      {
      intf.aes256inv_a(new _UINT8ARRAY(w[_BUFFER], w[_BYTEOFFSET] + s, 16), C_, s, u);
      r = s;

      for (t = 0; t < 16; ++ t , ++ s)
         {
         w[s] ^= v[t];
         }

      if (s === C_[_LENGTH])
         {
         return (w);
         }

      for (t = 0; t < 16; ++ t , ++ r)
         {
         v[t] = C_[r];
         }
      }
   };

/* T */ _LOAD = function (/* T */)
   {
   var u;
   var v = _Image[_WIDTH];
   var w = _Image[_HEIGHT];

   _Load = true;
   _Canvas[_WIDTH] = v;
   _Canvas[_HEIGHT] = w;
   _Context[_IMAGESMOOTHINGENABLED] = false;
   _Context[_GLOBALCOMPOSITEOPERATION] = _COPY;
   _Context[_DRAWIMAGE](_Image, 0, 0);
   _URL[_REVOKEOBJECTURL](_Bloburl);
   _Bloburl = _EMPTY;
   _Image[_ONLOAD] = _NULL;
   _Image[_ONABORT] = _NULL;
   _Image[_ONERROR] = _NULL;
   _Image[_SRC] = _EMPTY;
   _Image = _NULL;
   u = _Context[_GETIMAGEDATA](0, 0, v, w)[_DATA];
   _Canvas[_WIDTH] = 1;
   _Canvas[_HEIGHT] = 1;
   _Proc(v, w,
      new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET], u[_BYTELENGTH]));
   };

/* T */ _ERROR = function (/* T */)
   {
   _Load = true;
   _URL[_REVOKEOBJECTURL](_Bloburl);
   _Bloburl = _EMPTY;
   _Image[_ONLOAD] = _NULL;
   _Image[_ONABORT] = _NULL;
   _Image[_ONERROR] = _NULL;
   _Image[_SRC] = _EMPTY;
   _Image = _NULL;
   _Proc(0, 0, new _UINT8ARRAY(0));
   };

/* T */ _LOAD2 = function (/* T */)
   {
   var u = _Name;
   var v = _Reader[_RESULT];
   var w = _Time;

   _Load = true;
   _Name = _EMPTY;
   _Time = 0;
   _Reader[_ONLOAD] = _NULL;
   _Reader[_ONABORT] = _NULL;
   _Reader[_ONERROR] = _NULL;
   _Reader = _NULL;
   _Proc2(u, new _UINT8ARRAY(v, 0, v[_BYTELENGTH]), w);
   };

/* T */ _ERROR2 = function (/* T */)
   {
   _Load = true;
   _Name = _EMPTY;
   _Time = 0;
   _Reader[_ONLOAD] = _NULL;
   _Reader[_ONABORT] = _NULL;
   _Reader[_ONERROR] = _NULL;
   _Reader = _NULL;
   _Proc2(_EMPTY, new _UINT8ARRAY(0), 0);
   };

/* static T */ _Zip_name = _NULL;
/* static T */ _Zip_file = _NULL;
/* static T */ _Zip_cmd = _NULL;
/* static bool */ _Zip_cmdm = false;
/* static size_t */ _Zip_fp = 0;
/* static size_t */ _Zip_fs = 0;
/* static T */ _Zip_fo = _NULL;
/* static T */ _Zip_fc = _NULL;
/* static T */ _Zip_fl = _NULL;
/* static T */ _Zip_fd = _NULL;
/* static T */ _Zip_cl = _NULL;
/* static T */ _Zip_crc = _NULL;
/* static T */ _Zip_u = _NULL;
/* static T */ _Zip_t = _NULL;
/* static T */ _Zip_a = _NULL;
/* static T */ _Zip_2 = _NULL;
/* static T */ _Zip_z = _NULL;
/* static T */ _Zip_v = _NULL;
/* static T */ _Zip_f = _NULL;
/* static T */ _Zip_m = _NULL;
/* static int */ _Zip_date = 0;
/* static bool */ _Zip_cmp = true;
/* static T */ _Zip_stream = _NULL;
/* static int */ _Jpg_q = 0;
/* static char[] */ _Jpg_y =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static char[] */ _Jpg_uv =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static double[] */ _Jpg_d_y =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static double[] */ _Jpg_d_uv =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static int[] */ _Jpg_mcu_y =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static int[] */ _Jpg_mcu_u =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static int[] */ _Jpg_mcu_v =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static int[] */ _Jpg_mcu =
   [
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0
   ];
/* static int */ _Jpg_dc_y = 0;
/* static int */ _Jpg_dc_u = 0;
/* static int */ _Jpg_dc_v = 0;
/* static size_t */ _Jpg_dct_len = 0;
/* static size_t */ _Jpg_dct_val = 0;
/* static bool */ _Load = true;
/* static string */ _Bloburl = _EMPTY;
/* static T */ _Image = _NULL;
/* static T */ _Canvas = _DOCUMENT[_CREATEELEMENT](_CANVAS);
/* static T */ _Context = _Canvas[_GETCONTEXT](_2D);
/* static string */ _Name = _EMPTY;
/* static long */ _Time = 0;
/* static T */ _Reader = _NULL;

/* static void (*)(long, long, char[]) */ _Proc = function ()
   {
   };

/* static void (*)(string, char[], long) */ _Proc2 = function ()
   {
   };

/* static T[] */ _Data = [];
/* static T */ _Blob = _NULL;
/* static string */ _Href = _EMPTY;
/* static T */ _Ms_blob = _NULL;
/* static string */ _Ms_filename = _EMPTY;

   __u = _NULL;
   __v = _NULL;
   __w = _NULL;
   __x = _NULL;
   __s = _NULL;
   __t = _NULL;

/* public: */

/* const size_t */ intf.png = _PNG;
/* const size_t */ intf.zip = _ZIP;
/* const size_t */ intf.jpg = _JPG;
/* const size_t */ intf.ico = _ICO;
/* const size_t */ intf.cur = _CUR;
/* bool */ intf.sjis = false;
/* bool */ intf.sjis2 = false;
/* const size_t[] intf.__sjis__ */
/* const size_t[] intf.__sjis2__ */

/* std::vector */ intf.format = function (/* size_t */Mime_ /*, ...*/)
   {
   return (_FORMAT[Mime_](arguments));
   };

/* void */ intf.register_parser = function (/* void (*)(long, long, char[]) */Proc_)
   {
   if (_Load)
      {
      _Proc = Proc_;
      }
   };

/* void */ intf.register_reader = function (/* void (*)(string, char[], long) */Proc2_)
   {
   if (_Load)
      {
      _Proc2 = Proc2_;
      }
   };

/* bool */ intf.ready = function (/* void */) /* const */
   {
   return (_Load);
   };

/* T */ intf.file = function (/* size_t */Elemid_) /* const */
   {
   var u = _NTH_ELEMENT(Elemid_)[_FILES];

   if (u[_LENGTH] === 1 && (u = u[0] , u[_SIZE] < 0x20000000))
      {
      return (u);
      }

   return (_NULL);
   };

/* void */ intf.clear = function (/* size_t */Elemid_)
   {
   _NTH_ELEMENT(Elemid_)[_VALUE] = _EMPTY;
   };

/* void */ intf.parse = function (/* const T */File_)
   {
   if (_Load)
      {
      _Load = false;
      _Bloburl = _URL[_CREATEOBJECTURL](File_);
      _Image = new _IMAGE();
      _Image[_ONLOAD] = _LOAD;
      _Image[_ONABORT] = _ERROR;
      _Image[_ONERROR] = _ERROR;
      _Image[_SRC] = _Bloburl;
      }
   };

/* void */ intf.read =

      _MS_EDGE || _MSIE_VERSION === 0 ? function (/* const T */File_)
   {
   if (_Load)
      {
      _Load = false;
      _Name = File_[_NAME];
      _Time = File_[_LASTMODIFIED];
      _Reader = new _FILEREADER();
      _Reader[_ONLOAD] = _LOAD2;
      _Reader[_ONABORT] = _ERROR2;
      _Reader[_ONERROR] = _ERROR2;
      _Reader[_READASARRAYBUFFER](File_);
      }
   }

      : function (/* const T */File_)
   {
   if (_Load)
      {
      _Load = false;
      _Name = File_[_NAME];
      _Time = File_[_LASTMODIFIEDDATE][_GETTIME]();
      _Reader = new _FILEREADER();
      _Reader[_ONLOAD] = _LOAD2;
      _Reader[_ONABORT] = _ERROR2;
      _Reader[_ONERROR] = _ERROR2;
      _Reader[_READASARRAYBUFFER](File_);
      }
   };

/* char[] */ intf.base64 = function (Data_, Short_) /* const */
      /*
       * (const char[] Data_)
       * (const char[] Data_, bool Short_)
       */
   {
   var u;
   var v = arguments[_LENGTH] === 2 && Short_ ?
         new _VECTOR(new _UINT8ARRAY(0))
      :
         new _VECTOR();
   var w = 0;
   var x = 0;

   Data_ = new _VECTOR(Data_);
   u = Data_.length();

   for (; ; )
      {
      if (w < 6)
         {
         if (Data_.getptr() < u)
            {
            w += _BITS_CHAR;
            x = x << _BITS_CHAR | Data_.read(_BITS_CHAR);
            }
         else
            {
            if (w > 0)
               {
               v.ate(_BASE64[x << 6 - w], _BITS_CHAR);
               }

            break;
            }
         }
      else
         {
         w -= 6;
         v.ate(_BASE64[x >>> w], _BITS_CHAR);
         x &= (1 << w) - 1;
         }
      }

   for (; v.length() % _BYTES_WORD !== 0; )
      {
      v.ate(_BASE64[64], _BITS_CHAR);
      }

   return (v.data());
   };

/* char[] */ intf.dec64 = function (Base64_, Short_) /* const */
      /*
       * (const char[] Base64_)
       * (const char[] Base64_, bool Short_)
       */
   {
   var u = arguments[_LENGTH] === 2 && Short_ ?
         new _VECTOR(new _UINT8ARRAY(0))
      :
         new _VECTOR();
   var v;
   var w = 0;
   var x = 0;
   var y;

   Base64_ = new _VECTOR(Base64_);
   v = Base64_.length();

   for (; ; )
      {
      if (w < _BITS_CHAR)
         {
         if (Base64_.getptr() < v)
            {
            y = Base64_.read(_BITS_CHAR);

            if (y in _INV_BASE64)
               {
               if (_INV_BASE64[y] === 64)
                  {
                  break;
                  }

               w += 6;
               x = x << 6 | _INV_BASE64[y];
               }
            }
         else
            {
            break;
            }
         }
      else
         {
         w -= _BITS_CHAR;
         u.ate(x >>> w, _BITS_CHAR);
         x &= (1 << w) - 1;
         }
      }

   return (u.data());
   };

/* char[] */ intf.utf8 = function (Utf16_, Long_, Bom_) /* const */
      /*
       * (string Utf16_)
       * (string Utf16_, bool Long_, bool Bom_)
       */
   {
   var u;
   var v = Utf16_[_LENGTH] - 1;
   var w;
   var x;
   var s;

   if (arguments[_LENGTH] === 3)
      {
      u = Long_ ? new _VECTOR() : new _VECTOR(new _UINT8ARRAY(0));

      if (Bom_)
         {
         u.ate(0xBFBBEF, _BITS_CHAR3);
         }
      }
   else
      {
      u = new _VECTOR(new _UINT8ARRAY(0));
      }

   for (s = 0; s < Utf16_[_LENGTH]; ++ s)
      {
      w = Utf16_[_CHARCODEAT](s);

      if (w >= 0xD800 && w <= 0xDBFF && s < v)
         {
         x = Utf16_[_CHARCODEAT](s + 1);

         if (x >= 0xDC00 && x <= 0xDFFF)
            {
            w = (w - 0xD800 + 0x40) << 10 | x - 0xDC00;
            ++ s;
            }
         }

      if (w < 0x80)
         {
         u.ate(
            w,
            _BITS_CHAR);
         }
      else if (w < 0x800)
         {
         u.ate(
            0xC0 | w >>> 6 & 0x1F
            | (0x80 | w & 0x3F) << _BITS_CHAR,
            _BITS_CHAR2);
         }
      else if (w < 0x10000)
         {
         u.ate(
            0xE0 | w >>> 12 & 0xF
            | (0x80 | w >>> 6 & 0x3F) << _BITS_CHAR
            | (0x80 | w & 0x3F) << _BITS_CHAR2,
            _BITS_CHAR3);
         }
      else
         {
         u.ate(
            0xF0 | w >>> 18 & 0x7
            | (0x80 | w >>> 12 & 0x3F) << _BITS_CHAR
            | (0x80 | w >>> 6 & 0x3F) << _BITS_CHAR2
            | (0x80 | w & 0x3F) << _BITS_CHAR3,
            _DIGITS);
         }
      }

   return (u.data());
   };

/* string */ intf.utf16 = function (/* const char[] */Utf8_) /* const */
   {
   var u = new _VECTOR(Utf8_);
   var v = u.length();
   var w = _EMPTY;
   var x;
   var y;
   var z;

   if (u.read(_BITS_CHAR3) !== 0xBFBBEF)
      {
      u.seek(_BITS_CHAR3);
      }

   for (; u.getptr() < v; )
      {
      x = u.read(_BITS_CHAR);
      y = x >>> 4;

      if (y <= 0x7)
         {
         z = x;
         }
      else if (y === 0xC || y === 0xD)
         {
         z = (x & 0x1F) << 6
            | u.read(_BITS_CHAR) & 0x3F;
         }
      else if (y === 0xE)
         {
         z = (x & 0xF) << 12
            | (u.read(_BITS_CHAR) & 0x3F) << 6
            | u.read(_BITS_CHAR) & 0x3F;
         }
      else if (y === 0xF)
         {
         z = (x & 0x7) << 18
            | (u.read(_BITS_CHAR) & 0x3F) << 12
            | (u.read(_BITS_CHAR) & 0x3F) << 6
            | u.read(_BITS_CHAR) & 0x3F;
         }
      else
         {
         z = 0xFFFD;
         }

      if (z < 0x10000)
         {
         w += _FROMCHARCODE(z);
         }
      else
         {
         w += _FROMCHARCODE(0xD800 | (z >>> 10) - 0x40, 0xDC00 | z & 0x3FF);
         }
      }

   return (w);
   };

/* string */ intf.from_sjis = function (/* const char[] */Sjis_) /* const */
   {
   var u = _EMPTY;
   var v = Sjis_[_LENGTH] - 1;
   var w;
   var x = intf.__sjis__;
   var s;

   for (s = 0; s < Sjis_[_LENGTH]; ++ s)
      {
      w = Sjis_[s];

      if (w >= 0x80)
         {
         if (w >= 0xA1 && w <= 0xDF)
            {
            w += 0xFEC0;
            }
         else if ((w >= 0x81 && w <= 0x9F || w >= 0xE0 && w <= 0xFC) && s < v)
            {
            w = w << _BITS_CHAR | Sjis_[s + 1];

            if (w in x)
               {
               w = x[w];
               ++ s;
               }
            else
               {
               w = 0xFFFD;
               }
            }
         else
            {
            w = 0xFFFD;
            }
         }

      u += _FROMCHARCODE(w);
      }

   return (u);
   };

/* char[] */ intf.to_sjis = function (Utf16_, Long_) /* const */
      /*
       * (string Utf16_)
       * (string Utf16_, bool Long_)
       */
   {
   var u = arguments[_LENGTH] === 2 && Long_ ?
         new _VECTOR()
      :
         new _VECTOR(new _UINT8ARRAY(0));
   var v = Utf16_[_LENGTH] - 1;
   var w;
   var x;
   var y = intf.__sjis2__;
   var s;

   for (s = 0; s < Utf16_[_LENGTH]; ++ s)
      {
      w = Utf16_[_CHARCODEAT](s);

      if (w >= 0xD800 && w <= 0xDBFF && s < v)
         {
         x = Utf16_[_CHARCODEAT](s + 1);

         if (x >= 0xDC00 && x <= 0xDFFF)
            {
            w = (w - 0xD800 + 0x40) << 10 | x - 0xDC00;
            ++ s;
            }
         }

      if (w < 0x80)
         {
         u.ate(w, _BITS_CHAR);
         }
      else if (w >= 0xFF61 && w <= 0xFF9F)
         {
         u.ate(w - 0xFEC0, _BITS_CHAR);
         }
      else if (w in y)
         {
         u.ate(_HTON(y[w], 2), _BITS_CHAR2);
         }
      else
         {
         u.ate(0x4581, _BITS_CHAR2);
         }
      }

   return (u.data());
   };

/* T */ intf.to_mscfb = function (/* const char[] */File_, /* string */Pwd_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var s;
   var t;
   var l;

   if (File_[_LENGTH] > 0x6C15F0)
      {
      return (_NULL);
      }

   u = new _VECTOR();
   o = File_[_LENGTH] % 16;
   o =
      o === 0 ?
         8 + File_[_LENGTH]
      :
         File_[_LENGTH] + 24 - o;
   w = _CEIL((0x1000 + o) / 0x200);
   x = _CEIL(w / 128);
   v = w + x;
   e = _CEIL(v / 128);

   for (; x !== e; )
      {
      x = e;
      v = w + x;
      e = _CEIL(v / 128);
      }

   f = 0x1200 + 0x200 * e;
   u.ate(0xE011CFD0, _DIGITS);
   u.ate(0xE11AB1A1, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x0003003E, _DIGITS);
   u.ate(0x0009FFFE, _DIGITS);
   u.ate(0x00000006, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(e, _DIGITS);
   u.ate(e + 1, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00001000, _DIGITS);
   u.ate(e, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(0x00000000, _DIGITS);

   for (s = 0; s < e; ++ s)
      {
      u.ate(s, _DIGITS);
      }

   for (s = 109 - e; 0 < s; -- s)
      {
      u.ate(0xFFFFFFFF, _DIGITS);
      }

   for (s = 0; s < e; ++ s)
      {
      u.ate(0xFFFFFFFD, _DIGITS);
      }

   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(e + 2, _DIGITS);
   u.ate(e + 3, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(e + 5, _DIGITS);
   u.ate(e + 6, _DIGITS);
   u.ate(e + 7, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   x = v - 128;
   x =
      x <= 0 ?
         120 - e
      :
         120 - e + 128 * _CEIL(x / 128);

   for (s = 1 , t = e + 9; t < v; ++ t , ++ s)
      {
      u.ate(t, _DIGITS);
      }

   u.ate(0xFFFFFFFE, _DIGITS);

   for (; s < x; ++ s)
      {
      u.ate(0xFFFFFFFF, _DIGITS);
      }

   u.ate(0x00000001, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(0x00000003, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);
   u.ate(0x00000006, _DIGITS);
   u.ate(0x00000007, _DIGITS);
   u.ate(0x00000008, _DIGITS);
   u.ate(0xFFFFFFFE, _DIGITS);

   for (s = 0x0000000A; s <= 0x0000001D; ++ s)
      {
      u.ate(s, _DIGITS);
      }

   u.ate(0xFFFFFFFE, _DIGITS);

   for (s = 0; s < 98; ++ s)
      {
      u.ate(0xFFFFFFFF, _DIGITS);
      }

   _CFBDIR("Root Entry",
      0x05, 0x00, 0xFFFFFFFF, 0xFFFFFFFF, 0x0000000A, 4 + e,
      0x780, u);
   _CFBDIR(_FROMCHARCODE(0x06) + "DataSpaces",
      0x01, 0x00, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000004, 0x00000000,
      0, u);
   _CFBDIR("DataSpaceInfo",
      0x01, 0x01, 0xFFFFFFFF, 0x00000005, 0x00000003, 0x00000000,
      0, u);
   _CFBDIR("StrongEncryptionDataSpace",
      0x02, 0x01, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000004,
      0x40, u);
   _CFBDIR("DataSpaceMap",
      0x02, 0x01, 0x00000008, 0x00000002, 0xFFFFFFFF, 0x00000002,
      0x70, u);
   _CFBDIR("TransformInfo",
      0x01, 0x00, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000006, 0x00000000,
      0, u);
   _CFBDIR("StrongEncryptionTransform",
      0x01, 0x01, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000007, 0x00000000,
      0, u);
   _CFBDIR(_FROMCHARCODE(0x06) + "Primary",
      0x02, 0x01, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000005,
      0xC8, u);
   _CFBDIR("Version",
      0x02, 0x01, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000000,
      0x4C, u);
   _CFBDIR("EncryptedPackage",
      0x02, 0x00, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 8 + e,
      o, u);
   _CFBDIR("EncryptionInfo",
      0x02, 0x01, 0x00000001, 0x00000009, 0xFFFFFFFF, 0x00000009,
      0x509, u);
   _CFBDIR("",
      0x00, 0x00, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000000,
      0, u);
   u.ate(0x0000003C, _DIGITS);
   _CFBSTR("Microsoft.Container.DataSpaces", 0, u);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000001, _DIGITS);

   for (s = 0; s < 13; ++ s)
      {
      u.ate(0x00000000, _DIGITS);
      }

   u.ate(0x00000008, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000068, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000020, _DIGITS);
   _CFBSTR("EncryptedPackage", 0, u);
   u.ate(0x00000032, _DIGITS);
   _CFBSTR("StrongEncryptionDataSpace", 68, u);
   u.ate(0x00000008, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000032, _DIGITS);
   _CFBSTR("StrongEncryptionTransform", 52, u);
   u.ate(0x00000058, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x0000004C, _DIGITS);
   _CFBSTR("{FF9A3F03-56EF-4613-BDD5-5A41C1D07246}", 0, u);
   u.ate(0x0000004E, _DIGITS);
   _CFBSTR("Microsoft.Container.EncryptionTransform", 80, u);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000001, _DIGITS);
   u.ate(0x00000001, _DIGITS);

   for (s = 0; s < 2; ++ s)
      {
      u.ate(0x00000000, _DIGITS);
      }

   u.ate(0x00000000, _DIGITS);
   u.ate(0x00000004, _DIGITS);

   for (s = 0; s < 14; ++ s)
      {
      u.ate(0x00000000, _DIGITS);
      }

   w = new _UINT8ARRAY(16);
   _CRYPTO[_GETRANDOMVALUES](w);
   v = _CFBKDF(w, Pwd_, 100000);
   j = new _UINT8ARRAY(16);
   _CRYPTO[_GETRANDOMVALUES](j);
   x = intf.base64(_CFBCIPHER(
      j, _CFB_IV(v, [0xFE, 0xA7, 0xD2, 0x76, 0x3B, 0x4B, 0x9E, 0x79], 32), [], w),
      true);
   y = intf.base64(_CFBCIPHER(
      _CFB_IV(j, [], 64), _CFB_IV(v, [0xD7, 0xAA, 0x0F, 0x6D, 0x30, 0x61, 0x34, 0x4E], 32), [], w),
      true);
   j = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](j);
   z = intf.base64(_CFBCIPHER(
      j, _CFB_IV(v, [0x14, 0x6E, 0x0B, 0xE7, 0xAB, 0xAC, 0xD0, 0xD6], 32), [], w),
      true);
   w = intf.base64(w, true);
   r = new _UINT8ARRAY(16);
   _CRYPTO[_GETRANDOMVALUES](r);
   f = [];
   intf.aes256i(f, j);
   v = new _UINT8ARRAY(64);
   _CRYPTO[_GETRANDOMVALUES](v);
   q = intf.base64(_CFBCIPHER(
      v, j, f, _CFB_IV(r, [0x5F, 0xB2, 0xAD, 0x01, 0x0C, 0xB9, 0xE1, 0xF6], 16)),
      true);
   o = new _UINT8ARRAY(o);
   i = File_[_LENGTH] & 0xFFFFFFFF;
   h = _FLOOR(File_[_LENGTH] / 0x100000000);
   o[0] = i;
   o[1] = i >>> _BITS_CHAR;
   o[2] = i >>> _BITS_CHAR2;
   o[3] = i >>> _BITS_CHAR3;
   o[4] = h;
   o[5] = h >>> _BITS_CHAR;
   o[6] = h >>> _BITS_CHAR2;
   o[7] = h >>> _BITS_CHAR3;
   i = new _UINT8ARRAY(4);

   for (s = 8 , t = 0; s < o[_LENGTH]; t += 0x1000)
      {
      h = _CFBCIPHER(
         new _UINT8ARRAY(
            File_[_BUFFER],
            File_[_BYTEOFFSET] + t,
            t + 0x1000 > File_[_LENGTH] ? File_[_LENGTH] - t : 0x1000),
         j, f, _CFB_IV(r, i, 16));

      l = s;
      s += 0x1000;

      if (s > o[_LENGTH])
         {
         s = o[_LENGTH];
         }

      for (g = 0; l < s; ++ g , ++ l)
         {
         o[l] = h[g];
         }

      if (s === o[_LENGTH])
         {
         break;
         }

      for (l = 0; l < 4 && (++ i[l] , i[l] === 0x00); ++ l)
         {
         }
      }

   p = new _UINT8ARRAY(64);
   i = new _UINT8ARRAY(128);
   h = new _UINT8ARRAY(128);
   intf.hmac_i(p, i, h, v, intf.sha512i, intf.sha512a, 128);
   g = intf.hmac_a0(p, h, intf.sha512i, intf.sha512a);
   intf.hmac_a(p, g, o, 128 + o[_LENGTH], i, true, intf.sha512i, intf.sha512a, 128);
   p = intf.base64(_CFBCIPHER(
      p, j, f, _CFB_IV(r, [0xA0, 0x67, 0x7F, 0x02, 0xB2, 0x2C, 0x84, 0x33], 16)),
      true);
   r = intf.base64(r, true);
   u.ate(0x00040004, _DIGITS);
   u.ate(0x00000040, _DIGITS);
   v = intf.utf8(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
         + _FROMCHARCODE(0x0D, 0x0A)
         + '<encryption xmlns="http://schemas.microsoft.com/office/2006/encryption" '
         + 'xmlns:p="http://schemas.microsoft.com/office/2006/keyEncryptor/password" '
         + 'xmlns:c="http://schemas.microsoft.com/office/2006/keyEncryptor/certificate">'
         + '<keyData saltSize="16" blockSize="16" keyBits="256" hashSize="64" cipherAlgorithm="AES" '
         + 'cipherChaining="ChainingModeCBC" hashAlgorithm="SHA512" saltValue="'
         + intf.utf16(r)
         + '"/><dataIntegrity encryptedHmacKey="'
         + intf.utf16(q)
         + '" encryptedHmacValue="'
         + intf.utf16(p)
         + '"/><keyEncryptors><keyEncryptor uri="http://schemas.microsoft.com/office/2006/keyEncryptor/password">'
         + '<p:encryptedKey spinCount="100000" saltSize="16" blockSize="16" keyBits="256" hashSize="64" '
         + 'cipherAlgorithm="AES" cipherChaining="ChainingModeCBC" hashAlgorithm="SHA512" saltValue="'
         + intf.utf16(w)
         + '" encryptedVerifierHashInput="'
         + intf.utf16(x)
         + '" encryptedVerifierHashValue="'
         + intf.utf16(y)
         + '" encryptedKeyValue="'
         + intf.utf16(z)
         + '"/></keyEncryptor></keyEncryptors></encryption>',
      true, false);

   for (s = 0; s < v[_LENGTH]; ++ s)
      {
      u.ate(v[s], _BITS_CHAR);
      }

   for (; s < 0x5B8; ++ s)
      {
      u.ate(0x00, _BITS_CHAR);
      }

   for (s = 0; s < o[_LENGTH]; ++ s)
      {
      u.ate(o[s], _BITS_CHAR);
      }

   s = o[_LENGTH] % 0x200;

   if (s !== 0)
      {
      s = 0x200 - s;
      }

   for (; 0 < s; -- s)
      {
      u.ate(0x00, _BITS_CHAR);
      }

   return (u.data());
   };

/* T */ intf.from_mscfb = function (/* const char[] */MsCfb_, /* string */Pwd_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var n;
   var s;
   var t;

   MsCfb_ = new _VECTOR(MsCfb_);
   u = MsCfb_.length();

   if (u < 0x1600)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, 0x2C);
   v = MsCfb_.read(_DIGITS);

   if (v === 0 || v > 109)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, 0x48);

   if (MsCfb_.read(_DIGITS) !== 0)
      {
      return (_NULL);
      }

   w = 0x200 * v;

   if (u < w + 0x1400)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0xDF9);
   x = new _UINT8ARRAY(24);

   for (s = 0; s < 24; ++ s)
      {
      x[s] = MsCfb_.read(_BITS_CHAR);
      }

   x = intf.dec64(x, true);

   if (x[_LENGTH] !== 16)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0xE35);
   y = new _UINT8ARRAY(88);

   for (s = 0; s < 88; ++ s)
      {
      y[s] = MsCfb_.read(_BITS_CHAR);
      }

   y = intf.dec64(y, true);

   if (y[_LENGTH] !== 64)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0xEA3);
   z = new _UINT8ARRAY(88);

   for (s = 0; s < 88; ++ s)
      {
      z[s] = MsCfb_.read(_BITS_CHAR);
      }

   z = intf.dec64(z, true);

   if (z[_LENGTH] !== 64)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0x1015);
   r = new _UINT8ARRAY(24);

   for (s = 0; s < 24; ++ s)
      {
      r[s] = MsCfb_.read(_BITS_CHAR);
      }

   r = intf.dec64(r, true);

   if (r[_LENGTH] !== 16)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0x104B);
   q = new _UINT8ARRAY(24);

   for (s = 0; s < 24; ++ s)
      {
      q[s] = MsCfb_.read(_BITS_CHAR);
      }

   q = intf.dec64(q, true);

   if (q[_LENGTH] !== 16)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0x1081);
   p = new _UINT8ARRAY(88);

   for (s = 0; s < 88; ++ s)
      {
      p[s] = MsCfb_.read(_BITS_CHAR);
      }

   p = intf.dec64(p, true);

   if (p[_LENGTH] !== 64)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0x10EE);
   o = new _UINT8ARRAY(44);

   for (s = 0; s < 44; ++ s)
      {
      o[s] = MsCfb_.read(_BITS_CHAR);
      }

   o = intf.dec64(o, true);

   if (o[_LENGTH] !== 32)
      {
      return (_NULL);
      }

   MsCfb_.seek(_EOF, w + 0x1200);
   l = MsCfb_.read(_DIGITS);
   l += MsCfb_.read(_DIGITS) * 0x100000000;

   if (l > 0x6C15F0 || l >= u)
      {
      return (_NULL);
      }

   j = l % 16;
   j = j === 0 ? l : l + 16 - j;
   i = MsCfb_.getptr();

   if (i + j > u)
      {
      return (_NULL);
      }

   MsCfb_ = MsCfb_.data();
   MsCfb_ = new _UINT8ARRAY(MsCfb_[_BUFFER], MsCfb_[_BYTEOFFSET] + i - 8, j + 8);
   h = _CFBKDF(r, Pwd_, 100000);
   q = _CFBCIPHER_INV(q, _CFB_IV(h, [0xFE, 0xA7, 0xD2, 0x76, 0x3B, 0x4B, 0x9E, 0x79], 32), [], r);
   p = _CFBCIPHER_INV(p, _CFB_IV(h, [0xD7, 0xAA, 0x0F, 0x6D, 0x30, 0x61, 0x34, 0x4E], 32), [], r);
   g = _CFB_IV(q, [], 64);

   for (s = 0; s < 64; ++ s)
      {
      if (p[s] !== g[s])
         {
         return (_NULL);
         }
      }

   o = _CFBCIPHER_INV(o, _CFB_IV(h, [0x14, 0x6E, 0x0B, 0xE7, 0xAB, 0xAC, 0xD0, 0xD6], 32), [], r);
   n = [];
   intf.aes256inv_i(n, o);
   y = _CFBCIPHER_INV(y, o, n, _CFB_IV(x, [0x5F, 0xB2, 0xAD, 0x01, 0x0C, 0xB9, 0xE1, 0xF6], 16));
   z = _CFBCIPHER_INV(z, o, n, _CFB_IV(x, [0xA0, 0x67, 0x7F, 0x02, 0xB2, 0x2C, 0x84, 0x33], 16));
   h = new _UINT8ARRAY(64);
   g = new _UINT8ARRAY(128);
   e = new _UINT8ARRAY(128);
   intf.hmac_i(h, g, e, y, intf.sha512i, intf.sha512a, 128);
   f = intf.hmac_a0(h, e, intf.sha512i, intf.sha512a);
   intf.hmac_a(h, f, MsCfb_, 128 + MsCfb_[_LENGTH], g, true, intf.sha512i, intf.sha512a, 128);

   for (s = 0; s < 64; ++ s)
      {
      if (z[s] !== h[s])
         {
         return (_NULL);
         }
      }

   h = new _UINT8ARRAY(4);
   f = new _UINT8ARRAY(l);

   for (s = 0 , t = 8; s < f[_LENGTH]; t += 0x1000)
      {
      e = _CFBCIPHER_INV(
         new _UINT8ARRAY(
            MsCfb_[_BUFFER],
            MsCfb_[_BYTEOFFSET] + t,
            t + 0x1000 > MsCfb_[_LENGTH] ? MsCfb_[_LENGTH] - t : 0x1000),
         o, n, _CFB_IV(x, h, 16));
      i = s;
      s += 0x1000;

      if (s > f[_LENGTH])
         {
         s = f[_LENGTH];
         }

      for (g = 0; i < s; ++ g , ++ i)
         {
         f[i] = e[g];
         }

      if (s === f[_LENGTH])
         {
         break;
         }

      for (i = 0; i < 4 && (++ h[i] , h[i] === 0x00); ++ i)
         {
         }
      }

   return (f);
   };

/* T */ intf.parse_png = function (/* const char[] */Data_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var n;
   var m;
   var k;
   var d;
   var c;
   var b;
   var a;
   var uu;
   var uv;
   var uw;
   var ux;
   var uy;
   var uz;
   var ur;
   var s;
   var t;

   Data_ = new _VECTOR(Data_);

   if (Data_.read(_DIGITS) === _SIGNATURE[_PNG]
         && Data_.read(_DIGITS) === _SIGNATURE[_PNG1]
         && Data_.read(_DIGITS) === 0x0D000000
         && Data_.read(_DIGITS) === 0x52444849)
      {
      u = [];
      u[0] = _HTON(Data_.read(_DIGITS));
      u[1] = _HTON(Data_.read(_DIGITS));

      if (u[0] === 0 || u[1] === 0)
         {
         return (_NULL);
         }

      v = Data_.read(_BITS_CHAR);
      w = Data_.read(_DIGITS);
      f = v !== 0x08;
      uu = w === 0x00;
      uv = w === 0x04;
      uw = w === 0x06;
      uy = uv || uw;

      if (r = w === 0x03 , ux = r || uu , ux)
         {
         if (f && v !== 0x01 && v !== 0x02 && v !== 0x04)
            {
            return (_NULL);
            }
         }
      else if (uy || w === 0x02)
         {
         if (f)
            {
            return (_NULL);
            }
         }
      else
         {
         return (_NULL);
         }

      if (_HTON(Data_.read(_DIGITS)) === _CRC32(Data_, 12, 17))
         {
         x = _HTON(Data_.read(_DIGITS));
         z = 37;
         q = Data_.length();

         if (r)
            {
            for (s = Data_.read(_DIGITS); s !== 0x45544C50; s = Data_.read(_DIGITS))
               {
               t = Data_.getptr();

               if (t >= q)
                  {
                  return (_NULL);
                  }

               Data_.seek(_EOF, t + x + _BYTES_WORD);
               z += 12 + x;
               x = _HTON(Data_.read(_DIGITS));
               }

            uz = false;

            if (x % 3 === 0 && (p = x / 3 , p) <= 256 && p > 0)
               {
               y = new _UINT8ARRAY(x);

               for (s = 0; s < x; ++ s)
                  {
                  y[s] = Data_.read(_BITS_CHAR);
                  }

               if (_HTON(Data_.read(_DIGITS)) === _CRC32(Data_, z, _BYTES_WORD + x))
                  {
                  u[u[_LENGTH]] = y;
                  z += 12 + x;
                  x = _HTON(Data_.read(_DIGITS));

                  for (s = Data_.read(_DIGITS);
                        s !== 0x534E5274 && s !== 0x54414449;
                        s = Data_.read(_DIGITS))
                     {
                     t = Data_.getptr();

                     if (t >= q)
                        {
                        return (_NULL);
                        }

                     Data_.seek(_EOF, t + x + _BYTES_WORD);
                     z += 12 + x;
                     x = _HTON(Data_.read(_DIGITS));
                     }

                  if (s === 0x534E5274)
                     {
                     if (x <= p)
                        {
                        y = new _UINT8ARRAY(x);

                        for (s = 0; s < x; ++ s)
                           {
                           y[s] = Data_.read(_BITS_CHAR);
                           }

                        if (_HTON(Data_.read(_DIGITS)) === _CRC32(Data_, z, _BYTES_WORD + x))
                           {
                           u[u[_LENGTH]] = y;
                           z += 12 + x;
                           x = _HTON(Data_.read(_DIGITS));

                           for (s = Data_.read(_DIGITS); s !== 0x54414449; s = Data_.read(_DIGITS))
                              {
                              t = Data_.getptr();

                              if (t >= q)
                                 {
                                 return (_NULL);
                                 }

                              Data_.seek(_EOF, t + x + _BYTES_WORD);
                              z += 12 + x;
                              x = _HTON(Data_.read(_DIGITS));
                              }
                           }
                        else
                           {
                           return (_NULL);
                           }
                        }
                     else
                        {
                        return (_NULL);
                        }
                     }
                  }
               else
                  {
                  return (_NULL);
                  }
               }
            else
               {
               return (_NULL);
               }
            }
         else if (uy)
            {
            for (s = Data_.read(_DIGITS); s !== 0x54414449; s = Data_.read(_DIGITS))
               {
               t = Data_.getptr();

               if (t >= q)
                  {
                  return (_NULL);
                  }

               Data_.seek(_EOF, t + x + _BYTES_WORD);
               z += 12 + x;
               x = _HTON(Data_.read(_DIGITS));
               }

            uz = false;
            }
         else
            {
            for (s = Data_.read(_DIGITS);
                  s !== 0x534E5274 && s !== 0x54414449;
                  s = Data_.read(_DIGITS))
               {
               t = Data_.getptr();

               if (t >= q)
                  {
                  return (_NULL);
                  }

               Data_.seek(_EOF, t + x + _BYTES_WORD);
               z += 12 + x;
               x = _HTON(Data_.read(_DIGITS));
               }

            if (f)
               {
               uy = 0xFF / ((1 << v) - 1);
               }

            if (uz = s === 0x534E5274 , uz)
               {
               if (uu)
                  {
                  if (x === 2)
                     {
                     ur = _HTON(Data_.read(_BITS_CHAR2), 2);

                     if (ur < 1 << v)
                        {
                        ur *= uy;
                        }
                     else
                        {
                        return (_NULL);
                        }
                     }
                  else
                     {
                     return (_NULL);
                     }
                  }
               else if (x === 6)
                  {
                  ur = 0;

                  for (s = 0; s < _BITS_CHAR3; s += _BITS_CHAR)
                     {
                     y = _HTON(Data_.read(_BITS_CHAR2), 2);

                     if (y <= 0xFF)
                        {
                        ur |= y << s;
                        }
                     else
                        {
                        return (_NULL);
                        }
                     }
                  }
               else
                  {
                  return (_NULL);
                  }

               if (_HTON(Data_.read(_DIGITS)) === _CRC32(Data_, z, _BYTES_WORD + x))
                  {
                  z += 12 + x;
                  x = _HTON(Data_.read(_DIGITS));

                  for (s = Data_.read(_DIGITS); s !== 0x54414449; s = Data_.read(_DIGITS))
                     {
                     t = Data_.getptr();

                     if (t >= q)
                        {
                        return (_NULL);
                        }

                     Data_.seek(_EOF, t + x + _BYTES_WORD);
                     z += 12 + x;
                     x = _HTON(Data_.read(_DIGITS));
                     }
                  }
               else
                  {
                  return (_NULL);
                  }
               }
            }

         o = new _VECTOR();

         for (; s === 0x54414449; s = Data_.read(_DIGITS))
            {
            if (Data_.getptr() >= q)
               {
               return (_NULL);
               }

            for (t = 0; t < x; ++ t)
               {
               o.ate(Data_.read(_BITS_CHAR), _BITS_CHAR);
               }

            if (_HTON(Data_.read(_DIGITS)) !== _CRC32(Data_, z, _BYTES_WORD + x))
               {
               return (_NULL);
               }

            z += 12 + x;
            x = _HTON(Data_.read(_DIGITS));
            }

         for (; s !== 0x444E4549; s = Data_.read(_DIGITS))
            {
            t = Data_.getptr();

            if (t >= q)
               {
               return (_NULL);
               }

            Data_.seek(_EOF, t + x + _BYTES_WORD);
            x = _HTON(Data_.read(_DIGITS));
            }

         if (x === 0x00000000
               && Data_.read(_DIGITS) === 0x826042AE)
            {
            Data_ = _NULL;
            w = ux ? (h = 1 , u[0]) : (h = uv ? 2 : uw ? 4 : 3 , h * u[0]);

            if (_INFLATE(o, (y = new _VECTOR() , y), true)
                  && o.getptr() === o.length()
                  && (o = 0 , y = y.data() , uw = _CEIL(v * w / _BITS_CHAR) , e = 1 + uw , y[_LENGTH] === e * u[1]))
               {
               if (uu || uv)
                  {
                  Data_ = new _UINT8ARRAY(uz ? u[0] * u[1] * 4 : w * u[1] * (uu ? 3 : 2));
                  uu = true;
                  }
               else
                  {
                  Data_ = new _UINT8ARRAY(uz ? u[0] * u[1] * 4 : w * u[1]);
                  uu = false;
                  }

               if (uu || uz)
                  {
                  ux = 0;
                  }

               if (f)
                  {
                  j = (1 << v) - 1;
                  q = _BITS_CHAR - v;
                  }

               x = 0;

               for (s = 0; s < u[1]; ++ s)
                  {
                  if (y[o] === 0x00)
                     {
                     ++ o;
                     }
                  else if (y[o] <= 0x04)
                     {
                     if (y[o] <= 0x02)
                        {
                        if (y[o] === 0x01)
                           {
                           ++ o;
                           g = o + uw;

                           for (t = o + h; t < g; ++ t)
                              {
                              y[t] += y[t - h];
                              }
                           }
                        else if (o >= e)
                           {
                           ++ o;
                           g = o + uw;

                           for (t = o; t < g; ++ t)
                              {
                              y[t] += y[t - e];
                              }
                           }
                        }
                     else if (y[o] === 0x03)
                        {
                        if (o >= e)
                           {
                           ++ o;
                           g = o + h;

                           for (t = o; t < g; ++ t)
                              {
                              y[t] += y[t - e] >>> 1;
                              }

                           g = o + uw;

                           for (; t < g; ++ t)
                              {
                              y[t] += y[t - h] + y[t - e] >>> 1;
                              }
                           }
                        else
                           {
                           ++ o;
                           g = o + uw;

                           for (t = o + h; t < g; ++ t)
                              {
                              y[t] += y[t - h] >>> 1;
                              }
                           }
                        }
                     else if (o >= e)
                        {
                        ++ o;
                        g = o + h;

                        for (t = o; t < g; ++ t)
                           {
                           y[t] += y[t - e];
                           }

                        g = o + uw;

                        for (; t < g; ++ t)
                           {
                           n = y[t - h];
                           m = t - e;
                           k = y[m - h];
                           d = n + y[m] - k;
                           c = d > n ? d - n : n - d;
                           b = d > y[m] ? d - y[m] : y[m] - d;
                           a = d > k ? d - k : k - d;
                           y[t] +=
                              c <= b && c <= a ?
                                 n
                              : b <= a ?
                                 y[m]
                              :
                                 k;
                           }
                        }
                     else
                        {
                        ++ o;
                        g = o + uw;

                        for (t = o + h; t < g; ++ t)
                           {
                           y[t] += y[t - h];
                           }
                        }
                     }
                  else
                     {
                     return (_NULL);
                     }

                  if (f)
                     {
                     i = q;
                     }

                  for (t = x , x += w; ; )
                     {
                     if (r)
                        {
                        l = f ? y[o] >>> i & j : y[o];

                        if (l < p)
                           {
                           Data_[t] = l;
                           ++ t;
                           }
                        else
                           {
                           return (_NULL);
                           }
                        }
                     else if (uu)
                        {
                        z = f ? (y[o] >>> i & j) * uy : y[o];
                        Data_[ux] = z;
                        ++ ux;
                        Data_[ux] = z;
                        ++ ux;
                        Data_[ux] = z;
                        ++ ux;

                        if (uv)
                           {
                           ++ o;
                           Data_[ux] = y[o];
                           ++ ux;
                           t += 2;
                           }
                        else
                           {
                           if (uz)
                              {
                              Data_[ux] = z === ur ? 0x00 : 0xFF;
                              ++ ux;
                              }

                           ++ t;
                           }
                        }
                     else if (uz)
                        {
                        g = y[o];
                        Data_[ux] = g;
                        ++ ux;
                        ++ o;
                        n = y[o];
                        Data_[ux] = n;
                        ++ ux;
                        ++ o;
                        Data_[ux] = y[o];
                        ++ ux;
                        Data_[ux] = (g | n << 8 | y[o] << 16) === ur ? 0x00 : 0xFF;
                        ++ ux;
                        t += 3;
                        }
                     else
                        {
                        Data_[t] = y[o];
                        ++ t;
                        }

                     if (t < x)
                        {
                        if (f)
                           {
                           if (i === 0)
                              {
                              ++ o;
                              i = q;
                              }
                           else
                              {
                              i -= v;
                              }
                           }
                        else
                           {
                           ++ o;
                           }
                        }
                     else
                        {
                        ++ o;

                        break;
                        }
                     }
                  }

               u[u[_LENGTH]] = Data_;

               return (u);
               }
            }
         }
      }

   return (_NULL);
   };

/* T */ intf.parse_zip = function (Data_, Index_, Pwd_) /* const */
      /*
       * (const char[] Data_)
       * (const char[] Data_, int Index_)
       * (const char[] Data_, int Index_, string Pwd_)
       */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var s;
   var t;

   u = new _VECTOR(Data_);
   v = u.length();

   if (v < 98)
      {
      return (_NULL);
      }

   v -= 22;
   u.seek(_EOF, v);
   y = arguments[_LENGTH] === 1;

   if (u.read(_DIGITS) !== _SIGNATURE[_ZIP1E]
         || u.read(_DIGITS) !== 0x00000000
         || (z = u.read(_BITS_CHAR2) , z === 0x0000 || ! y && z <= Index_)
         || z !== u.read(_BITS_CHAR2)
         || (r = u.read(_DIGITS) , r < 46 * z || v - r < 30 * z)
         || (w = u.read(_DIGITS) , r > v - w)
         || u.read(_BITS_CHAR2) !== 0x0000)
      {
      q = y ? 76 : 76 * (Index_ + 1);

      for (x = 1 , -- v; ; -- v , ++ x)
         {
         if (v < q)
            {
            return (_NULL);
            }

         u.seek(_EOF, v);

         if (u.read(_DIGITS) === _SIGNATURE[_ZIP1E]
               && u.read(_DIGITS) === 0x00000000
               && (z = u.read(_BITS_CHAR2) , z !== 0x0000 && (y || z > Index_))
               && z === u.read(_BITS_CHAR2)
               && (r = u.read(_DIGITS) , r >= 46 * z && v - r >= 30 * z)
               && (w = u.read(_DIGITS) , r <= v - w)
               && u.read(_BITS_CHAR2) <= x)
            {
            break;
            }
         }
      }

   if (y)
      {
      return (z);
      }

   x = w;
   u.seek(_EOF, x);

   if (Index_ === _EOF)
      {
      w += r;
      v = [];

      for (; ; )
         {
         x += 8;
         u.seek(_EOF, x);
         q = u.read(_BITS_CHAR2);
         u.read(_BITS_CHAR2);
         o = u.read(_DIGITS);
         l = u.read(_DIGITS);
         u.read(_DIGITS);
         j = u.read(_DIGITS);
         x += 38
            + (y = (p = u.read(_BITS_CHAR2) , p)
            + u.read(_BITS_CHAR2)
            + u.read(_BITS_CHAR2) , y);
         r = u.getptr() + 12;
         y += r;

         if (y > w)
            {
            return (_NULL);
            }

         v[v[_LENGTH]] =
            [
            intf.sjis && (q & 0x0800) === 0x0000 ?
                  intf.from_sjis(new _UINT8ARRAY(Data_[_BUFFER], Data_[_BYTEOFFSET] + r, p))
               :
                  intf.utf16(new _UINT8ARRAY(Data_[_BUFFER], Data_[_BYTEOFFSET] + r, p)),
            j,
            l,
            new _DATE(
               (o >>> 25) + 1980,
               (o >>> 21 & 0xF) - 1,
               o >>> 16 & 0x1F,
               o >>> 11 & 0x1F,
               o >>> 5 & 0x3F,
               (o & 0x1F) * 2,
               0
               )[_GETTIME]()
            ];

         if (y === w)
            {
            break;
            }
         }

      if (v[_LENGTH] !== z)
         {
         return (_NULL);
         }

      return (v);
      }

   v = w + r - 46 * (z - Index_ - 1);

   for (s = 0; s < Index_; ++ s)
      {
      if (u.getptr() >= v)
         {
         return (_NULL);
         }

      x += 28;
      u.seek(_EOF, x);
      x += 18
         + u.read(_BITS_CHAR2)
         + u.read(_BITS_CHAR2)
         + u.read(_BITS_CHAR2);
      }

   u.seek(_EOF, x);

   if (u.read(_DIGITS) !== _SIGNATURE[_ZIP1C]
         || (u.read(_BITS_CHAR2)
            , x = u.read(_BITS_CHAR2) , y = u.read(_BITS_CHAR2)
            , z = u.read(_BITS_CHAR2) , z !== 0x0063 && z !== 0x0000 && z !== 0x0008)
         || (r = u.read(_DIGITS) , q = u.read(_DIGITS)
            , p = u.read(_DIGITS) , o = u.read(_DIGITS)
            , l = u.read(_BITS_CHAR2) , j = u.read(_BITS_CHAR2) , i = u.read(_BITS_CHAR2)
            , u.read(_BITS_CHAR2) !== 0x0000)
         || (u.read(_BITS_CHAR2) , u.read(_DIGITS) , h = u.read(_DIGITS)
            , e = u.getptr() , e + l + j + i > v))
      {
      return (_NULL);
      }

   e += Data_[_BYTEOFFSET];
   f = new _UINT8ARRAY(Data_[_BUFFER], e, l);
   t = new _UINT8ARRAY(Data_[_BUFFER], e + l, j);
   u.seek(_EOF, h);

   if (u.read(_DIGITS) !== _SIGNATURE[_ZIP]
         || x !== u.read(_BITS_CHAR2)
         || y !== u.read(_BITS_CHAR2)
         || z !== u.read(_BITS_CHAR2)
         || r !== u.read(_DIGITS)
         || (
            (x = (y & 0x0008) !== 0x0000 , x) ?
               (
               h = r >>> _BITS_CHAR & 0xFF
               , u.read(_DIGITS)
               , u.read(_DIGITS)
               , u.read(_DIGITS)
               , false
               )
            :
               (
               h = q >>> _BITS_CHAR3
               , q !== u.read(_DIGITS)
               || p !== u.read(_DIGITS)
               || o !== u.read(_DIGITS)
               )
            )
         || l !== u.read(_BITS_CHAR2)
         || (j = u.read(_BITS_CHAR2) , v = u.getptr() , i = v + l + j + p , i > w))
      {
      return (_NULL);
      }

   if (x)
      {
      u.seek(_EOF, i);

      if (u.read(_DIGITS) !== 0x08074B50
            || q !== u.read(_DIGITS)
            || p !== u.read(_DIGITS)
            || o !== u.read(_DIGITS)
            || u.getptr() > w)
         {
         u.seek(_EOF, i);

         if (q !== u.read(_DIGITS)
               || p !== u.read(_DIGITS)
               || o !== u.read(_DIGITS)
               || u.getptr() > w)
            {
            return (_NULL);
            }
         }
      }

   r = new _DATE(
      (r >>> 25) + 1980,
      (r >>> 21 & 0xF) - 1,
      r >>> 16 & 0x1F,
      r >>> 11 & 0x1F,
      r >>> 5 & 0x3F,
      (r & 0x1F) * 2,
      0
      )[_GETTIME]();
   v += Data_[_BYTEOFFSET];
   w = new _UINT8ARRAY(Data_[_BUFFER], v, l);

   for (s = 0; s < l; ++ s)
      {
      if (w[s] !== f[s])
         {
         return (_NULL);
         }
      }

   f = intf.sjis && (y & 0x0800) === 0x0000 ? intf.from_sjis(f) : intf.utf16(f);
   w = f[_LENGTH] === 0 ? _EOF : f[_LASTINDEXOF](_SL, f[_LENGTH] - 1);

   if (w === _EOF)
      {
      e = _EMPTY;
      }
   else
      {
      ++ w;

      if (w === f[_LENGTH])
         {
         if (o === 0)
            {
            return (_NULL);
            }
         else
            {
            e = f;
            f = _EMPTY;
            }
         }
      else
         {
         e = f[_SUBSTRING](0, w);
         f = f[_SUBSTRING](w, f[_LENGTH]);
         }
      }

   v += l;
   g = new _UINT8ARRAY(Data_[_BUFFER], v, j);
   i = new _UINT8ARRAY(Data_[_BUFFER], v + j, p);
   u = new _UINT8ARRAY(p);

   for (s = 0; s < p; ++ s)
      {
      u[s] = i[s];
      }

   v = (y & 0x0001) !== 0x0000;

   if (v)
      {
      if (arguments[_LENGTH] === 2)
         {
         return (_NULL);
         }

      Pwd_ = intf.utf8(Pwd_);
      }

   if (z === 0x0063)
      {
      x = t[_LENGTH];

      if (! v
            || p < 28
            || x < 11)
         {
         return (_NULL);
         }

      t = new _VECTOR(t);

      for (; t.read(_BITS_CHAR2) !== 0x9901; )
         {
         w = t.getptr();

         if (w >= x)
            {
            return (_NULL);
            }

         t.seek(_EOF, w + 2 + t.read(_BITS_CHAR2));
         }

      if (t.read(_BITS_CHAR2) !== 0x0007
            || (h = t.read(_BITS_CHAR2) , h !== 0x0001 && h !== 0x0002)
            || t.read(_BITS_CHAR2) !== 0x4541
            || t.read(_BITS_CHAR) !== 0x03
            || (z = t.read(_BITS_CHAR2) , t.getptr() > x || z !== 0x0000 && z !== 0x0008))
         {
         return (_NULL);
         }

      x = g[_LENGTH];

      if (x < 11)
         {
         return (_NULL);
         }

      g = new _VECTOR(g);

      for (; g.read(_BITS_CHAR2) !== 0x9901; )
         {
         w = g.getptr();

         if (w >= x)
            {
            return (_NULL);
            }

         g.seek(_EOF, w + 2 + g.read(_BITS_CHAR2));
         }

      if (g.read(_BITS_CHAR2) !== 0x0007
            || g.read(_BITS_CHAR2) !== h
            || g.read(_BITS_CHAR2) !== 0x4541
            || g.read(_BITS_CHAR) !== 0x03
            || g.read(_BITS_CHAR2) !== z
            || g.getptr() > x)
         {
         return (_NULL);
         }

      x = new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET], 16);
      y = new _UINT8ARRAY(66);
      intf.pbkdf2(y, Pwd_, x, 1000, intf.sha1i, intf.sha1a, 20, 64);

      if (u[16] !== y[64]
            || u[17] !== y[65])
         {
         return (_NULL);
         }

      x = new _UINT8ARRAY(20);
      w = new _UINT8ARRAY(64);
      l = new _UINT8ARRAY(64);
      intf.hmac_i(x, w, l, new _UINT8ARRAY(y[_BUFFER], y[_BYTEOFFSET] + 32, 32), intf.sha1i, intf.sha1a, 64);
      j = intf.hmac_a0(x, l, intf.sha1i, intf.sha1a);
      p -= 10;
      i = new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET] + p, 10);
      p -= 18;
      u = new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET] + 18, p);
      intf.hmac_a(x, j, u, 64 + p, w, true, intf.sha1i, intf.sha1a, 64);

      for (s = 0; s < 10; ++ s)
         {
         if (i[s] !== x[s])
            {
            return (_NULL);
            }
         }

      x = [];
      intf.aes256i(x, new _UINT8ARRAY(y[_BUFFER], y[_BYTEOFFSET], 32));
      w = new _UINT8ARRAY(16);
      l = new _UINT8ARRAY(16);
      j = 16;

      for (s = 0; s < p; ++ s)
         {
         if (j === 16)
            {
            j = 0;

            for (t = 0; t < 8 && (++ w[t] , w[t] === 0x00); ++ t)
               {
               }

            intf.aes256a(l, w, 0, x);
            }

         u[s] ^= l[j];
         ++ j;
         }
      }
   else
      {
      if (v)
         {
         if (p < 12)
            {
            return (_NULL);
            }

         v = 0x12345678;
         w = 0x23456789;
         x = 0x34567890;

         for (s = 0; s < Pwd_[_LENGTH]; ++ s)
            {
            v = _CRC32A(v, Pwd_[s]);
            w = (((w + (v & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            x = _CRC32A(x, w >>> 24);
            }

         for (s = 0; s < 12; ++ s)
            {
            y = (x | 2) & 0xFFFF;
            u[s] ^= y * ((y ^ 1) >>> 0) >>> 8;
            v = _CRC32A(v, u[s]);
            w = (((w + (v & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            x = _CRC32A(x, w >>> 24);
            }

         if (u[11] !== h)
            {
            return (_NULL);
            }

         for (; s < p; ++ s)
            {
            y = (x | 2) & 0xFFFF;
            u[s] ^= y * ((y ^ 1) >>> 0) >>> 8;
            v = _CRC32A(v, u[s]);
            w = (((w + (v & 0xFF) >>> 0) * 0x4ECD >>> 0) * 0x1A19 >>> 0) + 1 >>> 0;
            x = _CRC32A(x, w >>> 24);
            }

         p -= 12;
         u = new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET] + 12, p);
         }

      h = 0x0001;
      }

   if (z === 0x0000)
      {
      if (p !== o
            || h === 0x0001 && _CRC32(u, 0, u[_LENGTH]) !== q)
         {
         return (_NULL);
         }
      }
   else if (z === 0x0008)
      {
      v = new _VECTOR(u);
      u = new _VECTOR();

      if (p === 0
            || ! _INFLATE(v, u)
            || (v.seek() , v.getptr() !== v.length())
            || (u = u.data() , u[_LENGTH] !== o)
            || h === 0x0001 && _CRC32(u, 0, u[_LENGTH]) !== q)
         {
         return (_NULL);
         }
      }

   return ([e, f, u, r]);
   };

/* char[] */ intf.getdata = function (/* size_t */Elemid_, /* long */W_, /* long */H_)
   {
   var u = _NTH_ELEMENT(Elemid_);

   Elemid_ *= 2;
   u[_WIDTH] = W_;
   u[_HEIGHT] = H_;

   if (! (Elemid_ in _Data))
      {
      u = u[_GETCONTEXT](_2D);
      _Data[Elemid_] = u;
      }
   else
      {
      u = _Data[Elemid_];
      }

   u[_IMAGESMOOTHINGENABLED] = false;
   u = u[_GETIMAGEDATA](0, 0, W_, H_);
   _Data[Elemid_ + 1] = u;
   u = u[_DATA];

   return (new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET], u[_BYTELENGTH]));
   };

/* void */ intf.setdata = function (/* size_t */Elemid_)
   {
   Elemid_ *= 2;
   _Data[Elemid_][_PUTIMAGEDATA](_Data[Elemid_ + 1], 0, 0);
   };

/* void */ intf.setfile = function (/* size_t */Elemid_, /* string */Filename_, /* const char[] */Data_)
   {
   var u;

   if (_MSIE_VERSION === 0 || _MS_EDGE)
      {
      u = _NTH_ELEMENT(Elemid_);

      if (_Href !== _EMPTY)
         {
         _URL[_REVOKEOBJECTURL](_Href);
         }

      _Blob = new _BLOB([Data_], _OCTET_STREAM);
      _Href = _URL[_CREATEOBJECTURL](_Blob);
      u[_HREF] = _Href;
      u[_DOWNLOAD] = Filename_;
      }
   else
      {
      _Ms_blob = new _BLOB([Data_], _OCTET_STREAM);
      _Ms_filename = Filename_;
      }
   };

/* void */ intf.ms_download = function (/* void */)
   {
   if (_Ms_blob !== _NULL)
      {
      _NAVIGATOR[_MSSAVEOROPENBLOB](_Ms_blob, _Ms_filename);
      }
   };

/* void */ intf.sha1i = function (/* char[] */D_)
   {
   D_[0] = 0x67;
   D_[1] = 0x45;
   D_[2] = 0x23;
   D_[3] = 0x01;
   D_[4] = 0xEF;
   D_[5] = 0xCD;
   D_[6] = 0xAB;
   D_[7] = 0x89;
   D_[8] = 0x98;
   D_[9] = 0xBA;
   D_[10] = 0xDC;
   D_[11] = 0xFE;
   D_[12] = 0x10;
   D_[13] = 0x32;
   D_[14] = 0x54;
   D_[15] = 0x76;
   D_[16] = 0xC3;
   D_[17] = 0xD2;
   D_[18] = 0xE1;
   D_[19] = 0xF0;
   };

/* void */ intf.sha1a = function (/* char[] */D_,
      /* const char[] */M_, /* size_t */O_, /* size_t */L_, /* bool */F_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var s;
   var t;

   u = O_ + 64;
   F_ = F_ && u >= M_[_LENGTH];

   if (F_)
      {
      r = 64 - M_[_LENGTH] % 64;

      if (r === 64)
         {
         p = M_[_LENGTH] === 0 ? 1 : 2;
         }
      else if (r < 9)
         {
         r += 64;
         p = 2;
         }
      else
         {
         p = 1;
         }

      g = [];
      q = 0;
      r = new _UINT8ARRAY(r);
      r[0] = 0x80;
      u = L_ * _BITS_CHAR;
      v = _FLOOR(u / 0x100000000);
      w = r[_LENGTH] - _BYTES_WORD2;
      r[w] = v >>> _BITS_CHAR3;
      r[w + 1] = v >>> _BITS_CHAR2;
      r[w + 2] = v >>> _BITS_CHAR;
      r[w + 3] = v;
      r[w + 4] = u >>> _BITS_CHAR3;
      r[w + 5] = u >>> _BITS_CHAR2;
      r[w + 6] = u >>> _BITS_CHAR;
      r[w + 7] = u;
      }
   else
      {
      p = u <= M_[_LENGTH] ? (g = [] , 1) : 0;
      }

   for (; 0 < p; -- p)
      {
      u = D_[0] << _BITS_CHAR3 | D_[1] << _BITS_CHAR2 | D_[2] << _BITS_CHAR | D_[3];
      v = D_[4] << _BITS_CHAR3 | D_[5] << _BITS_CHAR2 | D_[6] << _BITS_CHAR | D_[7];
      w = D_[8] << _BITS_CHAR3 | D_[9] << _BITS_CHAR2 | D_[10] << _BITS_CHAR | D_[11];
      x = D_[12] << _BITS_CHAR3 | D_[13] << _BITS_CHAR2 | D_[14] << _BITS_CHAR | D_[15];
      y = D_[16] << _BITS_CHAR3 | D_[17] << _BITS_CHAR2 | D_[18] << _BITS_CHAR | D_[19];
      o = u;
      l = v;
      j = w;
      i = x;
      h = y;

      for (s = 0; s < 80; ++ s)
         {
         if (s < 16)
            {
            g[s] = 0x00000000;

            for (t = _BITS_CHAR3; 0 <= t; t -= _BITS_CHAR)
               {
               if (O_ < M_[_LENGTH])
                  {
                  g[s] |= M_[O_] << t;
                  ++ O_;
                  }
               else if (F_ && q < r[_LENGTH])
                  {
                  g[s] |= r[q] << t;
                  ++ q;
                  }
               else
                  {
                  break;
                  }
               }
            }
         else
            {
            z = g[s - 3] ^ g[s - 8] ^ g[s - 14] ^ g[s - 16];
            g[s] = z << 1 | z >>> 31;
            }

         z = (u << 5 | u >>> 27) + y + g[s] + (
            s < 40 ?
               s < 20 ?
                  (v & w | ~v & x) + 0x5A827999
               :
                  (v ^ w ^ x) + 0x6ED9EBA1
            :
               s < 60 ?
                  (v & w | v & x | w & x) - 0x70E44324
               :
                  (v ^ w ^ x) - 0x359D3E2A);
         y = x;
         x = w;
         w = v << 30 | v >>> 2;
         v = u;
         u = z;
         }

      o += u;
      l += v;
      j += w;
      i += x;
      h += y;
      D_[0] = o >>> _BITS_CHAR3;
      D_[1] = o >>> _BITS_CHAR2;
      D_[2] = o >>> _BITS_CHAR;
      D_[3] = o;
      D_[4] = l >>> _BITS_CHAR3;
      D_[5] = l >>> _BITS_CHAR2;
      D_[6] = l >>> _BITS_CHAR;
      D_[7] = l;
      D_[8] = j >>> _BITS_CHAR3;
      D_[9] = j >>> _BITS_CHAR2;
      D_[10] = j >>> _BITS_CHAR;
      D_[11] = j;
      D_[12] = i >>> _BITS_CHAR3;
      D_[13] = i >>> _BITS_CHAR2;
      D_[14] = i >>> _BITS_CHAR;
      D_[15] = i;
      D_[16] = h >>> _BITS_CHAR3;
      D_[17] = h >>> _BITS_CHAR2;
      D_[18] = h >>> _BITS_CHAR;
      D_[19] = h;
      }
   };

/* void */ intf.sha512i = function (/* char[] */D_)
   {
   D_[0] = 0x6A;
   D_[1] = 0x09;
   D_[2] = 0xE6;
   D_[3] = 0x67;
   D_[4] = 0xF3;
   D_[5] = 0xBC;
   D_[6] = 0xC9;
   D_[7] = 0x08;
   D_[8] = 0xBB;
   D_[9] = 0x67;
   D_[10] = 0xAE;
   D_[11] = 0x85;
   D_[12] = 0x84;
   D_[13] = 0xCA;
   D_[14] = 0xA7;
   D_[15] = 0x3B;
   D_[16] = 0x3C;
   D_[17] = 0x6E;
   D_[18] = 0xF3;
   D_[19] = 0x72;
   D_[20] = 0xFE;
   D_[21] = 0x94;
   D_[22] = 0xF8;
   D_[23] = 0x2B;
   D_[24] = 0xA5;
   D_[25] = 0x4F;
   D_[26] = 0xF5;
   D_[27] = 0x3A;
   D_[28] = 0x5F;
   D_[29] = 0x1D;
   D_[30] = 0x36;
   D_[31] = 0xF1;
   D_[32] = 0x51;
   D_[33] = 0x0E;
   D_[34] = 0x52;
   D_[35] = 0x7F;
   D_[36] = 0xAD;
   D_[37] = 0xE6;
   D_[38] = 0x82;
   D_[39] = 0xD1;
   D_[40] = 0x9B;
   D_[41] = 0x05;
   D_[42] = 0x68;
   D_[43] = 0x8C;
   D_[44] = 0x2B;
   D_[45] = 0x3E;
   D_[46] = 0x6C;
   D_[47] = 0x1F;
   D_[48] = 0x1F;
   D_[49] = 0x83;
   D_[50] = 0xD9;
   D_[51] = 0xAB;
   D_[52] = 0xFB;
   D_[53] = 0x41;
   D_[54] = 0xBD;
   D_[55] = 0x6B;
   D_[56] = 0x5B;
   D_[57] = 0xE0;
   D_[58] = 0xCD;
   D_[59] = 0x19;
   D_[60] = 0x13;
   D_[61] = 0x7E;
   D_[62] = 0x21;
   D_[63] = 0x79;
   };

/* void */ intf.sha512a = function (/* char[] */D_,
      /* const char[] */M_, /* size_t */O_, /* size_t */L_, /* bool */F_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var n;
   var m;
   var k;
   var d;
   var c;
   var b;
   var a;
   var uu;
   var uv;
   var uw;
   var ux;
   var uy;
   var uz;
   var uo;
   var ul;
   var uj;
   var ui;
   var uh;
   var ug;
   var ue;
   var uf;
   var un;
   var um;
   var uk;
   var s;
   var t;

   u = O_ + 128;
   F_ = F_ && u >= M_[_LENGTH];

   if (F_)
      {
      r = 128 - M_[_LENGTH] % 128;

      if (r === 128)
         {
         p = M_[_LENGTH] === 0 ? 1 : 2;
         }
      else if (r < 17)
         {
         r += 128;
         p = 2;
         }
      else
         {
         p = 1;
         }

      g = [];
      ug = [];
      q = 0;
      r = new _UINT8ARRAY(r);
      r[0] = 0x80;
      u = L_ * _BITS_CHAR;
      v = _FLOOR(u / 0x100000000);
      w = r[_LENGTH] - _BYTES_WORD2;
      r[w] = v >>> _BITS_CHAR3;
      r[w + 1] = v >>> _BITS_CHAR2;
      r[w + 2] = v >>> _BITS_CHAR;
      r[w + 3] = v;
      r[w + 4] = u >>> _BITS_CHAR3;
      r[w + 5] = u >>> _BITS_CHAR2;
      r[w + 6] = u >>> _BITS_CHAR;
      r[w + 7] = u;
      }
   else
      {
      p = u <= M_[_LENGTH] ? (g = [] , ug = [] , 1) : 0;
      }

   for (; 0 < p; -- p)
      {
      u = D_[0] << _BITS_CHAR3 | D_[1] << _BITS_CHAR2 | D_[2] << _BITS_CHAR | D_[3];
      v = D_[4] << _BITS_CHAR3 | D_[5] << _BITS_CHAR2 | D_[6] << _BITS_CHAR | D_[7];
      w = D_[8] << _BITS_CHAR3 | D_[9] << _BITS_CHAR2 | D_[10] << _BITS_CHAR | D_[11];
      x = D_[12] << _BITS_CHAR3 | D_[13] << _BITS_CHAR2 | D_[14] << _BITS_CHAR | D_[15];
      y = D_[16] << _BITS_CHAR3 | D_[17] << _BITS_CHAR2 | D_[18] << _BITS_CHAR | D_[19];
      z = D_[20] << _BITS_CHAR3 | D_[21] << _BITS_CHAR2 | D_[22] << _BITS_CHAR | D_[23];
      o = D_[24] << _BITS_CHAR3 | D_[25] << _BITS_CHAR2 | D_[26] << _BITS_CHAR | D_[27];
      l = D_[28] << _BITS_CHAR3 | D_[29] << _BITS_CHAR2 | D_[30] << _BITS_CHAR | D_[31];
      j = D_[32] << _BITS_CHAR3 | D_[33] << _BITS_CHAR2 | D_[34] << _BITS_CHAR | D_[35];
      i = D_[36] << _BITS_CHAR3 | D_[37] << _BITS_CHAR2 | D_[38] << _BITS_CHAR | D_[39];
      h = D_[40] << _BITS_CHAR3 | D_[41] << _BITS_CHAR2 | D_[42] << _BITS_CHAR | D_[43];
      e = D_[44] << _BITS_CHAR3 | D_[45] << _BITS_CHAR2 | D_[46] << _BITS_CHAR | D_[47];
      f = D_[48] << _BITS_CHAR3 | D_[49] << _BITS_CHAR2 | D_[50] << _BITS_CHAR | D_[51];
      n = D_[52] << _BITS_CHAR3 | D_[53] << _BITS_CHAR2 | D_[54] << _BITS_CHAR | D_[55];
      m = D_[56] << _BITS_CHAR3 | D_[57] << _BITS_CHAR2 | D_[58] << _BITS_CHAR | D_[59];
      k = D_[60] << _BITS_CHAR3 | D_[61] << _BITS_CHAR2 | D_[62] << _BITS_CHAR | D_[63];
      uu = u;
      uv = v;
      uw = w;
      ux = x;
      uy = y;
      uz = z;
      uo = o;
      ul = l;
      uj = j;
      ui = i;
      uh = h;
      ue = e;
      uf = f;
      un = n;
      um = m;
      uk = k;

      for (s = 0; s < 80; ++ s)
         {
         if (s < 16)
            {
            g[s] = 0x00000000;

            for (t = _BITS_CHAR3; 0 <= t; t -= _BITS_CHAR)
               {
               if (O_ < M_[_LENGTH])
                  {
                  g[s] |= M_[O_] << t;
                  ++ O_;
                  }
               else if (F_ && q < r[_LENGTH])
                  {
                  g[s] |= r[q] << t;
                  ++ q;
                  }
               else
                  {
                  break;
                  }
               }

            ug[s] = 0x00000000;

            for (t = _BITS_CHAR3; 0 <= t; t -= _BITS_CHAR)
               {
               if (O_ < M_[_LENGTH])
                  {
                  ug[s] |= M_[O_] << t;
                  ++ O_;
                  }
               else if (F_ && q < r[_LENGTH])
                  {
                  ug[s] |= r[q] << t;
                  ++ q;
                  }
               else
                  {
                  break;
                  }
               }
            }
         else
            {
            d = s - 15;
            c = s - 7;
            b = (ug[d] >>> 1 | g[d] << 31) ^ (ug[d] >>> 8 | g[d] << 24)
               ^ (ug[d] >>> 7 | g[d] << 25);
            ug[s] = b + ug[c];
            g[s] = ((g[d] >>> 1 | ug[d] << 31) ^ (g[d] >>> 8 | ug[d] << 24)
               ^ g[d] >>> 7)
               + g[c]
               + (ug[s] >>> 0 < b >>> 0 ? 1 : 0);
            d = s - 2;
            b = (ug[d] >>> 19 | g[d] << 13) ^ (g[d] >>> 29 | ug[d] << 3)
               ^ (ug[d] >>> 6 | g[d] << 26);
            ug[s] += b;
            g[s] += ((g[d] >>> 19 | ug[d] << 13) ^ (ug[d] >>> 29 | g[d] << 3)
               ^ g[d] >>> 6)
               + (ug[s] >>> 0 < b >>> 0 ? 1 : 0);
            c = s - 16;
            ug[s] += ug[c];
            g[s] += g[c]
               + (ug[s] >>> 0 < ug[c] >>> 0 ? 1 : 0);
            }

         d = uk
            + ((ui >>> 14 | uj << 18) ^ (ui >>> 18 | uj << 14) ^ (uj >>> 9 | ui << 23));
         c = um
            + ((uj >>> 14 | ui << 18) ^ (uj >>> 18 | ui << 14) ^ (ui >>> 9 | uj << 23))
            + (d >>> 0 < uk >>> 0 ? 1 : 0);
         b = ui & ue ^ ~ui & un;
         d += b;
         c += (uj & uh ^ ~uj & uf)
            + (d >>> 0 < b >>> 0 ? 1 : 0);
         d += _K_L[s];
         c += _K_U[s]
            + (d >>> 0 < _K_L[s] ? 1 : 0);
         d += ug[s];
         c += g[s]
            + (d >>> 0 < ug[s] >>> 0 ? 1 : 0);
         a = (uv >>> 28 | uu << 4) ^ (uu >>> 2 | uv << 30) ^ (uu >>> 7 | uv << 25);
         b = a + (uv & ux ^ uv & uz ^ ux & uz);
         a = ((uu >>> 28 | uv << 4) ^ (uv >>> 2 | uu << 30) ^ (uv >>> 7 | uu << 25))
            + (uu & uw ^ uu & uy ^ uw & uy)
            + (b >>> 0 < a >>> 0 ? 1 : 0);
         um = uf;
         uk = un;
         uf = uh;
         un = ue;
         uh = uj;
         ue = ui;
         ui = ul + d >> 0;
         uj = uo + c + (ui >>> 0 < ul >>> 0 ? 1 : 0) >> 0;
         uo = uy;
         ul = uz;
         uy = uw;
         uz = ux;
         uw = uu;
         ux = uv;
         uv = d + b >> 0;
         uu = c + a + (uv >>> 0 < d >>> 0 ? 1 : 0) >> 0;
         }

      v += uv;
      u += uu + (v >>> 0 < uv >>> 0 ? 1 : 0);
      x += ux;
      w += uw + (x >>> 0 < ux >>> 0 ? 1 : 0);
      z += uz;
      y += uy + (z >>> 0 < uz >>> 0 ? 1 : 0);
      l += ul;
      o += uo + (l >>> 0 < ul >>> 0 ? 1 : 0);
      i += ui;
      j += uj + (i >>> 0 < ui >>> 0 ? 1 : 0);
      e += ue;
      h += uh + (e >>> 0 < ue >>> 0 ? 1 : 0);
      n += un;
      f += uf + (n >>> 0 < un >>> 0 ? 1 : 0);
      k += uk;
      m += um + (k >>> 0 < uk >>> 0 ? 1 : 0);
      D_[0] = u >>> _BITS_CHAR3;
      D_[1] = u >>> _BITS_CHAR2;
      D_[2] = u >>> _BITS_CHAR;
      D_[3] = u;
      D_[4] = v >>> _BITS_CHAR3;
      D_[5] = v >>> _BITS_CHAR2;
      D_[6] = v >>> _BITS_CHAR;
      D_[7] = v;
      D_[8] = w >>> _BITS_CHAR3;
      D_[9] = w >>> _BITS_CHAR2;
      D_[10] = w >>> _BITS_CHAR;
      D_[11] = w;
      D_[12] = x >>> _BITS_CHAR3;
      D_[13] = x >>> _BITS_CHAR2;
      D_[14] = x >>> _BITS_CHAR;
      D_[15] = x;
      D_[16] = y >>> _BITS_CHAR3;
      D_[17] = y >>> _BITS_CHAR2;
      D_[18] = y >>> _BITS_CHAR;
      D_[19] = y;
      D_[20] = z >>> _BITS_CHAR3;
      D_[21] = z >>> _BITS_CHAR2;
      D_[22] = z >>> _BITS_CHAR;
      D_[23] = z;
      D_[24] = o >>> _BITS_CHAR3;
      D_[25] = o >>> _BITS_CHAR2;
      D_[26] = o >>> _BITS_CHAR;
      D_[27] = o;
      D_[28] = l >>> _BITS_CHAR3;
      D_[29] = l >>> _BITS_CHAR2;
      D_[30] = l >>> _BITS_CHAR;
      D_[31] = l;
      D_[32] = j >>> _BITS_CHAR3;
      D_[33] = j >>> _BITS_CHAR2;
      D_[34] = j >>> _BITS_CHAR;
      D_[35] = j;
      D_[36] = i >>> _BITS_CHAR3;
      D_[37] = i >>> _BITS_CHAR2;
      D_[38] = i >>> _BITS_CHAR;
      D_[39] = i;
      D_[40] = h >>> _BITS_CHAR3;
      D_[41] = h >>> _BITS_CHAR2;
      D_[42] = h >>> _BITS_CHAR;
      D_[43] = h;
      D_[44] = e >>> _BITS_CHAR3;
      D_[45] = e >>> _BITS_CHAR2;
      D_[46] = e >>> _BITS_CHAR;
      D_[47] = e;
      D_[48] = f >>> _BITS_CHAR3;
      D_[49] = f >>> _BITS_CHAR2;
      D_[50] = f >>> _BITS_CHAR;
      D_[51] = f;
      D_[52] = n >>> _BITS_CHAR3;
      D_[53] = n >>> _BITS_CHAR2;
      D_[54] = n >>> _BITS_CHAR;
      D_[55] = n;
      D_[56] = m >>> _BITS_CHAR3;
      D_[57] = m >>> _BITS_CHAR2;
      D_[58] = m >>> _BITS_CHAR;
      D_[59] = m;
      D_[60] = k >>> _BITS_CHAR3;
      D_[61] = k >>> _BITS_CHAR2;
      D_[62] = k >>> _BITS_CHAR;
      D_[63] = k;
      }
   };

/* char[] */ intf.concat = function (/* char[] */D_,
      /* const char[] */E_, /* const char[] */M_, /* size_t */L_, /* bool */F_,
      /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hs_)
   {
   var u;
   var v;
   var s;
   var t;

   if (E_[_LENGTH] > 0)
      {
      u = E_[_LENGTH] + M_[_LENGTH];
      v = u <= Hs_;
      u = new _UINT8ARRAY(v ? u : Hs_);

      for (s = 0; s < E_[_LENGTH]; ++ s)
         {
         u[s] = E_[s];
         }

      for (t = 0; s < u[_LENGTH] && t < M_[_LENGTH]; ++ s , ++ t)
         {
         u[s] = M_[t];
         }

      M_ = new _UINT8ARRAY(M_[_BUFFER], M_[_BYTEOFFSET] + t, M_[_LENGTH] - t);
      v = v && F_;
      Ha_(D_, u, 0, L_, v);

      for (s = 0; s < M_[_LENGTH]; s += Hs_)
         {
         Ha_(D_, M_, s, L_, F_);
         }

      if (! v && u[_LENGTH] < Hs_)
         {
         return (u);
         }
      }
   else
      {
      if (M_[_LENGTH] > 0)
         {
         for (s = 0; s < M_[_LENGTH]; s += Hs_)
            {
            Ha_(D_, M_, s, L_, F_);
            }
         }
      else
         {
         Ha_(D_, M_, 0, L_, F_);
         }
      }

   v = F_ ? M_[_LENGTH] : _FLOOR(M_[_LENGTH] / Hs_) * Hs_;
   u = new _UINT8ARRAY(M_[_LENGTH] - v);

   for (s = 0 , t = v; s < u[_LENGTH]; ++ s , ++ t)
      {
      u[s] = M_[t];
      }

   return (u);
   };

/* void */ intf.hmac_i = function (/* char[] */D_, /* char[] */Op_, /* char[] */Ip_,
      /* const char[] */P_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hs_)
   {
   var u;
   var s;

   if (P_[_LENGTH] < Hs_)
      {
      u = new _UINT8ARRAY(Hs_);

      for (s = 0; s < P_[_LENGTH]; ++ s)
         {
         u[s] = P_[s];
         }

      P_ = u;
      }
   else if (P_[_LENGTH] > Hs_)
      {
      D_ = new _UINT8ARRAY(D_[_LENGTH]);
      Hi_(D_);

      for (s = 0; s < P_[_LENGTH]; s += Hs_)
         {
         Ha_(D_, P_, s, P_[_LENGTH], true);
         }

      P_ = new _UINT8ARRAY(Hs_);

      for (s = 0; s < D_[_LENGTH]; ++ s)
         {
         P_[s] = D_[s];
         }
      }

   for (s = 0; s < Hs_; ++ s)
      {
      Op_[s] = P_[s] ^ 0x5C;
      Ip_[s] = P_[s] ^ 0x36;
      }
   };

/* char[] */ intf.hmac_a0 = function (/* char[] */D_,
      /* const char[] */Ip_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_)
   {
   Hi_(D_);
   Ha_(D_, Ip_, 0, 0, false);

   return (new _UINT8ARRAY(0));
   };

/* char[] */ intf.hmac_a = function (/* char[] */D_,
      /* const char[] */E_, /* const char[] */M_, /* size_t */L_, /* const char[] */Op_, /* bool */F_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hs_)
   {
   var u;
   var v;
   var s;
   var t;

   u = intf.concat(D_, E_, M_, L_, F_, Ha_, Hs_);

   if (F_)
      {
      v = new _UINT8ARRAY(Hs_ + D_[_LENGTH]);

      for (s = 0; s < Hs_; ++ s)
         {
         v[s] = Op_[s];
         }

      for (t = 0; t < D_[_LENGTH]; ++ s , ++ t)
         {
         v[s] = D_[t];
         }

      Hi_(D_);

      for (s = 0; s < v[_LENGTH]; s += Hs_)
         {
         Ha_(D_, v, s, v[_LENGTH], F_);
         }
      }

   return (u);
   };

/* void */ intf.pbkdf2 = function (/* char[] */K_,
      /* const char[] */P_, /* const char[] */S_, /* long */I_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hl_, /* size_t */Hs_)
   {
   var u = new _UINT8ARRAY(Hl_);
   var v = new _UINT8ARRAY(Hs_);
   var w = new _UINT8ARRAY(Hs_);
   var x = 0;
   var y = new _UINT8ARRAY(_BYTES_WORD);
   var z = new _UINT8ARRAY(Hl_);
   var r = new _UINT8ARRAY(Hl_);
   var q;
   var p = Hs_ + S_[_LENGTH] + _BYTES_WORD;
   var o = Hs_ + Hl_;
   var s;
   var t;

   intf.hmac_i(u, v, w, P_, Hi_, Ha_, Hs_);
   q = intf.hmac_a0(u, w, Hi_, Ha_);
   y[3] = 0x01;

   for (; ; )
      {
      q = intf.hmac_a(u, q, S_, 0, v, false, Hi_, Ha_, Hs_);
      q = intf.hmac_a(u, q, y, p, v, true, Hi_, Ha_, Hs_);

      for (s = 0; s < Hl_; ++ s)
         {
         z[s] = u[s];
         r[s] = u[s];
         }

      q = intf.hmac_a0(u, w, Hi_, Ha_);

      for (s = 1; s < I_; ++ s)
         {
         q = intf.hmac_a(u, q, r, o, v, true, Hi_, Ha_, Hs_);

         for (t = 0; t < Hl_; ++ t)
            {
            r[t] = u[t];
            }

         q = intf.hmac_a0(u, w, Hi_, Ha_);

         for (t = 0; t < Hl_; ++ t)
            {
            z[t] ^= r[t];
            }
         }

      for (s = x , x += Hl_ , t = 0; s < x; ++ s , ++ t)
         {
         if (s === K_[_LENGTH])
            {
            return;
            }

         K_[s] = z[t];
         }

      if (s === K_[_LENGTH])
         {
         return;
         }

      for (s = 3; 0 <= s && (++ y[s] , y[s] === 0x00); -- s)
         {
         }
      }
   };

/* void */ intf.aes256i = function (/* int[] */Key_schedule_,
      /* const char[] */K_)
   {
   var u;
   var s;
   var t = 0;

   for (s = 0; s < 60; ++ s)
      {
      if (s < 8)
         {
         Key_schedule_[s] = K_[t] << _BITS_CHAR3;
         Key_schedule_[s] |= K_[t + 1] << _BITS_CHAR2;
         Key_schedule_[s] |= K_[t + 2] << _BITS_CHAR;
         Key_schedule_[s] |= K_[t + 3];
         t += _BYTES_WORD;

         if (t === 32)
            {
            t = 0;
            }
         }
      else
         {
         u = Key_schedule_[s - 1];

         if (t === 0)
            {
            u = u << _BITS_CHAR | u >>> _BITS_CHAR3;
            u = _SBOX[u >>> _BITS_CHAR3] << _BITS_CHAR3
               | _SBOX[u >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
               | _SBOX[u >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
               | _SBOX[u & 0xFF];
            u ^= _RCON[s >>> 3] << _BITS_CHAR3;
            }
         else if (t === 4)
            {
            u = _SBOX[u >>> _BITS_CHAR3] << _BITS_CHAR3
               | _SBOX[u >>> _BITS_CHAR2 & 0xFF] << _BITS_CHAR2
               | _SBOX[u >>> _BITS_CHAR & 0xFF] << _BITS_CHAR
               | _SBOX[u & 0xFF];
            }

         Key_schedule_[s] = Key_schedule_[s - 8] ^ u;
         ++ t;

         if (t === 8)
            {
            t = 0;
            }
         }
      }
   };

/* void */ intf.aes256a = function (/* char[] */C_,
      /* const char[] */M_, /* size_t */O_, /* const int[] */Key_schedule_)
   {
   _AES256_CIPHER(C_, M_, O_, Key_schedule_,
      _SBOX, _SUB_MIX1, _SUB_MIX2, _SUB_MIX3, _SUB_MIX4);
   };

/* void */ intf.aes256inv_i = function (/* int[] */Inv_key_schedule_,
      /* const char[] */K_)
   {
   var u;
   var v = [];
   var s;
   var t;
   var r;

   intf.aes256i(v, K_);

   for (s = 0 , t = 60 , r = 0; s < 60; ++ s , -- t , ++ r)
      {
      if (r === 4)
         {
         r = 0;
         }

      u = v[r === 0 ? t - 4 : t];

      if (s < 4 || t <= 4)
         {
         Inv_key_schedule_[s] = u;
         }
      else
         {
         Inv_key_schedule_[s] = _INV_SUB_MIX1[_SBOX[u >>> _BITS_CHAR3]]
            ^ _INV_SUB_MIX2[_SBOX[u >>> _BITS_CHAR2 & 0xFF]]
            ^ _INV_SUB_MIX3[_SBOX[u >>> _BITS_CHAR & 0xFF]]
            ^ _INV_SUB_MIX4[_SBOX[u & 0xFF]];
         }
      }
   };

/* void */ intf.aes256inv_a = function (/* char[] */M_,
      /* const char[] */C_, /* size_t */O_, /* const int[] */Inv_key_schedule_)
   {
   var u = new _UINT8ARRAY(16);

   u[0] = C_[O_];
   u[1] = C_[O_ + 1];
   u[2] = C_[O_ + 2];
   u[3] = C_[O_ + 3];
   u[4] = C_[O_ + 12];
   u[5] = C_[O_ + 13];
   u[6] = C_[O_ + 14];
   u[7] = C_[O_ + 15];
   u[8] = C_[O_ + 8];
   u[9] = C_[O_ + 9];
   u[10] = C_[O_ + 10];
   u[11] = C_[O_ + 11];
   u[12] = C_[O_ + 4];
   u[13] = C_[O_ + 5];
   u[14] = C_[O_ + 6];
   u[15] = C_[O_ + 7];
   _AES256_CIPHER(M_, u, 0, Inv_key_schedule_,
      _INV_SBOX, _INV_SUB_MIX1, _INV_SUB_MIX2, _INV_SUB_MIX3, _INV_SUB_MIX4);
   u = M_[4];
   M_[4] = M_[12];
   M_[12] = u;
   u = M_[5];
   M_[5] = M_[13];
   M_[13] = u;
   u = M_[6];
   M_[6] = M_[14];
   M_[14] = u;
   u = M_[7];
   M_[7] = M_[15];
   M_[15] = u;
   };

})(intf);



/* EOF */