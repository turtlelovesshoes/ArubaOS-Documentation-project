// JavaScript Document<script type="text/javascript"> 
    function newPopupAP(url, w, h) {
        var paramString = 'height=' + String(h);
        paramString += ',width=' + String(w);
        paramString += ',left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes';
        popupWindow = window.open(url,'popUpWindow',paramString);
    }

//iframe Page Target control 
   function go(loc){
            document.getElementById('calendar').src = loc;
        }
		 <!--
        function JumpToIt(list) {
            var newPage = list.options[list.selectedIndex].value
            if (newPage != "None") {
                parent.page.location=newPage;
            }
        }
        //-->
 function JumpToIt(list) {
        var newPage = list.options[list.selectedIndex].value
        if (newPage != "None") {
            page.location=newPage
        }
    }
         
 //This is where auto complete list starts starts 

<!-- Declare the array and store the values according to ur usage -->

var suggestions = new Array("aaa", "acceleration", "adp", "am", "ap", "ap-group", "ap-leds", "ap-name", "acceleration", "adp", "am", "ap", "ap-group", "ap-leds", "ap-name", "ap-regroup", "ap-rename", "apboot","apconnect", "apdisconnect", "apflash", "arp", "audit-trail", "banner", "boot", "cellular", "cfgm", "clear", "clock", "cluster", "configure", "control-plane-security", "controller-ip", "controller-ipv6", "copy", "cpbandwidth", "crypto", "crypto-local", "database", "delete", "destination", "dir", "dynamic-ip", "enable", "encrypt","esi_cli", "exit", "export", "firewall", "gateway", "guest-access-email", "halt", "help", "hostname", "ids", "interface", "ip", "ipv6", "lacp", "license", "local-custom-cert", "local-factory-cert", "local-userdb", "local-userdb-guest", "local-userdb-remote-node", "localip", "location","logging", "loginsession", "logout", "mac-address-table", "master-redundancy", "masterip", "mgmt-server", "mgmt-user", "mobility-manager", "mux-address", "mux-loop-prevention", "netdestination", "netdestination6", "netexthdr", "netservice", "networkprinter", "networkstorage", "ntp", "packet-capture", "packet-capture-defaults", "page", "paging", "panic", "papi-security", "pcap", "phonehome", "ping", "pkt-trace", "pptp", "priority-map", "process", "prompt", "provision-ap" ,"rap-wml", "reload", "reload-peer-sc", "remote-node-local-factory-cert", "remote-node-localip", "remote-node-masterip", "remote-node-profile", "rename", "restore", "rf", "rft", "router", "router ospf", "service", "show aaa", "show acceleration", "show acl", "show adp", "show ap", "show ap-group", "show ap-name", "show arp", "show audittrail", "show authtracebuf", "show banner", "show boot", "show cellular", "show clock","show cluster", "show commandmapping", "show configuration", "show controller-ipshow controller-ipv6", "show control-plane-security", "show country", "show cpbwcontracts", "show cpuload", "show crypto", "show crypto-local", "show database", "show datapath", "show destination", "show dialer", "show dir", "show dot1x", "show driver", "show esi", "show faults" , "show firewall", "show firewall-cp", "show gateway", "show global-user-table" , "show guest-access-email", "show hostname", "show ids", "show image", "show interface", "show inventory", "show iostat", "show ip", "show ip ospf", "show ip ospf interface", "show ipc", "show ipv6", "show keys", "show lacp", "show license", "show license-usage", "show local-cert-mac", "show local-userdb", "how local-userdb-guest", "show local-userdb-remote-node", "show localip", "show log", "show logging", "show loginsessions", "show mac-address-table" , "show masterconfigpending", "show masterlocal", "show masterredundancy", "show memory", "show mgmt-role", "show mgmtusers", "show mux", "show netdestination", "show netexthdr", "show netservice", "show netstat", "show network-printer", "show network-storage", "show ntp", "show packet-capture", "show packet-capture-defaults", "show papi-security", "show phonehome", "show poe", "show ports", "show prioritymap", "show processes", "show profile-errors", "show profile-heirarchy", "show profile-list", "show provisioning-ap-list", "show provisioning-params", "show rap-wml", "show references", "show remote-node", "show remote-node-dhcp-pool", "show remote-node-profile", "show rft", "show rf", "show rights", "show roleinfo", "show rrm", "show running-config", "show session-acl-list", "show slots", "show snmp", "show spanning", "show ssh", "show startup-config", "show station-table", "show storage", "show switch", "show switches", "show switchinfo", "show syscontact", "show syslocation", "show techsupport", "show telnet", "show timeranges", "show tpm-cert-info", "show trunk", "show uplink", "show usb", "show user", "show user-session-count", "show util_proc", "show valid-network-oui-profile", "show version", "show via", "show vlan", "show vlan-bwcontract", "show voice", "show vpdn", "show vpn-dialer", "show vrrp", "show web-server", "show whitelist-db", "show wlan", "show_wms", "shutdown", "snmp-server", "spanning-tree mode", "spanning-tree (PVST)", "spanning-tree (Config Interface)", "ssh", "stm", "support", "syscontact", "syslocation", "tar", "telnet", "time-range", "tracepath", "traceroute", "trusted", "uplink", "usb", "usb-printer", "user-role", "valid-network-oui-profile", "vlan", "vlan-bwcontract", "vlan-name", "voice", "voip", "vpdn", "vpn-dialer", "vrrp", "web-server", "whitelist-db", "whoami", "wlan", "wms", "wms-local", "write");


