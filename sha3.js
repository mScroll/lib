/*
 * 1.0.100.0
 * COPYRIGHT (c) 2025 mScroll
 */



/* namespace */ var sha3 = {};

(function (sha3){

"use strict";

var _LENGTH = "length";

var _ROL;
var _ROR;
var _THETA_BACK;
var _THETA_FORWARD;
var _RHO_OFFSET;
var _RHO_OPERATOR;
var _PI_INDEX;
var _RC_L;
var _RC_U;
var _THETA;
var _RHO;
var _PI;
var _CHI;
var _IOTA;
var _PERMUTE;
var _KECCAK_INIT;
var _KECCAK_ABSORB;
var _KECCAK_SQUEEZE;

/* private: */

/* void */ _ROL = function (/* int[] */A_, /* size_t */O_, /* size_t */Z_)
   {
   var u;
   var v;
   var r;
   var q;

   r = O_ + 1;
   q = 32 - Z_;
   u = A_[O_] << Z_ | A_[r] >>> q;
   v = A_[r] << Z_ | A_[O_] >>> q;
   A_[O_] = u;
   A_[r] = v;
   };

/* void */ _ROR = function (/* int[] */A_, /* size_t */O_, /* size_t */Z_)
   {
   var u;
   var v;
   var r;
   var q;

   r = O_ + 1;
   q = 32 - Z_;
   u = A_[r] << q | A_[O_] >>> Z_;
   v = A_[O_] << q | A_[r] >>> Z_;
   A_[O_] = u;
   A_[r] = v;
   };

/* static const size_t[] */ _THETA_BACK = [8, 0, 2, 4, 6];
/* static const size_t[] */ _THETA_FORWARD = [2, 4, 6, 8, 0];
/* static const size_t[] */ _RHO_OFFSET =
   [
   1, 2, 28, 27, 28, 20,
   6, 9, 20, 3, 10, 21,
   25, 25, 23, 19, 15, 21,
   8, 18, 2, 3, 8, 14
   ];
/* static const void (*)(int[], size_t, size_t) */ _RHO_OPERATOR =
   [
   _ROL, _ROR, _ROL, _ROL, _ROR, _ROR,
   _ROL, _ROR, _ROL, _ROL, _ROL, _ROR,
   _ROL, _ROR, _ROR, _ROR, _ROL, _ROL,
   _ROL, _ROL, _ROL, _ROR, _ROR, _ROL
   ];
/* static const size_t[] */ _PI_INDEX =
   [
   2, 12, 18, 44, 28, 40,
   4, 24, 26, 38, 46, 30,
   8, 48, 42, 16, 32, 10,
   6, 36, 34, 22, 14, 20
   ];
/* static const int[] */ _RC_L =
   [
   0x00000001, 0x00008082, 0x0000808A, 0x80008000, 0x0000808B, 0x80000001,
   0x80008081, 0x00008009, 0x0000008A, 0x00000088, 0x80008009, 0x8000000A,
   0x8000808B, 0x0000008B, 0x00008089, 0x00008003, 0x00008002, 0x00000080,
   0x0000800A, 0x8000000A, 0x80008081, 0x00008080, 0x80000001, 0x80008008
   ];
/* static const int[] */ _RC_U =
   [
   0x00000000, 0x00000000, 0x80000000, 0x80000000, 0x00000000, 0x00000000,
   0x80000000, 0x80000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
   0x00000000, 0x80000000, 0x80000000, 0x80000000, 0x80000000, 0x80000000,
   0x00000000, 0x80000000, 0x80000000, 0x80000000, 0x00000000, 0x80000000
   ];

/* void */ _THETA = function (/* int[] */S_,
      /* int[] */T1_, /* int[] */T2_)
   {
   var s;
   var t;
   var r;

   for (s = 0 , r = 1; s < 10; s += 2 , r += 2)
      {
      T1_[s] = S_[s];
      T1_[r] = S_[r];

      for (t = 10; t < 50; t += 10)
         {
         T1_[s] ^= S_[t + s];
         T1_[r] ^= S_[t + r];
         }
      }

   for (s = 0 , r = 0; s < 10; s += 2 , ++ r)
      {
      T2_[s] = T1_[_THETA_BACK[r]];
      T2_[s + 1] = T1_[_THETA_BACK[r] + 1];
      }

   for (s = 0 , r = 0; s < 10; s += 2 , ++ r)
      {
      _ROL(T1_, _THETA_FORWARD[r], 1);
      T2_[s] ^= T1_[_THETA_FORWARD[r]];
      T2_[s + 1] ^= T1_[_THETA_FORWARD[r] + 1];
      }

   for (s = 0 , r = 1; s < 10; s += 2 , r += 2)
      {
      for (t = 0; t < 50; t += 10)
         {
         S_[t + s] ^= T2_[s];
         S_[t + r] ^= T2_[r];
         }
      }
   };

/* void */ _RHO = function (/* int[] */S_)
   {
   var s;
   var r;

   for (s = 0 , r = 2; s < 24; ++ s , r += 2)
      {
      _RHO_OPERATOR[s](S_, r, _RHO_OFFSET[s]);
      }
   };

/* void */ _PI = function (/* int[] */S_)
   {
   var u;
   var v;
   var s;
   var r;

   u = S_[_PI_INDEX[0]];
   v = S_[_PI_INDEX[0] + 1];

   for (s = 0 , r = 1; s < 23; ++ s , ++ r)
      {
      S_[_PI_INDEX[s]] = S_[_PI_INDEX[r]];
      S_[_PI_INDEX[s] + 1] = S_[_PI_INDEX[r] + 1];
      }

   S_[_PI_INDEX[23]] = u;
   S_[_PI_INDEX[23] + 1] = v;
   };

/* void */ _CHI = function (/* int[] */S_)
   {
   var u;
   var v;
   var w;
   var x;
   var s;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;

   for (s = 0 , r = 1 , q = 2 , p = 3 , o = 4 ,
            l = 5 , j = 6 , i = 7 , h = 8 , g = 9;
         s < 50;
         s += 10 , r += 10 , q += 10 , p += 10 , o += 10 ,
            l += 10 , j += 10 , i += 10 , h += 10 , g += 10)
      {
      u = S_[s];
      v = S_[r];
      w = S_[q];
      x = S_[p];
      S_[s] ^= ~w & S_[o];
      S_[r] ^= ~x & S_[l];
      S_[q] ^= ~S_[o] & S_[j];
      S_[p] ^= ~S_[l] & S_[i];
      S_[o] ^= ~S_[j] & S_[h];
      S_[l] ^= ~S_[i] & S_[g];
      S_[j] ^= ~S_[h] & u;
      S_[i] ^= ~S_[g] & v;
      S_[h] ^= ~u & w;
      S_[g] ^= ~v & x;
      }
   };

/* void */ _IOTA = function (/* int[] */S_, /* size_t */N_)
   {
   S_[0] ^= _RC_L[N_];
   S_[1] ^= _RC_U[N_];
   };

/* void */ _PERMUTE = function (/* int[] */S_,
      /* int[] */T1_, /* int[] */T2_)
   {
   var s;

   for (s = 0; s < 24; ++ s)
      {
      _THETA(S_, T1_, T2_);
      _RHO(S_);
      _PI(S_);
      _CHI(S_);
      _IOTA(S_, s);
      }
   };

/* void */ _KECCAK_INIT = function (/* int[] */S_)
   {
   var s;

   for (s = 0; s < 50; ++ s)
      {
      S_[s] = 0;
      }
   };

/* size_t */ _KECCAK_ABSORB = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* size_t */R_, /* char */P_, /* bool */F_)
   {
   var u;
   var v;
   var s;

   u = [];
   v = [];

   for (s = 0; s < M_[_LENGTH]; ++ s)
      {
      S_[E_ >>> 2] ^= M_[s] << (E_ << 3 & 0x18);
      ++ E_;

      if (E_ === R_)
         {
         _PERMUTE(S_, u, v);
         E_ = 0;
         }
      }

   if (! F_)
      {
      return (E_);
      }

   S_[E_ >>> 2] ^= P_ << (E_ << 3 & 0x18);
   -- R_;
   S_[R_ >>> 2] ^= 0x80 << (R_ << 3 & 0x18);
   _PERMUTE(S_, u, v);

   return (0);
   };

/* size_t */ _KECCAK_SQUEEZE = function (/* int[] */S_, /* char[] */D_,
      /* size_t */E_, /* size_t */R_)
   {
   var u;
   var v;
   var s;

   u = [];
   v = [];

   for (s = 0; s < D_[_LENGTH]; ++ s)
      {
      D_[s] = S_[E_ >>> 2] >>> (E_ << 3 & 0x18);
      ++ E_;

      if (E_ === R_)
         {
         _PERMUTE(S_, u, v);
         E_ = 0;
         }
      }

   return (E_);
   };

/* public: */

/*
 * Secure Hash Algorithm-3 (SHA-3)
 *
 *    sha3::sha3_224::
 *    sha3::sha3_256::
 *    sha3::sha3_384::
 *    sha3::sha3_512::
 *
 *       init(state)
 *
 *       absorb(state, message, epsilon, final)
 *          ->
 *             epsilon   (size_t)      buffered length
 *
 *       squeeze(state, digest)
 *
 *    state   (int[])
 *
 *    message   (char[])
 *
 *    final   (bool)
 *
 *    digest   (char[])
 *       : char[28]      sha3::sha3_224
 *       : char[32]      sha3::sha3_256
 *       : char[48]      sha3::sha3_384
 *       : char[64]      sha3::sha3_512
 */

/* namespace */ sha3.sha3_224 = {};

/* void */ sha3.sha3_224.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.sha3_224.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 144, 0x06, F_));
   };

