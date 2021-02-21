/*
 * 1.0.100.0
 * COPYRIGHT (c) 2021 mScroll
 *
 * MIT License
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
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
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */



/* namespace */ var p751 = {};

(function (p751){

"use strict";

var _WINDOW = window;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _LENGTH = "length";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _GETRANDOMVALUES = "getRandomValues";

var _STD = std;
var _STD_HTML = _STD.html;
var _MSIE_VERSION = _STD_HTML.msie_version;
var _MS_EDGE = _STD_HTML.ms_edge;

var _CRYPTO =
   _MS_EDGE || _MSIE_VERSION === 0 ?
      _WINDOW.crypto
   :
      _WINDOW.msCrypto;

var _P;
var _P1;
var _P2;
var _P4;
var _PS;
var _PM;
var _MO;
var _M2;
var _ONE;
var _GEN_A;
var _GEN_B;
var _STR_A;
var _STR_B;
var _WORD;
var _CHAR;
var _INIT;
var _CPY;
var _ADD;
var _SUB;
var _ADDM;
var _SUBM;
var _NEG;
var _DSUB;
var _MSUB;
var _MUL;
var _MR;
var _DIV;
var _MOD;
var _INV;
var _BASIS;
var _CPY1;
var _CPY2;
var _ADD1;
var _ADD2;
var _SUB2;
var _ADDM2;
var _SUBM2;
var _SQR2;
var _MUL2;
var _DIV2;
var _INV2;
var _SWAP;
var _LADDER;
var _E4N;
var _GET4;
var _EVAL4;
var _E3N;
var _GET3;
var _EVAL3;
var _INV3;
var _ENC;
var _DEC;
var _GET_A;
var _J_INV;

/* private: */

/* static const size_t[] */ _P =
   [
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xEEAF,
   0x78A8, 0x49F8, 0x9685, 0xE3EC, 0xCC76, 0x13F7, 0x9B1A, 0xDA95,
   0xE876, 0xD6EB, 0x9867, 0x084E, 0x5748, 0x5CB2, 0xB504, 0x8562,
   0xDC66, 0x97BA, 0x909F, 0x0E12, 0xF71C, 0xD541, 0x6FE5, 0x0000
   ];
/* static const size_t[] */ _P1 =
   [
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xEEB0,
   0x78A8, 0x49F8, 0x9685, 0xE3EC, 0xCC76, 0x13F7, 0x9B1A, 0xDA95,
   0xE876, 0xD6EB, 0x9867, 0x084E, 0x5748, 0x5CB2, 0xB504, 0x8562,
   0xDC66, 0x97BA, 0x909F, 0x0E12, 0xF71C, 0xD541, 0x6FE5, 0x0000
   ];
/* static const size_t[] */ _P2 =
   [
   0xFFFE, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xDD5F,
   0xF151, 0x93F0, 0x2D0A, 0xC7D9, 0x98ED, 0x27EF, 0x3634, 0xB52B,
   0xD0ED, 0xADD7, 0x30CF, 0x109D, 0xAE90, 0xB964, 0x6A08, 0x0AC5,
   0xB8CD, 0x2F75, 0x213F, 0x1C25, 0xEE38, 0xAA83, 0xDFCB, 0x0000
   ];
/* static const size_t[] */ _P4 =
   [
   0xFFFC, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF,
   0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xBABF,
   0xE2A3, 0x27E1, 0x5A15, 0x8FB2, 0x31DB, 0x4FDF, 0x6C68, 0x6A56,
   0xA1DB, 0x5BAF, 0x619F, 0x213A, 0x5D20, 0x72C9, 0xD411, 0x158A,
   0x719A, 0x5EEB, 0x427E, 0x384A, 0xDC70, 0x5507, 0xBF97, 0x0001
   ];
/* static const size_t[] */ _PS =
   [
   0,
   5, 7, 6, 2, 10, 4, 6, 9, 8, 5, 9, 4, 7, 5, 5, 4, 8, 3, 9, 5,
   5, 4, 10, 4, 6, 6, 6, 5, 8, 9, 3, 4, 9, 4, 5, 6, 6, 2, 9, 4,
   5, 5, 5, 7, 7, 9, 4, 6, 4, 8, 5, 8, 6, 6, 2, 9, 7, 4, 8, 8,
   8, 4, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2
   ];
/* static const size_t[] */ _PM =
   [
   27,
   31, 23, 21, 1, 31, 7, 7, 7, 9, 9, 19, 15, 23, 23, 11, 7, 25, 5, 21, 17,
   11, 5, 17, 7, 11, 9, 23, 9, 1, 19, 5, 3, 25, 15, 11, 29, 31, 1, 29, 11,
   13, 9, 11, 27, 13, 19, 15, 31, 3, 29, 23, 31, 25, 11, 1, 21, 19, 15, 15, 21,
   29, 13, 23, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
   31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
   31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
   31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 3
   ];
/* static const size_t[] */ _MO =
   [
   0x49AD, 0x0002, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x8310,
   0x6C66, 0x375C, 0xB1E4, 0x5527, 0x24D0, 0x3F4F, 0x97BF, 0x6977,
   0x4E2E, 0xAC5C, 0xB7B2, 0xC89D, 0x6956, 0xD207, 0xB439, 0x4CA4,
   0xC7E9, 0x7512, 0x926C, 0x10F7, 0xE5E2, 0x24BC, 0x2D5B, 0x0000
   ];
/* static const size_t[] */ _M2 =
   [
   0x4058, 0x9DAD, 0x4644, 0x2330, 0x452A, 0xA696, 0x0161, 0xDB01,
   0xFD8E, 0x72E3, 0x9414, 0x5E36, 0xE706, 0x82A2, 0xFE20, 0xF40B,
   0x8751, 0x904F, 0xCCA8, 0x4932, 0xFC81, 0x1EE7, 0x5F1F, 0x1F73,
   0x8E18, 0xC104, 0x4D80, 0xA24F, 0x07C5, 0xCDB6, 0x383C, 0xB56C,
   0x9C90, 0x735F, 0xD47B, 0x441D, 0xC82A, 0x6A6A, 0xED2C, 0x5673,
   0x294B, 0x1132, 0x0526, 0x06C9, 0x1F35, 0x830F, 0x41AD, 0x0000
   ];
/* static const size_t[] */ _ONE =
   [
   0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
   ];
/* static const size_t[] */ _GEN_A =
   [
   0xBAA8, 0x4000, 0x46B7, 0x884F, 0xEC20, 0x939D, 0x630F, 0xBA52,
   0xA04D, 0xA714, 0xB97B, 0xC16F, 0xB3DB, 0x5B1A, 0x3674, 0x0825,
   0x9E82, 0x446F, 0x157F, 0x1117, 0x8490, 0x1A01, 0x7D62, 0xD2F2,
   0x4BCD, 0x3D54, 0xAB52, 0x6B24, 0x5C94, 0x2EA8, 0xD6AA, 0x9307,
   0xF20F, 0x9528, 0x9672, 0xE1A0, 0x255C, 0x68F3, 0x46F8, 0x8964,
   0xF8A5, 0xB1BF, 0xD996, 0x2401, 0x5C0A, 0x786A, 0x0EF8, 0x0000,
   0x9394, 0x96F5, 0x8B3B, 0xAEB7, 0x0B74, 0x29C9, 0x681E, 0xAB26,
   0xACF1, 0xFDC4, 0xAC30, 0xE520, 0x111B, 0xA4B8, 0xAAE3, 0x870A,
   0x4EFF, 0x38D6, 0xBDB7, 0xF875, 0xD6BC, 0xCD7E, 0x9A7E, 0x5010,
   0x56FB, 0xFF0C, 0x4848, 0x4CC6, 0x02C9, 0x5191, 0xCB6C, 0xE617,
   0xE609, 0x5921, 0xB383, 0x9C74, 0x7146, 0xA35A, 0xDAE4, 0xC91D,
   0x9129, 0x5C1B, 0x2A15, 0x7FC8, 0x80B3, 0xA6B9, 0x214F, 0x0000,
   0x8CA9, 0x680A, 0xCC38, 0x0F93, 0xFED7, 0x22E7, 0x7338, 0x762E,
   0xDB67, 0xAC0A, 0xF005, 0xE549, 0xA4ED, 0x2C43, 0x1FDD, 0x94A7,
   0x21C5, 0xB047, 0x45C2, 0xD486, 0xA4DC, 0x4D4C, 0xA1FE, 0x432D,
   0x80E8, 0xAA7A, 0x655F, 0xBC99, 0x4823, 0xBCFD, 0xD502, 0xB2C6,
   0x8BDB, 0xA2EC, 0xF40C, 0xEE92, 0xD16C, 0xEFB6, 0x4132, 0x7B07,
   0x7633, 0xA38A, 0xB46F, 0x3340, 0x7F6C, 0x4965, 0x2157, 0x0000,
   0x9F4C, 0xF307, 0x375B, 0xECFF, 0x0EF3, 0x43E8, 0x74B0, 0xFBFE,
   0x7AD1, 0x3C5C, 0x6CBE, 0x1737, 0xDBF2, 0xE29C, 0x27A7, 0xC063,
   0xF3D4, 0x438B, 0x649C, 0x2111, 0x2E97, 0x61BA, 0x2982, 0xC1F9,
   0xD1C2, 0x69CF, 0xECE8, 0x1F9F, 0x6D62, 0xC934, 0x9B4F, 0x01A3,
   0x3C9F, 0xE82A, 0xD1D3, 0x147C, 0x33EE, 0x49E5, 0xE9D2, 0xDE84,
   0x578D, 0xFB7C, 0xA5AD, 0x1C48, 0x2E1D, 0xA0B8, 0x61AC, 0x0000,
   0x59F1, 0xD410, 0xC525, 0x1600, 0x83F7, 0x0A1D, 0x899A, 0xA596,
   0x3F35, 0xD2B2, 0xEED6, 0x6BFD, 0x3910, 0x70C2, 0x7072, 0x5C7E,
   0x9411, 0xE836, 0xA1A4, 0x276C, 0x25A0, 0x6029, 0x651A, 0xB193,
   0xF04A, 0x1CA1, 0x239F, 0x243D, 0x60AD, 0x4578, 0xC6DA, 0x543D,
   0x1DE9, 0x2518, 0x90F3, 0xCDA5, 0xB395, 0xDA80, 0x7ACF, 0xD3AB,
   0xDF7B, 0x80FD, 0x4685, 0x6C97, 0x4C77, 0x3E5C, 0x352A, 0x0000,
   0x3EE8, 0xD1CC, 0x4F9F, 0x9B79, 0xD23E, 0x9B2F, 0xE40A, 0xDB32,
   0x2B67, 0x42E4, 0x2A25, 0x2619, 0xBCE7, 0xA045, 0x94FC, 0xA18E,
   0xDA2D, 0x8E7C, 0x1BC3, 0x96DC, 0x7DE2, 0x5248, 0x91B7, 0x9A1D,
   0x6DA3, 0x8743, 0x7639, 0xCC63, 0x551D, 0xACCC, 0x717A, 0x1316,
   0xFE72, 0x632A, 0x68A4, 0xC4C3, 0x5710, 0x9CCD, 0xA85C, 0x4B6E,
   0xBC9A, 0x82C7, 0xCAD5, 0x7A12, 0x49BF, 0x2401, 0x1C7E, 0x0000
   ];
/* static const size_t[] */ _GEN_B =
   [
   0xF88C, 0x4015, 0x1AAF, 0x8569, 0x9631, 0xC36E, 0xC5B8, 0x7478,
   0xD6E2, 0xDE4D, 0xA185, 0x7EF2, 0x9DC7, 0x6BEB, 0xBEE4, 0x943B,
   0x2D22, 0x9879, 0xC627, 0x1A3E, 0x1D69, 0x84B3, 0xC4B0, 0x791B,
   0x17C4, 0x2CEA, 0xE652, 0x03DB, 0x5D83, 0x5D66, 0x9AA6, 0x0474,
   0x50F3, 0x5EF4, 0xB5C4, 0x3D52, 0x947D, 0x8E36, 0x1984, 0x0B42,
   0xDE27, 0x466B, 0x7070, 0xA4CF, 0xD193, 0x1FA6, 0x334B, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x1340, 0x5321, 0xB3FA, 0x8E7C, 0xEEE0, 0x7A05, 0xE54F, 0xD67C,
   0xFC38, 0xCE46, 0x2C8B, 0xFDDC, 0xDF1E, 0x3110, 0x7FAE, 0x0858,
   0x058B, 0xA22B, 0x246F, 0xD6B8, 0x5DBD, 0x905A, 0x3ACC, 0x4DAC,
   0xD3E8, 0xADCE, 0xBF2F, 0x51D0, 0x4425, 0xF648, 0x406D, 0xE5A2,
   0x71B8, 0x84F6, 0x1775, 0x907F, 0x051C, 0xCCED, 0xA2FF, 0x4738,
   0x4853, 0x177E, 0x67B4, 0x2B00, 0x8D3D, 0xAC94, 0x2806, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
   0x6D1C, 0x6D1D, 0x5701, 0xB564, 0xC491, 0x8F39, 0xCCB3, 0x03DE,
   0x9452, 0x8A55, 0x10AC, 0xDFB9, 0x4883, 0x1FF2, 0xF17D, 0xA9D0,
   0x248C, 0x515C, 0xBBAF, 0x8562, 0xB67D, 0xDB1C, 0x2A6D, 0x249B,
   0x835C, 0xFB46, 0xAF96, 0x3131, 0xC3E1, 0x8480, 0x5839, 0xE102,
   0xFAB1, 0x72D4, 0xE2B8, 0xEAB5, 0xB1DF, 0x5FAE, 0x6387, 0xB71E,
   0x7CF6, 0x1375, 0x4D4F, 0xF838, 0x9912, 0xC9B0, 0x361E, 0x0000,
   0x6EF4, 0x9ED1, 0x6789, 0x58C9, 0x2A4B, 0xDC62, 0x8376, 0x8199,
   0x2681, 0xE0B1, 0x1DCF, 0x3D1C, 0x1730, 0x953E, 0xDEBB, 0x9347,
   0xC2D7, 0x3A82, 0x344D, 0x9ABB, 0x52B2, 0x8205, 0x1BD2, 0xE488,
   0x0266, 0x23D9, 0x2479, 0x0037, 0xE5A5, 0xB157, 0x56ED, 0x2E31,
   0x23F7, 0x5068, 0x46A7, 0xF86A, 0x1CFC, 0x7B7F, 0x523A, 0x8FE5,
   0xF67B, 0x8372, 0xFFA3, 0xFA3C, 0xFFBD, 0xCE85, 0x692D, 0x0000
   ];
/* static const size_t[] */ _STR_A =
   [
   80, 48, 27, 15, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 7, 4, 2, 1, 1,
   2, 1, 1, 3, 2, 1, 1, 1, 1, 12, 7, 4, 2, 1, 1, 2, 1, 1, 3, 2, 1, 1, 1, 1,
   5, 3, 2, 1, 1, 1, 1, 2, 1, 1, 1, 21, 12, 7, 4, 2, 1, 1, 2, 1, 1, 3, 2, 1,
   1, 1, 1, 5, 3, 2, 1, 1, 1, 1, 2, 1, 1, 1, 9, 5, 3, 2, 1, 1, 1, 1, 2, 1,
   1, 1, 4, 2, 1, 1, 1, 2, 1, 1, 33, 20, 12, 7, 4, 2, 1, 1, 2, 1, 1, 3, 2, 1,
   1, 1, 1, 5, 3, 2, 1, 1, 1, 1, 2, 1, 1, 1, 8, 5, 3, 2, 1, 1, 1, 1, 2, 1,
   1, 1, 4, 2, 1, 1, 2, 1, 1, 16, 8, 4, 2, 1, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2,
   1, 1, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1
   ];
/* static const size_t[] */ _STR_B =
   [
   112, 63, 32, 16, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 8, 4, 2, 1, 1,
   2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 16, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2,
   1, 1, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 31, 16, 8, 4, 2, 1, 1,
   2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1,
   1, 15, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 7, 4, 2, 1, 1, 2, 1,
   1, 3, 2, 1, 1, 1, 1, 49, 31, 16, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1,
   1, 8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 15, 8, 4, 2, 1, 1, 2, 1,
   1, 4, 2, 1, 1, 2, 1, 1, 7, 4, 2, 1, 1, 2, 1, 1, 3, 2, 1, 1, 1, 1, 21, 12,
   8, 4, 2, 1, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1, 5, 3, 2, 1, 1, 1, 1, 2, 1,
   1, 1, 9, 5, 3, 2, 1, 1, 1, 1, 2, 1, 1, 1, 4, 2, 1, 1, 1, 2, 1, 1
   ];

/* void */ _WORD = function (/* size_t[] */A_,
      /* const char[] */Ap_,
      /* size_t */Len_)
   {
   var u = Ap_[_LENGTH] >>> 1;
   var s;
   var t;

   for (s = 0 , t = 0; s < u; ++ s , t += 2)
      {
      A_[s] = Ap_[t + 1] << 8 | Ap_[t];
      }

   if ((Ap_[_LENGTH] & 0x1) === 1)
      {
      A_[s] = Ap_[t];
      ++ s;
      }

   for (; s < Len_; ++ s)
      {
      A_[s] = 0;
      }
   };

/* void */ _CHAR = function (/* char[] */Ap_,
      /* const size_t[] */A0_)
   {
   var u = Ap_[_LENGTH] >>> 1;
   var s;
   var t;

   for (s = 0 , t = 0; t < u; s += 2 , ++ t)
      {
      Ap_[s] = A0_[t];
      Ap_[s + 1] = A0_[t] >>> 8;
      }

   if ((Ap_[_LENGTH] & 0x1) === 1)
      {
      Ap_[s] = A0_[t];
      }
   };

/* void */ _INIT = function (/* size_t[] */A_)
   {
   var s;

   for (s = 0; s < 48; ++ s)
      {
      A_[s] = 0;
      }
   };

/* void */ _CPY = function (/* size_t[] */A_,
      /* const size_t[] */A0_,
      /* size_t */Ptr_)
   {
   var s;

   for (s = 0; s < 48; ++ s , ++ Ptr_)
      {
      A_[s] = A0_[Ptr_];
      }
   };

/* void */ _ADD = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = 0;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += L_[s];
      u += R_[s];
      A_[s] = u & 0xFFFF;
      u >>>= 16;
      }
   };

