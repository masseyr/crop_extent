/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var prev2 = ee.Image("users/images/Yucatan_2010_v10"),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-89.68897104263306, 16.630129130122203]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69379901885986, 16.64395413003452]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71538543701172, 16.693877932058474]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75615501403809, 16.760171357975768]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74336624145508, 16.784126664738285]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73954677581787, 16.78753686596639]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71326112747192, 16.804112104576827]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20805358886719, 16.759189935485214]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25766372680664, 16.724828692688064]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31147956848145, 16.704940084105463]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32941818237305, 16.695568092271543]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38151741027832, 16.721545466020057]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41748046875, 16.689155411857808]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46279907226562, 16.720723451412653]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33113479614258, 16.93153578502773]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30435562133789, 16.923324583640632]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39670944213867, 16.977429798373826]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36778450012207, 17.01469503467008]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35259246826172, 17.040054138098483]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27783393859863, 17.05129639432978]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44629287719727, 15.696765569272543]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42646598815918, 15.706102523547719]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4567642211914, 15.707011407753244]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38767051696777, 15.665198541302951]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3560848236084, 15.68916348538145]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40792655944824, 15.650322334168713]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41256141662598, 15.641148133622433]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41693878173828, 15.626848784859575]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32733154296875, 15.604612554762706]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37531089782715, 15.60411655187635]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48774909973145, 15.582539266117417]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49418640136719, 15.579480233697746]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53787422180176, 15.583531374959131]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46414566040039, 15.686849751433295]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48337173461914, 15.630733677829678]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43058586120605, 15.516470586737698]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.34329605102539, 15.605439223574967]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3000373840332, 15.682387476148694]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.21352005004883, 15.691559825018516]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.26132774353027, 15.729484345183662]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.15841674804688, 15.675859156895697]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09996604919434, 15.71766983807286]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.20622444152832, 15.655777069149686]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.27435255050659, 15.632834173682616]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.29023122787476, 15.626738227628225]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.26096296310425, 15.62097274223103]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44783782958984, 15.630155081419321]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4263801574707, 15.644288897238424]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52070808410645, 15.560711660007396]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.57014656066895, 15.557983046351483]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67082595825195, 15.505140037643693]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62653732299805, 15.518372734738335]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65649223327637, 15.531604583287619]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75528335571289, 15.499102337878696]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76180648803711, 15.448974353028817]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79253387451172, 15.465942852002575]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89312744140625, 15.3696313022796]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89999389648438, 15.354568248631843]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83905410766602, 15.34007385812071]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83845329284668, 15.361676432367807]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88660430908203, 15.349095894746414]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90239715576172, 15.324098103482333]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.93243789672852, 15.311432518576504]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.95063400268555, 15.33932890189563]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.98316383361816, 15.302822794431636]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01535034179688, 15.274507552436829]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01354789733887, 15.336762921228638]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04607772827148, 15.276991498611729]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90995025634766, 15.417783002160977]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89801979064941, 15.467541457675356]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83364677429199, 15.427872440230537]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79575252532959, 15.435939226255034]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85604858398438, 15.37801689207577]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8508129119873, 15.35633324381644]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86248588562012, 15.344911177903848]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88922214508057, 15.33212269021981]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90947818756104, 15.335019827215124]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00217533111572, 15.370982367864979]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.21984195709229, 15.155073105967515]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.19087409973145, 15.19007249416992]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.16881561279297, 15.217653722567727]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.08388614654541, 15.247964061111963]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.05923128128052, 15.257629392602219]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.05255794525146, 15.258664456968232]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.06360864639282, 15.257070455723726]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.05129194259644, 15.246698801636075]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.03380393981934, 15.21382079651567]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04285907745361, 15.205683319640249]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.0273129940033, 15.12958255239482]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.03148651123047, 15.128909349370916]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.02622938156128, 15.126413301034617]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01761412620544, 15.132741399559585]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01347279548645, 15.134595258424241]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01115536689758, 15.134512404743093]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00841951370239, 15.132099277064192]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00705695152283, 15.140022103957204]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00426745414734, 15.138354710109192]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01097297668457, 15.141026676521676]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00486826896667, 15.145324535937453]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00190711021423, 15.147426830725234]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00299072265625, 15.152563384330358]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01164889335632, 15.158621457958901]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.02475953102112, 15.16050615648987]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.03088569641113, 15.157917280571263]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04030561447144, 15.163271040969724]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.06290054321289, 15.160827174895125]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.06410217285156, 15.163995911068355]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.07236337661743, 15.161634896468632]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.07532453536987, 15.16229764007061]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.08266305923462, 15.21910067168876]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.08864974975586, 15.214504082484181]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.07845735549927, 15.230239737429933]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.07139778137207, 15.239701268842868]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.0557336807251, 15.225436346415801]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.02528524398804, 15.223345180737109]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01408433914185, 15.22899749164238]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00453567504883, 15.255083112555495]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69847679138184, 15.000431647548233]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74130630493164, 14.97199303013105]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68749046325684, 14.968427572579648]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76705551147461, 14.970417602714736]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.63753700256348, 14.981859917258046]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61719512939453, 14.975807174846828]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59891319274902, 15.001592327156542]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59342002868652, 14.946536021923695]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58518028259277, 15.024555906046116]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56646919250488, 14.985959238897326]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5588731765747, 15.009960777439204]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55445289611816, 15.010043679638581]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55981731414795, 14.96950066963699]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58204746246338, 14.951796968686972]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58058834075928, 14.933055159582759]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57672595977783, 14.92861825295723]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60809707641602, 14.93518443161042]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66371536254883, 14.97581685101499]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62526321411133, 15.025394543864394]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64208602905273, 15.018265349512621]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48312759399414, 14.965974211095585]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47036027908325, 14.9769400021801]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45744276046753, 14.980774787186016]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45104837417603, 14.983137809693599]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.44212198257446, 14.970990767400169]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43789482116699, 14.960978267675568]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52155828475952, 14.922540854644183]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52325344085693, 14.927807228371833]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51885461807251, 14.915905869459703]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51964855194092, 14.909726855452442]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50647354125977, 14.909208473726112]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50514316558838, 14.905185789089847]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50681686401367, 14.892163386636172]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47806358337402, 14.837327961154614]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.4670557975769, 14.835979713702766]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45040464401245, 14.827786336968742]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45282936096191, 14.837784289157748]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48143243789673, 14.828782004372028]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48497295379639, 14.80978298226715]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48377132415771, 14.854462763098883]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48432922363281, 14.861389998935332]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43047046661377, 14.880467438272818]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43697214126587, 14.88003193855633]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.44712162017822, 14.884946812873437]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47051048278809, 14.871010675227984]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47301030158997, 14.863221841325673]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46537137031555, 14.869858449205008]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47399735450745, 14.867639356154589]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54599857330322, 14.752063153117653]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56501007080078, 14.766463424855042]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5616626739502, 14.784182334722814]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56968784332275, 14.768330825396415]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52977657318115, 14.785925100229878]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53848838806152, 14.76401503095098]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5526933670044, 14.754387180795822]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56363677978516, 14.749697599454073]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48390007019043, 14.726912266649844]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47111129760742, 14.742476276604501]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47042465209961, 14.75077662712181]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.4957447052002, 14.731685347902017]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55745697021484, 14.673156013283716]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61899757385254, 14.670997184871675]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60655212402344, 14.686565181851465]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6215295791626, 14.681583543380963]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6403694152832, 14.648245160474517]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.65242862701416, 14.654016426845]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64826583862305, 14.647580832290299]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64225769042969, 14.641394179415073]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6429443359375, 14.629269494537645]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64882373809814, 14.637657190442354]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66217041015625, 14.615358500295104]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6663761138916, 14.609337050511845]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6623420715332, 14.607094537400888]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.65736389160156, 14.617642455325635]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6845293045044, 14.607343706653984]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68061327934265, 14.66575207620866]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68444347381592, 14.671595534347016]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71311092376709, 14.68104385906636]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72873210906982, 14.695282775997885]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7418212890625, 14.673072981815526]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76096153259277, 14.673156013283716]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73289489746094, 14.67402784179738]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88069534301758, 14.626944135949156]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86855030059814, 14.63545648937442]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86520290374756, 14.651234612387356]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88734722137451, 14.632051587623849]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88455772399902, 14.4722575340315]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87374305725098, 14.454139431000462]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86172676086426, 14.476994592419388]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88301277160645, 14.52460887264631]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87339973449707, 14.46436221209623]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85726356506348, 14.45397320303207]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86344337463379, 14.44657593261106]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8904800415039, 14.493116454275567]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93794441223145, 14.525605920886544]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96026039123535, 14.533748313225527]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.95262145996094, 14.534412985073345]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89811897277832, 14.54355202022876]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8857593536377, 14.533831397315826]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92009162902832, 14.540311860114153]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89726066589355, 14.52909555432442]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89434242248535, 14.52502430995937]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83400344848633, 14.49934881862631]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80834007263184, 14.52369490781061]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79598045349121, 14.478573589413088]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75057601928711, 14.438596578570568]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72139358520508, 14.445827880328585]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72637176513672, 14.41116536765545]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73276615142822, 14.456085325880695]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73300218582153, 14.458183924915055]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74448204040527, 14.464874375648712]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.737229347229, 14.466474236187093]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74606990814209, 14.475013556561578]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7533655166626, 14.473060553621957]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73074913024902, 14.442932268872106]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72783088684082, 14.438381504053774]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69487190246582, 14.302238496779049]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70345497131348, 14.30248800801766]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71409797668457, 14.29076068042837]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67633247375488, 14.29649966184558]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66465950012207, 14.336502111740058]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.65719223022461, 14.325940826971266]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6868896484375, 14.338830517047956]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69058036804199, 14.34065996139355]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71615791320801, 14.337915789275634]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62895393371582, 14.312052396619109]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6253490447998, 14.311303893937755]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62406158447266, 14.306895994219332]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67281341552734, 14.389836652907377]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6903657913208, 14.381065427541415]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66358661651611, 14.411991815504782]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71040725708008, 14.43032115842922]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71675872802734, 14.387550347729206]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64706420898438, 14.33342042136108]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64663505554199, 14.328472411792495]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56676959991455, 14.295995793004828]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55076217651367, 14.29491454441111]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5616626739502, 14.308679282389473]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54777956008911, 14.284307298877776]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54764008522034, 14.276986387573352]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54554796218872, 14.292562473686209]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53889608383179, 14.304040198053187]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54408884048462, 14.308739242177715]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54934597015381, 14.310610515570938]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5674991607666, 14.31472726215628]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56011772155762, 14.301877773050894]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50881242752075, 14.30957092116594]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49862003326416, 14.321754665256613]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47289228439331, 14.328324464398298]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46454524993896, 14.33763828023862]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47576761245728, 14.318344946848727]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47827816009521, 14.315912372182702]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47211980819702, 14.311275853464933]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48057413101196, 14.316931145977208]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46518898010254, 14.329509502622845]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45394515991211, 14.339925095501352]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46072578430176, 14.342502942154054]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46922302246094, 14.348302965851065]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47454452514648, 14.363748174425483]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47121858596802, 14.363665026761694]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49492931365967, 14.384617260367083]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.4976544380188, 14.394219710931294]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5245623588562, 14.419637190608563]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48896408081055, 15.443348673461413]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51067924499512, 15.419934280267846]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43986892700195, 15.476852305271953]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49986457824707, 15.446244262888762]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55041885375977, 15.439956645858558]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57161903381348, 15.434247986388216]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54835891723633, 15.424981422216531]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52561378479004, 15.422168276259702]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61813926696777, 15.429201067169846]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64663505554199, 15.381290622302771]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66465950012207, 15.36986992459343]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.63685035705566, 15.341398215656447]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67109680175781, 15.354310286041473]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69470024108887, 15.342557023821373]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66980934143066, 15.32881645608583]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62294578552246, 15.311515300140256]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66217041015625, 15.31292262466191]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.65015411376953, 15.359027958648587]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69701766967773, 15.322111395782171]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68448638916016, 15.330637549650573]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72474098205566, 15.317392889353068]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73160743713379, 15.336349050427316]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70954895019531, 15.33899780938719]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68680381774902, 15.34984081612564]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70577239990234, 15.316399506015282]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72362518310547, 15.321531935814184]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74662780761719, 15.311763654740528]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75890159606934, 15.318469049312315]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77864265441895, 15.318551830618315]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79907035827637, 15.319131298843011]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80748176574707, 15.315737247836177]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83220100402832, 15.315571682963835]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82318878173828, 15.303236731579394]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81297492980957, 15.306962129083702]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79572296142578, 15.309362905680768]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85880851745605, 15.316316723857556]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90163803100586, 15.305637550899057]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91202354431152, 15.312094790380574]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90386962890625, 15.307789986193075]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87065315246582, 15.30638262715916]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87211227416992, 15.31283984365487]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9069595336914, 15.277819474134045]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88301277160645, 15.278150663427859]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.97176170349121, 15.298848956182306]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75057601928711, 15.319333419890413]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73001956939697, 15.321651274495089]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74851608276367, 15.33481289019046]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71336841583252, 15.32707329831601]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72143650054932, 15.329598009515916]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68465805053711, 15.327611354079353]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69208240509033, 15.309440858860144]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67749118804932, 15.302610993663874]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66156959533691, 15.333819589619115]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.63809490203857, 15.303438867978508]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60788249969482, 15.323141310318366]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59711074829102, 15.33770998988388]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58942890167236, 15.348015061667546]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59878444671631, 15.320657911381396]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59372043609619, 15.316684411747287]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5966386795044, 15.361671603109047]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58114624023438, 15.36916162879794]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54986095428467, 15.34805644647265]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53024864196777, 15.338744658609171]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5232105255127, 15.358898982676202]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52497005462646, 15.326824964419673]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54011917114258, 15.323844934655352]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53780174255371, 15.33266073298465]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55050468444824, 15.319788714786501]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55874443054199, 15.336882251213808]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57548141479492, 15.329887728522804]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58895683288574, 15.32686635342288]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5839786529541, 15.31693275768574]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52728748321533, 15.34851168005016]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50196743011475, 15.323679376200849]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49488639831543, 15.33969654931003]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50977802276611, 15.33319877436419]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51046466827393, 15.351946581515516]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51565742492676, 15.329763563283313]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48287010192871, 15.317760575351297]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47454452514648, 15.32707329831601]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47480201721191, 15.318215873670985]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48394298553467, 15.33266073298465]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.44471836090088, 15.323969103410208]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45446014404297, 15.319002295707133]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43489074707031, 15.32198239448444]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43034172058105, 15.308488830410479]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41047191619873, 15.32247907348544]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41274642944336, 15.314325110628422]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.38064575195312, 15.32107181325217]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3688440322876, 15.328728850085763]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37360763549805, 15.337337507888217]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34030532836914, 15.354346841432887]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35009002685547, 15.335971734888721]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33395385742188, 15.34540780240702]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3644666671753, 15.34126922878953]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36356544494629, 15.34482840703849]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3263578414917, 15.356747075002835]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30108070373535, 15.347394289869559]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.28194046020508, 15.35360193740015]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.28164005279541, 15.366347728049584]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.29627418518066, 15.358361008786112]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2754602432251, 15.359436957704652]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.26305770874023, 15.373547927735261]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.26104068756104, 15.384389138374559]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.25078392028809, 15.39402989354792]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.23469066619873, 15.385175311094713]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.24117088317871, 15.3853821981593]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.22863960266113, 15.406649091198783]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.21756744384766, 15.390512931590877]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2269229888916, 15.392788619643618]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47823524475098, 15.253387991257373]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47922229766846, 15.262786378361957]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48295593261719, 15.2942078854517]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48952198028564, 15.335930348951797]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52110767364502, 15.3469804401367]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52183723449707, 15.369906478520425]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49677467346191, 15.423776875047984]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53908920288086, 15.440861880068946]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52836036682129, 15.428741186095797]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49329853057861, 15.46547339619534]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46712017059326, 15.469733580292651]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.42708015441895, 15.491777597927557]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0318431854248, 15.233766642317395]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04712104797363, 15.219641420669246]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03840923309326, 15.23069764185427]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01866817474365, 15.205313019652786]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01489162445068, 15.240552510429294]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02935409545898, 15.247964061111963]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01806735992432, 15.258149341246853]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00995635986328, 15.279387787463136]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02098560333252, 15.279015201668402]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01326084136963, 15.294332071789555]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0335168838501, 15.290026902460195]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04398822784424, 15.290233883778754]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05141258239746, 15.274337123704038]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0415849685669, 15.273219337422562]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06059646606445, 15.296443228270684]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04664897918701, 15.302238450417697]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06608963012695, 15.275868895232444]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08561611175537, 15.282244256565674]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09458541870117, 15.287832887916638]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09784698486328, 15.27479251640773]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02759456634521, 15.299878986467448]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93382453918457, 15.308281868394236]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92983341217041, 15.30157614743114]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.95253562927246, 15.30273517628297]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92249488830566, 15.311800216312458]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96682643890381, 15.298223206419895]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31757354736328, 15.123769637782896]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31139373779297, 15.12947708642233]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33928871154785, 15.138093900504904]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33448219299316, 15.098155331562987]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29620170593262, 15.100392753088316]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31319618225098, 15.137182523283409]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37048816680908, 15.100222183706437]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36194801330566, 15.12615799917948]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36499500274658, 15.128726549499726]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38267612457275, 15.122015110496507]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37623882293701, 15.109378800114797]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37658214569092, 15.10163091962979]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3938341140747, 15.085637074461852]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.405592918396, 15.090485076977183]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40031433105469, 15.086258619425926]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3486442565918, 15.109420231870512]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32843112945557, 15.122305115339552]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30757427215576, 15.140201789174156]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21697998046875, 16.177127546712057]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20496368408203, 16.103914188274725]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13252258300781, 16.165256950286185]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08377075195312, 16.15206656256195]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2168083190918, 16.16474308587028]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2200698852539, 16.11428497202865]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12308120727539, 16.104884491755307]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09561538696289, 16.173316388234277]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0355339050293, 16.071237020225656]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03210067749023, 16.114944638126527]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01441955566406, 16.130775965997483]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05853652954102, 16.068588136877775]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09827613830566, 16.094814211578825]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09827613830566, 16.08310362475143]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07372856140137, 16.087886905587137]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06900787353516, 16.05085471150479]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04085540771484, 16.130766343967043]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0106430053711, 16.168772816157762]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05802154541016, 16.203804883910053]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07716178894043, 16.1886388225087]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10342597961426, 16.23297978543721]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09784698486328, 16.26000803787406]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13861656188965, 16.25836008009345]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.16209125518799, 16.255594931987954]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.17513751983643, 16.255883329656132]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.17608165740967, 16.267418889224324]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18470764160156, 16.274422291222347]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18346309661865, 16.258149296605783]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20354747772217, 16.236683361375867]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2226448059082, 16.24364665666817]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22114276885986, 16.216780987416467]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20968437194824, 16.200091131443305]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21839618682861, 16.25299933392801]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23745059967041, 16.251639721262983]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18050193786621, 16.28863430934376]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.17642498016357, 16.311124267510888]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15140533447266, 16.327516419055677]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14183521270752, 16.33682391379529]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15350818634033, 16.346625132705416]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12089252471924, 16.38730728499911]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11394023895264, 16.39212434624597]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09252548217773, 16.40958004847803]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18423557281494, 16.365361388214115]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18526554107666, 16.35016662868973]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1719617843628, 16.36692609301412]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18608093261719, 16.383395908338034]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1029109954834, 16.4572047362317]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10643005371094, 16.490786078768124]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11677265167236, 16.50485892033537]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09437084197998, 16.516914628657805]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09625911712646, 16.491197618901595]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06342887878418, 16.531808355805193]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06969451904297, 16.537773752987707]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69924926757812, 16.481856354630107]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71448421478271, 16.52650105437957]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71070766448975, 16.541682016670368]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71916198730469, 16.517572939199002]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74010467529297, 16.500456136381434]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7531509399414, 16.530409546332976]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75366592407227, 16.525760489093962]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77108955383301, 16.51029025401283]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79606628417969, 16.495106824766406]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72066402435303, 16.45345939747582]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73336696624756, 16.44753255984381]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74997520446777, 16.42460551902692]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78087425231934, 16.365530879741524]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78739738464355, 16.40316263372647]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81014251708984, 16.30606286027529]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84121322631836, 16.285137680361395]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8945140838623, 16.272532065134712]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91159439086914, 16.22548043530107]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.97038841247559, 16.254981723429864]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01304626464844, 16.234133506250174]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.97098922729492, 16.24155012136978]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07003784179688, 16.32146697759559]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10162353515625, 16.31932530121978]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0882339477539, 16.33126896640349]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07827758789062, 16.36849557035993]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07407188415527, 16.47996809845656]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05252838134766, 16.572374158004383]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0648021697998, 16.599190857367546]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02772331237793, 16.614242719167116]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06900787353516, 16.604043772220997]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1182746887207, 16.6022342250788]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12720108032227, 16.58619431254184]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13998985290527, 16.571551583586494]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57918548583984, 16.756076549661024]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54141998291016, 16.79700096498353]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51446914672852, 16.749172768086716]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6588363647461, 16.791906437844055]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56425094604492, 16.819842485708342]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57352066040039, 16.73273418540148]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42803764343262, 16.948121359113532]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46425819396973, 16.958958640566017]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36890029907227, 17.056548059504003]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41679382324219, 17.05466077372892]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40555000305176, 17.053101697182374]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41155815124512, 17.070332872671862]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4273509979248, 17.077306943806448]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45893669128418, 17.10561078962313]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47618865966797, 17.076978758070034]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48666000366211, 17.062866225234025]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46709060668945, 17.134484482242595]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49515724182129, 17.141620186836132]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55892944335938, 17.168930178092534]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5819320678711, 17.14744337482901]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.63446044921875, 17.14391667714339]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61446189880371, 17.16901218402514]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69376945495605, 16.074856358733218]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72501182556152, 16.112791132646045]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67686080932617, 16.104132746547943]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65643310546875, 16.112049000073483]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62493324279785, 16.091185693125897]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61506271362305, 16.041038827992672]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61935424804688, 16.01398067015666]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57291984558105, 16.02833515005783]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58047294616699, 16.051432143998248]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54794311523438, 16.074856358733218]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54905891418457, 16.039224066425355]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51403999328613, 16.032047347448753]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47773361206055, 16.034522107315542]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47618865966797, 16.07477388394249]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56184768676758, 16.136125662038243]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65875053405762, 16.152202625128904]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67342758178711, 16.148327784243413]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66287040710449, 16.169185074765956]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72509765625, 16.202898330459472]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70501327514648, 16.237677115497604]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71514129638672, 16.267011784661282]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.75934410095215, 16.3004611430645]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77548027038574, 16.323938193955634]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72226524353027, 16.38867082037317]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70192337036133, 16.416500890020913]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.64742088317871, 16.41567757231466]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6218433380127, 16.438317538665885]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58527946472168, 16.43132001253394]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58656692504883, 16.479474350148216]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62407493591309, 16.515145407964663]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61403274536133, 16.493707749636286]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6121015548706, 16.512388682974432]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51974773406982, 16.475313086175827]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.53717136383057, 16.476671141201766]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51408290863037, 16.47621845725093]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51438331604004, 16.46346056557763]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5024528503418, 16.472267716055097]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49412727355957, 16.456834361527985]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48498630523682, 16.45741056217208]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47773361206055, 16.42691073415491]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46236991882324, 16.424440902827975]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4804801940918, 16.41312044107479]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47781944274902, 16.437119037260988]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48215389251709, 16.378990409250367]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4833984375, 16.34296006877493]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49391269683838, 16.362808462077]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51537036895752, 16.33171724184477]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52837371826172, 16.33744169240777]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50065040588379, 16.242410626979357]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60871124267578, 13.962065722734557]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58433532714844, 13.9847208157258]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62398910522461, 14.02019820533502]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57291984558105, 14.02244658759615]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.53215026855469, 14.029774495338406]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5328369140625, 13.981805763301251]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49112319946289, 13.978973962728082]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48039436340332, 14.03069046734251]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51060676574707, 14.059167043034028]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49996376037598, 14.101292550338052]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55068969726562, 14.084976081994137]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58141708374023, 14.074985831986345]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59137344360352, 14.110199517667624]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62244415283203, 14.101209306011787]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.64149856567383, 14.052672697138437]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.68947792053223, 14.025361124398193]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72406768798828, 13.998046299199094]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.76269149780273, 13.972810511638581]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77393531799316, 13.985720253769045]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77616691589355, 14.009455630498632]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8375358581543, 14.031356626501626]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8583927154541, 14.03218932272859]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8060359954834, 14.13650217373001]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8572769165039, 14.13650217373001]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87255477905273, 14.22546890502827]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9067153930664, 14.056845517675244]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98722457885742, 13.979566743718742]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.08455657958984, 13.943083469918419]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.03889465332031, 14.115619876872008]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12815856933594, 14.058011161819488]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07048034667969, 14.218812903486228]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01795196533203, 14.308153349284012]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07597351074219, 14.289190183813014]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14463806152344, 14.139258548391192]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.16935729980469, 14.06966727659149]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30205154418945, 13.969072147208047]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.09983444213867, 13.965740429253115]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.307373046875, 14.040192810395768]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36505126953125, 14.031033305354603]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31887435913086, 14.117950559172641]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24505996704102, 14.140580477961407]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26703262329102, 14.172288877526306]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.20866775512695, 14.196088072476188]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15090370178223, 14.231116602610525]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.10695838928223, 14.251332499352815]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18523597717285, 14.306646569094838]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21562004089355, 14.31280097802315]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24368667602539, 14.275372915103388]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28119468688965, 14.300658333723677]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31372451782227, 14.255658299646505]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33269309997559, 14.228620687376777]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37337684631348, 14.209650830923698]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.39114379882812, 14.15980578394681]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44736289978027, 14.145074850976462]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4597225189209, 14.220883174963063]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5040111541748, 14.148570413009152]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52684211730957, 14.1131129361205]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52461051940918, 14.1742028911647]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50160789489746, 14.07473607013907]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45620346069336, 14.050591137021234]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48358345031738, 14.036685830086071]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4143180847168, 14.01911564305516]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53250694274902, 14.211647732851928]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56400680541992, 14.27603835725607]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51568412780762, 14.29849587618384]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61550521850586, 14.30623072457247]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.65301322937012, 14.324942965799497]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.64863586425781, 14.253828163493754]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.60966873168945, 14.240268055850562]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62357330322266, 14.22687353030861]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66399955749512, 14.159972229709432]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.67095184326172, 14.147738141210342]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66133880615234, 14.13825002735454]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61825180053711, 14.128262111499597]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.73335075378418, 14.180610558416884]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.77197456359863, 14.193674981246417]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.71781539916992, 14.290178537965755]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.75661087036133, 14.284106686854933]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78210258483887, 14.335171664772378]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.70648574829102, 14.351969003348296]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6860580444336, 14.40734139553284]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.73927307128906, 14.416568792660343]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.70700073242188, 14.460705376887072]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.72021865844727, 14.504334624460286]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.70459747314453, 14.524692000741416]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78647994995117, 14.468767045850571]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76828384399414, 14.442253858617475]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.82699203491211, 14.459292476937842]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85857772827148, 14.427208920505814]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83334350585938, 14.391047041484446]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85076713562012, 14.35496245620416]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84355735778809, 14.319786859444262]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86467170715332, 14.286851516555418]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.89230918884277, 14.289429962438373]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.89170837402344, 14.311137640887727]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.90861701965332, 14.343736801684239]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.92277908325195, 14.407175132623095]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.97668075561523, 14.395702692604365]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.99264526367188, 14.367102160178638]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.92930221557617, 14.451396694210487]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.98801040649414, 14.479238467469447]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.99951171875, 14.463697370647687]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.93376541137695, 14.470429209247364]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.98895454406738, 14.527600044450123]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.03152656555176, 14.542139689153538]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.97616577148438, 14.55177686911122]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.99393272399902, 14.579689083968312]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.96028709411621, 14.6075147061904]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.00517654418945, 14.618727021501451]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.08491325378418, 14.577612403963212]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.08894729614258, 14.552856871685048]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.09564208984375, 14.553438409343524]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1822452545166, 14.530923476141272]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.12671279907227, 14.532335919480506]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.14696884155273, 14.612331919156182]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.19503402709961, 14.638824702217683]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.13006019592285, 14.65510081322018]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.18318939208984, 14.607680818739691]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1969223022461, 14.584589971155134]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43524742126465, 13.99704691472799]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38949966430664, 13.987719116829034]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4035758972168, 14.013952583466594]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37250518798828, 14.019865109792867]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37988662719727, 13.948988055704023]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4050350189209, 13.90800101300774]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36778450012207, 13.881922142229502]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33036231994629, 13.876089405287747]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31525611877441, 13.924996522848252]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29328346252441, 13.886254937539228]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26779174804688, 13.918831629349288]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26186943054199, 13.940074825889988]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29620170593262, 13.982721926614229]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31525611877441, 13.976308706831363]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34761428833008, 13.97730818140908]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31946182250977, 14.014452239470298]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36237716674805, 14.043846752255057]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35087585449219, 14.065161660249302]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4013442993164, 14.079814507374442]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36615371704102, 14.110365999725325]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36117553710938, 14.13425491362315]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4131031036377, 14.103623379137883]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48760414123535, 14.072155181734386]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4573917388916, 14.104788784604331]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45069694519043, 14.052256386629224]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45241355895996, 13.941657574079354]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29251098632812, 14.0348539303292]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2303695678711, 13.968312754015766]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21543502807617, 13.964148085314879]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21320343017578, 13.896503342463289]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24144172668457, 13.898919566998794]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2347469329834, 13.88208878970047]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21037101745605, 13.846923521435171]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18874168395996, 13.877922566992499]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23045539855957, 13.849256926926698]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24736404418945, 13.849173591419682]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24341583251953, 13.820254367403129]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15226364135742, 14.055586849501786]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12136459350586, 14.106786608689175]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09673118591309, 14.130426197136687]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05810737609863, 14.121520020520652]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08171081542969, 14.109783311991368]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04523277282715, 14.142078612169994]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01690864562988, 14.143077362825823]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04004001617432, 14.193628500384444]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06102561950684, 14.214222163250527]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02004146575928, 14.219630289230363]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04390239715576, 14.26131011605366]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0745439529419, 14.253157781424623]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08887767791748, 14.264845475651978]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03081321716309, 14.293001594005949]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02961158752441, 14.31599799435304]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0554895401001, 14.318991927518349]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03965377807617, 14.338368362351838]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04034042358398, 14.324439120155564]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00330448150635, 14.339283088277275]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0517988204956, 14.344771365428084]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07274150848389, 14.340322545024824]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09252548217773, 13.780661712203354]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11655807495117, 13.768074008761895]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10334014892578, 13.75640268490925]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14067649841309, 13.806585241931998]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.17106056213379, 13.807918850440887]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11355400085449, 13.81900417583068]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10909080505371, 13.869256584028971]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08076667785645, 13.855923670654954]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05634784698486, 13.971681200112423]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08510112762451, 13.968807628783841]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05274295806885, 13.981592663712304]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06566047668457, 14.019693682504125]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08419990539551, 14.049878523576046]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0710678100586, 14.065198410619008]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11376857757568, 14.074314921614343]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08136749267578, 14.135123973874865]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02875328063965, 14.151145559689226]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05008220672607, 14.256277332039849]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03227233886719, 14.288842861746613]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.63384628295898, 16.802424021040327]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6019172668457, 16.81228372584491]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.64569091796875, 16.76363754687552]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69478607177734, 16.77875863954899]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62766647338867, 16.709553374792268]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61101531982422, 16.738652238589847]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60981369018555, 16.74983028188162]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58045959472656, 16.733884932360702]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54818725585938, 16.807353937505326]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57599639892578, 16.84728153591706]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6183967590332, 16.678641247871404]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66217041015625, 16.680285635858272]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59110260009766, 16.58587491447973]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58166122436523, 16.55642375018512]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6432876586914, 16.55050006711018]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69461441040039, 16.559220981687623]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.63813781738281, 16.502281105064753]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58131790161133, 16.39303497004537]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61599349975586, 16.426956721602010]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51196670532227, 16.574842181516253]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55677032470703, 16.67904271108695]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54398155212402, 16.79329370859044]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56423759460449, 16.806194006445775]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55513954162598, 16.83963209379516]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54578399658203, 16.874624847298286]),
            {
              "class": 1,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52930450439453, 16.898606747223972]),
            {
              "class": 1,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.58226203918457, 16.931782155628422]),
            {
              "class": 1,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61350440979004, 16.920861193489372]),
            {
              "class": 1,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57788467407227, 16.961585766194116]),
            {
              "class": 1,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62380409240723, 16.955017883248857]),
            {
              "class": 1,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.65332984924316, 16.95509998320254]),
            {
              "class": 1,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62852478027344, 16.989004196054903]),
            {
              "class": 1,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.57522392272949, 17.00763659003951]),
            {
              "class": 1,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60054397583008, 17.042598105567574]),
            {
              "class": 1,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.615478515625, 17.05991230423282]),
            {
              "class": 1,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68002319335938, 17.058927653513166]),
            {
              "class": 1,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69032287597656, 17.044895816684768]),
            {
              "class": 1,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7319507598877, 17.07509167887913]),
            {
              "class": 1,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73126411437988, 17.058353271528745]),
            {
              "class": 1,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76533889770508, 17.035540673394486]),
            {
              "class": 1,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77872848510742, 17.057778887777477]),
            {
              "class": 1,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78997230529785, 17.10823585593685]),
            {
              "class": 1,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80653762817383, 17.028318839156338]),
            {
              "class": 1,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90721702575684, 17.01231491777222]),
            {
              "class": 1,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88996505737305, 17.061635430496914]),
            {
              "class": 1,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87545967102051, 17.092238783745326]),
            {
              "class": 1,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92438316345215, 17.06762522186013]),
            {
              "class": 1,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.95262145996094, 17.09986832802805]),
            {
              "class": 1,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96626853942871, 17.11791546799621]),
            {
              "class": 1,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8912525177002, 17.142276329821073]),
            {
              "class": 1,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94669914245605, 17.140553949542593]),
            {
              "class": 1,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96274948120117, 17.029713987955656]),
            {
              "class": 1,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00266075134277, 17.064343168206758]),
            {
              "class": 1,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01313209533691, 16.998361665094077]),
            {
              "class": 1,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04351615905762, 17.060076412181253]),
            {
              "class": 1,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08480072021484, 17.070332872671862]),
            {
              "class": 1,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01493453979492, 17.141374132619262]),
            {
              "class": 1,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02326011657715, 17.165731918437366]),
            {
              "class": 1,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96541023254395, 17.182132666064224]),
            {
              "class": 1,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9864387512207, 17.28837427931803]),
            {
              "class": 1,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9809455871582, 17.319349888073486]),
            {
              "class": 1,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93639945983887, 17.330411340569942]),
            {
              "class": 1,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02317428588867, 17.341226338719522]),
            {
              "class": 1,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01768112182617, 17.38693723893421]),
            {
              "class": 1,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03767967224121, 17.365803508914443]),
            {
              "class": 1,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05003929138184, 17.391933616904137]),
            {
              "class": 1,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06952285766602, 17.413637608693985]),
            {
              "class": 1,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88859176635742, 16.58669750801045]),
            {
              "class": 1,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88653182983398, 16.610715687443726]),
            {
              "class": 1,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8245620727539, 16.582913548645013]),
            {
              "class": 1,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89288330078125, 16.53174053692166]),
            {
              "class": 1,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83636379241943, 16.485683446918017]),
            {
              "class": 1,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8603105545044, 16.492390963802634]),
            {
              "class": 1,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83074188232422, 16.508438680128627]),
            {
              "class": 1,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73280906677246, 16.49926284122408]),
            {
              "class": 1,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.10101461410522, 14.974556192419586]),
            {
              "class": 1,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.08979225158691, 14.969995767426056]),
            {
              "class": 1,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12101316452026, 14.988734348021499]),
            {
              "class": 1,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12794399261475, 14.991180192170606]),
            {
              "class": 1,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11605644226074, 15.020659773106324]),
            {
              "class": 1,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15073204040527, 15.002835945940037]),
            {
              "class": 1,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.19029998779297, 15.01062887190993]),
            {
              "class": 1,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07794761657715, 15.011043381289142]),
            {
              "class": 1,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06833457946777, 14.991726390173465]),
            {
              "class": 1,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.96748352050781, 14.983932775402423]),
            {
              "class": 1,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91135025024414, 14.989985288090764]),
            {
              "class": 1,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91263771057129, 14.971495568474742]),
            {
              "class": 1,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85779190063477, 15.002172705078973]),
            {
              "class": 1,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90791702270508, 15.029944154278786]),
            {
              "class": 1,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8335018157959, 14.976055961542285]),
            {
              "class": 1,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78483581542969, 14.986834686406484]),
            {
              "class": 1,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.80852508544922, 14.970666395669193]),
            {
              "class": 1,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77007293701172, 14.95176038543128]),
            {
              "class": 1,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7577133178711, 14.94263846876759]),
            {
              "class": 1,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77462196350098, 14.910294006154023]),
            {
              "class": 1,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70711612701416, 14.912180900118356]),
            {
              "class": 1,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71780204772949, 14.931691657164535]),
            {
              "class": 1,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6950569152832, 14.872967430707005]),
            {
              "class": 1,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65960884094238, 14.86558429803114]),
            {
              "class": 1,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66287040710449, 14.89212921384963]),
            {
              "class": 1,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62604904174805, 14.867741194367985]),
            {
              "class": 1,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58279037475586, 14.869566243663037]),
            {
              "class": 1,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59394836425781, 14.894866472381956]),
            {
              "class": 1,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5386734008789, 14.857952030261194]),
            {
              "class": 1,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62145709991455, 14.777713966275627]),
            {
              "class": 1,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65415859222412, 14.805867053881435]),
            {
              "class": 1,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71166515350342, 14.82384754955723]),
            {
              "class": 1,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6285810470581, 14.544834935573165]),
            {
              "class": 1,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56038856506348, 14.757250701022867]),
            {
              "class": 1,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52047729492188, 14.801194467342508]),
            {
              "class": 1,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5487585067749, 14.797252755170403]),
            {
              "class": 1,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60356140136719, 14.819491371560837]),
            {
              "class": 1,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51009178161621, 14.853010939299358]),
            {
              "class": 1,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6560468673706, 14.928742673704216]),
            {
              "class": 1,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7302474975586, 14.84529526150989]),
            {
              "class": 1,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.80646514892578, 14.850148703874172]),
            {
              "class": 1,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77273368835449, 14.893617408083273]),
            {
              "class": 1,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85987329483032, 14.871985414743405]),
            {
              "class": 1,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87630987167358, 14.875075485186182]),
            {
              "class": 1,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86860656738281, 14.895813067129332]),
            {
              "class": 1,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8882188796997, 14.94603121270657]),
            {
              "class": 1,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89251041412354, 14.942983625050317]),
            {
              "class": 1,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0012149810791, 14.695038591612356]),
            {
              "class": 1,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01065635681152, 14.698691579355915]),
            {
              "class": 1,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94971656799316, 14.671790875455914]),
            {
              "class": 1,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93864440917969, 14.675527282224218]),
            {
              "class": 1,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93156337738037, 14.653061499867064]),
            {
              "class": 1,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92323780059814, 14.673986346503915]),
            {
              "class": 1,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94666957855225, 14.653019980326958]),
            {
              "class": 1,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94177722930908, 14.634210820015848]),
            {
              "class": 1,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98773956298828, 14.626362812729042]),
            {
              "class": 1,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98834037780762, 14.647954537415341]),
            {
              "class": 1,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.00859642028809, 14.660825515559832]),
            {
              "class": 1,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99778175354004, 14.661738911078583]),
            {
              "class": 1,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98323345184326, 14.676352721121201]),
            {
              "class": 1,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97713947296143, 14.707403825230115]),
            {
              "class": 1,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9902286529541, 14.718569520024142]),
            {
              "class": 1,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99228858947754, 14.74301582927008]),
            {
              "class": 1,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99031448364258, 14.75102565301101]),
            {
              "class": 1,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.96555233001709, 14.76596546893056]),
            {
              "class": 1,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95383644104004, 14.775634302556316]),
            {
              "class": 1,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.96619606018066, 14.786132591642948]),
            {
              "class": 1,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93029737472534, 14.855186271195176]),
            {
              "class": 1,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88902354240417, 14.863688489549789]),
            {
              "class": 1,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87507605552673, 14.865938732408933]),
            {
              "class": 1,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.945725440979, 14.919824692457736]),
            {
              "class": 1,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97282648086548, 14.910535538576548]),
            {
              "class": 1,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97029447555542, 14.943729977048243]),
            {
              "class": 1,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97601294517517, 14.951950043326725]),
            {
              "class": 1,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01812362670898, 14.977727703474173]),
            {
              "class": 1,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01288795471191, 14.968275218233297]),
            {
              "class": 1,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99694490432739, 14.988464888905662]),
            {
              "class": 1,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.04113698005676, 14.967662479781715]),
            {
              "class": 1,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14030361175537, 15.06338458830084]),
            {
              "class": 1,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14373683929443, 15.067735820090201]),
            {
              "class": 1,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.153564453125, 15.082405031585601]),
            {
              "class": 1,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1628770828247, 15.093344123768418]),
            {
              "class": 1,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17738246917725, 15.07867566694408]),
            {
              "class": 1,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15369319915771, 15.116463532977109]),
            {
              "class": 1,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.16249084472656, 15.124915161304676]),
            {
              "class": 1,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17982864379883, 15.121145113816606]),
            {
              "class": 1,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.20025634765625, 15.132537909606]),
            {
              "class": 1,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17347717285156, 15.144468617204405]),
            {
              "class": 1,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.20180130004883, 15.151759274221961]),
            {
              "class": 1,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.20368957519531, 15.173256964573405]),
            {
              "class": 1,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.19742393493652, 15.184936873633715]),
            {
              "class": 1,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32035493850708, 15.124001299922613]),
            {
              "class": 1,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3108491897583, 15.129200563546625]),
            {
              "class": 1,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33222103118896, 15.108319880187539]),
            {
              "class": 1,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35466575622559, 15.116129662143585]),
            {
              "class": 1,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35760545730591, 15.111427254923056]),
            {
              "class": 1,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34955883026123, 15.120894109390827]),
            {
              "class": 1,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34762763977051, 15.143016313446072]),
            {
              "class": 1,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34048223495483, 15.15558848376225]),
            {
              "class": 1,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55632495880127, 15.008155238089165]),
            {
              "class": 1,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5514326095581, 15.012922102584513]),
            {
              "class": 1,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54836416244507, 15.010870291337563]),
            {
              "class": 1,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56428575515747, 15.017688860720105]),
            {
              "class": 1,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5531063079834, 15.021294946188233]),
            {
              "class": 1,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54475927352905, 15.021750883692304]),
            {
              "class": 1,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56643152236938, 15.007284755699278]),
            {
              "class": 1,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55362129211426, 14.998973542957685]),
            {
              "class": 1,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54321432113647, 15.008901363029887]),
            {
              "class": 1,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52536153793335, 15.011761484501768]),
            {
              "class": 1,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5217137336731, 15.006455721555533]),
            {
              "class": 1,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5182375907898, 15.013688936072874]),
            {
              "class": 1,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51360273361206, 15.01891162066213]),
            {
              "class": 1,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50746583938599, 14.995843800563255]),
            {
              "class": 1,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51937484741211, 14.986516482125959]),
            {
              "class": 1,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50087833404541, 15.00133636448785]),
            {
              "class": 1,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48836851119995, 14.999035722806136]),
            {
              "class": 1,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48733854293823, 14.982039224875502]),
            {
              "class": 1,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4848279953003, 14.97907506323746]),
            {
              "class": 1,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48075103759766, 14.993812552516156]),
            {
              "class": 1,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47169589996338, 14.993936915195793]),
            {
              "class": 1,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47671699523926, 15.003098100390767]),
            {
              "class": 1,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48605108261108, 15.00606192921076]),
            {
              "class": 1,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49444103240967, 14.969373883769851]),
            {
              "class": 1,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48231744766235, 14.96176602764515]),
            {
              "class": 1,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47701740264893, 14.952603074182964]),
            {
              "class": 1,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4607310295105, 14.941656770647427]),
            {
              "class": 1,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4818024635315, 14.94285923279839]),
            {
              "class": 1,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49152278900146, 14.93473211618772]),
            {
              "class": 1,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51139259338379, 14.934338192006935]),
            {
              "class": 1,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51866674423218, 14.92461425565062]),
            {
              "class": 1,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52538299560547, 14.931497769953108]),
            {
              "class": 1,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53222799301147, 14.92318361808044]),
            {
              "class": 1,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.510169506073, 14.91428857091703]),
            {
              "class": 1,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49141550064087, 14.917357300085342]),
            {
              "class": 1,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48064374923706, 14.921711502816228]),
            {
              "class": 1,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47201776504517, 14.921670034634651]),
            {
              "class": 1,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46658897399902, 14.92975617873617]),
            {
              "class": 1,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44236326217651, 14.94074455348883]),
            {
              "class": 1,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43011093139648, 14.936349271043769]),
            {
              "class": 1,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.42360925674438, 14.928615843506746]),
            {
              "class": 1,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.41867399215698, 14.93485651314735]),
            {
              "class": 1,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40869617462158, 14.938132273823308]),
            {
              "class": 1,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.41961812973022, 14.924178845224105]),
            {
              "class": 1,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.42545461654663, 14.925236269015747]),
            {
              "class": 1,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40788078308105, 14.910680684690657]),
            {
              "class": 1,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40410423278809, 14.904708878009885]),
            {
              "class": 1,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37837648391724, 14.903340315642753]),
            {
              "class": 1,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37751817703247, 14.889322418500253]),
            {
              "class": 1,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37187480926514, 14.877066379608543]),
            {
              "class": 1,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35584592819214, 14.864436331719919]),
            {
              "class": 1,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34852886199951, 14.868480516179215]),
            {
              "class": 1,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35833501815796, 14.866779893998112]),
            {
              "class": 1,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36524438858032, 14.845935814549737]),
            {
              "class": 1,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35494470596313, 14.845500245170854]),
            {
              "class": 1,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35440826416016, 14.852967027346148]),
            {
              "class": 1,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34556770324707, 14.840356311840996]),
            {
              "class": 1,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37269020080566, 14.835917496822507]),
            {
              "class": 1,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37000799179077, 14.84166304843597]),
            {
              "class": 1,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36333465576172, 14.828304924441328]),
            {
              "class": 1,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35651111602783, 14.814302900135798]),
            {
              "class": 1,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35509490966797, 14.804884733174577]),
            {
              "class": 1,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3692569732666, 14.80380597427226]),
            {
              "class": 1,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3294529914856, 14.802810192059626]),
            {
              "class": 1,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3267707824707, 14.810278447156664]),
            {
              "class": 1,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32086992263794, 14.816149144786682]),
            {
              "class": 1,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33067607879639, 14.821812246497373]),
            {
              "class": 1,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33807897567749, 14.823430248355262]),
            {
              "class": 1,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3283371925354, 14.842783102088928]),
            {
              "class": 1,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3166856765747, 14.837535393221584]),
            {
              "class": 1,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31329536437988, 14.851929989694803]),
            {
              "class": 1,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32241487503052, 14.874992530853122]),
            {
              "class": 1,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33119106292725, 14.884366168579158]),
            {
              "class": 1,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3312554359436, 14.872918662159604]),
            {
              "class": 1,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33694171905518, 14.886688776874626]),
            {
              "class": 1,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32910966873169, 14.880861471193931]),
            {
              "class": 1,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3167929649353, 14.88917725798889]),
            {
              "class": 1,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31404638290405, 14.88500903588004]),
            {
              "class": 1,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33288621902466, 14.895875276872923]),
            {
              "class": 1,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30488395690918, 14.887663435400784]),
            {
              "class": 1,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30614995956421, 14.88399288991177]),
            {
              "class": 1,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31711483001709, 14.895211705348313]),
            {
              "class": 1,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3727331161499, 14.92020033880018]),
            {
              "class": 1,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36955738067627, 14.925881443997708]),
            {
              "class": 1,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37230396270752, 14.908796207492578]),
            {
              "class": 1,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29621505737305, 14.873914121620617]),
            {
              "class": 1,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2924599647522, 14.877418931913944]),
            {
              "class": 1,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30421876907349, 14.87410076975817]),
            {
              "class": 1,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2949275970459, 14.865577006803532]),
            {
              "class": 1,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2804651260376, 14.863461568235993]),
            {
              "class": 1,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28662347793579, 14.866945808947134]),
            {
              "class": 1,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27885580062866, 14.861138709853584]),
            {
              "class": 1,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27224683761597, 14.867879078158913]),
            {
              "class": 1,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2709379196167, 14.855538859240557]),
            {
              "class": 1,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2779974937439, 14.844774294255647]),
            {
              "class": 1,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26733303070068, 14.847263258671724]),
            {
              "class": 1,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26482248306274, 14.856845504037267]),
            {
              "class": 1,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28441333770752, 14.841268954104098]),
            {
              "class": 1,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28844738006592, 14.838033205063441]),
            {
              "class": 1,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27750396728516, 14.849855899459927]),
            {
              "class": 1,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26256942749023, 14.859832091031674]),
            {
              "class": 1,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26877069473267, 14.870118907801043]),
            {
              "class": 1,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43217086791992, 14.850412178896182]),
            {
              "class": 1,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4421272277832, 14.851905522027613]),
            {
              "class": 1,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49420499801636, 14.861553507826152]),
            {
              "class": 1,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49858236312866, 14.858815826482006]),
            {
              "class": 1,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47688865661621, 14.869745604475105]),
            {
              "class": 1,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47214651107788, 14.877128594763136]),
            {
              "class": 1,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46710395812988, 14.894133397260996]),
            {
              "class": 1,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4767599105835, 14.899483411257242]),
            {
              "class": 1,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4755368232727, 14.907383770240521]),
            {
              "class": 1,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61625623703003, 14.883246330637974]),
            {
              "class": 1,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6205906867981, 14.881773942270778]),
            {
              "class": 1,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.59902572631836, 14.879264637518071]),
            {
              "class": 1,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.59964799880981, 14.869538213459439]),
            {
              "class": 1,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.59218072891235, 14.871155858095692]),
            {
              "class": 1,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.58756732940674, 14.863171212304913]),
            {
              "class": 1,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57773971557617, 14.86315047258061]),
            {
              "class": 1,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57304048538208, 14.853506284957637]),
            {
              "class": 1,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57334089279175, 14.842471976656253]),
            {
              "class": 1,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55430793762207, 14.84205714204955]),
            {
              "class": 1,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54995203018188, 14.876236842499106]),
            {
              "class": 1,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.60736203193665, 15.029946016166004]),
            {
              "class": 1,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61091327667236, 15.025293514066727]),
            {
              "class": 1,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61325216293335, 15.021874015795156]),
            {
              "class": 1,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62124514579773, 15.009335386984132]),
            {
              "class": 1,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62986040115356, 15.003511409951194]),
            {
              "class": 1,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61047339439392, 14.997075834434062]),
            {
              "class": 1,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6309118270874, 14.987800388968962]),
            {
              "class": 1,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45817756652832, 15.430103947089181]),
            {
              "class": 1,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46860599517822, 15.433227244782861]),
            {
              "class": 1,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44375801086426, 15.437881077987429]),
            {
              "class": 1,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44244909286499, 15.426897864155615]),
            {
              "class": 1,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47613763809204, 15.45401355806311]),
            {
              "class": 1,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48731708526611, 15.444375586274955]),
            {
              "class": 1,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5045690536499, 15.450146013768022]),
            {
              "class": 1,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51658535003662, 15.465284866321275]),
            {
              "class": 1,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51637077331543, 15.452462412601548]),
            {
              "class": 1,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90466618537903, 15.354012156978463]),
            {
              "class": 1,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90200543403625, 15.35821255213225]),
            {
              "class": 1,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91389298439026, 15.357395240490101]),
            {
              "class": 1,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91451525688171, 15.363778462705277]),
            {
              "class": 1,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.896737575531, 15.353060331546555]),
            {
              "class": 1,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88500022888184, 15.36077826914006]),
            {
              "class": 1,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87573051452637, 15.365640630104378]),
            {
              "class": 1,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86440086364746, 15.364926801233706]),
            {
              "class": 1,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85942268371582, 15.36316808199454]),
            {
              "class": 1,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85348963737488, 15.367730375936313]),
            {
              "class": 1,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85719108581543, 15.358791910344177]),
            {
              "class": 1,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84063649177551, 15.348435639671791]),
            {
              "class": 1,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.82470417022705, 15.362226643836156]),
            {
              "class": 1,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.81869602203369, 15.369530437235658]),
            {
              "class": 1,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.79203486442566, 15.369995967800453]),
            {
              "class": 1,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78163862228394, 15.375540874127601]),
            {
              "class": 1,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78150987625122, 15.380320133936813]),
            {
              "class": 1,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77697157859802, 15.385006184807462]),
            {
              "class": 1,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78302264213562, 15.389805915663782]),
            {
              "class": 1,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78920245170593, 15.392888443067799]),
            {
              "class": 1,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.79371929168701, 15.39707771081007]),
            {
              "class": 1,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78721761703491, 15.399436076282072]),
            {
              "class": 1,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77973961830139, 15.399342983415028]),
            {
              "class": 1,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.76358199119568, 15.40028425381834]),
            {
              "class": 1,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.75656533241272, 15.39939470167964]),
            {
              "class": 1,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67310571670532, 15.302670680408925]),
            {
              "class": 1,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.68123817443848, 15.308051803407013]),
            {
              "class": 1,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66887855529785, 15.30349855448759]),
            {
              "class": 1,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66323518753052, 15.300725163440811]),
            {
              "class": 1,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66239833831787, 15.311756419226915]),
            {
              "class": 1,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66093921661377, 15.343439586692519]),
            {
              "class": 1,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.63720703125, 15.366448776484232]),
            {
              "class": 1,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61002016067505, 15.3790282672466]),
            {
              "class": 1,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61362504959106, 15.38136614812103]),
            {
              "class": 1,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60439825057983, 15.395682509769035]),
            {
              "class": 1,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59160947799683, 15.394979127718484]),
            {
              "class": 1,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57830572128296, 15.4145281254896]),
            {
              "class": 1,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38151741027832, 15.148318670747637]),
            {
              "class": 1,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3770112991333, 15.15502927624508]),
            {
              "class": 1,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4158067703247, 15.153227375300743]),
            {
              "class": 1,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30374145507812, 16.85096848353107]),
            {
              "class": 1,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34219360351562, 16.872407188983786]),
            {
              "class": 1,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33876037597656, 16.81326003981697]),
            {
              "class": 1,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.38064575195312, 16.83199196991952]),
            {
              "class": 1,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.42879676818848, 16.811041662343076]),
            {
              "class": 1,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.42055702209473, 16.87955288366285]),
            {
              "class": 1,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41815376281738, 16.90993959804446]),
            {
              "class": 1,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.39017295837402, 16.977511928613502]),
            {
              "class": 1,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3954086303711, 17.01822421732207]),
            {
              "class": 1,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3763542175293, 16.710612422142678]),
            {
              "class": 1,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36485290527344, 16.66580490061826]),
            {
              "class": 1,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.40424919128418, 16.65840448330188]),
            {
              "class": 1,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41283226013184, 16.47478291485687]),
            {
              "class": 1,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.45437431335449, 16.45560446324413]),
            {
              "class": 1,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41635131835938, 16.395175837907225]),
            {
              "class": 1,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43025588989258, 16.27978253303759]),
            {
              "class": 1,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.40776824951172, 16.21146997561154]),
            {
              "class": 1,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41978454589844, 16.210728213360284]),
            {
              "class": 1,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46759223937988, 16.197540862995552]),
            {
              "class": 1,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.4437313079834, 16.14659644783191]),
            {
              "class": 1,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43471908569336, 16.12153159618743]),
            {
              "class": 1,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.43729400634766, 16.094072052046595]),
            {
              "class": 1,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.47772026062012, 16.067845879406633]),
            {
              "class": 1,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.4012451171875, 16.061082594616437]),
            {
              "class": 1,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.51651573181152, 16.037821739350537]),
            {
              "class": 1,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48063850402832, 16.004987970060448]),
            {
              "class": 1,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.62182998657227, 16.00969062521314]),
            {
              "class": 1,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55436706542969, 16.02759270228766]),
            {
              "class": 1,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5726490020752, 15.969920824841209]),
            {
              "class": 1,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.26546096801758, 15.848169623270458]),
            {
              "class": 1,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.23593521118164, 15.85031638391082]),
            {
              "class": 1,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.28202629089355, 15.821580926761596]),
            {
              "class": 1,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.22387599945068, 15.818497576668705]),
            {
              "class": 1,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.21879053115845, 15.827601847966411]),
            {
              "class": 1,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.20490741729736, 15.828572120275242]),
            {
              "class": 1,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.19922113418579, 15.818765962412588]),
            {
              "class": 1,
              "system:index": "1186"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.1948652267456, 15.809413541482403]),
            {
              "class": 1,
              "system:index": "1187"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.20065879821777, 15.78717658041865]),
            {
              "class": 1,
              "system:index": "1188"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.20027256011963, 15.781725365069091]),
            {
              "class": 1,
              "system:index": "1189"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.18724775314331, 15.798057924026091]),
            {
              "class": 1,
              "system:index": "1190"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.18424367904663, 15.829005644694801]),
            {
              "class": 1,
              "system:index": "1191"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.26395893096924, 15.940413574039987]),
            {
              "class": 1,
              "system:index": "1192"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.23366069793701, 15.939381942480775]),
            {
              "class": 1,
              "system:index": "1193"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.23404693603516, 16.000775403087644]),
            {
              "class": 1,
              "system:index": "1194"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.22623634338379, 16.015914576286953]),
            {
              "class": 1,
              "system:index": "1195"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34562683105469, 16.132080773413122]),
            {
              "class": 1,
              "system:index": "1196"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35116291046143, 16.174538481807055]),
            {
              "class": 1,
              "system:index": "1197"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33785915374756, 16.198772385075458]),
            {
              "class": 1,
              "system:index": "1198"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35824394226074, 16.229266603043214]),
            {
              "class": 1,
              "system:index": "1199"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30417060852051, 16.249208915416364]),
            {
              "class": 1,
              "system:index": "1200"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7964096069336, 15.834059651491096]),
            {
              "class": 1,
              "system:index": "1201"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89459991455078, 15.822498971176138]),
            {
              "class": 1,
              "system:index": "1202"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85666275024414, 15.794585461973032]),
            {
              "class": 1,
              "system:index": "1203"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75057601928711, 15.8517296985368]),
            {
              "class": 1,
              "system:index": "1204"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81718063354492, 15.935930129191497]),
            {
              "class": 1,
              "system:index": "1205"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85614776611328, 15.962173637861047]),
            {
              "class": 1,
              "system:index": "1206"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8745584487915, 15.884656609358242]),
            {
              "class": 1,
              "system:index": "1207"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82400417327881, 15.913960865846853]),
            {
              "class": 1,
              "system:index": "1208"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77902889251709, 15.923452878096251]),
            {
              "class": 1,
              "system:index": "1209"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75430965423584, 15.94099128539579]),
            {
              "class": 1,
              "system:index": "1210"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7788143157959, 15.975444630426965]),
            {
              "class": 1,
              "system:index": "1211"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8198413848877, 15.96772924650893]),
            {
              "class": 1,
              "system:index": "1212"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82065677642822, 15.98266464009402]),
            {
              "class": 1,
              "system:index": "1213"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84301567077637, 15.93050969211187]),
            {
              "class": 1,
              "system:index": "1214"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88524436950684, 15.962860562486819]),
            {
              "class": 1,
              "system:index": "1215"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89837646484375, 15.9296430791893]),
            {
              "class": 1,
              "system:index": "1216"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89284038543701, 15.909255963129457]),
            {
              "class": 1,
              "system:index": "1217"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87172603607178, 15.907563822067559]),
            {
              "class": 1,
              "system:index": "1218"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76641178131104, 15.835861754874657]),
            {
              "class": 1,
              "system:index": "1219"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72160816192627, 15.916519626345009]),
            {
              "class": 1,
              "system:index": "1220"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68916416168213, 15.95101843881415]),
            {
              "class": 1,
              "system:index": "1221"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71354007720947, 15.974578211761084]),
            {
              "class": 1,
              "system:index": "1222"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71701622009277, 16.02119445388165]),
            {
              "class": 1,
              "system:index": "1223"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70877647399902, 16.052582090364126]),
            {
              "class": 1,
              "system:index": "1224"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94923114776611, 16.145066379552503]),
            {
              "class": 1,
              "system:index": "1225"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88266944885254, 16.13183342027011]),
            {
              "class": 1,
              "system:index": "1226"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.989914894104, 15.848164785292498]),
            {
              "class": 1,
              "system:index": "1227"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96463775634766, 15.819841921154426]),
            {
              "class": 1,
              "system:index": "1228"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00918388366699, 15.859517587646437]),
            {
              "class": 1,
              "system:index": "1229"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.99085903167725, 15.8765662320027]),
            {
              "class": 1,
              "system:index": "1230"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.20838356018066, 15.878634971902066]),
            {
              "class": 1,
              "system:index": "1231"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.16134834289551, 15.860719592694965]),
            {
              "class": 1,
              "system:index": "1232"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.12289619445801, 15.883670805495116]),
            {
              "class": 1,
              "system:index": "1233"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.03878211975098, 15.790694014148563]),
            {
              "class": 1,
              "system:index": "1234"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04908180236816, 15.739480740290698]),
            {
              "class": 1,
              "system:index": "1235"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.97157669067383, 15.65073561711698]),
            {
              "class": 1,
              "system:index": "1236"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9519214630127, 15.615441692492968]),
            {
              "class": 1,
              "system:index": "1237"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96599769592285, 15.562861491714836]),
            {
              "class": 1,
              "system:index": "1238"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.92179489135742, 15.582704658292815]),
            {
              "class": 1,
              "system:index": "1239"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9962100982666, 15.584606194499727]),
            {
              "class": 1,
              "system:index": "1240"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.93715858459473, 15.546489438194012]),
            {
              "class": 1,
              "system:index": "1241"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.93501281738281, 15.49910237826416]),
            {
              "class": 1,
              "system:index": "1242"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.98213386535645, 15.456254458020627]),
            {
              "class": 1,
              "system:index": "1243"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.92926216125488, 15.39229697696418]),
            {
              "class": 1,
              "system:index": "1244"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.94196510314941, 15.42125817304554]),
            {
              "class": 1,
              "system:index": "1245"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8588809967041, 15.425477896182333]),
            {
              "class": 1,
              "system:index": "1246"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.70841979980469, 15.489177008974893]),
            {
              "class": 1,
              "system:index": "1247"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68979454040527, 15.46245885665705]),
            {
              "class": 1,
              "system:index": "1248"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59538078308105, 15.52358291679993]),
            {
              "class": 1,
              "system:index": "1249"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48442840576172, 14.345732514716598]),
            {
              "class": 1,
              "system:index": "1250"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51824569702148, 14.373670629461381]),
            {
              "class": 1,
              "system:index": "1251"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45370101928711, 14.373254909276655]),
            {
              "class": 1,
              "system:index": "1252"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46717643737793, 14.401189585337594]),
            {
              "class": 1,
              "system:index": "1253"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4973030090332, 14.40077391636855]),
            {
              "class": 1,
              "system:index": "1254"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.472412109375, 14.51239470755673]),
            {
              "class": 1,
              "system:index": "1255"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44683456420898, 14.510400487511049]),
            {
              "class": 1,
              "system:index": "1256"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4203987121582, 14.525273612542566]),
            {
              "class": 1,
              "system:index": "1257"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40323257446289, 14.546127538771755]),
            {
              "class": 1,
              "system:index": "1258"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37671089172363, 14.555930696237208]),
            {
              "class": 1,
              "system:index": "1259"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33156394958496, 14.633841977743948]),
            {
              "class": 1,
              "system:index": "1260"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3804874420166, 14.659372378474533]),
            {
              "class": 1,
              "system:index": "1261"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39576530456543, 14.665143351720518]),
            {
              "class": 1,
              "system:index": "1262"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32632827758789, 14.691795800339312]),
            {
              "class": 1,
              "system:index": "1263"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33366680145264, 14.710724537649451]),
            {
              "class": 1,
              "system:index": "1264"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30864715576172, 14.72338429011811]),
            {
              "class": 1,
              "system:index": "1265"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3821611404419, 14.761442132992718]),
            {
              "class": 1,
              "system:index": "1266"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36130428314209, 14.798953923948137]),
            {
              "class": 1,
              "system:index": "1267"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33791542053223, 14.813268108134103]),
            {
              "class": 1,
              "system:index": "1268"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35696983337402, 14.821233853276166]),
            {
              "class": 1,
              "system:index": "1269"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38632392883301, 14.8506464866717]),
            {
              "class": 1,
              "system:index": "1270"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39340496063232, 14.863381039872365]),
            {
              "class": 1,
              "system:index": "1271"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42254447937012, 14.840358742533946]),
            {
              "class": 1,
              "system:index": "1272"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46430110931396, 14.84811607888376]),
            {
              "class": 1,
              "system:index": "1273"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47730445861816, 14.836957042022451]),
            {
              "class": 1,
              "system:index": "1274"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36392211914062, 14.951506752151106]),
            {
              "class": 1,
              "system:index": "1275"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34422397613525, 14.968049621856382]),
            {
              "class": 1,
              "system:index": "1276"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42868137359619, 14.925881443997708]),
            {
              "class": 1,
              "system:index": "1277"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46593189239502, 14.931728264087079]),
            {
              "class": 1,
              "system:index": "1278"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18228554725647, 14.761645980163152]),
            {
              "class": 1,
              "system:index": "1279"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16883420944214, 15.024983867153416]),
            {
              "class": 1,
              "system:index": "1280"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.15928554534912, 15.024486488269325]),
            {
              "class": 1,
              "system:index": "1281"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.18372583389282, 15.015284769912812]),
            {
              "class": 1,
              "system:index": "1282"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.18756675720215, 15.027719430299005]),
            {
              "class": 1,
              "system:index": "1283"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.19138622283936, 15.026330929144587]),
            {
              "class": 1,
              "system:index": "1284"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16782569885254, 15.056468731029206]),
            {
              "class": 1,
              "system:index": "1285"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1426773071289, 15.013613321490997]),
            {
              "class": 1,
              "system:index": "1286"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20181465148926, 15.339486000903968]),
            {
              "class": 1,
              "system:index": "1287"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20867037773132, 15.345828385663838]),
            {
              "class": 1,
              "system:index": "1288"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.21485018730164, 15.343169366890532]),
            {
              "class": 1,
              "system:index": "1289"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94223594665527, 15.622793695863557]),
            {
              "class": 1,
              "system:index": "1290"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94772911071777, 15.670565437006662]),
            {
              "class": 1,
              "system:index": "1291"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96725559234619, 15.690398173522157]),
            {
              "class": 1,
              "system:index": "1292"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01665115356445, 15.69295976141713]),
            {
              "class": 1,
              "system:index": "1293"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02441883087158, 15.699898255807325]),
            {
              "class": 1,
              "system:index": "1294"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04016876220703, 15.576413929454157]),
            {
              "class": 1,
              "system:index": "1295"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01903295516968, 15.572403987900394]),
            {
              "class": 1,
              "system:index": "1296"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01969814300537, 15.560187653039389]),
            {
              "class": 1,
              "system:index": "1297"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03214359283447, 15.559505501280317]),
            {
              "class": 1,
              "system:index": "1298"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0449538230896, 15.551836306204729]),
            {
              "class": 1,
              "system:index": "1299"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04302263259888, 15.560042954370378]),
            {
              "class": 1,
              "system:index": "1300"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07518768310547, 15.532134881348766]),
            {
              "class": 1,
              "system:index": "1301"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09859800338745, 15.53184544448882]),
            {
              "class": 1,
              "system:index": "1302"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11668682098389, 15.518365506415282]),
            {
              "class": 1,
              "system:index": "1303"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11385440826416, 15.535876849875907]),
            {
              "class": 1,
              "system:index": "1304"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13065576553345, 15.552704531311129]),
            {
              "class": 1,
              "system:index": "1305"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12374639511108, 15.556632170563633]),
            {
              "class": 1,
              "system:index": "1306"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05616545677185, 15.459730802233679]),
            {
              "class": 1,
              "system:index": "1307"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0660252571106, 15.464663231519479]),
            {
              "class": 1,
              "system:index": "1308"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07872819900513, 15.453206963871892]),
            {
              "class": 1,
              "system:index": "1309"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08529424667358, 15.428097565502025]),
            {
              "class": 1,
              "system:index": "1310"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0807237625122, 15.43707474422373]),
            {
              "class": 1,
              "system:index": "1311"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10612964630127, 15.419885677982963]),
            {
              "class": 1,
              "system:index": "1312"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11966943740845, 15.43051763160305]),
            {
              "class": 1,
              "system:index": "1313"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12529134750366, 15.431903468717364]),
            {
              "class": 1,
              "system:index": "1314"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44359707832336, 15.427537872720631]),
            {
              "class": 1,
              "system:index": "1315"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44185900688171, 15.433536291629341]),
            {
              "class": 1,
              "system:index": "1316"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43876910209656, 15.43671124664562]),
            {
              "class": 1,
              "system:index": "1317"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44760966300964, 15.43325705873399]),
            {
              "class": 1,
              "system:index": "1318"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44361853599548, 15.437321411588531]),
            {
              "class": 1,
              "system:index": "1319"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05717658996582, 16.000120152566172]),
            {
              "class": 1,
              "system:index": "1320"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0627555847168, 15.949207654986328]),
            {
              "class": 1,
              "system:index": "1321"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0543441772461, 15.924200508153449]),
            {
              "class": 1,
              "system:index": "1322"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.09691619873047, 15.923787822831837]),
            {
              "class": 1,
              "system:index": "1323"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94611167907715, 16.046565459767677]),
            {
              "class": 1,
              "system:index": "1324"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90665912628174, 15.828902424679255]),
            {
              "class": 1,
              "system:index": "1325"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88640308380127, 15.825516778947026]),
            {
              "class": 1,
              "system:index": "1326"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87013816833496, 15.793907803100872]),
            {
              "class": 1,
              "system:index": "1327"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85747814178467, 15.794196869005118]),
            {
              "class": 1,
              "system:index": "1328"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84089136123657, 15.797273330569237]),
            {
              "class": 1,
              "system:index": "1329"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86799240112305, 15.862404871046559]),
            {
              "class": 1,
              "system:index": "1330"
            })]),
    NonCropClass = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-90.15518188476562, 16.51232085727207]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25405883789062, 16.59591031518943]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08703231811523, 16.508370853040244]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84457397460938, 16.483651921041094]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0711669921875, 16.650819401149878]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24008178710938, 16.681078277204062]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97366333007812, 16.20164204315952]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11923217773438, 17.133070252505984]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.318603515625, 17.352102782911658]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37662506103516, 16.94878780324625]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41336059570312, 16.935322479574765]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32190799713135, 17.033361137301483]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37628173828125, 17.13098637467053]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2743148803711, 17.18084948801918]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91650009155273, 14.459967111811993]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84148406982422, 14.516642102668424]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87993621826172, 14.477752319224125]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89847564697266, 14.496865672536325]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98464965820312, 14.490716338630612]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0243034362793, 14.331106618401718]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.96628189086914, 14.307488002141165]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05829238891602, 14.376174677660247]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.10721588134766, 14.42223116516091]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11236572265625, 14.347239032408067]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.16317749023438, 14.277046264427794]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11408233642578, 14.257414982416467]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.09949111938477, 14.144585233922493]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93177795410156, 14.120114742814824]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73162078857422, 13.955245202815867]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8188247680664, 13.922756951648761]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73385238647461, 13.939084951954356]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.63154220581055, 13.931920767403797]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5489730834961, 13.934086707104425]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4969596862793, 13.936585843054523]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47292709350586, 13.912426396429346]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23981094360352, 14.026203600793057]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19723892211914, 14.046854038635082]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29903411865234, 14.136928084239893]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2995491027832, 14.176542724894592]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32049179077148, 14.153240831726153]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3870964050293, 14.148580166176242]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22384643554688, 14.175876989718693]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37954330444336, 14.087150334365827]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21440505981445, 14.159399421709185]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20891189575195, 14.236450878994543]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.164794921875, 14.287859375306391]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11192321777344, 14.285031381092788]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15861511230469, 14.325950653693058]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14230728149414, 14.403942723224304]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26418685913086, 14.352061899730886]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24066925048828, 14.316802682787282]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19311904907227, 14.294180645590469]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15518188476562, 14.301333447666664]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09698867797852, 14.289855585114061]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0882339477539, 14.333435079742213]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02368927001953, 14.35189559569004]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.98815536499023, 14.383324863724658]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93614196777344, 14.350232548489098]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03347396850586, 14.443177899486127]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00789642333984, 14.480079250294256]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.97596740722656, 14.485065448974979]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94918823242188, 14.502183877767008]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03021240234375, 14.549377349287958]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06231307983398, 14.561506437185738]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.99467849731445, 14.551038907582695]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.989013671875, 14.63194163543925]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.98849868774414, 14.640080097370369]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9809455871582, 14.684255046259318]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05167007446289, 14.688074265905334]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09063720703125, 14.700361737172367]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02368927001953, 14.773242097328222]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15003204345703, 14.737386015230754]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19397735595703, 14.66067403944325]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22161483764648, 14.666486495380605]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.28873443603516, 14.742864410155567]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26744842529297, 14.828010794006481]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32821655273438, 14.8308318368257]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40306091308594, 14.833652842866933]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44219970703125, 14.74253239014401]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48700332641602, 14.662832969659515]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45610427856445, 14.671136349022802]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50416946411133, 14.641408797177673]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.53730010986328, 14.605531079058]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58055877685547, 14.656522190751545]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57849884033203, 14.652536341979518]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5848503112793, 14.522790716669858]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6233024597168, 14.479580624262171]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49301147460938, 14.529105331517062]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46159744262695, 14.468278133701945]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61128616333008, 14.372682643195485]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54845809936523, 14.391805020318358]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67840576171875, 14.36952313644682]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59429168701172, 14.428216147487435]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54656982421875, 14.437692040535726]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51206588745117, 14.211990298566542]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61437606811523, 14.29634314463657]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47430038452148, 14.282369707013341]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40048599243164, 14.331106618401718]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33525466918945, 14.34158450400305]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35894393920898, 14.306988990490883]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29817581176758, 14.276380825253753]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25337219238281, 14.246933174161743]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2530288696289, 14.324620062918687]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41009902954102, 14.147914349009548]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41765213012695, 14.072830976650787]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52288055419922, 14.080157271804644]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84835052490234, 14.203336942709276]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77796936035156, 14.284532319600833]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78397750854492, 14.305325610318562]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8294677734375, 14.324453738517061]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73110580444336, 14.345077023692216]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86294174194336, 14.316137361268588]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90482711791992, 14.332437170699585]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9228515625, 14.362372509000451]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93143463134766, 14.393800304483973]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8595085144043, 14.449162318598514]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95340728759766, 14.502183877767008]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05571746826172, 14.472101099329413]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97452163696289, 14.570312069446032]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05743408203125, 14.579283483943188]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95460891723633, 14.620480840601797]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92336654663086, 14.63194163543925]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01400375366211, 14.681598158461249]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90225219726562, 14.697871089381533]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88834762573242, 14.74153632707172]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90808868408203, 14.782039214009467]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99563598632812, 14.794985265752443]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.02962493896484, 14.79880254380698]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18343353271484, 14.769922338074332]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15184783935547, 14.744358493942041]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17804765701294, 14.74562803559481]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18414163589478, 14.743677435536249]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1876392364502, 14.752060741699081]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1726188659668, 14.751417479644825]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27492904663086, 14.750500730663969]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.35663986206055, 14.756476794593596]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33277893066406, 14.787018556066093]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.34359359741211, 14.699697567205261]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30325317382812, 14.71464090277737]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2714958190918, 14.691395272225554]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30136489868164, 14.60685998792815]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26531600952148, 14.533093416395015]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32488250732422, 14.542564829545501]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18755340576172, 14.580612551319623]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.26249694824219, 14.907044388650174]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.90475463867188, 15.015836735234467]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.12276458740234, 15.072216136112347]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1906566619873, 15.067409157041963]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.24138259887695, 15.07321066994779]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.24678993225098, 15.112242447728933]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16748237609863, 14.940483618499977]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20576286315918, 14.856043921168704]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.17387676239014, 14.881794680204935]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16752529144287, 14.90796436261288]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.18451976776123, 14.916631591059001]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.2551155090332, 14.91892939126315]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.26558685302734, 14.992896832902945]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.29528427124023, 15.042304784522445]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.37751007080078, 14.922578607140299]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.38592147827148, 14.85587799784229]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.45003700256348, 14.862017076023683]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.48711585998535, 14.790328328963161]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.51681327819824, 14.811986806756726]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.55706787109375, 14.869234417666487]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.57389068603516, 14.916099780858472]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.58487701416016, 14.955906582998796]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.56899833679199, 15.008390507367519]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.53518104553223, 14.99006819803501]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.39218711853027, 15.14530196806555]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.31365203857422, 15.237327687007657]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.2672176361084, 15.235174528849893]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.18284606933594, 15.315240593247285]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.2134017944336, 15.308452309945793]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20215797424316, 15.347432057658327]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.23820686340332, 15.40424945408048]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.2437858581543, 15.394774674539487]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16902732849121, 15.415295922697416]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1258544921875, 15.416372223836868]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.10598468780518, 15.421460176145269]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1255111694336, 15.462908991474007]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1049976348877, 15.497071141122724]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.17057228088379, 15.549750839087794]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.17546463012695, 15.600846366112997]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.11692810058594, 15.588817737414809]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.12027549743652, 15.615188860772877]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.0912218093872, 15.650482828974011]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.11757183074951, 15.656350790918061]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.13868618011475, 15.660937601633528]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72353935241699, 16.32484426930535]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.68740463256836, 16.370142681656038]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.72688674926758, 16.357377828701967]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69066619873047, 16.258936947355906]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66963768005371, 16.225315691690973]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7268009185791, 16.19976629022909]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70422744750977, 16.166464683388952]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75606918334961, 16.153604144632254]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74027633666992, 16.131673349126245]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83726501464844, 16.020114578171217]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91348266601562, 16.02704424300197]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13046264648438, 15.922083592736918]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22178649902344, 15.975230927064331]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05733489990234, 15.793283374173152]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18882751464844, 15.807488454306501]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81168746948242, 15.701071997246089]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79177474975586, 15.737590325804572]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80585098266602, 15.769641734635021]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85048294067383, 15.677934827716268]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88344192504883, 15.567409053201898]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87305641174316, 15.63156028165386]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91271018981934, 15.648256149037504]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91125106811523, 15.657016801704797]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00911951065063, 15.666864823749156]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00411987304688, 15.659964107443173]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01364707946777, 15.640748310761477]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0070595741272, 15.623948506979318]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03426790237427, 15.583896188516816]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04579067230225, 15.568269945657413]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15546083450317, 15.559071403528945]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14333724975586, 15.552063698848396]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1227593421936, 15.574739685018194]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10428428649902, 15.580382454379189]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05954504013062, 15.5987358849157]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02821683883667, 15.598777219619254]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.98360633850098, 15.622550559910344]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05578994750977, 15.576007803704982]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05074739456177, 15.483585297750166]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0528073310852, 15.47411414095487]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11565685272217, 15.438087912596133]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12593507766724, 15.439266865928383]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13187885284424, 15.425305146485604]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12698650360107, 15.407122478031162]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11990547180176, 15.394503309100761]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11110782623291, 15.390800161807453]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11690139770508, 15.373235175037198]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10533571243286, 15.36495904966949]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12859582901001, 15.346295181580379]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12411117553711, 15.341121973727228]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11439085006714, 15.32522907788273]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12722253799438, 15.322455974835826]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1187252998352, 15.31695104938925]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12293100357056, 15.309955859951621]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14026880264282, 15.30140816613739]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15743494033813, 15.31508844782764]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.16402244567871, 15.308651997013296]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.16050338745117, 15.298096617130817]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15558958053589, 15.291059401670157]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14041900634766, 15.276942863033868]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.14848709106445, 15.260651776359882]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.16095399856567, 15.257650104047599]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19032955169678, 15.270525940451655]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2101993560791, 15.277191256091307]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20232439041138, 15.297248024270594]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.20749568939209, 15.317468435768868]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23043394088745, 15.325560192206506]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24380207061768, 15.326988116720644]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43172836303711, 15.217285901612966]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4493236541748, 15.220433085105729]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44211387634277, 15.218776678603454]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44872283935547, 15.25057740579669]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46451568603516, 15.245940099205349]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.48254013061523, 15.240308946531384]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40529251098633, 15.216043579394201]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3969669342041, 15.235837041399636]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38941383361816, 15.20469669748329]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40529251098633, 15.195502790500768]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41730880737305, 15.195502790500768]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42975425720215, 15.197159379920091]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.450439453125, 15.211157040920218]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45249938964844, 15.173883106401865]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47558784484863, 15.182663781500317]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49120903015137, 15.195088641113173]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4830551147461, 15.209417737167419]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43953895568848, 15.171066586130545]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42211532592773, 15.16526774971896]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46365737915039, 15.151184199117111]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47876358032227, 15.15980012968486]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42820930480957, 15.127240012078694]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4570484161377, 15.128565712588875]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44511795043945, 15.092686020180418]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43498992919922, 15.079012024650394]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4379940032959, 15.06815507470483]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49241065979004, 15.084398855169582]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50889015197754, 15.072962036924789]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44709205627441, 15.042875297704091]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5064868927002, 15.052407369232506]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46082496643066, 15.018836007929183]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45833587646484, 14.98136247851846]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38228988647461, 14.976470537916002]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32074928283691, 14.998524843567424]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2907943725586, 14.973900151464083]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.28993606567383, 15.026711245949066]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32830238342285, 15.031767824549904]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2647876739502, 14.97215890440881]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27045249938965, 14.912450455048148]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29491424560547, 14.898681986845906]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35242080688477, 14.918339109225524]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32950401306152, 14.882009350109119]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35061836242676, 14.867243450972584]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.47035217285156, 14.818376059219801]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51704406738281, 14.821731702619395]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55485248565674, 14.814969151227066]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5782413482666, 14.811359604863322]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60617923736572, 14.812064923247828]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60248851776123, 14.794514260331335]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5949354171753, 14.764430035172273]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58716773986816, 14.745090941428014]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6201696395874, 14.737620445108604]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6216287612915, 14.738533519516764]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60583591461182, 14.703418903643781]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58836936950684, 14.692376970191676]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57596683502197, 14.69652813846863]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55283546447754, 14.707984953550591]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54588317871094, 14.679424818402637]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56562423706055, 14.681085393562313]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5773401260376, 14.654265563107879]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55579662322998, 14.637657210716991]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89459180831909, 15.017979007780559]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90160846710205, 14.99810545209161]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89770317077637, 14.973356337171783]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89688777923584, 14.94524340507825]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90909719467163, 14.93100017390297]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90444087982178, 14.923310451483323]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94319343566895, 14.937160273507326]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9693717956543, 14.920117401846143]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97297668457031, 14.986788372734017]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97756862640381, 15.01858245411536]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.00207328796387, 15.009048871363165]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99434852600098, 15.066948460929494]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97756862640381, 15.084849801797649]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9462833404541, 15.110580337976101]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95808506011963, 15.139249015333078]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94113349914551, 15.17594919947692]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07322692871094, 15.154415214204327]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06078147888184, 15.113816827510039]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.08035087585449, 15.079509276261843]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.10137939453125, 15.06119307486269]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15030288696289, 15.031187567518007]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17064476013184, 15.02480463602895]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15339279174805, 14.977382603113483]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23003959655762, 14.976470537916002]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21390342712402, 14.88690344190522]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23227119445801, 14.84733277425865]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2070369720459, 14.82982645560847]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27115249633789, 14.7503249997374]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29870414733887, 14.808999559145793]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31595611572266, 14.843018552444276]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3264274597168, 14.83903798097581]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51954650878906, 14.848255109486638]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52143478393555, 14.857712869413785]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45774841308594, 14.88077479272142]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44453048706055, 14.98095762803607]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.38324737548828, 14.967691064024912]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45156860351562, 14.977806893483201]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47560119628906, 15.012462422153188]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6036605834961, 14.955418761100969]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.68262481689453, 14.986098200664998]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56984329223633, 15.053577479336118]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62820816040039, 15.116560959073771]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62151336669922, 15.249096558268509]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.58306121826172, 15.303577622758624]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55267715454102, 15.297948016609574]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50718688964844, 15.303811431827135]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4901065826416, 15.308281888605515]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49529933929443, 15.307992139670535]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48229598999023, 15.376237613888811]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51418209075928, 15.38285818213192]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52388095855713, 15.395891810724402]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53302192687988, 15.402594501863424]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55241966247559, 15.401105033608237]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53911590576172, 15.422370318874718]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5644359588623, 15.404456322181584]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56559467315674, 15.455794614205454]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.60632133483887, 15.44243381553456]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55447959899902, 15.451531719752506]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54853582382202, 15.44952554539948]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56396389007568, 15.457074451047703]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54975891113281, 15.467539054373713]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54102563858032, 15.472233477322755]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55606746673584, 15.473122717254224]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53544664382935, 15.481828794742366]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52825832366943, 15.491630448231968]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53139114379883, 15.492230112370503]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52566194534302, 15.494814851678253]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52454614639282, 15.495621283726434]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51787281036377, 15.49638635737608]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51003003120422, 15.50215412348727]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51075959205627, 15.502712403101874]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51819467544556, 15.502743418591768]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50906980037689, 15.50496040828433]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50789499282837, 15.511479262827795]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51899933815002, 15.522468326466498]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5224540233612, 15.525408720825887]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52287781238556, 15.528308330104595]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5247231721878, 15.52954879221015]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56799793243408, 15.522747438994074]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57018661499023, 15.527461282405978]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57296538352966, 15.530004232136934]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57058358192444, 15.530882886338954]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57458543777466, 15.543484620588478]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57192468643188, 15.54170674280299]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5666675567627, 15.540218275183063]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56289100646973, 15.534471035412366]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56254768371582, 15.529033750988647]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.59030318260193, 15.542873557584148]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5961503982544, 15.549933255721749]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.58185958862305, 15.557726550608582]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.580411195755, 15.563907229821032]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.58674120903015, 15.566449729573435]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57620549201965, 15.573291584998314]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57471418380737, 15.572609476698874]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57094836235046, 15.57702247065019]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56669974327087, 15.573715317802277]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57305121421814, 15.579420123189873]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56506896018982, 15.578365986294838]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56485438346863, 15.581879754915592]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57035827636719, 15.58326457662902]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56273007392883, 15.591717987331084]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56195759773254, 15.599561366432257]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56703233718872, 15.604325117038229]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56995058059692, 15.601462746530727]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.57241821289062, 15.604893453000837]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56519770622253, 15.599251357137131]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56462907791138, 15.596574924082875]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.56819105148315, 15.594580493747186]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.55788064002991, 15.592286358206527]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54584288597107, 15.602609766222093]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5470016002655, 15.60579245394469]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54155135154724, 15.614895908175928]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53805375099182, 15.612540001915013]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5366804599762, 15.610091070660424]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54770970344543, 15.614317267040965]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53738856315613, 15.581972765621591]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.54027462005615, 15.585651821994743]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53213143348694, 15.576598744663604]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53998494148254, 15.567948342754155]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5427315235138, 15.561860804755662]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53634786605835, 15.557974608199753]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52894496917725, 15.5556077131667]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52482509613037, 15.557044390691173]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50979399681091, 15.545674725921819]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50380730628967, 15.548765269662402]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51195049285889, 15.54805207137729]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.5006422996521, 15.538563198328378]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49342179298401, 15.543731484036908]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48609399795532, 15.55222802540723]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47855162620544, 15.554057330487492]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4741313457489, 15.553468182007581]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47220015525818, 15.556258870409613]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48021459579468, 15.556145176436269]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47848725318909, 15.542056973665687]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47326231002808, 15.54084759659948]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47977471351624, 15.53459402840931]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47074103355408, 15.535265764309687]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47686719894409, 15.528836133105925]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47656679153442, 15.526861720583852]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47826194763184, 15.51606930977242]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47207140922546, 15.519377388415093]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46652460098267, 15.516730929743444]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45803809165955, 15.518715776929204]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46694302558899, 15.509649418362326]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47021532058716, 15.504015049668064]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46444320678711, 15.498173752882156]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.46759748458862, 15.491649914727143]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47857308387756, 15.489023779120044]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47593379020691, 15.485973697866477]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48619055747986, 15.48696627161936]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4830470085144, 15.497801558463609]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49002075195312, 15.495692444095626]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4890444278717, 15.498101381797728]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49362564086914, 15.48868258582495]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50072813034058, 15.489106492561339]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49215579032898, 15.477640026183101]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49412989616394, 15.471425742355231]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49956941604614, 15.461943688599531]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50537371635437, 15.457249032395367]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50389313697815, 15.447104489150664]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51098489761353, 15.44374354730776]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51361346244812, 15.444612226727187]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51846289634705, 15.443071352402761]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51140332221985, 15.437590297264965]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.52442812919617, 15.436266549031396]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.51408553123474, 15.43312261313186]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50233745574951, 15.433453555995815]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.50138258934021, 15.436742272024992]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.49528861045837, 15.437569613763772]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48137331008911, 15.440165377055099]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48192048072815, 15.426431248916026]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48723125457764, 15.4283549089409]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47942066192627, 15.423287164056601]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48017168045044, 15.417857300166814]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48424863815308, 15.416647196874992]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47140622138977, 15.418271009077204]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.463702917099, 15.416274855982676]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4685308933258, 15.41128956088063]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4562463760376, 15.411527451123314]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43750309944153, 15.405797323494323]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43188118934631, 15.400304941032115]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44073247909546, 15.402011629081894]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43471360206604, 15.393147042284365]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.42949938774109, 15.387054359354247]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43577575683594, 15.385047562270433]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.38742089271545, 15.393136698321879]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37909531593323, 15.398836143741365]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37517929077148, 15.394315906734434]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36778712272644, 15.402063346682953]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36369943618774, 15.399798103702304]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36222958564758, 15.406200713098038]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3617467880249, 15.413544335718846]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36581301689148, 15.418726087927103]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25179767608643, 15.597291587018855]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27179622650146, 15.611551665991747]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26025199890137, 15.548639378070371]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23098373413086, 15.620732035903336]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78007221221924, 15.604646662990028]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77839851379395, 15.615310433152299]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77485799789429, 15.62700687645081]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77717542648315, 15.644880892525693]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.75234889984131, 15.650273786180426]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.80129384994507, 15.694052203020245]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.76599597930908, 15.75642898247755]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77893495559692, 15.785627954603447]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.76417207717896, 15.80282736094482]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.74239253997803, 15.816618866488557]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72280168533325, 15.879164327263677]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70930480957031, 15.889854976090795]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70112943649292, 15.896665325031707]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71589231491089, 15.907086776296232]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70679426193237, 15.923656803125112]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73621273040771, 15.9479419058879]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73202848434448, 15.963518312366732]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.75129747390747, 15.979361679162583]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73327302932739, 16.012942166756915]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.74041843414307, 16.034226136675255]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71696519851685, 16.050249486991685]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70215940475464, 16.04125842204371]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67859888076782, 16.065652959760747]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.682053565979, 16.086910680116134]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67797660827637, 16.11195929332224]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65117597579956, 16.13100649199318]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67954301834106, 16.138777388086307]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70567846298218, 16.136015353845455]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7256555557251, 16.137767394958903]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73672771453857, 16.14034389784679]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.74724197387695, 16.159285317343354]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52990531921387, 16.713160790953715]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53917503356934, 16.784090412564407]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.46879386901855, 16.826405447703827]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52569961547852, 16.868300345584203]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.48304176330566, 16.95148755131346]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52368259429932, 16.978615332272057]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49544429779053, 17.013869525342855]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.53492641448975, 17.119305140559845]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49492931365967, 17.085465570932413]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.49286937713623, 17.03011951523895]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54561233520508, 16.98259663834875]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81494903564453, 16.528449203227623]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79207515716553, 16.648984276228486]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79623794555664, 16.662099909739958]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82155799865723, 16.67003463737465]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86717700958252, 16.667691254636633]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89017963409424, 16.685080937337776]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84026908874512, 16.789139248592857]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82481956481934, 16.809475752087184]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88687515258789, 16.834862507924008]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89987850189209, 16.858110175798124]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88069534301758, 16.895152651393992]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89468574523926, 16.91572411205975]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90481376647949, 16.92405881514098]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88009452819824, 16.92590635947325]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89429950714111, 16.95612139903657]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86335754394531, 16.996879371522855]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3160285949707, 16.603714724755122]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3431510925293, 16.62830646723033]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31465530395508, 16.57023528849845]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33559799194336, 16.61259772419412]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29336929321289, 16.599355324799433]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40409088134766, 16.60725152374711]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43893814086914, 16.56760275166837]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50125122070312, 16.552135871239965]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54631233215332, 16.58027150495756]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49962043762207, 16.631267133416376]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50537109375, 16.505480906749582]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52335262298584, 16.444690171102536]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49459934234619, 16.44100633172762]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6317138671875, 16.374681509706214]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.74174880981445, 16.4820353443734]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70758819580078, 16.371552211978848]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.66621780395508, 16.327242560476773]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.82895278930664, 16.251118558055406]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78981399536133, 16.29264440795143]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77934265136719, 16.227055914860593]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88422775268555, 16.2527665765677]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.02876663208008, 15.952261119392917]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06258392333984, 15.98229812612622]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9396743774414, 15.979740204958443]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91315269470215, 16.03509950658542]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.82852363586426, 16.02973750358054]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78097343444824, 15.988073956832942]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85307121276855, 15.944503578273562]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.83453178405762, 15.889201781541315]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84671974182129, 15.855848275375084]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.82620620727539, 15.832646172855068]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90259552001953, 15.828599981666105]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86062431335449, 15.790446198786505]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94705581665039, 15.796888251182125]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94757080078125, 15.771944807228175]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9913444519043, 15.786151383387134]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01383209228516, 15.730640973350047]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98464965820312, 15.720231083150818]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01820945739746, 15.656851469491277]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.03571891784668, 15.627840679431545]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11373901367188, 15.607175217236996]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05314254760742, 15.57939755651382]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0641074180603, 15.582490691980556]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07070297002792, 15.57639630655024]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50236701965332, 17.021753253291802]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45370101928711, 17.0015627571891]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37344932556152, 16.999510755676607]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40803909301758, 17.03332487292712]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38426399230957, 16.94984547377871]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3738784790039, 16.936216009542036]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25620460510254, 16.950173882415367]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2853012084961, 16.93925398770814]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62004089355469, 17.040063714755]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51687240600586, 17.049418631668626]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43404579162598, 16.857124446907736]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44009685516357, 16.853345848769898]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38846969604492, 16.85519408555277]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38980007171631, 16.878357120769792]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46404361724854, 16.87827498736408]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41696548461914, 16.89511158834988]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41971206665039, 16.91342481872464]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36460876464844, 16.601029189604702]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39928436279297, 16.733217691012758]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39610862731934, 16.72023024094765]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32718658447266, 16.769873690725305]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23251533508301, 16.778995498956636]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21011352539062, 16.805618812489726]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.18427848815918, 16.80151052009152]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12848854064941, 16.810712971502785]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1728630065918, 16.743327561663236]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04128456115723, 16.757135298377484]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0413703918457, 16.784254720922984]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12694358825684, 16.710694587979727]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11758804321289, 16.674438319021466]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13853073120117, 16.679453768400084]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08686065673828, 16.65717101245405]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0355339050293, 16.704364624177185]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02875328063965, 16.66103573541704]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05681991577148, 16.560938982005553]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06205558776855, 16.513956984979004]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01750946044922, 16.523337842026883]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00600814819336, 16.545142459341996]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96034622192383, 16.52918007539883]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.00163078308105, 16.50556320055774]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1497745513916, 16.505069437183433]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.17655372619629, 16.47988583395114]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19638061523438, 16.464247307770922]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21208763122559, 16.48251956678589]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22839546203613, 16.500460918226942]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2501106262207, 16.474618260840124]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.1908016204834, 16.449019109532422]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.13286590576172, 16.43955232985173]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06093978881836, 16.379118715235094]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04643440246582, 16.403656696749866]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06128311157227, 16.355977721550236]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03647804260254, 16.34497792350133]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02742290496826, 16.34889007043691]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03252983093262, 16.35972013158783]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.97965812683105, 16.373596555936334]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94815826416016, 16.377261084826596]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91532802581787, 16.409991740772725]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88897800445557, 16.398094063266658]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85292911529541, 16.424399718606942]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54509735107422, 16.423939375302346]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56123352050781, 16.479585429561574]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.59178924560547, 16.439087218992128]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50870513916016, 16.537848479988806]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.50252532958984, 16.66057115853517]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81426239013672, 16.501971051268455]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74491119384766, 16.682277992082867]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76482391357422, 16.754616291037035]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89837646484375, 16.759547448101685]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9344253540039, 16.799978112273518]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87194061279297, 16.212880652258292]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88344192504883, 16.258534532528362]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67453002929688, 16.17282178474735]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.61393356323242, 16.170019008266515]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77563858032227, 16.126323532848062]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85082626342773, 16.15171754957327]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83863830566406, 16.17480019126521]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83417510986328, 16.04137836894886]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73220825195312, 16.039893567789154]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6048355102539, 15.979007205926582]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5524787902832, 16.00442003123177]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.54853057861328, 16.075525740266297]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.55968856811523, 16.118572762439367]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.60380554199219, 16.1256639046133]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.66131210327148, 16.14726558731914]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.5850944519043, 16.17067848866239]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.52089309692383, 16.244031921015473]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.56157684326172, 16.242548639078326]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31678771972656, 16.225242856782753]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32073593139648, 16.220792552538157]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32657241821289, 16.295445438531363]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3191909790039, 16.29561020378951]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37077522277832, 16.258394107584138]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.38086032867432, 16.259300485917166]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37382221221924, 16.268961395082886]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3597674369812, 16.269579347512884]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37045335769653, 16.27942512712453]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34981107711792, 16.278580634015132]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32335376739502, 16.276294305161507]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31429862976074, 16.2781892823173]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32459831237793, 16.283297390442424]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30286169052124, 16.272895658989366]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31294679641724, 16.257817319195023]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31614398956299, 16.243335255897264]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2978835105896, 16.251781539136665]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.29022312164307, 16.245333555674772]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2803955078125, 16.247064025672486]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.26565408706665, 16.251431334603886]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.25022602081299, 16.25658133837369]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.29007291793823, 16.236536764412808]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30693864822388, 16.230170691223403]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31635856628418, 16.23410573164384]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32620763778687, 16.231118404485937]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3372368812561, 16.232993215105072]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34500455856323, 16.23460018141991]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35972452163696, 16.23762865918607]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36214923858643, 16.247888053651632]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35390949249268, 16.258970894279884]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3303918838501, 16.290382610510093]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33837413787842, 16.295490401037128]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3468713760376, 16.30070103404831]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33232307434082, 16.313160681465792]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33732271194458, 16.317691265777043]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33167934417725, 16.32879075404943]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32000637054443, 16.340610295715795]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3177318572998, 16.3586059245365]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3582010269165, 16.369497210239736]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3761396408081, 16.378679183453446]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.38620328903198, 16.389569348098515]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.39794063568115, 16.379770285980026]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41173791885376, 16.365832535466808]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.42343235015869, 16.369682500955975]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41519260406494, 16.37742337801834]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.41695213317871, 16.359161827185407]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.40409898757935, 16.348167014199134]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.38452959060669, 16.34909356789762]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34760093688965, 16.35234676386593]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.32309627532959, 16.35572344159906]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30856943130493, 16.367973702122026]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.31219577789307, 16.367994290148868]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.24308061599731, 16.398894468389486]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.25698518753052, 16.408075055568595]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.27895784378052, 16.408980740250307]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.30608034133911, 16.42061018019162]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.33391094207764, 16.39138088543842]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.3259072303772, 16.399614933713046]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36023950576782, 16.39051629017315]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37060356140137, 16.392945381401088]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36075448989868, 16.433761929772626]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35253620107705, 16.440615305567537]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.35783624649048, 16.43989499215865]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.36579704284668, 16.454012647774174]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.37274932861328, 16.462511557326852]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.34906005859375, 16.464878015480796]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42125701904297, 15.825656128289829]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37284851074219, 15.946843259334297]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36975860595703, 15.896660165763693]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37525177001953, 15.861656648543178]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55000305175781, 15.842316794661986]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62536239624023, 15.83224293631468]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65763473510742, 15.907041715645267]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49919128417969, 15.853876340673398]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4585075378418, 15.851729617905274]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40443420410156, 15.870388828895042]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40855407714844, 15.812424044322036]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41027069091797, 15.787152141259396]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36478042602539, 15.77030245452603]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44837951660156, 15.703550743305865]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52391052246094, 15.729989685035575]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49266815185547, 15.791116569895957]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35104751586914, 15.72850258570999]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24702072143555, 15.907371891486935]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12428283691406, 15.860481498220482]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.384521484375, 15.94005661400152]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38949966430664, 15.956562026598617]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35259246826172, 16.04962706279169]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35276412963867, 15.86527010217218]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46228408813477, 15.920578480394171]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34212112426758, 15.764355172056119]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05578994750977, 15.557248522115653]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90283966064453, 15.465777406566994]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81168746948242, 15.503826373194052]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75812911987305, 15.513089409161202]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7447395324707, 15.45419589768112]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6817398071289, 15.574446513208779]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.67967987060547, 15.585690575749114]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7524642944336, 15.551460413339948]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74920272827148, 15.57328900125903]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93079900741577, 15.45581286215564]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93584156036377, 15.469586404818376]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94882345199585, 15.45903917951179]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.95586156845093, 15.474880495780857]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94755744934082, 15.485178769107504]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.94219303131104, 15.48710188381937]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92245197296143, 15.492250780316517]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.90906238555908, 15.511542492564635]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93547677993774, 15.506373400186346]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87550258636475, 15.522996740029965]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88241195678711, 15.522769315310835]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87404346466064, 15.51836549631986]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85715627670288, 15.527111016646824]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8655891418457, 15.52210771470229]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85260725021362, 15.535194607489192]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86363649368286, 15.554999098514674]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86108303070068, 15.569282783600988]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84696388244629, 15.567195070967719]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86998796463013, 15.565396727254068]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9066162109375, 15.561159188516935]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89837646484375, 15.560952477077537]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88417148590088, 15.564817946622384]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88030910491943, 15.564631909644914]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83683586120605, 15.600327244810135]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81237411499023, 15.606444642918705]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80462789535522, 15.63308213043893]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79643106460571, 15.641678128756487]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76870775222778, 15.642566636841714]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76332187652588, 15.661926889571706]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76115465164185, 15.690643629489315]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80340480804443, 15.695808082038788]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82630014419556, 15.69227561062928]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82531309127808, 15.70582674691206]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81220245361328, 15.71472951820495]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81554985046387, 15.739143009093024]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83209371566772, 15.741642025149806]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87082481384277, 15.740877866475811]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88485813140869, 15.744120357838298]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89908456802368, 15.746908445988598]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89101648330688, 15.760662454196309]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84582662582397, 15.782530667474642]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86621141433716, 15.828530832186786]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85140562057495, 15.840442095805862]),
            {
              "class": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8872184753418, 15.834992315379974]),
            {
              "class": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.896080493927, 15.840338881633711]),
            {
              "class": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92232322692871, 15.828283103478876]),
            {
              "class": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.92650747299194, 15.826838013297452]),
            {
              "class": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9436092376709, 15.831999002210445]),
            {
              "class": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67342758178711, 16.854829272798217]),
            {
              "class": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71102142333984, 16.818600471725976]),
            {
              "class": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65248489379883, 16.809151912915244]),
            {
              "class": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69857597351074, 16.87700674759756]),
            {
              "class": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7375431060791, 16.870435915292912]),
            {
              "class": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7335090637207, 16.924884779556514]),
            {
              "class": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.68947792053223, 16.927758716965197]),
            {
              "class": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69119453430176, 16.94360564078057]),
            {
              "class": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70226669311523, 16.964869621564166]),
            {
              "class": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.67866325378418, 16.91174622144145]),
            {
              "class": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65411567687988, 16.92316039605476]),
            {
              "class": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6620979309082, 16.928333499182333]),
            {
              "class": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65686225891113, 16.87133941828782]),
            {
              "class": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65471649169922, 16.880374210554027]),
            {
              "class": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6837272644043, 16.876842479575803]),
            {
              "class": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7016658782959, 16.854418554281775]),
            {
              "class": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70990562438965, 16.86493266738947]),
            {
              "class": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69934844970703, 16.86912172140557]),
            {
              "class": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.65935134887695, 16.83560669060688]),
            {
              "class": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69093704223633, 16.823940753176764]),
            {
              "class": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69145202636719, 16.84916127850032]),
            {
              "class": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.68604469299316, 16.83560669060688]),
            {
              "class": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69522857666016, 16.836674663059306]),
            {
              "class": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70818901062012, 16.828459335316996]),
            {
              "class": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70690155029297, 16.858361415216784]),
            {
              "class": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60090065002441, 16.823694281960723]),
            {
              "class": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58330535888672, 16.835278082486568]),
            {
              "class": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62210083007812, 16.850722047498035]),
            {
              "class": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61952590942383, 16.84390385662075]),
            {
              "class": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.62012672424316, 16.855486420569193]),
            {
              "class": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61326026916504, 16.868218207805683]),
            {
              "class": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6112003326416, 16.869368133455733]),
            {
              "class": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61051368713379, 16.859922108290565]),
            {
              "class": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6002140045166, 16.79329370859044]),
            {
              "class": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43850898742676, 16.931289494290407]),
            {
              "class": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42074203491211, 16.915770002211193]),
            {
              "class": 2,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38134574890137, 16.94771084374633]),
            {
              "class": 2,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37327766418457, 16.950256024573786]),
            {
              "class": 2,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46700477600098, 16.9977050158388]),
            {
              "class": 2,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36417961120605, 16.99278007310121]),
            {
              "class": 2,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27448654174805, 17.042844290252695]),
            {
              "class": 2,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25139808654785, 17.027498158531657]),
            {
              "class": 2,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26169776916504, 17.111927292808268]),
            {
              "class": 2,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.19655227661133, 17.017157274256917]),
            {
              "class": 2,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.15054702758789, 17.14481886199577]),
            {
              "class": 2,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.21492004394531, 17.15802306597461]),
            {
              "class": 2,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11707305908203, 17.160975430294332]),
            {
              "class": 2,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01055717468262, 17.19476025266948]),
            {
              "class": 2,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.98188972473145, 17.133008095356313]),
            {
              "class": 2,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.87005233764648, 17.174506498893518]),
            {
              "class": 2,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79280471801758, 17.219602924761528]),
            {
              "class": 2,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78018760681152, 17.166716004205373]),
            {
              "class": 2,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80447769165039, 17.24632761653582]),
            {
              "class": 2,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86627578735352, 17.26534405937413]),
            {
              "class": 2,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.8915958404541, 17.266409577896678]),
            {
              "class": 2,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.85254287719727, 17.302633540889552]),
            {
              "class": 2,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88455772399902, 17.311893273945]),
            {
              "class": 2,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84636306762695, 17.346223963455333]),
            {
              "class": 2,
              "system:index": "907"
            })]),
    prev = ee.Image("users/images/Guatemala_2010_v4"),
    input = ee.Image("users/images/input/Guatemala_2010_InputTOA3seasonV2");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


