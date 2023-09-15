/*
 * 1.0.100.0
 * COPYRIGHT (c) 2023 mScroll
 */



/* namespace */ var pkcs15 = {};

(function (pkcs15){

"use strict";

var _WINDOW = window;
var _MATH = _WINDOW.Math;
var _FLOOR = _MATH.floor;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _LENGTH = "length";
var _NULL = null;

var _INTF = intf;
var _SHA1I = _INTF.sha1i;
var _SHA1A = _INTF.sha1a;
var _CONCAT = _INTF.concat;

var _K;
var _ONE;
var _SHA1DER;
var _SHA256DER;
var _PKCS15_SHA1RSA;
var _PKCS15_SHA256RSA;
var _IS_MINUS;
var _IS_ZERO;
var _WORD;
var _MSB;
var _SIZE;
var _LEN;
var _AT;
var _COMP;
var _COPY;
var _SUB;
var _LSH;
var _RSH;
var _MOD;
var _MUL;
var _MM;
var _EXP;
var _GENERATE;
var _VERIFY;

/* private: */

/* static const size_t[] */ _K =
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
   0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
   ];
/* static const size_t[] */ _ONE =
   [
   0x0001
   ];
/* static const char[] */ _SHA1DER =
   [
   0x30, 0x21, 0x30, 0x09, 0x06, 0x05, 0x2B, 0x0E, 0x03, 0x02, 0x1A, 0x05, 0x00, 0x04, 0x14
   ];
/* static const char[] */ _SHA256DER =
   [
   0x30, 0x31, 0x30, 0x0D, 0x06, 0x09, 0x60, 0x86, 0x48, 0x01, 0x65, 0x03, 0x04, 0x02, 0x01, 0x05, 0x00, 0x04, 0x20
   ];

/* namespace */ _PKCS15_SHA1RSA = {};

/* namespace */ _PKCS15_SHA256RSA = {};

/* bool */ _IS_MINUS = function (/* const char[] */Ap_) /* const */
   {
   return (Ap_[0] >= 0x80);
   };

/* bool */ _IS_ZERO = function (/* const char[] */Ap_) /* const */
   {
   return (Ap_[_LENGTH] === 1 && Ap_[0] === 0x00);
   };

/* size_t[] */ _WORD = function (/* const char[] */Ap_) /* const */
   {
   var u = [];
   var s;
   var t;

   for (s = 0 , t = Ap_[_LENGTH] - 1; 0 < t; ++ s , t -= 2)
      {
      u[s] = Ap_[t - 1] << 8 | Ap_[t];
      }

   if (s === 0 || t === 0 && Ap_[t] !== 0x00)
      {
      u[s] = Ap_[t];
      }

   return (u);
   };

/* size_t */ _MSB = function (/* const size_t[] */A_) /* const */
   {
   var s;

   for (s = A_[_LENGTH] - 1; 0 < s; -- s)
      {
      if (A_[s] !== 0x0000)
         {
         return (s);
         }
      }

   return (s);
   };

/* size_t */ _SIZE = function (/* const size_t[] */A_, /* size_t */MSB_) /* const */
   {
   var u = A_[MSB_];
   var s;

   for (s = 0; u !== 0x0000; ++ s)
      {
      u >>>= 8;
      }

   return (s + MSB_ * 2);
   };

/* size_t */ _LEN = function (/* const size_t[] */A_, /* size_t */MSB_) /* const */
   {
   var u = A_[MSB_];
   var s;

   for (s = 0; u !== 0x0000; ++ s)
      {
      u >>>= 1;
      }

   return (s + MSB_ * 16);
   };

/* bool */ _AT = function (/* const size_t[] */A_, /* size_t */Pos_) /* const */
   {
   return ((A_[_FLOOR(Pos_ / 16)] >>> Pos_ % 16 & 0x0001) !== 0);
   };

/* int */ _COMP = function (/* const size_t[] */L_, /* const size_t[] */R_) /* const */
   {
   var u = _MSB(L_);
   var v = _MSB(R_);
   var s;

   if (u > v)
      {
      return (1);
      }
   else if (u < v)
      {
      return (-1);
      }

   for (s = u; 0 <= s; -- s)
      {
      if (L_[s] > R_[s])
         {
         return (1);
         }
      else if (L_[s] < R_[s])
         {
         return (-1);
         }
      }

   return (0);
   };

/* void */ _COPY = function (/* size_t[] */L_,
      /* const size_t[] */R_)
   {
   var u = _MSB(R_);
   var s;

   for (s = 0; s <= u; ++ s)
      {
      L_[s] = R_[s];
      }

   for (; s < L_[_LENGTH]; ++ s)
      {
      L_[s] = 0x0000;
      }
   };

/* void */ _SUB = function (/* size_t[] */L_,
      /* const size_t[] */R_)
   {
   var u = _MSB(L_);
   var v = _MSB(R_);
   var w = 0;
   var s;

   for (s = 0; s <= v; ++ s)
      {
      w += L_[s];
      w -= R_[s];
      L_[s] = w & 0xFFFF;
      w >>= 16;
      }

   for (; s <= u; ++ s)
      {
      w += L_[s];
      L_[s] = w & 0xFFFF;
      w >>= 16;
      }
   };

/* void */ _LSH = function (/* size_t[] */L_,
      /* size_t */R_)
   {
   var u = _FLOOR(R_ / 16);
   var v = R_ % 16;
   var w = v !== 0;
   var x = _MSB(L_);
   var y = x + u + (w ? 1 : 0);
   var s;

   for (s = x + 1; s <= y; ++ s)
      {
      L_[s] = 0x0000;
      }

   if (u !== 0)
      {
      for (s = y; u <= s; -- s)
         {
         L_[s] = L_[s - u];
         }

      for (; 0 <= s; -- s)
         {
         L_[s] = 0x0000;
         }
      }

   if (w)
      {
      for (s = y; 0 < s; -- s)
         {
         L_[s] = L_[s] << v | L_[s - 1] >>> 16 - v;
         L_[s] &= 0xFFFF;
         }

      L_[s] <<= v;
      L_[s] &= 0xFFFF;
      }
   };

/* void */ _RSH = function (/* size_t[] */L_,
      /* size_t */R_)
   {
   var u = _FLOOR(R_ / 16);
   var v = R_ % 16;
   var w = _MSB(L_);
   var x = w - u;
   var s;

   if (u !== 0)
      {
      for (s = 0; s <= x; ++ s)
         {
         L_[s] = L_[s + u];
         }

      for (; s <= w; ++ s)
         {
         L_[s] = 0x0000;
         }
      }

   if (v !== 0)
      {
      for (s = 0; s < x; ++ s)
         {
         L_[s] = L_[s] >>> v | L_[s + 1] << 16 - v;
         L_[s] &= 0xFFFF;
         }

      L_[s] >>>= v;
      L_[s] &= 0xFFFF;
      }
   };

/* void */ _MOD = function (/* size_t[] */L_,
      /* const size_t[] */R_)
   {
   var u = _LEN(L_, _MSB(L_));
   var v = _LEN(R_, _MSB(R_));
   var w;

   if (u >= v)
      {
      w = [];
      _COPY(w, R_);
      _LSH(w, u - v);

      for (; _COMP(L_, R_) >= 0; )
         {
         if (_COMP(L_, w) >= 0)
            {
            _SUB(L_, w);
            }

         _RSH(w, 1);
         }
      }
   };

/* void */ _MUL = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */Ls_, /* size_t */R_)
   {
   var u = 0;
   var s;
   var t;

   for (s = 0 , t = s + O_; s < Ls_; ++ s , ++ t)
      {
      A_[t] += L_[s] * R_ + u;
      u = A_[t] >>> 16 & 0xFFFF;
      A_[t] &= 0xFFFF;
      }

   for (; u !== 0x0000; ++ s , ++ t)
      {
      A_[t] += u;
      u = A_[t] >>> 16 & 0xFFFF;
      A_[t] &= 0xFFFF;
      }
   };

