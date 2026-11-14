
function Run() {
    // Get the geographic points from data.js
    var data = theJSON.data;

    // Find the four corners
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    // Create the bounding box object
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    // Print results to the console
    console.log("Bounding box computed for kellywilliams1990@tamu.edu:");
    console.log(boundingBox);
}

// Find maximum and minimum latitude/longitude
function getBounds(data) {
    var minLat = data[0].lat;
    var maxLat = data[0].lat;
    var minLon = data[0].lon;
    var maxLon = data[0].lon;

    data.forEach(function(point) {
        if (point.lat < minLat) minLat = point.lat;
        if (point.lat > maxLat) maxLat = point.lat;
        if (point.lon < minLon) minLon = point.lon;
        if (point.lon > maxLon) maxLon = point.lon;
    });

    return {
        minLat: minLat,
        maxLat: maxLat,
        minLon: minLon,
        maxLon: maxLon
    };
}

// Top left = maximum latitude, minimum longitude
function findTopLeft(data) {
    var bounds = getBounds(data);
    return {lat: bounds.maxLat, lon: bounds.minLon};
}

// Top right = maximum latitude, maximum longitude
function findTopRight(data) {
    var bounds = getBounds(data);
    return {lat: bounds.maxLat, lon: bounds.maxLon};
}

// Bottom left = minimum latitude, minimum longitude
function findBottomLeft(data) {
    var bounds = getBounds(data);
    return {lat: bounds.minLat, lon: bounds.minLon};
}

// Bottom right = minimum latitude, maximum longitude
function findBottomRight(data) {
    var bounds = getBounds(data);
    return {lat: bounds.minLat, lon: bounds.maxLon};
}