//add layer to map

print(input)
//print(input2)

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};


//add all max val to map
//Map.addLayer(input,vizParams,'FCC');
//Map.addLayer(prev, {palette: '00FF00'}, 'cropland');
Map.addLayer(prev2, {palette: '00FF00'}, 'cropland2');

//var input=ee.ImageCollection([input1,input2]).mosaic()


//add layer to map
//Map.addLayer(input1.select([0]), {min:0,max:0.5}, 'inp1');
//Map.addLayer(input2.select([0]), {min:0,max:0.5}, 'inp2');


//throw('stop')
//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(45).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

var region = countries.filterMetadata('Country','equals','Guatemala')

//var studyArea = zones.filterMetadata('name','equals','CenAM1');
var studyArea = region
studyArea=buffer1(studyArea.geometry());


//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);

//print(NonCropSamples);
//var NonCropSamplesArea2 = NonCropClass2.filterBounds(studyArea).map(buffer);
//print('Non-crop:',NonCropSamplesArea2);

//merge all training samples into one feature collection
var TrainingSamples=CropSamplesArea
                    .merge(NonCropSamplesArea)
//                    .merge(NonCropSamplesArea2);
                    
print('Training samples:',TrainingSamples);

//add layer to map
//Map.addLayer(TrainingSamples, { },'Samples');

print('Study Area:');
print(studyArea);

var training = input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});


//build classifier
var classifier = ee.Classifier.randomForest(300,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);
//studyArea = zones.filterMetadata('name','equals','CenAM1');
classified = classified.updateMask(classified.eq(1)).clip(studyArea);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Guatemala_v1_asset',
  assetId: 'Guatemala_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'Guatemala',
  description: 'Guatemala_v1_drive',
  fileNamePrefix: 'Guatemala_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Guatemala_v1',
  folder: 'Guatemala',
  fileNamePrefix: 'RFtable_Guatemala_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');

Map.addLayer(prev, {palette: 'FFFF00'}, 'cropland');

