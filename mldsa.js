/*
 * 1.0.100.0
 * COPYRIGHT (c) 2025 mScroll
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



/* namespace */ var mldsa = {};

(function (mldsa){

"use strict";

var _WINDOW = window;
var _UINT8ARRAY = _WINDOW.Uint8Array;
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

var _SHA3 = sha3;
var _SHAKE128 = _SHA3.shake128;
var _SHAKE128_INIT = _SHAKE128.init;
var _SHAKE128_ABSORB = _SHAKE128.absorb;
var _SHAKE128_SQUEEZE = _SHAKE128.squeeze;
var _SHAKE256 = _SHA3.shake256;
var _SHAKE256_INIT = _SHAKE256.init;
var _SHAKE256_ABSORB = _SHAKE256.absorb;
var _SHAKE256_SQUEEZE = _SHAKE256.squeeze;

var _Q;
var _Q_L;
var _Q_U;
var _Q_INV_L;
var _Q_INV_U;
var _Q_1;
var _MR;
var _MUL;
var _ADD;
var _SUB;
var _POLY_DEGREE;
var _POLY_DEGREE_1;
var _POLY_DEGREE_HALF;
var _POLY_DEGREE_LOG2;
var _ZETA_R;
var _MINUS_ZETA_R;
var _F_R;
var _PMUL1;
var _PMUL;
var _PADD;
var _PSUB;
var _VCOPY;
var _VZERO;
var _VADD;
var _VSUB;
var _VMUL1;
var _VMUL;
var _MMUL;
var _NTT;
var _NTT_INV;
var _D;
var _P2D;
var _P2D_1;
var _P2D_HALF;
var _Q_1_HALF;
var _Q_1_LOG2_D;
var _P2D_R;
var _R2;
var _POLY_DEGREE_D8_LOG2;
var _K;
var _L;
var _LK;
var _K_POLY_DEGREE;
var _POLY_DEGREE_TAU;
var _GAMMA1;
var _GAMMA1_2_LOG2;
var _GAMMA1_2_LOG2_POLY_DEGREE_D8;
var _GAMMA1_BETA;
var _GAMMA2;
var _GAMMA2_A1;
var _GAMMA2_2;
var _GAMMA2_2D128_INV_P224;
var _GAMMA2_2_INV_Q_1;
var _GAMMA2_2_INV_Q_1_1;
var _GAMMA2_2_INV_Q_1_LOG2;
var _GAMMA2_BETA;
var _ETA;
var _ETA_LENGTH;
var _OMEGA;
var _LAMBDA_D4;
var _KAPPA_BOUND;
var _PK_LENGTH;
var _S2_OFFSET;
var _T0_OFFSET;
var _SK_LENGTH;
var _W1_LENGTH;
var _Z_OFFSET;
var _H_OFFSET;
var _SIG_LENGTH;
var _COPY;
var _EQUAL;
var _POLY_ENCODE;
var _POLY_DECODE;
var _VECTOR_ENCODE;
var _VECTOR_DECODE;
var _INFINITY_NORM;
var _REJ_NTT_POLY;
var _EXPAND_A;
var _REJ_BOUNDED_POLY;
var _EXPAND_S;
var _SAMPLE_IN_BALL;
var _EXPAND_MASK;
var _POWER2ROUND;
var _HIGH_BITS;
var _LOW_BITS;
var _MAKE_HINT;
var _USE_HINT;
var _HINT_BIT_PACK;
var _HINT_BIT_UNPACK;
var _PK_ENCODE;
var _PK_DECODE;
var _SK_ENCODE;
var _SK_DECODE;
var _SIG_ENCODE;
var _SIG_DECODE;
var _KEYGEN_EX;
var _SIGN_EX;
var _VERIFY_EX;

/* private: */

/* static const size_t */ _Q = 8380417;
/* static const size_t */ _Q_L = 57345;
/* static const size_t */ _Q_U = 127;
/* static const size_t */ _Q_INV_L = 8193;
/* static const size_t */ _Q_INV_U = 896;
/* static const size_t */ _Q_1 = 8380416;

/* size_t */ _MR = function (/* size_t */A0_, /* size_t */A1_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var r;

   u = A0_ & 0xFFFF;
   y = u * _Q_INV_L
      + ((u * _Q_INV_U & 0xFFFF)
      + ((A0_ >>> 16) * _Q_INV_L & 0xFFFF) << 16) >>> 0;
   u = y & 0xFFFF;
   v = y >>> 16;
   w = u * _Q_U;
   x = v * _Q_L;
   r = A1_ - (((u * _Q_L >>> 16) + (w & 0xFFFF) + (x & 0xFFFF) >>> 16)
      + (w >>> 16) + (x >>> 16)
      + v * _Q_U);

   return (r + (_Q & r >> 31));
   };

/* size_t */ _MUL = function (/* size_t */L_, /* size_t */R_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;

   u = L_ & 0xFFFF;
   v = L_ >>> 16;
   w = R_ & 0xFFFF;
   x = R_ >>> 16;
   y = u * w;
   z = u * x;
   r = v * w;
   q = (z & 0xFFFF) + (r & 0xFFFF);

   return (_MR(y + (q << 16) >>> 0,
      ((y >>> 16) + q >>> 16)
         + (z >>> 16) + (r >>> 16)
         + v * x));
   };

/* size_t */ _ADD = function (/* size_t */L_, /* size_t */R_) /* const */
   {
   var u;

   u = L_ + R_;

   return (u - (_Q & _Q_1 - u >> 31));
   };

/* size_t */ _SUB = function (/* size_t */L_, /* size_t */R_) /* const */
   {
   var u;

   u = L_ - R_;

   return (u + (_Q & u >> 31));
   };

/* static const size_t */ _POLY_DEGREE = 256;
/* static const size_t */ _POLY_DEGREE_1 = 255;
/* static const size_t */ _POLY_DEGREE_HALF = 128;
/* static const size_t */ _POLY_DEGREE_LOG2 = 8;
/* static const size_t[] */ _ZETA_R =
   [
   4193792, 25847, 5771523, 7861508, 237124, 7602457, 7504169, 466468,
   1826347, 2353451, 8021166, 6288512, 3119733, 5495562, 3111497, 2680103,
   2725464, 1024112, 7300517, 3585928, 7830929, 7260833, 2619752, 6271868,
   6262231, 4520680, 6980856, 5102745, 1757237, 8360995, 4010497, 280005,
   2706023, 95776, 3077325, 3530437, 6718724, 4788269, 5842901, 3915439,
   4519302, 5336701, 3574422, 5512770, 3539968, 8079950, 2348700, 7841118,
   6681150, 6736599, 3505694, 4558682, 3507263, 6239768, 6779997, 3699596,
   811944, 531354, 954230, 3881043, 3900724, 5823537, 2071892, 5582638,
   4450022, 6851714, 4702672, 5339162, 6927966, 3475950, 2176455, 6795196,
   7122806, 1939314, 4296819, 7380215, 5190273, 5223087, 4747489, 126922,
   3412210, 7396998, 2147896, 2715295, 5412772, 4686924, 7969390, 5903370,
   7709315, 7151892, 8357436, 7072248, 7998430, 1349076, 1852771, 6949987,
   5037034, 264944, 508951, 3097992, 44288, 7280319, 904516, 3958618,
   4656075, 8371839, 1653064, 5130689, 2389356, 8169440, 759969, 7063561,
   189548, 4827145, 3159746, 6529015, 5971092, 8202977, 1315589, 1341330,
   1285669, 6795489, 7567685, 6940675, 5361315, 4499357, 4751448, 3839961,
   2091667, 3407706, 2316500, 3817976, 5037939, 2244091, 5933984, 4817955,
   266997, 2434439, 7144689, 3513181, 4860065, 4621053, 7183191, 5187039,
   900702, 1859098, 909542, 819034, 495491, 6767243, 8337157, 7857917,
   7725090, 5257975, 2031748, 3207046, 4823422, 7855319, 7611795, 4784579,
   342297, 286988, 5942594, 4108315, 3437287, 5038140, 1735879, 203044,
   2842341, 2691481, 5790267, 1265009, 4055324, 1247620, 2486353, 1595974,
   4613401, 1250494, 2635921, 4832145, 5386378, 1869119, 1903435, 7329447,
   7047359, 1237275, 5062207, 6950192, 7929317, 1312455, 3306115, 6417775,
   7100756, 1917081, 5834105, 7005614, 1500165, 777191, 2235880, 3406031,
   7838005, 5548557, 6709241, 6533464, 5796124, 4656147, 594136, 4603424,
   6366809, 2432395, 2454455, 8215696, 1957272, 3369112, 185531, 7173032,
   5196991, 162844, 1616392, 3014001, 810149, 1652634, 4686184, 6581310,
   5341501, 3523897, 3866901, 269760, 2213111, 7404533, 1717735, 472078,
   7953734, 1723600, 6577327, 1910376, 6712985, 7276084, 8119771, 4546524,
   5441381, 6144432, 7959518, 6094090, 183443, 7403526, 1612842, 4834730,
   7826001, 3919660, 8332111, 7018208, 3937738, 1400424, 7534263, 1976782
   ];
/* static const size_t[] */ _MINUS_ZETA_R =
   [
   4186625, 8354570, 2608894, 518909, 8143293, 777960, 876248, 7913949,
   6554070, 6026966, 359251, 2091905, 5260684, 2884855, 5268920, 5700314,
   5654953, 7356305, 1079900, 4794489, 549488, 1119584, 5760665, 2108549,
   2118186, 3859737, 1399561, 3277672, 6623180, 19422, 4369920, 8100412,
   5674394, 8284641, 5303092, 4849980, 1661693, 3592148, 2537516, 4464978,
   3861115, 3043716, 4805995, 2867647, 4840449, 300467, 6031717, 539299,
   1699267, 1643818, 4874723, 3821735, 4873154, 2140649, 1600420, 4680821,
   7568473, 7849063, 7426187, 4499374, 4479693, 2556880, 6308525, 2797779,
   3930395, 1528703, 3677745, 3041255, 1452451, 4904467, 6203962, 1585221,
   1257611, 6441103, 4083598, 1000202, 3190144, 3157330, 3632928, 8253495,
   4968207, 983419, 6232521, 5665122, 2967645, 3693493, 411027, 2477047,
   671102, 1228525, 22981, 1308169, 381987, 7031341, 6527646, 1430430,
   3343383, 8115473, 7871466, 5282425, 8336129, 1100098, 7475901, 4421799,
   3724342, 8578, 6727353, 3249728, 5991061, 210977, 7620448, 1316856,
   8190869, 3553272, 5220671, 1851402, 2409325, 177440, 7064828, 7039087,
   7094748, 1584928, 812732, 1439742, 3019102, 3881060, 3628969, 4540456,
   6288750, 4972711, 6063917, 4562441, 3342478, 6136326, 2446433, 3562462,
   8113420, 5945978, 1235728, 4867236, 3520352, 3759364, 1197226, 3193378,
   7479715, 6521319, 7470875, 7561383, 7884926, 1613174, 43260, 522500,
   655327, 3122442, 6348669, 5173371, 3556995, 525098, 768622, 3595838,
   8038120, 8093429, 2437823, 4272102, 4943130, 3342277, 6644538, 8177373,
   5538076, 5688936, 2590150, 7115408, 4325093, 7132797, 5894064, 6784443,
   3767016, 7129923, 5744496, 3548272, 2994039, 6511298, 6476982, 1050970,
   1333058, 7143142, 3318210, 1430225, 451100, 7067962, 5074302, 1962642,
   1279661, 6463336, 2546312, 1374803, 6880252, 7603226, 6144537, 4974386,
   542412, 2831860, 1671176, 1846953, 2584293, 3724270, 7786281, 3776993,
   2013608, 5948022, 5925962, 164721, 6423145, 5011305, 8194886, 1207385,
   3183426, 8217573, 6764025, 5366416, 7570268, 6727783, 3694233, 1799107,
   3038916, 4856520, 4513516, 8110657, 6167306, 975884, 6662682, 7908339,
   426683, 6656817, 1803090, 6470041, 1667432, 1104333, 260646, 3833893,
   2939036, 2235985, 420899, 2286327, 8196974, 976891, 6767575, 3545687,
   554416, 4460757, 48306, 1362209, 4442679, 6979993, 846154, 6403635
   ];
/* static const size_t */ _F_R = 16382;

/* void */ _PMUL1 = function (/* size_t[] */A_, /* size_t */O_,
      /* size_t */R_)
   {
   var s;

   for (s = O_ , O_ += _POLY_DEGREE; s < O_; ++ s)
      {
      A_[s] = _MUL(R_, A_[s]);
      }
   };

/* void */ _PMUL = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_)
   {
   var s;

   for (s = O_ , O_ += _POLY_DEGREE;
         s < O_;
         ++ s , ++ O1_ , ++ O2_)
      {
      A_[s] = _MUL(L_[O1_], R_[O2_]);
      }
   };

/* void */ _PADD = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_)
   {
   var s;

   for (s = O_ , O_ += _POLY_DEGREE;
         s < O_;
         ++ s , ++ O1_ , ++ O2_)
      {
      A_[s] = _ADD(L_[O1_], R_[O2_]);
      }
   };