/* void */ _MM = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_,
      /* const size_t[] */N_, /* size_t */Ns_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var s;

   u = 2 - N_[0];

   for (s = 0; s < 3; ++ s)
      {
      u *= 2 - (u * N_[0] & 0xFFFF);
      u &= 0xFFFF;
      }

   u = (~u & 0xFFFF) + 1 & 0xFFFF;
   v = _MSB(R_) + 1;

   if (v > Ns_)
      {
      v = Ns_;
      }

   w = [];
   x = 2 * Ns_ + 1;

   for (s = 0; s < x; ++ s)
      {
      w[s] = 0x0000;
      }

   x = _MSB(L_) + 1;

   for (s = 0; s < Ns_; ++ s)
      {
      if (s < x)
         {
         y = (w[s] + L_[s] * R_[0] & 0xFFFF) * u & 0xFFFF;
         _MUL(w, s, R_, v, L_[s]);
         }
      else
         {
         y = w[s] * u & 0xFFFF;
         }

      _MUL(w, s, N_, Ns_, y);
      }

   _RSH(w, Ns_ * 16);
   _COPY(A_, w);

   if (_COMP(A_, N_) >= 0)
      {
      _SUB(A_, N_);
      }
   };

/* void */ _EXP = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_,
      /* const size_t[] */N_)
   {
   var u = _MSB(N_) + 1;
   var v = [];
   var w = [];
   var x = _LEN(R_, _MSB(R_));
   var y = x <= 32 ? 1 : 4;
   var z = [];
   var r = 1 - y;
   var q;
   var p;
   var s;
   var t;

   _COPY(v, _ONE);
   _LSH(v, u * 32);
   _MOD(v, N_);
   _MM(w, L_, v, N_, u);
   _MM(A_, w, w, N_, u);
   z[0] = [];
   _COPY(z[0], w);
   q = 1 << y - 1;

   for (s = 1; s < q; ++ s)
      {
      z[s] = [];
      _MM(z[s], z[s - 1], A_, N_, u);
      }

   _COPY(A_, v);
   _MM(A_, A_, _ONE, N_, u);

   for (s = x - 1; 0 <= s; )
      {
      if (_AT(R_, s))
         {
         q = s + r;

         if (q < 0)
            {
            q = 0;
            }

         for (; ! _AT(R_, q); )
            {
            ++ q;
            }

         p = 0;

         for (t = s; q <= t; -- t)
            {
            _MM(A_, A_, A_, N_, u);
            p = p << 1 | (_AT(R_, t) ? 1 : 0);
            }

         _MM(A_, A_, z[p >>> 1], N_, u);
         s = q - 1;
         }
      else
         {
         _MM(A_, A_, A_, N_, u);
         -- s;
         }
      }

   _MM(A_, A_, _ONE, N_, u);
   };

