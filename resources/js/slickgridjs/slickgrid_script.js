function requiredFieldValidator(value) {
    if (value == null || value == undefined || !value.length) {
      return {valid: false, msg: "This is a required field"};
    } else {
      return {valid: true, msg: null};
    }
  }
  function waitingFormatter(value) {
    return "wait...";
  }
  function renderSparkline(cellNode, row, dataContext, colDef) {
    var vals = [
      dataContext["sp1"][0],
      dataContext["sp1"][1],
      dataContext["sp1"][2],
      dataContext["sp1"][3],
      dataContext["sp1"][4],
      dataContext["sp1"][6],
      dataContext["sp1"][7],
      dataContext["sp1"][8],
      dataContext["sp1"][9] 
    ];
    $(cellNode).empty().sparkline(vals, {width: "100%"});
  }

   function renderSparkline_sp2(cellNode, row, dataContext, colDef) {
    var sp2 = [
      dataContext["sp2"][0],
      dataContext["sp2"][1],
      dataContext["sp2"][2] 
    ];
    $(cellNode).empty().sparkline(sp2, {width: "100%"});
  }
  var grid;
  var data = [];
  var columns = [
    {id: "Client_ID", name: "Client ID", field: "Client ID"},
    {id: "Client", name: "Client(Ext Ref ID)", field: "Client(Ext Ref ID)",cssClass:"clientCss",width:200},
    {id: "Order", name: "Order", field: "Order"},
    {id: "sp1", name: "Chart",  asyncPostRender: renderSparkline},
    {id: "Sales", name: "Sales", field: "Sales"},
    {id: "sp2", name: "Chart",  asyncPostRender: renderSparkline_sp2},
    {id: "Sales Returns", name: "Sales Returns", field: "Sales Returns"  },
    {id: "Sale Prev", name: "Sale Prev", field: "Sale Prev"  },
    {id: "Growth", name: "Growth",field: "Growth",formatter: growthFormate },
    {id: "Channel", name: "Channel" ,field: "Channel" }
];