var outp;
var oldins;
var posi = -1;
var words = new Array();
var input;
var key;
// This function sets the style of the autocomplete box
function setVisible(visi){
  var x = document.getElementById("shadow");
  var t = document.getElementsByName("text")[0];
  x.style.position = 'absolute';
  x.style.top = (findPosY(t)+3)+"px";
  x.style.left = (findPosX(t)+2)+"px";
  x.style.visibility = visi;
}

function init(){
  outp = document.getElementById("output");
  window.setInterval("lookAt()", 100);
  setVisible("hidden");
  document.onkeydown = keygetter; //needed for Opera...
  document.onkeyup = keyHandler;
}

function findPosX(obj){
	var curleft = 0;
	
	if (obj.offsetParent){
    	while (obj.offsetParent){
      		curleft += obj.offsetLeft;
			 obj = obj.offsetParent;
		}
	}

  	else if (obj.x)
   	 curleft += obj.x;
	 
	 return curleft;

}

function findPosY(obj){

  var curtop = 0;
  if (obj.offsetParent){
    curtop += obj.offsetHeight;
    
	while (obj.offsetParent){
		curtop += obj.offsetTop;
		obj = obj.offsetParent;
     }
   }
   else if (obj.y){
     curtop += obj.y;
     curtop += obj.height;
   }

   return curtop;
}

function lookAt(){
	
   var ins = document.getElementsByName("text")[0].value;

   if (oldins == ins)
      return;

   else if (posi > -1);

   else if (ins.length > 0){
     words = getWord(ins);
     if (words.length > 0){
        clearOutput();
        for (var i=0;i < words.length; ++i)
             addWord (words[i]);
        setVisible("visible");
        input = document.getElementsByName("text")[0].value;
     }
     else{
       setVisible("hidden");
        posi = -1;
     }
   }
   else{
    setVisible("hidden");
    posi = -1;
   }
   oldins = ins;
}

function addWord(word){
  var sp = document.createElement("div");
  sp.appendChild(document.createTextNode(word));
  sp.onmouseover = mouseHandler;
  sp.onmouseout = mouseHandlerOut;
  sp.onclick = mouseClick;
  outp.appendChild(sp);
}

function clearOutput(){

  while (outp.hasChildNodes()){
    noten=outp.firstChild;
    outp.removeChild(noten);
  }
   posi = -1;
}

function getWord(beginning){

  var words = new Array();
 
  for (var i=0;i < suggestions.length; ++i) {
    var j = -1;
    var correct = 1;
    while (correct == 1 && ++j < beginning.length)
    {
     if (suggestions[i].charAt(j) != beginning.charAt(j))
         correct = 0;
    }
    if (correct == 1)
       words[words.length] = suggestions[i];
  }
      return words; 
}      

function setColor (_posi, _color, _forg){
   outp.childNodes[_posi].style.background = _color;
   outp.childNodes[_posi].style.color = _forg;
}

function keygetter(event){

  if (!event && window.event) 
      event = window.event;
  if (event)
     key = event.keyCode;
  else
      key = event.which;
}

function keyHandler(event){

  if (document.getElementById("shadow").style.visibility == "visible"){

     var textfield = document.getElementsByName("text")[0];
     if (key == 40)//key down{ 
        if (words.length > 0 && posi <= words.length-1)
        {
          if (posi >=0)
            setColor(posi, "#fff", "black");
          else 
             input = textfield.value;
             setColor(++posi, "blue", "white");
             textfield.value = outp.childNodes[posi].firstChild.nodeValue;
        }
      }
      else if (key == 38){
		  //Key up
        if (words.length > 0 && posi >= 0){
           if (posi >=1)
           {
             setColor(posi, "#fff", "black");
             setColor(--posi, "blue", "white");
             textfield.value = outp.childNodes[posi].firstChild.nodeValue;
           }
           else{
              setColor(posi, "#fff", "black");
              textfield.value = input;
              textfield.focus();
              posi--;
           }
         }
        }
         else if (key == 27){ // Esc
            textfield.value = input;
            setVisible("hidden");
            posi = -1;
            oldins = input;
          }
          else if (key == 8) { // Backspace
            posi = -1;
            oldins=-1;
          } 
              }

   }
    var mouseHandler=function() {
      for (var i=0; i < words.length; ++i)
        setColor (i, "white", "black");
     	this.style.background = "blue";
        this.style.color= "white";
     }
     var mouseHandlerOut=function(){
       this.style.background = "white";
       this.style.color= "black";
     }
     var mouseClick=function()
     {
        document.getElementsByName("text")[0].value = this.firstChild.nodeValue;
        setVisible("hidden");
        posi = -1;
        oldins = this.firstChild.nodeValue;
     }

