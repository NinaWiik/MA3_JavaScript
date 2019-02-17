    var video = [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]

for ( key in video) {
    if (video.hasOwnProperty(key)) {
        console.log(video[0].id);
        console.log(video[0].name);
        console.log(video[0].url);
        console.log(video[0].author);
    }
};