/* void */ _PSUB = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_)
   {
   var s;

   for (s = O_ , O_ += _POLY_DEGREE;
         s < O_;
         ++ s , ++ O1_ , ++ O2_)
      {
      A_[s] = _SUB(L_[O1_], R_[O2_]);
      }
   };

/* void */ _VCOPY = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         ++ s , ++ O2_)
      {
      A_[s] = R_[O2_];
      }
   };

/* void */ _VZERO = function (/* size_t[] */A_, /* size_t */O_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         ++ s)
      {
      A_[s] = 0;
      }
   };

/* void */ _VADD = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE , O1_ += _POLY_DEGREE , O2_ += _POLY_DEGREE)
      {
      _PADD(A_, s, L_, O1_, R_, O2_);
      }
   };

/* void */ _VSUB = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE , O1_ += _POLY_DEGREE , O2_ += _POLY_DEGREE)
      {
      _PSUB(A_, s, L_, O1_, R_, O2_);
      }
   };

/* void */ _VMUL1 = function (/* size_t[] */A_, /* size_t */O_,
      /* size_t */R_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE)
      {
      _PMUL1(A_, s, R_);
      }
   };

/* void */ _VMUL = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */N_)
   {
   var s;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE , O1_ += _POLY_DEGREE)
      {
      _PMUL(A_, s, L_, O1_, R_, O2_);
      }
   };

