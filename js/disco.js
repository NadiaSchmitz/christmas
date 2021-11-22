var colorClass = [
  "color_0",
  "color_1",
  "color_2",
  "color_3",
  "color_4",
  "color_5",
  "color_6",
  "color_7",
  "color_8"
];

var text = [467, 468, 469, 471, 472, 475, 476, 477, 479, 481, 483, 484, 517, 521, 523, 525, 527, 529, 531, 533, 567, 568, 571, 572, 575, 577, 579, 580, 581, 583, 584, 617, 621, 622, 625, 627, 629, 631, 633, 667, 671, 673, 675, 676, 677, 679, 681, 683, 684, 804, 808, 810, 811, 813, 815, 817, 819, 822, 825, 829, 830, 832, 834, 836, 837, 838, 840, 841, 843, 846, 854, 858, 860, 863, 865, 867, 867, 869, 870, 872, 874, 876, 878, 882, 884, 887, 890, 893, 894, 896, 904, 906, 908, 910, 911, 913, 915, 916, 917, 919, 921, 922, 924, 926, 928, 932, 933, 934, 937, 940, 941, 943, 945, 946, 955, 957, 960, 963, 965, 967, 969, 972, 974, 975, 976, 978, 982, 984, 987, 990, 993, 996, 1005, 1007, 1010, 1011, 1013, 1015, 1017, 1019, 1022, 1024, 1026, 1029, 1030, 1032, 1034, 1037, 1040, 1041, 1043, 1046];

var tree = [174, 175, 224, 225, 274, 275, 323, 324, 325, 326, 373, 374, 375, 376, 423, 424, 425, 426, 472, 473, 474, 475, 476, 477, 522, 523, 524, 525, 526, 527, 572, 573, 574, 575, 576, 577, 621, 622, 623, 624, 625, 626, 627, 628, 671, 672, 673, 674, 675, 676, 677, 678, 721, 722, 723, 724, 725, 726, 727, 728, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482];

var ball_1 = [374, 375, 424, 425, 474, 475];

var ball_2 = [523, 524, 525, 526, 572, 573, 621, 622, 670, 671, 719, 720, 769, 770, 819, 820, 869, 870, 919, 920, 969, 970, 1019, 1020, 1069, 1070, 1120, 1121, 1171, 1172, 1222, 1223, 1273, 1274, 1275, 1276, 1324, 1325, 1226, 1227, 1177, 1178, 1128, 1129, 729, 730, 779, 780, 829, 830, 879, 880, 929, 930, 979, 980, 1029, 1030, 1079, 1080, 678, 679, 627, 628, 576, 577];

var ball_3 = [574, 575, 623, 624, 625, 626, 672, 673, 721, 722, 771, 772, 821, 822, 871, 872, 921, 922, 971, 972, 1021, 1022, 1071, 1072, 1122, 1123, 1173, 1174, 1175, 1176, 1224, 1225, 1126, 1127, 727, 728, 777, 778, 827, 828, 877, 878, 927, 928, 977, 978, 1027, 1028, 1077, 1078, 676, 677];

var ball_4 = [674, 675, 723, 724, 725, 726, 773, 774, 775, 776, 823, 824, 825, 826, 873, 923, 973, 974, 975, 976, 1023, 1024, 1025, 1026, 1073, 1074, 1075, 1076, 1124, 1125, 876, 926];

var ball_5 = [874, 875, 924, 925];