/* T */ _GENERATE = function (
      /* const char[][] */Private_, /* const char[] */Message_,
      /* const char[] */DER_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hl_, /* size_t */Hs_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var s;
   var t;

   if (_IS_MINUS(Private_[0]) || _IS_ZERO(Private_[0])
         || _IS_MINUS(Private_[2]) || _IS_ZERO(Private_[2]))
      {
      return (_NULL);
      }

   u = _WORD(Private_[0]);
   y = _SIZE(u, _MSB(u));
   w = 11 + DER_[_LENGTH] + Hl_;

   if (y < w)
      {
      return (_NULL);
      }

   t = y - w + 8;
   v = new _UINT8ARRAY(y);
   v[0] = 0x00;
   v[1] = 0x01;

   for (s = 2; 0 < t; ++ s , -- t)
      {
      v[s] = 0xFF;
      }

   v[s] = 0x00;

   for (++ s , t = 0; t < DER_[_LENGTH]; ++ s , ++ t)
      {
      v[s] = DER_[t];
      }

   w = new _UINT8ARRAY(Hl_);
   Hi_(w);
   _CONCAT(w, new _UINT8ARRAY(0), Message_, Message_[_LENGTH], true, Ha_, Hs_);

   for (t = 0; t < Hl_; ++ s , ++ t)
      {
      v[s] = w[t];
      }

   x = [];
   w = _WORD(v);
   v = _WORD(Private_[2]);
   _EXP(x, w, v, u);
   y = new _UINT8ARRAY(y);
   z = _MSB(x);

   for (s = 0 , t = y[_LENGTH] - 1; 0 < t && s <= z; ++ s , t -= 2)
      {
      y[t] = x[s];
      y[t - 1] = x[s] >>> 8;
      }

   if (t === 0 && s <= z)
      {
      y[t] = x[s];
      }

   return (y);
   };

