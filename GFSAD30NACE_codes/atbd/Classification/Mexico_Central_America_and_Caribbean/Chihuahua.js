/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var input = ee.Image("users/images/input/Chihuahua_2007-13_InputSR"),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-108.621826171875, 30.85802655513775]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.50818634033203, 30.919309189078987]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.62972259521484, 30.822063696500948]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.69976043701172, 30.8432893085841]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66697311401367, 30.963773447193716]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66783142089844, 31.004391558556435]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66602897644043, 30.902887522187566]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.57736587524414, 30.924610650052703]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.39866638183594, 30.82766535553232]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.39317321777344, 30.91194556141283]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17859649658203, 30.87452958280948]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.13516616821289, 31.02204621251978]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.89007186889648, 25.65204931812047]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.77076721191406, 25.598960885279478]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.70896911621094, 25.696916162022237]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.71240234375, 25.80885474899831]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.7614974975586, 25.732797470023588]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.69832611083984, 25.991686698512773]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14498901367188, 26.025319095640018]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.30471992492676, 25.94724014746918]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.53500366210938, 26.16221744599182]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.73825073242188, 26.266633167696668]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.57561492919922, 26.549222577692042]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.67517852783203, 26.891148114391818]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.61166381835938, 26.79771904086616]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.56590270996094, 25.609642378102322]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.61156463623047, 25.713311550538407]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.17159652709961, 25.483725977938672]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.17588806152344, 25.56660097757674]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1243896484375, 25.652977768720525]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.94551849365234, 25.4538149753354]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.93212890625, 25.28630032438623]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.80166625976562, 25.291267057619464]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.76630401611328, 25.312683764022797]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.75703430175781, 25.211464316038484]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.03409576416016, 25.438624158827487]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.9702377319336, 25.557619165453765]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.02242279052734, 25.296543988781043]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.79754638671875, 25.36233112113868]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.7508544921875, 25.446064798199433]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.68974304199219, 25.517347597093757]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.5918960571289, 25.798654774824332]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.28513717651367, 25.833732820129402]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.30466365814209, 25.83504611338665]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.28734731674194, 25.82706956362893]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.23145008087158, 25.83203324251533]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.24252223968506, 25.84783064782244]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.23196506500244, 25.85273552537735]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0141830444336, 25.889805181761506]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.92388916015625, 25.979342119043487]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.74604797363281, 25.91898934638743]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.75480270385742, 25.884245474865605]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.86415100097656, 25.923621089421736]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97960662841797, 25.666594213964665]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96810531616211, 25.584098090738614]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87454986572266, 25.457534883136212]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74752044677734, 25.85435756610237]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.75541687011719, 25.87961218580555]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04535293579102, 26.088238229818902]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96862030029297, 26.352497858154]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.404541015625, 26.154205294151907]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.57379913330078, 26.164374469767562]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.61053466796875, 26.17346434588999]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.55182647705078, 25.973786635382815]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74494552612305, 26.105504236403494]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.09049987792969, 26.081454458607546]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.78092193603516, 25.46528432176987]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62299346923828, 25.36543340443438]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.50042724609375, 25.53996329655107]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4918441772461, 25.698153628621448]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62711334228516, 25.72537463906764]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.56462860107422, 25.799582081481486]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.67140197753906, 25.834505347339903]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.82795715332031, 25.678352619959448]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77542877197266, 25.695678682561987]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.90520477294922, 25.739910581461984]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8602294921875, 25.782271161150334]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.84512329101562, 25.80669119147928]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.69921112060547, 25.6579293832195]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.64977264404297, 25.655144125354607]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16132354736328, 25.83697740052369]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18192291259766, 25.826470817866692]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28114318847656, 25.866020156006673]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2396011352539, 26.07096967521616]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17162322998047, 26.14064501453138]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.00614166259766, 25.84315730753161]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.04837036132812, 25.73836428910046]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.00511169433594, 25.794018132720407]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68942642211914, 25.872507456206534]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.64101791381836, 25.96205753032961]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.57647323608398, 25.988446371891165]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5090103149414, 25.982737007627374]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.47811126708984, 25.952642534349906]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.48034286499023, 25.971471773067634]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.42455291748047, 25.931340256700274]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.32818651199341, 25.866792472326246]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2898416519165, 25.808893383594942]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78411102294922, 25.30678678767568]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6680679321289, 25.324476855538716]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6296157836914, 25.398622849619606]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61056137084961, 25.390481423645575]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62103271484375, 25.42614455476455]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65107345581055, 25.427927434478697]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69029808044434, 25.34107834007917]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.72158336639404, 25.352093021352342]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74737548828125, 25.332545151140504]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69707870483398, 25.285291431843284]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61382293701172, 25.273572142133727]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56756019592285, 25.28824047876548]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69321632385254, 25.319821825020448]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.63081741333008, 25.304614145095]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78788757324219, 25.27341691215769]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.7581901550293, 25.266276118631193]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86238861083984, 25.31345966059504]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84144592285156, 25.36202088842955]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85552215576172, 25.3471287821235]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1979866027832, 25.556380241967158]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86050033569336, 25.459859767127828]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05898380279541, 25.468345212521346]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90736389160156, 25.92593689269211]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89157104492188, 25.934890903857774]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18878936767578, 27.249746156836583]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08819580078125, 27.158142349342786]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99927520751953, 27.093057989274048]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.93816375732422, 26.983582151332133]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8495864868164, 26.87553091802303]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77062225341797, 26.900946037560832]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.79019165039062, 27.05973726632171]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16166687011719, 27.20181622031119]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17093658447266, 27.330295170004387]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3487777709961, 27.31321389856826]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.37281036376953, 27.41383343529114]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.46001434326172, 27.43242278383448]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34122467041016, 27.47294280429134]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96641540527344, 27.449485659555798]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91714859008789, 27.459082367458976]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8984375, 27.43699345568814]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07353210449219, 27.380456183005474]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.14202499389648, 27.377864833318]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29068374633789, 27.45291315110351]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35522842407227, 27.586350003667597]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.32913589477539, 27.53354268376982]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86822509765625, 27.6592036443079]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8871078491211, 27.719092821841617]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.06941223144531, 27.801728407757835]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.08177185058594, 27.831486141765794]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30681991577148, 27.937090508967255]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26218795776367, 27.94436977065213]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40217781066895, 27.913581211170058]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40183448791504, 27.927384063796104]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35385513305664, 27.957031484004197]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29823684692383, 27.964157783320204]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.38707160949707, 27.973406108425742]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43749713897705, 27.982047269478162]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42754077911377, 27.995424543336917]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45736694335938, 27.991673010789626]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48955345153809, 27.982123066073417]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.51229858398438, 27.963172259322775]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.50096893310547, 27.948160858504323]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.57512664794922, 27.95801706407175]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58851623535156, 28.000843193153166]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59435272216797, 27.97461894472169]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63778305053711, 27.95331652441283]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61649703979492, 28.001222109520807]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71365737915039, 28.035470642862197]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71485900878906, 28.02334851384387]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.60465240478516, 27.92419894651842]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48466110229492, 27.898107787730996]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56163787841797, 27.49898352446776]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.53897857666016, 27.484517217871936]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.49571990966797, 27.46943978155436]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.41478157043457, 27.393640639687398]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.590087890625, 25.44823489808649]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.67008209228516, 25.45350497782928]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.67094039916992, 25.53578126250578]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55901718139648, 25.49937592068978]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5490608215332, 25.570162544163104]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5102653503418, 25.501235184353053]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.63420486450195, 25.48620531264621]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.70063781738281, 25.45505495737635]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.73119354248047, 25.46047972860684]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7607192993164, 25.45272998057134]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.72106552124023, 25.520136064403477]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98868560791016, 25.299647958643714]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.12017822265625, 25.248111772754044]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.16935920715332, 25.218491855765915]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14167881011963, 25.21996719929323]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00671005249023, 25.288861321611638]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04696464538574, 25.26821659322319]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.94800186157227, 25.273106451609934]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91212463378906, 25.236233616431036]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95624160766602, 25.284592962859087]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.28315734863281, 25.576511161006223]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.28487396240234, 25.714239523856307]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.34564208984375, 25.729086112472075]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32813262939453, 25.822762389557596]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.3816909790039, 25.742384607391713]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07098388671875, 25.699700443783982]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.93983459472656, 25.783507739269197]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9367446899414, 25.827706934822306]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.92472839355469, 25.690419251385453]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.82413482666016, 25.693822439258167]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.03081512451172, 25.709908919785647]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10428619384766, 25.82307142968663]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.22650909423828, 25.925010576844027]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19561004638672, 25.999864268396305]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.21243286132812, 25.997858502049528]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.29208374023438, 25.94677707420218]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32143783569336, 25.935817142040126]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37636947631836, 25.920687673296896]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42529296875, 25.985205955933576]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37739944458008, 26.005727081353513]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39078903198242, 26.024856329863088]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41361999511719, 26.099646412696337]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47576141357422, 26.11660246600101]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41293334960938, 26.141569629097454]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44108581542969, 26.160522613610677]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44451904296875, 26.06418490332395]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.57841491699219, 25.788763052442683]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4146499633789, 25.64585946281683]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5626220703125, 25.711146251317334]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53858947753906, 25.61676284310854]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51859092712402, 25.820212777715945]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.56047630310059, 25.873974772332293]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.66201000756836, 25.96360090043605]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.61326217651367, 25.983971488262128]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52142333984375, 25.95094466804236]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40194702148438, 25.929024559605008]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19732666015625, 25.993383976801425]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.21123123168945, 25.936125886482632]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.2110595703125, 25.890422910810564]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1729507446289, 25.865247834639685]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.21723937988281, 25.818899319887947]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10977935791016, 25.74439471553208]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10909271240234, 25.717951344747796]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1399917602539, 25.746250169786514]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.97416687011719, 25.8471740739716]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.02978515625, 25.778561349446075]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96730041503906, 25.664892243328858]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96781539916992, 25.693822439258167]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.95408248901367, 25.743466977538944]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.00643920898438, 25.715631470262167]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.89863586425781, 25.681601448645836]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.91219711303711, 25.732642832438806]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.10492706298828, 27.68748029366613]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0975456237793, 27.7213722173681]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.072998046875, 27.698120107680104]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08673095703125, 27.69173635971249]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1195182800293, 27.662548575810682]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19504928588867, 27.714381920098035]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18749618530273, 27.752215349668436]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25186920166016, 27.757076524540352]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20758056640625, 27.72456329105122]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19865417480469, 27.810079615315917]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.09445571899414, 27.711874421674544]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.04544639587402, 27.92184796642431]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.07754707336426, 27.91138169278581]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.01437568664551, 27.921620449508442]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08767509460449, 27.95043544733759]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11745834350586, 27.955211927931803]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1429500579834, 27.917752588686003]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17530822753906, 27.916235742751823]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15728378295898, 27.975528562995066]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1620044708252, 28.008345489218808]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19444847106934, 28.051075873033163]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.22740745544434, 28.082355265230156]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21556282043457, 28.120665784250885]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20002746582031, 28.105979178439892]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25238418579102, 28.13663707693313]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21015548706055, 28.176592721900384]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15041732788086, 28.19369038968348]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12586975097656, 28.240278994560775]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14715576171875, 28.259029704924934]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13187789916992, 28.14798962886672]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14938735961914, 28.142691921029332]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17238998413086, 28.19263132156291]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18234634399414, 28.221676242930013]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.226806640625, 28.254493545104662]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23710632324219, 28.286696098948493]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18114471435547, 28.298335001920627]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17084503173828, 28.28367279907387]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16809844970703, 28.335359405474886]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24088287353516, 28.340949725363693]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21273040771484, 28.341402981651196]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.22440338134766, 28.378714446104926]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17050170898438, 28.413748082084467]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23350143432617, 28.428996175185883]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18680953979492, 28.42008914000683]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2074089050293, 28.395628681745972]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23006820678711, 28.39547767372447]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19316101074219, 28.357869981590785]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26646041870117, 28.343669234078366]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24740600585938, 28.287905394861443]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25186920166016, 28.267194306143878]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44035339355469, 28.291079731278796]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4439582824707, 28.30921698045776]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43314361572266, 28.311635046750613]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41168594360352, 28.272183476727974]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4194107055664, 28.291835511712545]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46369934082031, 28.301509027298632]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.48515701293945, 28.305967617314423]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49391174316406, 28.29553875826926]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43528938293457, 28.301660169002687]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.402587890625, 28.373579233570926]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4077377319336, 28.39577968955231]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.39391899108887, 28.343669234078366]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41589164733887, 28.340572010313434]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42516136169434, 28.360740114699748]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37271881103516, 28.37380579230706]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.36035919189453, 28.413144152002783]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76101684570312, 28.866323768959116]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.86813354492188, 28.823019085894103]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.80530548095703, 28.93124697186731]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68170928955078, 28.941763110940347]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69578552246094, 29.02675438398136]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.79878234863281, 29.058570583013324]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.77165985107422, 29.176744708249572]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70230865478516, 29.140467101364564]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.87740325927734, 29.153660441150986]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.92718505859375, 29.19532826709913]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75003051757812, 29.229788854806042]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.85955047607422, 29.283404438048418]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.85989379882812, 29.3731998810922]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.9024658203125, 29.372900694326482]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.90383911132812, 29.41298388294182]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.80290222167969, 29.419862244611334]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.06829071044922, 29.27472002257906]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.08305358886719, 29.115575053773515]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.12905883789062, 29.218103519493603]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.0174789428711, 29.142566155107065]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42431640625, 29.194429140154803]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.30484008789062, 29.196527090760764]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.27771759033203, 29.318134717405417]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.26604461669922, 29.138368004748212]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47581481933594, 29.189034212931254]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47753143310547, 29.07957590059833]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41744995117188, 29.06307208285094]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43358612060547, 29.005438048885107]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38723754882812, 29.1332700201967]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36629486083984, 29.26603486913115]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.30655670166016, 29.404460049793474]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.34174728393555, 29.42225460909305]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33161926269531, 29.464709701302176]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.37968444824219, 29.443708609267745]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.37092971801758, 29.517753582237013]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42380142211914, 29.51685729672197]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47821807861328, 29.53657374409866]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49881744384766, 29.610177689916434]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.53031730651855, 29.62607088373826]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4931526184082, 29.91298368255114]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4983024597168, 29.942589145463565]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46139526367188, 29.946456545360455]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.567138671875, 29.969509077618802]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.54619598388672, 30.00608469865273]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.61898040771484, 29.978728593469928]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.62996673583984, 30.005044115214076]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49958992004395, 29.89386190900311]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.45718955993652, 29.904799715118397]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48783111572266, 29.874066636966297]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49675750732422, 29.84533417932364]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44491577148438, 29.802368947590164]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44251251220703, 29.773690368785253]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43916511535645, 29.745301662213596]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5118637084961, 30.0377429465337]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52817153930664, 30.030906809859253]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.37916946411133, 30.13236006754371]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36698150634766, 30.1656104983674]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.3089599609375, 30.187276619492078]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.30878829956055, 30.090484220005344]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.27582931518555, 30.06255713055085]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.30295181274414, 30.13102387856127]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.24767684936523, 30.036256869979837]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.2323989868164, 30.02763718650046]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.34672546386719, 30.134141624718595]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40835189819336, 30.19157959693835]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.07711791992188, 31.409033152571638]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.93463897705078, 31.329299184561975]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.00347518920898, 31.32621986312478]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.02235794067383, 31.35950051982242]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.94751358032227, 31.367708915120826]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88211059570312, 31.24714948991159]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82992553710938, 31.26343842013753]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79181671142578, 31.2103056021119]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75061798095703, 31.171537970422925]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7792854309082, 31.146124813305914]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74666976928711, 31.13833791598442]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80726623535156, 31.180203326566]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.70341110229492, 31.13951333768845]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.70684432983398, 31.15185438592619]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.64023971557617, 31.1046852937585]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.60676574707031, 31.087192975643816]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45656204223633, 30.926230482296194]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.93944549560547, 31.28823328488073]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08329772949219, 31.404930850023426]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13067626953125, 31.436572538702617]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12363815307617, 31.46644655125287]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13998889923096, 31.47405997168202]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20414733886719, 31.523239448504018]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26131057739258, 31.568663548206615]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27358436584473, 31.60500152469007]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.32722854614258, 31.641617612780042]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28251075744629, 31.680629669686866]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24491691589355, 31.643955875291862]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28671646118164, 31.631240863489307]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85655975341797, 30.664198754219317]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92110443115234, 30.690921184422887]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92144775390625, 30.736524153326393]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.91011810302734, 30.767209150613006]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9432487487793, 30.795230168082657]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9487419128418, 30.748917348441967]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.96401977539062, 30.73755698048018]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17224502563477, 31.13143201926728]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.18408966064453, 31.19826584106639]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.26494216918945, 31.124231719279653]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.2973861694336, 31.12364391556493]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.24605941772461, 31.177119138149735]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16415023803711, 29.91387643831764]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1550521850586, 29.98036422465241]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.182861328125, 29.88351825335318]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14578247070312, 29.826646200964593]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18080139160156, 29.773913869992267]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11093521118164, 29.834613216843092]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1111068725586, 29.815625356417826]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17067337036133, 29.86223224829295]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4190673828125, 30.14186133422206]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29478454589844, 30.151955427734205]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2542724609375, 30.12360027710124]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17805480957031, 30.142009784255944]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24826431274414, 30.06909396443887]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28705978393555, 30.20537753215796]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4297103881836, 30.186237941597373]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46369934082031, 30.175405362307902]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.8914794921875, 30.22881475114689]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.81577682495117, 30.248835798518176]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.90452575683594, 30.05260248617358]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.8501091003418, 30.11483970951092]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.97284698486328, 29.934556372905835]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76136016845703, 30.3076888673814]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68720245361328, 30.35791580335124]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.83225631713867, 30.261736090037477]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.82470321655273, 30.32799017052639]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.86229705810547, 30.175850560266902]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56806945800781, 30.346805868962072]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44241333007812, 30.470277303920714]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.51519775390625, 30.493355333853508]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.47502899169922, 30.595070038679186]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.534423828125, 30.360581999883827]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.59323120117188, 30.390201515154263]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.62121200561523, 30.387832284227873]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.06461334228516, 31.067785964633504]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.01826477050781, 31.11820655859566]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9574966430664, 31.106302068085583]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.00453186035156, 31.287939892641763]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0479621887207, 31.219114212388128]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.94187545776367, 31.392329799557228]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.69536972045898, 31.522215139938762]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.71717071533203, 31.496603776074124]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.62447357177734, 31.498360207989553]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.72455215454102, 31.56200858125135]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.8007698059082, 31.558059255474245]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.75562286376953, 31.525727008258347]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.63528823852539, 31.517239767147675]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.48316955566406, 28.315866530480424]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.58822631835938, 28.37599583514372]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.57380676269531, 28.455410938077353]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3750228881836, 28.25207418094502]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47492980957031, 28.1068119779141]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50960540771484, 28.05925635109616]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.30120849609375, 28.09712082033614]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.31562805175781, 28.163729842886777]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.63001251220703, 28.953780248774176]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74262237548828, 28.83865896749593]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81849670410156, 28.86572243849393]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.55413818359375, 28.926138747890136]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.63001251220703, 29.03726081753383]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.47036743164062, 28.706397954275737]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.50126647949219, 28.745687492266217]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.556884765625, 28.82422223713729]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.66600799560547, 28.40438677883823]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.57914733886719, 28.47834869222316]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88539123535156, 28.471105728831816]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93379974365234, 28.566130080438388]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95405578613281, 28.3285599713617]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65742492675781, 28.252981448938453]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.71441650390625, 28.284730963794754]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.57090759277344, 28.138907683573063]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.47889709472656, 28.343367069881722]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.67459106445312, 29.08902689670957]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.75132369995117, 29.062922036022734]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92350006103516, 29.3467184482712]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38988494873047, 29.213458977562336]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33872985839844, 29.1161749329972]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24191284179688, 28.91351735083548]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27487182617188, 28.91682310329166]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.30645751953125, 28.910211493028854]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26285552978516, 29.08902689670957]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26302719116211, 29.110325961358413]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.94895935058594, 27.190517627401583]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84081268310547, 27.23936817552693]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9032974243164, 27.39554577800743]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.93694305419922, 27.13614624014274]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.05367279052734, 27.004078764047772]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.08251190185547, 26.95221816782341]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.97591018676758, 27.11292342871368]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82295989990234, 27.21112906431705]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84939575195312, 27.32038225247031]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.86261367797852, 27.380456183005474]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.92286682128906, 27.503703697372952]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.99908447265625, 27.598825255195592]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.13692855834961, 27.593196354047773]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18705368041992, 27.674863123176266]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26103973388672, 27.62605288338433]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.19289016723633, 27.71316617048578]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3068733215332, 27.610994864012284]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3398323059082, 27.602172032354257]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.67216873168945, 26.769062237343466]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66547393798828, 26.805992921039113]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.71474075317383, 26.82299844552903]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6393814086914, 26.770901393821102]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.59955596923828, 26.782395446979756]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62015533447266, 26.83019821401401]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.68864822387695, 26.791436617655517]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.81104278564453, 26.85960528063754]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80331802368164, 26.874918434978934]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77499389648438, 26.865118255050632]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75353622436523, 26.83280227291286]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.76932907104492, 26.882574234526654]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7437515258789, 26.819321791547058]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.72280883789062, 26.79281571596586]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85601806640625, 26.90217071819618]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.83687782287598, 26.91311571151627]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8741283416748, 26.90737546271924]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82297325134277, 26.86703241943313]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8041763305664, 26.922988256581416]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75851440429688, 26.90936544869033]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.04209899902344, 27.36749882765733]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.01875305175781, 27.34554408168226]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.57108688354492, 31.345867137029085]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.59563446044922, 31.382804627493417]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.57057189941406, 31.38661481225174]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.58258819580078, 31.406249466828697]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.16431427001953, 25.834968861245553]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.16671752929688, 25.872507456206534]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30218505859375, 25.29080143502018]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37136459350586, 25.38652681860605]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.21927261352539, 25.285524253944203]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.49822235107422, 25.382804719065366]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.55418395996094, 25.429942831960204]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45221710205078, 25.480781701555582]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75846099853516, 25.458774826854228]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.87175750732422, 25.372258147365425]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19585418701172, 25.50851702325734]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.17302322387695, 25.451489974580607]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18400955200195, 25.54817205032443]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18143463134766, 25.583478767563413]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19053268432617, 25.571556171819193]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.17611312866211, 25.60128303011]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66765975952148, 30.946844132090927]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65581512451172, 30.82825498484088]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65547180175781, 30.875708261780094]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1878662109375, 31.453268014244358]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15868377685547, 31.488699424192607]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.52500915527344, 31.260650424256927]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.5335922241211, 31.28177844472319]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44440078735352, 29.159357041355424]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49898910522461, 29.13252029526126]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43152618408203, 29.096677067911166]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38311767578125, 29.16595270997231]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44440078735352, 29.23922603684671]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.45349884033203, 29.281757450450115]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4323844909668, 29.29762731699351]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47220993041992, 29.33953585615456]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4272346496582, 29.182589900158042]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48405456542969, 29.0178981310237]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35307693481445, 28.954831682002013]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36526489257812, 28.98066354406177]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41092681884766, 28.992826315492]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39418983459473, 29.016547110420984]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.34569549560547, 29.235331432227635]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36166000366211, 29.28565028744157]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.27376937866211, 29.286249172274985]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.303466796875, 29.376490877477423]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.2705078125, 29.244168975461747]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.25814819335938, 29.201172400055757]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.31204986572266, 29.155909136872676]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.31273651123047, 29.0368105637431]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.28372573852539, 29.10957606915251]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.29848861694336, 29.11572502390738]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.32852935791016, 29.019249133955178]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.27685928344727, 28.910361761578155]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33041763305664, 28.9450679628173]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35479354858398, 28.93920928956122]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38037109375, 28.98471796013613]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41024017333984, 28.954831682002013]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.31005477905273, 25.388581678568627]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.40567016601562, 25.40513559494977]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.13135528564453, 25.403584973186707]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1842269897461, 25.417539851468465]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2068862915039, 25.396451856391714]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.22061920166016, 25.39397067345197]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.063720703125, 25.41133788268437]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.86802673339844, 25.425601933964312]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84965896606445, 25.394746048600084]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.73275756835938, 25.372413250679333]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.48444938659668, 25.417578612770285]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.4199047088623, 25.38133135630166]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.39776039123535, 25.380710987655004]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.38316917419434, 25.3776090966219]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.34308624267578, 25.373654070022194]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.26738357543945, 25.48930440911377]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2261848449707, 25.326804303687286]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2368278503418, 25.35116224201865]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1683349609375, 25.32726978794776]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.12713623046875, 25.314235552197577]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05864334106445, 25.3471287821235]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.07134628295898, 25.37039689206708]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.17708969116211, 25.380633441350085]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05023193359375, 25.283972098163172]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.93848037719727, 25.2355348652005]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.87788391113281, 25.227304826281653]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.91582107543945, 25.161133727108375]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.75978088378906, 25.17698078439639]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.8581428527832, 25.255874646155334]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99392700195312, 25.36698451622010]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.78209686279297, 25.443274612305743]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.90019989013672, 25.56660097757674]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.10413360595703, 25.708980912693768]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1027603149414, 25.855516152996614]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.36128234863281, 25.888569713966064]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.3829116821289, 25.868800471134403]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2009506225586, 25.78845392282027]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0636215209961, 25.78258030688864]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.87376403808594, 25.819980992099016]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.61558532714844, 25.84686509678058]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.6190185546875, 25.526642236168314]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.723388671875, 25.542751238220085]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.8329086303711, 25.3241665257384]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.82535552978516, 25.243764346972775]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95513153076172, 25.52044589010547]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.89456176757812, 25.326804303687286]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.86228942871094, 25.329131707091477]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.84598159790039, 25.33207968716579]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.80461120605469, 25.378384576848674]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.70762252807617, 25.366364073894893]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7254753112793, 25.346973646364297]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.66917037963867, 25.394280824108968]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.75980758666992, 25.384820870558883]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81130599975586, 25.398932988321008]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.88889694213867, 25.454899960319814]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.97627258300781, 25.96668757991651]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.13179779052734, 26.18224541753627]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8602294921875, 26.50437435112031]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.9752426147461, 26.499765664198993]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.10639190673828, 26.512055085186898]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.07823944091797, 26.604797747035104]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28569221496582, 28.070314155873646]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.44564819335938, 28.67131091588086]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.05455017089844, 25.507200127649874]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.09077072143555, 25.515101284648914]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.01120567321777, 25.505573354313782]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.96142387390137, 25.50417895962927]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.79353904724121, 25.510608533655347]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7408390045166, 25.519051668147853]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.66625213623047, 25.511460620039202]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.57321166992188, 25.528501077590896]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.48978424072266, 25.503249354178774]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.10114288330078, 25.576511161006223]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.03419494628906, 25.583943260245302]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.95111083984375, 25.591065255593904]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.6410903930664, 25.613976624715345]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.23665618896484, 25.511770468134003]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.94654846191406, 25.407306431933964]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.83977508544922, 25.36853560809667]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.98356819152832, 25.496199612026757]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.00828742980957, 25.493565536270363]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.94219779968262, 25.500305556118665]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.9203109741211, 25.501699995772228]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.89421844482422, 25.503636690657572]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.86271858215332, 25.50781984502887]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.85121726989746, 25.508671951202842]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77645874023438, 25.51200285368036]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.75740432739258, 25.51796726209452]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72813606262207, 25.52036843375496]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6977949142456, 25.51788980414439]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.66779708862305, 25.5227695573748]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.64496612548828, 25.520755715007596]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5632553100586, 25.534542113299686]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.48738098144531, 25.541202389740473]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.42759990692139, 25.54515191382099]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5658597946167, 26.10897704348152]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.04611206054688, 25.49366109213043]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.33443069458008, 25.455373994878947]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.503173828125, 25.4905098081853]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.60565567016602, 25.48637835268272]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55106735229492, 25.420348726586013]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55166816711426, 25.35504949348969]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63887214660645, 25.325727220492514]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.74495887756348, 25.30920122289271]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68324661254883, 25.2893360080866]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.26855564117432, 25.61332327415803]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.24476981163025, 25.665967421133416]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19453728199005, 25.563973851242814]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1955189704895, 25.571358339131184]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3543701171875, 25.36586448751143]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33694648742676, 25.34740479408208]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.27926826477051, 25.35360665394195]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28734707832336, 25.3588130035344]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2844717502594, 25.351318503879064]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29109144210815, 25.349805974136643]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.70083379745483, 25.934276945752366]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.71291446685791, 25.923293013612298]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69403171539307, 25.936299554875944]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.38808822631836, 26.09394246031918]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.43915748596191, 26.162756705675758]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.52412986755371, 26.195877875485262]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.16961669921875, 26.586378027240336]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.26334381103516, 26.57256129215036]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0599250793457, 26.49438862918321]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.17648315429688, 26.55052782861182]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.53407287597656, 26.459851829939335]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.42970275878906, 26.507175318924272]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.44171905517578, 26.367299748045948]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.437255859375, 26.249119020864033]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63947296142578, 26.379910877289817]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77645874023438, 26.294066516598328]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.80598449707031, 26.41804347444806]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.60273742675781, 26.217091016960318]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.61097717285156, 26.11756323601816]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.20825958251953, 26.24942693961032]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17221069335938, 26.064529291992862]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.26628112792969, 26.230334434472745]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.07917022705078, 25.940484252574866]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.86528015136719, 26.048799501426576]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.61662864685059, 25.83922666905623]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.63353729248047, 25.874404024466305]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2562255859375, 25.637221501492114]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.28583717346191, 25.70381358658529]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.94380187988281, 25.835798036621767]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99452781677246, 25.82764384292273]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.94354438781738, 25.738223834472613]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05254936218262, 25.62871962598981]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99736022949219, 25.668663622803788]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.71017074584961, 25.770059260080014]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.60871887207031, 25.748453484077334]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.59756088256836, 25.60855879189151]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.69839572906494, 25.643583966136617]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.67925548553467, 25.643583966136617]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72157001495361, 25.659290397080852]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.74354267120361, 25.673447623923632]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77057933807373, 25.678785158249656]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.79933261871338, 25.700667193055164]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.83761310577393, 25.70136324766936]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.85044479370117, 25.75954674387229]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.97130513191223, 25.69158910818558]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.96447086334229, 25.69625875266029]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99833106994629, 25.687557404496268]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68667984008789, 25.431958195734747]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.87857055664062, 26.059903108841592]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.76939392089844, 26.040779575207218]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.68115997314453, 26.01918473998583]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.55241394042969, 25.929369354106715]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.6241683959961, 25.9812299049927]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.36736297607422, 25.906191928891293]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.34281539916992, 25.920860082868316]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.28771209716797, 25.933519548424403]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.36547470092773, 25.881165647436095]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.36109733581543, 25.858803260932575]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.39362716674805, 25.82655709146308]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.4328088760376, 25.78455560158161]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.4663257598877, 25.76619447263339]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.4403190612793, 25.751081945916553]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.39723205566406, 25.723828157625924]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.54949569702148, 25.85072725365129]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.78364181518555, 25.995235525157007]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.89453506469727, 26.03241460900667]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.07701110839844, 26.02269673210726]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0760669708252, 26.050691291441314]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.18146705627441, 26.05246482626259]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.86364936828613, 26.35842884168742]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82253646850586, 26.36396602939575]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.80841732025146, 26.332811410224547]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.78687381744385, 26.306885033703974]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.76091003417969, 26.31809646743734]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.72782230377197, 26.28512554494678]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.65417957305908, 26.210283287522117]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.62465381622314, 26.24916456668184]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.45938682556152, 26.212674925549106]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.59227418899536, 25.661432461888083]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78917503356934, 29.18807383739629]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78514099121094, 29.193244030066207]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81973075866699, 29.230326880363137]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81629753112793, 29.240512954310496]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84015846252441, 29.256089694907782]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8570671081543, 29.259833750133122]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8665943145752, 29.245830281380552]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92315673828125, 29.256089694907782]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90813636779785, 29.24305931442317]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93405723571777, 29.240063590067]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88693618774414, 29.241186996976463]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89097023010254, 29.257287807492016]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86702346801758, 29.240512954310496]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9548282623291, 29.230701386321584]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96538543701172, 29.23826611336408]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61553955078125, 28.885018330943232]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60197830200195, 28.86620096334971]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55597305297852, 28.80695314399697]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.72177648544312, 28.968765601794335]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74424266815186, 28.980498043653967]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80059051513672, 29.00034723055739]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.76651573181152, 28.984956948397958]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81964492797852, 29.01663591095595]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88624954223633, 29.11138266663827]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90882301330566, 29.06058862130513]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93562364578247, 29.011333939950504]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93005537986755, 29.000710547371185]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91371536254883, 29.025256813170248]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97574949264526, 29.139495957872523]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97322821617126, 29.148171384642048]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90288996696472, 29.164286810603844]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55141067504883, 26.586463739466378]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.59235191345215, 26.637571119250456]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62677001953125, 26.637110794385663]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6060848236084, 26.231075472926648]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.65060424804688, 25.43603467384258]),
            {
              "class": 1,
              "system:index": "823"
            })]),
    NonCropClass = /* color: #0020ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-98.5308837890625, 25.806073024931624]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.30635070800781, 25.577130520235198]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.70193099975586, 25.38637173341596]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.72064208984375, 25.40451534863621]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.64974594116211, 25.38078853391008]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.75325775146484, 25.285213824377006]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.70914077758789, 25.183660789349634]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.7175521850586, 25.228081268845216]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.74913787841797, 25.156006297078587]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.58193969726562, 25.36419250067171]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.44014739990234, 25.491318778964136]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.48271942138672, 25.552973136326194]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.44049072265625, 25.694441190241143]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.47550964355469, 25.838522407538164]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.55413055419922, 25.88270106537761]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.08662414550781, 25.979959378804473]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.10138702392578, 25.985514570825888]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.21399688720703, 26.010201136454388]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.23150634765625, 26.03056364689141]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.28712463378906, 26.078987535225927]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.33209991455078, 26.060792369999714]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.28369140625, 26.021308398277927]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2510757446289, 26.000944282244564]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.29639434814453, 25.984434415158074]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.25965881347656, 25.940448223714423]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.32008361816406, 26.07297419169171]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.40951919555664, 26.120764030429992]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.46582412719727, 26.100879663124218]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.7887191772461, 26.24785141280444]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.02698516845703, 26.398020305667046]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.15023803710938, 26.426308999847]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2892837524414, 26.84429005331256]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.40369606018066, 26.921457686014467]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.59724426269531, 27.11659050894981]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4973373413086, 27.479948515678796]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5635986328125, 27.510098447384426]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62333679199219, 27.471115154147622]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.70470428466797, 27.47690260894308]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72221374511719, 27.55728629310745]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.942138671875, 26.41893000931786]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0794677734375, 26.34634480085147]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.32940673828125, 26.78729922215609]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75262451171875, 26.68918349715621]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57522583007812, 26.67077738087678]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.13690185546875, 26.54308002096242]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.83065795898438, 26.394329964650208]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23602294921875, 25.986440410641347]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.55050659179688, 25.817199529308766]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3101806640625, 25.44699484579729]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72972106933594, 25.350851980648727]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.00437927246094, 25.45195497832395]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.02703857421875, 25.58332393626881]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.84439086914062, 25.551114674237358]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50906372070312, 25.930259603718916]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24264526367188, 26.058633434006655]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47026824951172, 25.811018267007846]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51593017578125, 25.85273552537735]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27079772949219, 25.77145055275306]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.30058097839355, 25.96730490609493]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24788093566895, 25.979496434287523]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32418441772461, 25.97602429231225]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46031188964844, 25.564123303568635]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51318359375, 25.562884447344448]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39027404785156, 25.506038148944178]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41104507446289, 25.562419872957033]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39216232299805, 25.577595037553998]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.33551406860352, 25.5100662937171]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39439392089844, 25.457069900948454]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45190048217773, 25.45590743761971]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42246055603027, 25.398157640072952]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.60107421875, 26.156670630251476]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40606689453125, 26.32419108521464]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1121826171875, 27.84150476761022]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.040771484375, 28.197926557226154]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.073974609375, 28.8037667754622]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9476318359375, 27.967720756531094]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.26873779296875, 28.721904784758912]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.24627685546875, 28.226970038918342]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.65414428710938, 28.254795961764422]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77327728271484, 27.945127998868475]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.72589874267578, 27.96029144526908]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74392318725586, 27.99955486753647]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.72418212890625, 28.081825181903834]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6910514831543, 28.142237819593163]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77224731445312, 28.068193569168695]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82795143127441, 28.041606950057893]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.02132797241211, 27.93860706226707]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.00038528442383, 28.04819740864673]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.17373657226562, 27.053010781555354]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.227294921875, 27.314434076625908]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.44839477539062, 26.98939500298906]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.52117919921875, 26.78362141063608]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58871459960938, 26.915947460064547]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.05563354492188, 25.985205955933576]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.61868286132812, 25.996315581557397]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21984100341797, 26.999413818589808]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.22348880767822, 26.96514730710889]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39356231689453, 27.021054472392436]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.37038803100586, 26.986641584375732]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38789749145508, 27.105970925895868]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41647911071777, 27.118576793896892]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.4603385925293, 27.08618066982421]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47561645507812, 26.73089302213736]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41793823242188, 26.345114150117762]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50445556640625, 27.453446306882164]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15196228027344, 27.679423714445804]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13977432250977, 27.74370777144197]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11351013183594, 27.777430336572525]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2169361114502, 28.269159764869364]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20552062988281, 28.30846132346782]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18826866149902, 28.363005954438854]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16243362426758, 28.41865488632704]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19256019592285, 28.457599293914356]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18268966674805, 28.53190101727071]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16569519042969, 28.521720626081084]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11419677734375, 28.68757589776321]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08810424804688, 28.600800158695797]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.01600646972656, 28.608637026615575]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.05789184570312, 28.63636278756978]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.10252380371094, 28.66588869403797]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12724304199219, 28.736355682639356]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.10389709472656, 28.73214104380378]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.30096435546875, 29.074324972539294]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33203506469727, 29.08977693862319]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3037109375, 29.032758191236184]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2491226196289, 29.072074492886163]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21109962463379, 29.11302552804846]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28654479980469, 29.11602496351922]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28019332885742, 29.161755515328824]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17822647094727, 29.162055320636377]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.36799812316895, 29.220275894248427]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3575267791748, 29.23930093163718]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.39409065246582, 29.22514484272211]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66959381103516, 26.926661541225684]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.70255279541016, 26.934619914282397]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.63079833984375, 26.872162220220087]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7265853881836, 26.840920425187473]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7657241821289, 26.786379780448982]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80795288085938, 26.816717422806992]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.56900024414062, 26.812427743841532]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50145149230957, 26.820240966225537]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47544479370117, 26.835253097187362]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.49818992614746, 26.848808260889733]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41888236999512, 26.806682383807175]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.4013729095459, 26.772587261095442]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.40729522705078, 26.784196076541868]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39519309997559, 26.78902315527971]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21675109863281, 27.488781168937994]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.611572265625, 27.308333052145453]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89241027832031, 27.296740181509385]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.48042297363281, 28.19369038968348]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45913696289062, 28.169177839251137]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.48179626464844, 28.268101445445303]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44574737548828, 28.186427997567996]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.37433624267578, 28.37388131177824]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62324523925781, 28.30558977794923]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38017272949219, 28.49705738203991]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7101058959961, 28.483177058570757]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47183990478516, 28.628527988682222]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.59715270996094, 28.847680907010687]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.65071105957031, 28.678238902132758]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75233459472656, 28.859107573773]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.73722839355469, 29.04836645584674]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3573531177978, 30.09085553775827]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.51107788085938, 30.179560465036424]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71913146972656, 30.030460958479292]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.82281494140625, 30.075036166043734]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.62918090820312, 29.800730393033703]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42662048339844, 29.791792350311347]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72119140625, 29.733377498237072]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.89903259277344, 29.886494954894626]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.04254150390625, 29.946010314585475]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.00065612792969, 30.155814661117546]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.215576171875, 29.897210344510718]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33573913574219, 30.040566430584597]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.26158142089844, 30.120779162198808]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47169494628906, 30.189650699263083]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46620178222656, 30.32369316536266]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.31582641601562, 30.34088005484784]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.32131958007812, 30.539790669306914]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.64129638671875, 30.435057976358188]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.55889892578125, 30.516427891042294]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.81089782714844, 30.364877385878344]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.80506134033203, 30.480929382240536]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85552978515625, 30.53032794236421]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.89192199707031, 30.399825924947272]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.91011810302734, 30.416407298270315]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.97431945800781, 30.38946113666151]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.00178527832031, 30.503709081429676]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.96161651611328, 30.567286485662546]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.04367065429688, 30.559008994915494]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.97191619873047, 30.646478150932964]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.87956237792969, 30.653862130404374]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.35197448730469, 30.8238326767625]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.08486938476562, 30.926377738412445]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17070007324219, 30.96583420242113]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.24348449707031, 31.058228026318368]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.29429626464844, 30.94993579614793]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.39729309082031, 31.019986671412497]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.53874206542969, 30.816756560198463]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.37120056152344, 30.483000484352313]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.57925415039062, 30.525596233215623]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.45977783203125, 30.671581380089684]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.33961486816406, 30.695792432740344]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17550659179688, 30.745966732317395]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.10890197753906, 30.86451022625836]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.25309753417969, 30.91459653266084]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.45909118652344, 30.951113546618203]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.71795654296875, 30.977020383297376]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.68431091308594, 31.092338109442462]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.62113952636719, 31.050580984217515]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.61753463745117, 30.888083515609047]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6880874633789, 30.882632707935457]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6192512512207, 30.961859848947224]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.71023178100586, 30.911209167476287]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.57049942016602, 30.9544994983483]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.55436325073242, 30.920487316910396]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.21395874023438, 31.09469007781321]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.24485778808594, 31.219848226201176]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1329345703125, 31.15934638141426]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15010070800781, 31.13525236469772]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.99697875976562, 31.093514100906102]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.984619140625, 31.14906309893411]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.01002502441406, 31.186077693237877]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.89810180664062, 31.079401242700747]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.09104919433594, 31.010571059441737]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.14083099365234, 31.05881623486984]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9355239868164, 31.042050866130655]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.99491882324219, 31.087633998028803]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0659008026123, 31.058154499993712]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.08452606201172, 31.053301636931902]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0132007598877, 31.10211309605289]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.89260864257812, 31.42514760478919]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9736328125, 31.426319456957188]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.11851501464844, 31.52587333323966]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17962646484375, 31.586139716114857]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.12469482421875, 31.383537367335794]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.79098510742188, 31.4913342823795]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.66738891601562, 31.611287945395063]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.79029846191406, 31.61187270713691]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.65365600585938, 31.474938403422154]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.55889892578125, 31.484307828945685]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5558090209961, 31.431006719178512]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.56319046020508, 31.405370391017154]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52782821655273, 31.379580504280128]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.61125564575195, 31.376649387151197]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.02262878417969, 31.25566117344357]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.97250366210938, 31.647536225797776]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39067077636719, 31.55162295891314]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.84822082519531, 29.186936109035283]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.98692321777344, 29.34866364652363]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75552368164062, 29.29059098231747]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.12356567382812, 29.35285317817624]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.94091796875, 29.0231519320435]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.07618713378906, 28.976909313412413]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.97250366210938, 29.31663796627492]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.03258514404297, 29.38456832654707]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7764663696289, 29.279212053761192]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.95980072021484, 29.16595270997231]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.06863403320312, 29.143540701198845]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.0782470703125, 29.166327451150078]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.10365295410156, 29.116249917654223]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1178150177002, 29.13431962592044]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.12433815002441, 29.09975197657232]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.12433815002441, 29.0537687665771]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.10116386413574, 29.02420266017471]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.3199462890625, 29.099376992628493]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.28836059570312, 29.054969241647125]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.23068237304688, 29.275019497467262]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.50534057617188, 29.25884659793963]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49366760253906, 29.299573451627978]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39255905151367, 29.31918243013189]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.51121997833252, 29.33250241094128]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4997615814209, 29.351693592907356]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49107122421265, 29.349112533154784]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47830390930176, 29.35756619536043]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44946479797363, 29.355546357552793]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44062423706055, 29.37895905493671]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40410327911377, 29.315272161709007]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.62928009033203, 30.027488564694334]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.58705139160156, 30.068499724652728]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.56027221679688, 30.1088998996788]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46620178222656, 29.995083693058476]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.61966705322266, 29.92905206172435]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5503158569336, 29.98913669582169]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52508163452148, 29.922059659893744]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5532341003418, 29.96266823880555]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5674819946289, 30.034324937141722]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.5806999206543, 30.091820957389967]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33539581298828, 30.100138028366143]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42936706542969, 31.656303848751097]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19247436523438, 31.62882919962265]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29753112792969, 31.776045078330696]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43280029296875, 31.78246584395653]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57356262207031, 31.864145719767546]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5509033203125, 31.68026446423418]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37100219726562, 31.646367146916386]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24053955078125, 31.452682258445456]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08673095703125, 31.473767159269823]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.06063842773438, 31.31023510034103]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92056274414062, 31.375330354607893]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.31675720214844, 31.52528803193897]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8917236328125, 31.20927787746014]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.69465637207031, 31.10115769058989]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3092041015625, 31.668577131274457]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.64683532714844, 28.80858018665655]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73678588867188, 28.920429258537645]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.48066711425781, 28.91321682266083]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.56375122070312, 29.023752349427625]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.52873229980469, 28.68396167562476]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87480163574219, 28.810385158524603]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.64614868164062, 28.945668833650508]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.75767517089844, 28.529035525107243]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74050903320312, 28.696610907306912]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65673828125, 28.717689563244953]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.513916015625, 28.294707428421205]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84144592285156, 28.408010607267308]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86341857910156, 28.320702305713006]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85243225097656, 28.342460572134232]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9427261352539, 28.414050045833854]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88024139404297, 28.536274512989916]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80780029296875, 28.54049702626839]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.66841125488281, 28.504600270568645]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.68145751953125, 28.583315808777837]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.64952850341797, 28.604718665723738]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5303955078125, 28.649620345339766]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54275512695312, 28.69209350000569]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69278717041016, 29.003636466897365]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.70377349853516, 29.08977693862319]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80917358398438, 29.03500952893755]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85020065307617, 29.013094421933374]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90152740478516, 29.021650873310076]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90530395507812, 29.0360601363935]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86444854736328, 29.045064904450896]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95113754272461, 29.06067130739469]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6842041015625, 28.308612455295236]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78102111816406, 28.234834622436615]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.63579559326172, 28.15010863862551]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54481506347656, 28.178257216752364]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.57605743408203, 28.23211233219266]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.66394805908203, 28.21759227808566]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.72883605957031, 28.22031493867249]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.72608947753906, 28.182796616504305]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55305480957031, 28.31344856039383]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.41229248046875, 27.365669431751215]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42533874511719, 27.47233359094483]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.546875, 27.460757897482292]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62171936035156, 27.252798320062606]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.64643859863281, 27.459539332717885]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39787292480469, 27.053622296837194]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27050018310547, 27.3116886571249]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33332824707031, 27.32144984001231]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21968841552734, 27.278128042028726]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.40576934814453, 27.405299571826827]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1345443725586, 27.24272586363186]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15377044677734, 27.229905054976033]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18741607666016, 27.225325836903373]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0741195678711, 27.264395776495363]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.03429412841797, 27.35652199874749]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.98193740844727, 27.449485659555798]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.9620246887207, 27.480405394425517]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.14131164550781, 25.75691846936774]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.00501251220703, 25.77887050485261]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18663024902344, 25.716095448778436]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.23126220703125, 25.70155659545103]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.24842834472656, 25.830179130009768]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.20465469360352, 25.87590542367806]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30061340332031, 25.86045932951226]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30782318115234, 25.798345670993093]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.58934783935547, 25.785980856830523]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.71431732177734, 25.731251085123894]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7719955444336, 25.8156542439752]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7994613647461, 25.744858581812203]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.71500396728516, 25.86262190423857]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62471008300781, 25.926863201259955]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.51759338378906, 25.891349498323134]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.51416015625, 25.561335859046192]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.44206237792969, 25.631931114565067]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.36344146728516, 25.684850188749582]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.23709869384766, 25.556689974039806]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3552017211914, 25.98242838544322]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.41219329833984, 26.03920122021212]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4976806640625, 26.155746135319013]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5687484741211, 26.20381015337393]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63981628417969, 26.22937459341778]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7060775756836, 26.108278892580856]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.60926055908203, 26.08638814939485]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.82246398925781, 26.03519099741808]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.91035461425781, 26.145268014128934]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.95052337646484, 26.08022100341537]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99343872070312, 25.98242838544322]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.19943237304688, 25.868491550461812]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25436401367188, 25.76557609496379]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30586242675781, 25.675877262460787]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36079406738281, 25.760938159763608]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.40542602539062, 25.674639564431036]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29899597167969, 25.720116520116953]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.23445129394531, 25.626359320292988]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4208755493164, 25.70743421812568]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1568603515625, 25.76062895764137]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.05935668945312, 25.66349970382983]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.20286560058594, 25.60406954438256]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33023834228516, 25.78659912816293]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42430877685547, 25.87528761868051]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.40817260742188, 25.90710037306105]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.46104431152344, 25.971934749175432]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.57090759277344, 26.061409201547864]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.58704376220703, 26.000635707872572]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6618881225586, 26.00372141511571]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.72162628173828, 26.079912637586474]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62309265136719, 25.342164339139703]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6951904296875, 25.383114898409264]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9808349609375, 25.41660957648614]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94650268554688, 25.412268198336445]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01860046386719, 25.449474937604315]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94856262207031, 25.542751238220085]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00452423095703, 25.401414069236186]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90839385986328, 25.3418540546886]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87234497070312, 25.275745340949022]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.82462310791016, 25.34092319656043]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.70995330810547, 25.430562947481008]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54927825927734, 25.371947940140224]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.53211212158203, 25.28102294746017]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.73020935058594, 25.51827709339523]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8548355102539, 25.544300066690987]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00006103515625, 25.575582116154415]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05842590332031, 25.506502941775654]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01036071777344, 25.298406380236266]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09550476074219, 25.26736278822433]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.23626708984375, 25.272330296765784]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29068374633789, 25.255098381140076]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.23369216918945, 25.32090801481427]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31145477294922, 25.320752845440186]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.41633987426758, 25.314390729921712]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42492294311523, 25.33083844114864]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97269439697266, 25.80143667303064]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7169189453125, 25.77577891453427]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01080322265625, 25.615834110862025]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82060241699219, 25.55142441992021]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69734954833984, 25.598186826982325]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90746307373047, 25.49472763563429]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09903717041016, 25.39024880340563]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18658447265625, 25.596019437097468]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14555740356445, 25.641990640206384]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16169357299805, 25.562884447344448]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23052978515625, 25.57883374159162]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09028244018555, 25.68856292610355]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06418991088867, 25.767740402713383]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06418991088867, 25.767740402713383]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18160629272461, 25.811018267007846]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.69534301757812, 30.376429556899957]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1773681640625, 30.38946113666151]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.1995849609375, 30.334953881988564]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16799926757812, 30.711142637210045]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.49072265625, 29.80251790576445]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09521484375, 29.611670115197377]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.55070495605469, 28.422202741595626]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72923278808594, 28.469294910391532]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0625, 28.542306623009658]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99589538574219, 28.300148742301]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.68621826171875, 28.471105728831816]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.38615417480469, 28.43427965542356]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.25157165527344, 28.147081468991328]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51936340332031, 27.914339655413645]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82354736328125, 27.77226629694402]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82356643676758, 25.84825548778367]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.79077911376953, 25.848718947819027]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.78172397613525, 25.858798754207044]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.91643524169922, 25.89382036279748]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90424728393555, 25.895982326781823]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.93094062805176, 25.887951975219778]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97256851196289, 25.88200607451804]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.99574279785156, 25.904552579991957]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.03805732727051, 25.90354888882639]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.08011436462402, 25.91590141660082]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.0966796875, 25.91327661269818]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1117000579834, 25.93535402385921]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1834545135498, 25.925396542665453]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17736053466797, 25.87868550617974]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.19306755065918, 25.918371766900012]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.26894187927246, 25.937515226460643]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3039608001709, 25.90254518912189]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.72039794921875, 25.705887503456363]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.67164611816406, 25.897719590570002]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.6638355255127, 25.86934108036797]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.69353294372559, 25.82917480694208]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.65233421325684, 25.80885474899831]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12054061889648, 26.27910134340398]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17195320129395, 26.31211244791675]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12131309509277, 26.288028349929192]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18851852416992, 26.318728927530174]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.195556640625, 26.365648920513472]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.23031806945801, 26.30986198937609]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.23364400863647, 26.317440282354422]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.25237655639648, 26.38479603772214]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.33357238769531, 26.326191247531447]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.39245223999023, 26.293261103328245]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4485855102539, 26.30603418600096]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5357894897461, 26.311573880620458]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.58127975463867, 26.382643106579554]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6408462524414, 26.406630642556795]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6847915649414, 26.2887978872947]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7642707824707, 26.300186443296948]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7500228881836, 26.22444694563432]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.65056657791138, 26.145171703504744]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63756322860718, 26.158153658903096]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63082551956177, 26.168341748611564]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.64445114135742, 26.04552475445077]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.63088989257812, 26.008349823983014]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7368049621582, 26.005572800551246]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.76203918457031, 26.05585760070532]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7584342956543, 26.10026303953582]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.75139617919922, 26.165144825733503]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6489143371582, 26.19410651633074]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62831497192383, 26.293568904999056]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55797672271729, 26.263631369827444]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.56407070159912, 26.251969803432967]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.53763484954834, 26.232184799051144]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47865295410156, 27.800817328100322]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65168762207031, 27.8457548142321]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59950256347656, 27.992885641652073]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.60396575927734, 27.970752981490662]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56156539916992, 27.98939929115485]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52955055236816, 27.96120118432974]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.50637626647949, 27.96567395651208]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52448654174805, 27.97939435508184]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59255027770996, 27.942246703329612]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62276268005371, 27.983411600041507]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58336639404297, 28.028727877104785]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.51435852050781, 27.878535289406692]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4422607421875, 27.81903746968407]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56482696533203, 27.823592027507832]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.39153480529785, 27.994174046995933]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.39462471008301, 28.01918121667962]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31711959838867, 27.9605188807531]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.32956504821777, 27.984472734101296]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33548736572266, 28.005465881800816]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.26066970825195, 26.716480428688357]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23869705200195, 26.72506687437031]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.2440185546875, 26.704136278325265]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.14445495605469, 26.48348015691656]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45481872558594, 26.497614880380166]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46606254577637, 26.510749396626686]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44366073608398, 26.511671060680527]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42391967773438, 26.508061167562076]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44160079956055, 26.492160926696922]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47447395324707, 26.495156792444064]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4761905670166, 26.50982772517734]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42177391052246, 26.47602799997364]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44271659851074, 26.53486383710344]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44314575195312, 26.54784053111244]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41791152954102, 26.54238896274322]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.48674774169922, 26.525341542239083]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41224670410156, 26.498843904633983]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46198558807373, 26.463965238375945]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45636367797852, 26.466308740072318]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45602035522461, 26.486053727808716]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47919464111328, 26.522192867724726]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4524154663086, 26.522807250021174]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37791442871094, 26.438606267887298]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37791442871094, 26.39863535103358]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36366653442383, 26.54576743001314]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36418151855469, 26.536668376506288]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36113452911377, 26.532867292354265]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52886915206909, 26.592499075524824]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52736711502075, 26.595972001254918]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52150917053223, 26.593477645372314]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53399753570557, 26.650603933921147]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53232383728027, 26.654823010507517]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53146553039551, 26.661074628150764]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5306715965271, 26.663164816551348]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5296630859375, 26.654209336331647]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50460052490234, 26.601421020363738]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44898223876953, 26.618917523991335]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44966888427734, 26.62904585508662]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45069885253906, 26.646231271834406]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46099853515625, 26.641935160045552]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45619201660156, 26.656050348961326]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45001220703125, 26.655436681384085]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4197998046875, 26.621986810009]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44039916992188, 26.615541214194355]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39576721191406, 26.595281261992]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.38134765625, 26.617689786510482]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41121673583984, 26.612778704747473]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42426300048828, 26.60418380414468]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44417572021484, 26.605411686630532]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4084701538086, 26.636718235607574]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4146499633789, 26.657891331896508]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4249496459961, 26.655129846358218]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37860107421875, 26.590369218111917]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40263366699219, 26.62290757974432]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40709686279297, 26.607560449265762]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.22479248046875, 26.71924042829964]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24813842773438, 26.72905321822983]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.25088500976562, 26.700225740450705]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.2879638671875, 26.73886516191515]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27560424804688, 26.72046707331258]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.30238342285156, 26.69715855798685]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23680877685547, 26.63119417356581]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23131561279297, 26.614006494963323]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19286346435547, 26.645310690056988]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.17707061767578, 26.650834069392033]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.13758850097656, 26.638559530264214]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15853118896484, 26.63088727339882]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.11939239501953, 26.607867412061356]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.20487976074219, 26.518813706325034]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16436767578125, 26.644696964748942]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7496337890625, 26.57256129215036]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.76473999023438, 26.559049984075532]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.755126953125, 26.51604886393623]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75375366210938, 26.485323915048287]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75100708007812, 26.464426258873313]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.74551391601562, 26.44598399885638]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.81417846679688, 26.450902223672625]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79220581054688, 26.4865530707128]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.821044921875, 26.503759870210892]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79083251953125, 26.425079200885378]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.85537719726562, 26.82529629369062]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.8485107421875, 26.84735326457719]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7056884765625, 26.86450571560634]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.74002075195312, 26.86695585347984]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7166748046875, 26.85838013872655]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.74002075195312, 26.857154983548906]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6727294921875, 26.144343428856377]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7496337890625, 26.1763914432775]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.77023315429688, 26.219519089083956]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79495239257812, 26.278639583003976]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.49763488769531, 26.099646412696337]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.50415802001953, 26.082687900802007]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.50072479248047, 26.045987438687895]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.49557495117188, 26.01914873523295]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15460968017578, 26.92344742370268]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.13323783874512, 26.94609734777807]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14216423034668, 26.8941335091314]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15804290771484, 26.938522372770258]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.20645141601562, 26.996966556695504]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.12053489685059, 26.996890078903167]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15761375427246, 26.951376574780046]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.10757446289062, 26.969813673352228]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09761810302734, 26.992530758777605]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09710311889648, 27.016237302231144]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09984970092773, 27.06332965543729]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.19083023071289, 27.078920819034785]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26309967041016, 26.934313833395056]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.28979301452637, 26.939670128974107]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.27288436889648, 26.96491780869832]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.32961845397949, 26.941965606328235]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.37879943847656, 27.04681900161248]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.31511306762695, 27.039403704492837]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.24541854858398, 26.90079295154757]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18791198730469, 26.965070807690665]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21263122558594, 26.93454339413846]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18490791320801, 26.89926208000165]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2314281463623, 26.950152428223845]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50857543945312, 26.715560413947152]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44334411621094, 26.736412255341016]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.48042297363281, 26.950841012297982]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.57243347167969, 26.902476886279807]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.98947143554688, 27.24058916474072]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.03341674804688, 27.34798371283087]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.31974792480469, 27.249746156836583]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.68971824645996, 31.040984547620297]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.68205785751343, 31.05286045528934]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.69332313537598, 31.04565419892387]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66675853729248, 31.063043876822437]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66714477539062, 31.066462615075235]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67598533630371, 31.057823630829606]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66047143936157, 31.06028674033745]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65451693534851, 31.056638006875716]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66137266159058, 31.07796778830511]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66978406906128, 31.083995502142457]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66291493177414, 31.110465594559056]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66830348968506, 31.109223215533653]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.665771484375, 31.119106683124166]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66579294204712, 31.096013034433664]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64744663238525, 31.061260937691916]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64585876464844, 31.047124907803415]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66826057434082, 31.024694128525134]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64708185195923, 31.020464783137403]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65592241287231, 31.025208992535052]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64272594451904, 31.026201936695866]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66459131240845, 31.035340214521796]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76310348510742, 30.988352413877344]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79426002502441, 30.988205253274575]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.84494304656982, 31.000713094044524]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.85927677154541, 30.9944593786958]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76954078674316, 30.971795422472013]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7916100025177, 30.93564061268594]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.78688395023346, 30.937651361525646]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.81425857543945, 30.89824770669808]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7807846069336, 30.869520035451455]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.8031005859375, 30.853016145357284]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.77374649047852, 30.83076086900277]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.74387741088867, 30.850068723212235]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.73645305633545, 30.88281686190564]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.78614902496338, 30.776095646560357]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7773084640503, 30.785055058349702]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.60517501831055, 31.375916593579966]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64688873291016, 31.35598241670874]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.56277465820312, 31.325779951839344]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.5116195678711, 31.29791471653061]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.49479675292969, 31.24127891628173]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.58028411865234, 31.221463036528213]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.52981567382812, 31.158758795329728]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.57032775878906, 31.17285985566267]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.54045867919922, 31.19195169537777]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.60671997070312, 31.207516037787602]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85930633544922, 30.745966732317395]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.87132263183594, 30.76514412118947]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.83939361572266, 30.73947505867949]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.8860855102539, 30.7427209501807]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.7923583984375, 30.727670895047673]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.79991149902344, 30.754523270037556]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.75012969970703, 30.761308948998106]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0860710144043, 30.646182780025175]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.2266616821289, 30.58383934832704]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.270263671875, 30.59034148556389]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.30493927001953, 30.61427741282775]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.30940246582031, 30.630526831020617]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.2786750793457, 30.704796214182146]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.25275421142578, 30.673943701226555]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.32347869873047, 30.6866401875082]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1270980834961, 30.775468825203117]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0611801147461, 30.853016145357284]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.09722900390625, 30.78343283989938]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.01826477050781, 30.59514392049091]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.07182312011719, 30.184902482495566]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.05843353271484, 30.120185233002733]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.06873321533203, 30.155517802372515]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.10237884521484, 30.261736090037477]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9417896270752, 30.06552847220081]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.83380126953125, 31.33721697711049]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71844482421875, 31.27150847022119]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.776123046875, 31.191658003929035]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.622314453125, 31.299674869993048]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.9354248046875, 31.353636941500987]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68548583984375, 31.109388560814963]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7926025390625, 31.287939892641763]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.12816047668457, 28.535068049542353]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.08524513244629, 28.556480721899916]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10198211669922, 28.576984551298253]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13150787353516, 28.49615219918497]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.20051574707031, 28.528130616659165]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.01237487792969, 28.475934426272353]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.01958465576172, 28.62430900856464]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.18987274169922, 28.597785823086834]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96465301513672, 28.54200502571147]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61987400054932, 27.014635994697315]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.58107852935791, 27.025417147791742]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.57923316955566, 26.983701344546596]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6063985824585, 27.088859691912738]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62948703765869, 27.090005913730728]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62395095825195, 27.061805453154882]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6327486038208, 27.06501561948468]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.63888549804688, 27.038796572515867]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61412334442139, 27.03279514201124]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56554317474365, 27.063274560889436]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55305480957031, 27.141663500130875]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.48404693603516, 27.181220882146338]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3681755065918, 27.180304653490754]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27290344238281, 27.18580191256437]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27230262756348, 27.24242952877953]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34455060958862, 27.241564357281028]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.14219665527344, 29.125242407760734]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.16485595703125, 28.91088241693859]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99868774414062, 28.96496467449493]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30424499511719, 29.16302441188261]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3818359375, 29.22596352899393]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19438171386719, 29.22596352899393]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.13739013671875, 28.797819625797587]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.12640380859375, 28.647280032681277]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88951110839844, 28.717157355925593]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25, 29.097046788348944]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.08657836914062, 29.164823208366386]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78668594360352, 28.761055498242303]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8270263671875, 28.855817455582994]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65982818603516, 28.7514240659888]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.79973220825195, 28.69708020945477]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93362808227539, 28.674641933676636]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0053825378418, 28.63080567010402]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09636306762695, 28.638790959157586]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.15798950195312, 28.67268400373598]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07267379760742, 28.733513333700532]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.15558624267578, 28.594487543394926]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01808547973633, 28.547752823864396]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99714279174805, 28.499639629818734]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1785888671875, 28.318959456748388]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.20811462402344, 28.04262711862529]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18888854980469, 28.201895300260507]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28663635253906, 27.872197502251375]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3546142578125, 27.97351729552402]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60798645019531, 27.59323186243294]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3956413269043, 27.552881685734647]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.82501220703125, 25.671581373843285]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.80303955078125, 25.67189080749482]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.16453695297241, 25.68852650895114]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.64147663116455, 25.78513523801589]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.73440980911255, 26.090013445048257]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.76101732254028, 26.07846941109431]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.72583746910095, 26.054914156129076]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.70876789093018, 26.047531956043052]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.76678943634033, 25.989106661235756]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.79515647888184, 25.99936508069667]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.71245861053467, 25.927135625279426]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9343523979187, 26.052563462912115]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85425090789795, 26.02508996316318]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84191274642944, 26.030546615961185]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8272088766098, 26.091606441483297]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.86584341526031, 26.13251154226888]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.00629997253418, 26.28857776837857]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17914152145386, 26.196303704268757]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.21939611434937, 26.361684132207344]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18813228607178, 26.438764459819183]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17957067489624, 26.44585175525117]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.29280281066895, 26.355661908701784]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.25438284873962, 26.293483458367774]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5751724243164, 26.056324743323795]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5470199584961, 26.045276382856194]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5387372970581, 26.023643811226947]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.51908206939697, 26.081262856643153]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.48333358764648, 26.043601383464843]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.48756074905396, 26.01499432554332]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.45254182815552, 25.95910803007077]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.41946482658386, 25.809435393776514]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.35597157478333, 25.756571732801532]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.31012725830078, 25.743256625456002]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.32544803619385, 25.751548041489208]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.35696935653687, 25.714145116419758]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.45816373825073, 25.83197755581305]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.46464395523071, 25.860171949300803]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.75087857246399, 25.514473052273402]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.75933289527893, 25.52404868504697]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.75596404075623, 25.56027232248977]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85450839996338, 25.530439599698312]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84366154670715, 25.53489175505848]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87470006942749, 25.542192042321687]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.89062166213989, 25.548425984177705]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.89148869786072, 25.539286791756282]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90318512916565, 25.519178665971534]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8475239276886, 25.49101000827152]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85826349258423, 25.514890529957594]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.94021034240723, 25.943964509400068]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.95085334777832, 25.934007755954344]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90681147575378, 25.928460664548435]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90482664108276, 25.935568538482205]),
            {
              "class": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.92027616500854, 25.920940812602275]),
            {
              "class": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.03037548065186, 25.937236556076606]),
            {
              "class": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.99150490760803, 25.9590586724958]),
            {
              "class": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9767453936081, 25.980336082642584]),
            {
              "class": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97062659263611, 26.00429145882899]),
            {
              "class": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96551966667175, 26.00851430607779]),
            {
              "class": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43156909942627, 29.463518368533737]),
            {
              "class": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43723392486572, 29.447674344852803]),
            {
              "class": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39800930023193, 29.482796907817235]),
            {
              "class": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4036955833435, 29.49022869815453]),
            {
              "class": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39646434783936, 29.462096315081517]),
            {
              "class": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41650581359863, 29.440204233246025]),
            {
              "class": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42362976074219, 29.41912330741503]),
            {
              "class": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43247032165527, 29.407160553076316]),
            {
              "class": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.45549440383911, 29.376362169715488]),
            {
              "class": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.45025873184204, 29.382027677050097]),
            {
              "class": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41430440220637, 29.360905541820006]),
            {
              "class": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42560386657715, 29.286257908423025]),
            {
              "class": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46339082717896, 29.218854804917058]),
            {
              "class": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4506664276123, 29.550616258186096]),
            {
              "class": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44636416435242, 29.53466123684319]),
            {
              "class": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46457099914551, 29.573424104260766]),
            {
              "class": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.47157692909241, 29.59062596732942]),
            {
              "class": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44028091430664, 29.628276209539184]),
            {
              "class": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41498231887817, 29.65384282211686]),
            {
              "class": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.50250816345215, 29.61242502766664]),
            {
              "class": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.53108978271484, 29.62607523720543]),
            {
              "class": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52439498901367, 29.668295670997537]),
            {
              "class": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.56012201309204, 29.66728667684498]),
            {
              "class": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52684116363525, 29.69204402569588]),
            {
              "class": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48748779296875, 29.746875263568025]),
            {
              "class": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48680114746094, 29.800217684614925]),
            {
              "class": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.51126289367676, 29.796940478194276]),
            {
              "class": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.52473831176758, 29.73296974521871]),
            {
              "class": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43701934814453, 29.900055118309496]),
            {
              "class": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42380142211914, 29.953315784255064]),
            {
              "class": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44783401489258, 29.969377650348775]),
            {
              "class": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35204696655273, 30.000750286573783]),
            {
              "class": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.24853515625, 30.014872170508717]),
            {
              "class": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49717330932617, 29.573773018501516]),
            {
              "class": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63209915161133, 29.592881288986863]),
            {
              "class": 2,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67226791381836, 29.639144135110666]),
            {
              "class": 2,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5673828125, 29.62541673217377]),
            {
              "class": 2,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57527923583984, 29.550778587034713]),
            {
              "class": 2,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65372848510742, 29.68642965673298]),
            {
              "class": 2,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63810729980469, 29.789426050237953]),
            {
              "class": 2,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.59502029418945, 29.879070331705147]),
            {
              "class": 2,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.52532577514648, 29.946473830952392]),
            {
              "class": 2,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46515846252441, 29.955315017429534]),
            {
              "class": 2,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44464492797852, 30.008100144756316]),
            {
              "class": 2,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5190601348877, 30.018505167439596]),
            {
              "class": 2,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43280029296875, 30.019545609671262]),
            {
              "class": 2,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41228675842285, 30.041986776920766]),
            {
              "class": 2,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44550323486328, 30.049713684710625]),
            {
              "class": 2,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3857650756836, 30.048524968898384]),
            {
              "class": 2,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43975257873535, 30.09717635587172]),
            {
              "class": 2,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.35701179504395, 30.10876002851529]),
            {
              "class": 2,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41443252563477, 30.114105881003326]),
            {
              "class": 2,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33436584472656, 29.68465012235889]),
            {
              "class": 2,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.23257064819336, 29.664813441710177]),
            {
              "class": 2,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36185312271118, 29.52668208685612]),
            {
              "class": 2,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35057711601257, 29.54285740080797]),
            {
              "class": 2,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4038028717041, 29.566528185192837]),
            {
              "class": 2,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.440345287323, 29.563494368946092]),
            {
              "class": 2,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41611957550049, 29.47504392301266]),
            {
              "class": 2,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41742849349976, 29.483617867501152]),
            {
              "class": 2,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40953207015991, 29.459332482945072]),
            {
              "class": 2,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.29608535766602, 29.467963801285116]),
            {
              "class": 2,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.28832840919495, 29.462544245004217]),
            {
              "class": 2,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.34089970588684, 29.42893782549953]),
            {
              "class": 2,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33400106430054, 29.429283569520162]),
            {
              "class": 2,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.34612464904785, 29.435852482272864]),
            {
              "class": 2,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.37318277359009, 29.776562015759797]),
            {
              "class": 2,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35440731048584, 29.751900026588256]),
            {
              "class": 2,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35232591629028, 29.764157272458355]),
            {
              "class": 2,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35131740570068, 29.771514625408432]),
            {
              "class": 2,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46281147003174, 29.75272312699363]),
            {
              "class": 2,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46521472930908, 29.731666704012937]),
            {
              "class": 2,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4286937713623, 29.701188863441413]),
            {
              "class": 2,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38655090332031, 29.79131502124449]),
            {
              "class": 2,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43341445922852, 29.832088545481554]),
            {
              "class": 2,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43824243545532, 29.842545789931936]),
            {
              "class": 2,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43341445922852, 29.862961398741362]),
            {
              "class": 2,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42358684539795, 29.882982132403118]),
            {
              "class": 2,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.43298530578613, 29.890646999864114]),
            {
              "class": 2,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42380142211914, 29.925272029825848]),
            {
              "class": 2,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.8467321395874, 30.20516180941484]),
            {
              "class": 2,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.86252498626709, 30.22581805015799]),
            {
              "class": 2,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85900592803955, 30.192699215451274]),
            {
              "class": 2,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.8467321395874, 30.233345188702053]),
            {
              "class": 2,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.84156084060669, 30.248765057133532]),
            {
              "class": 2,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85460710525513, 30.26148002079014]),
            {
              "class": 2,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.8626537322998, 30.26902296029849]),
            {
              "class": 2,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.86857604980469, 30.2722845924997]),
            {
              "class": 2,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.86773920059204, 30.284625924230504]),
            {
              "class": 2,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.86640882492065, 30.302579233726206]),
            {
              "class": 2,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.82394409179688, 30.343930678668322]),
            {
              "class": 2,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.80265808105469, 30.391103554649607]),
            {
              "class": 2,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.74133205413818, 30.440952029409942]),
            {
              "class": 2,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.7508270740509, 30.438499929962237]),
            {
              "class": 2,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.76459217071533, 30.422017375190244]),
            {
              "class": 2,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73871421813965, 30.495809537452832]),
            {
              "class": 2,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.67200231552124, 30.46214291028812]),
            {
              "class": 2,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.61280059814453, 30.57039714646996]),
            {
              "class": 2,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.72418737411499, 29.894348994190086]),
            {
              "class": 2,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.72813558578491, 29.88112923346985]),
            {
              "class": 2,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73471236228943, 29.87523968889456]),
            {
              "class": 2,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.69995093345642, 29.843670119371847]),
            {
              "class": 2,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.74239420890808, 29.868672335667842]),
            {
              "class": 2,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70059204101562, 31.320821070076324]),
            {
              "class": 2,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54438018798828, 31.393675495672408]),
            {
              "class": 2,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55296325683594, 31.302488640785565]),
            {
              "class": 2,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6058349609375, 31.092071097634197]),
            {
              "class": 2,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5951919555664, 31.098979858441055]),
            {
              "class": 2,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6281509399414, 31.081633506243186]),
            {
              "class": 2,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61287307739258, 31.126957008699225]),
            {
              "class": 2,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63179874420166, 31.09660775600013]),
            {
              "class": 2,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67827606201172, 30.991088352568667]),
            {
              "class": 2,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6512393951416, 30.962977365081162]),
            {
              "class": 2,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68093681335449, 30.95915009833955]),
            {
              "class": 2,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69363975524902, 31.0213241714379]),
            {
              "class": 2,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.62308692932129, 30.91556732895318]),
            {
              "class": 2,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67510032653809, 30.908896249591812]),
            {
              "class": 2,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67570114135742, 30.926826264189728]),
            {
              "class": 2,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63338661193848, 30.92175258012823]),
            {
              "class": 2,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66497230529785, 30.97269204561795]),
            {
              "class": 2,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70333862304688, 30.99005825312557]),
            {
              "class": 2,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.53948783874512, 30.859882078777407]),
            {
              "class": 2,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49914741516113, 30.83725991330512]),
            {
              "class": 2,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.40529155731201, 30.953954206060043]),
            {
              "class": 2,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38518571853638, 30.942419783095698]),
            {
              "class": 2,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37891739606857, 30.945514924099967]),
            {
              "class": 2,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.35083198547363, 30.95966531625765]),
            {
              "class": 2,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.39383316040039, 30.97754901519441]),
            {
              "class": 2,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44116878509521, 30.94405358360589]),
            {
              "class": 2,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3951849937439, 30.914102860990376]),
            {
              "class": 2,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38566851615906, 30.918573696737695]),
            {
              "class": 2,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.36336326599121, 30.933459281972862]),
            {
              "class": 2,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.32139205932617, 30.922194368480373]),
            {
              "class": 2,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29830360412598, 30.927569296653076]),
            {
              "class": 2,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.31658554077148, 30.94236719534054]),
            {
              "class": 2,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26457214355469, 30.997710154799744]),
            {
              "class": 2,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29049301147461, 30.98357126678689]),
            {
              "class": 2,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27800464630127, 30.969263185595103]),
            {
              "class": 2,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25049591064453, 31.0092168852929]),
            {
              "class": 2,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23955249786377, 31.023082718354843]),
            {
              "class": 2,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.259765625, 31.055455742987466]),
            {
              "class": 2,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26270532608032, 31.066741688858542]),
            {
              "class": 2,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2437903881073, 31.079108889536297]),
            {
              "class": 2,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25101089477539, 31.08384098788491]),
            {
              "class": 2,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25182628631592, 31.075658910714385]),
            {
              "class": 2,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26826286315918, 31.09149960370981]),
            {
              "class": 2,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27088069915771, 31.108770667470818]),
            {
              "class": 2,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2683916091919, 31.117515242236404]),
            {
              "class": 2,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29319667816162, 31.10145840894082]),
            {
              "class": 2,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.29602909088135, 31.13022650648934]),
            {
              "class": 2,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27886295318604, 31.111967307115396]),
            {
              "class": 2,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.34109020233154, 31.09179360553506]),
            {
              "class": 2,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27817630767822, 31.092271356560733]),
            {
              "class": 2,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46215438842773, 31.106021603347777]),
            {
              "class": 2,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.40310287475586, 31.094924065622532]),
            {
              "class": 2,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38336181640625, 31.117264805651057]),
            {
              "class": 2,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38971328735352, 31.133135294744903]),
            {
              "class": 2,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.35306358337402, 31.157229849424766]),
            {
              "class": 2,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4161491394043, 31.0402258800076]),
            {
              "class": 2,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44387245178223, 31.02801742328707]),
            {
              "class": 2,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57373428344727, 30.251592717863467]),
            {
              "class": 2,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.53502464294434, 30.278576841730786]),
            {
              "class": 2,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57304763793945, 30.225046155645593]),
            {
              "class": 2,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95026016235352, 29.449477511161998]),
            {
              "class": 2,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.91670036315918, 29.440807246515085]),
            {
              "class": 2,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89970588684082, 29.476156349780343]),
            {
              "class": 2,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90893268585205, 29.48118959083179]),
            {
              "class": 2,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92828750610352, 29.49260198523073]),
            {
              "class": 2,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.84563255310059, 29.428323754644065]),
            {
              "class": 2,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85670471191406, 29.500206737479182]),
            {
              "class": 2,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.83747863769531, 29.366373295456167]),
            {
              "class": 2,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85138320922852, 29.265163856339637]),
            {
              "class": 2,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.84159851074219, 29.269336197631304]),
            {
              "class": 2,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8584213256836, 29.246946786963267]),
            {
              "class": 2,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7243537902832, 29.86105495455697]),
            {
              "class": 2,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.70401191711426, 29.870358947009816]),
            {
              "class": 2,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75207710266113, 29.900721139696014]),
            {
              "class": 2,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.69130897521973, 29.897224005432093]),
            {
              "class": 2,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66375732421875, 29.904962180388416]),
            {
              "class": 2,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.67912101745605, 29.858970741320377]),
            {
              "class": 2,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.73508262634277, 29.9303302489624]),
            {
              "class": 2,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66598892211914, 29.930181481480584]),
            {
              "class": 2,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.71362495422363, 29.897670454938115]),
            {
              "class": 2,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74512481689453, 29.857035361485234]),
            {
              "class": 2,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.70813179016113, 29.837083874873464]),
            {
              "class": 2,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85460186004639, 29.89710556227497]),
            {
              "class": 2,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8639144897461, 29.908712613127964]),
            {
              "class": 2,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85005283355713, 29.914776015337885]),
            {
              "class": 2,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89781761169434, 29.92976554153059]),
            {
              "class": 2,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90318202972412, 29.950717643371256]),
            {
              "class": 2,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.91592788696289, 29.947501156221634]),
            {
              "class": 2,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.9020447731018, 29.9624299831206]),
            {
              "class": 2,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90191602706909, 29.974995974695332]),
            {
              "class": 2,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88770031929016, 29.979260024089132]),
            {
              "class": 2,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88061928749084, 29.983599940428444]),
            {
              "class": 2,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88829040527344, 30.03078547810682]),
            {
              "class": 2,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88296890258789, 30.076697481428607]),
            {
              "class": 2,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90871810913086, 30.096006847524716]),
            {
              "class": 2,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.99454879760742, 30.079222766645543]),
            {
              "class": 2,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95918655395508, 30.099274213367096]),
            {
              "class": 2,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.94099044799805, 30.13476272644781]),
            {
              "class": 2,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.86623191833496, 30.05841908403333]),
            {
              "class": 2,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74554634094238, 25.801837229601507]),
            {
              "class": 2,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.71533393859863, 25.80662810724792]),
            {
              "class": 2,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9128303527832, 25.886190135190564]),
            {
              "class": 2,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.92664909362793, 25.91390839241401]),
            {
              "class": 2,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.36721801757812, 26.537300678478612]),
            {
              "class": 2,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.41021919250488, 26.639954566918547]),
            {
              "class": 2,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.39167976379395, 26.683829433241183]),
            {
              "class": 2,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.51089859008789, 26.758423940892158]),
            {
              "class": 2,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.52171325683594, 26.7128144012572]),
            {
              "class": 2,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.40481185913086, 26.77643275282025]),
            {
              "class": 2,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3632698059082, 26.846065469549536]),
            {
              "class": 2,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.32198524475098, 26.837059917863943]),
            {
              "class": 2,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.60831642150879, 26.974410374962954]),
            {
              "class": 2,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.57812547683716, 26.989780927345645]),
            {
              "class": 2,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.59936857223511, 26.99342159952099]),
            {
              "class": 2,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.79315280914307, 27.352313613122462]),
            {
              "class": 2,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.89387512207031, 27.39723626309852]),
            {
              "class": 2,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.84186172485352, 27.34426200300795]),
            {
              "class": 2,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.83113288879395, 27.285999190806223]),
            {
              "class": 2,
              "system:index": "1071"
            })]),
    ref = ee.Image("users/images/reference/Mexico_crop_extent2017_gob_mx"),
    classif = ee.Image("users/images/Chihuahua_2010_v5_cleaned"),
    classif2 = ee.Image("users/images/Chihuahua_2010_v6");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


input=input.select(ee.List.sequence(11,67))
print(input)
/*
function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();

input=input.select(ee.List.sequence(0,43)).addBands(slope).addBands(elevation);
*/



//visual parameters for FCC display 
var vizParams = {
  bands: ['B4_1', 'B3_1', 'B2_1'],
  min: 0,
  max: 1,
  gamma: [1.5,1.6, 1.7]
};





//add all max val to map

//Map.addLayer(input, vizParams,'input')
Map.addLayer(classif2,{palette:'00ff00'},'classif');
Map.addLayer(ref,{palette:'ffff00'},'ref');

//throw('stop')


//Map.addLayer(image,{palette: '00ff00'},'Prev_crop')
//throw('stop')

//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(60).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

var studyArea = zones.filterMetadata('name','equals','Chihuahua');

studyArea=buffer1(studyArea.geometry());


//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);

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
var classifier = ee.Classifier.randomForest(250,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1));

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Chihuahua_v1_asset',
  assetId: 'Chihuahua_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Chihuahua',
  fileNamePrefix: 'Chihuahua_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Chihuahua_v1',
  folder: 'Chihuahua',
  fileNamePrefix: 'RFtable_Chihuahua_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



