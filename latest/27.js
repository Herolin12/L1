(this.webpackJsonp=this.webpackJsonp||[]).push([[27],{582:function(n,u){n.exports="mu.in: GetDigit 5\nmu: { a: ExpandDimension {tensor: mu.in axis: 2} Fn: x => MaxPool { tensor: x filterSize: 2 strides: 1 } d: (Fn a) + (Fn -a) mu.out: d }\nmu.out: mu.out\n\nmu2.in: GetDigit 5\nmu2: { a: ExpandDimension {tensor: mu2.in axis: 2} Fn: x => MaxPool { tensor: x filterSize: 2 strides: 1 } d: (Fn a) + (Fn -a) mu2.out: d }\nmu2.out: mu2.out\n\nz.in: mu.in * mu2.in\nz.out: mu.out * mu2.out"}}]);