/* void */ _MMUL = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */N1_, /* size_t */N2_,
      /* size_t[] */B_)
   {
   var u;
   var s;
   var t;

   u = O2_ + (N2_ << _POLY_DEGREE_LOG2);
   _VZERO(A_, O_, N1_);

   for (s = O_ , O_ += N1_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE)
      {
      for (t = O2_;
            t < u;
            t += _POLY_DEGREE , O1_ += _POLY_DEGREE)
         {
         _PMUL(B_, 0, L_, O1_, R_, t);
         _PADD(A_, s, A_, s, B_, 0);
         }
      }
   };

/* void */ _NTT = function (/* size_t[] */A_, /* size_t */O_, /* size_t */N_)
   {
   var u;
   var v;
   var w;
   var s;
   var t;
   var r;
   var q;
   var p;
   var o;
   var l;

   u = O_ + (N_ << _POLY_DEGREE_LOG2);

   for (s = O_ + _POLY_DEGREE;
         O_ < u;
         O_ += _POLY_DEGREE , s += _POLY_DEGREE)
      {
      p = 1;

      for (t = _POLY_DEGREE_HALF , o = _POLY_DEGREE;
            t >= 1;
            t >>>= 1 , o >>>= 1)
         {
         for (r = O_; r < s; r += o , ++ p)
            {
            for (q = r , v = r + t , l = q + t;
                  q < v;
                  ++ q , ++ l)
               {
               w = _MUL(_ZETA_R[p], A_[l]);
               A_[l] = _SUB(A_[q], w);
               A_[q] = _ADD(A_[q], w);
               }
            }
         }
      }
   };

/* void */ _NTT_INV = function (/* size_t[] */A_, /* size_t */O_, /* size_t */N_)
   {
   var u;
   var v;
   var w;
   var s;
   var t;
   var r;
   var q;
   var p;
   var o;
   var l;

   u = O_ + (N_ << _POLY_DEGREE_LOG2);

   for (s = O_ + _POLY_DEGREE;
         O_ < u;
         s += _POLY_DEGREE)
      {
      p = _POLY_DEGREE_1;

      for (t = 1 , o = 2;
            t < _POLY_DEGREE;
            t <<= 1 , o <<= 1)
         {
         for (r = O_; r < s; r += o , -- p)
            {
            for (q = r , v = r + t , l = q + t;
                  q < v;
                  ++ q , ++ l)
               {
               w = A_[q];
               A_[q] = _ADD(w, A_[l]);
               A_[l] = _SUB(w, A_[l]);
               A_[l] = _MUL(_MINUS_ZETA_R[p], A_[l]);
               }
            }
         }

      for (; O_ < s; ++ O_)
         {
         A_[O_] = _MUL(_F_R, A_[O_]);
         }
      }
   };

/* static const size_t */ _D = 13;
/* static const size_t */ _P2D = 8192;
/* static const size_t */ _P2D_1 = 8191;
/* static const size_t */ _P2D_HALF = 4096;
/* static const size_t */ _Q_1_HALF = 4190208;
/* static const size_t */ _Q_1_LOG2_D = 10;
/* static const size_t */ _P2D_R = 4214781;
/* static const size_t */ _R2 = 2365951;
/* static const size_t */ _POLY_DEGREE_D8_LOG2 = 5;
/* static const size_t[] */ _K = [4, 6, 8];
/* static const size_t[] */ _L = [4, 5, 7];
/* static const size_t[] */ _LK = [8, 11, 15];
/* static const size_t[] */ _K_POLY_DEGREE = [1024, 1536, 2048];
/* static const size_t[] */ _POLY_DEGREE_TAU = [217, 207, 196];
/* static const size_t[] */ _GAMMA1 = [131072, 524288, 524288];
/* static const size_t[] */ _GAMMA1_2_LOG2 = [18, 20, 20];
/* static const size_t[] */ _GAMMA1_2_LOG2_POLY_DEGREE_D8 = [576, 640, 640];
/* static const size_t[] */ _GAMMA1_BETA = [130994, 524092, 524168];
/* static const size_t[] */ _GAMMA2 = [95232, 261888, 261888];
/* static const size_t[] */ _GAMMA2_A1 = [95233, 261889, 261889];
/* static const size_t[] */ _GAMMA2_2 = [190464, 523776, 523776];
/* static const size_t[] */ _GAMMA2_2D128_INV_P224 = [11275, 4100, 4100];
/* static const size_t[] */ _GAMMA2_2_INV_Q_1 = [44, 16, 16];
/* static const size_t[] */ _GAMMA2_2_INV_Q_1_1 = [43, 15, 15];
/* static const size_t[] */ _GAMMA2_2_INV_Q_1_LOG2 = [6, 4, 4];
/* static const size_t[] */ _GAMMA2_BETA = [95154, 261692, 261768];
/* static const size_t[] */ _ETA = [2, 4, 2];
/* static const size_t[] */ _ETA_LENGTH = [3, 4, 3];
/* static const size_t[] */ _OMEGA = [80, 55, 75];
/* static const size_t[] */ _LAMBDA_D4 = [32, 48, 64];
/* static const size_t[] */ _KAPPA_BOUND = [65532, 65531, 65529];
/* static const size_t[] */ _PK_LENGTH = [1312, 1952, 2592];
/* static const size_t[] */ _S2_OFFSET = [512, 768, 800];
/* static const size_t[] */ _T0_OFFSET = [896, 1536, 1568];
/* static const size_t[] */ _SK_LENGTH = [2560, 4032, 4896];
/* static const size_t[] */ _W1_LENGTH = [768, 768, 1024];
/* static const size_t[] */ _Z_OFFSET = [32, 48, 64];
/* static const size_t[] */ _H_OFFSET = [2336, 3248, 4544];
/* static const size_t[] */ _SIG_LENGTH = [2420, 3309, 4627];

/* void */ _COPY = function (/* char[] */A_, /* size_t */O_,
      /* const char[] */R_, /* size_t */O2_,
      /* size_t */Length_)
   {
   for (Length_ += O_; O_ < Length_; ++ O_ , ++ O2_)
      {
      A_[O_] = R_[O2_];
      }
   };

