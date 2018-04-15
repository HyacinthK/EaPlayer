function lcz(){
var _this = this;
this.geci_object, this.geci_lines, this.upkp, this.classV1, this.classV2, this.initTop, this.center, this.empty, this.isDropgeci, this.width, this.height, this.align, this.oneline, this.luminous, this.change, this.staue = !0, this.tag = {}, this.mould = '<ul style="height: 184px;list-style: none;position: relative;line-height: 30px;padding: 0 15px;overflow-y: hidden;display:none;"></ul>', this.getgeci = "Value";
var errmsg = "程序发生异常，无法继续了！";
this.toTimer = function(e) {
	var t, n;
	return t = Math.floor(e / 60), t = isNaN(t) ? "--" : t >= 10 ? t : "0" + t, n = Math.floor(e % 60), n = isNaN(n) ? "--" : n >= 10 ? n : "0" + n, t + ":" + n
}, this.addgeci = function(e, t, n) {
	var r = document.createElement("li");
	r.innerHTML = t ? t : "", r.className = e ? e : "", r.lang = n ? n : "", this.geci_object.appendChild(r), this.geci_lines.push(r)
}, this.getgeciByValue = function(e) {
	le = this.geci_lines.length, e = "^" + e + ".*";
	for (var t = 0; t < le; t++) {
		if (this.geci_lines[t].lang.search(e) == 0) {
			return this.geci_lines[t]
		}
	}
	return null
}, this.getgeciByValueInd = function(e) {
	le = this.geci_lines.length - 1;
	for (var t = le; t >= 0; t--) {
		p = this.geci_lines[t].lang;
		if (p && p < e) {
			return this.geci_lines[t]
		}
	}
	return null
}, this.setClassName = function(e, t) {
	e && (e.className = t)
}, this.upTop = function(e) {
	var t = e.offsetTop,
		n = this.geci_object.scrollTop,
		r = t - this.center;
	this.myf(this.geci_object, n, r)
}, this.remove = function() {
	if (this.geci_lines != null) {
		for (var e = 0; e < this.geci_lines.length; e++) {
			this.geci_object.removeChild(this.geci_lines[e])
		}
	}
	this.geci_lines = new Array, !this.empty && this.empty != 0 && alert("empty 属性有误! 该值必须>=零")
}, this.load = function(json, fun) {
	gecis = json.gecis, end = json[this.tag.end];
	with(this) {
		remove(), _addgeci(json[this.tag.sname]), _addgeci(json[this.tag.cname]), _addgeci(json[this.tag.qname]), _addgeci(json[this.tag.bname]), _addgeci(json[this.tag.sgname]), _addgeci(json[this.tag.special]), _addgeci(json[this.tag.kname])
	}
	if (gecis) {
		for (var index in gecis) {
			this.addgeci(this.classV1, gecis[index].name, gecis[index].time)
		}
	}
	end && (end.time ? this.addgeci(this.classV1, end.end, end.time) : this.addgeci(this.classV1, end)), typeof fun == "function" && fun.call(null, null)
}, this._addgeci = function(e) {
	e && (e.time ? this.addgeci(this.classV1, e.name, e.time) : this.addgeci(this.classV1, e))
}, this.Read = function(e, t) {
	if (t != null && typeof t == "function") {
		return t.call(this, e)
	}
	var n = {};
	n.gecis = new Array;
	var r = e.split("["),
		i = r.length;
	for (var s = 0; s < i; s++) {
		var o = r[s],
			u = o.split("]");
		if (u.length == 2) {
			if (u[0].search("^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0) {
				title = u[0].split(":"), n = tagswitch(title, n)
			} else {
				var a = {
					time: u[0],
					name: u[1]
				};
				n.gecis.push(a)
			}
		}
	}
	return n
}, this.vls1 = function(e) {
	var n = {};
	n.gecis = new Array;
	var r = e.length,
		i = 0,
		s = 0,
		o = new Array;
	for (var u = 0; u < r; u++) {
		e[u] == "[" && u > 8 && (e.slice(u - 9, u - 1) + "").search("^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0 && (o.push(e.substring(i, u)), i = u)
	}
	o.push(e.substring(i, r));
	var a = {},
		f = [];
	for (var u = 0; u < o.length; u++) {
		var l = o[u],
			c = l.split("]");
		if (c.length === 2) {
			(c[0] + "").search("^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0 ? (c[0] = c[0].slice(1), title = c[0].split(":"), n = tagswitch(title, n)) : (h = c[0].slice(1) + "", a[h] = c[1], f.push(h))
		} else {
			if (c.length > 2) {
				var h, e;
				e = c[c.length - 1];
				for (var p in c) {
					c[p].search("^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") == 0 && (h = c[p].slice(1) + "", a[h] = e, f.push(h))
				}
			}
		}
	}
	f = f.sort();
	for (var p in f) {
		t = f[p];
		var d = {
			time: t,
			name: a[t]
		};
		n.gecis.push(d)
	}
	return n
};
var tagswitch = function(e, t) {
		e.length === 2 && (tp = e[1]), tag = _this.tag;
		switch (e[0]) {
		case tag.sname:
			t[tag.sname] = tp;
			break;
		case tag.cname:
			t[tag.cname] = tp;
			break;
		case tag.qname:
			t[tag.qname] = tp;
			break;
		case tag.bname:
			t[tag.bname] = tp;
			break;
		case tag.sgname:
			t[tag.sgname] = tp;
			break;
		case tag.special:
			t[tag.special] = tp;
			break;
		case tag.kname:
			t[tag.kname] = tp;
			break;
		case tag.end:
			t[tag.end] = tp
		}
		return t
	};
this.myf_Init = function() {
	this.geci_object.innerHTML = this.mould, asc = this.geci_object = this.geci_object.firstChild, asc.style.width = this.width, asc.style.height = this.height, asc.style.textAlign = this.align, this.oneline ? (this.empty = 0, this.center = 5) : (this.empty = 5, this.center = this.geci_object.style.height / 2 | 120), this.isDropgeci && this.logon(!1)
}, this.setoccupy = function(e, t) {
	e.style.display = "block", this.setClassName(e, this.classV2), this.upTop(e), this.upkp && this.unoccupy(this.upkp), this.upkp = e, t && t(e)
}, this.unoccupy = function(e, t) {
	this.setClassName(e, this.classV1), this.oneline && (e.style.display = "none"), t && t(e)
}, this.torun = function(time) {
	if (!this.staue) {
		return !1
	}
	var time = this.toTimer(Math.round((time | event.srcElement.currentTime) * 100) / 100),
		line = eval("this.getgeciBy" + this.getgeci + "(time)");
	line && this.upkp != line && this.setoccupy(line)
}, this.logon = function(e) {
	if (window.FileReader) {
		var t = this.geci_object;
		e && (t = document.getElementById(e));

		function n(e) {
			e.stopPropagation(), e.preventDefault();
			var t = e.dataTransfer.files;
			for (var n = 0, r; r = t[n]; n++) {
				var i = new FileReader;
				i.onloadend = function(e) {
					return function(e) {
						img = e.target.result, img && _this.load(_this.Read(img))
					}
				}(r), i.readAsText(r)
			}
		}
		function r(e) {}
		function i(e) {}
		function s(e) {
			e.stopPropagation(), e.preventDefault()
		}
		t.addEventListener("dragenter", r, !1), t.addEventListener("dragover", s, !1), t.addEventListener("drop", n, !1), t.addEventListener("dragleave", i, !1), t.addEventListener("ondragend", i, !1)
	} else {
		alert("你的浏览器不支持啊，同学")
	}
};
var timer = null;
this.myf = function(e, t, n) {
	timer != null && clearTimeout(timer), this.isUpOrDown(e, t, n)
}, getUpValue = function(e, t) {
	return t - e > 100 ? e += 30 : t - e > 50 ? e += 10 : t - e > 20 ? e += 5 : t - e > 1 && e++, e
}, getDowmValue = function(e, t) {
	return e - t > 100 ? e -= 30 : e - t > 50 ? e -= 10 : e - t > 20 ? e -= 5 : e - t > 1 && e--, e
}, this.isUpOrDown = function(e, t, n) {
	t < n ? this.toUp(e, t, n) : this.toDown(e, t, n)
}, this.toUp = function(e, t, n) {
	timer = setInterval(function() {
		t >= n && (clearTimeout(timer), timer = null, e.scrollTop = n), e.scrollTop = t, t = getUpValue(t, n)
	}, 10)
}, this.toDown = function(e, t, n) {
	timer = setInterval(function() {
		t <= n && (clearTimeout(timer), timer = null, e.scrollTop = n), e.scrollTop = t, t = getDowmValue(t, n)
	}, 30)
}, this.destory = function() {}
}
geci = {
	msg: {
		ms1: "元素位置没有给出！ error : 103",
		ms2: "请给出歌词的链接地址，或文本内容！ error : 105"
	},
	tag: {
		sname: "ti",
		cname: "cl",
		qname: "cs",
		bname: "ps",
		sgname: "ar",
		special: "al",
		kname: "by",
		end: "end"
	},
	build: function(b, a) {
		var c = new lcz;
		return c.tag = geci.tag, b.object ? c.geci_object = document.getElementById(b.object) : alert(geci.msg.ms1), c.initTop = b["initTop"] != null ? b.initTop : 0, c.center = b["center"] != null ? b.center : 0, c.empty = b["empty"] != null ? b.empty : 0, c.isDropgeci = b["isDropgeci"] != null ? b.isDropgeci : !0, c.getgeci = b["seekMark"] != null ? b.seekMark : "Value", a && (c.classV1 = a["notoccupy"] != null ? a.notoccupy : "geci_moonlight", c.classV2 = a["occupy"] != null ? a.occupy : "geci_attention", c.width = a["width"] != null ? a.width : "550px", c.height = a["height"] != null ? a.height : "200px", c.align = a["align"] != null ? a.align : "left", c.oneline = a["oneline"] != null ? a.oneline : !1), c.myf_Init(), geci.readgeci(c, b.readType, {
			url: b.geciUrl ? b.geciUrl : null,
			text: b.geciText ? b.geciText : null
		}, function() {
			c.geci_object.scrollTop = c.initTop, c.oneline && (c.geci_object.className += " geci_hide"), b.syntony && b.syntony(c)
		}) && b.open && geci.open(c), b.media && (mp = document.getElementById(b.media), window.attachEvent ? mp.attachEvent("ontimeupdate", function() {
			c.torun()
		}) : mp.addEventListener("timeupdate", function() {
			c.torun()
		}, !1)), c
	},
	readgeci: function(d, b, f, c) {
		var a = "";
		if (f.text) {
			a = f.text
		} else {
			if (!f.url) {
				return alert(geci.msg.ms2), !1
			}
			xmlhttp = null, window.XMLHttpRequest ? xmlhttp = new XMLHttpRequest : window.ActiveXObject && (xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")), xmlhttp != null && (xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						return a = xmlhttp.responseText, a = a.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, ""), d.load(d.Read(a, b), c), !0
					}
					//alert("在获取url 歌词的时候发生了错误:" + xmlhttp.statusText)
					$('#lrc_2 ul').append('<li style="color: #69d2e7;">暂无歌词</li>');
				}
			}, xmlhttp.open("GET", f.url, !0), xmlhttp.send(null))
		}
		return d.load(d.Read(a, b), c), !0
	},
	open: function(a) {
		a.geci_object && (a.geci_object.style.display = "block"), a.staue = !0
	},
	close: function(a) {
		a.geci_object && (a.geci_object.style.display = "none"), a.staue = !1
	},
	suspend: function(a) {
		a.geci_object && (a.staue = !1)
	},
	destroy: function(a) {
		geci.close(a), a.remove(a.geci_object)
	},
	setProgress: function(b, a) {
		b.torun(a)
	}
};

