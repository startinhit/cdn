<center>
	<h2 id="text-effect" data-text="Nguyễn Tỉnh Blog">
		Nguyễn Tỉnh Blog
	</h2>
</center>
<style>
  h1{display:none};
  h2#text-effect {
	 text-transform: uppercase;
	 letter-spacing: 5px;
	 position: relative;
	 font-size: 9em;
	 line-height: normal;
	 font-weight: bold;
	 color: #fff;
	 -webkit-text-stroke: 2px #fff;
	border: 0;
}
 h2#text-effect:before {
	 content: attr(data-text);
	 position: absolute;
	 background: -webkit-gradient(linear, left top, right top, from(#d630f2), color-stop(#ff002f), color-stop(#e4ff00), color-stop(#03a9f4), to(#d630f2));
	 background: -o-linear-gradient(left, #d630f2, #ff002f, #e4ff00, #03a9f4, #d630f2);
	 background: linear-gradient(90deg, #d630f2, #ff002f, #e4ff00, #03a9f4, #d630f2);
	 background-size: 300%;
	 overflow: hidden;
	 -webkit-transition: width 2s;
	 -o-transition: width 2s;
	 transition: width 2s;
	 -webkit-animation: anmation 5s linear infinite;
	 animation: anmation 5s linear infinite;
	 width: 100%;
	 -webkit-background-clip: text;
	 -webkit-text-fill-color: transparent;
}
 @-webkit-keyframes anmation {
	 0% {
		 background-position: 0 0;
	}
	 100% {
		 background-position: 300% 0;
	}
}
 @keyframes anmation {
	 0% {
		 background-position: 0 0;
	}
	 100% {
		 background-position: 300% 0;
	}
}
</style>