/* bool */ _VERIFY = function (
      /* const char[][] */Public_, /* const char[] */Message_, /* const char[] */Signature_,
      /* const char[] */DER_,
      /* void (*)(char[]) */Hi_, /* void (*)(char[], const char[], size_t, size_t, bool) */Ha_,
      /* size_t */Hl_, /* size_t */Hs_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var s;
   var t;

   if (_IS_MINUS(Public_[0]) || _IS_ZERO(Public_[0])
         || _IS_MINUS(Public_[1]) || _IS_ZERO(Public_[1]))
      {
      return (false);
      }

   u = _WORD(Public_[0]);
   y = _SIZE(u, _MSB(u));
   r = 11 + DER_[_LENGTH] + Hl_;

   if (y < r)
      {
      return (false);
      }

   w = _WORD(Signature_);

   if (_COMP(w, u) >= 0)
      {
      return (false);
      }

   x = [];
   v = _WORD(Public_[1]);
   _EXP(x, w, v, u);
   y = new _UINT8ARRAY(y);
   z = _MSB(x);

   for (s = 0 , t = y[_LENGTH] - 1; 0 < t && s <= z; ++ s , t -= 2)
      {
      y[t] = x[s];
      y[t - 1] = x[s] >>> 8;
      }

   if (t === 0 && s <= z)
      {
      y[t] = x[s];
      }

   if (y[0] !== 0x00 || y[1] !== 0x01)
      {
      return (false);
      }

   for (s = 2 , t = y[_LENGTH] - r + 8; 0 < t; ++ s , -- t)
      {
      if (y[s] !== 0xFF)
         {
         return (false);
         }
      }

   if (y[s] !== 0x00)
      {
      return (false);
      }

   for (++ s , t = 0; t < DER_[_LENGTH]; ++ s , ++ t)
      {
      if (y[s] !== DER_[t])
         {
         return (false);
         }
      }

   x = new _UINT8ARRAY(Hl_);
   Hi_(x);
   _CONCAT(x, new _UINT8ARRAY(0), Message_, Message_[_LENGTH], true, Ha_, Hs_);

   for (t = 0; t < Hl_; ++ s , ++ t)
      {
      if (y[s] !== x[t])
         {
         return (false);
         }
      }

   return (true);
   };

/* public: */

/*
 * RSA Signature Scheme with Appendix PKCS #1 v1.5 (non constant time)
 *
 *    pkcs15::sha256i(digest)
 *
 *    pkcs15::sha256a(digest, message, offset, length, final)
 *
 *    pkcs15::sha1rsa::generate_pkcs15_signature(private_key, message) const
 *       ->
 *          signature   (nullable char[])
 *
 *    pkcs15::sha1rsa::verify_pkcs15_signature(public_key, message, signature) const
 *       ->
 *          true      valid signature
 *          false      invalid signature
 *
 *    pkcs15::sha256rsa::generate_pkcs15_signature(private_key, message) const
 *       ->
 *          signature   (nullable char[])
 *
 *    pkcs15::sha256rsa::verify_pkcs15_signature(public_key, message, signature) const
 *       ->
 *          true      valid signature
 *          false      invalid signature
 *
 *    digest   (char[32])
 *    message   (char[])
 *    offset   (size_t)
 *    length   (size_t)
 *    final   (bool)
 *
 *    private_key   (char[][])
 *    public_key   (char[][])
 */

/* void */ pkcs15.sha256i = function (/* char[] */D_)
   {
   D_[0] = 0x6A;
   D_[1] = 0x09;
   D_[2] = 0xE6;
   D_[3] = 0x67;
   D_[4] = 0xBB;
   D_[5] = 0x67;
   D_[6] = 0xAE;
   D_[7] = 0x85;
   D_[8] = 0x3C;
   D_[9] = 0x6E;
   D_[10] = 0xF3;
   D_[11] = 0x72;
   D_[12] = 0xA5;
   D_[13] = 0x4F;
   D_[14] = 0xF5;
   D_[15] = 0x3A;
   D_[16] = 0x51;
   D_[17] = 0x0E;
   D_[18] = 0x52;
   D_[19] = 0x7F;
   D_[20] = 0x9B;
   D_[21] = 0x05;
   D_[22] = 0x68;
   D_[23] = 0x8C;
   D_[24] = 0x1F;
   D_[25] = 0x83;
   D_[26] = 0xD9;
   D_[27] = 0xAB;
   D_[28] = 0x5B;
   D_[29] = 0xE0;
   D_[30] = 0xCD;
   D_[31] = 0x19;
   };

