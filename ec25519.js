/*
 * 1.0.100.0
 * COPYRIGHT (c) 2020 mScroll
 */



/* namespace */ var ec25519 = {};

(function (ec25519){

"use strict";

var _WINDOW = window;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _LENGTH = "length";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _GETRANDOMVALUES = "getRandomValues";
var _NULL = null;

var _STD = std;
var _STD_HTML = _STD.html;
var _MSIE_VERSION = _STD_HTML.msie_version;
var _MS_EDGE = _STD_HTML.ms_edge;

var _CRYPTO =
   _MS_EDGE || _MSIE_VERSION === 0 ?
      _WINDOW.crypto
   :
      _WINDOW.msCrypto;

var _INTF = intf;
var _SHA512I = _INTF.sha512i;
var _SHA512A = _INTF.sha512a;
var _CONCAT = _INTF.concat;

var _A24;
var _G;
var _WORD;
var _CHAR;
var _ARR;
var _CPY;
var _SWAP;
var _COND;
var _MOD;
var _ADD;
var _SUB;
var _MUL;
var _E2N;
var _INV;
var _X25519;
var _2D;
var _IMG;
var _ONE;
var _D;
var _ZERO;
var _L;
var _MU;
var _B;
var _DBL2;
var _ADD2;
var _MUL2;
var _ENC;
var _NEQ;
var _SQRT;
var _DEC;
var _CPY3;
var _NEQ3;
var _COND3;
var _ADD3;
var _SUB3;
var _MUL3;
var _MOD3;

/* private: */

/* static const size_t[] */ _A24 =
   [
   0xDB42, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
   ];
/* static const char[] */ _G = new _UINT8ARRAY(32);

   _G[0] = 0x09;

/* void */ _WORD = function (/* size_t[] */A_,
      /* const char[] */Ap_)
   {
   var s;
   var t;

   for (s = 0 , t = 0; s < 16; ++ s , t += 2)
      {
      A_[s] = Ap_[t + 1] << 8 | Ap_[t];
      }
   };

/* void */ _CHAR = function (/* char[] */Ap_,
      /* const size_t[] */A0_)
   {
   var s;
   var t;

   for (s = 0 , t = 0; s < 16; ++ s , t += 2)
      {
      Ap_[t] = A0_[s];
      Ap_[t + 1] = A0_[s] >>> 8;
      }
   };

/* void */ _ARR = function (/* size_t[] */A_,
      /* size_t */N_)
   {
   var s;

   A_[0] = N_ & 0xFFFF;

   for (s = 1; s < 16; ++ s)
      {
      A_[s] = 0;
      }
   };

/* void */ _CPY = function (/* size_t[] */A_,
      /* const size_t[] */A0_)
   {
   var s;

   for (s = 0; s < 16; ++ s)
      {
      A_[s] = A0_[s];
      }
   };

/* void */ _SWAP = function (
      /* size_t */C_,
      /* size_t[] */L_, /* size_t[] */R_)
   {
   var u = ~C_ + 1;
   var v;
   var s;

   for (s = 0; s < 16; ++ s)
      {
      v = u & (L_[s] ^ R_[s]);
      L_[s] ^= v;
      R_[s] ^= v;
      }
   };

/* void */ _COND = function (/* size_t[] */A_,
      /* size_t */C_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = C_ - 1;
   var v = ~u;
   var s;

   for (s = 0; s < 16; ++ s)
      {
      A_[s] = L_[s] & v | R_[s] & u;
      }
   };

/* void */ _MOD = function (/* size_t[] */A_,
      /* const size_t[] */A0_)
   {
   var u = 19;
   var v = [];
   var s;

   for (s = 0; s < 16; ++ s)
      {
      u += A0_[s];
      v[s] = u & 0xFFFF;
      u >>>= 16;
      }

   u = v[15];
   v[15] &= 0x7FFF;
   _COND(A_, u >>> 15, v, A0_);
   };

/* void */ _ADD = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = 0;
   var s;

   for (s = 0; s < 16; ++ s)
      {
      u += L_[s];
      u += R_[s];
      A_[s] = u & 0xFFFF;
      u >>>= 16;
      }

   _MOD(A_, A_);
   };

/* void */ _SUB = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = -19;
   var s;

   for (s = 0; s < 16; ++ s)
      {
      u += L_[s];
      u -= R_[s];
      A_[s] = u & 0xFFFF;
      u >>= 16;
      }

   A_[15] += 0x8000;
   A_[15] &= 0xFFFF;
   _MOD(A_, A_);
   };