/* bool */ _EQUAL = function (/* const char[] */L_, /* size_t */O1_,
      /* const char[] */R_, /* size_t */O2_, /* size_t */Length_) /* const */
   {
   var u;

   u = 0;

   for (Length_ += O1_; O1_ < Length_; ++ O1_ , ++ O2_)
      {
      u |= L_[O1_] ^ R_[O2_];
      }

   return (u === 0);
   };

/* void */ _POLY_ENCODE = function (/* char[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_,
      /* size_t */Bits_, /* size_t */Bound_)
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

   u = 0;
   v = 0;
   y = -Bound_ >> 31;

   for (s = O2_ , O2_ += _POLY_DEGREE;
         s < O2_;
         ++ s)
      {
      w = Bits_;
      x = Bound_ - R_[s];
      z = R_[s] & ~y | x + (_Q & x >> 31) & y;

      for (; w > 0; )
         {
         r = 32 - v;
         q = w < r ? w : r;
         u |= (z & (1 << q) - 1) << v;
         v += q;
         z >>>= q;
         w -= q;

         if (v === 32)
            {
            A_[O_] = u;
            A_[O_ + 1] = u >>> 8;
            A_[O_ + 2] = u >>> 16;
            A_[O_ + 3] = u >>> 24;
            O_ += 4;
            u = 0;
            v = 0;
            }
         }
      }
   };

/* bool */ _POLY_DECODE = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */R_, /* size_t */O2_,
      /* size_t */Bits_, /* size_t */Bound_)
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

   u = Bound_ !== 0;
   v = Bound_ << 1;
   w = 0;
   x = 0;

   for (s = O_ , O_ += _POLY_DEGREE;
         s < O_;
         ++ s)
      {
      y = 0;
      z = 0;

      for (; z < Bits_; )
         {
         if (x === 0)
            {
            w = R_[O2_ + 3] << 24 | R_[O2_ + 2] << 16
               | R_[O2_ + 1] << 8 | R_[O2_];
            x = 32;
            O2_ += 4;
            }

         r = Bits_ - z;
         q = r < x ? r : x;
         y |= (w & (1 << q) - 1) << z;
         z += q;
         w >>>= q;
         x -= q;
         }

      if (u)
         {
         if (y >>> 0 > v)
            {
            return (false);
            }

         y = Bound_ - y;
         y += _Q & y >> 31;
         }

      A_[s] = y;
      }

   return (true);
   };

/* void */ _VECTOR_ENCODE = function (/* char[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_,
      /* size_t */Bits_, /* size_t */Bound_, /* size_t */N_)
   {
   var u;
   var s;

   u = Bits_ << _POLY_DEGREE_D8_LOG2;

   for (s = O2_ , O2_ += N_ << _POLY_DEGREE_LOG2;
         s < O2_;
         s += _POLY_DEGREE , O_ += u)
      {
      _POLY_ENCODE(A_, O_, R_, s, Bits_, Bound_);
      }
   };

/* bool */ _VECTOR_DECODE = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */R_, /* size_t */O2_,
      /* size_t */Bits_, /* size_t */Bound_, /* size_t */N_)
   {
   var u;
   var s;

   u = Bits_ << _POLY_DEGREE_D8_LOG2;

   for (s = O_ , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         s += _POLY_DEGREE , O2_ += u)
      {
      if (! _POLY_DECODE(A_, s, R_, O2_, Bits_, Bound_))
         {
         return (false);
         }
      }

   return (true);
   };

/* size_t */ _INFINITY_NORM = function (/* const size_t[] */R_, /* size_t */O_,
      /* size_t */N_) /* const */
   {
   var u;
   var v;
   var w;
   var x;
   var s;
   var r;

   u = 0;

   for (s = O_ , r = O_ + _POLY_DEGREE , O_ += N_ << _POLY_DEGREE_LOG2;
         s < O_;
         r += _POLY_DEGREE)
      {
      v = 0;

      for (; s < r; ++ s)
         {
         x = R_[s] - (_Q & _Q_1_HALF - R_[s] >> 31);
         w = x >> 31;
         x = x & ~w | -x & w;
         w = v - x >> 31;
         v = v & ~w | x & w;
         }

      w = u - v >> 31;
      u = u & ~w | v & w;
      }

   return (u);
   };

/* void */ _REJ_NTT_POLY = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */Rho_,
      /* int[] */B1_, /* char[] */B2_)
   {
   var u;
   var v;
   var s;

   _SHAKE128_INIT(B1_);
   u = _SHAKE128_ABSORB(B1_, Rho_, 0, true);
   v = _Q;

   for (s = O_ , O_ += _POLY_DEGREE; s < O_; ++ s)
      {
      for (; v >= _Q; )
         {
         u = _SHAKE128_SQUEEZE(B1_, B2_, u);
         B2_[2] &= 0x7F;
         v = B2_[2] << 16 | B2_[1] << 8 | B2_[0];
         }

      A_[s] = v;
      v = _Q;
      }
   };

/* void */ _EXPAND_A = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */Rho_, /* size_t */U_,
      /* char[] */B1_, /* int[] */B2_, /* char[] */B3_)
   {
   var s;
   var t;

   _COPY(B1_, 0, Rho_, 0, 32);

   for (s = 0; s < _K[U_]; ++ s)
      {
      for (t = 0;
            t < _L[U_];
            ++ t , O_ += _POLY_DEGREE)
         {
         B1_[32] = t;
         B1_[33] = s;
         _REJ_NTT_POLY(A_, O_, B1_, B2_, B3_);
         }
      }
   };

/* void */ _REJ_BOUNDED_POLY = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */Rho_, /* size_t */U_,
      /* int[] */B1_, /* char[] */B2_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var s;

   u = _ETA[U_] === 2;
   v = _ETA[U_] === 4;
   _SHAKE256_INIT(B1_);
   w = _SHAKE256_ABSORB(B1_, Rho_, 0, true);

   for (s = O_ , O_ += _POLY_DEGREE; s < O_; )
      {
      w = _SHAKE256_SQUEEZE(B1_, B2_, w);
      x = B2_[0] & 0xF;

      if (u && x < 15)
         {
         x = 2 - x + 5 * (x * 13 >>> 6);
         x += _Q & x >> 31;
         }
      else if (v && x < 9)
         {
         x = 4 - x;
         x += _Q & x >> 31;
         }
      else
         {
         x = _Q;
         }

      y = B2_[0] >>> 4;

      if (u && y < 15)
         {
         y = 2 - y + 5 * (y * 13 >>> 6);
         y += _Q & y >> 31;
         }
      else if (v && y < 9)
         {
         y = 4 - y;
         y += _Q & y >> 31;
         }
      else
         {
         y = _Q;
         }

      if (x !== _Q)
         {
         A_[s] = x;
         ++ s;
         }

      if (y !== _Q && s < O_)
         {
         A_[s] = y;
         ++ s;
         }
      }
   };