(function($){

var temp_key = $('#key'),
	temp_list = $('.play-list'),
	temp_audio = $('#audio'),
	temp_bg = $('.bg-player'),
	temp_cover = $('.cover-photo img'),
	temp_info_name = $('.song-title'),
	temp_info_artist = $('.song-artist'),
	temp_info_album = $('.album-name'),
	temp_btn_play = $('.btn-play i'),
	temp_btn_download = $('.btn-download i');

var item_num = 0,
	item_id = 0,
	audio = temp_audio[0],
	shuffle = localStorage.shuffle || 'false';
	repeat = localStorage.repeat || 0,
	continous = true,
	autoplay = true,
	trigger = false,
	timeout = false,
	time = new Date();

var list_li,
	old_list,
	isPlaying,
	playCounts,
	currentTrack,
	clearautoplay;

var keyUrl = temp_key.data('api');
if (temp_key.attr('data-shuffle') == 'true') {
	shuffle = localStorage.shuffle = 'true';
} else {
	shuffle = localStorage.shuffle = 'false';
}

// 记录的曲单数据
var set_StorageArr = function(name, val) {
	var arrayObject = [];
	var oldarrayObject = JSON.parse(localStorage.getItem(name));
	if (oldarrayObject) {
		for (var i = 0; i < oldarrayObject.length; i++) {
			if (val == oldarrayObject[i]) {
				return;
			} else {
				arrayObject = oldarrayObject;
			}
		}
	}
	arrayObject.push(val);
	localStorage.setItem(name,JSON.stringify(arrayObject));
}
var get_StorageArr = function(name) {
	var arrayObjectLocal = JSON.parse(localStorage.getItem(name));
	return arrayObjectLocal;
}
var IsInArray = function(arr, val) {
　　var testStr=','+arr.join(",")+",";
　　return testStr.indexOf(","+val+",")!=-1;
}

var bytesToSize = function(bytes) {
	if (bytes === 0) return '0B';
	var k = 1024;
	sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	i = Math.floor(Math.log(bytes) / Math.log(k));
	return (bytes / Math.pow(k, i)).toPrecision(3) + sizes[i];                                                                                                               //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];  
}

// 载入json数据
var addJson = function(data) {
	var script = '<script type="text/javascript">'+data+'</script>';
	temp_key.html(script);
}

// 处理播放列表
var handleList = function(data) {
	temp_list.html('');
	if (data.length == 0) {
		temp_list.append('<li>没有找到歌曲</li>');
	}
	else {
		for (var i=0; i<data.length; i++) {
			var item = data[i];
			var artist_name = item.artist.name_2 == null ? '' : ' & '+item.artist.name_2;
			item_num = i;
			item_num++;
			temp_list.append('<li><span class="li-title">'+item_num+'. '+item.title+'</span> - <span class="li-artist">'+item.artist.name_1+artist_name+'</span></li>');
		}
	}
}

// 跟踪播放列表
var list_track = function() {
	list_li.each(function(i) {
		var _i = i;
		$(this).on('click', function() {
			currentTrack = _i;
			loadMusic(currentTrack);
		});
	});
}

// 遍历播放列表
var addList = function(i) {
	handleList(playlist);
	list_li = $('.play-list li');
	list_track();
	if (i == 0) {
		loadMusic(currentTrack);
	}
}

// 播放
var play = function() {
	audio.play();
	temp_btn_play.attr('class', 'active ea-pause');
	timeout = setInterval(updateProgress, 500);
	isPlaying = true;
}

// 暂停
var pause = function() {
	audio.pause();
	temp_btn_play.attr('class', 'ea-play');
	clearInterval(updateProgress);
	isPlaying = false;
}

// 切换单曲
var switchTrack = function(i) {
	if (i < 0){
		track = currentTrack = playlist.length - 1;
	} else if (i >= playlist.length){
		track = currentTrack = 0;
	} else {
		track = i;
	}
	loadMusic(track);
}

// 随机播放
var shufflePlay = function() {
	var time = new Date(),
		lastTrack = currentTrack;
	currentTrack = time.getTime() % playlist.length;
	if (lastTrack == currentTrack) ++currentTrack;
	switchTrack(currentTrack);
}

// 播放模式
var ended = function() {
	pause();
	audio.currentTime = 0;
	playCounts++;
	if (continous == true) isPlaying = true;
	if (repeat == 1){
		play();
	} else {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			if (repeat == 2){
				switchTrack(++currentTrack);
			} else {
				if (currentTrack < playlist.length) switchTrack(++currentTrack);
			}
		}
	}
}

// 播放预设
var afterLoad = function() {
	if (isPlaying == true) play();
}

var isAutoPlay = function() {
	if (temp_key.attr('data-autoplay') == 'true' && window.innerWidth > 769) {
		setTimeout(function(){
			audio.addEventListener('canplay', play(), false);
		}, 3000);
	}
}

// 播放进度
var setProgress = function(value) {
	var currentSec = parseInt(value%60) < 10 ? "0" + parseInt(value%60) : parseInt(value%60),
	ratio = value / audio.duration * 100;
	var alltime = audio.duration;
	var switchTime;
	if(!alltime) {
		switchTime = 'loading...';
	} else {
		var minute = parseInt(alltime / 60);
		var second = parseInt(alltime % 60);
		minute = minute >= 10 ? minute : "0" + minute;
		second = second >= 10 ? second : "0" + second;
		switchTime = '0' + parseInt(value/60) + ':' + currentSec + '/' + minute + ':' + second;
	}
	$('.progress-sider .sider-pace').css('width', ratio + '%');
	$('.progress-sider a').css('left', ratio + '%');
	$('.player-timer').html(switchTime);
}

var beforeLoad = function() {
	var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
	$('.progress-sider .sider-loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	//temp_loadper.html('Buffer in '+parseInt(100 / (this.duration || 1) * endVal)+'%');
}

var updateProgress = function() {
	setProgress(audio.currentTime);
}

$('.progress-sider').slider({step: 0.1, slide: function(event, ui) {
	$(this).addClass('enable');
	setProgress(audio.duration * ui.value / 100);
	clearInterval(timeout);
}, stop: function(event, ui){
	audio.currentTime = audio.duration * ui.value / 100;
	$(this).removeClass('enable');
	timeout = setInterval(updateProgress, 500);
}});

// 音量调节
var setVolume = function(value) {
	audio.volume = localStorage.volume = value;
	$('.volume-sider .sider-pace').css('width', value * 100 + '%');
	$('.volume-sider a').css('left', value * 100 + '%');
}

var volume = localStorage.volume || 0.5;
$('.volume-sider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
	setVolume(ui.value);
	$(this).addClass('enable');
	$('.volume .volume-mute').removeClass('enable');
}, stop: function(){
	$(this).removeClass('enable');
}}).children('.volume-sider .sider-pace').css('width', volume * 100 + '%');