var candle_1 = [1113, 1114, 1115, 1116, 1117, 1118, 1163, 1164, 1165, 1166, 1167, 1168, 1213, 1214, 1215, 1216, 1217, 1218, 1263, 1264, 1265, 1266, 1267, 1268, 1313, 1314, 1315, 1316, 1317, 1318, 1363, 1364, 1365, 1366, 1367, 1368, 1413, 1414, 1415, 1416, 1417, 1418, 1463, 1464, 1465, 1466, 1467, 1468, 1513, 1514, 1515, 1516, 1517, 1518, 1563, 1564, 1565, 1566, 1567, 1568, 1613, 1614, 1615, 1616, 1617, 1618, 721, 722, 723, 724, 725, 726, 771, 772, 773, 774, 775, 776, 821, 822, 823, 824, 825, 826, 871, 872, 873, 874, 875, 876, 921, 922, 923, 924, 925, 926, 971, 972, 973, 974, 975, 976, 1021, 1022, 1023, 1024, 1025, 1026, 1071, 1072, 1073, 1074, 1075, 1076, 1121, 1122, 1123, 1124, 1125, 1126, 1171, 1172, 1173, 1174, 1175, 1176, 1221, 1222, 1223, 1224, 1225, 1226, 1271, 1272, 1273, 1274, 1275, 1276, 1321, 1322, 1323, 1324, 1325, 1326, 1371, 1372, 1373, 1374, 1375, 1376, 1421, 1422, 1423, 1424, 1425, 1426, 1471, 1472, 1473, 1474, 1475, 1476, 1521, 1522, 1523, 1524, 1525, 1526, 1571, 1572, 1573, 1574, 1575, 1576, 1621, 1622, 1623, 1624, 1625, 1626, 879, 880, 881, 882, 883, 884, 929, 930, 931, 932, 933, 934, 979, 980, 981, 982, 983, 984, 1029, 1030, 1031, 1032, 1033, 1034, 1079, 1080, 1081, 1082, 1083, 1084, 1129, 1130, 1131, 1132, 1133, 1134, 1179, 1180, 1181, 1182, 1183, 1184, 1229, 1230, 1231, 1232, 1233, 1234, 1279, 1280, 1281, 1282, 1283, 1284, 1329, 1330, 1331, 1332, 1333, 1334, 1379, 1380, 1381, 1382, 1383, 1384, 1429, 1430, 1431, 1432, 1433, 1434, 1479, 1480, 1481, 1482, 1483, 1484, 1529, 1530, 1531, 1532, 1533, 1534, 1579, 1580, 1581, 1582, 1583, 1584, 1629, 1630, 1631, 1632, 1633, 1634];

var candle_2 = [816, 865, 866, 915, 916, 965, 966, 1014, 1015, 1016, 1017, 1065, 1066, 622, 473, 523, 573, 623, 673, 424, 474, 524, 574, 624, 674, 625, 780, 631, 681, 682, 731, 781, 831, 582, 632, 732, 782, 832, 783];

var candle_3 = [1014, 815, 865, 915, 965, 1015, 1065, 1016, 1066, 1017, 622, 423, 473, 523, 573, 623, 673, 624, 674, 625, 780, 581, 631, 681, 682, 731, 781, 831, 782, 832, 783];

var candle_4 = [866, 916, 966, 474, 524, 574, 632, 682, 732];

var caramel_1 = [381, 382, 383, 384, 430, 431, 432, 433, 434, 435, 478, 479, 480, 481, 482, 483, 484, 485, 486, 534, 535, 536, 537, 585, 586, 587, 635, 636, 637, 685, 686, 687, 734, 735, 527, 528, 529, 530, 531, 576, 577, 578, 579, 723, 724, 725, 726, 736, 772, 773, 774, 775, 785, 919, 920, 921, 922, 968, 969, 970, 971, 1115, 1116, 1117, 1118, 1164, 1165, 1166, 1167, 1311, 1312, 1313, 1314, 1360, 1361, 1362, 1363, 1411, 1412];

var caramel_2 = [625, 626, 627, 628, 674, 675, 676, 677, 821, 822, 823, 824, 870, 871, 872, 873, 1017, 1018, 1019, 1020, 1066, 1067, 1068, 1069, 1213, 1214, 1215, 1216, 1262, 1263, 1264, 1265];