/* void */ _SUB = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_,
      /* const size_t[] */F_)
   {
   var u = 0;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += L_[s];
      u += F_[s];
      u -= R_[s];
      A_[s] = u & 0xFFFF;
      u >>= 16;
      }
   };

/* void */ _ADDM = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = 0;
   var v;
   var w;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += L_[s];
      u += R_[s];
      A_[s] = u & 0xFFFF;
      u >>>= 16;
      }

   u = 0;
   w = [];

   for (s = 0; s < 48; ++ s)
      {
      u += A_[s];
      u -= _P2[s];
      w[s] = u & 0xFFFF;
      u >>= 16;
      }

   u = (u & 0x1) - 1;
   v = ~u;

   for (s = 0; s < 48; ++ s)
      {
      A_[s] = A_[s] & v | w[s] & u;
      }
   };

/* void */ _SUBM = function (/* size_t[] */A_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = 0;
   var v;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += L_[s];
      u -= R_[s];
      A_[s] = u & 0xFFFF;
      u >>= 16;
      }

   v = ~(u & 0x1) + 1;
   u = 0;

   for (s = 0; s < 48; ++ s)
      {
      u += A_[s];
      u += _P2[s] & v;
      A_[s] = u & 0xFFFF;
      u >>>= 16;
      }
   };