/* void */ _EXPAND_S = function (/* size_t[] */A1_, /* size_t */O1_,
      /* size_t[] */A2_, /* size_t */O2_, /* const char[] */Rho_, /* size_t */U_,
      /* char[] */B1_, /* int[] */B2_, /* char[] */B3_)
   {
   var s;

   B1_[65] = 0;
   _COPY(B1_, 0, Rho_, 0, 64);

   for (s = 0; s < _L[U_]; ++ s , O1_ += _POLY_DEGREE)
      {
      B1_[64] = s;
      _REJ_BOUNDED_POLY(A1_, O1_, B1_, U_, B2_, B3_);
      }

   for (;
         s < _LK[U_];
         ++ s , O2_ += _POLY_DEGREE)
      {
      B1_[64] = s;
      _REJ_BOUNDED_POLY(A2_, O2_, B1_, U_, B2_, B3_);
      }
   };

/* void */ _SAMPLE_IN_BALL = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */Rho_, /* size_t */U_,
      /* int[] */B1_, /* char[] */B2_, /* char[] */B3_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var s;
   var r;

   _VZERO(A_, O_, 1);
   _SHAKE256_INIT(B1_);
   _SHAKE256_ABSORB(B1_, Rho_, 0, true);
   u = _SHAKE256_SQUEEZE(B1_, B2_, 0);
   v = B2_[3] << 24 | B2_[2] << 16 | B2_[1] << 8 | B2_[0];
   w = B2_[7] << 24 | B2_[6] << 16 | B2_[5] << 8 | B2_[4];

   for (s = _POLY_DEGREE_TAU[U_] , r = s + O_;
         s < _POLY_DEGREE;
         ++ s , ++ r)
      {
      for (u = _SHAKE256_SQUEEZE(B1_, B3_, u);
            B3_[0] > s;
            )
         {
         u = _SHAKE256_SQUEEZE(B1_, B3_, u);
         }

      x = B3_[0] + O_;
      A_[r] = A_[x];
      y = -(v & 0x1) >> 31;
      v = w << 31 | v >>> 1;
      w >>>= 1;
      A_[x] = _Q_1 & y | 1 & ~y;
      }
   };

/* void */ _EXPAND_MASK = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */Rho_, /* size_t */Kappa_, /* size_t */U_,
      /* char[] */B1_, /* int[] */B2_, /* char[] */B3_)
   {
   var s;

   _COPY(B1_, 0, Rho_, 0, 64);

   for (s = Kappa_ , Kappa_ += _L[U_];
         s < Kappa_;
         ++ s , O_ += _POLY_DEGREE)
      {
      B1_[64] = s;
      B1_[65] = s >>> 8;
      _SHAKE256_INIT(B2_);
      _SHAKE256_ABSORB(B2_, B1_, 0, true);
      _SHAKE256_SQUEEZE(B2_, B3_, 0);
      _POLY_DECODE(A_, O_, B3_, 0,
         _GAMMA1_2_LOG2[U_], _GAMMA1[U_]);
      }
   };

/* void */ _POWER2ROUND = function (/* size_t[] */A0_, /* size_t */O1_,
      /* size_t[] */A1_, /* size_t */O2_, /* const size_t[] */R_, /* size_t */O_,
      /* size_t */U_)
   {
   var u;
   var v;
   var s;

   for (s = O_ , O_ += _K_POLY_DEGREE[U_];
         s < O_;
         ++ s , ++ O1_ , ++ O2_)
      {
      u = R_[s] & _P2D_1;
      v = u - (_P2D & _P2D_HALF - u >> 31);
      A1_[O2_] = R_[s] - v >>> _D;
      A0_[O1_] = v + (_Q & v >> 31);
      }
   };

/* void */ _HIGH_BITS = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */U_)
   {
   var u;
   var s;

   for (s = O_ , O_ += _K_POLY_DEGREE[U_];
         s < O_;
         ++ s , ++ O2_)
      {
      u = (R_[O2_] + 127 >>> 7)
         * _GAMMA2_2D128_INV_P224[U_] + 8388608 >>> 24;
      A_[s] = u & u - _GAMMA2_2_INV_Q_1[U_] >> 31;
      }
   };

/* void */ _LOW_BITS = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */U_)
   {
   var u;
   var v;
   var s;

   for (s = O_ , O_ += _K_POLY_DEGREE[U_];
         s < O_;
         ++ s , ++ O2_)
      {
      u = (R_[O2_] + 127 >>> 7)
         * _GAMMA2_2D128_INV_P224[U_] + 8388608 >>> 24;
      v = R_[O2_]
         - (u & u - _GAMMA2_2_INV_Q_1[U_] >> 31) * _GAMMA2_2[U_];
      v -= _Q & _Q_1_HALF - v >> 31;
      A_[s] = v + (_Q & v >> 31);
      }
   };

/* size_t */ _MAKE_HINT = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */L_, /* size_t */O1_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */U_,
      /* size_t[] */B1_, /* size_t[] */B2_)
   {
   var u;
   var s;
   var r;

   u = 0;
   _HIGH_BITS(B1_, 0, L_, O1_, U_);
   _HIGH_BITS(B2_, 0, R_, O2_, U_);

   for (s = O_ , r = 0 , O_ += _K_POLY_DEGREE[U_];
         s < O_;
         ++ s , ++ r)
      {
      A_[s] = 0x1 & -(B1_[r] ^ B2_[r]) >> 31;
      u += A_[s];
      }

   return (u);
   };

/* void */ _USE_HINT = function (/* size_t[] */A_, /* size_t */O_,
      /* const size_t[] */Hint_, /* size_t */O2_, /* size_t */U_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var s;

   for (s = O_ , O_ += _K_POLY_DEGREE[U_];
         s < O_;
         ++ s , ++ O2_)
      {
      u = (A_[s] + 127 >>> 7)
         * _GAMMA2_2D128_INV_P224[U_] + 8388608 >>> 24;
      u &= u - _GAMMA2_2_INV_Q_1[U_] >> 31;
      v = A_[s] - u * _GAMMA2_2[U_];
      v -= _Q & _Q_1_HALF - v >> 31;
      v += _Q & v >> 31;
      w = Hint_[O2_] - 1;
      x = v - _GAMMA2_A1[U_] >> 31;
      y = u + 1
         & -(u ^ _GAMMA2_2_INV_Q_1_1[U_]) >> 31;
      z = -(u ^ 0) >> 31;
      r = _GAMMA2_2_INV_Q_1_1[U_] & ~z
         | u - 1 & z;
      u &= w;
      w = ~w;
      y &= w & x;
      r &= w & ~x;
      A_[s] = u | y | r;
      }
   };