function growthFormate(row, cell, value, columnDef, dataContext) {
    if (value < 0) {
        return  "<span class='growthdec'>"+value+"</span>";
    } else {
        return "<span class='growthinc'>"+value+"</span>"  ;
    }
}
  var options = {
    editable: true,
    enableAddRow: false,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    enableAsyncPostRender: true
  };
  datajson = [
    {"Client ID":"121","Client(Ext Ref ID)":"BatteryBazaar Bangalore","Order":"8873", "sp1":[ "10", "50", "30","74","96","78","95","15","98","12" ],"Sales":"3744","sp2":[  "4", "28", "9" ],"Sales Returns":"1546","Sale Prev":"1645","Growth":"40","Channel":"45"},
    {"Client ID":"122","Client(Ext Ref ID)":"Bhopal Battery House","Order":"4545", "sp1":[ "5","98","12", "26", "9","30","74","9","30","74",  ],"Sales":"275782521","sp2":[ "75", "82", "9"],"Sales Returns":"35789","Sale Prev":"68985","Growth":"63","Channel":"68"},
    {"Client ID":"123","Client(Ext Ref ID)":"Sytleguts","Order":"8756", "sp1":[ "51","30","74", "9","98","12","1", "9","98","12" ],"Sales":"63751","sp2":["12", "36", "45" ],"Sales Returns":"145632","Sale Prev":"36527","Growth":"48","Channel":"-25"},
    {"Client ID":"124","Client(Ext Ref ID)":"M/S Triveni Battery house","Order":"3845", "sp1":[ "98","12","5", "50", "9" ,"98","12","5", "50", "9" ],"Sales":"78787","sp2":[  "23", "2", "85" ],"Sales Returns":"52147","Sale Prev":"68754","Growth":"24","Channel":"87"},
    {"Client ID":"125","Client(Ext Ref ID)":"Rekha Enterprises","Order":"3654", "sp1":[ "30","74","67", "79", "9","67", "79", "74","79", "74" ],"Sales":"45657","sp2":["1", "50", "30"],"Sales Returns":"145632","Sale Prev":"3524","Growth":"15","Channel":"44"},
    {"Client ID":"126","Client(Ext Ref ID)":"Swetha Automobile","Order":"78578", "sp1":[ "4", "28", "9","4", "28", "9","4", "28", "9","54" ],"Sales":"45457146","sp2":[ "1", "50", "30" ],"Sales Returns":"45721","Sale Prev":"5428","Growth":"-65","Channel":"78"},
    {"Client ID":"127","Client(Ext Ref ID)":"Bhalla Batteries","Order":"7854", "sp1":[ "76", "98","12","7", "30","74","9" , "30","74","9" ],"Sales":"6878754","sp2":[  "5", "26", "9"],"Sales Returns":"85214","Sale Prev":"485663","Growth":"48","Channel":"35"},
    {"Client ID":"128","Client(Ext Ref ID)":"UPS Point","Order":"27857", "sp1":[ "78", "7", "98","12","9" , "78", "18", "38","18","19"],"Sales":"456378","sp2":[ "18", "42", "3" ],"Sales Returns":"3652","Sale Prev":"485663","Growth":"47","Channel":"25"},
    {"Client ID":"129","Client(Ext Ref ID)":"Shree Balaji Battery","Order":"65656", "sp1":[ "5", "7","98","12", "9","5", "67","98","1", "73" ],"Sales":"45456","sp2":[ "48", "87", "9"],"Sales Returns":"5412","Sale Prev":"536532","Growth":"54","Channel":"25"},
    {"Client ID":"130","Client(Ext Ref ID)":"ElectronicWale","Order":"1563", "sp1":[ "64", "30","74","93", "9" ,"64", "33","74","63", "89",],"Sales":"356232","sp2":[  "67", "79", "9"],"Sales Returns":"145632","Sale Prev":"7877","Growth":"-12","Channel":"25"},
    {"Client ID":"131","Client(Ext Ref ID)":"SR Battery Service","Order":"3878", "sp1":[ "15", "91", "59","15", "97", "45" ,"30","74","93", "9"],"Sales":"1576","sp2":[ "65", "28", "46"],"Sales Returns":"6524","Sale Prev":"5667","Growth":"25","Channel":"25"},
    {"Client ID":"132","Client(Ext Ref ID)":"SS Battery","Order":"4545", "sp1":[ "95", "36","30","98","12","74", "9", "12","5","9"],"Sales":"356876","sp2":[ "51", "1", "9"],"Sales Returns":"145632","Sale Prev":"37875","Growth":"12","Channel":"25"},
    {"Client ID":"133","Client(Ext Ref ID)":"Suraj Enterprises","Order":"4545", "sp1":[ "75", "12","5","30","74","96","78","95","82", "9" ],"Sales":"457457","sp2":[ "1", "2", "3" ],"Sales Returns":"7847","Sale Prev":"3245","Growth":"-78","Channel":"32"},
    {"Client ID":"133","Client(Ext Ref ID)":"Suraj Enterprises","Order":"4545", "sp1":["12","5", "75", "82", "9","30","74","96","78","95" ],"Sales":"457457","sp2":[ "1", "2", "3" ],"Sales Returns":"7847","Sale Prev":"3245","Growth":"78","Channel":"32"},
    {"Client ID":"134","Client(Ext Ref ID)":"Battery House","Order":"8874", "sp1":[ "23", "56","98","12","2", "26", "9","85","78","45" ],"Sales":"135745","sp2":[  "76", "7", "9"  ],"Sales Returns":"145632","Sale Prev":"5656","Growth":"-69","Channel":"84"},
    {"Client ID":"135","Client(Ext Ref ID)":"MB Batteries","Order":"137", "sp1":[ "30","98","12","74","65", "28","26", "9", "46","25" ],"Sales":"785354124","sp2":[ "64", "93", "9" ],"Sales Returns":"36524","Sale Prev":"5477","Growth":"45","Channel":"65"},
    {"Client ID":"136","Client(Ext Ref ID)":"UPS Service","Order":"4545", "sp1":[ "48", "98","26", "9","12","87","30","74", "9" ,"78"],"Sales":"3545245","sp2":[ "78", "7", "9"  ],"Sales Returns":"78541254","Sale Prev":"375421","Growth":"41","Channel":"47"},
    {"Client ID":"137","Client(Ext Ref ID)":"BB ElectronicWale","Order":"7854", "sp1":[ "98","12","30","74","12", "36", "45","78","95","65" ],"Sales":"5785523","sp2":[  "5", "50", "9" ],"Sales Returns":"78542","Sale Prev":"3571","Growth":"-64","Channel":"25"},
    {"Client ID":"121","Client(Ext Ref ID)":"BatteryBazaar Bangalore","Order":"8873", "sp1":[ "10", "50", "30","74","96","78","95","15","98","12" ],"Sales":"3744","sp2":[  "4", "28", "9" ],"Sales Returns":"1546","Sale Prev":"1645","Growth":"40","Channel":"45"},
    {"Client ID":"122","Client(Ext Ref ID)":"Bhopal Battery House","Order":"4545", "sp1":[ "5","98","12", "26", "9","30","74","9","30","74",  ],"Sales":"275782521","sp2":[ "75", "82", "9"],"Sales Returns":"35789","Sale Prev":"68985","Growth":"63","Channel":"68"},
    {"Client ID":"123","Client(Ext Ref ID)":"Sytleguts","Order":"8756", "sp1":[ "51","30","74", "9","98","12","1", "9","98","12" ],"Sales":"63751","sp2":["12", "36", "45" ],"Sales Returns":"145632","Sale Prev":"36527","Growth":"48","Channel":"-25"},
    {"Client ID":"124","Client(Ext Ref ID)":"M/S Triveni Battery house","Order":"3845", "sp1":[ "98","12","5", "50", "9" ,"98","12","5", "50", "9" ],"Sales":"78787","sp2":[  "23", "2", "85" ],"Sales Returns":"52147","Sale Prev":"68754","Growth":"24","Channel":"87"},
    {"Client ID":"133","Client(Ext Ref ID)":"Suraj Enterprises","Order":"4545", "sp1":[ "75", "12","5","30","74","96","78","95","82", "9" ],"Sales":"457457","sp2":[ "1", "2", "3" ],"Sales Returns":"7847","Sale Prev":"3245","Growth":"78","Channel":"-32"},
    {"Client ID":"133","Client(Ext Ref ID)":"Suraj Enterprises","Order":"4545", "sp1":["12","5", "75", "82", "9","30","74","96","78","95" ],"Sales":"457457","sp2":[ "1", "2", "3" ],"Sales Returns":"7847","Sale Prev":"3245","Growth":"78","Channel":"32"},
  ]
  $(function () {
    // for (var i = 0; i < 500; i++) {
    //   var d = (data[i] = {});
    //   d["title"] = "Record " + i;
    //   d["n1"] = Math.round(Math.random() * 10);
    //   d["n2"] = Math.round(Math.random() * 10);
    //   d["n3"] = Math.round(Math.random() * 10);
    //   d["n4"] = Math.round(Math.random() * 10);
    //   d["n5"] = Math.round(Math.random() * 10);
    // }
    grid = new Slick.Grid("#myGrid", datajson, columns, options);
  })

  var mygrid = $( window ).height();
$('#myGrid').css({'height': mygrid-350 + 'px'});