/* void */ _NEG = function (/* size_t[] */A_)
   {
   var u = 0;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += _P2[s];
      u -= A_[s];
      A_[s] = u & 0xFFFF;
      u >>= 16;
      }
   };

/* void */ _DSUB = function (/* size_t[] */Ad_,
      /* const size_t[] */A0d_, /* const size_t[] */A1d_)
   {
   var u = 0;
   var s;

   for (s = 0; s < 96; ++ s)
      {
      u += Ad_[s];
      u -= A0d_[s];
      u -= A1d_[s];
      Ad_[s] = u & 0xFFFF;
      u >>= 16;
      }
   };

/* void */ _MSUB = function (/* size_t[] */Ad_,
      /* const size_t[] */Ld_, /* const size_t[] */Rd_)
   {
   var u = 0;
   var v;
   var s;
   var t;

   for (s = 0; s < 96; ++ s)
      {
      u += Ld_[s];
      u -= Rd_[s];
      Ad_[s] = u & 0xFFFF;
      u >>= 16;
      }

   v = ~(u & 0x1) + 1;
   u = 0;

   for (s = 48 , t = 0; s < 96; ++ s , ++ t)
      {
      u += Ad_[s];
      u += _P[t] & v;
      Ad_[s] = u & 0xFFFF;
      u >>>= 16;
      }
   };

