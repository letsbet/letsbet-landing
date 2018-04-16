$(document).ready(function($) {

	"use strict";
	Chart.defaults.global.defaultFontColor = '#FFF';
	
	function loader() {
		
		setTimeout(function() { 
			if($('#pb_loader').length > 0) {
				$('#pb_loader').removeClass('show');
			}
		}, 700);
	};	
	
	$(".video-play-buttom").modalVideo();
	
	
	function createDonut(el,title,data,list,colors){

		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var legendPosition = width > 480 ? "right" : "bottom"; 
		
		var toknesData = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: data,
					backgroundColor: colors
				}],	
				labels: list
			},
			options: {
				responsive: false,
				elements: {
					arc: {
						borderWidth: 0
					}
				},
				maintainAspectRatio: true,
				segmentShowStroke:false,
				legend: {
					position: legendPosition,
					onClick: function(e) {
						e.stopPropagation();
					},
					labels:  {
						fontSize:15,
						boxWidth:12
					},
					padding:50
					
				},
				tooltips: {
					callbacks: {
						label: function (tooltipItem, data) {
							return data.labels[tooltipItem.index];
						}
					}
				},
				title: {
					display: true,
					position: 'top',
					fontSize: 18,
					padding:30,
					text: title
				}
			}
		};
	
		var ctx = document.getElementById(el).getContext("2d");
		var chart = new Chart(ctx, toknesData);
		
		
		document.getElementById(el).innerHTML = chart.generateLegend();
	}
	
	loader();
	
	createDonut("tokens-area","Tokens distribution",[18,5,77],
				[
					"Team - 18%",
					"Bounty - 5%",
					"Token sale - 77%"
				],
				[
					"#45d4ff",
					"#2fafff",
                    "#005dd0"
                ]);
				
	createDonut("funds-area","Funds distribution",[25,15,10,10,15,25],
				[
					"Development - 25%",
					"Marketing - 15%",
					"Reserve - 10%",
					"Legal - 10%",
					"Community Development - 15%",
					"Operations - 25%"
				],
				[
					"#1D8348",
					"#239B56",
					"#2ECC71",
                    "#ABEBC6",
					"#45d44f",
					"#EAFAF1",
                ]);
	

});