$('.volume-mute i').click(function() {
	if ($(this).hasClass('enable')){
		setVolume($(this).data('volume'));
		$(this).removeClass('enable ea-mute').addClass('ea-volume');
	} else {
		$(this).data('volume', audio.volume).removeClass('ea-volume').addClass('enable ea-mute');
		setVolume(0);
	}
});

// 加载单曲
var isNull = 0;
var loadMusic = function(i) {
	var item = playlist[i];
	var artist_name = item.artist.name_2 == null ? '' : ' / '+item.artist.name_2;
	var lrc = keyUrl+'/api.php?action=lyric&id='+item.tid+'&source='+item.source;
	$.getJSON(keyUrl+'/api.php?action=cover&id='+item.pid+'&source='+item.source, function(arr) {
		temp_cover.attr('src', arr.url);
		temp_bg.css('background-image', 'url('+arr.url+')');
	});
	temp_info_name.html(item.title);
	temp_info_artist.html(' - '+item.artist.name_1+artist_name);
	temp_info_album.html(item.album);
	list_li.removeClass('playing').eq(i).addClass('playing');//console.log(lrc);
	$('.lyric-script').html('<script>geci.build({object:"lrc_2",media:"audio",geciUrl:"'+lrc+'",readType:"vls1",open:true},{oneline:false,height:"350px",width:"auto"});</script>');
	$.getJSON(keyUrl+'/api.php?action=song&id='+item.mid+'&source='+item.source, function(arr) {
		if (arr.url == '') {
			isNull++;
			if (isNull == item_num) {
				isNull = 0;
				temp_info_album.html('该歌单包含收费歌曲无法播放，已自动跳过 '+item_num+' 首单曲，请联系网站管理员更换歌单。');
			}
			else {
				switchTrack(++currentTrack);
			}
		} else {
			temp_audio.attr('src',arr.url);
			audio.volume = $('.volume-mute i').hasClass('enable') ? 0 : volume;
			audio.addEventListener('progress', beforeLoad, false);
			audio.addEventListener('durationchange', beforeLoad, false);
			audio.addEventListener('ended', ended, false);
			audio.addEventListener('canplay', afterLoad, false);
			temp_btn_download.attr('title', bytesToSize(arr.size));
		}
	});

	item_id = i;
}