/* void */ _MUL = function (/* size_t[] */Ad_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   var u = 0;
   var v = 0;
   var s;
   var t;
   var r;

   for (s = 0; s < 48; ++ s)
      {
      for (t = 0; t <= s; ++ t)
         {
         u += L_[t] * R_[s - t];
         v += u >>> 16;
         u &= 0xFFFF;
         }

      Ad_[s] = u;
      u = v & 0xFFFF;
      v >>>= 16;
      }

   for (r = 1; s < 96; ++ s , ++ r)
      {
      for (t = r; t < 48; ++ t)
         {
         u += L_[t] * R_[s - t];
         v += u >>> 16;
         u &= 0xFFFF;
         }

      Ad_[s] = u;
      u = v & 0xFFFF;
      v >>>= 16;
      }
   };

/* void */ _MR = function (/* size_t[] */A_,
      /* const size_t[] */A0d_)
   {
   var u = 0;
   var v = 0;
   var w;
   var s;
   var t;
   var r;
   var q;
   var p;

   for (s = 0 , q = -23; s < 48; ++ s)
      {
      ++ q;

      for (t = 0; t < q; ++ t)
         {
         u += A_[t] * _P1[s - t];
         v += u >>> 16;
         u &= 0xFFFF;
         }

      u += A0d_[s];
      v += u >>> 16;
      A_[s] = u & 0xFFFF;
      u = v & 0xFFFF;
      v >>>= 16;
      }

   for (r = 1 , q = 25 , p = 0; s < 96; ++ s , ++ r , ++ p)
      {
      if (q < 48)
         {
         ++ q;
         }

      for (t = r; t < q; ++ t)
         {
         u += A_[t] * _P1[s - t];
         v += u >>> 16;
         u &= 0xFFFF;
         }

      u += A0d_[s];
      v += u >>> 16;
      A_[p] = u & 0xFFFF;
      u = v & 0xFFFF;
      v >>>= 16;
      }
   };

/* void */ _DIV = function (/* size_t[] */A_)
   {
   var u = 0;
   var v = ~(A_[0] & 0x1) + 1;
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += A_[s];
      u += _P[s] & v;
      A_[s] = u & 0xFFFF;
      u >>>= 16;
      }

   for (s = 0; s < 47; ++ s)
      {
      A_[s] = (A_[s + 1] << 15 | A_[s] >>> 1) & 0xFFFF;
      }

   A_[s] >>>= 1;
   };

/* void */ _MOD = function (/* size_t[] */A_)
   {
   var u = 0;
   var v;
   var w = [];
   var s;

   for (s = 0; s < 48; ++ s)
      {
      u += A_[s];
      u -= _P[s];
      w[s] = u & 0xFFFF;
      u >>= 16;
      }

   u = (u & 0x1) - 1;
   v = ~u;

   for (s = 0; s < 48; ++ s)
      {
      A_[s] = A_[s] & v | w[s] & u;
      }
   };

/* void */ _INV = function (/* size_t[] */A_)
   {
   var u = [];
   var v = [];
   var w = [];
   var s;
   var t;

   _MUL(w, A_, A_);
   _MR(v, w);
   u[0] = A_;

   for (s = 1; s < 16; ++ s)
      {
      u[s] = [];
      _MUL(w, u[s - 1], v);
      _MR(u[s], w);
      }

   _CPY(v, u[_PM[0] >>> 1], 0);

   for (s = 1; s < 138; ++ s)
      {
      for (t = 0; t < _PS[s]; ++ t)
         {
         _MUL(w, v, v);
         _MR(v, w);
         }

      _MUL(w, v, u[_PM[s] >>> 1]);
      _MR(v, w);
      }

   _MUL(w, v, v);
   _MR(v, w);
   _MUL(w, v, v);
   _MR(v, w);
   _MUL(w, v, A_);
   _MR(A_, w);
   };

/* void */ _BASIS = function (/* size_t[][] */P2_, /* size_t[][] */Q2_, /* size_t[][] */O2_,
      /* const size_t[] */Gen_)
   {
   _CPY(P2_[0], Gen_, 0);
   _CPY(P2_[1], Gen_, 48);
   _CPY(Q2_[0], Gen_, 96);
   _CPY(Q2_[1], Gen_, 144);
   _CPY(O2_[0], Gen_, 192);
   _CPY(O2_[1], Gen_, 240);
   };

/* void */ _CPY1 = function (/* size_t[][] */A2_,
      /* const size_t[] */A0_)
   {
   _CPY(A2_[0], A0_, 0);
   _INIT(A2_[1]);
   };