/* void */ _MUL = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = [];
   var v = 0;
   var w = 0;
   var s;
   var t;
   var r;

   for (s = 0; s < 16; ++ s)
      {
      for (t = 0; t <= s; ++ t)
         {
         v += L_[t] * R_[s - t];
         w += v >>> 16;
         v &= 0xFFFF;
         }

      u[s] = v;
      v = w & 0xFFFF;
      w >>>= 16;
      }

   for (r = 1; s < 32; ++ s , ++ r)
      {
      for (t = r; t < 16; ++ t)
         {
         v += L_[t] * R_[s - t];
         w += v >>> 16;
         v &= 0xFFFF;
         }

      u[s] = v;
      v = w & 0xFFFF;
      w >>>= 16;
      }

   v = (u[15] >>> 15) * 19;
   u[15] &= 0x7FFF;

   for (s = 0; s < 16; ++ s)
      {
      v += u[s];
      v += u[s + 16] * 38;
      u[s] = v & 0xFFFF;
      v >>>= 16;
      }

   v *= 38;
   v += (u[15] >>> 15) * 19;
   u[15] &= 0x7FFF;

   for (s = 0; s < 16; ++ s)
      {
      v += u[s];
      u[s] = v & 0xFFFF;
      v >>>= 16;
      }

   _MOD(A_, u);
   };

/* void */ _E2N = function (/* size_t[] */A_,
      /* const size_t[] */A0_, /* size_t */N_)
   {
   var s;

   _MUL(A_, A0_, A0_);

   for (s = 1; s < N_; ++ s)
      {
      _MUL(A_, A_, A_);
      }
   };

/* void */ _INV = function (/* size_t[] */A_,
      /* const size_t[] */A0_)
   {
   var u = [];
   var v = [];

   _MUL(u, A0_, A0_);
   _MUL(u, u, A0_);
   _MUL(u, u, u);
   _MUL(v, u, A0_);
   _E2N(u, v, 3);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, A0_);
   _E2N(u, v, 7);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, A0_);
   _E2N(u, v, 15);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, A0_);
   _E2N(u, v, 31);
   _MUL(v, u, v);
   _E2N(u, v, 62);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, A0_);
   _E2N(u, v, 125);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(u, u, u);
   _MUL(u, u, A0_);
   _MUL(u, u, u);
   _MUL(u, u, u);
   _MUL(u, u, A0_);
   _MUL(u, u, u);
   _MUL(A_, u, A0_);
   };

/* void */ _X25519 = function (/* char[] */U_,
      /* const char[] */K_, /* const char[] */U0_)
   {
   var u = [];
   var v = [];
   var w = [];
   var x = [];
   var y = [];
   var z = [];
   var r = 0;
   var q = [];
   var p = [];
   var o;
   var s;

   _WORD(v, K_);
   v[0] &= 0xFFF8;
   v[15] &= 0x7FFF;
   v[15] |= 0x4000;
   _WORD(u, U0_);
   u[15] &= 0x7FFF;
   _MOD(u, u);
   _ARR(w, 1);
   _ARR(x, 0);
   _CPY(y, u);
   _ARR(z, 1);

   for (s = 254; 0 <= s; -- s)
      {
      o = v[s >>> 4] >>> (s & 0xF) & 0x1;
      r ^= o;
      _SWAP(r, w, y);
      _SWAP(r, x, z);
      r = o;
      _ADD(q, y, z);
      _SUB(y, y, z);
      _ADD(z, w, x);
      _SUB(w, w, x);
      _MUL(q, q, w);
      _MUL(y, y, z);
      _MUL(z, z, z);
      _MUL(w, w, w);
      _SUB(p, z, w);
      _MUL(x, p, _A24);
      _ADD(x, x, w);
      _MUL(x, x, p);
      _MUL(w, w, z);
      _SUB(z, q, y);
      _MUL(z, z, z);
      _MUL(z, z, u);
      _ADD(y, y, q);
      _MUL(y, y, y);
      }

   _SWAP(r, w, y);
   _SWAP(r, x, z);
   _INV(u, x);
   _MUL(u, u, w);
   _CHAR(U_, u);
   };

