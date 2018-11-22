////////////////////dadada
////////////////////dadada
////////////////////dadada


function chsvgAndSetTarget() {
    var svgObject = document.getElementById('object').contentDocument;
    var test = svgObject.getElementsByTagName('svg');
    //test[0].setAttribute("viewBox", "10 20 904 604");
    //test[0].setAttribute("width", "100%");
    //test[0].setAttribute("height", "800");

    //設定SVG的link的target 在_blank
    var AllLink = svgObject.getElementsByTagName('a');
    for (i = 0; i < AllLink.length; i++) {
        AllLink[i].setAttribute("target", "_blank"); 
    }

}


function Getsvg(svg) {
    document.getElementById("svgarea").innerHTML =
        "<object id='object' data='" + svg + "' type='image/svg+xml'  ></object>";
        //"<iimg id='object' data='" + svg + "' >";
}


function bgcolor() {
    var container = document.getElementById('container');
    var containerdiv = container.getElementsByTagName('div');
    containerdiv[0].style.backgroundColor = "rgba(247, 247, 247,0.7)";
}

var CategoryArray = ["Technology", "Philosophy", "Environment", "Economics", "Art", "Biology", "Law", "Society", "Natural Science", "Computer Science"];


function getDropdown() {

    //for (CategoryName in CategoryArray) {
    //    console.log(CategoryArray[CategoryName]);
    //}


    var k10index = 0;

    for (var i = 0; i < table.length; i += 8) {
        //table[i + 1]-> 類別名稱

        if (table[i + 1] != "") {
            //console.log(i);
            var ainli = document.createElement("a");
            //ainli.setAttribute("role", "menuitem");
            //ainli.setAttribute("tabindex", "-1");
            //ainli.setAttribute("src", "#");
            ainli.setAttribute("href","#")
            ainli.setAttribute("onclick", "k1Onchange(" + k10index + ")");
            ainli.text = table[i + 0];
            var newli = document.createElement("li");
            //newli.setAttribute("role", "presentation");
            newli.appendChild(ainli);

            //var DropdownMenuID = table[i + 1].replace(' ', '_') + "_DropdownMenu";

            switch (table[i + 1]) {
                case "Technology":
                    Technology_DropdownMenu.appendChild(newli);
                    break;
                case "Philosophy":
                    Philosophy_DropdownMenu.appendChild(newli);
                    break;
                case "Environment":
                    Environment_DropdownMenu.appendChild(newli);
                    break;
                case "Economics":
                    Economics_DropdownMenu.appendChild(newli);
                    break;
                case "Art":
                    Art_DropdownMenu.appendChild(newli);
                    break;
                case "Biology":
                    Biology_DropdownMenu.appendChild(newli);
                    break;
                case "Law":
                    Law_DropdownMenu.appendChild(newli);
                    break;
                case "Society":
                    Society_DropdownMenu.appendChild(newli);
                    break;
                case "Natural Science":
                    Natural_Science_DropdownMenu.appendChild(newli);
                    break;
                case "Computer Science":
                    Computer_Science_DropdownMenu.appendChild(newli);
                    break;
                default:
            }

        }
        k10index += 1;
    }


    //var ainli = document.createElement("a");
    //ainli.setAttribute("role", "menuitem");
    //ainli.setAttribute("tabindex", "-1");
    //ainli.setAttribute("href", "#");
    //ainli.setAttribute("onclick", "k1Onchange(98)");
    //ainli.text = "dadadadada";
    //var newli = document.createElement("li");
    //newli.setAttribute("role", "presentation");
    //newli.appendChild(ainli);
    //Technology_DropdownMenu.appendChild(newli);
}
////////////////////dadada
////////////////////dadada
////////////////////dadada