/* void */ _CPY2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */A0_2_)
   {
   _CPY(A2_[0], A0_2_[0], 0);
   _CPY(A2_[1], A0_2_[1], 0);
   };

/* void */ _ADD1 = function (/* size_t[][] */A2_,
      /* const size_t[] */L_, /* const size_t[] */R_)
   {
   _ADD(A2_[0], L_, R_);
   _INIT(A2_[1]);
   };

/* void */ _ADD2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */L2_, /* const size_t[][] */R2_)
   {
   _ADD(A2_[0], L2_[0], R2_[0]);
   _ADD(A2_[1], L2_[1], R2_[1]);
   };

/* void */ _SUB2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */L2_, /* const size_t[][] */R2_)
   {
   _SUB(A2_[0], L2_[0], R2_[0], _P2);
   _SUB(A2_[1], L2_[1], R2_[1], _P2);
   };

/* void */ _ADDM2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */L2_, /* const size_t[][] */R2_)
   {
   _ADDM(A2_[0], L2_[0], R2_[0]);
   _ADDM(A2_[1], L2_[1], R2_[1]);
   };

/* void */ _SUBM2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */L2_, /* const size_t[][] */R2_)
   {
   _SUBM(A2_[0], L2_[0], R2_[0]);
   _SUBM(A2_[1], L2_[1], R2_[1]);
   };

/* void */ _SQR2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */A0_2_)
   {
   var u = [];
   var v = [];
   var w = [];
   var x = [];

   _ADD(u, A0_2_[0], A0_2_[1]);
   _SUB(v, A0_2_[0], A0_2_[1], _P4);
   _ADD(w, A0_2_[0], A0_2_[0]);
   _MUL(x, u, v);
   _MR(A2_[0], x);
   _MUL(x, w, A0_2_[1]);
   _MR(A2_[1], x);
   };

/* void */ _MUL2 = function (/* size_t[][] */A2_,
      /* const size_t[][] */L2_, /* const size_t[][] */R2_)
   {
   var u = [];
   var v = [];
   var w = [];
   var x = [];
   var y = [];

   _ADD(u, L2_[0], L2_[1]);
   _ADD(v, R2_[0], R2_[1]);
   _MUL(w, L2_[0], R2_[0]);
   _MUL(x, L2_[1], R2_[1]);
   _MUL(y, u, v);
   _DSUB(y, w, x);
   _MSUB(w, w, x);
   _MR(A2_[1], y);
   _MR(A2_[0], w);
   };

/* void */ _DIV2 = function (/* size_t[][] */A2_)
   {
   _DIV(A2_[0]);
   _DIV(A2_[1]);
   };

/* void */ _INV2 = function (/* size_t[][] */A2_)
   {
   var u = [[], []];
   var v = [];

   _MUL(v, A2_[0], A2_[0]);
   _MR(u[0], v);
   _MUL(v, A2_[1], A2_[1]);
   _MR(u[1], v);
   _ADDM(u[0], u[0], u[1]);
   _INV(u[0]);
   _NEG(A2_[1]);
   _MUL(v, A2_[0], u[0]);
   _MR(A2_[0], v);
   _MUL(v, A2_[1], u[0]);
   _MR(A2_[1], v);
   };

/* void */ _SWAP = function (
      /* size_t */C_,
      /* size_t[][][] */P4_, /* size_t[][][] */Q4_)
   {
   var u = ~C_ + 1;
   var v;
   var w;
   var x = P4_[0];
   var y;
   var z = P4_[1];
   var r;
   var q = Q4_[0];
   var p;
   var o = Q4_[1];
   var s;

   w = x[0];
   x = x[1];
   y = z[0];
   z = z[1];
   r = q[0];
   q = q[1];
   p = o[0];
   o = o[1];

   for (s = 0; s < 48; ++ s)
      {
      v = u & (w[s] ^ r[s]);
      w[s] ^= v;
      r[s] ^= v;
      v = u & (x[s] ^ q[s]);
      x[s] ^= v;
      q[s] ^= v;
      v = u & (y[s] ^ p[s]);
      y[s] ^= v;
      p[s] ^= v;
      v = u & (z[s] ^ o[s]);
      z[s] ^= v;
      o[s] ^= v;
      }
   };

/* void */ _LADDER = function (/* size_t[][][] */O4_,
      /* const size_t[] */E_,
      /* size_t */Len_,
      /* const size_t[][] */P2_, /* const size_t[][] */Q2_, /* const size_t[][] */PQ2_,
      /* const size_t[][] */C_A2_)
   {
   var u;
   var v = [[], []];
   var w = [[[], []], [[], []]];
   var x = [[[], []], [[], []]];
   var y = 0;
   var z = [[], []];
   var r = [[], []];
   var q = [[], []];
   var s;

   _CPY1(v, _MO);
   _ADD2(v, v, v);
   _ADD2(v, C_A2_, v);
   _DIV2(v);
   _DIV2(v);
   _CPY2(w[0], Q2_);
   _CPY1(w[1], _MO);
   _CPY2(x[0], PQ2_);
   _CPY1(x[1], _MO);
   _CPY2(O4_[0], P2_);
   _CPY1(O4_[1], _MO);

   for (s = 0; s < Len_; ++ s)
      {
      u = E_[s >>> 4] >>> (s & 0xF) & 0x1;
      _SWAP(y ^ u, O4_, x);
      y = u;
      _ADD2(z, w[0], w[1]);
      _SUB2(r, w[0], w[1]);
      _SQR2(w[0], z);
      _SUB2(q, x[0], x[1]);
      _ADD2(x[0], x[0], x[1]);
      _MUL2(z, z, q);
      _SQR2(w[1], r);
      _MUL2(r, r, x[0]);
      _SUB2(q, w[0], w[1]);
      _MUL2(w[0], w[0], w[1]);
      _MUL2(x[0], v, q);
      _SUB2(x[1], z, r);
      _ADD2(w[1], x[0], w[1]);
      _ADD2(x[0], z, r);
      _MUL2(w[1], w[1], q);
      _SQR2(x[1], x[1]);
      _SQR2(x[0], x[0]);
      _MUL2(x[1], x[1], O4_[0]);
      _MUL2(x[0], x[0], O4_[1]);
      }

   _SWAP(u, O4_, x);
   };