// 加载播放数据
var original = function(_id, _source, _type) {
	$.ajax({
		type: "GET",
		url: keyUrl+'/api.php',
		data: { 
			action: 'list',
			id: _id,
			source: _source,
			type: _type
		},
		beforeSend: function() {
			temp_list.html('<li>正在加载数据...</li>');
		},
		success: function(data) {
			addJson(data);
			currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0;
			addList(0);
			old_list = data;
			isAutoPlay();
		}
	});
	return;
}

// 搜索音乐
var search_music = function(name, source) {
	$.ajax({
		type: "GET",
		url: keyUrl+'/api.php',
		data: { 
			action: 'search',
			name: name,
			source: source
		},
		beforeSend: function() {
			temp_list.html('<li>正在加载数据...</li>');
		},
		success: function(data) {
			//console.log(ea.ajaxurl);
			addJson(data);
			currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0;
			addList(1);
		}
	});
}
$('.music-search-form').bind('submit', function(e) {
	e.preventDefault();
	var source = temp_key.attr('data-search');
	var name = $('.music-search-form .music-search-input').val();
	search_music(name, source);
});

// 播放控制
$('.btn-play i').on('click', function() {
	if (temp_btn_play.hasClass('active')) {
		pause();
	} else {
		play();
	}
});
$('.btn-prev i').on('click', function() {
	if (shuffle === 'true') {
		shufflePlay();
	} else {
		switchTrack(--currentTrack);
	}
});
$('.btn-next i').on('click', function() {
	if (shuffle === 'true') {
		shufflePlay();
	} else {
		switchTrack(++currentTrack);
	}
});