/* static const size_t[] */ _2D =
   [
   0xF159, 0x26B2, 0x9B94, 0xEBD6, 0xB156, 0x8283, 0x149A, 0x00E0,
   0xD130, 0xEEF3, 0x80F2, 0x198E, 0xFCE7, 0x56DF, 0xD9DC, 0x2406
   ];
/* static const size_t[] */ _IMG =
   [
   0xA0B0, 0x4A0E, 0x1B27, 0xC4EE, 0xE478, 0xAD2F, 0x1806, 0x2F43,
   0xD7A7, 0x3DFB, 0x0099, 0x2B4D, 0xDF0B, 0x4FC1, 0x2480, 0x2B83
   ];
/* static const size_t[] */ _ONE =
   [
   0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
   ];
/* static const size_t[] */ _D =
   [
   0x78A3, 0x1359, 0x4DCA, 0x75EB, 0xD8AB, 0x4141, 0x0A4D, 0x0070,
   0xE898, 0x7779, 0x4079, 0x8CC7, 0xFE73, 0x2B6F, 0x6CEE, 0x5203
   ];
/* static const size_t[] */ _ZERO =
   [
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
   ];
/* static const char[] */ _L = new _UINT8ARRAY(33);

   _L[0] = 0xED;
   _L[1] = 0xD3;
   _L[2] = 0xF5;
   _L[3] = 0x5C;
   _L[4] = 0x1A;
   _L[5] = 0x63;
   _L[6] = 0x12;
   _L[7] = 0x58;
   _L[8] = 0xD6;
   _L[9] = 0x9C;
   _L[10] = 0xF7;
   _L[11] = 0xA2;
   _L[12] = 0xDE;
   _L[13] = 0xF9;
   _L[14] = 0xDE;
   _L[15] = 0x14;
   _L[31] = 0x10;

/* static const char[] */ _MU = new _UINT8ARRAY(33);

   _MU[0] = 0x1B;
   _MU[1] = 0x13;
   _MU[2] = 0x2C;
   _MU[3] = 0x0A;
   _MU[4] = 0xA3;
   _MU[5] = 0xE5;
   _MU[6] = 0x9C;
   _MU[7] = 0xED;
   _MU[8] = 0xA7;
   _MU[9] = 0x29;
   _MU[10] = 0x63;
   _MU[11] = 0x08;
   _MU[12] = 0x5D;
   _MU[13] = 0x21;
   _MU[14] = 0x06;
   _MU[15] = 0x21;
   _MU[16] = 0xEB;
   _MU[17] = 0xFF;
   _MU[18] = 0xFF;
   _MU[19] = 0xFF;
   _MU[20] = 0xFF;
   _MU[21] = 0xFF;
   _MU[22] = 0xFF;
   _MU[23] = 0xFF;
   _MU[24] = 0xFF;
   _MU[25] = 0xFF;
   _MU[26] = 0xFF;
   _MU[27] = 0xFF;
   _MU[28] = 0xFF;
   _MU[29] = 0xFF;
   _MU[30] = 0xFF;
   _MU[31] = 0xFF;
   _MU[32] = 0x0F;