/* void */ _E4N = function (/* size_t[][][] */P4_,
      /* const size_t[][] */C_A24_P2_, /* const size_t[][] */C_C24_2_,
      /* size_t */N_)
   {
   var u = [[], []];
   var v = [[], []];
   var s;

   N_ <<= 1;

   for (s = 0; s < N_; ++ s)
      {
      _SUB2(u, P4_[0], P4_[1]);
      _ADD2(v, P4_[0], P4_[1]);
      _SQR2(u, u);
      _SQR2(v, v);
      _MUL2(P4_[1], C_C24_2_, u);
      _MUL2(P4_[0], v, P4_[1]);
      _SUB2(v, v, u);
      _MUL2(u, C_A24_P2_, v);
      _ADD2(P4_[1], P4_[1], u);
      _MUL2(P4_[1], P4_[1], v);
      }
   };

/* void */ _GET4 = function (/* size_t[][] */C_A24_P2_, /* size_t[][] */C_C24_2_,
      /* size_t[][][] */Coeff4_,
      /* const size_t[][][] */P4_)
   {
   _SUB2(Coeff4_[1], P4_[0], P4_[1]);
   _ADD2(Coeff4_[2], P4_[0], P4_[1]);
   _SQR2(Coeff4_[0], P4_[1]);
   _ADD2(Coeff4_[0], Coeff4_[0], Coeff4_[0]);
   _SQR2(C_C24_2_, Coeff4_[0]);
   _ADD2(Coeff4_[0], Coeff4_[0], Coeff4_[0]);
   _SQR2(C_A24_P2_, P4_[0]);
   _ADD2(C_A24_P2_, C_A24_P2_, C_A24_P2_);
   _SQR2(C_A24_P2_, C_A24_P2_);
   };

/* void */ _EVAL4 = function (/* size_t[][][] */P4_,
      /* const size_t[][][] */Coeff4_)
   {
   var u = [[], []];
   var v = [[], []];

   _ADD2(u, P4_[0], P4_[1]);
   _SUB2(v, P4_[0], P4_[1]);
   _MUL2(P4_[0], u, Coeff4_[1]);
   _MUL2(P4_[1], v, Coeff4_[2]);
   _MUL2(u, u, v);
   _MUL2(u, Coeff4_[0], u);
   _ADD2(v, P4_[0], P4_[1]);
   _SUB2(P4_[1], P4_[0], P4_[1]);
   _SQR2(v, v);
   _SQR2(P4_[1], P4_[1]);
   _ADD2(P4_[0], v, u);
   _SUB2(u, P4_[1], u);
   _MUL2(P4_[0], P4_[0], v);
   _MUL2(P4_[1], P4_[1], u);
   };

/* void */ _E3N = function (/* size_t[][][] */P4_,
      /* const size_t[][] */C_A24_N2_, /* const size_t[][] */C_A24_P2_,
      /* size_t */N_)
   {
   var u = [[], []];
   var v = [[], []];
   var w = [[], []];
   var x = [[], []];
   var y = [[], []];
   var z = [[], []];
   var r = [[], []];
   var s;

   for (s = 0; s < N_; ++ s)
      {
      _SUB2(u, P4_[0], P4_[1]);
      _SQR2(w, u);
      _ADD2(v, P4_[0], P4_[1]);
      _SQR2(x, v);
      _ADD2(y, P4_[0], P4_[0]);
      _ADD2(u, P4_[1], P4_[1]);
      _SQR2(v, y);
      _SUB2(v, v, x);
      _SUB2(v, v, w);
      _MUL2(z, C_A24_P2_, x);
      _MUL2(x, x, z);
      _MUL2(r, C_A24_N2_, w);
      _MUL2(w, w, r);
      _SUB2(x, w, x);
      _SUB2(w, z, r);
      _MUL2(v, v, w);
      _ADDM2(w, x, v);
      _SQR2(w, w);
      _MUL2(P4_[0], y, w);
      _SUBM2(v, x, v);
      _SQR2(v, v);
      _MUL2(P4_[1], u, v);
      }
   };

/* void */ _GET3 = function (/* size_t[][] */C_A24_N2_, /* size_t[][] */C_A24_P2_,
      /* size_t[][][] */Coeff4_,
      /* const size_t[][][] */P4_)
   {
   var u = [[], []];
   var v = [[], []];
   var w = [[], []];
   var x = [[], []];
   var y = [[], []];

   _SUB2(Coeff4_[0], P4_[0], P4_[1]);
   _SQR2(u, Coeff4_[0]);
   _ADD2(Coeff4_[1], P4_[0], P4_[1]);
   _SQR2(v, Coeff4_[1]);
   _ADD2(x, P4_[0], P4_[0]);
   _SQR2(x, x);
   _SUBM2(w, x, u);
   _SUBM2(x, x, v);
   _ADD2(y, u, x);
   _ADD2(y, y, y);
   _ADD2(y, v, y);
   _MUL2(C_A24_N2_, w, y);
   _ADD2(y, v, w);
   _ADD2(y, y, y);
   _ADD2(y, u, y);
   _MUL2(C_A24_P2_, x, y);
   };

/* void */ _EVAL3 = function (/* size_t[][][] */P4_,
      /* const size_t[][][] */Coeff4_)
   {
   var u = [[], []];
   var v = [[], []];
   var w = [[], []];

   _ADD2(u, P4_[0], P4_[1]);
   _SUB2(v, P4_[0], P4_[1]);
   _MUL2(u, Coeff4_[0], u);
   _MUL2(v, Coeff4_[1], v);
   _ADD2(w, u, v);
   _SUB2(u, v, u);
   _SQR2(w, w);
   _SQR2(u, u);
   _MUL2(P4_[0], P4_[0], w);
   _MUL2(P4_[1], P4_[1], u);
   };

/* void */ _INV3 = function (/* size_t[][] */Z1_2_, /* size_t[][] */Z2_2_, /* size_t[][] */Z3_2_)
   {
   var u = [[], []];
   var v = [[], []];
   var w = [[], []];
   var x = [[], []];

   _MUL2(u, Z1_2_, Z2_2_);
   _MUL2(v, Z3_2_, u);
   _INV2(v);
   _MUL2(w, Z3_2_, v);
   _MUL2(x, w, Z2_2_);
   _MUL2(Z2_2_, w, Z1_2_);
   _MUL2(Z3_2_, u, v);
   _CPY2(Z1_2_, x);
   };