/* void */ _HINT_BIT_PACK = function (/* char[] */A_, /* size_t */O_,
      /* const size_t[] */R_, /* size_t */O2_, /* size_t */U_)
   {
   var u;
   var v;
   var s;
   var t;

   u = 0;
   v = O_ + _OMEGA[U_];

   for (s = 0; s < _K[U_]; ++ s , ++ v)
      {
      for (t = 0; t < _POLY_DEGREE; ++ t , ++ O2_)
         {
         if (R_[O2_] !== 0)
            {
            A_[O_] = t;
            ++ O_;
            ++ u;
            }
         }

      A_[v] = u;
      }
   };

/* bool */ _HINT_BIT_UNPACK = function (/* size_t[] */A_, /* size_t */O_,
      /* const char[] */R_, /* size_t */O2_, /* size_t */U_)
   {
   var u;
   var v;
   var w;
   var x;
   var s;

   u = 0;
   v = O2_ + _OMEGA[U_];
   w = v;
   _VZERO(A_, O_, _K[U_]);

   for (s = 0;
         s < _K[U_];
         ++ s , ++ v , O_ += _POLY_DEGREE)
      {
      if (R_[v] < u || R_[v] > _OMEGA[U_])
         {
         return (false);
         }

      for (x = O2_;
            u < R_[v];
            ++ u , ++ O2_)
         {
         if (O2_ > x && R_[O2_ - 1] >= R_[O2_])
            {
            return (false);
            }

         A_[O_ + R_[O2_]] = 1;
         }
      }

   for (; O2_ < w; ++ O2_)
      {
      if (R_[O2_] !== 0)
         {
         return (false);
         }
      }

   return (true);
   };

/* void */ _PK_ENCODE = function (/* char[] */Pk_,
      /* const char[] */Rho_, /* const size_t[] */T1_, /* size_t */U_)
   {
   _COPY(Pk_, 0, Rho_, 0, 32);
   _VECTOR_ENCODE(Pk_, 32, T1_, 0, _Q_1_LOG2_D, 0, _K[U_]);
   };

/* void */ _PK_DECODE = function (/* char[] */Rho_, /* size_t[] */T1_,
      /* const char[] */Pk_, /* size_t */U_)
   {
   _COPY(Rho_, 0, Pk_, 0, 32);
   _VECTOR_DECODE(T1_, 0, Pk_, 32, _Q_1_LOG2_D, 0, _K[U_]);
   };

/* void */ _SK_ENCODE = function (/* char[] */Sk_,
      /* const char[] */Rho_, /* const char[] */K_, /* const char[] */Tr_,
      /* const size_t[] */S1_, /* const size_t[] */S2_, /* const size_t[] */T0_,
      /* size_t */U_)
   {
   _COPY(Sk_, 0, Rho_, 0, 32);
   _COPY(Sk_, 32, K_, 0, 32);
   _COPY(Sk_, 64, Tr_, 0, 64);
   _VECTOR_ENCODE(Sk_, 128, S1_, 0,
      _ETA_LENGTH[U_], _ETA[U_], _L[U_]);
   _VECTOR_ENCODE(Sk_, _S2_OFFSET[U_], S2_, 0,
      _ETA_LENGTH[U_], _ETA[U_], _K[U_]);
   _VECTOR_ENCODE(Sk_, _T0_OFFSET[U_], T0_, 0,
      _D, _P2D_HALF, _K[U_]);
   };

/* bool */ _SK_DECODE = function (/* char[] */Rho_, /* char[] */K_,
      /* char[] */Tr_, /* size_t[] */S1_, /* size_t[] */S2_, /* size_t[] */T0_,
      /* const char[] */Sk_, /* size_t */U_)
   {
   _COPY(Rho_, 0, Sk_, 0, 32);
   _COPY(K_, 0, Sk_, 32, 32);
   _COPY(Tr_, 0, Sk_, 64, 64);

   if (! _VECTOR_DECODE(S1_, 0, Sk_, 128,
         _ETA_LENGTH[U_], _ETA[U_], _L[U_]))
      {
      return (false);
      }

   if (! _VECTOR_DECODE(S2_, 0, Sk_, _S2_OFFSET[U_],
         _ETA_LENGTH[U_], _ETA[U_], _K[U_]))
      {
      return (false);
      }

   _VECTOR_DECODE(T0_, 0, Sk_, _T0_OFFSET[U_],
      _D, _P2D_HALF, _K[U_]);

   return (true);
   };

/* void */ _SIG_ENCODE = function (/* char[] */Sigma_,
      /* const char[] */C_, /* const size_t[] */Z_, /* const size_t[] */H_,
      /* size_t */U_)
   {
   _COPY(Sigma_, 0, C_, 0, _LAMBDA_D4[U_]);
   _VECTOR_ENCODE(Sigma_, _Z_OFFSET[U_], Z_, 0,
      _GAMMA1_2_LOG2[U_], _GAMMA1[U_], _L[U_]);
   _HINT_BIT_PACK(Sigma_, _H_OFFSET[U_], H_, 0, U_);
   };

/* bool */ _SIG_DECODE = function (/* char[] */C_, /* size_t[] */Z_,
      /* size_t[] */H_,
      /* const char[] */Sigma_, /* size_t */U_)
   {
   _COPY(C_, 0, Sigma_, 0, _LAMBDA_D4[U_]);
   _VECTOR_DECODE(Z_, 0, Sigma_, _Z_OFFSET[U_],
      _GAMMA1_2_LOG2[U_], _GAMMA1[U_], _L[U_]);

   if (! _HINT_BIT_UNPACK(H_, 0, Sigma_, _H_OFFSET[U_], U_))
      {
      return (false);
      }

   return (true);
   };

/* T[] */ _KEYGEN_EX = function (/* const char[] */Xi_,
      /* size_t */U_) /* const */
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

   u = new _UINT8ARRAY(2);
   u[0] = _K[U_];
   u[1] = _L[U_];
   v = [];
   _SHAKE256_INIT(v);
   w = _SHAKE256_ABSORB(v, Xi_, 0, false);
   w = _SHAKE256_ABSORB(v, u, w, true);
   x = new _UINT8ARRAY(32);
   y = new _UINT8ARRAY(64);
   z = new _UINT8ARRAY(32);
   w = _SHAKE256_SQUEEZE(v, x, w);
   w = _SHAKE256_SQUEEZE(v, y, w);
   _SHAKE256_SQUEEZE(v, z, w);
   r = [];
   q = new _UINT8ARRAY(34);
   p = new _UINT8ARRAY(3);
   _EXPAND_A(r, 0, x, U_, q, v, p);
   o = [];
   l = [];
   j = [];
   i = [];
   h = new _UINT8ARRAY(66);
   g = new _UINT8ARRAY(1);
   _EXPAND_S(o, 0, l, 0, y, U_, h, v, g);
   _VCOPY(j, 0, o, 0, _L[U_]);
   _VCOPY(i, 0, l, 0, _K[U_]);
   _NTT(o, 0, _L[U_]);
   _NTT(l, 0, _K[U_]);
   e = [];
   f = [];
   _MMUL(e, 0, r, 0, o, 0, _K[U_], _L[U_], f);
   _VMUL1(e, 0, _R2, _K[U_]);
   _VADD(e, 0, e, 0, l, 0, _K[U_]);
   _NTT_INV(e, 0, _K[U_]);
   n = [];
   m = [];
   _POWER2ROUND(n, 0, m, 0, e, 0, U_);
   k = new _UINT8ARRAY(_PK_LENGTH[U_]);
   _PK_ENCODE(k, x, m, U_);
   d = new _UINT8ARRAY(64);
   _SHAKE256_INIT(v);
   w = _SHAKE256_ABSORB(v, k, 0, true);
   _SHAKE256_SQUEEZE(v, d, w);
   c = new _UINT8ARRAY(_SK_LENGTH[U_]);
   _SK_ENCODE(c, x, z, d, j, i, n, U_);

   return ([k, [Xi_, c]]);
   };