// 预设播放模式
if (shuffle == 'true') {
	$('.btn-mode i').attr('class', 'ea-shuffle');
} else if (repeat == 1) {
	$('.btn-mode i').attr('class', 'ea-onec');
} else if (repeat == 2) {
	$('.btn-mode i').attr('class', 'ea-all');
}
$('.btn-mode i').on('click', function() {
	if ($(this).hasClass('ea-all')) {
		shuffle = localStorage.shuffle = 'true';
		repeat = localStorage.repeat = 2;
		$(this).removeClass('ea-all').addClass('ea-shuffle');
	} else if($(this).hasClass('ea-shuffle')) {
		shuffle = localStorage.shuffle = 'false';
		repeat = localStorage.repeat = 1;
		$(this).removeClass('ea-shuffle').addClass('ea-onec');
	} else if($(this).hasClass('ea-onec')) {
		shuffle = localStorage.shuffle = 'false';
		repeat = localStorage.repeat = 2;
		$(this).removeClass('ea-onec').addClass('ea-all');
	}
});

// 单曲下载
$('.btn-download i').on('click', function(i) {
	var iframe = document.createElement("iframe"),
		item = playlist[item_id],
		artist_name = item.artist.name_2 == null ? '' : '，'+item.artist.name_2;
	iframe.style.display = "none";
	iframe.src = keyUrl+'/dl.php?id='+item.mid+'&source='+item.source+'&name='+item.artist.name_1+artist_name+' - '+item.title;
	document.body.appendChild(iframe);
	setTimeout(function() {
		document.body.removeChild(iframe);
	}, 3000);
});