/* void */ _ENC = function (/* char[] */Ap_,
      /* const size_t[][] */A0_2_)
   {
   var u = [[], []];
   var v = [];

   _MUL(v, A0_2_[0], _ONE);
   _MR(u[0], v);
   _MOD(u[0]);
   _MUL(v, A0_2_[1], _ONE);
   _MR(u[1], v);
   _MOD(u[1]);
   _CHAR(
      new _UINT8ARRAY(
         Ap_[_BUFFER],
         Ap_[_BYTEOFFSET],
         94),
      u[0]);
   _CHAR(
      new _UINT8ARRAY(
         Ap_[_BUFFER],
         Ap_[_BYTEOFFSET] + 94,
         94),
      u[1]);
   };

/* void */ _DEC = function (/* size_t[][] */A2_,
      /* const char[] */Ap_)
   {
   var u = [];

   _WORD(
      A2_[0],
      new _UINT8ARRAY(
         Ap_[_BUFFER],
         Ap_[_BYTEOFFSET],
         94),
      48);
   _WORD(
      A2_[1],
      new _UINT8ARRAY(
         Ap_[_BUFFER],
         Ap_[_BYTEOFFSET] + 94,
         94),
      48);
   _MUL(u, A2_[0], _M2);
   _MR(A2_[0], u);
   _MUL(u, A2_[1], _M2);
   _MR(A2_[1], u);
   };

/* void */ _GET_A = function (/* size_t[][] */C_A2_,
      /* const size_t[][] */P2_, /* const size_t[][] */Q2_, /* const size_t[][] */O2_)
   {
   var u = [[], []];
   var v = [[], []];
   var w = [[], []];

   _CPY1(w, _MO);
   _ADDM2(v, P2_, Q2_);
   _MUL2(u, P2_, Q2_);
   _MUL2(C_A2_, O2_, v);
   _ADDM2(C_A2_, u, C_A2_);
   _MUL2(u, u, O2_);
   _SUBM2(C_A2_, C_A2_, w);
   _ADDM2(u, u, u);
   _ADDM2(v, v, O2_);
   _ADDM2(u, u, u);
   _SQR2(C_A2_, C_A2_);
   _INV2(u);
   _MUL2(C_A2_, C_A2_, u);
   _SUBM2(C_A2_, C_A2_, v);
   };

/* void */ _J_INV = function (/* size_t[][] */J_inv2_,
      /* const size_t[][] */C_A2_, /* const size_t[][] */C_C2_)
   {
   var u = [[], []];
   var v = [[], []];

   _SQR2(J_inv2_, C_A2_);
   _SQR2(v, C_C2_);
   _ADDM2(u, v, v);
   _SUBM2(u, J_inv2_, u);
   _SUBM2(u, u, v);
   _SUBM2(J_inv2_, u, v);
   _SQR2(v, v);
   _MUL2(J_inv2_, J_inv2_, v);
   _ADDM2(u, u, u);
   _ADDM2(u, u, u);
   _SQR2(v, u);
   _MUL2(u, u, v);
   _ADDM2(u, u, u);
   _ADDM2(u, u, u);
   _INV2(J_inv2_);
   _MUL2(J_inv2_, J_inv2_, u);
   };

/* public: */

/*
 * supersingular isogeny Diffie-Hellman (P-751)
 *
 *    p751::get_key_pair_a() const
 *       ->
 *          [0]   public_key   (char[564])
 *          [1]   private_key   (char[47])
 *
 *    p751::get_key_pair_b() const
 *       ->
 *          [0]   public_key   (char[564])
 *          [1]   private_key   (char[48])
 *
 *    p751::get_shared_secret_a(private_key, public_key2) const
 *       ->
 *          shared_secret   (char[188])
 *
 *    p751::get_shared_secret_b(private_key, public_key2) const
 *       ->
 *          shared_secret   (char[188])
 *
 *    public_key2   (char[564])
 */

/* char[][] */ p751.get_key_pair_a = function (/* void */) /* const */
   {
   var u = new _UINT8ARRAY(564);
   var v = new _UINT8ARRAY(47);
   var w = [];
   var x = [[[], []], [[], []]];
   var y = [[[], []], [[], []]];
   var z = [[[], []], [[], []]];
   var r = [[[], []], [[], []]];
   var q = [[], []];
   var p = [[], []];
   var o = [[], []];
   var l = [[[], []], [[], []], [[], []]];
   var j = [[], []];
   var i = [[], []];
   var h = [[], []];
   var g;
   var e = [];
   var f = [];
   var s;
   var t;
   var n;
   var m;

   _CRYPTO[_GETRANDOMVALUES](v);
   v[46] &= 0x0F;
   _BASIS(p, q, o, _GEN_A);
   _BASIS(x[0], y[0], z[0], _GEN_B);
   _CPY1(x[1], _MO);
   _CPY1(y[1], _MO);
   _CPY1(z[1], _MO);
   _CPY1(j, _MO);
   _ADD2(j, j, j);
   _ADD2(i, j, j);
   _ADD2(h, j, i);
   _ADD2(j, i, i);
   _WORD(w, v, 24);
   _LADDER(r, w, 372, p, q, o, h);

   for (s = 185 , t = 0 , n = 0 , m = 0;
         0 < s;
         -- s , m = e[t])
      {
      for (;
            m < s;
            m += _STR_A[n] , ++ t , ++ n)
         {
         e[t] = m;
         g = [[[], []], [[], []]];
         f[t] = g;
         _CPY2(g[0], r[0]);
         _CPY2(g[1], r[1]);
         _E4N(r, j, i, _STR_A[n]);
         }

      _GET4(j, i, l, r);

      for (g = 0; g < t; ++ g)
         {
         _EVAL4(f[g], l);
         }

      _EVAL4(x, l);
      _EVAL4(y, l);
      _EVAL4(z, l);
      -- t;
      g = f[t];
      _CPY2(r[0], g[0]);
      _CPY2(r[1], g[1]);
      }

   _GET4(j, i, l, r);
   _EVAL4(x, l);
   _EVAL4(y, l);
   _EVAL4(z, l);
   _INV3(x[1], y[1], z[1]);
   _MUL2(x[0], x[0], x[1]);
   _MUL2(y[0], y[0], y[1]);
   _MUL2(z[0], z[0], z[1]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET],
         188),
      x[0]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + 188,
         188),
      y[0]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + 376,
         188),
      z[0]);

   return ([u, v]);
   };