/* static const size_t[][] */ _B =
   [
      [
      0xD51A, 0x8F25, 0x2D60, 0xC956, 0xA7B2, 0x9525, 0xC760, 0x692C,
      0xDC5C, 0xFDD6, 0xE231, 0xC0A4, 0x53FE, 0xCD6E, 0x36D3, 0x2169
      ],
      [
      0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666,
      0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666
      ],
      [
      0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
      0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
      ],
      [
      0xDDA3, 0xA5B7, 0x8AB3, 0x6DDE, 0x52F5, 0x7751, 0x9F80, 0x20F0,
      0xE37D, 0x64AB, 0x4E8E, 0x66EA, 0x7665, 0xD78B, 0x5F0F, 0x6787
      ]
   ];

/* void */ _DBL2 = function (/* size_t[][] */P_,
      /* const size_t[][] */P0_)
   {
   var u = [[], [], [], []];
   var v = [];
   var w = [];
   var x = [];

   _MUL(v, P0_[0], P0_[0]);
   _MUL(w, P0_[1], P0_[1]);
   _MUL(x, P0_[2], P0_[2]);
   _ADD(x, x, x);
   _ADD(u[0], v, w);
   _ADD(u[1], P0_[0], P0_[1]);
   _MUL(u[1], u[1], u[1]);
   _SUB(u[1], u[0], u[1]);
   _SUB(u[2], v, w);
   _ADD(u[3], x, u[2]);
   _MUL(P_[0], u[1], u[3]);
   _MUL(P_[1], u[0], u[2]);
   _MUL(P_[2], u[2], u[3]);
   _MUL(P_[3], u[0], u[1]);
   };

/* void */ _ADD2 = function (/* size_t[][] */P_,
      /* const size_t[][] */P0_, /* const size_t[][] */P1_)
   {
   var u = [[], [], [], []];
   var v = [[], [], [], []];

   _ADD(u[2], P0_[1], P0_[0]);
   _ADD(u[3], P1_[1], P1_[0]);
   _MUL(u[0], u[2], u[3]);
   _SUB(u[2], P0_[1], P0_[0]);
   _SUB(u[3], P1_[1], P1_[0]);
   _MUL(u[1], u[2], u[3]);
   _MUL(u[2], P0_[2], P1_[2]);
   _ADD(u[2], u[2], u[2]);
   _MUL(u[3], P0_[3], P1_[3]);
   _MUL(u[3], u[3], _2D);
   _ADD(v[0], u[0], u[1]);
   _SUB(v[1], u[0], u[1]);
   _ADD(v[2], u[2], u[3]);
   _SUB(v[3], u[2], u[3]);
   _MUL(P_[0], v[1], v[3]);
   _MUL(P_[1], v[0], v[2]);
   _MUL(P_[2], v[2], v[3]);
   _MUL(P_[3], v[0], v[1]);
   };

/* void */ _MUL2 = function (/* size_t[][] */P_,
      /* const char[] */Ap_, /* const size_t[][] */P0_)
   {
   var u = [[], [], [], []];
   var v = [[], [], [], []];
   var w;
   var s;

   _ARR(u[0], 0);
   _ARR(u[1], 1);
   _ARR(u[2], 1);
   _ARR(u[3], 0);

   for (s = 254; 0 <= s; -- s)
      {
      w = Ap_[s >>> 3] >>> (s & 0x7) & 0x1;
      _DBL2(u, u);
      _ADD2(v, u, P0_);
      _COND(u[0], w, v[0], u[0]);
      _COND(u[1], w, v[1], u[1]);
      _COND(u[2], w, v[2], u[2]);
      _COND(u[3], w, v[3], u[3]);
      }

   _CPY(P_[0], u[0]);
   _CPY(P_[1], u[1]);
   _CPY(P_[2], u[2]);
   _CPY(P_[3], u[3]);
   };

/* void */ _ENC = function (/* char[] */Ap_, /* size_t[][] */P_)
   {
   var u = P_[0];

   _INV(P_[2], P_[2]);
   _MUL(u, u, P_[2]);
   _MUL(P_[1], P_[1], P_[2]);
   _ARR(P_[2], 1);
   _MUL(P_[3], u, P_[1]);
   _CHAR(Ap_, P_[1]);
   Ap_[31] |= (u[0] & 0x1) << 7;
   };