/* T */ _SIGN_EX = function (/* const char[] */Sk_, /* const char[] */M_,
      /* const char[] */Rnd_, /* size_t */U_) /* const */
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
   var uq;
   var up;
   var uo;
   var s;

   u = new _UINT8ARRAY(32);
   v = new _UINT8ARRAY(32);
   w = new _UINT8ARRAY(64);
   x = [];
   y = [];
   z = [];

   if (! _SK_DECODE(u, v, w, x, y, z, Sk_, U_))
      {
      return (_NULL);
      }

   _NTT(x, 0, _L[U_]);
   _NTT(y, 0, _K[U_]);
   _NTT(z, 0, _K[U_]);
   r = [];
   q = new _UINT8ARRAY(34);
   p = [];
   o = new _UINT8ARRAY(3);
   _EXPAND_A(r, 0, u, U_, q, p, o);
   l = new _UINT8ARRAY(2);
   _SHAKE256_INIT(p);
   j = _SHAKE256_ABSORB(p, w, 0, false);
   j = _SHAKE256_ABSORB(p, l, j, false);
   j = _SHAKE256_ABSORB(p, M_, j, true);
   i = new _UINT8ARRAY(64);
   _SHAKE256_SQUEEZE(p, i, j);
   _SHAKE256_INIT(p);
   j = _SHAKE256_ABSORB(p, v, 0, false);
   j = _SHAKE256_ABSORB(p, Rnd_, j, false);
   j = _SHAKE256_ABSORB(p, i, j, true);
   h = new _UINT8ARRAY(64);
   _SHAKE256_SQUEEZE(p, h, j);
   g = [];
   e = [];
   f = [];
   n = [];
   m = new _UINT8ARRAY(_W1_LENGTH[U_]);
   k = new _UINT8ARRAY(_LAMBDA_D4[U_]);
   d = [];
   c = [];
   b = [];
   a = [];
   uu = [];
   uv = [];
   uw = [];
   ux = new _UINT8ARRAY(_SIG_LENGTH[U_]);
   uy = new _UINT8ARRAY(66);
   uz = new _UINT8ARRAY(_GAMMA1_2_LOG2_POLY_DEGREE_D8[U_]);
   ur = [];
   uq = [];
   up = new _UINT8ARRAY(8);
   uo = new _UINT8ARRAY(1);
   s = 0;

   for (; s <= _KAPPA_BOUND[U_]; )
      {
      for (; ; )
         {
         _EXPAND_MASK(g, 0, h, s, U_, uy, p, uz);
         s += _L[U_];
         _VCOPY(e, 0, g, 0, _L[U_]);
         _NTT(g, 0, _L[U_]);
         _MMUL(f, 0, r, 0, g, 0, _K[U_], _L[U_], ur);
         _VMUL1(f, 0, _R2, _K[U_]);
         _NTT_INV(f, 0, _K[U_]);
         _HIGH_BITS(n, 0, f, 0, U_);
         _VECTOR_ENCODE(m, 0, n, 0, _GAMMA2_2_INV_Q_1_LOG2[U_], 0, _K[U_]);
         _SHAKE256_INIT(p);
         j = _SHAKE256_ABSORB(p, i, 0, false);
         j = _SHAKE256_ABSORB(p, m, j, true);
         _SHAKE256_SQUEEZE(p, k, j);
         _SAMPLE_IN_BALL(d, 0, k, U_, p, up, uo);
         _NTT(d, 0, 1);
         _PMUL1(d, 0, _R2);
         _VMUL(c, 0, x, 0, d, 0, _L[U_]);
         _VMUL(b, 0, y, 0, d, 0, _K[U_]);
         _NTT_INV(c, 0, _L[U_]);
         _NTT_INV(b, 0, _K[U_]);
         _VADD(a, 0, e, 0, c, 0, _L[U_]);
         _VSUB(f, 0, f, 0, b, 0, _K[U_]);
         _LOW_BITS(uu, 0, f, 0, U_);

         if (_INFINITY_NORM(a, 0, _L[U_]) >= _GAMMA1_BETA[U_]
               || _INFINITY_NORM(uu, 0, _K[U_]) >= _GAMMA2_BETA[U_])
            {
            break;
            }

         _VMUL(uv, 0, z, 0, d, 0, _K[U_]);
         _NTT_INV(uv, 0, _K[U_]);

         if (_INFINITY_NORM(uv, 0, _K[U_]) >= _GAMMA2[U_])
            {
            break;
            }

         _VADD(uv, 0, uv, 0, f, 0, _K[U_]);

         if (_MAKE_HINT(uw, 0, uv, 0, f, 0, U_, ur, uq) > _OMEGA[U_])
            {
            break;
            }

         _SIG_ENCODE(ux, k, a, uw, U_);

         return (ux);
         }
      }

   return (_NULL);
   };

