"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9171],{53297:(x,d,b)=>{b.d(d,{Z:()=>e});let e=(x,d=0)=>{let b=~~d,e=0;for(let d=0;d<x.length;d++)e+=x[d];return(b+=e%256)%256}},79171:(x,d,b)=>{b.d(d,{ZP:()=>N});var e=b(53297),f=b(86300);let c=(x,d)=>f.Buffer.from(x,d);function a(x,d){let b=(x,b)=>d(c(x),b)>>>0;return b.signed=(x,b)=>d(c(x),b),b.unsigned=b,b.model=x,b}let r=a("crc1",e.Z),t=[0,7,14,9,28,27,18,21,56,63,54,49,36,35,42,45,112,119,126,121,108,107,98,101,72,79,70,65,84,83,90,93,224,231,238,233,252,251,242,245,216,223,214,209,196,195,202,205,144,151,158,153,140,139,130,133,168,175,166,161,180,179,186,189,199,192,201,206,219,220,213,210,255,248,241,246,227,228,237,234,183,176,185,190,171,172,165,162,143,136,129,134,147,148,157,154,39,32,41,46,59,60,53,50,31,24,17,22,3,4,13,10,87,80,89,94,75,76,69,66,111,104,97,102,115,116,125,122,137,142,135,128,149,146,155,156,177,182,191,184,173,170,163,164,249,254,247,240,229,226,235,236,193,198,207,200,221,218,211,212,105,110,103,96,117,114,123,124,81,86,95,88,77,74,67,68,25,30,23,16,5,2,11,12,33,38,47,40,61,58,51,52,78,73,64,71,82,85,92,91,118,113,120,127,106,109,100,99,62,57,48,55,34,37,44,43,6,1,8,15,26,29,20,19,174,169,160,167,178,181,188,187,150,145,152,159,138,141,132,131,222,217,208,215,194,197,204,203,230,225,232,239,250,253,244,243];"undefined"!=typeof Int32Array&&(t=new Int32Array(t));let n=a("crc-8",(x,d=0)=>{let b=~~d;for(let d=0;d<x.length;d++)b=255&t[(b^x[d])&255];return b}),l=[0,94,188,226,97,63,221,131,194,156,126,32,163,253,31,65,157,195,33,127,252,162,64,30,95,1,227,189,62,96,130,220,35,125,159,193,66,28,254,160,225,191,93,3,128,222,60,98,190,224,2,92,223,129,99,61,124,34,192,158,29,67,161,255,70,24,250,164,39,121,155,197,132,218,56,102,229,187,89,7,219,133,103,57,186,228,6,88,25,71,165,251,120,38,196,154,101,59,217,135,4,90,184,230,167,249,27,69,198,152,122,36,248,166,68,26,153,199,37,123,58,100,134,216,91,5,231,185,140,210,48,110,237,179,81,15,78,16,242,172,47,113,147,205,17,79,173,243,112,46,204,146,211,141,111,49,178,236,14,80,175,241,19,77,206,144,114,44,109,51,209,143,12,82,176,238,50,108,142,208,83,13,239,177,240,174,76,18,145,207,45,115,202,148,118,40,171,245,23,73,8,86,180,234,105,55,213,139,87,9,235,181,54,104,138,212,149,203,41,119,244,170,72,22,233,183,85,11,136,214,52,106,43,117,151,201,74,20,246,168,116,42,200,150,21,75,169,247,182,232,10,84,215,137,107,53];"undefined"!=typeof Int32Array&&(l=new Int32Array(l));let o=a("dallas-1-wire",(x,d=0)=>{let b=~~d;for(let d=0;d<x.length;d++)b=255&l[(b^x[d])&255];return b}),u=[0,213,127,170,254,43,129,84,41,252,86,131,215,2,168,125,82,135,45,248,172,121,211,6,123,174,4,209,133,80,250,47,164,113,219,14,90,143,37,240,141,88,242,39,115,166,12,217,246,35,137,92,8,221,119,162,223,10,160,117,33,244,94,139,157,72,226,55,99,182,28,201,180,97,203,30,74,159,53,224,207,26,176,101,49,228,78,155,230,51,153,76,24,205,103,178,57,236,70,147,199,18,184,109,16,197,111,186,238,59,145,68,107,190,20,193,149,64,234,63,66,151,61,232,188,105,195,22,239,58,144,69,17,196,110,187,198,19,185,108,56,237,71,146,189,104,194,23,67,150,60,233,148,65,235,62,106,191,21,192,75,158,52,225,181,96,202,31,98,183,29,200,156,73,227,54,25,204,102,179,231,50,152,77,48,229,79,154,206,27,177,100,114,167,13,216,140,89,243,38,91,142,36,241,165,112,218,15,32,245,95,138,222,11,161,116,9,220,118,163,247,34,136,93,214,3,169,124,40,253,87,130,255,42,128,85,1,212,126,171,132,81,251,46,122,175,5,208,173,120,210,7,83,134,44,249];"undefined"!=typeof Int32Array&&(u=new Int32Array(u));let y=a("crc-8-dvbs2",(x,d=0)=>{let b=~~d;for(let d=0;d<x.length;d++)b=255&u[(b^x[d])&255];return b}),i=[0,49345,49537,320,49921,960,640,49729,50689,1728,1920,51009,1280,50625,50305,1088,52225,3264,3456,52545,3840,53185,52865,3648,2560,51905,52097,2880,51457,2496,2176,51265,55297,6336,6528,55617,6912,56257,55937,6720,7680,57025,57217,8e3,56577,7616,7296,56385,5120,54465,54657,5440,55041,6080,5760,54849,53761,4800,4992,54081,4352,53697,53377,4160,61441,12480,12672,61761,13056,62401,62081,12864,13824,63169,63361,14144,62721,13760,13440,62529,15360,64705,64897,15680,65281,16320,16e3,65089,64001,15040,15232,64321,14592,63937,63617,14400,10240,59585,59777,10560,60161,11200,10880,59969,60929,11968,12160,61249,11520,60865,60545,11328,58369,9408,9600,58689,9984,59329,59009,9792,8704,58049,58241,9024,57601,8640,8320,57409,40961,24768,24960,41281,25344,41921,41601,25152,26112,42689,42881,26432,42241,26048,25728,42049,27648,44225,44417,27968,44801,28608,28288,44609,43521,27328,27520,43841,26880,43457,43137,26688,30720,47297,47489,31040,47873,31680,31360,47681,48641,32448,32640,48961,32e3,48577,48257,31808,46081,29888,30080,46401,30464,47041,46721,30272,29184,45761,45953,29504,45313,29120,28800,45121,20480,37057,37249,20800,37633,21440,21120,37441,38401,22208,22400,38721,21760,38337,38017,21568,39937,23744,23936,40257,24320,40897,40577,24128,23040,39617,39809,23360,39169,22976,22656,38977,34817,18624,18816,35137,19200,35777,35457,19008,19968,36545,36737,20288,36097,19904,19584,35905,17408,33985,34177,17728,34561,18368,18048,34369,33281,17088,17280,33601,16640,33217,32897,16448];"undefined"!=typeof Int32Array&&(i=new Int32Array(i));let A=a("crc-16",(x,d=0)=>{let b=~~d;for(let d=0;d<x.length;d++)b=(i[(b^x[d])&255]^b>>8)&65535;return b}),I=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920];"undefined"!=typeof Int32Array&&(I=new Int32Array(I));let g=a("ccitt",(x,d)=>{let b=void 0!==d?~~d:65535;for(let d=0;d<x.length;d++)b=(I[(b>>8^x[d])&255]^b<<8)&65535;return b}),h=[0,49345,49537,320,49921,960,640,49729,50689,1728,1920,51009,1280,50625,50305,1088,52225,3264,3456,52545,3840,53185,52865,3648,2560,51905,52097,2880,51457,2496,2176,51265,55297,6336,6528,55617,6912,56257,55937,6720,7680,57025,57217,8e3,56577,7616,7296,56385,5120,54465,54657,5440,55041,6080,5760,54849,53761,4800,4992,54081,4352,53697,53377,4160,61441,12480,12672,61761,13056,62401,62081,12864,13824,63169,63361,14144,62721,13760,13440,62529,15360,64705,64897,15680,65281,16320,16e3,65089,64001,15040,15232,64321,14592,63937,63617,14400,10240,59585,59777,10560,60161,11200,10880,59969,60929,11968,12160,61249,11520,60865,60545,11328,58369,9408,9600,58689,9984,59329,59009,9792,8704,58049,58241,9024,57601,8640,8320,57409,40961,24768,24960,41281,25344,41921,41601,25152,26112,42689,42881,26432,42241,26048,25728,42049,27648,44225,44417,27968,44801,28608,28288,44609,43521,27328,27520,43841,26880,43457,43137,26688,30720,47297,47489,31040,47873,31680,31360,47681,48641,32448,32640,48961,32e3,48577,48257,31808,46081,29888,30080,46401,30464,47041,46721,30272,29184,45761,45953,29504,45313,29120,28800,45121,20480,37057,37249,20800,37633,21440,21120,37441,38401,22208,22400,38721,21760,38337,38017,21568,39937,23744,23936,40257,24320,40897,40577,24128,23040,39617,39809,23360,39169,22976,22656,38977,34817,18624,18816,35137,19200,35777,35457,19008,19968,36545,36737,20288,36097,19904,19584,35905,17408,33985,34177,17728,34561,18368,18048,34369,33281,17088,17280,33601,16640,33217,32897,16448];"undefined"!=typeof Int32Array&&(h=new Int32Array(h));let p=a("crc-16-modbus",(x,d)=>{let b=void 0!==d?~~d:65535;for(let d=0;d<x.length;d++)b=(h[(b^x[d])&255]^b>>8)&65535;return b}),w=a("xmodem",(x,d)=>{let b=void 0!==d?~~d:0;for(let d=0;d<x.length;d++){let e=b>>>8&255;e^=255&x[d],e^=e>>>4,b=b<<8&65535^e^(e=e<<5&65535)^(e=e<<7&65535)}return b}),m=[0,4489,8978,12955,17956,22445,25910,29887,35912,40385,44890,48851,51820,56293,59774,63735,4225,264,13203,8730,22181,18220,30135,25662,40137,36160,49115,44626,56045,52068,63999,59510,8450,12427,528,5017,26406,30383,17460,21949,44362,48323,36440,40913,60270,64231,51324,55797,12675,8202,4753,792,30631,26158,21685,17724,48587,44098,40665,36688,64495,60006,55549,51572,16900,21389,24854,28831,1056,5545,10034,14011,52812,57285,60766,64727,34920,39393,43898,47859,21125,17164,29079,24606,5281,1320,14259,9786,57037,53060,64991,60502,39145,35168,48123,43634,25350,29327,16404,20893,9506,13483,1584,6073,61262,65223,52316,56789,43370,47331,35448,39921,29575,25102,20629,16668,13731,9258,5809,1848,65487,60998,56541,52564,47595,43106,39673,35696,33800,38273,42778,46739,49708,54181,57662,61623,2112,6601,11090,15067,20068,24557,28022,31999,38025,34048,47003,42514,53933,49956,61887,57398,6337,2376,15315,10842,24293,20332,32247,27774,42250,46211,34328,38801,58158,62119,49212,53685,10562,14539,2640,7129,28518,32495,19572,24061,46475,41986,38553,34576,62383,57894,53437,49460,14787,10314,6865,2904,32743,28270,23797,19836,50700,55173,58654,62615,32808,37281,41786,45747,19012,23501,26966,30943,3168,7657,12146,16123,54925,50948,62879,58390,37033,33056,46011,41522,23237,19276,31191,26718,7393,3432,16371,11898,59150,63111,50204,54677,41258,45219,33336,37809,27462,31439,18516,23005,11618,15595,3696,8185,63375,58886,54429,50452,45483,40994,37561,33584,31687,27214,22741,18780,15843,11370,7921,3960];"undefined"!=typeof Int32Array&&(m=new Int32Array(m));let s=a("kermit",(x,d)=>{let b=void 0!==d?~~d:0;for(let d=0;d<x.length;d++)b=(m[(b^x[d])&255]^b>>8)&65535;return b}),v=[0,8801531,9098509,825846,9692897,1419802,1651692,0x9f7f17,0xa18139,2608578,2839604,0xad18cf,3303384,0xb42b23,0xb8b2d5,4128302,0xc54e89,4391538,5217156,0xc9d77f,5679208,0xd0e493,0xdc7d65,5910942,6606768,0xe2834b,0xee1abd,6837830,0xf72951,7431594,8256604,0xfbb0a7,840169,9084178,8783076,18463,0x9f3708,1670131,1434117,9678590,0xad50d0,2825259,2590173,0xa1c926,4109873,0xb8faca,0xb4633c,3289031,0xc99f60,5231515,4409965,0xc50696,5929345,0xdc357a,0xd0ac8c,5693559,6823513,0xee52a2,0xe2cb54,6588335,0xfbf8b8,8238147,7417269,0xf7614e,1680338,0x9fef29,9664223,1391140,9061683,788936,36926,8838341,0xb822eb,4091408,3340262,0xb4bb1d,2868234,0xad88f1,0xa11107,2579964,0xdced5b,5939616,5650518,0xd074ad,5180346,0xc94741,0xc5deb7,4428364,8219746,0xfb2099,0xf7b96f,7468436,0xee8a83,6866552,6578062,0xe21375,1405499,9649856,0x9fa736,1698765,8819930,55329,803287,9047340,0xb4f302,3325945,4072975,0xb86af4,2561507,0xa15918,0xadc0ee,2853909,0xd03cb2,5664841,5958079,0xdca544,4446803,0xc596a8,0xc90f5e,5194661,7454091,0xf7f170,0xfb6886,8201341,0xe25b6a,6559633,6852199,0xeec29c,3360676,0xb50b5f,0xb992a9,4185682,0xa0a145,2551230,2782280,0xac38b3,9619101,1346150,1577872,0x9e5f6b,73852,8875143,9172337,899466,0xf6092d,7357910,8182816,0xfa90db,6680524,0xe3a337,0xef3ac1,6911546,5736468,0xd1c4ef,0xdd5d19,5968354,0xc46ef5,4334094,5159928,0xc8f703,4167245,0xb9dab6,0xb54340,3346363,0xac70ac,2767959,2532769,0xa0e95a,0x9e1774,1596303,1360505,9604738,913813,9157998,8856728,92259,0xfad8c4,8164415,7343561,0xf64132,6897189,0xef72de,0xe3eb28,6662099,5986813,0xdd1506,0xd18cf0,5750795,0xc8bf1c,5174247,4352529,0xc426ea,2810998,0xaca88d,0xa0317b,2522496,0xb90297,4148844,3397530,0xb59b61,9135439,862644,110658,8912057,1606574,0x9ecf55,9590435,1317464,0xefaaff,6940164,6651890,0xe33309,8145950,0xfa00e5,0xf69913,7394792,5123014,0xc8673d,0xc4fecb,4370992,0xddcd27,5997020,5707818,0xd154d1,2504095,0xa07964,0xace092,2796649,0xb5d37e,3383173,4130419,0xb94a88,8893606,129117,876971,9121104,1331783,9576124,0x9e874a,1625009,0xe37b16,6633453,6925851,0xefe2e0,7380471,0xf6d10c,0xfa48fa,8127489,4389423,0xc4b6d4,0xc82f22,5137369,0xd11cce,5722165,6015427,0xdd8538];"undefined"!=typeof Int32Array&&(v=new Int32Array(v));let k=a("crc-24",(x,d)=>{let b=void 0!==d?~~d:0xb704ce;for(let d=0;d<x.length;d++)b=(v[(b>>16^x[d])&255]^b<<8)&0xffffff;return b}),_=[0,0x77073096,0xee0e612c,0x990951ba,0x76dc419,0x706af48f,0xe963a535,0x9e6495a3,0xedb8832,0x79dcb8a4,0xe0d5e91e,0x97d2d988,0x9b64c2b,0x7eb17cbd,0xe7b82d07,0x90bf1d91,0x1db71064,0x6ab020f2,0xf3b97148,0x84be41de,0x1adad47d,0x6ddde4eb,0xf4d4b551,0x83d385c7,0x136c9856,0x646ba8c0,0xfd62f97a,0x8a65c9ec,0x14015c4f,0x63066cd9,0xfa0f3d63,0x8d080df5,0x3b6e20c8,0x4c69105e,0xd56041e4,0xa2677172,0x3c03e4d1,0x4b04d447,0xd20d85fd,0xa50ab56b,0x35b5a8fa,0x42b2986c,0xdbbbc9d6,0xacbcf940,0x32d86ce3,0x45df5c75,0xdcd60dcf,0xabd13d59,0x26d930ac,0x51de003a,0xc8d75180,0xbfd06116,0x21b4f4b5,0x56b3c423,0xcfba9599,0xb8bda50f,0x2802b89e,0x5f058808,0xc60cd9b2,0xb10be924,0x2f6f7c87,0x58684c11,0xc1611dab,0xb6662d3d,0x76dc4190,0x1db7106,0x98d220bc,0xefd5102a,0x71b18589,0x6b6b51f,0x9fbfe4a5,0xe8b8d433,0x7807c9a2,0xf00f934,0x9609a88e,0xe10e9818,0x7f6a0dbb,0x86d3d2d,0x91646c97,0xe6635c01,0x6b6b51f4,0x1c6c6162,0x856530d8,0xf262004e,0x6c0695ed,0x1b01a57b,0x8208f4c1,0xf50fc457,0x65b0d9c6,0x12b7e950,0x8bbeb8ea,0xfcb9887c,0x62dd1ddf,0x15da2d49,0x8cd37cf3,0xfbd44c65,0x4db26158,0x3ab551ce,0xa3bc0074,0xd4bb30e2,0x4adfa541,0x3dd895d7,0xa4d1c46d,0xd3d6f4fb,0x4369e96a,0x346ed9fc,0xad678846,0xda60b8d0,0x44042d73,0x33031de5,0xaa0a4c5f,0xdd0d7cc9,0x5005713c,0x270241aa,0xbe0b1010,0xc90c2086,0x5768b525,0x206f85b3,0xb966d409,0xce61e49f,0x5edef90e,0x29d9c998,0xb0d09822,0xc7d7a8b4,0x59b33d17,0x2eb40d81,0xb7bd5c3b,0xc0ba6cad,0xedb88320,0x9abfb3b6,0x3b6e20c,0x74b1d29a,0xead54739,0x9dd277af,0x4db2615,0x73dc1683,0xe3630b12,0x94643b84,0xd6d6a3e,0x7a6a5aa8,0xe40ecf0b,0x9309ff9d,0xa00ae27,0x7d079eb1,0xf00f9344,0x8708a3d2,0x1e01f268,0x6906c2fe,0xf762575d,0x806567cb,0x196c3671,0x6e6b06e7,0xfed41b76,0x89d32be0,0x10da7a5a,0x67dd4acc,0xf9b9df6f,0x8ebeeff9,0x17b7be43,0x60b08ed5,0xd6d6a3e8,0xa1d1937e,0x38d8c2c4,0x4fdff252,0xd1bb67f1,0xa6bc5767,0x3fb506dd,0x48b2364b,0xd80d2bda,0xaf0a1b4c,0x36034af6,0x41047a60,0xdf60efc3,0xa867df55,0x316e8eef,0x4669be79,0xcb61b38c,0xbc66831a,0x256fd2a0,0x5268e236,0xcc0c7795,0xbb0b4703,0x220216b9,0x5505262f,0xc5ba3bbe,0xb2bd0b28,0x2bb45a92,0x5cb36a04,0xc2d7ffa7,0xb5d0cf31,0x2cd99e8b,0x5bdeae1d,0x9b64c2b0,0xec63f226,0x756aa39c,0x26d930a,0x9c0906a9,0xeb0e363f,0x72076785,0x5005713,0x95bf4a82,0xe2b87a14,0x7bb12bae,0xcb61b38,0x92d28e9b,0xe5d5be0d,0x7cdcefb7,0xbdbdf21,0x86d3d2d4,0xf1d4e242,0x68ddb3f8,0x1fda836e,0x81be16cd,0xf6b9265b,0x6fb077e1,0x18b74777,0x88085ae6,0xff0f6a70,0x66063bca,0x11010b5c,0x8f659eff,0xf862ae69,0x616bffd3,0x166ccf45,0xa00ae278,0xd70dd2ee,0x4e048354,0x3903b3c2,0xa7672661,0xd06016f7,0x4969474d,0x3e6e77db,0xaed16a4a,0xd9d65adc,0x40df0b66,936918e3,0xa9bcae53,0xdebb9ec5,0x47b2cf7f,0x30b5ffe9,0xbdbdf21c,0xcabac28a,0x53b39330,0x24b4a3a6,0xbad03605,0xcdd70693,0x54de5729,0x23d967bf,0xb3667a2e,0xc4614ab8,0x5d681b02,0x2a6f2b94,0xb40bbe37,0xc30c8ea1,0x5a05df1b,0x2d02ef8d];"undefined"!=typeof Int32Array&&(_=new Int32Array(_));let Z=a("crc-32",(x,d)=>{let b=0===d?0:-1^~~d;for(let d=0;d<x.length;d++)b=_[(b^x[d])&255]^b>>>8;return -1^b}),j=[0,0x4c11db7,0x9823b6e,0xd4326d9,0x130476dc,0x17c56b6b,0x1a864db2,0x1e475005,0x2608edb8,0x22c9f00f,0x2f8ad6d6,0x2b4bcb61,0x350c9b64,0x31cd86d3,0x3c8ea00a,0x384fbdbd,0x4c11db70,0x48d0c6c7,0x4593e01e,0x4152fda9,0x5f15adac,0x5bd4b01b,0x569796c2,0x52568b75,0x6a1936c8,0x6ed82b7f,0x639b0da6,0x675a1011,0x791d4014,0x7ddc5da3,0x709f7b7a,0x745e66cd,0x9823b6e0,0x9ce2ab57,0x91a18d8e,0x95609039,0x8b27c03c,0x8fe6dd8b,0x82a5fb52,0x8664e6e5,0xbe2b5b58,0xbaea46ef,0xb7a96036,0xb3687d81,0xad2f2d84,0xa9ee3033,0xa4ad16ea,0xa06c0b5d,0xd4326d90,0xd0f37027,0xddb056fe,0xd9714b49,0xc7361b4c,0xc3f706fb,0xceb42022,0xca753d95,0xf23a8028,0xf6fb9d9f,0xfbb8bb46,0xff79a6f1,0xe13ef6f4,0xe5ffeb43,0xe8bccd9a,0xec7dd02d,0x34867077,0x30476dc0,0x3d044b19,0x39c556ae,0x278206ab,0x23431b1c,0x2e003dc5,0x2ac12072,0x128e9dcf,0x164f8078,0x1b0ca6a1,0x1fcdbb16,0x18aeb13,0x54bf6a4,0x808d07d,0xcc9cdca,0x7897ab07,0x7c56b6b0,0x71159069,0x75d48dde,0x6b93dddb,0x6f52c06c,0x6211e6b5,0x66d0fb02,0x5e9f46bf,0x5a5e5b08,0x571d7dd1,0x53dc6066,0x4d9b3063,0x495a2dd4,0x44190b0d,0x40d816ba,0xaca5c697,0xa864db20,0xa527fdf9,0xa1e6e04e,0xbfa1b04b,0xbb60adfc,0xb6238b25,0xb2e29692,0x8aad2b2f,0x8e6c3698,0x832f1041,0x87ee0df6,0x99a95df3,0x9d684044,0x902b669d,0x94ea7b2a,0xe0b41de7,0xe4750050,0xe9362689,0xedf73b3e,0xf3b06b3b,0xf771768c,0xfa325055,0xfef34de2,0xc6bcf05f,0xc27dede8,0xcf3ecb31,0xcbffd686,0xd5b88683,0xd1799b34,0xdc3abded,0xd8fba05a,0x690ce0ee,0x6dcdfd59,0x608edb80,0x644fc637,0x7a089632,0x7ec98b85,0x738aad5c,0x774bb0eb,0x4f040d56,0x4bc510e1,0x46863638,0x42472b8f,0x5c007b8a,0x58c1663d,0x558240e4,0x51435d53,0x251d3b9e,0x21dc2629,0x2c9f00f0,0x285e1d47,0x36194d42,0x32d850f5,0x3f9b762c,0x3b5a6b9b,0x315d626,0x7d4cb91,0xa97ed48,0xe56f0ff,0x1011a0fa,0x14d0bd4d,0x19939b94,0x1d528623,0xf12f560e,0xf5ee4bb9,0xf8ad6d60,0xfc6c70d7,0xe22b20d2,0xe6ea3d65,0xeba91bbc,0xef68060b,0xd727bbb6,0xd3e6a601,0xdea580d8,0xda649d6f,0xc423cd6a,0xc0e2d0dd,0xcda1f604,0xc960ebb3,0xbd3e8d7e,0xb9ff90c9,0xb4bcb610,0xb07daba7,0xae3afba2,0xaafbe615,0xa7b8c0cc,0xa379dd7b,0x9b3660c6,0x9ff77d71,0x92b45ba8,0x9675461f,0x8832161a,0x8cf30bad,0x81b02d74,0x857130c3,0x5d8a9099,0x594b8d2e,0x5408abf7,0x50c9b640,0x4e8ee645,0x4a4ffbf2,0x470cdd2b,0x43cdc09c,0x7b827d21,0x7f436096,0x7200464f,0x76c15bf8,0x68860bfd,0x6c47164a,0x61043093,0x65c52d24,0x119b4be9,0x155a565e,0x18197087,0x1cd86d30,0x29f3d35,0x65e2082,0xb1d065b,0xfdc1bec,0x3793a651,0x3352bbe6,0x3e119d3f,0x3ad08088,0x2497d08d,0x2056cd3a,0x2d15ebe3,0x29d4f654,0xc5a92679,0xc1683bce,0xcc2b1d17,0xc8ea00a0,0xd6ad50a5,0xd26c4d12,0xdf2f6bcb,0xdbee767c,0xe3a1cbc1,0xe760d676,0xea23f0af,0xeee2ed18,0xf0a5bd1d,0xf464a0aa,0xf9278673,0xfde69bc4,0x89b8fd09,0x8d79e0be,0x803ac667,0x84fbdbd0,0x9abc8bd5,0x9e7d9662,0x933eb0bb,0x97ffad0c,0xafb010b1,0xab710d06,0xa6322bdf,0xa2f33668,0xbcb4666d,0xb8757bda,0xb5365d03,0xb1f740b4];"undefined"!=typeof Int32Array&&(j=new Int32Array(j));let C=a("crc-32-mpeg",(x,d)=>{let b=void 0!==d?~~d:0xffffffff;for(let d=0;d<x.length;d++)b=j[(b>>24^x[d])&255]^b<<8;return b}),E=[0,0x77073096,0xee0e612c,0x990951ba,0x76dc419,0x706af48f,0xe963a535,0x9e6495a3,0xedb8832,0x79dcb8a4,0xe0d5e91e,0x97d2d988,0x9b64c2b,0x7eb17cbd,0xe7b82d07,0x90bf1d91,0x1db71064,0x6ab020f2,0xf3b97148,0x84be41de,0x1adad47d,0x6ddde4eb,0xf4d4b551,0x83d385c7,0x136c9856,0x646ba8c0,0xfd62f97a,0x8a65c9ec,0x14015c4f,0x63066cd9,0xfa0f3d63,0x8d080df5,0x3b6e20c8,0x4c69105e,0xd56041e4,0xa2677172,0x3c03e4d1,0x4b04d447,0xd20d85fd,0xa50ab56b,0x35b5a8fa,0x42b2986c,0xdbbbc9d6,0xacbcf940,0x32d86ce3,0x45df5c75,0xdcd60dcf,0xabd13d59,0x26d930ac,0x51de003a,0xc8d75180,0xbfd06116,0x21b4f4b5,0x56b3c423,0xcfba9599,0xb8bda50f,0x2802b89e,0x5f058808,0xc60cd9b2,0xb10be924,0x2f6f7c87,0x58684c11,0xc1611dab,0xb6662d3d,0x76dc4190,0x1db7106,0x98d220bc,0xefd5102a,0x71b18589,0x6b6b51f,0x9fbfe4a5,0xe8b8d433,0x7807c9a2,0xf00f934,0x9609a88e,0xe10e9818,0x7f6a0dbb,0x86d3d2d,0x91646c97,0xe6635c01,0x6b6b51f4,0x1c6c6162,0x856530d8,0xf262004e,0x6c0695ed,0x1b01a57b,0x8208f4c1,0xf50fc457,0x65b0d9c6,0x12b7e950,0x8bbeb8ea,0xfcb9887c,0x62dd1ddf,0x15da2d49,0x8cd37cf3,0xfbd44c65,0x4db26158,0x3ab551ce,0xa3bc0074,0xd4bb30e2,0x4adfa541,0x3dd895d7,0xa4d1c46d,0xd3d6f4fb,0x4369e96a,0x346ed9fc,0xad678846,0xda60b8d0,0x44042d73,0x33031de5,0xaa0a4c5f,0xdd0d7cc9,0x5005713c,0x270241aa,0xbe0b1010,0xc90c2086,0x5768b525,0x206f85b3,0xb966d409,0xce61e49f,0x5edef90e,0x29d9c998,0xb0d09822,0xc7d7a8b4,0x59b33d17,0x2eb40d81,0xb7bd5c3b,0xc0ba6cad,0xedb88320,0x9abfb3b6,0x3b6e20c,0x74b1d29a,0xead54739,0x9dd277af,0x4db2615,0x73dc1683,0xe3630b12,0x94643b84,0xd6d6a3e,0x7a6a5aa8,0xe40ecf0b,0x9309ff9d,0xa00ae27,0x7d079eb1,0xf00f9344,0x8708a3d2,0x1e01f268,0x6906c2fe,0xf762575d,0x806567cb,0x196c3671,0x6e6b06e7,0xfed41b76,0x89d32be0,0x10da7a5a,0x67dd4acc,0xf9b9df6f,0x8ebeeff9,0x17b7be43,0x60b08ed5,0xd6d6a3e8,0xa1d1937e,0x38d8c2c4,0x4fdff252,0xd1bb67f1,0xa6bc5767,0x3fb506dd,0x48b2364b,0xd80d2bda,0xaf0a1b4c,0x36034af6,0x41047a60,0xdf60efc3,0xa867df55,0x316e8eef,0x4669be79,0xcb61b38c,0xbc66831a,0x256fd2a0,0x5268e236,0xcc0c7795,0xbb0b4703,0x220216b9,0x5505262f,0xc5ba3bbe,0xb2bd0b28,0x2bb45a92,0x5cb36a04,0xc2d7ffa7,0xb5d0cf31,0x2cd99e8b,0x5bdeae1d,0x9b64c2b0,0xec63f226,0x756aa39c,0x26d930a,0x9c0906a9,0xeb0e363f,0x72076785,0x5005713,0x95bf4a82,0xe2b87a14,0x7bb12bae,0xcb61b38,0x92d28e9b,0xe5d5be0d,0x7cdcefb7,0xbdbdf21,0x86d3d2d4,0xf1d4e242,0x68ddb3f8,0x1fda836e,0x81be16cd,0xf6b9265b,0x6fb077e1,0x18b74777,0x88085ae6,0xff0f6a70,0x66063bca,0x11010b5c,0x8f659eff,0xf862ae69,0x616bffd3,0x166ccf45,0xa00ae278,0xd70dd2ee,0x4e048354,0x3903b3c2,0xa7672661,0xd06016f7,0x4969474d,0x3e6e77db,0xaed16a4a,0xd9d65adc,0x40df0b66,936918e3,0xa9bcae53,0xdebb9ec5,0x47b2cf7f,0x30b5ffe9,0xbdbdf21c,0xcabac28a,0x53b39330,0x24b4a3a6,0xbad03605,0xcdd70693,0x54de5729,0x23d967bf,0xb3667a2e,0xc4614ab8,0x5d681b02,0x2a6f2b94,0xb40bbe37,0xc30c8ea1,0x5a05df1b,0x2d02ef8d];"undefined"!=typeof Int32Array&&(E=new Int32Array(E));let N={crc1:r,crc8:n,crc81wire:o,crc8dvbs2:y,crc16:A,crc16ccitt:g,crc16modbus:p,crc16xmodem:w,crc16kermit:s,crc24:k,crc32:Z,crc32mpeg2:C,crcjam:a("jam",(x,d=-1)=>{let b=0===d?0:~~d;for(let d=0;d<x.length;d++)b=E[(b^x[d])&255]^b>>>8;return b})}}}]);