$(document).ready(function() {
  var windowsWidth = $(window).width();
  var windowsHeight = $(window).height();
  var numberHeight = 36;
  var numberWidth = 50;

  var lampWrapperHeight = Math.floor((windowsHeight - 80) / numberHeight - 2);
  var number = numberWidth * numberHeight;
  var wrapperWidth = (lampWrapperHeight + 2) * numberWidth;
  var wrapperMargin = (windowsHeight - (lampWrapperHeight + 2) * numberHeight) / 2;

  $('.wrapper').css('width', wrapperWidth);
  $('#christmas').css('padding-top', wrapperMargin);
  $('#christmas').css('padding-bottom', wrapperMargin);

  for (var i = 0; i < number; i++) {
    /*var classL = Math.floor(Math.random() * colorClass.length);*/

    $('<div/>', {
      class: 'lamp_wrapper lamp_wrapper_size_L',
      /*id: colorClass[classL],*/
    }).appendTo('.wrapper');
  }

  $('<div></div>').appendTo('.lamp_wrapper');
  $('.lamp_wrapper').css('width', lampWrapperHeight);
  $('.lamp_wrapper').css('height', lampWrapperHeight);
  $('.lamp_wrapper div').css('width', lampWrapperHeight - 6);
  $('.lamp_wrapper div').css('height', lampWrapperHeight - 6);

  var lamps = $('.lamp_wrapper');

  for (var i = 0; i < lamps.length; i++) {
    $(lamps[i]).attr('data-number', i);
  }

  var square = lamps.slice();

  square.splice(0, 100);
  square.splice(1600, 100);

  for (var i = 0; i < 1600; i = i + 49) {
    square.splice(i, 1);
  }

  for (var i = 0; i < 1600; i = i + 48) {
    square.splice(i, 1);
  }

  for (var i = 47; i < 1600; i = i + 47) {
    square.splice(i, 1);
  }

  for (var i = 46; i < 1600; i = i + 46) {
    square.splice(i, 1);
  }

  var borderAll = lamps.slice();

  borderAll.splice();

  for (var i = 102; i < 228; i = i + 4) {
    borderAll.splice(i, 46);
  }
  
  var borderLevel1 = lamps.slice();

  for (var i = 51; i < 118; i = i + 2) {
    borderLevel1.splice(i, 48);
  }

  var borderLevel2 = lamps.slice();

  borderLevel2.splice(0, 50);
  borderLevel2.splice(1700, 50)

  for (var i = 0; i < 1650; i = i + 49) {
    borderLevel2.splice(i, 1);
  }

  for (var i = 48; i < 1650; i = i + 48) {
    borderLevel2.splice(i, 1);
  }

  for (var i = 49; i < 112; i = i + 2) {
    borderLevel2.splice(i, 46);
  }

  for (var i = 0; i < borderLevel2.length; i++) {
    $(borderLevel2[i]).attr('id', 'color_4');
  }
  
  function clearAll() {
    for (var i = 0; i < number; i++) {
      $(lamps[i]).attr('id', '');
    }
  }

  function clearBorder() {
    for (var i = 0; i < lamps.length; i++) {
      for (var j = 0; j < borderAll.length; j++) {
        if ($(lamps[i]).attr('data-number') == ($(borderAll[j]).attr('data-number'))) {
          $(lamps[i]).attr('id', '');
        }
      }
    }
  }

  function clearSquare() {
    for (var i = 0; i < lamps.length; i++) {
      for (var j = 0; j < square.length; j++) {
        if ($(lamps[i]).attr('data-number') == ($(square[j]).attr('data-number'))) {
          $(lamps[i]).attr('id', '');
        }
      }
    }
  }
clearSquare()
  function borderAllMC(color_a) {
    for (var i = 0; i < lamps.length; i++) {
      for (var j = 0; j < borderAll.length; j++) {
        if ($(lamps[i]).attr('data-number') == ($(borderAll[j]).attr('data-number'))) {
          clearBorder();
          $(lamps[i]).attr('id', color_a);
        }
      }
    }
  }

  function borderLevel1MC(color_a) {
    for (var i = 0; i < lamps.length; i++) {
      for (var j = 0; j < borderLevel1.length; j++) {
        if ($(lamps[i]).attr('data-number') == ($(borderLevel1[j]).attr('data-number'))) {
          clearBorder();
          $(lamps[i]).attr('id', color_a);
        }
      }
    }
  }

  function borderLevel2MC(color_a) {
    for (var i = 0; i < lamps.length; i++) {
      for (var j = 0; j < borderLevel2.length; j++) {
        if ($(lamps[i]).attr('data-number') == ($(borderLevel2[j]).attr('data-number'))) {
          clearBorder();
          $(lamps[i]).attr('id', color_a);
        }
      }
    }
  }

  function textMC(color_a) {
    for (var i = 0; i < number; i++) {
      $(lamps[i]).attr('id', '');
      for (var j = 0; j < text.length; j++) {
        if ($(lamps[i]).attr('data-number') == text[j]) {
          $(lamps[i]).attr('id', color_a);
        }
      }
    }
  }

  function treeMC() {
    for (var i = 0; i < number; i++) {
      $(lamps[i]).attr('id', '');
      for (var j = 0; j < tree.length; j++) {
        if ($(lamps[i]).attr('data-number') == tree[j]) {
          $(lamps[i]).attr('id', 'color_3');
          for (var k = 0; k < colorClass.length - 3; k++) {
            var classL = Math.floor(Math.random() * colorClass.length);
            $(lamps[i + classL]).attr('id', colorClass[k]);
          }
        }
      }
    }
  }

  function ballMC(color_a, color_b, color_c, color_d, color_e) {
    for (var i = 0; i < number; i++) {
      for (var j = 0; j < ball_1.length; j++) {
        if ($(lamps[i]).attr('data-number') == ball_1[j]) {
          $(lamps[i]).attr('id', color_a);
        }
      }

      for (var j = 0; j < ball_2.length; j++) {
        if ($(lamps[i]).attr('data-number') == ball_2[j]) {
          $(lamps[i]).attr('id', color_b);
        }
      }

      for (var j = 0; j < ball_3.length; j++) {
        if ($(lamps[i]).attr('data-number') == ball_3[j]) {
          $(lamps[i]).attr('id', color_c);
        }
      }

      for (var j = 0; j < ball_4.length; j++) {
        if ($(lamps[i]).attr('data-number') == ball_4[j]) {
          $(lamps[i]).attr('id', color_d);
        }
      }

      for (var j = 0; j < ball_5.length; j++) {
        if ($(lamps[i]).attr('data-number') == ball_5[j]) {
          $(lamps[i]).attr('id', color_e);
        }
      }
    }
  }

  function candleMC_1(color_a, color_b) {
    for (var i = 0; i < number; i++) {
      /*$(lamps[i]).attr('id', '');*/
      for (var j = 0; j < candle_1.length; j++) {
        if ($(lamps[i]).attr('data-number') == candle_1[j]) {
          $(lamps[i]).attr('id', color_a);
        }
      }

      for (var j = 0; j < candle_1.length; j++) {
        if ($(lamps[i]).attr('data-number') == candle_2[j]) {
          $(lamps[i]).attr('id', color_b);
        }
      }
    }
  }

  function caramelMC(color_a, color_b) {
    for (var i = 0; i < number; i++) {
      /*$(lamps[i]).attr('id', '');*/
      for (var j = 0; j < caramel_1.length; j++) {
        if ($(lamps[i]).attr('data-number') == caramel_1[j]) {
          $(lamps[i]).attr('id', color_a);
        }
      }

      for (var j = 0; j < caramel_2.length; j++) {
        if ($(lamps[i]).attr('data-number') == caramel_2[j]) {
          $(lamps[i]).attr('id', color_b);
        }
      }
    }
  }

  function borderPlay() {
    borderAllMC(colorClass[1]);
    setTimeout(borderLevel1MC, 1000, colorClass[3])
    setTimeout(borderLevel2MC, 3000, colorClass[5])
    setTimeout(borderAllMC, 5000, colorClass[7])
    setTimeout(borderLevel1MC, 7000, colorClass[2])
    setTimeout(borderLevel2MC, 9000, colorClass[4])
  }

  

  function frame_1() {
    setInterval(borderPlay, 6000);
    
  }
  
  function frame_2() {
    treeMC()
    
}
  
  function frame_3() {
    clearAll()
    ballMC(colorClass[2], colorClass[4], colorClass[5], colorClass[6], colorClass[2])
    
  }

  function frame_4() {
    //clearAll()
    candleMC_1(colorClass[0], colorClass[2])
    
  }

  function frame_5() {
    //clearAll()
    caramelMC(colorClass[0], colorClass[7])
    
  }

  function clip() {
  frame_1();
  setTimeout(frame_2, 5000);
  setTimeout(frame_3, 10000);
  setTimeout(frame_4, 15000);
  setTimeout(frame_5, 20000);
  setTimeout(frame_1, 25000);
  }

clip()
  

});