//表的內容
var table = [
    "", "", "", 6, 10, "#", "img/nctu2.png", "rgba(255,255,255,0)",

    //第一空圈
    "Fall 2017", "", "", 5, 3, "", "#", "",  //1
    "Fall 2017", "", "", 5, 3, "", "#", "",  //2
    "Fall 2017", "", "", 5, 3, "", "#", "",  //3
    "Fall 2017", "", "", 5, 3, "", "#", "",  //4
    "Spring 2018", "", "", 5, 3, "", "#", "",  //5
    "Spring 2018", "", "", 5, 3, "", "#", "",  //6
    "Spring 2018", "", "", 5, 3, "", "#", "",  //7
    "Spring 2018", "", "", 5, 3, "", "#", "",  //8

    //第二空圈
    "Class A-front", "", "", 5, 3, "", "#", "",  //1
    "Class A-back", "", "", 5, 3, "", "#", "",  //2
    "Class B-front", "", "", 5, 3, "", "#", "",  //3
    "Class B-back", "", "", 5, 3, "", "#", "",  //4
    "Class A-front", "", "", 5, 3, "", "#", "",  //5
    "Class A-back", "", "", 5, 3, "", "#", "",  //6
    "Class B-front", "", "", 5, 3, "", "#", "",  //7
    "Class B-back", "", "", 5, 3, "", "#", "",  //8

    //1
    "Group 1", "分類", "", 1, 0, "img/seminar/106_1/單號/1-1.jpg", "img/seminar/106_1/單號/1-1.jpg", "rgba(255, 194, 224,0.7)",  //1
    "Group 1", "", "", 1, 0, "img/seminar/106_1/單號/1-2.jpg", "img/seminar/106_1/單號/1-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 1", "", "", 1, 0, "img/seminar/106_1/雙號/1-1.jpg", "img/seminar/106_1/雙號/1-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 1", "", "", 1, 0, "img/seminar/106_1/雙號/1-2.jpg", "img/seminar/106_1/雙號/1-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 1", "", "", 1, 0, "img/seminar/106_2/單號/1-1.png", "img/seminar/106_2/單號/1-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 1", "", "", 1, 0, "img/seminar/106_2/單號/1-2.png", "img/seminar/106_2/單號/1-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 1", "", "", 1, 0, "img/seminar/106_2/雙號/1-1.png", "img/seminar/106_2/雙號/1-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 1", "", "", 1, 0, "img/seminar/106_2/雙號/1-2.png", "img/seminar/106_2/雙號/1-2.png", "rgba(255, 194, 224,0.7)", //8


    //2
    "Group 2", "", "", 1, 0, "img/seminar/106_1/單號/2-1.jpg", "img/seminar/106_1/單號/2-1.jpg", "rgba(255, 194, 224, 0.7)",  //1
    "Group 2", "", "", 1, 0, "img/seminar/106_1/單號/2-1.jpg", "img/seminar/106_1/單號/2-1.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 2", "", "", 1, 0, "img/seminar/106_1/雙號/2-1.jpg", "img/seminar/106_1/雙號/2-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 2", "", "", 1, 0, "img/seminar/106_1/雙號/2-2.jpg", "img/seminar/106_1/雙號/2-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 2", "", "", 1, 0, "img/seminar/106_2/單號/2-1.png", "img/seminar/106_2/單號/2-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 2", "", "", 1, 0, "img/seminar/106_2/單號/2-2.png", "img/seminar/106_2/單號/2-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 2", "", "", 1, 0, "img/seminar/106_2/雙號/2-1.png", "img/seminar/106_2/雙號/2-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 2", "", "", 1, 0, "img/seminar/106_2/雙號/2-2.png", "img/seminar/106_2/雙號/2-2.png", "rgba(255, 194, 224,0.7)", //8


    //3
    "Group 3", "", "", 1, 0, "img/seminar/106_1/單號/3-1.jpg", "img/seminar/106_1/單號/3-1.jpg", "rgba(255, 194, 224,0.7)",  //1
    "Group 3", "", "", 1, 0, "img/seminar/106_1/單號/3-2.jpg", "img/seminar/106_1/單號/3-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 3", "", "", 1, 0, "img/seminar/106_1/雙號/3-1.jpg", "img/seminar/106_1/雙號/3-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 3", "", "", 1, 0, "img/seminar/106_1/雙號/3-2.jpg", "img/seminar/106_1/雙號/3-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 3", "", "", 1, 0, "img/seminar/106_2/單號/3-1.png", "img/seminar/106_2/單號/3-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 3", "", "", 1, 0, "img/seminar/106_2/單號/3-2.png", "img/seminar/106_2/單號/3-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 3", "", "", 1, 0, "img/seminar/106_2/雙號/3-1.png", "img/seminar/106_2/雙號/3-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 3", "", "", 1, 0, "img/seminar/106_2/雙號/3-2.png", "img/seminar/106_2/雙號/3-2.png", "rgba(255, 194, 224,0.7)", //8


    //4
    "Group 4", "", "", 1, 0, "img/seminar/106_1/單號/4-1.jpg", "img/seminar/106_1/單號/4-1.jpg", "rgba(255, 194, 224, 0.7)",  //1
    "Group 4", "", "", 1, 0, "img/seminar/106_1/單號/4-2.jpg", "img/seminar/106_1/單號/4-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 4", "", "", 1, 0, "img/seminar/106_1/雙號/4-1.jpg", "img/seminar/106_1/雙號/4-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 4", "", "", 1, 0, "img/seminar/106_1/雙號/4-2.jpg", "img/seminar/106_1/雙號/4-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 4", "", "", 1, 0, "img/seminar/106_2/單號/4-1.png", "img/seminar/106_2/單號/4-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 4", "", "", 1, 0, "img/seminar/106_2/單號/4-2.png", "img/seminar/106_2/單號/4-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 4", "", "", 1, 0, "img/seminar/106_2/雙號/4-1.png", "img/seminar/106_2/雙號/4-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 4", "", "", 1, 0, "img/seminar/106_2/雙號/4-2.png", "img/seminar/106_2/雙號/4-2.png", "rgba(255, 194, 224,0.7)", //8


    //5
    "Group 5", "", "", 1, 0, "img/seminar/106_1/單號/5-1.jpg", "img/seminar/106_1/單號/5-1.jpg", "rgba(255, 194, 224, 0.7)",  //1
    "Group 5", "", "", 1, 0, "img/seminar/106_1/單號/5-2.jpg", "img/seminar/106_1/單號/5-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 5", "", "", 1, 0, "img/seminar/106_1/雙號/5-1.jpg", "img/seminar/106_1/雙號/5-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 5", "", "", 1, 0, "img/seminar/106_1/雙號/5-2.jpg", "img/seminar/106_1/雙號/5-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 5", "", "", 1, 0, "img/seminar/106_2/單號/5-1.png", "img/seminar/106_2/單號/5-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 5", "", "", 1, 0, "img/seminar/106_2/單號/5-2.png", "img/seminar/106_2/單號/5-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 5", "", "", 1, 0, "img/seminar/106_2/雙號/5-1.png", "img/seminar/106_2/雙號/5-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 5", "", "", 1, 0, "img/seminar/106_2/雙號/5-2.png", "img/seminar/106_2/雙號/5-2.png", "rgba(255, 194, 224,0.7)", //8


    //6
    "Group 6", "", "", 1, 0, "img/seminar/106_1/單號/6-1.jpg", "img/seminar/106_1/單號/6-1.jpg", "rgba(255, 194, 224, 0.7)",  //1
    "Group 6", "", "", 1, 0, "img/seminar/106_1/單號/6-2.jpg", "img/seminar/106_1/單號/6-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 6", "", "", 1, 0, "img/seminar/106_1/雙號/6-1.jpg", "img/seminar/106_1/雙號/6-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 6", "", "", 1, 0, "img/seminar/106_1/雙號/6-2.jpg", "img/seminar/106_1/雙號/6-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 6", "", "", 1, 0, "img/seminar/106_2/單號/6-1.png", "img/seminar/106_2/單號/6-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 6", "", "", 1, 0, "img/seminar/106_2/單號/6-2.png", "img/seminar/106_2/單號/6-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 6", "", "", 1, 0, "img/seminar/106_2/雙號/6-1.png", "img/seminar/106_2/雙號/6-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 6", "", "", 1, 0, "img/seminar/106_2/雙號/6-2.png", "img/seminar/106_2/雙號/6-2.png", "rgba(255, 194, 224,0.7)", //8


    //7
    "Group 7", "", "", 1, 0, "img/seminar/106_1/單號/7-1.jpg", "img/seminar/106_1/單號/7-1.jpg", "rgba(255, 194, 224, 0.7)",  //1
    "Group 7", "", "", 1, 0, "img/seminar/106_1/單號/7-2.jpg", "img/seminar/106_1/單號/7-2.jpg", "rgba(255, 194, 224,0.7)", //2
    "Group 7", "", "", 1, 0, "img/seminar/106_1/雙號/7-1.jpg", "img/seminar/106_1/雙號/7-1.jpg", "rgba(255, 194, 224,0.7)", //3
    "Group 7", "", "", 1, 0, "img/seminar/106_1/雙號/7-2.jpg", "img/seminar/106_1/雙號/7-2.jpg", "rgba(255, 194, 224,0.7)", //4
    "Group 7", "", "", 1, 0, "img/seminar/106_2/單號/7-1.png", "img/seminar/106_2/單號/7-1.png", "rgba(255, 194, 224,0.7)", //5
    "Group 7", "", "", 1, 0, "img/seminar/106_2/單號/7-2.png", "img/seminar/106_2/單號/7-2.png", "rgba(255, 194, 224,0.7)", //6
    "Group 7", "", "", 1, 0, "img/seminar/106_2/雙號/7-1.png", "img/seminar/106_2/雙號/7-1.png", "rgba(255, 194, 224,0.7)", //7
    "Group 7", "", "", 1, 0, "img/seminar/106_2/雙號/7-2.png", "img/seminar/106_2/雙號/7-2.png", "rgba(255, 194, 224,0.7)", //8



    //第三空圈
    "Fall 2017", "", "", 5, 3, "", "#", "",  //1
    "Fall 2017", "", "", 5, 3, "", "#", "",  //2
    "Fall 2017", "", "", 5, 3, "", "#", "",  //3
    "Fall 2017", "", "", 5, 3, "", "#", "",  //4
    "Spring 2018", "", "", 5, 3, "", "#", "",  //5
    "Spring 2018", "", "", 5, 3, "", "#", "",  //6
    "Spring 2018", "", "", 5, 3, "", "#", "",  //7
    "Spring 2018", "", "", 5, 3, "", "#", "",  //8


    //第四空圈
    "Class A-front", "", "", 5, 3, "", "#", "",  //1
    "Class A-back", "", "", 5, 3, "", "#", "",  //2
    "Class B-front", "", "", 5, 3, "", "#", "",  //3
    "Class B-back", "", "", 5, 3, "", "#", "",  //4
    "Class A-front", "", "", 5, 3, "", "#", "",  //5
    "Class A-back", "", "", 5, 3, "", "#", "",  //6
    "Class B-front", "", "", 5, 3, "", "#", "",  //7
    "Class B-back", "", "", 5, 3, "", "#", "",  //8


    "", "", "", 6, 10, "#", "img/nctu2.png", "rgba(255,255,255,0)",

];


