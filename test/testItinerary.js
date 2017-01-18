var chai = require('chai');
var expect = chai.expect;
var directionDriver = require('../components/directions/itinerary_calculator').directionDriver;
var bestwayFinder = require('../components/bestWay/bestway.js').bestwayFinder;
var request = require("request");

var url = "http://daredeville.herokuapp.com/api/v1/itinerary";

describe('Itinerary', function() {

    describe('Direction driver', function () {
        it('gets the itinerary', function() {
            return directionDriver.getItinerary().then(function(data){
                expect(data).not.to.be.undefined;
                expect(data.routes).not.to.be.undefined;
                expect(data.status).to.be.undefined;
            });
        });
    });

    describe('Test GET route', function(){
        it('returns status 200', function(done){
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('Test BestWay', function () {
        it('computes the "line intersect danger"', function (done) {
            var center = {longitude:43.615828,latitude:7.072732};
            var radius = 0.0001;
            var pointA = {lng:43.616007,lat:7.073011};
            var pointB = {lng:43.616271,lat:7.072947};
            var result = bestwayFinder.lineIntersectDanger(center, radius, pointA, pointB);
            expect(result).to.be.false;

            center = {longitude:43.615828,latitude:7.072732};
            radius = 0.0001;
            pointA = {lng:43.616007,lat:7.073011};
            pointB = {lng:43.615586,lat:7.072391};
            result = bestwayFinder.lineIntersectDanger(center, radius, pointA, pointB);
            expect(result).to.be.true;

            done();
        });

        it('finds the dangers', function (done) {
            var route_1 = {

                "bounds":{
                    "northeast":{
                        "lat":43.7062919,
                        "lng":7.280961
                    },
                    "southwest":{
                        "lat":43.7019491,
                        "lng":7.2621818
                    }
                },
                "copyrights":"Map data ©2017 Google",
                "legs":[
                    {
                        "distance":{
                            "text":"1.8 km",
                            "value":1804
                        },
                        "duration":{
                            "text":"23 mins",
                            "value":1386
                        },
                        "end_address":"52 Avenue de la République, 06300 Nice, France",
                        "end_location":{
                            "lat":43.7019491,
                            "lng":7.280678
                        },
                        "start_address":"Gare de Nice-Ville, 12 Avenue Thiers, 06000 Nice, France",
                        "start_location":{
                            "lat":43.7043934,
                            "lng":7.2621818
                        },
                        "steps":[
                            {
                                "distance":{
                                    "text":"45 m",
                                    "value":45
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":33
                                },
                                "end_location":{
                                    "lat":43.7044272,
                                    "lng":7.262704500000001
                                },
                                "html_instructions":"Head <b>northeast</b> toward <b>Avenue Thiers</b>",
                                "polyline":{
                                    "points":"m_wiGskik@IWGW?SHc@"
                                },
                                "start_location":{
                                    "lat":43.7043934,
                                    "lng":7.2621818
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"30 m",
                                    "value":30
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":23
                                },
                                "end_location":{
                                    "lat":43.7042136,
                                    "lng":7.2625697
                                },
                                "html_instructions":"Turn <b>right</b> at <b>Avenue Thiers</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"u_wiG{nik@HG@?@?P\\@@@?F@"
                                },
                                "start_location":{
                                    "lat":43.7044272,
                                    "lng":7.262704500000001
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.2 km",
                                    "value":241
                                },
                                "duration":{
                                    "text":"3 mins",
                                    "value":180
                                },
                                "end_location":{
                                    "lat":43.7047578,
                                    "lng":7.265459199999999
                                },
                                "html_instructions":"Turn <b>left</b> onto <b>Rue de Belgique</b>",
                                "maneuver":"turn-left",
                                "polyline":{
                                    "points":"i~viGanik@k@sFYkD?E?E]cBEQ?KAGAK"
                                },
                                "start_location":{
                                    "lat":43.7042136,
                                    "lng":7.2625697
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.4 km",
                                    "value":392
                                },
                                "duration":{
                                    "text":"5 mins",
                                    "value":299
                                },
                                "end_location":{
                                    "lat":43.7062919,
                                    "lng":7.269852299999999
                                },
                                "html_instructions":"Continue onto <b>Rue Pertinax</b>",
                                "polyline":{
                                    "points":"wawiGc`jk@_AwDYkAQs@i@wBuAwFeAeE"
                                },
                                "start_location":{
                                    "lat":43.7047578,
                                    "lng":7.265459199999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.2 km",
                                    "value":224
                                },
                                "duration":{
                                    "text":"3 mins",
                                    "value":176
                                },
                                "end_location":{
                                    "lat":43.7052324,
                                    "lng":7.271793700000001
                                },
                                "html_instructions":"Turn <b>right</b> onto <b>Avenue Desambrois</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"ikwiGq{jk@zByAjAkANw@BK@O?M@E?U?W?SAUAOCGCE"
                                },
                                "start_location":{
                                    "lat":43.7062919,
                                    "lng":7.269852299999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.2 km",
                                    "value":199
                                },
                                "duration":{
                                    "text":"3 mins",
                                    "value":159
                                },
                                "end_location":{
                                    "lat":43.70426,
                                    "lng":7.273859900000001
                                },
                                "html_instructions":"Turn <b>right</b> to stay on <b>Avenue Desambrois</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"udwiGugkk@DWFSFWDOFOh@sAPc@j@yAJUN]Xs@"
                                },
                                "start_location":{
                                    "lat":43.7052324,
                                    "lng":7.271793700000001
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.4 km",
                                    "value":441
                                },
                                "duration":{
                                    "text":"6 mins",
                                    "value":331
                                },
                                "end_location":{
                                    "lat":43.7030281,
                                    "lng":7.2789798
                                },
                                "html_instructions":"Continue onto <b>Boulevard Carabacel</b>",
                                "polyline":{
                                    "points":"s~viGstkk@LYl@kCt@eDVcAJi@^_Bf@{BDUDUDq@@q@?q@A[Bm@?S?Y?M?Q@O"
                                },
                                "start_location":{
                                    "lat":43.70426,
                                    "lng":7.273859900000001
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.1 km",
                                    "value":95
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":72
                                },
                                "end_location":{
                                    "lat":43.70269529999999,
                                    "lng":7.280064499999999
                                },
                                "html_instructions":"Continue onto <b>Traverse Barla</b>",
                                "polyline":{
                                    "points":"}vviGstlk@BOBOt@aDBU"
                                },
                                "start_location":{
                                    "lat":43.7030281,
                                    "lng":7.2789798
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"78 m",
                                    "value":78
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":68
                                },
                                "end_location":{
                                    "lat":43.7024426,
                                    "lng":7.280961
                                },
                                "html_instructions":"Continue onto <b>Rue Barla</b>",
                                "polyline":{
                                    "points":"{tviGk{lk@D]DUf@_C"
                                },
                                "start_location":{
                                    "lat":43.70269529999999,
                                    "lng":7.280064499999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"59 m",
                                    "value":59
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":45
                                },
                                "end_location":{
                                    "lat":43.7019491,
                                    "lng":7.280678
                                },
                                "html_instructions":"Turn <b>right</b> onto <b>Avenue de la République</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"gsviG_amk@`Bv@"
                                },
                                "start_location":{
                                    "lat":43.7024426,
                                    "lng":7.280961
                                },
                                "travel_mode":"WALKING"
                            }
                        ],
                        "traffic_speed_entry":[
                        ],
                        "via_waypoint":[
                        ]
                    }
                ],
                "overview_polyline":{
                    "points":"m_wiGskik@Qo@?SHc@JGR\\B@F@k@sFYqD]iBIq@uCoL{C}LzByAjAkARcA@]@gACe@GMZsAnBaFbAaCfC_LrAgGFcBAmAB{A@o@F_@x@wDJs@f@_C`Bv@"
                },
                "summary":"Boulevard Carabacel",
                "warnings":[
                    "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                ],
                "waypoint_order":[
                ]

            };
            var nbIntersect = bestwayFinder.findDangers(route_1);
            expect(nbIntersect).to.equal(1);

            var route_0 = {

                "bounds":{
                    "northeast":{
                        "lat":43.7047578,
                        "lng":7.280961
                    },
                    "southwest":{
                        "lat":43.7019491,
                        "lng":7.2621818
                    }
                },
                "copyrights":"Map data ©2017 Google",
                "legs":[
                    {
                        "distance":{
                            "text":"1.9 km",
                            "value":1908
                        },
                        "duration":{
                            "text":"24 mins",
                            "value":1466
                        },
                        "end_address":"52 Avenue de la République, 06300 Nice, France",
                        "end_location":{
                            "lat":43.7019491,
                            "lng":7.280678
                        },
                        "start_address":"Gare de Nice-Ville, 12 Avenue Thiers, 06000 Nice, France",
                        "start_location":{
                            "lat":43.7043934,
                            "lng":7.2621818
                        },
                        "steps":[
                            {
                                "distance":{
                                    "text":"45 m",
                                    "value":45
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":33
                                },
                                "end_location":{
                                    "lat":43.7044272,
                                    "lng":7.262704500000001
                                },
                                "html_instructions":"Head <b>northeast</b> toward <b>Avenue Thiers</b>",
                                "polyline":{
                                    "points":"m_wiGskik@IWGW?SHc@"
                                },
                                "start_location":{
                                    "lat":43.7043934,
                                    "lng":7.2621818
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"30 m",
                                    "value":30
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":23
                                },
                                "end_location":{
                                    "lat":43.7042136,
                                    "lng":7.2625697
                                },
                                "html_instructions":"Turn <b>right</b> at <b>Avenue Thiers</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"u_wiG{nik@HG@?@?P\\@@@?F@"
                                },
                                "start_location":{
                                    "lat":43.7044272,
                                    "lng":7.262704500000001
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.2 km",
                                    "value":241
                                },
                                "duration":{
                                    "text":"3 mins",
                                    "value":180
                                },
                                "end_location":{
                                    "lat":43.7047578,
                                    "lng":7.265459199999999
                                },
                                "html_instructions":"Turn <b>left</b> onto <b>Rue de Belgique</b>",
                                "maneuver":"turn-left",
                                "polyline":{
                                    "points":"i~viGanik@k@sFYkD?E?E]cBEQ?KAGAK"
                                },
                                "start_location":{
                                    "lat":43.7042136,
                                    "lng":7.2625697
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.3 km",
                                    "value":265
                                },
                                "duration":{
                                    "text":"3 mins",
                                    "value":189
                                },
                                "end_location":{
                                    "lat":43.7025916,
                                    "lng":7.266828899999999
                                },
                                "html_instructions":"Turn <b>right</b> onto <b>Avenue Jean Médecin</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"wawiGc`jk@xAu@pDsBh@W`Ak@x@c@"
                                },
                                "start_location":{
                                    "lat":43.7047578,
                                    "lng":7.265459199999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.4 km",
                                    "value":385
                                },
                                "duration":{
                                    "text":"5 mins",
                                    "value":297
                                },
                                "end_location":{
                                    "lat":43.7041214,
                                    "lng":7.271115500000001
                                },
                                "html_instructions":"Turn <b>left</b> onto <b>Avenue du Marechal Foch</b>",
                                "maneuver":"turn-left",
                                "polyline":{
                                    "points":"etviGuhjk@S{@a@eBq@qCk@{BCMc@eBk@eCc@gBGKO_@EKGO"
                                },
                                "start_location":{
                                    "lat":43.7025916,
                                    "lng":7.266828899999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.2 km",
                                    "value":176
                                },
                                "duration":{
                                    "text":"2 mins",
                                    "value":137
                                },
                                "end_location":{
                                    "lat":43.7036046,
                                    "lng":7.273189899999999
                                },
                                "html_instructions":"Turn <b>right</b> to stay on <b>Avenue du Marechal Foch</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"w}viGockk@@I@OBQd@sCL{@j@aD"
                                },
                                "start_location":{
                                    "lat":43.7041214,
                                    "lng":7.271115500000001
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"81 m",
                                    "value":81
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":80
                                },
                                "end_location":{
                                    "lat":43.7042274,
                                    "lng":7.2736864
                                },
                                "html_instructions":"Turn <b>left</b> onto <b>Boulevard Dubouchage</b>",
                                "maneuver":"turn-left",
                                "polyline":{
                                    "points":"ozviGmpkk@{@e@UQ[QCECECECG"
                                },
                                "start_location":{
                                    "lat":43.7036046,
                                    "lng":7.273189899999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.5 km",
                                    "value":453
                                },
                                "duration":{
                                    "text":"6 mins",
                                    "value":342
                                },
                                "end_location":{
                                    "lat":43.7030281,
                                    "lng":7.2789798
                                },
                                "html_instructions":"Turn <b>right</b> onto <b>Boulevard Carabacel</b>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"m~viGqskk@F{@l@kCt@eDVcAJi@^_Bf@{BDUDUDq@@q@?q@A[Bm@?S?Y?M?Q@O"
                                },
                                "start_location":{
                                    "lat":43.7042274,
                                    "lng":7.2736864
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"0.1 km",
                                    "value":95
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":72
                                },
                                "end_location":{
                                    "lat":43.70269529999999,
                                    "lng":7.280064499999999
                                },
                                "html_instructions":"Continue onto <b>Traverse Barla</b>",
                                "polyline":{
                                    "points":"}vviGstlk@BOBOt@aDBU"
                                },
                                "start_location":{
                                    "lat":43.7030281,
                                    "lng":7.2789798
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"78 m",
                                    "value":78
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":68
                                },
                                "end_location":{
                                    "lat":43.7024426,
                                    "lng":7.280961
                                },
                                "html_instructions":"Continue onto <b>Rue Barla</b>",
                                "polyline":{
                                    "points":"{tviGk{lk@D]DUf@_C"
                                },
                                "start_location":{
                                    "lat":43.70269529999999,
                                    "lng":7.280064499999999
                                },
                                "travel_mode":"WALKING"
                            },
                            {
                                "distance":{
                                    "text":"59 m",
                                    "value":59
                                },
                                "duration":{
                                    "text":"1 min",
                                    "value":45
                                },
                                "end_location":{
                                    "lat":43.7019491,
                                    "lng":7.280678
                                },
                                "html_instructions":"Turn <b>right</b> onto <b>Avenue de la République</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                "maneuver":"turn-right",
                                "polyline":{
                                    "points":"gsviG_amk@`Bv@"
                                },
                                "start_location":{
                                    "lat":43.7024426,
                                    "lng":7.280961
                                },
                                "travel_mode":"WALKING"
                            }
                        ],
                        "traffic_speed_entry":[
                        ],
                        "via_waypoint":[
                            {
                                "location":{
                                    "lat":43.702851,
                                    "lng":7.267598299999999
                                },
                                "step_index":4,
                                "step_interpolation":0.1772717597472796
                            }
                        ]
                    }
                ],
                "overview_polyline":{
                    "points":"m_wiGskik@Qo@?SHc@JGR\\B@F@k@sFYqD]iBIq@vJmFx@c@S{@sAwF_CuJk@sBUk@GO@IDa@r@oEj@aD{@e@q@c@GKGMF{@l@kClAiFj@iCl@qCJgA@cBA[Bm@?S?g@Dq@x@qDHs@l@uC`Bv@"
                },
                "summary":"Avenue du Marechal Foch",
                "warnings":[
                    "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                ],
                "waypoint_order":[
                ]

            };
            nbIntersect = bestwayFinder.findDangers(route_0);
            expect(nbIntersect).to.equal(0);

            done();
        });

        it('finds the best way', function (done) {
            expect(true).to.be.true;
            done();
        });
    });
});