/* void */ sha3.sha3_224.squeeze = function (/* int[] */S_, /* char[] */D_)
   {
   _KECCAK_SQUEEZE(S_, D_, 0, 144);
   };

/* namespace */ sha3.sha3_256 = {};

/* void */ sha3.sha3_256.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.sha3_256.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 136, 0x06, F_));
   };

/* void */ sha3.sha3_256.squeeze = function (/* int[] */S_, /* char[] */D_)
   {
   _KECCAK_SQUEEZE(S_, D_, 0, 136);
   };

/* namespace */ sha3.sha3_384 = {};

/* void */ sha3.sha3_384.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.sha3_384.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 104, 0x06, F_));
   };

/* void */ sha3.sha3_384.squeeze = function (/* int[] */S_, /* char[] */D_)
   {
   _KECCAK_SQUEEZE(S_, D_, 0, 104);
   };

/* namespace */ sha3.sha3_512 = {};

/* void */ sha3.sha3_512.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.sha3_512.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 72, 0x06, F_));
   };

/* void */ sha3.sha3_512.squeeze = function (/* int[] */S_, /* char[] */D_)
   {
   _KECCAK_SQUEEZE(S_, D_, 0, 72);
   };

/*
 * Secure Hash Algorithm KECCAK (SHAKE)
 *
 *    sha3::shake128::
 *    sha3::shake256::
 *
 *       init(state)
 *
 *       absorb(state, message, epsilon, final)
 *          ->
 *             epsilon   (size_t)      buffered length
 *
 *       squeeze(state, digest, epsilon)
 *          ->
 *             epsilon   (size_t)      extracted length
 *
 *    state   (int[])
 *    message   (char[])
 *    final   (bool)
 *    digest   (char[])
 */

/* namespace */ sha3.shake128 = {};

/* void */ sha3.shake128.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.shake128.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 168, 0x1F, F_));
   };

/* size_t */ sha3.shake128.squeeze = function (/* int[] */S_, /* char[] */D_,
      /* size_t */E_)
   {
   return (_KECCAK_SQUEEZE(S_, D_, E_, 168));
   };

/* namespace */ sha3.shake256 = {};

/* void */ sha3.shake256.init = function (/* int[] */S_)
   {
   _KECCAK_INIT(S_);
   };

/* size_t */ sha3.shake256.absorb = function (/* int[] */S_, /* const char[] */M_,
      /* size_t */E_, /* bool */F_)
   {
   return (_KECCAK_ABSORB(S_, M_, E_, 136, 0x1F, F_));
   };

/* size_t */ sha3.shake256.squeeze = function (/* int[] */S_, /* char[] */D_,
      /* size_t */E_)
   {
   return (_KECCAK_SQUEEZE(S_, D_, E_, 136));
   };

})(sha3);



/* EOF */