// 展开隐藏
$('.btn-enlarge i').on('click', function(i) {
	if ($(this).hasClass('enable')) {
		$('.player-hide-box').css('height', '0px');
		$(this).removeClass('enable');
	} else {
		if (window.innerWidth > 769) {
			$('.player-hide-box').css('height', '400px');
		} else {
			$('.player-hide-box').css('height', '296px');
		}
		
		$(this).addClass('enable');
	}
});

$('.btn-eaplayer').on('click', function(i) {
	if ($(this).hasClass('enable')) {
		if (window.innerWidth > 769) {
			$('.player-layer').css('left', '-97%');
		} else {
			$('.player-layer').css('left', '-94%');
		}
		
		$(this).removeClass('enable');
		$('.btn-eaplayer i').removeClass('ea-left').addClass('ea-right');
		if ($('.btn-enlarge i').hasClass('enable')) {
			$('.player-hide-box').css('height', '0px');
			$('.btn-enlarge i').removeClass('enable');
		}
	} else {
		$('.player-layer').css('left', '0');
		$(this).addClass('enable');
		$('.btn-eaplayer i').removeClass('ea-right').addClass('ea-left');
	}
});

// 清空历史
$('.empty-history').on('click', function(i) {
	localStorage.removeItem('historyList');
	$('.history-list .temp-history').remove();
});