/* void */ pkcs15.sha256a = function (/* char[] */D_,
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
      u = L_ * 8;
      v = _FLOOR(u / 0x100000000);
      w = r[_LENGTH] - 8;
      r[w] = v >>> 24;
      r[w + 1] = v >>> 16;
      r[w + 2] = v >>> 8;
      r[w + 3] = v;
      r[w + 4] = u >>> 24;
      r[w + 5] = u >>> 16;
      r[w + 6] = u >>> 8;
      r[w + 7] = u;
      }
   else
      {
      p = u <= M_[_LENGTH] ? (g = [] , 1) : 0;
      }

   for (; 0 < p; -- p)
      {
      u = D_[0] << 24 | D_[1] << 16 | D_[2] << 8 | D_[3];
      v = D_[4] << 24 | D_[5] << 16 | D_[6] << 8 | D_[7];
      w = D_[8] << 24 | D_[9] << 16 | D_[10] << 8 | D_[11];
      x = D_[12] << 24 | D_[13] << 16 | D_[14] << 8 | D_[15];
      y = D_[16] << 24 | D_[17] << 16 | D_[18] << 8 | D_[19];
      z = D_[20] << 24 | D_[21] << 16 | D_[22] << 8 | D_[23];
      o = D_[24] << 24 | D_[25] << 16 | D_[26] << 8 | D_[27];
      l = D_[28] << 24 | D_[29] << 16 | D_[30] << 8 | D_[31];
      j = u;
      i = v;
      h = w;
      e = x;
      f = y;
      n = z;
      m = o;
      k = l;

      for (s = 0; s < 64; ++ s)
         {
         if (s < 16)
            {
            g[s] = 0x00000000;

            for (t = 24; 0 <= t; t -= 8)
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
            d = s - 15;
            g[s] = ((g[d] >>> 7 | g[d] << 25) ^ (g[d] >>> 18 | g[d] << 14)
               ^ g[d] >>> 3)
               + g[s - 7];
            d = s - 2;
            g[s] += ((g[d] >>> 17 | g[d] << 15) ^ (g[d] >>> 19 | g[d] << 13)
               ^ g[d] >>> 10)
               + g[s - 16];
            }

         d = k
            + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7))
            + (f & n ^ ~f & m)
            + _K[s]
            + g[s];
         c = ((j >>> 2 | j << 30) ^ (j >>> 13 | j << 19) ^ (j >>> 22 | j << 10))
            + (j & i ^ j & h ^ i & h);
         k = m;
         m = n;
         n = f;
         f = e + d >> 0;
         e = h;
         h = i;
         i = j;
         j = d + c >> 0;
         }

      u += j;
      v += i;
      w += h;
      x += e;
      y += f;
      z += n;
      o += m;
      l += k;
      D_[0] = u >>> 24;
      D_[1] = u >>> 16;
      D_[2] = u >>> 8;
      D_[3] = u;
      D_[4] = v >>> 24;
      D_[5] = v >>> 16;
      D_[6] = v >>> 8;
      D_[7] = v;
      D_[8] = w >>> 24;
      D_[9] = w >>> 16;
      D_[10] = w >>> 8;
      D_[11] = w;
      D_[12] = x >>> 24;
      D_[13] = x >>> 16;
      D_[14] = x >>> 8;
      D_[15] = x;
      D_[16] = y >>> 24;
      D_[17] = y >>> 16;
      D_[18] = y >>> 8;
      D_[19] = y;
      D_[20] = z >>> 24;
      D_[21] = z >>> 16;
      D_[22] = z >>> 8;
      D_[23] = z;
      D_[24] = o >>> 24;
      D_[25] = o >>> 16;
      D_[26] = o >>> 8;
      D_[27] = o;
      D_[28] = l >>> 24;
      D_[29] = l >>> 16;
      D_[30] = l >>> 8;
      D_[31] = l;
      }
   };

/* namespace */ pkcs15.sha1rsa = _PKCS15_SHA1RSA;

/* T */ _PKCS15_SHA1RSA.generate_pkcs15_signature = function (
      /* const char[][] */Private_, /* const char[] */Message_) /* const */
   {
   return (_GENERATE(Private_, Message_,
      _SHA1DER, _SHA1I, _SHA1A, 20, 64));
   };

/* bool */ _PKCS15_SHA1RSA.verify_pkcs15_signature = function (
      /* const char[][] */Public_, /* const char[] */Message_, /* const char[] */Signature_) /* const */
   {
   return (_VERIFY(Public_, Message_, Signature_,
      _SHA1DER, _SHA1I, _SHA1A, 20, 64));
   };

/* namespace */ pkcs15.sha256rsa = _PKCS15_SHA256RSA;

/* T */ _PKCS15_SHA256RSA.generate_pkcs15_signature = function (
      /* const char[][] */Private_, /* const char[] */Message_) /* const */
   {
   return (_GENERATE(Private_, Message_,
      _SHA256DER, pkcs15.sha256i, pkcs15.sha256a, 32, 64));
   };

/* bool */ _PKCS15_SHA256RSA.verify_pkcs15_signature = function (
      /* const char[][] */Public_, /* const char[] */Message_, /* const char[] */Signature_) /* const */
   {
   return (_VERIFY(Public_, Message_, Signature_,
      _SHA256DER, pkcs15.sha256i, pkcs15.sha256a, 32, 64));
   };

})(pkcs15);



/* EOF */