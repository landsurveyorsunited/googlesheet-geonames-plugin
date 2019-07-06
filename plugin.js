function geoname_responce( name, admin1code, id, fuzzy ) {
  if (typeof admin1code === "number") {
    admin1code = "0" + admin1code.toString();
  } else{
  }
  name = name.trim().split(' ').join('%20');

  var url = "http://api.geonames.org/search?style=MEDIUM&country=MM&maxRows=10&landsurveyors=" + id + "&fuzzy=" + fuzzy + "&name=" + name + "&adminCode1=" + admin1code;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var doc = XmlService.parse(xml);  
 
  function get(input){
    return doc.getRootElement().getChildText( input );
  }
  
  return get("totalResultsCount")
  
}

function geoname_name( name, admin1code, id, fuzzy ) {


  name = name.trim().split(' ').join('%20');

  var url = "http://api.geonames.org/search?style=MEDIUM&country=MM&maxRows=10&landsurveyors=" + id + "&fuzzy=" + fuzzy + "&name=" + name + "&adminCode1=" + admin1code;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var doc = XmlService.parse(xml);  
 
  function get(input){
    return doc.getRootElement().getChild('geoname').getChildText( input );
  }
  
  return get("toponymName")

 
    
    
  
}

function geoname_lat( name, admin1code, id, fuzzy ) {


  name = name.trim().split(' ').join('%20');

  var url = "http://api.geonames.org/search?style=MEDIUM&country=MM&maxRows=10&landsurveyors=" + id + "&fuzzy=" + fuzzy + "&name=" + name + "&adminCode1=" + admin1code;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var doc = XmlService.parse(xml);  
 
  function get(input){
    return doc.getRootElement().getChild('geoname').getChildText( input );
  }
  
  return get("lat")
    
  
}

function geoname_long( name, admin1code, id, fuzzy ) {


  name = name.trim().split(' ').join('%20');

  var url = "http://api.geonames.org/search?style=MEDIUM&country=MM&maxRows=10&landsurveyors=" + id + "&fuzzy=" + fuzzy + "&name=" + name + "&adminCode1=" + admin1code;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var doc = XmlService.parse(xml);  
 
  function get(input){
    return doc.getRootElement().getChild('geoname').getChildText( input );
  }
  
  return get("lng")
    
  
}