$(document).on("click", "#eaplayer-button", function() {
	var id = $(this).data('id'),
		source = $(this).data('source'),
		type = $(this).data('type'),
		title = $(this).data('title');
	var history_list = '{"id":"'+id+'","source":"'+source+'","type":'+type+',"title":"'+title+'"}';
	set_StorageArr('historyList', history_list);
	var thatArr = [];
	$('.history-list li').each(function(i) {
        var that_id = $(this).attr('data-id');
        var that_type = $(this).attr('data-type');
        thatArr[i] = that_id;
    });
	if (IsInArray(thatArr, id)) {
		$('.history-list li').removeClass('now');
		$('.history-list li').each(function(i) {
			if ($(this).attr('data-id') == id) {
				$(this).addClass('now');
			}
		});
		original(id, source, type);
	}else {
		$('.history-list li').removeClass('now');
		$('.history-list').append('<li class="temp-history now" data-id="'+id+'" data-source="'+source+'" data-type="'+type+'">'+title+'</li>');
		original(id, source, type);
	}
});

$(document).on("click", ".history-list li", function() {
	$('.history-list li').removeClass('now');
	$(this).addClass('now');
	original($(this).data('id'), $(this).data('source'), $(this).data('type'));
});

var temp_id = temp_key.attr('data-id');
var temp_source = temp_key.attr('data-source');
var temp_type = temp_key.attr('data-type');
$('.history-list').append('<li class="now" data-id="'+temp_id+'" data-source="'+temp_source+'" data-type="'+temp_type+'">「Welcome」默认的曲单</li>');
original(temp_id, temp_source, temp_type);

var str = get_StorageArr('historyList');
if (str) {
	for (i = 0; i < str.length; i++) {
		var j = JSON.parse(str[i]);
		$('.history-list').append('<li class="temp-history" data-id="'+j.id+'" data-source="'+j.source+'" data-type="'+j.type+'">'+j.title+'</li>');
	}
}

console.log("%c 蜜汁路易 %c","background:#24272A; color:#ffffff","","https://www.cssplus.org");
console.log("%c Github %c","background:#24272A; color:#ffffff","","https://github.com/0x0233");
})(jQuery);