//座標(修改處)
var temp0 = [
    0, 500, 0,
    177.3024435212679, 467.50812134270734, 0,
    125.37176013483338, 467.50812134270734, 125.37176013483337,
    1.0856643496966255e-14, 467.50812134270734, 177.3024435212679,
    -125.37176013483337, 467.50812134270734, 125.37176013483338,
    -177.3024435212679, 467.50812134270734, 2.171328699393251e-14,
    -125.37176013483341, 467.50812134270734, -125.37176013483337,
    -3.2569930490898764e-14, 467.50812134270734, -177.3024435212679,
    125.37176013483334, 467.50812134270734, -125.37176013483341,
    284.03237336557794, 411.4919329468282, 0,
    200.8412172833095, 411.4919329468282, 200.84121728330948,
    1.739196684481905e-14, 411.4919329468282, 284.03237336557794,
    -200.84121728330948, 411.4919329468282, 200.8412172833095,
    -284.03237336557794, 411.4919329468282, 3.47839336896381e-14,
    -200.84121728330953, 411.4919329468282, -200.84121728330948,
    -5.217590053445715e-14, 411.4919329468282, -284.03237336557794,
    200.84121728330945, 411.4919329468282, -200.84121728330953,
    374.2553740855506, 331.5613291203976, 0,
    264.63851291140094, 331.5613291203976, 264.6385129114009,
    2.2916532296878242e-14, 331.5613291203976, 374.2553740855506,
    -264.6385129114009, 331.5613291203976, 264.63851291140094,
    -374.2553740855506, 331.5613291203976, 4.5833064593756484e-14,
    -264.638512911401, 331.5613291203976, -264.6385129114009,
    -6.874959689063472e-14, 331.5613291203976, -374.2553740855506,
    264.6385129114008, 331.5613291203976, -264.638512911401,
    442.728012826605, 232.36158602188425, 0,
    313.05598009093717, 232.36158602188425, 313.0559800909371,
    2.7109272190048506e-14, 232.36158602188425, 442.728012826605,
    -313.0559800909371, 232.36158602188425, 313.05598009093717,
    -442.728012826605, 232.36158602188425, 5.421854438009701e-14,
    -313.0559800909372, 232.36158602188425, -313.0559800909371,
    -8.132781657014552e-14, 232.36158602188425, -442.728012826605,
    313.05598009093706, 232.36158602188425, -313.0559800909372,
    485.470908713026, 119.65783214377888, 0,
    343.27977161977606, 119.65783214377888, 343.279771619776,
    2.972651972172821e-14, 119.65783214377888, 485.470908713026,
    -343.279771619776, 119.65783214377888, 343.27977161977606,
    -485.470908713026, 119.65783214377888, 5.945303944345642e-14,
    -343.2797716197761, 119.65783214377888, -343.279771619776,
    -8.917955916518462e-14, 119.65783214377888, -485.470908713026,
    343.27977161977594, 119.65783214377888, -343.2797716197761,
    500, 0, 0,
    353.5533905932738, 0, 353.5533905932737,
    3.061616997868383e-14, 0, 500,
    -353.5533905932737, 0, 353.5533905932738,
    -500, 0, 6.123233995736766e-14,
    -353.55339059327383, 0, -353.5533905932737,
    -9.184850993605149e-14, 0, -500,
    353.55339059327366, 0, -353.55339059327383,
    485.470908713026, -119.65783214377888, 0,
    343.27977161977606, -119.65783214377888, 343.279771619776,
    2.972651972172821e-14, -119.65783214377888, 485.470908713026,
    -343.279771619776, -119.65783214377888, 343.27977161977606,
    -485.470908713026, -119.65783214377888, 5.945303944345642e-14,
    -343.2797716197761, -119.65783214377888, -343.279771619776,
    -8.917955916518462e-14, -119.65783214377888, -485.470908713026,
    343.27977161977594, -119.65783214377888, -343.2797716197761,
    442.728012826605, -232.36158602188425, 0,
    313.05598009093717, -232.36158602188425, 313.0559800909371,
    2.7109272190048506e-14, -232.36158602188425, 442.728012826605,
    -313.0559800909371, -232.36158602188425, 313.05598009093717,
    -442.728012826605, -232.36158602188425, 5.421854438009701e-14,
    -313.0559800909372, -232.36158602188425, -313.0559800909371,
    -8.132781657014552e-14, -232.36158602188425, -442.728012826605,
    313.05598009093706, -232.36158602188425, -313.0559800909372,
    374.2553740855506, -331.5613291203976, 0,
    264.63851291140094, -331.5613291203976, 264.6385129114009,
    2.2916532296878242e-14, -331.5613291203976, 374.2553740855506,
    -264.6385129114009, -331.5613291203976, 264.63851291140094,
    -374.2553740855506, -331.5613291203976, 4.5833064593756484e-14,
    -264.638512911401, -331.5613291203976, -264.6385129114009,
    -6.874959689063472e-14, -331.5613291203976, -374.2553740855506,
    264.6385129114008, -331.5613291203976, -264.638512911401,
    284.03237336557794, -411.4919329468282, 0,
    200.8412172833095, -411.4919329468282, 200.84121728330948,
    1.739196684481905e-14, -411.4919329468282, 284.03237336557794,
    -200.84121728330948, -411.4919329468282, 200.8412172833095,
    -284.03237336557794, -411.4919329468282, 3.47839336896381e-14,
    -200.84121728330953, -411.4919329468282, -200.84121728330948,
    -5.217590053445715e-14, -411.4919329468282, -284.03237336557794,
    200.84121728330945, -411.4919329468282, -200.84121728330953,
    177.3024435212679, -467.50812134270734, 0,
    125.37176013483338, -467.50812134270734, 125.37176013483337,
    1.0856643496966255e-14, -467.50812134270734, 177.3024435212679,
    -125.37176013483337, -467.50812134270734, 125.37176013483338,
    -177.3024435212679, -467.50812134270734, 2.171328699393251e-14,
    -125.37176013483341, -467.50812134270734, -125.37176013483337,
    -3.2569930490898764e-14, -467.50812134270734, -177.3024435212679,
    125.37176013483334, -467.50812134270734, -125.37176013483341,
    0, -500, 0


];


