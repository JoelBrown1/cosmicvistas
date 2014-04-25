( function(){
	$(document).ready( function(){
		// testing for modernizr stuff
		var alternate = Modernizr.csstransitions;

		var counter = 0;
		var clickedIndex;
		var ScreenIndex = 0;

		var activeNav;

		var windowW = $(window).innerWidth()/2;
		var windowH = $(window).innerHeight()/2;

		$("#preLoader").css({
			top: (windowH - ($("#preLoader").height()/2)) + "px",
			left: (windowW - ($("#preLoader").width()/2)) + "px"
		})
		var delaySettings = [ 500, 500, 750, 1500, 2000, 3000 ];

		var hotSpotIndex = [
			{
				year: 		1960,
				slideTitle: " 1960s",
				slideDesc: 	"The 1960s was the dawn of a new age of human exploration. After the Soviet Union’s launch of Sputnik 1 on October 4, 1957, the U.S. and U.S.S.R. competed to be the first to achieve orbital human spaceflight. The Space Race had begun.", 
				titles: 	[ "Mercury_Missions", "Gemini_Missions", "Apollo_Missions", "Moon_Landing" ], 
				tip: 		[ "Mercury Missions", "Gemini Missions", "Apollo Missions", "Moon Landing" ], 
				top: 		[ -77, 93, -129, -126 ],
				left: 		[ -217, -181, 170, 351 ],
				data:		[
								{
									title:		"Mercury Missions", 
									subTitle:	"1951-1963", 
									desc:		"Led by the recently formed NASA, Project Mercury was the first human spaceflight program in the United States. The goal of the program was to achieve the first instance of manned spaceflight by successfully launching a person into orbit. On May 5, 1961, the U.S. launched their first manned rocket into suborbital space, making astronaut Alan Shepard the first American in space.", 
									image:		"1960_Mercury.jpg"
								},
								{
									title:		"Gemini Missions", 
									subTitle:	"1962-1966", 
									desc:		"Project Gemini was the second human spaceflight program led by NASA. These missions were generally a follow-up to Project Mercury in support of the Apollo Missions, which had the ultimate goal of landing a man on the moon. The main objective of Gemini was to test the astronauts’ endurance and their equipment, both inside and outside the spacecraft.", 
									image:		"1960_Gemini.jpg"
								},
								{
									title:		"Apollo Missions", 
									subTitle:	"1961-1972", 
									desc:		"July 20th, 1969 marks a significant date in human space exploration, as mankind makes their first steps on the surface of the moon. NASA’s Apollo 11 mission successfully launched astronauts Buzz Aldrin, Neil Armstrong and Michael Collins into lunar orbit. Millions of people across the globe watched from their television sets as Aldrin and Armstrong stepped foot upon the Moon’s surface, a moment forever captured with Armstrong’s famous words: “That’s one small step for man, one giant leap for mankind.” Collins kept Apollo 11 in orbit until his fellow astronauts could make the safe return back to the spacecraft for the trip back home.", 
									image:		"1960_Apollo.jpg"
								},
								{
									title:		"Moon Landing", 
									subTitle:	"July 20, 1969", 
									desc:		"Mankind first landed on the Moon. The United States’ Apollo 11 mission successfully brought astronauts Buzz Aldrin and Neil Armstrong to Earth’s moon. Michael Collins piloted the spacecraft alone in lunar orbit until Aldrin and Armstrong made their return aboard for the trip back to Earth. The momentous occasion was broadcast internationally on live TV. This event also marked the end of the Space Race between the U.S. and the Soviet Union.", 
									image:		"1960_MoonLanding.jpg"
								}
					]
			},
			{
				name: 		"Viking",
				slideTitle: " 1970s",
				slideDesc: 	"Following the success of the moon landing, mankind was driven to explore further and further into the solar system. NASA launched probes to Mars, Jupiter, Saturn, Uranus and Neptune, and we received some amazing images of our neighboring planets. This decade also marked the end of the Space Race, and the first co-op mission between the U.S. and U.S.S.R., the Apollo-Soyuz Test Project.", 
				titles: 	[ "Space_Race_End", "Viking_Missions", "Mars" ], 
				tip: 		[ "The end of the space race", "Viking Missions", "Mars" ], 
				top: 		[ 24, -59, 46 ],
				left: 		[ -86, 144, 269 ],
				data:		[
								{
									title:		"End of the Space Race", 
									subTitle:	"Early 1970s", 
									desc:		"Following the success of NASA’s Apollo 11 mission, and with U.S. President Richard Nixon and Soviet Premier Leonid Brezhnev working toward easing relations between the United States and the Soviet Union, the space race officially came to an end. This occasion is marked by a joint mission between the two nations, the Apollo-Soyuz Test Project, launched on July 15th, 1975. The mission would see NASA’s final Apollo shuttle dock with the Soyuz spacecraft, a significant moment that paved the way for future space exploration projects, such as the International Space Station.", 
									image:		"1970_SpaceRace.jpg"
								},
								{
									title:		"The Viking Missions", 
									subTitle:	"1975", 
									desc:		"Viking 1 and Viking 2, launched within just a few weeks of one another, gave us an exclusive look at the surface of Mars. The landers provided us with detailed color photos and studies of the planet’s atmosphere, soil composition, meteorology and seismology, all in the hopes of finding signs of life. Though life was never found, we did learn that the Red Planet shares many similarities to our own, including changing weather patterns and dustings of frost on its surface.", 
									image:		"1970_Viking.jpg"
								},
								{
									title:		"Mars", 
									subTitle:	"1975", 
									desc:		"Mars is the second smallest planet in our solar system and the fourth furthest from the Sun. A terrestrial planet with a low-pressure atmosphere, Mars shares many characteristics with the surface of Earth, including volcanoes, valleys, deserts and polar ice caps. Even the planet’s rotation and seasonal cycles are similar to our own. The Red Planet also houses the second-highest known mountain in our solar system, Olympus Mons, as well as one of the largest canyons, known as Valles Marineris. Orbiting close to the Red Planet are Mars’ two moons, Phobos and Deimos, which are thought to be captured asteroids due to their size and irregular shape. And what causes Mars’ reddish appearance? The iron oxide that prevalently coats its surface.", 
									image:		"1970_Mars.jpg"
								}
				]
			},
			{
				name: 		"Voyager",
				slideTitle: " 1970s",
				slideDesc: 	"Following the success of the moon landing, we were driven to explore further and further out into our own Solar System. NASA launched probes to Mars, Jupiter, Saturn, Uranus and Neptune, and we received some amazing images of our neighboring planets. This decade also marks the end of the Space Race, and the first co-op mission between the US and USSR, the Apollo-Soyuz Test Project.", 
				titles: 	[ "Jupiter_Missions", "Saturn_Missions", "Voyager_Missions",  "Uranus_Mission", "Triton_Mission", "Neptune_Mission" ], 
				tip: 		[ "Jupiter", "Saturn", "Voyager Missions", "Uranus", "Neptune", "Triton" ], 
				top: 		[ 25, 21, -80, 12, -35, 11 ],
				left: 		[ 55, 132, 209, 288, 461, 467 ],
				data:		[
								{
									title:		"Jupiter", 
									subTitle:	"1977", 
									desc:		"Jupiter, the largest planet in our solar system, is primarily composed of gaseous and liquid matter. It’s approximately 100 times larger than Earth, with 10 times the surface pressure. It takes around 12 years for this planet to perform a complete orbit around the Sun. In the following image, we see a close-up view of Jupiter taken by the Voyager spacecraft. The Great Red Spot, visible in the lower-half of the photo, indicates a persistent anti-cyclonic storm in the planet’s atmosphere and is thought to be a stable, permanent fixture.", 
									image:		"1970_Jupiter.jpg"
								},
								{
									title:		"Saturn", 
									subTitle:	"1977", 
									desc:		"The second largest planet in our solar system and the sixth from the Sun, Saturn is noted for its prominent ring system, which consists of nine complete rings and three discontinuous arcs. Saturn has nine times the radius of Earth and approximately one-eighth the density. It’s the only planet in our solar system that is less dense than water.", 
									image:		"1970_Saturn.jpg"
								},
								{
									title:		"Voyager Missions", 
									subTitle:	"1977", 
									desc:		"The launch of Voyager 1 and 2 took us further into our own galaxy, providing us with images of Jupiter, Saturn, Uranus and Neptune.</p><p>A 12-inch, gold-plated phonograph record, which contained a collection of sounds and images that best portrayed the diversity of life and culture on Earth, was placed on the Voyager. Included were more than 100 different languages, music samples from a selection of different genres, and various sound clips of animals and the natural world.", 
									image:		"1970_Voyager.jpg"
								},
								{
									title:		"Uranus", 
									subTitle:	"1977", 
									desc:		"Uranus has the coldest planetary atmosphere of any planet in our solar system, with a minimum temperature of minus 224.2 degrees Celsius. Uranus’ interior is mainly composed of ice and rock. One distinct feature of the planet is its axis of rotation, which unlike other planets, is tilted sideways. This means that Uranus’ poles lie where other planets’ equator would be.", 
									image:		"1970_Uranus.jpg"
								},
								{
									title:		"Neptune", 
									subTitle:	"1977", 
									desc:		"Neptune is not only the farthest planet from the Sun, but of the four gas giants in our solar system, it is also the densest. Neptune’s atmosphere is noted for its very active weather patterns, driven by strong winds of up to 2,100 km an hour, making them some of the strongest winds on any planet in our solar system.", 
									image:		"1970_Neptune.jpg"
								},
								{
									title:		"Triton", 
									subTitle:	"Voyager Missions<br>1977", 
									desc:		"Triton is the largest of Neptune’s 14 known moons. It is also one of the few moons in the solar system to be geologically active. Oddly enough, Triton’s rotation travels opposite to Neptune’s, an unusual phenomenon for a moon.</p><p>Scientists believe that Triton may have been a dwarf planet that was captured into Neptune’s orbit from the Kuiper Belt. The Kuiper Belt is a region of the solar system beyond the planets that houses small bodies of ice, as well as the former ninth planet, Pluto.</p>", 
									image:		"1970_Triton.jpg"
								}
				]
			},
			{
				year: 		1980,
				slideTitle: " 1980s",
				slideDesc: 	"To better understand the nature of our solar system’s single star, NASA launched the Solar Maximum Mission on February 14, 1980. The mission was primarily designed to investigate gamma rays, X-rays and UV radiation from solar flares. This decade also saw the start of NASA’s Space Shuttle program with the launch of the Columbia on April 12th, 1981.", 
				titles: 	[ "Solar_Flares", "Sun", "Aurora_Borealis", "Space_Shuttle" ], 
				tip: 		[ "Solar Flares", "The Sun", "Aurora Borealis", "The Space Shuttle" ], 
				top: 		[ 53, -77, -34, 10 ],
				left: 		[ -300, -299, -10, -10 ],
				data:		[
								{
									title:		"Solar Flares", 
									subTitle:	"1981", 
									desc:		"A solar flare is characterized by the sudden brightening observed over the Sun’s surface as well as the appearance of a solar limb.</p><p>The amount of energy released in a solar flare is only about one-sixth the total amount of energy the Sun puts out each second. That’s equivalent to the amount of energy put out by 160,000,000 megatons of TNT. When a flare occurs clouds of electrons, ions and atoms are ejected into space; it takes one to two days for these clouds to reach Earth.  </p>", 
									image:		"1980_SolarFlares.jpg",
								},
								{
									title:		"The Sun", 
									subTitle:	"1980", 
									desc:		"At the center of our solar system, lying approximately 150,000,000 km away from Earth is the 4.6 billion-year-old star known as the Sun. This star is composed of hot plasma interwoven by magnetic fields that burn at temperatures of around 5,505 degrees Celsius. Its diameter is about 109 times bigger than the Earth’s and accounts for approximately 99 percent of the total mass of our solar system.</p><p>It takes approximately eight minutes and 19 seconds for light to travel from the Sun to the Earth.</p>", 
									image:		"1980_Sun.jpg",
									video: 		'-4zllJmQLk4'
								},
								{
									title:		"The Aurora Borealis", 
									subTitle:	"1981", 
									desc:		"At the very edge of our atmosphere, protecting us from the harsh radiation of the Sun is Earth’s invisible magnetosphere. Once protons from the Sun interact with this field and excite the electrons that make it up, a brilliant light display fills the sky. The different colors represent the different activity levels and gasses that make up our atmosphere.", 
									image:		"1980_Aurora.jpg",
									video: 		'by-vHJLmvxs'
								},
								{
									title:		"The Space Shuttle", 
									subTitle:	"1981-2011", 
									desc:		"NASA’s Space Shuttle was the first operational spacecraft designed to be used more than once. From 1981 to 2011, the shuttle served on a total of 135 missions, including the launching of satellites, interplanetary probes, the Hubble Space Telescope, as well as participating in the construction of the International Space Station. Four fully operational orbiters were initially built: Columbia, Challenger, Discovery and Atlantis. A fifth shuttle, the Endeavour, was built as a replacement following the tragic events of the Challenger’s fatal tenth launch. The Space Shuttle was retired on July 21, 2011, following the conclusion of Atlantis’ 33rd and final mission.", 
									image:		"1980_Shuttle.jpg"
								}
				]
			},
			{
				year: 		1990,
				slideTitle: " 1990s",
				slideDesc: 	"The ‘90s brought great technological developments that allowed us to better understand our universe. The Hubble Space Telescope gave scientists a clearer idea of just how old our universe is and provided detailed images of galaxies that are millions of light-years away. The launch of the International Space Station meant new opportunities for astronauts and researchers to study space, and gave those of us on Earth a window into what life in orbit is like.", 
				titles: 	[ "Cat_Eye_Nebula", "Hubble_Telescope", "ISS" ], 
				tip: 		[ "Cat's Eye Nebula", "Hubble Telescope", "International Space Station" ], 
				top: 		[ -47, 43, -46 ],
				left: 		[ -341, 68, 167 ],
				data:		[
								{
									title:		"The Cat’s Eye Nebula", 
									subTitle:	"1994", 
									desc:		"Lying approximately 3500 light-years away from our own galaxy is The Cat’s Eye Nebula. Cataloged NGC 6543, this nebula is located toward the constellation of Draco. The spherical structures that surround the galaxy were created by the star’s ejection of gaseous layers and spherical shells.", 
									image:		"1990_CatEye.jpg"
								},
								{
									title:		"Hubble Telescope Launch", 
									subTitle:	"April 24, 1990", 
									desc:		"To help answer questions about the vastness of space, the number of planets that lie beyond our solar system, and to define the nature of dark matter, NASA launched the Hubble Space Telescope into low Earth orbit on April 24th, 1990. Since then, Hubble has provided us with extremely high-res images of deep space, allowing us to view a multitude of galaxies. The space telescope has also helped scientists measure the age of the universe, which is estimated to be approximately 13.2 billion years old.", 
									image:		"1990_Hubble.jpg"
								},
								{
									title:		"International Space Station<br>(ISS)", 
									subTitle:	"1998", 
									desc:		"Sitting in low Earth orbit, the International Space Station is a habitable artificial satellite that functions as a research lab, observatory and factory. It also serves various diplomatic, cultural and educational roles, as astronauts have been using amateur radio, videolink and even YouTube to communicate to classrooms, businesses and homes across the globe.<br>The ISS first came about as a collaborative program between five major space agencies from across the globe: NASA, Roskosmos, JAXA, ESA and CSA agreed to combine their respective space station projects into one, sole station. The International Space Station represents the longest ongoing human presence in space, as it has been continuously occupied for more than 13 years.", 
									image:		"1990_ISS.jpg"
								}
				]
			},
			{
				year: 		2000,
				slideTitle: " 2000s",
				slideDesc: 	"Since the launch of the Hubble Space Telescope in the early ‘90s, scientists have been able to see deeper and deeper into time and space. The Hubble Deep Field images have given scientists a unique window into the universe, revealing galaxies that are billions of light-years away.", 
				titles: 	[ "WhirlPool_Galaxy", "Extreme_Space", "Orion_Nebula" ], 
				tip: 		[ "WhirlPool Galaxy", "Extreme Deep Field", "Great Orion Nebula" ], 
				top: 		[ 40, -80, -38 ],
				left: 		[ -323, -185, 248 ],
				data:		[
								{
									title:		"The Whirlpool Galaxy", 
									subTitle:	"2005", 
									desc:		"The Whirlpool Galaxy, or Messier 51a, is one of the best-known spiral galaxies in the sky. Located in the constellation Canes Venatici, it is estimated that M51a lies approximately 31 million light-years away. One distinguishing characteristic of M51a is that it is connected through a dust-rich tidal bridge to a companion dwarf galaxy known as NGC 5195 or Messier 51b. Under dark sky conditions, you can view this pair of companion galaxies through binoculars or a telescope.", 
									image:		"2000_whirlPool.jpg"
								},
								{
									title:		"Extreme Deep Field", 
									subTitle:	"2004", 
									desc:		"The Hubble Extreme Deep Field (XDF) is an image of a small piece of space at the center of the Hubble Ultra Deep Field in the constellation of Fornax. The photo, which was created by combining ten years of Hubble Space Telescope photography, shows the deepest optical view in space and adds another 5,500 galaxies to those already discovered in the Hubble Ultra Deep Field. The faintest galaxies in the image are one ten-billionth the brightness of what the human eye can see.", 
									image:		"2000_extremeSpace.jpg"
								},
								{
									title:		"Great Orion Nebula", 
									subTitle:	"Hubble Telescope", 
									desc:		"Lying at approximately 1344 light-years away from Earth, Messier 42 (also known as the Great Orion Nebula) is a diffuse nebula found south of Orion’s Belt in the constellation of Orion.  Cataloged NGC 1976, this nebula contains four massive stars that burn 100,000 times brighter than our Sun, making it one of the brightest nebulae in the universe. Though the Hubble Space Telescope first observed Messier 42 in the early ‘90s, it didn’t finish capturing detailed images of Orion until a decade later, after 104 orbits of the nebula.", 
									image:		"2000_Orion.jpg"
								}
				]
			},

		]

		var popUpImg = [
			"images/1960_Apollo.jpg",
			"images/1960_Gemini.jpg",
			"images/1960_Mercury.jpg",
			"images/1960_MoonLanding.jpg",
			"images/1970_Jupiter.jpg",
			"images/1970_Mars.jpg",
			"images/1970_Neptune.jpg",
			"images/1970_Saturn.jpg",
			"images/1970_SpaceRace.jpg",
			"images/1970_Triton.jpg",
			"images/1970_Uranus.jpg",
			"images/1970_Viking.jpg",
			"images/1970_Voyager.jpg",
			"images/1980_Aurora.jpg",
			"images/1980_Shuttle.jpg",
			"images/1980_SolarFlares.jpg",
			"images/1980_Sun.jpg",
			"images/1990_CatEye.jpg",
			"images/1990_Hubble.jpg",
			"images/1990_ISS.jpg",
			"images/2000_extremeSpace.jpg",
			"images/2000_Orion.jpg",
			"images/2000_whirlPool.jpg"
		];

		var screensArray = [
			"images/earth.png",
			"images/fourPlanets.png",
			"images/solarSystem.png",
			"images/solarOut.png",
			"images/galaxy.png",
			"images/universe.png"			
		];

		var bgndImg = ["images/stars.png"];

		var images = screensArray.concat(bgndImg, popUpImg);

		var subDisplayed = false;

		preLoadImages();

		function preLoadImages(){
			// preload images for the experience
			var loaded = 0;
			for (var i = 0; i < images.length; i++) {
			    (function(img) {
			        images[img] = ($("<img/>").attr("src", images[img] + "?" + new Date().getTime()).load(function() {
			            loaded++;
			            $("#counter").html(loaded+"/"+images.length);
			            if (loaded == images.length) {
			            	hidePreLoader()
							init();
			            }
			        }));
			    })(i);
			}

		}

		function hidePreLoader(){
			
			$("#preLoader").fadeOut( function(){
				$("#preLoader").remove();
			});
			
		}

		function init(){
			// make everything visilbe to start
			$("#container").css("opacity", 1);
			$("footer").css("opacity", 1);

			$(document.body).css("background-image", "url("+bgndImg[0]+")");

			// populating the images into the dom
			for( k = 0; k<screensArray.length; k++ ){

				// $(".screen").eq(k).append("<img src='"+screensArray[k]+"' />");
				$(".screen").eq(k).css("background-image", "url("+screensArray[k]+")");
			}

			$(".yearBtn").on("click", mouseClick);
			
			placeMarkers( ScreenIndex );

			$("#hotSpotContainer").on("click", getPop);

			$(".screen").eq(0).addClass("active");
			
			$(window).on( "resize", calScreenSize );

			$(".yearBtn").eq(ScreenIndex).addClass("nActive");

			popHeader(ScreenIndex);
		}

		function popHeader( num ){
			$(".headerContainer>h2").text(hotSpotIndex[num].slideTitle);
			$(".headerContainer>p").text(hotSpotIndex[num].slideDesc);

			$(".headerContainer").addClass("visible");
		}

		function mouseClick( evt ){

				var btnName;
	
				if($(this).hasClass("yearBtn")){
					$(".nActive").removeClass("nActive");
				} else {
					$(".sdNavActive").removeClass("sdNavActive");
				}
				if($(this).hasClass("yearBtn")){			
					$(this).addClass("nActive");
					if(!$(".sdNavBtn").eq(0).hasClass("sdNavActive")){
					 	$(".sdNavBtn").removeClass("sdNavActive");
					 	$(".sdNavBtn").eq(0).addClass("sdNavActive");
					}
				} else {
					 $(this).addClass("sdNavActive");
				}
			
				// activeNav.removeClass("nActive").removeAttr("style");
				if( $(evt.currentTarget).children().length > 0 ){
					if($(this).hasClass("viking")){
						btnName = "VIKING";
					} else if($(this).hasClass("voyager")){
						btnName = "VOYAGER";
					}
				} else {
					btnName = $(evt.currentTarget).html();
				}

				switch(btnName){
					case "1960":
						clickedIndex =0;
						break;
					case "1970":
						clickedIndex =1;
						break;
					case "1980":
						clickedIndex =3;
						break;
					case "1990":
						clickedIndex =4;
						break;
					case "2000":
						clickedIndex =5;
						break;
	
					// this is set like this because there are 2 different ways to get to the Viking mission screens
					case "VIKING":
						clickedIndex = 1;
						break;
					// technically there is only 1 way to get to the Voyager screen, you have to see the Viking screen first for the subNav
					case "VOYAGER":
						clickedIndex = 2;
						break;
				}
		
				if(clickedIndex != ScreenIndex){
					$(".headerContainer").removeClass("visible");	
					screenTransition();
				}
				if( clickedIndex == 1 && subDisplayed == false ){
					showSubNav("show");
				} else if ( clickedIndex < 1 ||  clickedIndex > 2 && subDisplayed == true ){
					showSubNav("hide");
				}
			
		}

		function calScreenSize( evt ){
			windowW = $(window).innerWidth()/2;
			windowH = $(window).innerHeight()/2;
			clearMarkers();
			placeMarkers( ScreenIndex );

		}

		function placeMarkers( num ){
			// re-writing to take into accound the screen size
			var numOfMarkers = hotSpotIndex[num].top.length;

			for( var i = 0; i<numOfMarkers; i++){
				hotSpotMarker( hotSpotIndex[num], i );
			}
		}

		function clearMarkers(){
			$(".hotSpot").remove();
		}

		function hotSpotMarker( obj, index ){
			var identifier = obj.titles[index];
			var tipTag = obj.tip[index].toUpperCase();
			var posTop = windowH + obj.top[index];
			var posLeft = windowW + obj.left[index];
			var marker = "<div id='"+identifier+"' class='hotSpot tip'></div>";

			$("#hotSpotContainer").append(
				$(marker).attr("data-tip", tipTag).css({
					top: 	posTop+"px",
					left: 	posLeft+"px"
				}).tipr({
					'speed'	: 300,
					"mode"	: 'top'
				})
			);

		}


		function getPop( evt ){
			if( $(evt.target).attr('id') != "hotSpotContainer"){
				// test to see if we can get the different values in the top and left properties of the hotSpotIndex
				var popUpName = $(evt.target).attr('id');
				var dataObj = getDataIndex(popUpName);

				var headLine = dataObj.title.toUpperCase();
				var year = dataObj.subTitle;
				var context = dataObj.desc;


				var template = '<div class="outter-popup">'+
									'<div class="mfp-close"></div>'+
									'<div id="leftSection"></div>'+
									'<div id="rightSection"></div>'+
								'</div>';			

				$.magnificPopup.open({
					key: 'my-popup', 
					items: dataObj,
					type: 'inline',
					inline: {
						markup: template
					},
					mainClass: 'mfp-fade',
					gallery: {
						enabled: false 
					},
					callbacks: {
						markupParse: function(template, values, item) {
						},

						open: function() {

								$("#leftSection").append('<h1>'+headLine+'</h1><span>'+year+'</span><p>'+context+'</p>');
								$("#rightSection").append(
									$("<img/>").attr("src", 'images/'+dataObj.mainImg).attr("id", "popImg").load(function() {
							            var imgW = $(this).width();
										var txtW = $("#leftSection").width();
										var totalWidth = txtW + imgW;
							            $(".outter-popup").css("width", totalWidth+ "px");
					        		
										if( dataObj.vid != undefined ){

							        		$("#rightSection").on("click", function(){
							        			$(".outter-popup").append("<div  id='vidContainer'><div id='vid'><iframe width='"+totalWidth+"' height='"+$(".outter-popup").height()+"' src='//www.youtube.com/embed/"+dataObj.vid+"' frameborder='0' allowfullscreen></iframe></div></div>");
							        		}).addClass("thumbBtn");
								        };

					        		})
				        		);

						},

						close: function(){
							$("#leftSection>h1").remove();
							$("#leftSection>span").remove();
							$("#leftSection>p").remove();
							$("#popImg").remove();

							if($("#vidContainer")){
								$("#vidContainer").remove();
							}
							
						}

					}
				});
			}
		}

		function getDataIndex( hotSpotName ){

			var dataSet = hotSpotIndex[ScreenIndex];

			for( var k = 0; k<dataSet.titles.length; k++){
				if( dataSet.titles[k] == hotSpotName ){

					var index = k;
					break;
				}
			}

			var compiledData = {
				title: 		dataSet.data[k].title,
				subTitle: 	dataSet.data[k].subTitle,  
				desc: 		dataSet.data[k].desc,
				mainImg: 	dataSet.data[k].image, 
				vid: 		dataSet.data[k].video
			}

			return compiledData;
		}

		function showSubNav(action){
			switch( action ){
				case "show":
					subDisplayed = true;
					$(".sNav").addClass("sNavShow").removeClass("sNavHidden");
					$(".sdNavBtn").on("click", mouseClick);
					break;

				case "hide":
					subDisplayed = false;
					$(".sNav").addClass("sNavHidden").removeClass("sNavShow");
					$(".sdNavBtn").off("click", mouseClick);
					break;
			}
		}

		function screenTransition(){
			var hiddenScreen;
			clearMarkers();
			if(!alternate){
				$(".screen").eq(ScreenIndex).removeClass("active");
				$(".screen").eq(clickedIndex).addClass("active");
				ScreenIndex = clickedIndex;
				popHeader(ScreenIndex);
				placeMarkers( ScreenIndex );
			} else {
				if( clickedIndex != ScreenIndex ){
					if( clickedIndex > ScreenIndex ){

						if($(".screen").hasClass("hideUp")){
							$(".screen").eq(ScreenIndex).removeClass("hideUp");
							$(".screen").eq(ScreenIndex).addClass("hideDown").removeClass("active");
						} else {
							$(".screen").eq(ScreenIndex).addClass("hideDown").removeClass("active");
						}
						hiddenScreen = $(".screen").eq(ScreenIndex);
						$(".screen").eq(ScreenIndex+1).addClass("active");
						ScreenIndex++;
					} else {
						if($(".screen").hasClass("hideDown")){
							$(".screen").eq(ScreenIndex).removeClass("hideDown");
							$(".screen").eq(ScreenIndex).addClass("hideUp").removeClass("active");
						} else {
							$(".screen").eq(ScreenIndex).addClass("hideUp").removeClass("active");
						}
						hiddenScreen = $(".screen").eq(ScreenIndex);
						$(".screen").eq(ScreenIndex-1).addClass("active");
						ScreenIndex--;
					}
					if(parseFloat(hiddenScreen.css('-webkit-transition-duration')) > parseFloat($(".screen").eq(ScreenIndex).css('-webkit-transition-duration')) ){
						hiddenScreen.on("transitionend webkitTransitionEnd", function(){
							screenTransition();
							$(this).off();
						});
					} else {
						$(".screen").eq(ScreenIndex).on("transitionend webkitTransitionEnd", function(){
							screenTransition();
							$(this).off();
						});
					}
				
				} else {
					ScreenIndex = clickedIndex;
					placeMarkers( ScreenIndex );
					popHeader(ScreenIndex);
				}
			}
		}

	} )
})();