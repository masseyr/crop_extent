/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var input1 = ee.Image("users/images/input/CenAM1_1_v2_2007-13_InputTOA"),
    input2 = ee.Image("users/images/input/CenAM1_2_v2_2007-13_InputTOA"),
    FCC = ee.Image("users/images/RHseg/CenAM1_2007-13_RHsegTOA"),
    image = ee.Image("users/images/cenAM1_2010_v4"),
    Cropclass = /* color: #0B4A8B */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-88.63563537597656, 18.53788509003654]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61331939697266, 18.563354268914367]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60490798950195, 18.579219727089182]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59872817993164, 18.59858172121416]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5831069946289, 18.537803712770707]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59761238098145, 18.521283325496277]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5871410369873, 18.50012187792744]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5977840423584, 18.49190076397093]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61778259277344, 18.48359785244267]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6461067199707, 18.490679772801567]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66009712219238, 18.50533109239878]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66395950317383, 18.53259548714766]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60973596572876, 18.54413067953968]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52019309997559, 18.53816991016178]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52431297302246, 18.548423118413695]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53873252868652, 18.54488338989145]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53330373764038, 18.543601745956664]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54883909225464, 18.528038159532546]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56064081192017, 18.531924102764492]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51156711578369, 18.520469472060128]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52517127990723, 18.51878071382534]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5009777545929, 18.530733914876684]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49357485771179, 18.544740985484736]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46905946731567, 18.561421836651128]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53941917419434, 18.446921850669487]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5558557510376, 18.466420945285684]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53733777999878, 18.468741149350215]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.55424642562866, 18.480300996591566]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5613489151001, 18.43012805867688]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5612416267395, 18.4169565067148]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54978322982788, 18.42422439659322]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.57594013214111, 18.418157663755554]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5866904258728, 18.426708030856364]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56802225112915, 18.41101167386064]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54830265045166, 18.40700083159117]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53667259216309, 18.428499482483954]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5889220237732, 18.374992185597534]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58263492584229, 18.38790224035668]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59776258468628, 18.379797934059486]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60724687576294, 18.38350397064521]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61535787582397, 18.387942964551865]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61851215362549, 18.395497136295553]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62295389175415, 18.399895099911266]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61031532287598, 18.40052627991968]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61711740493774, 18.410665564252547]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62284660339355, 18.418401965856305]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63527059555054, 18.422005381546796]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64155769348145, 18.41402483398554]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.630850315094, 18.429130557589243]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6237907409668, 18.435644745889714]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63327503204346, 18.446087288855338]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64366054534912, 18.45042289506793]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49710464477539, 18.373179813483173]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45972537994385, 18.37590854627232]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48573207855225, 18.389510838749672]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45800876617432, 18.39977293577149]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44444751739502, 18.400241231170043]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.433997631073, 18.39476413144362]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42868685722351, 18.398032087365337]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41880559921265, 18.425547648820444]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41541528701782, 18.42009171255561]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40923547744751, 18.426300880156447]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40108156204224, 18.43511547730372]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40095281600952, 18.44128339079657]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.380868434906, 18.434036578600633]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3686375617981, 18.444112821590412]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.36342334747314, 18.444194243369534]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38460206985474, 18.439654920293464]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38502049446106, 18.44655545817721]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37501049041748, 18.439512428390174]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39754104614258, 18.4172720657325]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40445041656494, 18.418391786609032]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38813185691833, 18.42633141649238]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.34187984466553, 18.45829998398955]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32739591598511, 18.469758772812177]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32490682601929, 18.45809644618891]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42170238494873, 18.463083052822995]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4139347076416, 18.46959595346392]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41436386108398, 18.45233622638052]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43157291412354, 18.444316375965865]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43721628189087, 18.44063200444731]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43767762184143, 18.43671345633575]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4468936920166, 18.435247794603022]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45521926879883, 18.434443710982258]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47596883773804, 18.42731875509881]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47862958908081, 18.428977878340667]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48513126373291, 18.431899117777224]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48326444625854, 18.403600704304917]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49673986434937, 18.414676321130482]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47944498062134, 18.413495498864304]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47341537475586, 18.414055372500563]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47208499908447, 18.409240399710203]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46893072128296, 18.407245149529018]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46213936805725, 18.404007908716462]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47764253616333, 18.40430313131269]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47993850708008, 18.40872122969491]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4807538986206, 18.411276345444314]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78000259399414, 18.238074081886158]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76626968383789, 18.258615636536472]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78180503845215, 18.28877145291284]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7530517578125, 18.292275707756602]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7259292602539, 18.295453924137952]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72026443481445, 18.31126264702666]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74009132385254, 18.322262710831495]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76523971557617, 18.330736357210007]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76541137695312, 18.340513125578703]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7285041809082, 18.35240744802089]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68910789489746, 18.35900599970925]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68378639221191, 18.367152011959064]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64627838134766, 18.35542163254364]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6362361907959, 18.32267010717462]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59383583068848, 18.34621598509482]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61297607421875, 18.370328852522547]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64925026893616, 18.318453508610737]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66142749786377, 18.31378864943836]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66782188415527, 18.31154784269304]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66730690002441, 18.301199013518048]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6365795135498, 18.28504301097244]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64355325698853, 18.279786382869666]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64660024642944, 18.274509219999718]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6522650718689, 18.2758947454827]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69086742401123, 18.229473622860837]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69709014892578, 18.251116620245156]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67769241333008, 18.247366990711566]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6880350112915, 18.25934921857089]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72528553009033, 18.278339763459982]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74627113342285, 18.270678591969208]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72000694274902, 18.25307291657491]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74159336090088, 18.251890990176392]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7360143661499, 18.2288214380054]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75974655151367, 18.217774685672772]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77528190612793, 18.2225032706617]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78146171569824, 18.208235597508473]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76729965209961, 18.198940598830273]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73476982116699, 18.170400225507464]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7212085723877, 18.187239610624424]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71279716491699, 18.18328474369027]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7724494934082, 18.121748524006595]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7753677368164, 18.103679107712548]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75649571418762, 18.106310098021012]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76154899597168, 18.113223907492948]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74017715454102, 18.120932789186504]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72365474700928, 18.135737784498]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72095108032227, 18.14083563341647]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6796236038208, 18.153885449397002]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67012858390808, 18.158809462687756]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66625547409058, 18.16470178477994]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.03998374938965, 17.969915790561952]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04403924942017, 17.991937819024724]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.12559986114502, 17.964649690153205]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.09315586090088, 17.910224136841965]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04768705368042, 17.89846308048129]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9756429195404, 17.8752449569731]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85643482208252, 17.873999219860046]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84617805480957, 17.867055607090226]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83420467376709, 17.880166554230573]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83360385894775, 17.88923337215883]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82315397262573, 17.88126930005971]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81917357444763, 17.887855000629912]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81404519081116, 17.87996234128859]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86279702186584, 17.878114203485648]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77770662307739, 17.860765276639487]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77004623413086, 17.853984541341855]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76294374465942, 17.85341266027921]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7614631652832, 17.84565123551735]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76622676849365, 17.834743819205062]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77661228179932, 17.841647841991644]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79491567611694, 17.828472773637483]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79036664962769, 17.818115873079755]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79158973693848, 17.815541875428618]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77253532409668, 17.8166654504025]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77808213233948, 17.81773794718097]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78095746040344, 17.816593950387855]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78060340881348, 17.818657224998386]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77288937568665, 17.829228579103717]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73538136482239, 17.805133148878408]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7397050857544, 17.804990139573082]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73470544815063, 17.80961745393371]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73838543891907, 17.813253846318755]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73416900634766, 17.816348807262816]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72702360153198, 17.81996463417284]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7210476398468, 17.82981075139823]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71880531311035, 17.845406132379086]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71397733688354, 17.836020470811462]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71658444404602, 17.83089338253603]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72232437133789, 17.80591969800856]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68393659591675, 17.822364930738498]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.70701432228088, 17.819413072096793]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72586488723755, 17.810638919957658]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73419046401978, 17.786397954028523]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71662735939026, 17.781616793386064]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69618892669678, 17.77200300405468]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69162917137146, 17.768917491275353]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68514895439148, 17.76501454784065]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68483781814575, 17.760345207790348]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7007486820221, 17.733532459375873]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7096643447876, 17.736935366731323]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71705651283264, 17.717477631528435]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73501658439636, 17.71172370549914]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7354564666748, 17.719388752622418]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73524188995361, 17.73170324222637]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73524188995361, 17.729260850552638]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74207615852356, 17.736475518163243]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75178575515747, 17.737139743493767]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7495219707489, 17.7440577593491]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76188158988953, 17.74749112145226]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72499585151672, 17.765341499250994]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73371839523315, 17.756350117688065]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71557593345642, 17.768488376008573]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69804501533508, 17.75615598060203]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69142532348633, 17.766434738688158]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67007493972778, 17.735841947091423]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6699891090393, 17.74133963432641]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67466688156128, 17.743219845508055]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67815375328064, 17.737517839889577]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66088032722473, 17.72233715350345]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68392586708069, 17.73440107550516]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.70769023895264, 17.700133532337997]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67396950721741, 17.70561187325264]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66567611694336, 17.69891723620917]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83720064163208, 17.032068919101548]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.44043755531311, 16.87261830398972]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32358169555664, 16.41072794436677]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34658432006836, 16.382155935690303]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31396865844727, 16.380673699855464]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35714149475098, 16.378862062972427]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37473678588867, 16.398871481400917]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39241790771484, 16.44407037106401]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36855697631836, 16.453948509446153]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38786888122559, 16.453742720025527]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40250301361084, 16.46427885777443]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41069984436035, 16.445140527005815]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41554927825928, 16.47547287676183]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41709423065186, 16.482057291716515]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43539762496948, 16.425753326220903]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43812274932861, 16.410892612377115]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41900396347046, 16.380900153281956]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40647268295288, 16.372706489150495]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40008902549744, 16.367178659448026]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40317893028259, 16.368166886313265]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.398930311203, 16.36063153003902]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3996866941452, 16.35459891764491]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39916634559631, 16.353121619813646]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39695084095001, 16.351525919704535]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39523959159851, 16.350130958282456]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39259493350983, 16.35098543767912]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39069592952728, 16.348844084666453]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38444101810455, 16.34972945462431]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38354516029358, 16.35103176476849]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3843230009079, 16.359380756270706]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38882911205292, 16.36088888990237]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38923144340515, 16.364244831452247]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3976321220398, 16.36437865614564]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4000461101532, 16.358974124389103]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4013603925705, 16.36595366294772]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39554536342621, 16.37670557553008]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39513230323792, 16.37967009627593]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39253056049347, 16.37970612316051]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3959584236145, 16.381142046424188]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38620322942734, 16.379423054602306]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38417279720306, 16.38061193978439]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38680672645569, 16.382583105730834]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38827657699585, 16.3821713755876]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3833144903183, 16.383298484786085]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38106679916382, 16.385074054546767]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37805199623108, 16.38338083040809]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37909269332886, 16.378959850620426]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37771940231323, 16.38258825235212]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3821986913681, 16.377529058036956]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37587940692902, 16.368249238326058]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3783255815506, 16.36966980507433]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37962913513184, 16.373354995215998]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38202702999115, 16.370205088411783]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38020849227905, 16.367276452954755]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37931263446808, 16.362021269269285]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37508010864258, 16.363431587111165]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31263828277588, 16.412251118143885]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32838821411133, 16.44077754654909]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86996650695801, 16.52974645824655]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77048873901367, 16.36502718989801]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78636741638184, 16.36683895530693]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.82516288757324, 16.42892291597917]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71797108650208, 16.59813247896659]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.70802545547485, 16.601628254311755]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.71380829811096, 16.602070362546623]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.69725370407104, 16.60984307604943]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.6634578704834, 16.63209021523473]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04775404930115, 14.148779130693246]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.03489017486572, 14.1551823140301]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93854522705078, 14.137095847244732]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02002537250519, 13.988838915007918]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02168297767639, 13.985798985357487]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01392602920532, 13.983560655312429]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01331984996796, 13.980952713073547]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01818537712097, 13.97921927403673]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.020352602005, 13.977204720374855]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0228899717331, 13.97866748589819]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02583503723145, 13.976887179300185]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02422034740448, 13.974950689823395]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.02603352069855, 13.974820548817442]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09049773216248, 13.954335437839854]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09359836578369, 13.953184885863056]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09275615215302, 13.954918520812653]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0922679901123, 13.940632563640843]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09081959724426, 13.939664168644923]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08201122283936, 13.938976918118678]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0775694847107, 13.933853713364082]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08166253566742, 13.960442117605183]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0579571723938, 13.981848057852687]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0552374124527, 13.983284766613373]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0531131029129, 13.98344093006856]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05119800567627, 13.984700644730994]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0515627861023, 13.98333161566105]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04700839519501, 13.98399791219555]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05712032318115, 13.979630511506048]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05940020084381, 13.975632627491864]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06058037281036, 13.97684553453659]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06112217903137, 13.973748184127992]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07122337818146, 13.969276473654956]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06522059440613, 13.966533018087791]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05817174911499, 13.96663713464505]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06517767906189, 13.964835911570107]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06126701831818, 13.957964064159865]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.05780696868896, 13.943365914694189]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06506502628326, 13.946203359158766]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06677627563477, 13.945766030543298]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06792962551117, 13.94679687523959]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06666362285614, 13.952867311682056]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06479144096375, 13.9600412578247]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06592869758606, 13.962555730372257]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06978571414948, 13.962852467558664]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07302045822144, 13.88076667307172]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07628202438354, 13.858101388748425]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0885558128357, 13.87048632442681]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08716106414795, 13.871439385027333]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09823322296143, 13.79743796668587]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09653806686401, 13.797167065901018]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09900569915771, 13.793093096937962]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.0944459438324, 13.787956252102079]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10085105895996, 13.783100631576739]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.10541081428528, 13.786330776644915]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11223435401917, 13.786789245227263]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11016368865967, 13.782986012705168]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.11326432228088, 13.780412283232678]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08474707603455, 13.759623429264307]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07989764213562, 13.766907553871643]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.07270932197571, 13.76041541946745]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06742000579834, 13.758675121678595]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06063938140869, 13.754652587438738]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25940179824829, 13.845892883147476]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26566743850708, 13.839205016929014]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25541067123413, 13.850184683482759]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24579763412476, 13.85672640140442]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24556159973145, 13.867934394255974]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24433851242065, 13.871017539014915]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24300813674927, 13.862955445635375]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24350166320801, 13.873434029241555]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24174213409424, 13.876485853773593]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24564743041992, 13.89319205846417]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23621678352356, 13.897899574425441]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24643063545227, 13.90636661334704]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.24540066719055, 13.90942841832102]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25184869766235, 13.910386525839936]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25948762893677, 13.911948649155235]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26654183864594, 13.91505724316685]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26340365409851, 13.902075852500493]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27209401130676, 13.896483163757843]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29000043869019, 13.8922963698145]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29488205909729, 13.898524458730389]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29903411865234, 13.88682842796403]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2955150604248, 13.876371280881797]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31551361083984, 13.888901053489162]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31832456588745, 13.88860942890782]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32541632652283, 13.894952180720226]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32675743103027, 13.89009879345605]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3331732749939, 13.887213791901766]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33019065856934, 13.880870828274192]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32740116119385, 13.867788568827176]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33469676971436, 13.856184737488574]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34486770629883, 13.858434717787752]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35684108734131, 13.866491760090645]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35496354103088, 13.870475908442328]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36337494850159, 13.877850308407012]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36287069320679, 13.88555776395383]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36563873291016, 13.88917184741464]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3622055053711, 13.892629649716627]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35969495773315, 13.900055418150263]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3671407699585, 13.899930442250547]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38182854652405, 13.902846528998346]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37620663642883, 13.902148754441242]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38355588912964, 13.908886877533456]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39573311805725, 13.89197350445207]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31086802482605, 13.920311036543676]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30513882637024, 13.918176209233566]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30771374702454, 13.911792437298406]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31750917434692, 13.917895035386987]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32530903816223, 13.917842966118613]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32810926437378, 13.924257811701041]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31581401824951, 13.921404477043424]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31319618225098, 13.93981515522882]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31763792037964, 13.941231300449882]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31421542167664, 13.9432409622093]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30601859092712, 13.946416816872418]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30577182769775, 13.954038689689323]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29860496520996, 13.950727579161244]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29178142547607, 13.946448054570048]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2972960472107, 13.938971711667481]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29040813446045, 13.935754102374146]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.28615951538086, 13.93537923235562]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27940034866333, 13.939606897845884]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2765303850174, 13.927381860340398]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26926159858704, 13.9307245456052]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26901483535767, 13.926236380743413]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26443362236023, 13.926215553789092]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26031374931335, 13.924018299562256]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26785612106323, 13.919363383926969]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25187015533447, 13.935774928468444]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2642297744751, 13.940065063840349]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.27147173881531, 13.949748814116246]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.26728749275208, 13.957172747364003]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.28005480766296, 13.956579257984568]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29694199562073, 13.963373058190552]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29740333557129, 13.969989662635086]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.30418395996094, 13.972363472820293]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29842257499695, 13.977631578178485]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29689908027649, 13.982639289874163]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.304194688797, 13.982566413354366]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31071782112122, 13.981358741951587]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3192687034607, 13.983263944811346]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31614661216736, 13.967636651200557]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31946182250977, 13.949176130515024]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3251051902771, 13.945739999051964]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32838821411133, 13.943719946367324]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.33164978027344, 13.938773866435277]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37535905838013, 14.046605547075917]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38960695266724, 14.043150055357787]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39184927940369, 14.024914187788061]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3938341140747, 14.024581099093046]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39705276489258, 14.026683713369682]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38765966892242, 14.022389987965827]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.36430835723877, 14.035364599879655]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3681492805481, 14.029723101914403]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37249982357025, 14.032439781548941]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.37137866020203, 14.078462306437146]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.35130500793457, 14.064631543640083]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.34984588623047, 14.071500198614194]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32937526702881, 14.021125275343037]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.3261137008667, 14.026714940169143]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32448291778564, 14.02908296007314]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32028794288635, 14.012027466379383]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31887173652649, 14.014942135511776]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31517028808594, 14.018533373370575]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.32475113868713, 14.015410561027798]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38947820663452, 13.994809344808743]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.38947820663452, 13.988042498966426]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.39402723312378, 13.993351887146533]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4044771194458, 13.992893827115926]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40801763534546, 13.992977110825725]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40998101234436, 13.995184118142745]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42632102966309, 14.002242235139773]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42803764343262, 13.994580316359432]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42312383651733, 14.015504246016288]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.41683673858643, 14.019314069816856]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.42627811431885, 14.010674214561185]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43426036834717, 14.013005966571464]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44488191604614, 14.008456946266664]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4425323009491, 14.012370982879297]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44119119644165, 14.005792032103331]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43768286705017, 14.00625006642563]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44856190681458, 13.992779311965677]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45490264892578, 13.992310840302592]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46118974685669, 13.99341434980727]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44016122817993, 13.978214602192287]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.43739318847656, 13.981546139653654]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49052238464355, 14.026079994411448]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49768924713135, 14.03107624138831]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.51944732666016, 14.026902300876497]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55141925811768, 14.033012257825071]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54850101470947, 14.026517170367518]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5624270439148, 13.997224540019875]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55944442749023, 13.988646317917365]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54762125015259, 13.981900112674548]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.53897380828857, 13.983232712104758]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54506778717041, 13.99578791834013]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52985429763794, 13.986418426336478]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52436113357544, 13.9926439758055]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52388906478882, 13.979609689373358]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5348539352417, 13.973071446559333]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52485466003418, 13.974237516207785]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5984115600586, 13.960556648842983]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58794021606445, 13.979339001477026]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6022310256958, 13.981212988077788]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58253288269043, 13.987292928408262]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59120178222656, 13.998328025937358]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60017108917236, 14.005032109508514]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61716556549072, 13.999119201258575]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61716556549072, 13.983003672126939]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61746597290039, 13.979339001477026]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61974048614502, 13.969552379142758]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.61806678771973, 13.959890284479886]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.60450553894043, 13.957599642288674]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58197498321533, 13.962972203508151]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.58618068695068, 13.962722319716937]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57180404663086, 13.972925687438064]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56425094604492, 13.968844394585446]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57133197784424, 13.985002558790738]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57437896728516, 13.99820310326924]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56699752807617, 14.006239656564798]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.56884288787842, 14.013734634218086]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55197715759277, 14.013318252988935]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54378032684326, 14.013151700285814]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12524032592773, 14.057658607129918]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.17073059082031, 14.052496415749616]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14034652709961, 14.080637271223903]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14995956420898, 13.990541049850636]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1162281036377, 13.96771994405108]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13931655883789, 13.969718963428207]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12395286560059, 13.984794342240209]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.09764575958252, 14.014650670263793]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1046838760376, 14.02685025625092]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11339569091797, 14.039340627573987]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0792350769043, 14.000868105461258]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07872009277344, 14.016940744384897]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0914659500122, 13.98999969946259]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07472896575928, 13.979443112244072]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06932163238525, 13.97380024078165]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05807781219482, 13.970510237138686]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05552434921265, 13.961535368008343]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.04393720626831, 13.958994854333259]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.04483842849731, 13.949582215397085]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0338306427002, 13.95939050994327]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.02213621139526, 13.957079038616195]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.00988388061523, 13.953059938696473]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98653793334961, 13.93423379241723]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98267555236816, 13.956100300529272]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98778247833252, 13.9742583388264]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97392082214355, 13.975466047484492]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95304250717163, 13.967553358319906]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95494151115417, 13.97271745996191]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95106840133667, 13.96840710891879]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95488786697388, 13.940637770054574]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97756862640381, 13.94289734252699]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94967365264893, 13.938940472957889]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92214345932007, 13.93190124261459]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92407464981079, 13.943168073228536]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9289026260376, 13.970093777629954]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92310905456543, 13.982295728935881]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93355894088745, 13.98204586611312]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.92182159423828, 13.978735158099553]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91654300689697, 13.983201079393934]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.9078311920166, 13.986709927396475]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.90362548828125, 13.975132887108133]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91160774230957, 13.955225679999993]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89323997497559, 13.960848182646028]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89411973953247, 13.944063564824777]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89732766151428, 13.93718068549063]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.89754223823547, 13.932744712003457]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8925211429596, 13.929912308774387]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88840126991272, 13.92524709833982]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88673830032349, 13.92198764319503]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88995695114136, 13.919467521767148]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87199687957764, 13.950352733464523]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87912082672119, 13.958932382332744]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86800575256348, 13.963305381474914]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8853542804718, 13.976267712664246]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.88330507278442, 13.98269134451702]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.92054748535156, 14.432186564597805]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.89299583435059, 14.435677667755392]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.91230773925781, 14.45562577785342]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.9087028503418, 14.403590707960117]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.87029361724854, 14.40652112067783]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86326622962952, 14.40657307800278]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86147451400757, 14.404712998230167]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85928583145142, 14.389862978568432]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84730172157288, 14.388501590737294]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85687184333801, 14.396856847792403]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85635685920715, 14.40444281775524]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85216188430786, 14.40466104047195]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.87609791755676, 14.39522011497428]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.88005149364471, 14.395173351003145]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.88394069671631, 14.382432402051519]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.88520669937134, 14.371603063467802]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8801212310791, 14.375219829904536]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86872720718384, 14.37679954860946]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86471462249756, 14.368381182030289]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86089515686035, 14.374804112600476]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8546724319458, 14.367716013630647]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8443512916565, 14.359754625851794]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84396505355835, 14.366302524213621]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83716297149658, 14.35183453089405]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.85314893722534, 14.354266715848556]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83823585510254, 14.3481342330334]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.82560801506042, 14.340806215599171]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84240937232971, 14.334694153955535]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84381484985352, 14.337261655931309]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83500647544861, 14.325816815329539]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84033870697021, 14.327625575587573]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8453598022461, 14.323893692164498]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84179782867432, 14.31913259201592]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8437397480011, 14.31676239970454]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.835618019104, 14.307115043017593]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83341860771179, 14.305711567596346]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8405532836914, 14.301740204462796]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8412184715271, 14.304391253086122]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84400796890259, 14.299484189437498]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84261322021484, 14.294577018666951]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84001684188843, 14.289711328358486]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84587478637695, 14.286134770931387]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83604717254639, 14.28287007295143]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8302321434021, 14.282329417759547]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83295726776123, 14.278045719179564]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.84205532073975, 14.2746561329285]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83817148208618, 14.26970682947128]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83136940002441, 14.259267185830707]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.82042598724365, 14.270746608128736]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.82351589202881, 14.251239561326788]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.81046962738037, 14.25140593986378]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79845333099365, 14.259891082502145]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79712295532227, 14.243502823857854]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79645776748657, 14.256366043629448]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78699493408203, 14.266421097371357]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79366827011108, 14.26787680737817]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.7732834815979, 14.273761939093108]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.75800561904907, 14.276777229686054]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76053762435913, 14.286820975310652]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76738262176514, 14.286966533546307]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76727533340454, 14.294805745107928]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.77109479904175, 14.295720648545263]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.77587985992432, 14.306137809206803]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78858280181885, 14.290958951292913]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8028736114502, 14.298943574178955]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80480480194092, 14.309215041717987]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80459022521973, 14.314995134766521]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80416107177734, 14.326222228379496]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79326057434082, 14.317531675390706]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76545143127441, 14.325390611076857]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.74931526184082, 14.318571232940668]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.75339221954346, 14.302187246226671]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76000118255615, 14.305981867248002]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.75806999206543, 14.309568504915546]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.73626899719238, 14.311710064159351]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.73918724060059, 14.326845939333511]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.75004482269287, 14.341481858441735]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.7546796798706, 14.354329079217951]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.74137592315674, 14.356823599748678]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.76609516143799, 14.347552158142472]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.74193382263184, 14.359567540226044]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78087949752808, 14.349423107766142]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.77909851074219, 14.356844387302974]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.77100896835327, 14.346429580867246]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.78808927536011, 14.35333126322333]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79270267486572, 14.347926349317435]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.7978310585022, 14.351169313314282]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80328130722046, 14.344288353059605]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8082594871521, 14.345743558652009]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80464386940002, 14.352011228981526]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80955767631531, 14.360191158370366]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80904269218445, 14.36604269062836]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.81438565254211, 14.36324686215742]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.8167781829834, 14.367133989658287]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80459022521973, 14.37619676252607]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83171272277832, 14.381767275458616]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.82763576507568, 14.384323844978791]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.83568239212036, 14.384178349937505]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.81498646736145, 14.370823580279778]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.81070566177368, 14.371623849648964]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.81066274642944, 14.376570905803662]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.80244445800781, 14.388376883040118]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.79712295532227, 14.400348504356291]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47354125976562, 14.144149584395706]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44624710083008, 14.158714130784626]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.42212867736816, 14.178770062947711]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.47834777832031, 14.185427241831533]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.505126953125, 14.146479974541528]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.53156280517578, 14.162126260936681]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.48384094238281, 14.069314739868684]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45002365112305, 14.05316251150249]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44238471984863, 14.038841025789464]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.41225814819336, 14.018023316924578]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37850522994995, 14.032346103476733]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37529730796814, 14.03194016472153]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37701392173767, 14.03783141052505]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.37007236480713, 14.032085886408662]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36842548847198, 14.035406234034875]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36447727680206, 14.034474668003222]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3629001379013, 14.031815260344539]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36056661605835, 14.024820506641465]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36508345603943, 14.022197419004076]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36690199375153, 14.016602439419028]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.36775493621826, 14.015384537413093]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33315443992615, 14.025767725361217]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.32703900337219, 14.02195800871813]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.33100867271423, 14.034677635226565]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31929278373718, 14.027152114914893]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31585955619812, 14.028442816444814]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3029956817627, 13.965595966954977]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2897777557373, 13.974924661628084]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2810230255127, 13.95006118639036]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27248287200928, 13.953018289625911]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26583099365234, 13.972467586741963]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25381469726562, 13.965804200869414]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25020980834961, 13.958744966229656]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2504243850708, 13.969802255525765]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23480319976807, 13.970135423614716]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24626159667969, 13.978152135404295]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24849319458008, 13.987251285527849]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23819351196289, 13.99116568333021]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23162746429443, 13.99922330307176]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24587535858154, 13.998910997490748]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25447988510132, 14.001513531030675]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25881433486938, 14.007363918807135]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25791311264038, 14.01360971992863]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24418020248413, 14.015733253604978]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23476028442383, 14.019480618048322]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22952461242676, 14.013755453259709]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2226152420044, 14.024601917150644]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2399959564209, 14.034136388898238]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25750541687012, 14.044919440160069]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23754978179932, 14.058366317839438]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21562004089355, 14.064985388482484]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2219500541687, 14.072873904845558]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22478246688843, 14.078597591932105]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.20669364929199, 14.095663734701288]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.19433403015137, 14.085590702247869]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.16824150085449, 14.071479384819927]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.16665363311768, 14.096579442879401]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05721950531006, 14.163603447721014]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.0632061958313, 14.172653607593336]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07460021972656, 14.155510010679276]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.08108043670654, 14.161980622282547]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.08689546585083, 14.16659940267023]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.09436273574829, 14.175212552858653]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.03606224060059, 14.26513174636882]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.05061054229736, 14.271994336182326]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06078147888184, 14.268251131288343]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.06593132019043, 14.273616372318761]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.07344150543213, 14.291873870380012]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.03378772735596, 14.292414502636648]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01211547851562, 14.289212277247172]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.01155757904053, 14.31179323109674]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99503517150879, 14.321648295072247]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98525047302246, 14.311502146681175]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98340511322021, 14.299525775172757]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99902629852295, 14.305306117509168]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99087238311768, 14.29116688777587]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97782611846924, 14.286301123700353]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98356604576111, 14.280977774097911]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98074436187744, 14.270829790214]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97838401794434, 14.265381298751509]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.98005771636963, 14.2610972778376]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97804069519043, 14.248036750573831]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99776029586792, 14.250095705563206]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.99162340164185, 14.23618179581434]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97975730895996, 14.2285901382435]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.97087383270264, 14.22873573407574]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.96518754959106, 14.230774065876195]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.95503807067871, 14.234393099472289]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.94096183776855, 14.240882255872666]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93430995941162, 14.243128458865488]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.93190670013428, 14.261721169444105]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.91280937194824, 14.243752400174483]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84850072860718, 14.09068971018209]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.85287809371948, 14.099201677785194]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86459398269653, 14.101823882548462]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.87718963623047, 14.083696756012733]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.86967945098877, 14.079513368560702]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8549165725708, 14.054994264827949]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.84378004074097, 14.055285678778077]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8315920829773, 14.049873644882101]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.81521987915039, 14.043004340706105]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.79416990280151, 14.071500198614194]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.78983545303345, 14.083342940139659]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.80652952194214, 14.076495454423744]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.8023452758789, 14.071895660345227]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.81927537918091, 14.081886045475347]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.82069158554077, 14.088400373768213]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.75028896331787, 13.99401815465286]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73792934417725, 14.000056115879579]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7414698600769, 14.003678816471245]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72672843933105, 14.001409430255]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71473360061646, 14.006780968701753]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71698665618896, 14.021770643972257]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71303844451904, 13.993757894137993]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.71645021438599, 13.979422290094423]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.72305917739868, 13.982108331844238]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70406913757324, 13.976069899437759]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.69593667984009, 13.967095246937996]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.76026678085327, 13.941793590995445]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.77876329421997, 13.960535824985797]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.7705020904541, 13.9648254998351]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.774085521698, 13.979401467942905]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.4211630821228, 14.51383907771865]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43002510070801, 14.516809581960535]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44388675689697, 14.527341048358712]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43219232559204, 14.531910759406456]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45294189453125, 14.54622165219143]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45910024642944, 14.55554711954018]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.45330667495728, 14.558454757059394]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.43654823303223, 14.562878446351515]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.42566919326782, 14.567821243041063]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.44373655319214, 14.571642488902182]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.38037204742432, 14.526302464493583]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3848352432251, 14.526094747135183]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28713846206665, 14.45026489908251]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28177404403687, 14.453350536956744]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27797603607178, 14.464726508492326]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30786657333374, 14.482532110474557]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2330436706543, 14.508978166600768]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21525526046753, 14.379875810889692]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22201042718506, 14.382868890302113]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21025562286377, 14.38586192961956]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23051166534424, 14.382037483375761]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23117685317993, 14.378379256150257]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22720718383789, 14.368838484157564]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22109174728394, 14.372434509206768]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22795820236206, 14.36436935510932]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22270107269287, 14.358902345623491]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22941732406616, 14.353019444813093]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23598337173462, 14.343997310806934]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25043511390686, 14.351460346248574]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27389907836914, 14.357343288027215]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29027128219604, 14.358923132984755]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28469228744507, 14.345431729677903]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29389762878418, 14.343311281144137]),
            {
              "class": 1,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30211591720581, 14.3471156009817]),
            {
              "class": 1,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30112886428833, 14.336949815154876]),
            {
              "class": 1,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.31436824798584, 14.341668959176456]),
            {
              "class": 1,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30975484848022, 14.349859660429573]),
            {
              "class": 1,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30078554153442, 14.358278723888107]),
            {
              "class": 1,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29999160766602, 14.362935057560268]),
            {
              "class": 1,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.14489555358887, 14.3580708495902]),
            {
              "class": 1,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13589406013489, 14.35083670378339]),
            {
              "class": 1,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13535761833191, 14.355815401047641]),
            {
              "class": 1,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13605499267578, 14.347832801582296]),
            {
              "class": 1,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13234281539917, 14.356709268165465]),
            {
              "class": 1,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12778306007385, 14.35865289713785]),
            {
              "class": 1,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13516449928284, 14.360814774776948]),
            {
              "class": 1,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.13751411437988, 14.368900843466102]),
            {
              "class": 1,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1484307050705, 14.361178550211608]),
            {
              "class": 1,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.15238428115845, 14.399886070836756]),
            {
              "class": 1,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18005394935608, 14.41257926318903]),
            {
              "class": 1,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.18287563323975, 14.406884821698377]),
            {
              "class": 1,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11546635627747, 14.482163339156914]),
            {
              "class": 1,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11058473587036, 14.484318824797281]),
            {
              "class": 1,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.11472606658936, 14.493023657265999]),
            {
              "class": 1,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.12823367118835, 14.501593116643335]),
            {
              "class": 1,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.1271071434021, 14.552556366691851]),
            {
              "class": 1,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2278938293457, 14.512821203457127]),
            {
              "class": 1,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22657418251038, 14.515646312321982]),
            {
              "class": 1,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23055458068848, 14.219459012223716]),
            {
              "class": 1,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25269889831543, 14.220707023873526]),
            {
              "class": 1,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25789165496826, 14.228028553440298]),
            {
              "class": 1,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26763343811035, 14.235391443363547]),
            {
              "class": 1,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27583026885986, 14.226988577897096]),
            {
              "class": 1,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24720573425293, 14.245499426663425]),
            {
              "class": 1,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23922348022461, 14.243877188229302]),
            {
              "class": 1,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23566150665283, 14.247828774277593]),
            {
              "class": 1,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25789165496826, 14.243877188229302]),
            {
              "class": 1,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26111030578613, 14.250282882357762]),
            {
              "class": 1,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2665605545044, 14.25839372759015]),
            {
              "class": 1,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2431287765503, 14.258726473985563]),
            {
              "class": 1,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2472915649414, 14.264050349517145]),
            {
              "class": 1,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24398708343506, 14.274947265038952]),
            {
              "class": 1,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22684240341187, 14.269270121004029]),
            {
              "class": 1,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22089862823486, 14.26382159182591]),
            {
              "class": 1,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21203660964966, 14.259641524040756]),
            {
              "class": 1,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.21407508850098, 14.279626122319845]),
            {
              "class": 1,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22175693511963, 14.283847407886936]),
            {
              "class": 1,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.22617721557617, 14.284658384717604]),
            {
              "class": 1,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23139142990112, 14.29283037271897]),
            {
              "class": 1,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.23478174209595, 14.288151789959741]),
            {
              "class": 1,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2308120727539, 14.28095697951665]),
            {
              "class": 1,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24115467071533, 14.295554302742627]),
            {
              "class": 1,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24072551727295, 14.301459503365901]),
            {
              "class": 1,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2508749961853, 14.302727853683493]),
            {
              "class": 1,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2563681602478, 14.307946728018962]),
            {
              "class": 1,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.24658346176147, 14.321939366333101]),
            {
              "class": 1,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.25604629516602, 14.327116213541762]),
            {
              "class": 1,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.26160383224487, 14.325265868215595]),
            {
              "class": 1,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.27123832702637, 14.309901175652218]),
            {
              "class": 1,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28398418426514, 14.290854982979349]),
            {
              "class": 1,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.29160165786743, 14.285552535271497]),
            {
              "class": 1,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.28379106521606, 14.286197153234166]),
            {
              "class": 1,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.2928032875061, 14.281268898033943]),
            {
              "class": 1,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.30370378494263, 14.281040157830184]),
            {
              "class": 1,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40955448150635, 14.279854863960503]),
            {
              "class": 1,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40485525131226, 14.284232102388907]),
            {
              "class": 1,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.39976978302002, 14.2882037747472]),
            {
              "class": 1,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.39401912689209, 14.288578064862415]),
            {
              "class": 1,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.38522148132324, 14.294166350154985]),
            {
              "class": 1,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.38833284378052, 14.294077978351817]),
            {
              "class": 1,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.3922381401062, 14.298964367097563]),
            {
              "class": 1,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.39176607131958, 14.303206082272814]),
            {
              "class": 1,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.39554262161255, 14.294452258691988]),
            {
              "class": 1,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40966176986694, 14.308778409941352]),
            {
              "class": 1,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.40481233596802, 14.320068187354938]),
            {
              "class": 1,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.41910314559937, 14.311897189725146]),
            {
              "class": 1,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62591218948364, 14.28262053994733]),
            {
              "class": 1,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.61593437194824, 14.2887548127559]),
            {
              "class": 1,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62286520004272, 14.287070503656972]),
            {
              "class": 1,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.63667321205139, 14.298725248417538]),
            {
              "class": 1,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.62751078605652, 14.302405568625387]),
            {
              "class": 1,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6331434249878, 14.301833771417174]),
            {
              "class": 1,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6362977027893, 14.3064185044599]),
            {
              "class": 1,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6318130493164, 14.311460563162443]),
            {
              "class": 1,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.65734767913818, 14.312375398796041]),
            {
              "class": 1,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.65769100189209, 14.291177284594976]),
            {
              "class": 1,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66266918182373, 14.289045926630704]),
            {
              "class": 1,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66799068450928, 14.289971250373814]),
            {
              "class": 1,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66570544242859, 14.286363505957013]),
            {
              "class": 1,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.67949199676514, 14.26922852967729]),
            {
              "class": 1,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.68601512908936, 14.268292722795534]),
            {
              "class": 1,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.67251825332642, 14.276818819618818]),
            {
              "class": 1,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.68421268463135, 14.278440821004725]),
            {
              "class": 1,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.67352676391602, 14.261180463484907]),
            {
              "class": 1,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.6574764251709, 14.247870369552176]),
            {
              "class": 1,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66154265403748, 14.226915779429829]),
            {
              "class": 1,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.66373133659363, 14.219043006809644]),
            {
              "class": 1,
              "system:index": "917"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


//add layer to map
//Map.addLayer(image, {palette: '00FF00'}, 'cropland');
//print(input1)
//print(input2)



//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};


//add all max val to map
Map.addLayer(FCC,vizParams,'FCC');


//var input=ee.ImageCollection([input1,input2]).mosaic()


//add layer to map
//Map.addLayer(input1.select([0]), {min:0,max:0.5}, 'inp1');
//Map.addLayer(input2.select([0]), {min:0,max:0.5}, 'inp2');


throw('stop')
//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(60).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

var studyArea = zones.filterMetadata('name','equals','CenAM1');

studyArea=buffer1(studyArea.geometry());


//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea2 = NonCropClass2.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea2);

//merge all training samples into one feature collection
var TrainingSamples=CropSamplesArea
                    .merge(NonCropSamplesArea)
                    .merge(NonCropSamplesArea2);
                    
print('Training samples:',TrainingSamples);

//add layer to map
//Map.addLayer(TrainingSamples, { },'Samples');

print('Study Area:');
print(studyArea);

var input=ee.ImageCollection([input1,input2]).mosaic();

print(input);

var training = input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});


//build classifier
var classifier = ee.Classifier.randomForest(250,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);
studyArea = zones.filterMetadata('name','equals','CenAM1');
classified = classified.updateMask(classified.eq(1)).clip(studyArea);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'cenAM1_v1_asset',
  assetId: 'cenAM1_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'cenAM1',
  description: 'cenAM1_v1_drive',
  fileNamePrefix: 'cenAM1_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_cenAM1_v1',
  folder: 'cenAM1',
  fileNamePrefix: 'RFtable_cenAM1_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