/* size_t */ _NEQ = function (
      /* const size_t[] */L_, /* const size_t[] */R_) /* const */
   {
   var u = 0;
   var s;

   for (s = 0; s < 16; ++ s)
      {
      u |= L_[s] ^ R_[s];
      }

   return ((u | ~u + 1) >>> 31);
   };

/* size_t */ _SQRT = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = [];
   var v = [];
   var w = [];
   var x;
   var y;

   _MUL(v, R_, R_);
   _MUL(v, v, R_);
   _MUL(v, v, v);
   _MUL(v, v, R_);
   _MUL(w, L_, v);
   _MUL(u, w, w);
   _MUL(u, u, w);
   _MUL(u, u, u);
   _MUL(v, u, w);
   _E2N(u, v, 3);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, w);
   _E2N(u, v, 7);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, w);
   _E2N(u, v, 15);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, w);
   _E2N(u, v, 31);
   _MUL(v, u, v);
   _E2N(u, v, 62);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(v, u, w);
   _E2N(u, v, 125);
   _MUL(u, u, v);
   _MUL(u, u, u);
   _MUL(u, u, u);
   _MUL(u, u, w);
   _MUL(u, u, L_);
   _MUL(v, R_, R_);
   _MUL(v, v, R_);
   _MUL(u, u, v);
   _MUL(v, u, _IMG);
   _MUL(w, u, u);
   _MUL(w, w, R_);
   x = _NEQ(w, L_);
   _MUL(w, v, v);
   _MUL(w, w, R_);
   y = _NEQ(w, L_);
   _COND(A_, x, v, u);

   return (x & y);
   };

/* size_t */ _DEC = function (/* size_t[][] */P_,
      /* const char[] */Ap_)
   {
   var u = Ap_[31] >>> 7;
   var v = 19;
   var w = [];
   var x = [];
   var y = P_[1];
   var s;

   _WORD(y, Ap_);
   y[15] &= 0x7FFF;

   for (s = 0; s < 16; ++ s)
      {
      v += y[s];
      w[s] = v & 0xFFFF;
      v >>>= 16;
      }

   v = w[15] >>> 15;
   _MUL(x, y, y);
   _SUB(w, x, _ONE);
   _MUL(x, x, _D);
   _ADD(x, x, _ONE);
   v |= _SQRT(w, w, x);
   v |= (_NEQ(w, _ZERO) ^ 0x1) & u;
   _SUB(x, _ZERO, w);
   _COND(P_[0], (u ^ w[0]) & 0x1, x, w);
   _ARR(P_[2], 1);
   _MUL(P_[3], P_[0], y);

   return (v);
   };

/* void */ _CPY3 = function (/* char[] */Bp_,
      /* const char[] */Ap_,
      /* size_t */Len_)
   {
   var s;

   for (s = 0; s < Len_; ++ s)
      {
      Bp_[s] = Ap_[s];
      }
   };

/* size_t */ _NEQ3 = function (
      /* const char[] */Ap_, /* const char[] */Bp_,
      /* size_t */Len_) /* const */
   {
   var u = 0;
   var s;

   for (s = 0; s < Len_; ++ s)
      {
      u |= Ap_[s] ^ Bp_[s];
      }

   return ((u | ~u + 1) >>> 31);
   };

/* void */ _COND3 = function (/* char[] */Ap_,
      /* size_t */C_,
      /* const char[] */Bp_, /* const char[] */Cp_,
      /* size_t */Len_)
   {
   var u = C_ - 1;
   var v = ~u;
   var s;

   for (s = 0; s < Len_; ++ s)
      {
      Ap_[s] = Bp_[s] & v | Cp_[s] & u;
      }
   };

/* void */ _ADD3 = function (/* char[] */Ap_,
      /* const char[] */Bp_, /* const char[] */Cp_,
      /* size_t */Len_)
   {
   var u = 0;
   var s;

   for (s = 0; s < Len_; ++ s)
      {
      u += Bp_[s];
      u += Cp_[s];
      Ap_[s] = u;
      u >>>= 8;
      }
   };

