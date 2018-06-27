## image-2-map

SPFx WebPart to highlight interactive zones in images

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

## Demo & Examples

Live demo: [coldiary.github.io/react-image-mapper](http://coldiary.github.io/react-image-mapper/)

### Properties

|Props|type|Description|default|
|---|---|---|---|
|**Title**|*string*|WebPart Title|
|**Description**|*string*|WebPart Description|
|**Image URL**|*string*|Image source url| **required**|
|**Image width**|*number*|Image width|`Displayed width`|
|**Image height**|*number*|Image height|`Displayed height`|
|**Image Mapping**|*string*|Mapping description| `{ name: generated, areas: [ ] }`<br/>(see below) **required** |
|**Fill Color**|*string*|Fill color of the highlighted zone|`rgba(255, 255, 255, 0.5)`|
|**Stroke Color**|*string*|Border color of the highlighted zone|`rgba(0, 0, 0, 0.5)`|
|**Line Width**|*number*|Border thickness of the highlighted zone|`1`|
|**Toggle Map Highlighting**|*bool*|Enable/Disable highlighting|`true`|

Map is an object describing highlighted areas in the image.

Its structure is similar to the HTML syntax of mapping:   
	
- **map**: (*object*) Object to describe highlighted zones 
	- **name**: (*string*) Name of the map, used to bind to the image.
	- **areas**: (*array*) Array of **area objects** 
		- **area**: (*object*) Shaped like below :
		
|Property| type|Description|
|---|:---:|---|
|**_id**|*string*|Uniquely identify an area. Index in array is used if this value is not provided.|
|**shape**|*string*|Either `rect`, `circle` or `poly`|
|**coords**|*array of number*|Coordinates delimiting the zone according to the specified shape: <ul><li>**rect**: `top-left-X`,`top-left-Y`,`bottom-right-X`,`bottom-right-Y`</li><li>**circle**: `center-X`,`center-Y`,`radius`</li><li>**poly**: Every point in the polygon path as `point-X`,`point-Y`,...</li></ul>|
|**href**|*string*|Target link for a click in the zone (note that if you provide a onClick prop, `href` will be prevented)|

### Notes & Contributions

This a component is still a work in progress.

If you encounter a bug of some kind, feel free to report the issue.

If you'd like to improve this code or ask/advise for any improvement, feel free to comment it as well.


## License

Distributed with an MIT License. See LICENSE.txt for more details

Copyright (c) 2018 berndverhofstadt