/* bool */ _VERIFY_EX = function (/* const char[] */Pk_, /* const char[] */M_,
      /* const char[] */Sigma_, /* size_t */U_) /* const */
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

   u = new _UINT8ARRAY(_LAMBDA_D4[U_]);
   v = [];
   w = [];

   if (! _SIG_DECODE(u, v, w, Sigma_, U_)
         || _INFINITY_NORM(v, 0, _L[U_]) >= _GAMMA1_BETA[U_])
      {
      return (false);
      }

   x = new _UINT8ARRAY(32);
   y = [];
   _PK_DECODE(x, y, Pk_, U_);
   z = [];
   r = new _UINT8ARRAY(34);
   q = [];
   p = new _UINT8ARRAY(3);
   _EXPAND_A(z, 0, x, U_, r, q, p);
   o = new _UINT8ARRAY(64);
   _SHAKE256_INIT(q);
   l = _SHAKE256_ABSORB(q, Pk_, 0, true);
   _SHAKE256_SQUEEZE(q, o, l);
   j = new _UINT8ARRAY(2);
   _SHAKE256_INIT(q);
   l = _SHAKE256_ABSORB(q, o, 0, false);
   l = _SHAKE256_ABSORB(q, j, l, false);
   l = _SHAKE256_ABSORB(q, M_, l, true);
   i = new _UINT8ARRAY(64);
   _SHAKE256_SQUEEZE(q, i, l);
   h = [];
   g = new _UINT8ARRAY(8);
   e = new _UINT8ARRAY(1);
   _SAMPLE_IN_BALL(h, 0, u, U_, q, g, e);
   _NTT(v, 0, _L[U_]);
   _VMUL1(v, 0, _R2, _L[U_]);
   f = [];
   n = [];
   _MMUL(f, 0, z, 0, v, 0, _K[U_], _L[U_], n);
   _NTT(y, 0, _K[U_]);
   _VMUL1(y, 0, _P2D_R, _K[U_]);
   _NTT(h, 0, 1);
   _PMUL1(h, 0, _R2);
   _VMUL(y, 0, y, 0, h, 0, _K[U_]);
   m = [];
   _VSUB(m, 0, f, 0, y, 0, _K[U_]);
   _NTT_INV(m, 0, _K[U_]);
   _USE_HINT(m, 0, w, 0, U_);
   k = new _UINT8ARRAY(_W1_LENGTH[U_]);
   _VECTOR_ENCODE(k, 0, m, 0, _GAMMA2_2_INV_Q_1_LOG2[U_], 0, _K[U_]);
   _SHAKE256_INIT(q);
   l = _SHAKE256_ABSORB(q, i, 0, false);
   l = _SHAKE256_ABSORB(q, k, l, true);
   d = new _UINT8ARRAY(_LAMBDA_D4[U_]);
   _SHAKE256_SQUEEZE(q, d, l);

   if (! _EQUAL(u, 0, d, 0, _LAMBDA_D4[U_]))
      {
      return (false);
      }

   return (true);
   };

/* public: */

/*
 * Module-Lattice-Based Digital Signature Algorithm (ML-DSA)
 *
 *    mldsa::mldsa44::
 *    mldsa::mldsa65::
 *    mldsa::mldsa87::
 *
 *       _KeyGen(seed) const
 *          ->
 *             [0]   public_key   (char[])
 *             [1]   private_key
 *                [0]   seed   (char[32])
 *                [1]   expandedKey   (char[])
 *
 *       _Sign(private_key, message, random) const
 *          ->
 *             signature   (nullable char[])
 *
 *       get_mldsa_key_pair() const
 *          ->
 *             [0]   public_key   (char[])
 *             [1]   private_key
 *                [0]   seed   (char[32])
 *                [1]   expandedKey   (char[])
 *
 *       generate_mldsa_signature(
 *             private_key, message) const
 *          ->
 *             signature   (nullable char[])
 *
 *       verify_mldsa_signature(
 *             public_key, message, signature) const
 *          ->
 *             true      valid signature
 *             false      invalid signature
 *
 *    public_key   (char[])
 *       : char[1312]      mldsa::mldsa44
 *       : char[1952]      mldsa::mldsa65
 *       : char[2592]      mldsa::mldsa87
 *
 *    private_key   (T[])
 *       :
 *          [0]   nullable char[32]
 *          [1]   expandedKey
 *
 *    expandedKey   (char[])
 *       : char[2560]      mldsa::mldsa44
 *       : char[4032]      mldsa::mldsa65
 *       : char[4896]      mldsa::mldsa87
 *
 *    message   (char[])
 *
 *    random   (char[32])
 *
 *    signature   (char[])
 *       : char[2420]      mldsa::mldsa44
 *       : char[3309]      mldsa::mldsa65
 *       : char[4627]      mldsa::mldsa87
 */

/* namespace */ mldsa.mldsa44 = {};

/* T[] */ mldsa.mldsa44._KeyGen = function (/* const char[] */Xi_) /* const */
   {
   return (_KEYGEN_EX(Xi_, 0));
   };

/* T */ mldsa.mldsa44._Sign = function (/* const T[] */Sk_,
      /* const char[] */M_, /* const char[] */Rnd_) /* const */
   {
   return (_SIGN_EX(Sk_[1], M_, Rnd_, 0));
   };

/* T[] */ mldsa.mldsa44.get_mldsa_key_pair = function (/* void */) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_KEYGEN_EX(u, 0));
   };

/* T */ mldsa.mldsa44.generate_mldsa_signature = function (
      /* const T[] */Private_, /* const char[] */Message_) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_SIGN_EX(Private_[1], Message_, u, 0));
   };

/* bool */ mldsa.mldsa44.verify_mldsa_signature = function (
      /* const char[] */Public_, /* const char[] */Message_,
      /* const char[] */Signature_) /* const */
   {
   return (_VERIFY_EX(Public_, Message_, Signature_, 0));
   };

/* namespace */ mldsa.mldsa65 = {};

/* T[] */ mldsa.mldsa65._KeyGen = function (/* const char[] */Xi_) /* const */
   {
   return (_KEYGEN_EX(Xi_, 1));
   };

/* T */ mldsa.mldsa65._Sign = function (/* const T[] */Sk_,
      /* const char[] */M_, /* const char[] */Rnd_) /* const */
   {
   return (_SIGN_EX(Sk_[1], M_, Rnd_, 1));
   };

/* T[] */ mldsa.mldsa65.get_mldsa_key_pair = function (/* void */) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_KEYGEN_EX(u, 1));
   };

/* T */ mldsa.mldsa65.generate_mldsa_signature = function (
      /* const T[] */Private_, /* const char[] */Message_) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_SIGN_EX(Private_[1], Message_, u, 1));
   };

/* bool */ mldsa.mldsa65.verify_mldsa_signature = function (
      /* const char[] */Public_, /* const char[] */Message_,
      /* const char[] */Signature_) /* const */
   {
   return (_VERIFY_EX(Public_, Message_, Signature_, 1));
   };

/* namespace */ mldsa.mldsa87 = {};

/* T[] */ mldsa.mldsa87._KeyGen = function (/* const char[] */Xi_) /* const */
   {
   return (_KEYGEN_EX(Xi_, 2));
   };

/* T */ mldsa.mldsa87._Sign = function (/* const T[] */Sk_,
      /* const char[] */M_, /* const char[] */Rnd_) /* const */
   {
   return (_SIGN_EX(Sk_[1], M_, Rnd_, 2));
   };

/* T[] */ mldsa.mldsa87.get_mldsa_key_pair = function (/* void */) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_KEYGEN_EX(u, 2));
   };

/* T */ mldsa.mldsa87.generate_mldsa_signature = function (
      /* const T[] */Private_, /* const char[] */Message_) /* const */
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);

   return (_SIGN_EX(Private_[1], Message_, u, 2));
   };

/* bool */ mldsa.mldsa87.verify_mldsa_signature = function (
      /* const char[] */Public_, /* const char[] */Message_,
      /* const char[] */Signature_) /* const */
   {
   return (_VERIFY_EX(Public_, Message_, Signature_, 2));
   };

})(mldsa);



/* EOF */