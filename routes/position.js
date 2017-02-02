var express = require('express');
var router = express.Router();

var Position = require('../model/models').Position;
var User = require('../model/models').User;

var jsonfile = require('jsonfile');

var file = 'sorry.json';
var positions = [{"email":"Alex", "name": "Alex", "lat":43.6095379,"lng":7.0589978,"date":1483643400033},
    {"lng":7.068469519344075,"lat":43.60343090614397,"email":"Matt","date":1483662491611, "name": "Matt"},
    {"lng":7.068469519344075,"lat":43.60343090614397,"email":"Lisa","date":1483662491611, "name": "Lisa"}];

//var Lisa = [{"lng":7.071890830993652,"lat":43.6159452654277,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.071676254272461,"lat":43.616224893402666,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.071247100830078,"lat":43.61641131133022,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.071118354797363,"lat":43.61665986766797,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.070817947387695,"lat":43.61693949231989,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.0706892013549805,"lat":43.617188046474396,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.071332931518555,"lat":43.617250184852494,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.071590423583984,"lat":43.617188046474396,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.072148323059082,"lat":43.617125908032094,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.072663307189941,"lat":43.61697056164539,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.073006629943848,"lat":43.61693949231989,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.073349952697754,"lat":43.61690842297833,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.073779106140137,"lat":43.61675307602975,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.0742082595825195,"lat":43.616628798181935,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.074680328369141,"lat":43.616628798181935,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.074980735778809,"lat":43.61653558962753,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.075324058532715,"lat":43.616349172085236,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.075839042663574,"lat":43.61616275396504,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.076354026794434,"lat":43.616069544688195,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.076826095581055,"lat":43.61603847489716,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.077298164367676,"lat":43.6159763352669,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.077641487121582,"lat":43.615758846055336,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.077898979187012,"lat":43.61551028599318,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078371047973633,"lat":43.615386005576845,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079572677612305,"lat":43.61507530341222,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.080259323120117,"lat":43.61495102209688,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.0803022384643555,"lat":43.61476459964228,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.080130577087402,"lat":43.61448496487678,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.080087661743164,"lat":43.61429854097737,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079873085021973,"lat":43.61404997487918,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.0797014236450195,"lat":43.613770336790644,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079572677612305,"lat":43.6135217685092,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079401016235352,"lat":43.61327319920036,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079229354858398,"lat":43.61305570021232,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079014778137207,"lat":43.61286927188219,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078800201416016,"lat":43.612620699876416,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078542709350586,"lat":43.6123721268432,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078371047973633,"lat":43.612154624596364,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078285217285156,"lat":43.611999265367004,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.07819938659668,"lat":43.61178176177168,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078413963317871,"lat":43.61165747364977,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.078843116760254,"lat":43.61143996881833,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079272270202637,"lat":43.611408896635346,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079529762268066,"lat":43.61137782443632,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.079958915710449,"lat":43.61122246320032,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.080087661743164,"lat":43.61112924626607,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.080559730529785,"lat":43.61100495679566,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.08094596862793,"lat":43.6108185221085,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.0810747146606445,"lat":43.61050779634558,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081289291381836,"lat":43.61025921457942,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081546783447266,"lat":43.60994848592693,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081718444824219,"lat":43.609606682555054,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.6094202435335,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.60914058391759,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.608798775954526,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081718444824219,"lat":43.609668828767155,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081718444824219,"lat":43.60935809706457,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081718444824219,"lat":43.609047363756666,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081761360168457,"lat":43.608798775954526,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.60861233442868,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.60842589232491,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081804275512695,"lat":43.60820837580678,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081589698791504,"lat":43.6074315246779,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081503868103027,"lat":43.60690326017927,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081503868103027,"lat":43.60649929007942,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081503868103027,"lat":43.60609531726658,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081503868103027,"lat":43.605691341740744,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081718444824219,"lat":43.605194137369296,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.081847190856934,"lat":43.6047590801731,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.08219051361084,"lat":43.60441724731169,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.082533836364746,"lat":43.604013260516616,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.082962989807129,"lat":43.603702499597404,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.083306312561035,"lat":43.60360927100861,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.083606719970703,"lat":43.60354711853581,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.084808349609375,"lat":43.603640347220924,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.085280418395996,"lat":43.60376465190968,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.085967063903809,"lat":43.603826804157734,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.086610794067383,"lat":43.603920032409405,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.087039947509766,"lat":43.603982184496935,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.087512016296387,"lat":43.603982184496935,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.087898254394531,"lat":43.603982184496935,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.088370323181152,"lat":43.603920032409405,"email":"Lisa","date":1483662491611,"name": "Lisa"},{"lng":7.088799476623535,"lat":43.603888956341564,"email":"Lisa","date":1483662491611,"name": "Lisa"}]
//var Alex = [{"lng":7.049360275268555,"lat":43.62417821126915,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0494890213012695,"lat":43.624333539033834,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0494890213012695,"lat":43.62458206262254,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049531936645508,"lat":43.62470632403159,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049617767333984,"lat":43.62489271566357,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049660682678223,"lat":43.62501697643048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049746513366699,"lat":43.62514123694057,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0497894287109375,"lat":43.62520336709927,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049875259399414,"lat":43.62529656221692,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.049918174743652,"lat":43.62535869221508,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05021858215332,"lat":43.62560721156563,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.050433158874512,"lat":43.6256382764122,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.050604820251465,"lat":43.625762535637996,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.050690650939941,"lat":43.62585572988876,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05322265625,"lat":43.62532762722404,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.051506042480469,"lat":43.62501697643048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.051763534545898,"lat":43.62501697643048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052021026611328,"lat":43.62501697643048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052278518676758,"lat":43.62501697643048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052450180053711,"lat":43.624830585183794,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052664756774902,"lat":43.62455099723014,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052750587463379,"lat":43.62439567002733,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.053050994873047,"lat":43.62430247351301,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.053351402282715,"lat":43.62430247351301,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.053523063659668,"lat":43.62427140797614,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.053737640380859,"lat":43.6242403424232,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.054123878479004,"lat":43.6242403424232,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.054424285888672,"lat":43.62405394876848,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.054767608642578,"lat":43.623960751724375,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.054853439331055,"lat":43.623836488774174,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052321434020996,"lat":43.623308368370246,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052321434020996,"lat":43.623308368370246,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052321434020996,"lat":43.623308368370246,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052321434020996,"lat":43.623308368370246,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.052321434020996,"lat":43.623308368370246,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055754661560059,"lat":43.622718110663776,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055926322937012,"lat":43.62259384514501,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056183815002441,"lat":43.62246957936939,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056269645690918,"lat":43.62231424678865,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056441307067871,"lat":43.62218998043511,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056441307067871,"lat":43.62197251369833,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056398391723633,"lat":43.62191038020048,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055926322937012,"lat":43.62150651089925,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055840492248535,"lat":43.621351175830235,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055797576904297,"lat":43.621102638885006,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055797576904297,"lat":43.6208851682151,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055797576904297,"lat":43.62079196625865,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055754661560059,"lat":43.62076089890772,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055754661560059,"lat":43.620605561912264,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05571174621582,"lat":43.62054342700173,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05571174621582,"lat":43.620294886717375,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05571174621582,"lat":43.620046345405584,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05571174621582,"lat":43.61976673520176,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.055754661560059,"lat":43.61948712369759,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056055068969727,"lat":43.61926964718425,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056269645690918,"lat":43.61911430633595,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056741714477539,"lat":43.61899003336838,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056741714477539,"lat":43.61895896508636,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.056870460510254,"lat":43.61886576014394,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.057042121887207,"lat":43.618679349825676,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.057170867919922,"lat":43.618679349825676,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.057428359985352,"lat":43.618648281383116,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.057557106018066,"lat":43.618524007452315,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.057943344116211,"lat":43.618275458820186,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.058072090148926,"lat":43.61802690916063,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0583295822143555,"lat":43.617964771585214,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.058544158935547,"lat":43.61777835847365,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.058758735656738,"lat":43.6176540827449,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.059059143066406,"lat":43.617467668670145,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.059187889099121,"lat":43.617467668670145,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.059531211853027,"lat":43.61734339229922,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.059788703918457,"lat":43.61734339229922,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.05996036529541,"lat":43.61728125401746,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.060303688049316,"lat":43.61709483878685,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.060818672180176,"lat":43.61706376952556,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.061119079589844,"lat":43.617032700248224,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.061376571655273,"lat":43.61681521485734,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.061548233032227,"lat":43.6167841454516,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.061891555786133,"lat":43.61681521485734,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.062535285949707,"lat":43.61669093713797,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.063007354736328,"lat":43.61653558962753,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.063350677490234,"lat":43.61653558962753,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.063865661621094,"lat":43.61653558962753,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.064552307128906,"lat":43.6164423809286,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.064938545227051,"lat":43.616349172085236,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.06545352935791,"lat":43.616131684222154,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.065925598144531,"lat":43.616131684222154,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.066354751586914,"lat":43.616131684222154,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0665693283081055,"lat":43.61619382369185,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.06695556640625,"lat":43.61619382369185,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.067427635192871,"lat":43.61619382369185,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.067620754241943,"lat":43.61625596309739,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.068243026733398,"lat":43.616395776524996,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.06845760345459,"lat":43.61659772867988,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.068843841552734,"lat":43.6166132634329,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.069187164306641,"lat":43.6167841454516,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.069423198699951,"lat":43.6168618189359,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.069594860076904,"lat":43.61695502698465,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.069745063781738,"lat":43.617032700248224,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.069873809814453,"lat":43.61706376952556,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.070281505584717,"lat":43.61715697726126,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.0706892013549805,"lat":43.617172511869846,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.071032524108887,"lat":43.617172511869846,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.071483135223389,"lat":43.617172511869846,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.071740627288818,"lat":43.61706376952556,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.07195520401001,"lat":43.61706376952556,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072148323059082,"lat":43.61706376952556,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.07244873046875,"lat":43.61695502698465,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072641849517822,"lat":43.61692395765113,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072749137878418,"lat":43.61679968015648,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072813510894775,"lat":43.61667540240499,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072083950042725,"lat":43.6164423809286,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072083950042725,"lat":43.6164423809286,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072899341583252,"lat":43.61616275396504,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072899341583252,"lat":43.61603847489716,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072792053222656,"lat":43.615867590759436,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072620391845703,"lat":43.61569670613613,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072427272796631,"lat":43.61554135605715,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072255611419678,"lat":43.615401540642914,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.072019577026367,"lat":43.61532386527233,"email":"Alex","date":1483662491611,"name": "Alex"},{"lng":7.071933746337891,"lat":43.61543261076308,"email":"Alex","date":1483662491611,"name": "Alex"}]
//var Matt = [{"lng":7.072277069091797,"lat":43.61582098591032,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.072319984436035,"lat":43.61603847489716,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07270622253418,"lat":43.616318102438676,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.072792053222656,"lat":43.61653558962753,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.073006629943848,"lat":43.61669093713797,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.073264122009277,"lat":43.61673754131283,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.073650360107422,"lat":43.6166132634329,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07395076751709,"lat":43.6166132634329,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.074744701385498,"lat":43.61667540240499,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.075152397155762,"lat":43.616551124396615,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.075366973876953,"lat":43.616473450510966,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.075560092926025,"lat":43.61641131133022,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07594633102417,"lat":43.616318102438676,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.076718807220459,"lat":43.61603847489716,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.077040672302246,"lat":43.61599187018048,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07744836807251,"lat":43.61588312570114,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.077620029449463,"lat":43.615789915990874,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.077877521514893,"lat":43.6156190311468,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.078156471252441,"lat":43.615479215913176,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07843542098999,"lat":43.615370470506726,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07869291305542,"lat":43.615261724903625,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079122066497803,"lat":43.615090838558594,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079787254333496,"lat":43.61507530341222,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080130577087402,"lat":43.615013162786674,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080280780792236,"lat":43.61468692344895,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080109119415283,"lat":43.61437621767236,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079808712005615,"lat":43.61391015599745,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079336643218994,"lat":43.61325766358443,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079014778137207,"lat":43.61288480759845,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079422473907471,"lat":43.613397483983206,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079250812530518,"lat":43.61322659234057,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079164981842041,"lat":43.613117842860596,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079036235809326,"lat":43.612978021811664,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.078886032104492,"lat":43.61276052175609,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.07869291305542,"lat":43.61238766268789,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0784783363342285,"lat":43.612154624596364,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.078392505645752,"lat":43.61170408172558,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.078542709350586,"lat":43.61150211313616,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.078971862792969,"lat":43.611471040985286,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079336643218994,"lat":43.611471040985286,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079722881317139,"lat":43.61137782443632,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080237865447998,"lat":43.611175854751245,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080838680267334,"lat":43.611051565377174,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081010341644287,"lat":43.61088066706842,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081246376037598,"lat":43.61074084081826,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081418037414551,"lat":43.61052333267187,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081611156463623,"lat":43.61022814178641,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081739902496338,"lat":43.610026168240566,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081890106201172,"lat":43.60973097491504,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081911563873291,"lat":43.60956007285386,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081954479217529,"lat":43.60938917030706,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081997394561768,"lat":43.609093973855195,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081997394561768,"lat":43.608596797608776,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081868648529053,"lat":43.60809961725271,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0818257331848145,"lat":43.60772672928877,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081761360168457,"lat":43.6073383018682,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0816755294799805,"lat":43.606934334689996,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081611156463623,"lat":43.606685738154944,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081632614135742,"lat":43.6063439162417,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081739902496338,"lat":43.60587779232054,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081739902496338,"lat":43.605691341740744,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081847190856934,"lat":43.60458816398521,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081911563873291,"lat":43.60427740603579,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082169055938721,"lat":43.604013260516616,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.08268404006958,"lat":43.60376465190968,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.083134651184082,"lat":43.60339173707287,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.084615230560303,"lat":43.60345388970621,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.085409164428711,"lat":43.603080972943076,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.086074352264404,"lat":43.603096511187694,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0865678787231445,"lat":43.60304989644178,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.086997032165527,"lat":43.60304989644178,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0873188972473145,"lat":43.603158664126035,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.087640762329102,"lat":43.60345388970621,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0871901512146,"lat":43.60360927100861,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.085838317871094,"lat":43.60368696150932,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.084894180297852,"lat":43.60371803768151,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.08392858505249,"lat":43.603826804157734,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.083327770233154,"lat":43.60430848190296,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082769870758057,"lat":43.6049610714055,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082276344299316,"lat":43.60545827770332,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082061767578125,"lat":43.60584671726406,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081847190856934,"lat":43.60649929007942,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081868648529053,"lat":43.60772672928877,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081954479217529,"lat":43.60769565518745,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.08194375038147,"lat":43.60812292267371,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082051038742065,"lat":43.60887645975306,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082040309906006,"lat":43.609567841139906,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.082018852233887,"lat":43.60978923687035,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081761360168457,"lat":43.610430114654015,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081578969955444,"lat":43.61067869571384,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.081090807914734,"lat":43.61108652178959,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.0809245109558105,"lat":43.61118362282859,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080667018890381,"lat":43.611338984164945,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080393433570862,"lat":43.6114283167516,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.080039381980896,"lat":43.61153318527099,"email":"Matt","date":1483662491611,"name": "Matt"},{"lng":7.079282999038696,"lat":43.611746805763374,"email":"Matt","date":1483662491611,"name": "Matt"}];
// var inc=0;
// setInterval(function() {
//     positions[2] = Lisa[inc%Lisa.length];
//     positions[0] = Alex[inc%Alex.length];
//     positions[1] = Matt[inc%Matt.length];
//     inc++;
// }, 500);
router.post('/', function (req, res) {

    console.log('Received position');
    /* Sorry for the following lines, but I would waste way too much time dealing with knex */
    position = req.body;
    jsonfile.readFile(file, function(err, obj) {
        position.date = Date.now();
        obj.push(position);
        jsonfile.writeFile(file, obj);
    });
    /* Sorry, again */
    res.json({"bloup":"bloup"});
});

router.get('/', function(req, res) {
    jsonfile.readFile(file, function(err, obj) {
        res.json(obj);
    });
});

module.exports = router;