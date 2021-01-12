(function (intf){

"use strict";

var __u = {};
var __v = intf.__sjis__;
var __s;

for (__s = 0x8140; __s <= 0xFC4B; ++ __s)
   {
   if (__s in __v && (! (__v[__s] in __u) || __u[__v[__s]] >= 0xED40))
      {
      __u[__v[__s]] = __s;
      }
   }

__u[0x00A2] = 0x8191;
__u[0x00A3] = 0x8192;
__u[0x00AC] = 0x81CA;
__u[0x2014] = 0x815C;
__u[0x2016] = 0x8161;
__u[0x2212] = 0x817C;
__u[0x301C] = 0x8160;
intf.__sjis2__ = __u;
intf.sjis2 = true;

})(intf);