var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

//menuL var
var dlist1 = [];
var dlist2 = [];
var dlist3 = [];
var dlist4 = [];
var did1 = [];
var did2 = [];
var did3 = [];
var did4 = [];

dlist1 = [];
dlist2 = [];
dlist3 = [];
dlist4 = [];
did1 = [];
did2 = [];
did3 = [];
did4 = [];
select_num = 0;
//menuL end


function init(stage) {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 2000;

    scene = new THREE.Scene();

    // table

    for (var i = 0; i < table.length; i += 8) {

        var element = document.createElement('div');
        var icol;  // x
        var irow;  // y

        var itrack = 8;   // 8軌
        var ilayer = 11;  // 7層


        //預設南北極
        icol = Math.ceil((i / 8) / itrack) - 1;


        if (icol <= 5 && icol >= 0) {//0~5層
            element.className = 'element' + icol + ' element';
            irow = i / 8 % itrack + 1;
        }
        else if (icol <= 10 && icol >= 6) {//6~10層
            element.className = 'element' + (10 - icol) + ' element';
            irow = i / 8 % itrack + 1;
        }
        else {
            element.className = 'element' + 'North' + ' element';
            irow = 0;
        }

        //背景色
        var bg = document.createElement('div');
        var bgcolor = "rgba(0, 0, 0,0.5)";//預設顏色
        var font_color = "rgba(0, 0, 0,0.5)";//文字預設顏色

        switch (irow) {
            case 0:
                bgcolor = "rgba(255, 51, 51,0)";//透明
                font_color = "rgba(0, 204, 204,1)";
                break;
            case 2:
                bgcolor = "rgba(171, 84, 90, 0.9)";//紅
                break;
            case 3:
                bgcolor = "rgba(182, 124, 130,0.9)";//粉
                break;
            case 4:
                bgcolor = "rgba(196, 162, 145,0.9)";//橘
                break;
            case 5:
                bgcolor = "rgba(225, 204, 177,0.9)";//黃
                break;
            case 6:
                bgcolor = "rgba(183, 197, 183,0.9)";//綠
                break;
            case 7:
                bgcolor = "rgba(194, 206, 220,0.9)";//
                break;
            case 8:
                bgcolor = "rgba(138, 149, 168,0.9)";//
                font_color = "rgba(0, 69,138,1)";
                break;
            case 1:
                bgcolor = "rgba(115, 78, 82,0.9)";
                break;
            default:

        }



        element.setAttribute('style', "background-color:" + bgcolor);
        element.appendChild(bg);



        var link = document.createElement('a'); // + url
        link.setAttribute('href', table[i + 5]);
        link.setAttribute('target', "_self"); //right或_self
        element.appendChild(link);

        var Img = document.createElement('img');
        Img.setAttribute('class', 'image');
        Img.setAttribute('src', table[i + 6]);
        //Img.setAttribute("width", 40);
        Img.setAttribute("height", 10);
        //var intobox = 'Getsvg("' + table[i + 5] + '");'
        //Img.setAttribute('onclick', intobox);
        link.appendChild(Img);



        var number = document.createElement('div');
        number.className = 'number'; //右上角小字 index
        //number.textContent = (i / 8);
        element.appendChild(number);



        if (icol == 0) {
            var symbol2 = document.createElement('div');
            symbol2.className = 'symbol2'; //大字
            symbol2.textContent = table[i];

            //symbol2.setAttribute('style', "color:" + font_color);

            element.appendChild(symbol2);
            link.appendChild(symbol2);
        }
        else {
            var symbol = document.createElement('div');
            symbol.className = 'symbol'; //大字
            symbol.textContent = table[i];

            //symbol.setAttribute('style', "color:" + font_color);

            element.appendChild(symbol);
            link.appendChild(symbol);

        }

        var details = document.createElement('div');
        details.className = 'details'; //下面兩行小字
        details.innerHTML = table[i + 2]

        //details.setAttribute('style', "color:" + font_color);
        element.appendChild(details);
        link.appendChild(details);



        var object = new THREE.CSS3DObject(element);
        scene.add(object);

        objects.push(object);

        //

        var object = new THREE.Object3D();

        object.position.x = (irow * 300) - 1750 - 800;  //常數項為整個Table水平起始位置;irow*300 的300為每片的寬度+間距
        object.position.y = -(icol * 300) + 1730; //常數項為整個Table垂直起始位置 數字越大越往上

        targets.table.push(object);

    }

    // sphere

    var vector = new THREE.Vector3();
    





    for (var i = 0, l = objects.length; i < l; i++) {

        var temp2 = [];
        var object = new THREE.Object3D();


        object.position.x = temp0[3 * i];
        object.position.y = temp0[3 * i + 1];
        object.position.z = temp0[3 * i + 2];

        temp2.push(object);
        vector.copy(object.position).multiplyScalar(2);
        object.lookAt(vector);
        targets.sphere.push(object);

    }
    /*
    // helix

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 1300 * Math.sin(phi);
        object.position.y = - (i * 12) + 600;
        object.position.z = 1300 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

    }

    // grid

    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i % 4) * 310) - 400;
        object.position.y = (- (Math.floor(i / 4) % 3) * 310) + 400;
        object.position.z = (Math.floor(i / 12)) * 500 - 1000;

        targets.grid.push(object);

    }
    */
    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById(stage).appendChild(renderer.domElement);

    //

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 200;
    controls.maxDistance = 100000;
    controls.addEventListener('change', render);

    //var button = document.getElementById('table');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    transform(targets.table, 20);
    //    camera.position.x = 0;
    //    camera.position.y = 0;
    //    camera.position.z = 6000;
    //}, false);

    //var button = document.getElementById('sphere');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    transform(targets.sphere, 20);
    //    camera.position.x = 0;
    //    camera.position.y = 0;
    //    camera.position.z = 3000;
    //}, false);


    //var button = document.getElementById('helix');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    transform(targets.helix, 20);
    //    camera.position.x = 0;
    //    camera.position.y = 0;
    //    camera.position.z = 5000;
    //}, false);

    //var button = document.getElementById('grid');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    transform(targets.grid, 20);
    //    camera.position.x = 2000;
    //    camera.position.y = 0;
    //    camera.position.z = 2000;
    //}, false);

    //var button = document.getElementById('+');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
    //    camera.position.x = 0;
    //    camera.position.y = 0;
    //    camera.position.z = 3000;
    //}, false);

    //var button = document.getElementById('-');
    //button.addEventListener('click', function (event) {
    //    controls.reset();
    //    renderer.setSize(window.innerHeight*0.3, window.innerHeight*0.3);
    //    camera.position.x = 0;
    //    camera.position.y = 0;
    //    camera.position.z = 3000;
    //}, false);

    transform(targets.sphere, 20); // 一開始看 sphere ; start default
    controls.reset();
    camera.position.x = 0;
    camera.position.y = 0;   // 一開始 y = -2268 z = 676 看赤道(55置中) ; y=0 z=3000 看北極
    camera.position.z = 3000;
    

    window.addEventListener('resize', onWindowResize, false);

}

function k1Onchange(i) {
    
    controls.reset();
    x = 3 * temp0[3 * i];
    y = 3 * temp0[3 * i + 1];
    z = 3 * temp0[3 * i + 2];
    transformPos(targets.sphere, 20, x, y, z);

}



function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }


    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformPos(targets, duration, iX, iY, iZ) {
    TWEEN.removeAll();
    camera.position.x = iX;
    camera.position.y = iY;
    camera.position.z = iZ;

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render(scene, camera);

}