/* char[][] */ p751.get_key_pair_b = function (/* void */) /* const */
   {
   var u = new _UINT8ARRAY(564);
   var v = new _UINT8ARRAY(48);
   var w = [];
   var x = [[[], []], [[], []]];
   var y = [[[], []], [[], []]];
   var z = [[[], []], [[], []]];
   var r = [[[], []], [[], []]];
   var q = [[], []];
   var p = [[], []];
   var o = [[], []];
   var l = [[[], []], [[], []]];
   var j = [[], []];
   var i = [[], []];
   var h = [[], []];
   var g;
   var e = [];
   var f = [];
   var s;
   var t;
   var n;
   var m;

   _CRYPTO[_GETRANDOMVALUES](v);
   v[47] &= 0x03;
   _BASIS(p, q, o, _GEN_B);
   _BASIS(x[0], y[0], z[0], _GEN_A);
   _CPY1(x[1], _MO);
   _CPY1(y[1], _MO);
   _CPY1(z[1], _MO);
   _CPY1(j, _MO);
   _ADD2(j, j, j);
   _ADD2(i, j, j);
   _ADD2(h, j, i);
   _ADD2(j, i, i);
   _WORD(w, v, 24);
   _LADDER(r, w, 378, p, q, o, h);

   for (s = 238 , t = 0 , n = 0 , m = 0;
         0 < s;
         -- s , m = e[t])
      {
      for (;
            m < s;
            m += _STR_B[n] , ++ t , ++ n)
         {
         e[t] = m;
         g = [[[], []], [[], []]];
         f[t] = g;
         _CPY2(g[0], r[0]);
         _CPY2(g[1], r[1]);
         _E3N(r, i, j, _STR_B[n]);
         }

      _GET3(i, j, l, r);

      for (g = 0; g < t; ++ g)
         {
         _EVAL3(f[g], l);
         }

      _EVAL3(x, l);
      _EVAL3(y, l);
      _EVAL3(z, l);
      -- t;
      g = f[t];
      _CPY2(r[0], g[0]);
      _CPY2(r[1], g[1]);
      }

   _GET3(i, j, l, r);
   _EVAL3(x, l);
   _EVAL3(y, l);
   _EVAL3(z, l);
   _INV3(x[1], y[1], z[1]);
   _MUL2(x[0], x[0], x[1]);
   _MUL2(y[0], y[0], y[1]);
   _MUL2(z[0], z[0], z[1]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET],
         188),
      x[0]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + 188,
         188),
      y[0]);
   _ENC(
      new _UINT8ARRAY(
         u[_BUFFER],
         u[_BYTEOFFSET] + 376,
         188),
      z[0]);

   return ([u, v]);
   };

/* char[] */ p751.get_shared_secret_a = function (
      /* const char[] */Private_, /* const char[] */Public2_) /* const */
   {
   var u = new _UINT8ARRAY(188);
   var v;
   var w = [];
   var x = [[], []];
   var y = [[], []];
   var z = [[], []];
   var r = [[[], []], [[], []]];
   var q = [[], []];
   var p = [[], []];
   var o = [[], []];
   var l = [[[], []], [[], []], [[], []]];
   var j = [[], []];
   var i = [];
   var h = [];
   var s;
   var t;
   var g;
   var e;

   _DEC(
      x,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET],
         188));
   _DEC(
      y,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET] + 188,
         188));
   _DEC(
      z,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET] + 376,
         188));
   _GET_A(o, x, y, z);
   _ADD1(p, _MO, _MO);
   _ADD2(q, o, p);
   _ADD2(p, p, p);
   _WORD(w, Private_, 24);
   _LADDER(r, w, 372, x, y, z, o);

   for (s = 185 , t = 0 , g = 0 , e = 0;
         0 < s;
         -- s , e = i[t])
      {
      for (;
            e < s;
            e += _STR_A[g] , ++ t , ++ g)
         {
         i[t] = e;
         v = [[[], []], [[], []]];
         h[t] = v;
         _CPY2(v[0], r[0]);
         _CPY2(v[1], r[1]);
         _E4N(r, q, p, _STR_A[g]);
         }

      _GET4(q, p, l, r);

      for (v = 0; v < t; ++ v)
         {
         _EVAL4(h[v], l);
         }

      -- t;
      v = h[t];
      _CPY2(r[0], v[0]);
      _CPY2(r[1], v[1]);
      }

   _GET4(q, p, l, r);
   _ADD2(q, q, q);
   _SUBM2(q, q, p);
   _ADDM2(q, q, q);
   _J_INV(j, q, p);
   _ENC(u, j);

   return (u);
   };

/* char[] */ p751.get_shared_secret_b = function (
      /* const char[] */Private_, /* const char[] */Public2_) /* const */
   {
   var u = new _UINT8ARRAY(188);
   var v;
   var w = [];
   var x = [[], []];
   var y = [[], []];
   var z = [[], []];
   var r = [[[], []], [[], []]];
   var q = [[], []];
   var p = [[], []];
   var o = [[], []];
   var l = [[[], []], [[], []]];
   var j = [[], []];
   var i = [];
   var h = [];
   var s;
   var t;
   var g;
   var e;

   _DEC(
      x,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET],
         188));
   _DEC(
      y,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET] + 188,
         188));
   _DEC(
      z,
      new _UINT8ARRAY(
         Public2_[_BUFFER],
         Public2_[_BYTEOFFSET] + 376,
         188));
   _GET_A(o, x, y, z);
   _ADD1(p, _MO, _MO);
   _ADD2(q, o, p);
   _SUB2(p, o, p);
   _WORD(w, Private_, 24);
   _LADDER(r, w, 378, x, y, z, o);

   for (s = 238 , t = 0 , g = 0 , e = 0;
         0 < s;
         -- s , e = i[t])
      {
      for (;
            e < s;
            e += _STR_B[g] , ++ t , ++ g)
         {
         i[t] = e;
         v = [[[], []], [[], []]];
         h[t] = v;
         _CPY2(v[0], r[0]);
         _CPY2(v[1], r[1]);
         _E3N(r, p, q, _STR_B[g]);
         }

      _GET3(p, q, l, r);

      for (v = 0; v < t; ++ v)
         {
         _EVAL3(h[v], l);
         }

      -- t;
      v = h[t];
      _CPY2(r[0], v[0]);
      _CPY2(r[1], v[1]);
      }

   _GET3(p, q, l, r);
   _ADDM2(o, q, p);
   _ADDM2(o, o, o);
   _SUBM2(q, q, p);
   _J_INV(j, o, q);
   _ENC(u, j);

   return (u);
   };

})(p751);



/* EOF */