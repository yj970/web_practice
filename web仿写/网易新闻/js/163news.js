$(function() {
	$('#top_bar_block_1_1').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_1').rotate({
					animateTo: 180
				});
				$('#dialog_wangyi').css({
					'display': 'block'
				});
			},
			mouseout: function() {
				$('#ver_arr_1').rotate({
					animateTo: 0
				});
				$('#dialog_wangyi').css({
					'display': 'none'
				});
			}
		}
	});

	$('#top_bar_block_1_2').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_2').rotate({
					animateTo: 180
				});
				$('#dialog_vedio').css({
					'display': 'block'
				});
			},
			mouseout: function() {
				$('#ver_arr_2').rotate({
					animateTo: 0
				});
				$('#dialog_vedio').css({
					'display': 'none'
				});
			}
		}
	});

	$('#top_bar_block_2_1').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_3').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_3').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_2_2').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_4').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_4').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_2_3').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_5').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_5').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_1_3').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_6').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_6').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_1_4').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_7').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_7').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_1_5').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_8').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_8').rotate({
					animateTo: 0
				});
			}
		}
	});

	$('#top_bar_block_3_1').rotate({
		bind: {
			mouseover: function() {
				$('#ver_arr_9').rotate({
					animateTo: 180
				});
			},
			mouseout: function() {
				$('#ver_arr_9').rotate({
					animateTo: 0
				});
			}
		}
	});
});

$(function() {
	$('#dialog_wangyi').mouseover(function() {
		$('#dialog_wangyi').css({'display': 'block'});
	});
	$('#dialog_wangyi').mouseout(function() {
		$('#dialog_wangyi').css({'display': 'none'});
	});

	$('#dialog_vedio').mouseover(function() {
		$('#dialog_vedio').css({'display': 'block'});
	});
	$('#dialog_vedio').mouseout(function() {
		$('#dialog_vedio').css({'display': 'none'});
	});
	$('#login_in').mouseover(function() {
		$('#dialog_login').css({'display': 'flex'});
	});
	$('#login_in').mouseout(function() {
		$('#dialog_login').css({'display': 'none'});
	});
	$('#dialog_login').mouseover(function() {
		$('#dialog_login').css({'display': 'flex'});
	});
	$('#dialog_login').mouseout(function() {
		$('#dialog_login').css({'display': 'none'});
	});
	$('#li_more').mouseover(function() {
		$('#main_content_center_navagation_ul_2').css({'display': 'flex'});
	});
	$('#li_more').mouseout(function() {
		$('#main_content_center_navagation_ul_2').css({'display': 'none'});
	});
	$('#main_content_center_navagation_ul_2').mouseover(function() {
		$('#main_content_center_navagation_ul_2').css({'display': 'flex'});
	});
	$('#main_content_center_navagation_ul_2').mouseout(function() {
		$('#main_content_center_navagation_ul_2').css({'display': 'none'});
	});

	$('#share_1').mouseover(function() {
		$('#share_navagation_1').css({'display': 'flex'});
	});
	$('#share_1').mouseout(function() {
		$('#share_navagation_1').css({'display': 'none'});
	});
	$('#share_navagation_1').mouseover(function() {
		$('#share_navagation_1').css({'display': 'flex'});
	});
	$('#share_navagation_1').mouseout(function() {
		$('#share_navagation_1').css({'display': 'none'});
	});


});