/* size_t */ _SUB3 = function (/* char[] */Ap_,
      /* const char[] */Bp_, /* const char[] */Cp_,
      /* size_t */Len_)
   {
   var u = 0;
   var s;

   for (s = 0; s < Len_; ++ s)
      {
      u += Bp_[s];
      u -= Cp_[s];
      Ap_[s] = u;
      u >>= 8;
      }

   return (u & 0x1);
   };

/* void */ _MUL3 = function (/* T */Lo_, /* T */Hi_,
      /* const char[] */Bp_, /* const char[] */Cp_,
      /* size_t */Len_)
   {
   var u = 0;
   var v = Lo_ !== _NULL;
   var s;
   var t;
   var r;
   var q;

   for (s = 0; s < Len_; ++ s)
      {
      for (t = 0; t <= s; ++ t)
         {
         u += Bp_[t] * Cp_[s - t];
         }

      if (v)
         {
         Lo_[s] = u;
         }

      u >>>= 8;
      }

   if (Hi_ !== _NULL)
      {
      v = Len_ << 1;

      for (r = 1 , q = 0; s < v; ++ s , ++ r , ++ q)
         {
         for (t = r; t < Len_; ++ t)
            {
            u += Bp_[t] * Cp_[s - t];
            }

         Hi_[q] = u;
         u >>>= 8;
         }
      }
   };

/* void */ _MOD3 = function (/* char[] */Bp_,
      /* const char[] */Ap_)
   {
   var u;
   var v = new _UINT8ARRAY(33);
   var w = new _UINT8ARRAY(33);

   _MUL3(_NULL, v,
      new _UINT8ARRAY(
         Ap_[_BUFFER],
         Ap_[_BYTEOFFSET] + 31,
         33),
      _MU, 33);
   _MUL3(w, _NULL, v, _L, 33);
   _SUB3(v, Ap_, w, 33);
   u = _SUB3(w, v, _L, 33);
   _COND3(v, u, v, w, 33);
   u = _SUB3(w, v, _L, 33);
   _COND3(v, u, v, w, 33);
   _CPY3(Bp_, v, 32);
   };

/* public: */

/*
 * Curve25519 elliptic curve Diffie-Hellman (X25519)
 *
 *    ec25519::get_key_pair() const
 *       ->
 *          [0]   public_key   (char[32])
 *          [1]   private_key   (char[32])
 *
 *    ec25519::get_shared_secret(private_key, public_key2) const
 *       ->
 *          shared_secret   (nullable char[32])
 *
 *    public_key2   (char[32])
 */

/* char[][] */ ec25519.get_key_pair = function (/* void */) /* const */
   {
   var u = new _UINT8ARRAY(32);
   var v = new _UINT8ARRAY(32);

   _CRYPTO[_GETRANDOMVALUES](v);
   _X25519(u, v, _G);

   return ([u, v]);
   };

/* T */ ec25519.get_shared_secret = function (
      /* const char[] */Private_, /* const char[] */Public2_) /* const */
   {
   var u = new _UINT8ARRAY(32);
   var v = 0;
   var s;

   _X25519(u, Private_, Public2_);

   for (s = 0; s < 32; ++ s)
      {
      v |= u[s];
      }

   return (v === 0 ? _NULL : u);
   };

/*
 * Edwards25519 elliptic curve EdDSA (Ed25519)
 *
 *    ec25519::get_eddsa_key_pair() const
 *       ->
 *          [0]   public_key   (char[32])
 *          [1]   private_key   (char[32])
 *
 *    ec25519::generate_eddsa_signature(
 *          private_key, message) const
 *       ->
 *          signature   (char[64])
 *
 *    ec25519::verify_eddsa_signature(
 *          public_key, message, signature) const
 *       ->
 *          true      valid signature
 *          false      invalid signature
 *
 *    message   (char[])
 */

