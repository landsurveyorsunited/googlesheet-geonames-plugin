# googlesheet-geonames-plugin
a collection of functions for google sheets querying of geonames server


## The Functions
1. **geoname_responce**(*name*, *admin1code*, *id*, *fuzzy*)
Returns the number of responces for place *name*.

2. **geoname_name**(*name*, *admin1code*, *id*, *fuzzy*)
Returns the first matched instance of geoname lookup for *name*.

3. **geoname_lat**(*name*, *admin1code*, *id*, *fuzzy*)
Returns Latitude for the first matched instance of geoname lookup for *name*.

4. **geoname_long**(*name*, *admin1code*, *id*, *fuzzy*)
Returns Longitude for the first matched instance of geoname lookup for *name*.



##Directions
* The functions in this plugin require your geonames user name so if you have not created one yet go to [](geonames.org) and do so now.
* All four functions take place-name, admin 1 code, user id and a fuzzy logic parameter. 
* The fuzzy logic parameter should be between 0 and 1 and will determine how closely the geonames API requires matches to be - with 1 being a perfect match.