/* char[][] */ ec25519.get_eddsa_key_pair = function (/* void */) /* const */
   {
   var u = new _UINT8ARRAY(64);
   var v = new _UINT8ARRAY(32);
   var w = new _UINT8ARRAY(32);
   var x = [[], [], [], []];

   _CRYPTO[_GETRANDOMVALUES](w);
   _SHA512I(u);
   _SHA512A(u, w, 0, 32, true);
   u[0] &= 0xF8;
   u[31] &= 0x7F;
   u[31] |= 0x40;
   _MUL2(x, u, _B);
   _ENC(v, x);

   return ([v, w]);
   };

/* char[] */ ec25519.generate_eddsa_signature = function (
      /* const char[] */Private_, /* const char[] */Message_) /* const */
   {
   var u = new _UINT8ARRAY(64);
   var v = new _UINT8ARRAY(64);
   var w = new _UINT8ARRAY(32);
   var x = new _UINT8ARRAY(32);
   var y = new _UINT8ARRAY(32);
   var z = new _UINT8ARRAY(32);
   var r = [[], [], [], []];
   var q;
   var s;

   _SHA512I(u);
   _SHA512A(u, Private_, 0, 32, true);

   for (s = 0; s < 32; ++ s)
      {
      x[s] = u[s];
      }

   x[0] &= 0xF8;
   x[31] &= 0x7F;
   x[31] |= 0x40;
   _MUL2(r, x, _B);
   _ENC(w, r);

   for (s = 0; s < 32; ++ s)
      {
      y[s] = u[s + 32];
      }

   _SHA512I(u);
   _CONCAT(u,
      y,
      Message_,
      32 + Message_[_LENGTH],
      true, _SHA512A, 128);
   _MOD3(z, u);
   _MUL2(r, z, _B);
   _ENC(v, r);
   _SHA512I(u);
   q = _CONCAT(u,
      new _UINT8ARRAY(
         v[_BUFFER],
         v[_BYTEOFFSET],
         32),
      w,
      0,
      false, _SHA512A, 128);
   _CONCAT(u,
      q,
      Message_,
      64 + Message_[_LENGTH],
      true, _SHA512A, 128);
   _MOD3(y, u);
   _MUL3(u,
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + 32,
         32),
      y, x, 32);
   _MOD3(y, u);
   _ADD3(x, y, z, 32);
   q = _SUB3(y, x, _L, 32);
   _COND3(
      new _UINT8ARRAY(
         v[_BUFFER],
         v[_BYTEOFFSET] + 32,
         32),
      q, x, y, 32);

   return (v);
   };

/* bool */ ec25519.verify_eddsa_signature = function (
      /* const char[] */Public_, /* const char[] */Message_,
      /* const char[] */Signature_) /* const */
   {
   var u = new _UINT8ARRAY(64);
   var v = new _UINT8ARRAY(
      Signature_[_BUFFER],
      Signature_[_BYTEOFFSET] + 32,
      32);
   var w = new _UINT8ARRAY(32);
   var x = [[], [], [], []];
   var y = [[], [], [], []];
   var z;
   var r;

   r = _SUB3(w, v, _L, 32) ^ 0x1;
   r |= _DEC(y, Public_);
   _SHA512I(u);
   z = _CONCAT(u,
      new _UINT8ARRAY(
         Signature_[_BUFFER],
         Signature_[_BYTEOFFSET],
         32),
      Public_,
      0,
      false, _SHA512A, 128);
   _CONCAT(u,
      z,
      Message_,
      64 + Message_[_LENGTH],
      true, _SHA512A, 128);
   _MOD3(u, u);
   _SUB(y[0], _ZERO, y[0]);
   _SUB(y[3], _ZERO, y[3]);
   _MUL2(x, v, _B);
   _MUL2(y, u, y);
   _ADD2(y, x, y);
   _ENC(w, y);
   r |= _NEQ3(w, Signature_, 32);

   return (r === 0);
   };

})(ec25519);



/* EOF */