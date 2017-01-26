(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);


(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);


(lib.Tween52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAYIA4gYIg4gXIAAgPIBHAgIAAAOIhHAfg");
	this.shape.setTransform(44.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAoIAAguQAAgIgEgEQgEgDgGAAQgFABgFACQgEADgDADIAAA0IgUAAIAAhNIAUAAIAAAKQAEgEAHgEQAGgDAJgBQANABAGAGQAGAGAAAMIAAA2g");
	this.shape_1.setTransform(31.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgIAJgGQAJgFAMgBQANABAJAFQAJAGAFAIQAFAJAAALQAAALgFAJQgFAKgJAFQgJAFgNAAQgMAAgJgFgAgKgTQgEAEgDAEQgCAGAAAFQAAAGACAFQADAFAEAEQAEACAGAAQAGAAAFgCQAEgEACgFQADgFAAgGQAAgFgDgGQgCgEgEgEQgFgDgGAAQgGAAgEADg");
	this.shape_2.setTransform(22.4,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmA2IAAhqIAUAAIAAAKQAFgFAGgDQAGgDAGAAQAKAAAIAEQAHAFAFAJQAEAJAAANQAAANgEAIQgFAJgHAFQgIAFgKAAQgGAAgGgDQgGgDgFgGIAAAngAgKghQgFADgDADIAAAbQADAEAFACQAEADAGAAQAHAAAGgHQAFgFAAgKQAAgKgFgGQgGgGgHAAQgGAAgEACg");
	this.shape_3.setTransform(13.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAhQgGgGAAgMIAAg2IAUAAIAAAuQAAAIAEAEQAEADAGAAQAFAAAFgDQAEgDADgDIAAg0IAUAAIAABNIgUAAIAAgKQgEAFgHADQgGAEgJAAQgNAAgGgHg");
	this.shape_4.setTransform(3.8,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgIAJgGQAJgFAMgBQANABAJAFQAJAGAFAIQAFAJAAALQAAALgFAJQgFAKgJAFQgJAFgNAAQgMAAgJgFgAgKgTQgEAEgCAEQgDAGAAAFQAAAGADAFQACAFAEAEQAFACAFAAQAGAAAFgCQAEgEACgFQADgFAAgGQAAgFgDgGQgCgEgEgEQgFgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(-5.4,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAjQgJgFgFgJQgGgJAAgMQAAgLAGgKQAFgIAJgFQAJgGALAAQAIAAAGACQAGACAEAEIAHAGIgNAMQgDgEgEgCQgEgCgGAAQgIAAgGAHQgFAFgBAKQABAKAFAGQAGAGAIAAQAGABAEgDQAEgCADgEIANANIgHAGQgEAEgGACQgGABgIAAQgLAAgJgFg");
	this.shape_6.setTransform(-13.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAtQgFgGAAgKIAAgnIgNAAIAAgSIANAAIAAgVIATAAIAAAVIAQAAIAAASIgQAAIAAAiQAAADACADQACACADAAIAFgBIACgBIAFAPIgHAEQgEABgGAAQgKAAgGgFg");
	this.shape_7.setTransform(-24.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAkQgKgGgFgJQgGgJABgMQgBgLAGgJQAFgJAJgFQAJgFAKgBQAMAAAJAGQAJAFAFAJQAEAKAAAMIAAAEIg4AAQABAFACAEQADAEAFADQAFACAFAAQAFAAAHgCQAFgCAEgEIAJAOQgGAFgJADQgIACgJAAQgLAAgJgEgAATgGQAAgEgCgEQgBgEgFgDQgDgCgIAAQgEgBgFADQgEADgCAEQgCADgBAFIAlAAIAAAAg");
	this.shape_8.setTransform(-31.9,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAwQgMgGgIgNQgIgMAAgRQAAgQAIgMQAIgNAMgGQANgHAPAAQALAAAIADQAJADAFAFQAHAGAEAGIgTAKQgEgFgGgEQgHgEgIAAQgJAAgIAFQgHAEgFAIQgDAIAAAJQAAAKADAIQAFAIAHAEQAIAFAJAAQAHAAAGgCQAGgDAEgDIAAgNIgcAAIAAgTIAyAAIAAAoQgIAJgMAGQgLAFgOAAQgPAAgNgHg");
	this.shape_9.setTransform(-42.2,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF100").s().p("AqTCKIAAkTIUnAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-13.7,132,27.6);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CUQgZgOgSgWQgRgXgIgdQgJgcAAggQAAgfAJgcQAIgeARgWQASgWAZgNQAagNAiAAQAjAAAZANQAaANASAWQARAWAIAeQAJAcAAAfQAAAggJAcQgIAdgRAXQgSAWgaAOQgZAMgjAAQgiAAgagMgAggg6QgLAUABAmQgBAoALASQALAUAVgBQAWABALgUQAKgSAAgoQAAgmgKgUQgLgSgWgBQgVABgLASg");
	this.shape.setTransform(90.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGCbIAAi+Ig0A0Ig1g3IB1h0IBSAAIAAE1g");
	this.shape_1.setTransform(64.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZDKIAAgqQglgFgcgMQgcgMgUgTIAxhGQARARAaAMQAZALAfAAQANAAAKgEQALgFAAgJQAAgJgKgFQgLgGgXgDIgogJQgXgGgUgKQgTgKgNgRQgNgSAAgdQAAgYALgVQAMgVAXgOQAXgOAigGIAAgrIA7AAIAAAtQAcADAYALQAZAKAVAQIgzBEQgNgLgQgHQgPgGgPgEQgPgDgLgBQgRABgGAFQgGAFAAAGQAAAJALAEQAKAFAYAEQAUADAVAFQAWAGAUAKQATAKAMAQQANARAAAbQAAAugcAbQgbAbgyAHIAAAqg");
	this.shape_2.setTransform(39.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1CbIAAk1IDrAAIAABOIiNAAIAAAkICKAAIAABOIiKAAIAAAnICNAAIAABOg");
	this.shape_3.setTransform(0.6,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6CbIhzk1IBrAAIBCDQIBDjQIBrAAIhzE1g");
	this.shape_4.setTransform(-29.8,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABICbIgMgoIh3AAIgMAoIhmAAIBzk1IB1AAIBzE1gAAjAlIgjhsIgiBsIBFAAg");
	this.shape_5.setTransform(-60.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPCUQgjgOgYgXIAwhGQASARAaAMQAZALAeABQAOAAAKgFQALgFAAgIQAAgKgKgFQgLgGgXgEQgSgCgXgGQgWgFgUgLQgTgJgNgSQgNgRAAgeQAAgbAOgWQAPgXAdgOQAcgOAqAAQAmgBAiALQAhAMAbAVIgzBCQgVgOgXgJQgXgHgSAAQgRAAgGAFQgGAFAAAGQAAAJALAFQAKAEAYAEQAUADAVAGQAWAFAUALQATAJAMARQANARAAAaQgBA0gjAcQgjAcg/AAQgwAAgkgMg");
	this.shape_6.setTransform(-91.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-28.3,214.6,56.6);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAmIgIgSQgDgKgCgBQgCgCgDAAIgBAAIgHAfIgYAAIARhLIAqAAQAMAAAFAGQAFAFAAAJQAAAKgGAGQgFAGgMABQAHAHAKAZgAgGgGIAEAAQAMAAACgBQADgBACgDIABgEIgBgFQgCgCgHAAIgLAAg");
	this.shape.setTransform(37.4,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAmIAQhLIA+AAIgEAQIgmAAIgCANIAkAAIgEAOIgkAAIgDAPIApAAIgEARg");
	this.shape_1.setTransform(45.6,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgJgIAAgPQAAgHACgIQADgHAEgGQAFgHAGgFQAHgEAGgBIAMgBQASAAAIAJQAIAJAAANIgBAMQgCAGgEAIQgFAHgGAFQgGAEgIADQgGABgGAAQgQABgKgJgAgGgRQgFAEgCAJQgDAIAAAFQAAAFAEAEQACAEAHAAQAGAAAFgFQAFgGACgHIACgLQAAgHgEgDQgEgEgFgBQgFABgFAEg");
	this.shape_2.setTransform(29,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAmIAOg5IAAAAIgcA5IgRAAIgDg5IgLA5IgUAAIAQhLIAdAAIADAvIAAAAIAXgvIAeAAIgQBLg");
	this.shape_3.setTransform(19.7,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAjIgBgCQgHAFgFAAQgFABgHAAQgQABgHgHQgHgGAAgJQAAgQAWgIQgFgHABgGQgBgKAIgFQAGgEALAAQALgBAGAFQAHAFAAAHQAAAFgCADQgDAEgEACIgJAGIgCABIAJAKIAGgGIABgBIANAKIgIAJIAGAGIgLAMgAgRARIABADIAEAFIAFABQAGgBAGgEQgJgLgDgEQgKAEAAAHgAAAgZQgBACAAADQAAACACAFIAIgFQADgCgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgDgBgDADg");
	this.shape_4.setTransform(6.6,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA0QgTgSgBghQAAghASgSQAQgSAbAAQAaABAPAQQAOAQAAAcIAAAHIhMAAQAAAXAJAOQAJAOARAAQATAAAOgMIAEACIgHAQQgPAMgZgBQgcAAgRgQgAAWgLQgBgsgTAAQgJAAgGAOQgFAMAAASIAoAAIAAAAg");
	this.shape_5.setTransform(63.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBCIgUABQADgXAAg1QAAghgWAAQgWAAAAAoIAAAJQAAAjACAZIgUgBIgUABQACgZAAgjIAAgJQAAgjgCgZIATABIATgBIgBAUIABAAQAQgYAXAAQAqAAAAAyIAABTIgUgBg");
	this.shape_6.setTransform(49,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_7.setTransform(38,-10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABAIgTABQACgYAAgkIAAgJQAAgigCgaIATACIAUgCQgCAaAAAiIAAAJQAAAkACAYIgUgBg");
	this.shape_8.setTransform(38,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BbIgOABQgNg0gchOIgBAAIgYBAQgQAtgGAVIgOgBIgOABQgHgfgXhJIgYhPIAsAAQAPA7AVBLIAAAAIAuiGIANABIANgBQADANARAyIAXBHIAAAAQAlh5ADgNIAMABIALgBQgxCPgMAog");
	this.shape_9.setTransform(21.8,-2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAABkIgTABQACgxAAgsIAAgQQAAgrgCgxIATABIAUgBQgCAoAAA0IAAAQQAAA1ACAoIgUgBg");
	this.shape_10.setTransform(-20.6,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAxQgOATgUAAQgTABgLgMQgJgJAAgPQAAgQALgKQAJgHAUgFQAVgFAGgDQAFgDAAgIQAAgJgHgHQgGgHgMAAQgJAAgKAFQgJAEgEAGIgCAAIgEgRQAXgSAcgBQAwABAAAsIgBA8QAAAMAEADQADADAJAAIAAAGQgOAIgLgBQgTAAgGgTgAgLAFQgMAIAAARQAAAUAPAAQATAAAAgbIAAgbQgPAGgHADg");
	this.shape_11.setTransform(-30.8,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAxIAChMIgTABIABgIIgBgHIATABIgBghQARgHASgJIADACQgCASAAAdIAXgBIAAAHIAAAIIgXgBIgCA6QAAAcADAIQADAIAJAAQAJAAADgCIAAAKQgMAIgRAAQghAAAAgqg");
	this.shape_12.setTransform(-41.9,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsA1QgVgRAAghQAAghAVgTQASgTAaABQAfgBARATQASARAAAeQAAAggTAUQgSASgdABQgagBgSgPgAgZAEQAAA1AZAAQAaAAAAg/QAAgygZAAQgaAAAAA8g");
	this.shape_13.setTransform(-53.9,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABBbIgVABQACggAAgqIAAhZQgMAAgmADIACgLIgCgMIBFACQAiAAAhgCIgBAMIABALQghgDgOAAIgBBZQABAsACAeg");
	this.shape_14.setTransform(-66,-2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhnCBQgGgHAAgKQAAgHAEgFIgBgBQgNgWAWgTQgEgJAGgNQADgHgBgDQgGgKAGgQIACgDQgKgKALgUQgFgBgCgEQgCgEACgEQADgEALgIIABAAIgFgEQgFgFgBgCIAAgCIABgCQAEgFATgDQATgDASABIACgEIABgEQACgHgBgJQgDgSAHgCQADgCAEAEIABABIAAABQACANAFAEQANgPASgHQAOgGANABQANACAEAHQACAEgCAEIgBACIAHADQAKAFABADIABABIgBAAIAAAGIACABQAFABADAEQABACgBAGQAMAJAHARIAAABQAAAQgbAHQADAKgGAEQgFAFgMgFQAGARgHANQgGANgMAEIgBAGQgDAPgEAFQgGAJgPABQAAAQgMAKQgLAKgSgCQgDALgLAHQgMAIgOgCQgGAJgNACIgEAAQgJAAgHgFgAhiBpQgDADAAAFQAAAGAEAEQAFAEAIgBQAKgCAEgIQgFgGgBgFQgLAEgKgGgAhFBiIgCAEQgCAHAHAEIABABIAAAAQAMADAKgHQAKgGABgKIABgDIgDgIIgBgCQgLAHgQgGQAAAHgHAJgAhZA+QgNAKgBAKQAAAFAEAIIACAEQAKAGAMgFIADgEQAGgKAAgGQgKgGgBgMIgJgBIgCAAgAgXBDQgCAFgHAGIACADQACAFABAEIAAAAQAHACAHgCQAIgBAFgFQAKgHgCgQIAAgBQgGAHgJABQgIAAgGgEgAg9AoQgJAIgCAJQgCAGAFAHQADAGADABIABAAQARAHAKgIQAGgFADgGIABgEIgDgDQgGgIAEgIQgLABgKgGIgDgCgAgIAcIAAAAQgEAGgJAFIgCABQgHAIAGAIQAGAIALgBQAJAAAFgJIABAAQAAgEAFgNIABgDIACgFQgIgEgHAAQgEAAgFADgAhNA5IABgBQACgLALgIIAGgFQgEgEAAgEQgNAIgLgDQAAAFgDAGQgEAKAEAHIAAAAIACAAIAFAAIAEAAgAAXAaQgCACgDAHIgBAEQgFALAAAHIABAAQAOAAAEgGQADgEACgNIACgHQgIABgEgEIgDACgAgbgDQgEACgIAAQgDAMgPALQABAHAHAEQALAIAMgEIAAAAIADgCQAHgDAFgHIAAAAIABgCQABgDgBgGIgDgHQgFgGgCgJQgEAEgDABgAAFAOIgBABQgCACACADIAAABQAGABAIAEIAFgFQgFgHgBgFQgGAEgGABgAhTgDQAAADgCAEQgFAMAEAHIABABQAKAEAOgJQAQgKABgLQgEAAgDgEQgFgFgBgFIAAgBIgBAAQgHAAgSAOgAAcgMIgBABIABAAQAAAKgHAHQABAGAFAHQADAFANgCQAKgFAEgKQAGgLgIgPQgHABgJgGIgDgBgAgFATIAFAAIAAgDIgEgBIgCAAgAgMgXIAAABQAAAEgFAGQAEAXARgBQAGgBAHgFIABgBQAGgGgBgHIgEgDQgLgLgFgDQgGAEgJAAgAgigxIgRARIgDABIAAAFIABAHIAAACQABAEAEAEQAGAHAOgFQADgBAFgGQAEgGAAgCIAAgBIgEgBQgDgCAAgDQAAgIgBgOgAhVgJIABABQASgNAIAAIAAgFIgBgEIgBAAIgVgCQgKARAGAGgAAGgjQAFADANALIADgFIADgGIABgBQgIgQgEgYIgJgFQAHAcgLAPgAA/gdIAAABIABABQACABAFABQAFABABgBQABgCgDgGIgCgEQgNgQAAgFIgNgEQAHAWAJALgAAkgiIAHADQAIAFAEgCIAAAAIABgBQgIgMgHgXIgRgGQAGAWAGAOgAgLhUIgDACIgFAFQAFAbAAASQAJABAFgEIABgBQANgPgLgfIgIgIgAhNgkIAGABQAMACAEgCIAAgBQgBgIgCgCQgJAHgKADgAg3gxQADADABAIIACgCQAGgFAGgHQAAgGgDgFgABNgnIACAAQAEAAAIgDQAJgEADgFQgWgCgPgDgAhShFIABAAQAKAJgBAEQgBACgGAEQgIAFgCADQABACAFABQAMgBAUgSQgHAAgFABIgEAAIAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAEAAIAPgBIACAAIAOgNIgLAAQgVAAgRAGgAgkhCQABACACALIAEgBIAEgBIgCgSIgJAHgABng4QgHgQgKgEIAAAAQgNAJgDAGQAPADASACIAAAAgAAthDIAVAFQACgJAQgKIABgFIgCgBIgFgCQgZALgIALgAA1hdQgWAGgIAKIAAABIARAHQAJgNAagKIAAgFQgKABgMADgAAHhWIAAABIALAGQAMgSApgFIgDgCIgNgHIgDgCQgiAIgLATgAAXh4QgPAHgMAPIgBAAIAAABIAFAFIAAABIADADQALgUAhgJIABAAIAFgBIAGgCQgCgDgJgBIgFgBQgJAAgLAFg");
	this.shape_15.setTransform(-3.8,-2.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgGAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAFQgEAEgHAAQgFAAgFgEgAgHgIQgEAEAAAEQAAAFAEAEQADAEAEAAQAFAAAEgEQAEgEgBgFQABgFgEgDQgEgEgFAAQgEAAgDAEg");
	this.shape_16.setTransform(71.3,-5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAJQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBAAIAAAHIgEAAIAAgRIAFAAQAEAAACACQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAADgDAAQACAAABAFIABAEgAgCgFIAAAFIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(71.3,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-16.3,145.7,32.6);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-41.8,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-41.8,75.5,83.6);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-41.7,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-41.7,75.5,83.6);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-41.7,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-41.7,75.5,83.6);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-41.5,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.5,75.2,83.2);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-41.5,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.5,75.2,83.2);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA+IAAhIQAAgNgGgEQgGgGgKAAQgJABgHAEQgHAEgEAGIAABQIggAAIAAh4IAgAAIAAAQQAGgIALgFQAKgFAPgBQATAAAKAKQAKALAAARIAABVg");
	this.shape.setTransform(86.4,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgQAIgOQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIAOAAAQQAAARgIAPQgHAOgPAJQgOAJgUgBQgTABgOgJgAgQgdQgHAFgDAHQgEAIAAAJQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgJgEgIQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_1.setTransform(72.2,-18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcA7QgOgFgKgJIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgGgGgEQgHgDgJgBIgWgGQgLgDgHgHQgIgHAAgOQAAgKAGgJQAGgJALgFQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAFAGADQAGADAKADIAQADQAIACAIAFQAHADAFAGQAEAIAAAKQAAAMgGAIQgGAKgMAFQgLAEgRAAQgPAAgOgEg");
	this.shape_2.setTransform(52.8,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA4QgPgIgIgPQgJgOAAgTQABgQAHgPQAJgOAOgJQANgIASgBQASABAOAIQANAIAIAQQAHAPAAASIAAAHIhYAAQABAIAEAGQAEAGAIAEQAHAEAKABQAIAAAJgEQAJgDAGgGIAOAVQgJAIgNAEQgNAEgPAAQgRAAgPgHgAAfgLQgBgFgDgGQgDgHgGgDQgGgFgLAAQgJAAgGAFQgGADgEAHQgDAGgBAFIA7AAIAAAAg");
	this.shape_3.setTransform(40.2,-18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA4QgPgIgHgPQgJgOAAgTQAAgRAJgPQAHgOAPgIQAOgIASgBQAMABAJADQAKADAHAFQAGAFAEAGIgVATQgEgGgGgEQgHgDgIAAQgOAAgJAKQgJAJAAAPQAAAQAJAJQAJAKAOAAQAIABAHgEQAGgEAEgFIAVASQgEAGgGAFQgHAFgKADQgJADgMAAQgSAAgOgHg");
	this.shape_4.setTransform(27.3,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBXIAAh4IAfAAIAAB4gAgNg2QgFgFAAgJQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAJgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(17.9,-21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA+IAAh4IAgAAIAAARQAFgJALgFQAKgGALAAIAAAfIgEgBIgEAAQgGAAgGACQgGACgFADQgEADgCAEIAABPg");
	this.shape_6.setTransform(10.9,-18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BVIAAimIAgAAIAAAQQAHgKAJgEQAKgFAKAAQAQAAAMAIQAMAHAGAOQAHAOAAAVQAAATgHAOQgGAOgMAHQgMAIgQAAQgKAAgJgFQgKgEgHgJIAAA9gAgRg0QgHAEgEAGIAAAqQAEAGAHAEQAIADAIABQANgBAIgJQAIgIAAgQQAAgRgIgJQgIgKgNAAQgIAAgIAEg");
	this.shape_7.setTransform(-1,-16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBGQgJgJAAgQIAAg+IgUAAIAAgbIAUAAIAAghIAfAAIAAAhIAYAAIAAAbIgYAAIAAA2QAAAGADADQACAEAGAAIAGgBIAFgCIAGAXQgDAEgHACQgGACgKAAQgQAAgIgIg");
	this.shape_8.setTransform(-19,-20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA7QgOgFgKgJIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgGgGgEQgHgDgJgBIgWgGQgLgDgHgHQgIgHAAgOQAAgKAGgJQAGgJALgFQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAFAGADQAGADAKADIAQADQAIACAIAFQAHADAFAGQAEAIAAAKQAAAMgGAIQgGAKgMAFQgLAEgRAAQgPAAgOgEg");
	this.shape_9.setTransform(-29.2,-18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdA4QgOgIgJgPQgIgOAAgTQgBgQAJgPQAHgOAOgJQAPgIARgBQASABANAIQAOAIAIAQQAIAPgBASIAAAHIhYAAQAAAIAFAGQAEAGAIAEQAHAEAJABQAJAAAJgEQAIgDAHgGIANAVQgIAIgOAEQgMAEgPAAQgRAAgPgHgAAegLQAAgFgCgGQgEgHgGgDQgGgFgLAAQgJAAgGAFQgGADgDAHQgEAGgBAFIA6AAIAAAAg");
	this.shape_10.setTransform(-41.7,-18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA8IgZhRIgYBRIgjAAIgkh3IAhAAIAWBQIAbhQIAbAAIAaBQIAXhQIAhAAIglB3g");
	this.shape_11.setTransform(-58.2,-18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgQAIgOQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIAOAAAQQAAARgIAPQgHAOgPAJQgOAJgUgBQgTABgOgJgAgQgdQgHAFgDAHQgEAIAAAJQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgJgEgIQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_12.setTransform(-74.8,-18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIAkAAIAACGIBFAAIAAAfg");
	this.shape_13.setTransform(-88,-20.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEIgegGQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape_14.setTransform(106.5,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiB1IAAirIg/AAIAAg+IDDAAIAAA+Ig/AAIAACrg");
	this.shape_15.setTransform(86.2,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiB1IAAjpIBFAAIAADpg");
	this.shape_16.setTransform(70.7,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYB1IgfhLIgaAAIAABLIhHAAIAAjpIB8AAQAbABATAKQASALAKASQAKASAAAWQgBAVgGAOQgGANgKAJQgJAJgKAEIAqBTgAghgQIAqAAQAKAAAGgFQAHgGAAgKQAAgJgHgFQgGgGgKAAIgqAAg");
	this.shape_17.setTransform(54.2,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiB1IAAjpIBFAAIAADpg");
	this.shape_18.setTransform(36.7,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhnB1IAAjpIB7AAQAbABATAKQATALAJASQAKASAAAWQAAAXgKAQQgJASgTAKQgTALgbAAIg1AAIAABLgAghgQIAsAAQAJAAAGgGQAGgFAAgJQAAgKgGgFQgGgGgJAAIgsAAg");
	this.shape_19.setTransform(20.8,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEIgegGQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape_20.setTransform(-2.1,9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgHgVAAgYQAAgXAHgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQANARAGAVQAHAWgBAXQABAYgHAVQgGAWgNARQgNARgTAKQgUAJgaABQgagBgSgJgAgYgrQgIAOAAAdQAAAdAIAPQAIAOAQAAQARAAAIgOQAHgPAAgdQAAgdgHgOQgIgPgRABIAAAAQgQAAgIAOg");
	this.shape_21.setTransform(-31.6,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQANARAGAVQAGAWAAAXQAAAYgGAVQgGAWgNARQgNARgTAKQgUAJgaABQgagBgSgJgAgYgrQgIAOAAAdQAAAdAIAPQAIAOAQAAQAQAAAIgOQAIgPAAgdQAAgdgIgOQgIgPgQABIAAAAQgQAAgIAOg");
	this.shape_22.setTransform(-53.3,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQAMARAHAVQAGAWAAAXQAAAYgGAVQgHAWgMARQgNARgTAKQgUAJgaABQgagBgSgJgAgXgrQgJAOAAAdQAAAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_23.setTransform(-75,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeApIAMgIQAHgFAFgGQAGgHABgHIgDABIgGABQgMgBgJgJQgJgIAAgPQAAgLAGgIQAFgIAHgFQAJgFAJAAQALAAAIAFQAKAGAFAKQAGAKABAOQgBAWgMAUQgKAUgUAOg");
	this.shape_24.setTransform(-90.5,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BuQgZgKgPgQIAjguQAJAIALAFQALAFAMADQALACAJAAQAQAAAJgFQAIgFAAgIQAAgEgDgDQgCgDgIgDQgIgCgOAAIgNABIgNAAIgIAAIAAg7IAJAAIANABIAMAAQAQAAAHgEQAIgEAAgGQAAgJgKgEQgJgEgPAAQgPAAgPAFQgPAGgNALIgggrQAPgSAZgKQAYgKAhgBQAgAAAWAIQAWAJAKAOQALAPAAATQAAANgGAKQgHALgMAIQgLAHgPADQANABANAGQAMAHAJAMQAIALAAAQQAAAVgNAQQgMAQgXAJQgXAIgeABQgigBgagKg");
	this.shape_25.setTransform(-106.4,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-37.5,237.9,67.8);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-41.7,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-41.7,75.5,83.6);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZA+IAAhIQAAgNgGgEQgGgGgKAAQgJABgHAEQgHAEgEAGIAABQIggAAIAAh4IAgAAIAAAQQAGgIALgFQAKgFAPgBQATAAAKAKQAKALAAARIAABVg");
	this.shape.setTransform(86.4,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgQAIgOQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIAOAAAQQAAARgIAPQgHAOgPAJQgOAJgUgBQgTABgOgJgAgQgdQgHAFgDAHQgEAIAAAJQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgJgEgIQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_1.setTransform(72.2,-18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcA7QgOgFgKgJIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgGgGgEQgHgDgJgBIgWgGQgLgDgHgHQgIgHAAgOQAAgKAGgJQAGgJALgFQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAFAGADQAGADAKADIAQADQAIACAIAFQAHADAFAGQAEAIAAAKQAAAMgGAIQgGAKgMAFQgLAEgRAAQgPAAgOgEg");
	this.shape_2.setTransform(52.8,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA4QgPgIgIgPQgJgOAAgTQABgQAHgPQAJgOAOgJQANgIASgBQASABAOAIQANAIAIAQQAHAPAAASIAAAHIhYAAQABAIAEAGQAEAGAIAEQAHAEAKABQAIAAAJgEQAJgDAGgGIAOAVQgJAIgNAEQgNAEgPAAQgRAAgPgHgAAfgLQgBgFgDgGQgDgHgGgDQgGgFgLAAQgJAAgGAFQgGADgEAHQgDAGgBAFIA7AAIAAAAg");
	this.shape_3.setTransform(40.2,-18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA4QgPgIgHgPQgJgOAAgTQAAgRAJgPQAHgOAPgIQAOgIASgBQAMABAJADQAKADAHAFQAGAFAEAGIgVATQgEgGgGgEQgHgDgIAAQgOAAgJAKQgJAJAAAPQAAAQAJAJQAJAKAOAAQAIABAHgEQAGgEAEgFIAVASQgEAGgGAFQgHAFgKADQgJADgMAAQgSAAgOgHg");
	this.shape_4.setTransform(27.3,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBXIAAh4IAfAAIAAB4gAgNg2QgFgFAAgJQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAJgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(17.9,-21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA+IAAh4IAgAAIAAARQAFgJALgFQAKgGALAAIAAAfIgEgBIgEAAQgGAAgGACQgGACgFADQgEADgCAEIAABPg");
	this.shape_6.setTransform(10.9,-18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BVIAAimIAgAAIAAAQQAHgKAJgEQAKgFAKAAQAQAAAMAIQAMAHAGAOQAHAOAAAVQAAATgHAOQgGAOgMAHQgMAIgQAAQgKAAgJgFQgKgEgHgJIAAA9gAgRg0QgHAEgEAGIAAAqQAEAGAHAEQAIADAIABQANgBAIgJQAIgIAAgQQAAgRgIgJQgIgKgNAAQgIAAgIAEg");
	this.shape_7.setTransform(-1,-16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBGQgJgJAAgQIAAg+IgUAAIAAgbIAUAAIAAghIAfAAIAAAhIAYAAIAAAbIgYAAIAAA2QAAAGADADQACAEAGAAIAGgBIAFgCIAGAXQgDAEgHACQgGACgKAAQgQAAgIgIg");
	this.shape_8.setTransform(-19,-20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA7QgOgFgKgJIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgGgGgEQgHgDgJgBIgWgGQgLgDgHgHQgIgHAAgOQAAgKAGgJQAGgJALgFQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAFAGADQAGADAKADIAQADQAIACAIAFQAHADAFAGQAEAIAAAKQAAAMgGAIQgGAKgMAFQgLAEgRAAQgPAAgOgEg");
	this.shape_9.setTransform(-29.2,-18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdA4QgOgIgJgPQgIgOAAgTQgBgQAJgPQAHgOAOgJQAPgIARgBQASABANAIQAOAIAIAQQAIAPgBASIAAAHIhYAAQAAAIAFAGQAEAGAIAEQAHAEAJABQAJAAAJgEQAIgDAHgGIANAVQgIAIgOAEQgMAEgPAAQgRAAgPgHgAAegLQAAgFgCgGQgEgHgGgDQgGgFgLAAQgJAAgGAFQgGADgDAHQgEAGgBAFIA6AAIAAAAg");
	this.shape_10.setTransform(-41.7,-18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA8IgZhRIgYBRIgjAAIgkh3IAhAAIAWBQIAbhQIAbAAIAaBQIAXhQIAhAAIglB3g");
	this.shape_11.setTransform(-58.2,-18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgQAIgOQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIAOAAAQQAAARgIAPQgHAOgPAJQgOAJgUgBQgTABgOgJgAgQgdQgHAFgDAHQgEAIAAAJQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgJgEgIQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_12.setTransform(-74.8,-18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIAkAAIAACGIBFAAIAAAfg");
	this.shape_13.setTransform(-88,-20.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEIgegGQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape_14.setTransform(97.3,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhXB1IAAjpICvAAIAAA7IhpAAIAAAbIBnAAIAAA6IhnAAIAAAeIBpAAIAAA7g");
	this.shape_15.setTransform(77,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtB1IhWh9IAAB9IhGAAIAAjpIBIAAIBRB1IAAh1IBGAAIAADpg");
	this.shape_16.setTransform(53.4,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiB1IAAjpIBFAAIAADpg");
	this.shape_17.setTransform(35.1,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeB1IgeiEIgdCEIhKAAIhDjpIBPAAIAeCOIAkiOIA0AAIAjCOIAeiOIBPAAIhDDpg");
	this.shape_18.setTransform(13.3,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQAMARAHAVQAGAWAAAXQAAAYgGAVQgHAWgMARQgNARgTAKQgUAJgaABQgagBgSgJgAgXgrQgJAOAAAdQAAAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_19.setTransform(-22.4,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgtBvQgTgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRATgKQAUgKAZAAQAaAAAUAKQATAKANARQAMARAHAVQAGAWAAAXQAAAYgGAVQgHAWgMARQgNARgTAKQgUAJgaABQgZgBgUgJgAgXgrQgJAOABAdQgBAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_20.setTransform(-44.1,9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtBvQgTgKgNgRQgNgRgGgWQgGgVAAgYQAAgXAGgWQAGgVANgRQANgRATgKQAUgKAZAAQAaAAATAKQAUAKANARQAMARAHAVQAGAWABAXQgBAYgGAVQgHAWgMARQgNARgUAKQgTAJgaABQgZgBgUgJgAgXgrQgJAOABAdQgBAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_21.setTransform(-65.8,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeApIAMgIQAHgFAFgGQAFgHACgHIgDABIgGABQgMgBgJgJQgIgIAAgPQAAgLAEgIQAFgIAJgFQAIgFAKAAQAJAAAJAFQAKAGAGAKQAFAKAAAOQAAAWgMAUQgLAUgTAOg");
	this.shape_22.setTransform(-81.3,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglB1QgTgEgOgIQgPgIgJgNQgJgMAAgSQAAgTAMgPQAMgQAVgHQgTgIgLgNQgLgNAAgUQAAgRAJgMQAIgMAPgIQAOgHASgDQASgEARAAQASAAASAEQARADAPAHQAPAIAIAMQAJAMAAARQAAAUgLANQgLANgTAIQAUAHAMAQQANAPAAATQAAASgJAMQgJANgPAIQgOAIgTAEQgSAEgUAAQgTAAgSgEgAgOAeQgHADgFAEQgFAEAAAFQAAAIAIAEQAJAFAOAAQAPAAAIgFQAJgEAAgIQAAgFgFgEQgFgEgHgDIgPgEIgOAEgAgUg6QgHAEAAAHQAAAHAIAFQAJAFAKACQALgCAIgFQAJgFAAgHQAAgHgIgEQgHgEgNAAQgNAAgHAEg");
	this.shape_23.setTransform(-97.1,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-37.5,227.1,67.8);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiB1IAAhdIhXiMIBPAAIAqBPIArhPIBQAAIhXCMIAABdg");
	this.shape.setTransform(321.6,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2B1IgJgeIhZAAIgJAeIhNAAIBXjpIBXAAIBXDpgAAbAcIgbhRIgaBRIA1AAg");
	this.shape_1.setTransform(300.3,-14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhzB1IAAjpIBoAAQAkAAAdAOQAdANAQAaQARAaAAAlQAAAlgRAaQgQAagdAOQgdAOgkAAgAgtA3IAiAAQARAAAMgIQANgHAHgNQAGgMAAgPQAAgPgGgNQgGgMgMgHQgNgHgSAAIgiAAg");
	this.shape_2.setTransform(277,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiB1IAAhdIhYiMIBQAAIAqBPIAshPIBPAAIhXCMIAABdg");
	this.shape_3.setTransform(243.5,-14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYB1IgghLIgZAAIAABLIhGAAIAAjpIB7AAQAbABATAKQASALAKASQAKASAAAWQAAAVgHAOQgHANgJAJQgKAJgJAEIArBTgAghgQIAqAAQAJAAAHgFQAHgGAAgKQAAgJgHgFQgHgGgJAAIgqAAg");
	this.shape_4.setTransform(221.6,-14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_5.setTransform(199.4,-14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrB1IhXjpIBRAAIAxCdIAyidIBRAAIhXDpg");
	this.shape_6.setTransform(176.5,-14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_7.setTransform(154.3,-14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEQgNgCgRgEQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape_8.setTransform(124.4,-14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_9.setTransform(104,-14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BpQgdgPgRgbQgQgbAAgkQAAgkAQgbQARgbAdgOQAcgQAjAAQAgAAAVAKQAWALANAPQANAQAHAQIg9AdQgFgOgMgLQgMgJgSAAQgPgBgMAJQgNAHgHANQgGAOgBAPQABARAGANQAHAMANAIQAMAIAPABQASgBAMgJQAMgLAFgOIA9AcQgHAQgNAQQgNAPgWALQgVAKggABQgjgBgcgPg");
	this.shape_10.setTransform(81.5,-14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiB1IAAjpIBFAAIAADpg");
	this.shape_11.setTransform(64,-14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYB1IgfhLIgaAAIAABLIhHAAIAAjpIB8AAQAbABATAKQASALAKASQAKASAAAWQAAAVgHAOQgGANgKAJQgJAJgKAEIAqBTgAghgQIAqAAQAKAAAGgFQAHgGAAgKQAAgJgHgFQgGgGgKAAIgqAAg");
	this.shape_12.setTransform(47.6,-14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhnB1IAAjpIB7AAQAbABATAKQATALAJASQAKASAAAWQAAAXgKAQQgJASgTAKQgTALgbAAIg1AAIAABLgAghgQIAsAAQAJAAAGgGQAGgFAAgJQAAgKgGgFQgGgGgJAAIgsAAg");
	this.shape_13.setTransform(24.7,-14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiB1IAAirIg/AAIAAg+IDDAAIAAA+Ig/AAIAACrg");
	this.shape_14.setTransform(-6.3,-14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEQgNgCgRgEQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape_15.setTransform(-27.3,-14.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhXB1IAAjpICvAAIAAA7IhpAAIAAAbIBnAAIAAA6IhnAAIAAAeIBpAAIAAA7g");
	this.shape_16.setTransform(-47.7,-14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeB1IgeiEIgdCEIhKAAIhDjpIBPAAIAeCOIAkiOIA0AAIAjCOIAeiOIBPAAIhDDpg");
	this.shape_17.setTransform(-74.9,-14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhABpQgdgPgRgbQgRgbAAgkQAAgjARgcQARgbAdgOQAcgQAkAAQAkAAAdAQQAdAOAQAbQARAcABAjQgBAkgRAbQgQAbgdAPQgdAPgkABQgkgBgcgPgAgdgxQgMAHgHANQgHAOAAAPQAAARAHANQAHAMAMAIQANAIAQABQARgBAMgIQANgIAHgMQAHgNAAgRQAAgPgHgOQgHgNgNgHQgMgJgRABQgQgBgNAJg");
	this.shape_18.setTransform(-103.9,-14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhPB1IAAjpIBHAAIAACrIBYAAIAAA+g");
	this.shape_19.setTransform(-125.2,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-37,469.8,43.6);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BwQgfgQgSgcQgSgdgBgnQABgnASgcQASgcAfgQQAegPAlAAQAcAAAVAIQAVAJAPAOQAOANAIAQIg+AgQgGgLgMgIQgLgHgQAAQgRAAgOAIQgNAIgHAOQgIAOAAAQQAAARAIAOQAHAOANAIQAOAIARABQAMAAAKgDQAKgDAIgFIAAgLIgwAAIAAg8IB4AAIAABhQgUAXgcAOQgcANgkAAQglAAgegPg");
	this.shape.setTransform(69.4,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvB7IhaiDIAACDIhKAAIAAj1IBMAAIBVB7IAAh7IBKAAIAAD1g");
	this.shape_1.setTransform(42.9,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkB7IAAj1IBJAAIAAD1g");
	this.shape_2.setTransform(23.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvB7IhaiDIAACDIhKAAIAAj1IBMAAIBVB7IAAh7IBKAAIAAD1g");
	this.shape_3.setTransform(4.5,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB7IAAj1IC5AAIAAA+IhuAAIAAAdIBsAAIAAA9IhsAAIAAAfIBuAAIAAA+g");
	this.shape_4.setTransform(-19.6,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhtB7IAAj1ICCAAQAdABAUALQATALAKAUQALASAAAYQAAAXgLARQgKATgTALQgUALgdAAIg3AAIAABPgAgigQIAuAAQAJgBAHgGQAGgFAAgKQAAgKgGgGQgHgFgJgBIguAAg");
	this.shape_5.setTransform(-42,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDBvQgegQgSgcQgSgdAAgmQAAglASgdQASgcAegQQAdgQAmAAQAmAAAfAQQAeAQARAcQATAdgBAlQABAmgTAdQgRAcgeAQQgfAQgmAAQgmAAgdgQgAgeg0QgNAIgHAOQgIAOAAAQQAAARAIAOQAHAOANAIQAOAIAQABQASgBANgIQAOgIAGgOQAIgOAAgRQAAgQgIgOQgGgOgOgIQgNgIgSAAQgQAAgOAIg");
	this.shape_6.setTransform(-68.8,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiWCYIAAkvICIAAQAvAAAlASQAmASAVAhQAWAiAAAwQAAAwgWAjQgVAhgmASQglASgvAAgAg6BIIAsAAQAWgBAQgKQAQgJAJgQQAJgRAAgTQAAgUgIgQQgIgQgQgJQgQgJgYAAIgsAAg");
	this.shape_7.setTransform(65.3,-13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA6CYIhviiIAACiIhcAAIAAkvIBeAAIBpCYIAAiYIBcAAIAAEvg");
	this.shape_8.setTransform(31.1,-13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABGCYIgMgnIhzAAIgMAnIhkAAIBwkvIBzAAIBwEvgAAjAlIgjhqIgiBqIBFAAg");
	this.shape_9.setTransform(-1.7,-13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCYIgphhIghAAIAABhIhcAAIAAkvIChAAQAkAAAYAOQAYAOANAYQANAYAAAcQgBAagIATQgJARgNAMQgMAMgMAGIA3BrgAgrgVIA3AAQAMAAAJgHQAIgHABgNQgBgNgIgGQgJgIgMAAIg3AAg");
	this.shape_10.setTransform(-32.3,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFCKQgmgTgWgjQgWgjgBgxQABgwAWgjQAWgjAmgTQAmgTAtAAQAjAAAaAKQAbALARARQASARAKAUIhNAnQgIgOgOgJQgOgKgUAAQgVAAgRAKQgQAKgJASQgJARgBAUQABAVAJASQAJARAQAKQARAKAVAAQAPAAANgDQANgEAJgGIAAgOIg7AAIAAhKICUAAIAAB5QgZAcgjARQgiAQgtAAQgtAAgmgTg");
	this.shape_11.setTransform(-64.9,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-42.1,170,84.3);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgA/IAAhIIgBgNQgBgFgCgEQgDgFgEgCQgFgCgHAAQgHAAgFACQgHACgFAEQgFAEgDAGQgEAFgCAHQgBADAAAFIgBAHIAAA6IgXAAIAAh6IAWAAIAAAQIAAAEIAAACIAAADIAAAAIAGgJQADgFAGgEQAGgEAIgDQAGgDAKAAQAWAAAKAMQAKALAAAYIAABOg");
	this.shape.setTransform(55.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA8QgMgFgIgJQgKgIgFgMQgFgMAAgOQAAgNAFgMQAFgMAKgIQAIgJAMgFQANgFAMAAQAOAAAMAFQAMAFAJAJQAIAIAGAMQAFAMAAANQAAAOgFAMQgGAMgIAIQgJAJgMAFQgMAFgOAAQgMAAgNgFgAgQgoQgHADgFAGQgHAGgDAIQgDAIAAAJQAAAJADAJQADAIAHAGQAFAGAHADQAJADAHAAQAIAAAJgDQAHgDAGgGQAFgGADgIQAEgJAAgJQAAgJgEgIQgDgIgFgGQgGgGgHgDQgJgDgIAAQgHAAgJADg");
	this.shape_1.setTransform(40.6,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA+QgIgDgGgDQgHgEgFgFIALgRIAKAHIALAFQAGACAHAAIAIgBIAGgDIAFgFQABgCAAgEQAAgEgCgEQgDgDgEgCIgKgFIgLgFIgMgFQgFgCgFgFQgEgEgDgFQgCgGAAgIQAAgIADgGQAEgHAGgEQAGgFAIgCQAIgDAIAAQAKAAAHADIANAEQAFADAEAEIgJASIgIgGIgKgDQgFgCgHAAIgHABIgGACQgDACgCADQgBADAAAEQAAAEACADQADADAEADIAJAEIAMAFIAMAGIAKAGQAEAEADAGQACAFAAAIQAAAIgDAGQgDAHgGAEQgFAFgJADQgIADgKAAQgKAAgJgDg");
	this.shape_2.setTransform(27.8,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBXIgHgBIgHgBIgHgEQgDgCgDgEQgCgEgCgGQgBgFAAgIIAAiKIAWAAIAACGIABAJIADAFQACACACABIAFAAIACAAIABAAIABAAIAAAVIgCAAIgCABIgDAAg");
	this.shape_3.setTransform(20,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBWIAAh6IAWAAIAAB6gAgLg9IAAgYIAXAAIAAAYg");
	this.shape_4.setTransform(13.6,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBWIgdhuIgCgJIgCgIIgBgIIAAAAIgBAIIgCAIIgCAJIgdBuIgcAAIgsirIAZAAIAeB9IACAHIABAGIAAAGIABAAIABgGIABgGIABgHIAih9IAUAAIAhB9IACAHIABAGIABAGIABAAIAAgGIABgGIACgHIAfh9IAZAAIgtCrg");
	this.shape_5.setTransform(-0.6,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBVQgLgEgIgHQgIgHgEgJQgEgKAAgLQAAgGABgHQACgHAFgGQAEgGAFgFQAGgDAGgDIAAAAQgGgCgFgGIgEgEIgEgHIgCgJIgBgKQAAgKAEgJQAEgIAHgGQAHgGAJgCQAKgDAMAAIAGAAIAGABIAIABIgHAUIgEgBIgDgBIgEAAQgHAAgGACQgFACgEADQgEAEgCAEQgCAFgBAGIACAJQAAAFAEAEQAEAEAFADQAHACAKAAIAeAAIAAgWIAYAAIAAAWIAXAAIAAAVIgXAAIAAAWQAAAPgEALQgFAMgHAHQgIAIgLAEQgLAEgMAAQgNAAgLgEgAgjAOQgKAIAAAOQAAAHADAFQACAFAFAFQAEAEAHACQAGACAIAAQAIAAAFgCQAHgCAFgFQAEgEADgIQACgHAAgLIAAgVIgfAAQgTgBgJAJg");
	this.shape_6.setTransform(-25.9,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA8QgMgFgJgJQgJgJgEgLQgFgMAAgOQAAgOAFgMQAFgMAHgIQAJgIALgFQALgFAMAAQANAAAKAFQAKAEAHAIQAGAIAEALQADAKAAAMIAAADIgBADIAAADIhYAAQABALADAHQADAIAHAFQAFAFAHADQAHACAIAAQAIAAAGgCIAMgFIALgHIAJARIgNAJQgGADgIADQgJADgLAAQgNAAgMgFgAgIgrQgGACgEAEQgGAEgCAGQgEAGgBAIIBAAAQAAgIgDgGQgCgGgEgEQgEgEgFgCQgGgCgGAAQgFAAgGACg");
	this.shape_7.setTransform(-46.6,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBVQgIgEgEgEQgGgFgDgGIgBAAIABADIAAADIAAAEIAAAJIgWAAIAAisIAXAAIAAA5IAAAEIAAADIAAADIAAAAQADgGAGgEIAFgEIAHgDIAIgDIAJgBQANAAAKAFQAKAFAHAIQAGAJAEAMQAEALAAAOQAAAPgEAMQgEAMgIAIQgHAJgKAEQgLAFgMAAQgJAAgHgDgAgNgRQgGACgFAGQgFAFgDAHQgDAJAAAMQAAAIACAIQADAIAEAGQAEAGAHAEQAGADAJAAQAGAAAHgDQAGgCAFgGQAFgGADgIQACgIAAgLQAAgKgCgIQgDgHgEgGQgFgGgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_8.setTransform(-59.9,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA8QgMgFgJgJQgJgJgEgLQgFgMAAgOQAAgOAFgMQAFgMAHgIQAJgIALgFQALgFAMAAQANAAAKAFQAKAEAHAIQAGAIAEALQADAKAAAMIAAADIgBADIAAADIhYAAQABALADAHQADAIAHAFQAFAFAHADQAHACAIAAQAIAAAGgCIAMgFIALgHIAJARIgNAJQgGADgIADQgJADgLAAQgNAAgMgFgAgIgrQgGACgEAEQgGAEgCAGQgEAGgBAIIBAAAQAAgIgDgGQgCgGgEgEQgEgEgFgCQgGgCgGAAQgFAAgGACg");
	this.shape_9.setTransform(-74,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANBXIgHgBIgHgBIgHgEQgDgCgDgEQgCgEgCgGQgBgFAAgIIAAiKIAWAAIAACGIABAJIADAFQACACACABIAFAAIACAAIABAAIABAAIAAAVIgCAAIgCABIgDAAg");
	this.shape_10.setTransform(-83.1,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQBWQgLgDgJgGQgJgFgIgIQgIgIgFgKQgGgKgDgMQgDgMAAgMQAAgMADgLQADgMAGgKQAFgJAIgJQAIgHAJgGQAKgGALgDQAMgDALAAIAPABIAMACIALADIAJAEQAJAFAGAGIgMASIgNgJQgGgDgJgDQgJgCgLAAQgOAAgMAFQgMAFgIAJQgIAJgFANQgEALAAAOQAAAOAFAMQAEANAJAJQAIAJAMAFQALAEANABIAKgBIAKgCIAIgEIAHgEIANgKIAAgZIgcAAIAAgVIAyAAIAABWIgVAAIAAgKIAAgDIAAgDIAAgCIgBAAQgFAGgIAEQgHAFgJADQgKADgNAAQgKAAgLgDg");
	this.shape_11.setTransform(-95.9,17.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAzCRIhaiYIgGgNIgEgMIgCgFIgBAAIAAAGIABANIABAOIAABgIAiAAIAAA1IiLAAIAAg1IAhAAIAAi4IghAAIAAg0IBqAAIBZCZIAGANIAFALIABAFIACAAIgBgFIgBgNIgBgOIAAhiIgiAAIAAg0ICLAAIAAA0IggAAIAADtg");
	this.shape_12.setTransform(76.3,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOCCQgigUgTgiQgTgjgBgqQABgqATgiQATghAigUQAigTAsAAQAsAAAiATQAjAUATAhQATAiAAAqQAAAqgTAjQgTAigjAUQgiAUgsAAQgsAAgigUgAgmhLQgRALgKATQgLAUAAAYQAAAZALAUQAKAUARAMQASALAUAAQAVAAARgLQASgMAKgUQALgUAAgZQAAgYgLgUQgKgTgSgLQgRgLgVAAQgUAAgSALg");
	this.shape_13.setTransform(42.9,-13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhECRIAAg1IAhAAIAAizIgjAAIAAApIg8AAIAAhiIEFAAIAABiIg9AAIAAgpIgiAAIAACzIAgAAIAAA1g");
	this.shape_14.setTransform(12.8,-13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1COQgYgIgPgPQgPgQgBgXIAAgmIBBAAIAAAWQAAALAMAGQAMAGASAAQAQAAAKgGQALgGAAgLQAAgLgJgHQgJgHgOgGIgdgLQgUgHgRgLQgRgJgLgQQgKgRgBgaQAAgZAJgQQAJgQAPgKQAPgKASgEQATgEASAAQAZAAAWAGQAWAGAOAMQAOANABASIAAArIhBAAIAAgSQAAgJgKgEQgJgEgOAAQgMgBgJAFQgJAEAAALQAAAKAHAHQAHAHALAFIAYAJQAWAIAUAKQAUAKANAQQAMARABAbQAAAZgKARQgJASgQALQgQAKgUAFQgUAFgTAAQgcAAgYgIg");
	this.shape_15.setTransform(-13.3,-13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhwCRIAAg1IAgAAIAAizIggAAIAAg5ICHAAIAAA5IgfAAIAACvIA9AAIAAgqIA8AAIAABjg");
	this.shape_16.setTransform(-37.4,-13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhxCRIAAg1IAhAAIAAizIghAAIAAg5ICJAAIAAA5IggAAIAACvIA9AAIAAgqIA9AAIAABjg");
	this.shape_17.setTransform(-62.5,-13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXCRIAAg1IAZAAIgLgmIhJAAIgLAmIAZAAIAAA1Ih5AAIAAg1IAYAAIBPjsIBRAAIBPDsIAXAAIAAA1gAAWgBIgQg1IgEgWIgBgJIgBAAIgBAJIgEAWIgPA1IAqAAg");
	this.shape_18.setTransform(-90.2,-13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah8CRIAAg1IAgAAIAAi4IggAAIAAg0ICGAAIAdABQAMABAMAEQAXAIANASQAOASAAAZQAAATgJARQgIARgRAJIAAABQARAGAKAJQAKAKAEAOQAFANAAAOQAAAWgJARQgJAQgPALQgOALgSAEIgVAEIgVAAgAgUBYIApAAQAIAAAGgCQAIgEAEgJQAFgJAAgKQAAgNgHgIQgIgJgQAAIgpAAgAgUggIAjAAQANAAAHgIQAGgIgBgMQAAgIgCgHQgEgHgGgDIgIgCIgKAAIgeAAg");
	this.shape_19.setTransform(-118.6,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.8,-39.5,232,73.7);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BwQgfgQgSgcQgSgdgBgnQABgnASgcQASgcAfgQQAegPAlAAQAcAAAVAIQAVAJAPAOQAOANAIAQIg+AgQgGgLgMgIQgLgHgQAAQgRAAgOAIQgNAIgHAOQgIAOAAAQQAAARAIAOQAHAOANAIQAOAIARABQAMAAAKgDQAKgDAIgFIAAgLIgwAAIAAg8IB4AAIAABhQgUAXgcAOQgcANgkAAQglAAgegPg");
	this.shape.setTransform(69.4,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvB7IhaiDIAACDIhKAAIAAj1IBMAAIBVB7IAAh7IBKAAIAAD1g");
	this.shape_1.setTransform(42.9,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkB7IAAj1IBJAAIAAD1g");
	this.shape_2.setTransform(23.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvB7IhaiDIAACDIhKAAIAAj1IBMAAIBVB7IAAh7IBKAAIAAD1g");
	this.shape_3.setTransform(4.5,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB7IAAj1IC5AAIAAA+IhuAAIAAAdIBsAAIAAA9IhsAAIAAAfIBuAAIAAA+g");
	this.shape_4.setTransform(-19.6,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhtB7IAAj1ICCAAQAdABAUALQATALAKAUQALASAAAYQAAAXgLARQgKATgTALQgUALgdAAIg3AAIAABPgAgigQIAuAAQAJgBAHgGQAGgFAAgKQAAgKgGgGQgHgFgJgBIguAAg");
	this.shape_5.setTransform(-42,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDBvQgegQgSgcQgSgdAAgmQAAglASgdQASgcAegQQAdgQAmAAQAmAAAfAQQAeAQARAcQATAdgBAlQABAmgTAdQgRAcgeAQQgfAQgmAAQgmAAgdgQgAgeg0QgNAIgHAOQgIAOAAAQQAAARAIAOQAHAOANAIQAOAIAQABQASgBANgIQAOgIAGgOQAIgOAAgRQAAgQgIgOQgGgOgOgIQgNgIgSAAQgQAAgOAIg");
	this.shape_6.setTransform(-68.8,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiWCYIAAkvICIAAQAvAAAlASQAmASAVAhQAWAiAAAwQAAAwgWAjQgVAhgmASQglASgvAAgAg6BIIAsAAQAWgBAQgKQAQgJAJgQQAJgRAAgTQAAgUgIgQQgIgQgQgJQgQgJgYAAIgsAAg");
	this.shape_7.setTransform(65.3,-13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA6CYIhviiIAACiIhcAAIAAkvIBeAAIBpCYIAAiYIBcAAIAAEvg");
	this.shape_8.setTransform(31.1,-13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABGCYIgMgnIhzAAIgMAnIhkAAIBwkvIBzAAIBwEvgAAjAlIgjhqIgiBqIBFAAg");
	this.shape_9.setTransform(-1.7,-13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCYIgphhIghAAIAABhIhcAAIAAkvIChAAQAkAAAYAOQAYAOANAYQANAYAAAcQgBAagIATQgJARgNAMQgMAMgMAGIA3BrgAgrgVIA3AAQAMAAAJgHQAIgHABgNQgBgNgIgGQgJgIgMAAIg3AAg");
	this.shape_10.setTransform(-32.3,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFCKQgmgTgWgjQgWgjgBgxQABgwAWgjQAWgjAmgTQAmgTAtAAQAjAAAaAKQAbALARARQASARAKAUIhNAnQgIgOgOgJQgOgKgUAAQgVAAgRAKQgQAKgJASQgJARgBAUQABAVAJASQAJARAQAKQARAKAVAAQAPAAANgDQANgEAJgGIAAgOIg7AAIAAhKICUAAIAAB5QgZAcgjARQgiAQgtAAQgtAAgmgTg");
	this.shape_11.setTransform(-64.9,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-42.1,170,84.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgkAyIAAhjIBJAAIAAAVIgvAAIAAARIAuAAIAAAVIguAAIAAASIAvAAIAAAWg");
	this.shape.setTransform(61.1,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAWAyIgpg8IAAA8IgbAAIAAhjIAbAAIAnA4IAAg4IAaAAIAABjg");
	this.shape_1.setTransform(51,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgMAyIAAhjIAZAAIAABjg");
	this.shape_2.setTransform(43.3,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAPAyIgPg+IgOA+IgcAAIgchjIAdAAIAPBBIARhBIATAAIARBBIAPhBIAdAAIgdBjg");
	this.shape_3.setTransform(34,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgaAtQgMgHgIgLQgGgMAAgPQAAgPAGgLQAIgMAMgGQALgHAPAAQAPAAANAHQALAGAIAMQAGALABAPQgBAPgGAMQgIALgLAHQgNAGgPABQgPgBgLgGgAgOgYQgFADgEAHQgDAHAAAHQAAAIADAHQAEAGAFAEQAGAEAIAAQAIAAAGgEQAHgEACgGQAEgHAAgIQAAgHgEgHQgCgHgHgDQgGgEgIAAQgIAAgGAEg");
	this.shape_4.setTransform(21.3,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgWAtQgMgGgHgMQgHgLAAgQQAAgPAHgMQAHgLAMgHQANgGAOAAQALAAAIADQAIADAGAGQAGAFAEAGIgWAMQgDgFgGgEQgFgDgHAAQgHAAgHAEQgGADgEAHQgDAHAAAHQAAAIADAHQAEAGAGAEQAHAEAHAAQAGAAAFgCIAIgEIAAgJIgXAAIAAgUIAwAAIAAAmQgIAJgLAFQgLAFgOABQgOAAgNgHg");
	this.shape_5.setTransform(10,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAhQgJgEgFgJQgFgIAAgMQAAgKAFgIQAFgJAIgFQAIgFALAAQAKAAAJAFQAIAFAEAJQAFAJAAALIAAAEIg1AAQABAFACADQADAEAEADQAFACAFAAQAFAAAFgCQAGgCADgDIAJAMQgGAFgIADQgIACgIAAQgKAAgJgFgAASgGQAAgDgCgEQgBgEgEgCQgEgDgGAAQgFAAgEADQgEACgCAEIgCAHIAiAAIAAAAg");
	this.shape_6.setTransform(-3.3,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAvQgHgFgFgJQgEgIAAgMQAAgMAEgHQAEgJAIgFQAHgEAJAAQAGAAAFACQAGADAFAGIAAglIATAAIAABjIgTAAIAAgJQgFAFgGADQgFADgGAAQgJAAgHgEgAgLgCQgFAFAAAKQAAAJAFAGQAFAGAHAAQAFAAAEgDQAFgBADgFIAAgZQgDgCgFgDQgEgCgFAAQgHAAgFAFg");
	this.shape_7.setTransform(-12.1,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAhQgIgFgFgJQgEgJAAgKQAAgJAEgJQAFgJAIgFQAJgFALAAQAMAAAIAFQAJAFAFAJQAEAJAAAJQAAAKgEAJQgFAJgJAFQgIAFgMAAQgLAAgJgFgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAEADAFAAQAGAAAEgDQAEgDACgEQACgFAAgGQAAgFgCgFQgCgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_8.setTransform(-20.6,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAhQgJgFgFgIQgEgJAAgLQAAgKAEgJQAFgIAJgFQAJgFAKAAIAMACQAGACAEADIAGAGIgMAMQgDgEgDgCQgEgCgFAAQgIAAgGAGQgFAFAAAJQAAAKAFAFQAGAGAIAAQAFAAAEgCQADgCADgEIAMAMIgGAGQgEADgGACQgFACgHAAQgKAAgJgFg");
	this.shape_9.setTransform(-28.5,27.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAyIAAgsQAAgHgDgDQgEgCgGAAQgFAAgFACIgGAFIAAAxIgTAAIAAhjIATAAIAAAlQADgFAHgDQAGgDAJAAQALAAAHAGQAFAGAAAKIAAAzg");
	this.shape_10.setTransform(-40.6,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAqQgFgGAAgJIAAglIgMAAIAAgQIAMAAIAAgUIASAAIAAAUIAPAAIAAAQIgPAAIAAAgQAAADACACQACADADAAIAEgBIACgBIAEAOIgGADQgEACgGAAQgJAAgFgFg");
	this.shape_11.setTransform(-47.5,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA0IAAhHIASAAIAABHgAgHggQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_12.setTransform(-51.9,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAkIgPgwIgOAwIgVAAIgWhHIAUAAIAOAwIAPgwIAQAAIAQAwIAOgwIAUAAIgWBHg");
	this.shape_13.setTransform(-59.6,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAzQgOgHgIgNQgHgNgBgSQAAgQAIgNQAHgMANgIQANgIAQgBQARAAAMAJQAMAHAHAOQAIAOAAARIAAAGIhSAAQABAIAEAFQAEAGAHADQAGAEAJAAQAIAAAIgDQAIgDAGgFIAMATQgIAHgMAFQgMADgNAAQgQAAgNgHgAAcgKQAAgFgDgGQgCgFgGgEQgHgEgJAAQgIAAgGAEQgGADgDAGQgDAGAAAFIA1AAIAAAAg");
	this.shape_14.setTransform(71.8,6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_15.setTransform(61.7,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_16.setTransform(50.5,6.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA3A5IAAhFQAAgIgFgFQgDgFgKAAQgHAAgGAEQgGAFgEAEIAABKIgcAAIAAhFQABgIgEgFQgFgFgJAAQgHABgGADQgGAEgDAFIAABKIgdAAIAAhuIAdAAIAAAPQACgEAGgEQAEgEAIgDQAIgDAIAAQAMAAAHAFQAIAGADAKQADgGAGgEQAGgFAHgDQAHgDAJAAQAPAAAJAJQAIAHAAARIAABQg");
	this.shape_17.setTransform(34.1,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_18.setTransform(14.7,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_19.setTransform(3.5,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbBIQgNgGgHgMQgIgLgEgOQgDgOgBgPQABgOADgOQAEgOAIgMQAHgLANgHQALgGAQgBQAQABAMAGQAMAHAIALQAHAMAFAOQADAOAAAOQAAAPgDAOQgFAOgHALQgIAMgMAGQgMAHgQAAQgQAAgLgHgAgRgrQgHAHgDALQgCAMAAANQAAAOACALQADAMAHAGQAHAHAKABQAKgBAHgHQAHgGADgMQADgLAAgOQAAgNgDgMQgDgLgHgHQgHgGgKAAQgKAAgHAGg");
	this.shape_20.setTransform(-16.1,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBIQgOgGgKgLIASgWQAIAIAKAEQAKAFAMAAQAOgBAHgGQAHgHAAgJQAAgLgHgGQgHgHgNAAQgJAAgIADQgIADgGAHIgYgHIAAhWIBpAAIAAAcIhIAAIAAAmQAFgFAKgEQAHgDALgBQAOABAKAFQAMAGAGALQAHALAAAPQAAAQgIAMQgHAMgOAHQgOAGgRAAQgUAAgPgGg");
	this.shape_21.setTransform(-30.1,4.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBkIAAgVQgSgBgOgHQgNgGgJgKIARgZQAHAHAJAFQAJAGAMACIAAgkQgMgDgLgFQgMgFgHgIQgHgJgBgPQABgMAFgKQAGgKALgGQALgHAQgCIAAgVIAVAAIAAAWQAOABALAGQAMAFAJAIIgSAYQgGgFgHgEQgHgEgIgCIAAAhQAMADALAFQAMAFAHAIQAIAJAAAPQAAANgFAKQgGALgLAGQgLAHgRACIAAAVgAALAzQAJgCAFgFQAFgEAAgGQAAgGgGgEQgFgDgIgDgAgTgsQgFAEAAAGQAAAFAFAEQAFADAIACIAAgdQgJAAgEAFg");
	this.shape_22.setTransform(-44.4,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBOIAAhUIgSAAIAAgaIASAAIAAgGQAAgMAEgJQAGgJAIgEQAHgFALAAQAGAAAGABQAFACAEACIgFAVIgFgCIgFAAQgGAAgEADQgDAFgBAHIAAAGIAXAAIAAAaIgXAAIAABUg");
	this.shape_23.setTransform(-60.7,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_24.setTransform(-71.4,6.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAzQgNgHgHgNQgJgNAAgSQABgPAHgNQAHgNANgJQANgHAQgBQAQABANAHQAMAIAIAOQAGANABASIAAAGIhSAAQABAHAEAGQAEAGAGADQAIAEAIAAQAIAAAIgDQAIgDAFgFIAOATQgJAIgMAEQgMADgNAAQgRAAgNgHgAAcgJQAAgGgDgGQgDgGgGgDQgFgEgKAAQgIAAgGAEQgGADgDAGQgDAGgBAGIA2AAIAAAAg");
	this.shape_25.setTransform(66.1,-18.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaA2QgNgFgJgIIANgVQAEAEAGAEQAHADAHADQAHACAGAAQAKAAAEgEQAFgDAAgEQgBgGgGgDQgGgDgJgCIgTgEQgKgEgHgGQgHgGAAgOQAAgJAFgIQAFgHALgFQAKgFANgBQAOAAAMAFQALAEAIAHIgMAUQgFgFgJgFQgIgDgLAAQgGAAgFACQgFAEAAAEQAAAFAGADQAGADAIABIAPAEQAIACAHADQAGAEAFAGQAEAHAAAJQAAALgGAIQgFAIgLAFQgLAEgPAAQgOAAgNgEg");
	this.shape_26.setTransform(54.1,-18.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeA3QgIgFgHgIQgFgIAAgNQAAgNAFgHQAHgHAIgDQAJgEAJAAQALAAAIAEQAKADAFAGIAAgPQAAgJgHgEQgGgGgKAAQgJABgJADQgHADgIAGIgLgTQAKgJANgEQAMgFANAAQAMAAALAFQAMAEAGAIQAHAKAAAPIAABHIgdAAIAAgLQgGAHgJAEQgIADgLAAQgJAAgJgDgAgPAKQgGAEAAAIQAAAIAGAFQAGADAIAAQAHABAGgDQAHgDADgEIAAgOQgDgFgHgCQgGgDgHAAQgIAAgGAFg");
	this.shape_27.setTransform(42.1,-18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAXBNIAAhEQAAgKgGgFQgFgEgKAAQgHAAgHAEQgGAEgEAEIAABLIgdAAIAAiZIAdAAIAAA5QAFgHAKgFQAJgFAOAAQASAAAJAJQAJAJAAARIAABOg");
	this.shape_28.setTransform(29.5,-20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAzQgNgIgIgNQgHgNAAgRQAAgRAHgNQAIgNANgHQANgIARAAQALAAAIAEQAJADAGAEQAGAEADAGIgTASQgEgHgGgCQgGgEgHAAQgNABgIAIQgIAJAAAOQAAAPAIAIQAIAJANAAQAHAAAGgDQAGgDAEgGIATASQgDAFgGAFQgGAFgJACQgIADgLAAQgRAAgNgHg");
	this.shape_29.setTransform(17.2,-18.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_30.setTransform(7.7,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqAwQgJgJAAgRIAAhOIAdAAIAABDQAAALAGAEQAFAFAJAAQAIgBAHgDQAGgEAEgFIAAhKIAdAAIAABuIgdAAIAAgOQgGAHgKAEQgIAGgOAAQgTgBgIgIg");
	this.shape_31.setTransform(-3.6,-18.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag3BOIAAiYIAdAAIAAAOQAGgIAJgFQAJgEAJAAQAPAAALAHQALAHAGAMQAGAOAAASQAAATgGAMQgGANgLAHQgLAGgPABQgJAAgIgFQgJgEgHgIIAAA4gAgPgvQgHADgEAGIAAAmQAEAFAHAEQAHAEAHAAQAMgBAHgIQAIgIAAgPQAAgOgIgJQgHgJgMAAQgHAAgHAEg");
	this.shape_32.setTransform(-16.6,-16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcA0QgJgEgFgIQgGgHAAgMQAAgNAGgHQAFgHAJgDQAIgDAJAAQAKAAAIADQAJADAFAGIAAgOQAAgIgGgFQgGgFgKAAQgIAAgIADQgIAEgHAGIgKgTQAJgJAMgEQAMgEAMAAQAMAAALAEQAKAEAHAJQAGAIAAAQIAABDIgcAAIAAgLQgFAHgJADQgIAEgKAAQgJAAgIgEgAgOAKQgGAEAAAHQAAAIAGAEQAFAEAJAAQAGAAAGgCQAGgDADgEIAAgNQgDgFgGgCQgGgDgGAAQgJAAgFAFg");
	this.shape_33.setTransform(-35.7,-18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWA2IAAg/QAAgKgGgFQgFgFgJABQgHAAgGADQgGAEgEAFIAABGIgcAAIAAhpIAcAAIAAAOQAFgGAKgGQAIgEANAAQASAAAIAJQAJAIAAARIAABJg");
	this.shape_34.setTransform(-53.3,-18.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAwQgNgHgGgNQgHgNAAgPQAAgOAHgNQAGgMANgIQAMgHARgBQASABAMAHQANAIAGAMQAHANAAAOQAAAPgHANQgGANgNAHQgMAIgSAAQgRAAgMgIgAgOgaQgGAFgDAHQgDAHAAAHQAAAJADAHQADAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQADgHAAgJQAAgHgDgHQgDgHgGgFQgGgEgJAAQgIAAgGAEg");
	this.shape_35.setTransform(-66,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,-36.2,183.5,72.5);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgkAyIAAhjIBJAAIAAAVIgvAAIAAARIAuAAIAAAVIguAAIAAASIAvAAIAAAWg");
	this.shape.setTransform(61.1,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAWAyIgpg8IAAA8IgbAAIAAhjIAbAAIAnA4IAAg4IAaAAIAABjg");
	this.shape_1.setTransform(51,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgMAyIAAhjIAZAAIAABjg");
	this.shape_2.setTransform(43.3,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAPAyIgPg+IgOA+IgcAAIgchjIAdAAIAPBBIARhBIATAAIARBBIAPhBIAdAAIgdBjg");
	this.shape_3.setTransform(34,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgaAtQgMgHgIgLQgGgMAAgPQAAgPAGgLQAIgMAMgGQALgHAPAAQAPAAANAHQALAGAIAMQAGALABAPQgBAPgGAMQgIALgLAHQgNAGgPABQgPgBgLgGgAgOgYQgFADgEAHQgDAHAAAHQAAAIADAHQAEAGAFAEQAGAEAIAAQAIAAAGgEQAHgEACgGQAEgHAAgIQAAgHgEgHQgCgHgHgDQgGgEgIAAQgIAAgGAEg");
	this.shape_4.setTransform(21.3,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgWAtQgMgGgHgMQgHgLAAgQQAAgPAHgMQAHgLAMgHQANgGAOAAQALAAAIADQAIADAGAGQAGAFAEAGIgWAMQgDgFgGgEQgFgDgHAAQgHAAgHAEQgGADgEAHQgDAHAAAHQAAAIADAHQAEAGAGAEQAHAEAHAAQAGAAAFgCIAIgEIAAgJIgXAAIAAgUIAwAAIAAAmQgIAJgLAFQgLAFgOABQgOAAgNgHg");
	this.shape_5.setTransform(10,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAhQgJgEgFgJQgFgIAAgMQAAgKAFgIQAFgJAIgFQAIgFALAAQAKAAAJAFQAIAFAEAJQAFAJAAALIAAAEIg1AAQABAFACADQADAEAEADQAFACAFAAQAFAAAFgCQAGgCADgDIAJAMQgGAFgIADQgIACgIAAQgKAAgJgFgAASgGQAAgDgCgEQgBgEgEgCQgEgDgGAAQgFAAgEADQgEACgCAEIgCAHIAiAAIAAAAg");
	this.shape_6.setTransform(-3.3,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAvQgHgFgFgJQgEgIAAgMQAAgMAEgHQAEgJAIgFQAHgEAJAAQAGAAAFACQAGADAFAGIAAglIATAAIAABjIgTAAIAAgJQgFAFgGADQgFADgGAAQgJAAgHgEgAgLgCQgFAFAAAKQAAAJAFAGQAFAGAHAAQAFAAAEgDQAFgBADgFIAAgZQgDgCgFgDQgEgCgFAAQgHAAgFAFg");
	this.shape_7.setTransform(-12.1,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAhQgIgFgFgJQgEgJAAgKQAAgJAEgJQAFgJAIgFQAJgFALAAQAMAAAIAFQAJAFAFAJQAEAJAAAJQAAAKgEAJQgFAJgJAFQgIAFgMAAQgLAAgJgFgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAEADAFAAQAGAAAEgDQAEgDACgEQACgFAAgGQAAgFgCgFQgCgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_8.setTransform(-20.6,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAhQgJgFgFgIQgEgJAAgLQAAgKAEgJQAFgIAJgFQAJgFAKAAIAMACQAGACAEADIAGAGIgMAMQgDgEgDgCQgEgCgFAAQgIAAgGAGQgFAFAAAJQAAAKAFAFQAGAGAIAAQAFAAAEgCQADgCADgEIAMAMIgGAGQgEADgGACQgFACgHAAQgKAAgJgFg");
	this.shape_9.setTransform(-28.5,27.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAyIAAgsQAAgHgDgDQgEgCgGAAQgFAAgFACIgGAFIAAAxIgTAAIAAhjIATAAIAAAlQADgFAHgDQAGgDAJAAQALAAAHAGQAFAGAAAKIAAAzg");
	this.shape_10.setTransform(-40.6,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAqQgFgGAAgJIAAglIgMAAIAAgQIAMAAIAAgUIASAAIAAAUIAPAAIAAAQIgPAAIAAAgQAAADACACQACADADAAIAEgBIACgBIAEAOIgGADQgEACgGAAQgJAAgFgFg");
	this.shape_11.setTransform(-47.5,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA0IAAhHIASAAIAABHgAgHggQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_12.setTransform(-51.9,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAkIgPgwIgOAwIgVAAIgWhHIAUAAIAOAwIAPgwIAQAAIAQAwIAOgwIAUAAIgWBHg");
	this.shape_13.setTransform(-59.6,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAzQgOgHgIgNQgHgNgBgSQAAgQAIgNQAHgMANgIQANgIAQgBQARAAAMAJQAMAHAHAOQAIAOAAARIAAAGIhSAAQABAIAEAFQAEAGAHADQAGAEAJAAQAIAAAIgDQAIgDAGgFIAMATQgIAHgMAFQgMADgNAAQgQAAgNgHgAAcgKQAAgFgDgGQgCgFgGgEQgHgEgJAAQgIAAgGAEQgGADgDAGQgDAGAAAFIA1AAIAAAAg");
	this.shape_14.setTransform(71.8,6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_15.setTransform(61.7,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_16.setTransform(50.5,6.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA3A5IAAhFQAAgIgFgFQgDgFgKAAQgHAAgGAEQgGAFgEAEIAABKIgcAAIAAhFQABgIgEgFQgFgFgJAAQgHABgGADQgGAEgDAFIAABKIgdAAIAAhuIAdAAIAAAPQACgEAGgEQAEgEAIgDQAIgDAIAAQAMAAAHAFQAIAGADAKQADgGAGgEQAGgFAHgDQAHgDAJAAQAPAAAJAJQAIAHAAARIAABQg");
	this.shape_17.setTransform(34.1,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_18.setTransform(14.7,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_19.setTransform(3.5,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbBIQgNgGgHgMQgIgLgEgOQgDgOgBgPQABgOADgOQAEgOAIgMQAHgLANgHQALgGAQgBQAQABAMAGQAMAHAIALQAHAMAFAOQADAOAAAOQAAAPgDAOQgFAOgHALQgIAMgMAGQgMAHgQAAQgQAAgLgHgAgRgrQgHAHgDALQgCAMAAANQAAAOACALQADAMAHAGQAHAHAKABQAKgBAHgHQAHgGADgMQADgLAAgOQAAgNgDgMQgDgLgHgHQgHgGgKAAQgKAAgHAGg");
	this.shape_20.setTransform(-16.1,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBIQgOgGgKgLIASgWQAIAIAKAEQAKAFAMAAQAOgBAHgGQAHgHAAgJQAAgLgHgGQgHgHgNAAQgJAAgIADQgIADgGAHIgYgHIAAhWIBpAAIAAAcIhIAAIAAAmQAFgFAKgEQAHgDALgBQAOABAKAFQAMAGAGALQAHALAAAPQAAAQgIAMQgHAMgOAHQgOAGgRAAQgUAAgPgGg");
	this.shape_21.setTransform(-30.1,4.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBkIAAgVQgSgBgOgHQgNgGgJgKIARgZQAHAHAJAFQAJAGAMACIAAgkQgMgDgLgFQgMgFgHgIQgHgJgBgPQABgMAFgKQAGgKALgGQALgHAQgCIAAgVIAVAAIAAAWQAOABALAGQAMAFAJAIIgSAYQgGgFgHgEQgHgEgIgCIAAAhQAMADALAFQAMAFAHAIQAIAJAAAPQAAANgFAKQgGALgLAGQgLAHgRACIAAAVgAALAzQAJgCAFgFQAFgEAAgGQAAgGgGgEQgFgDgIgDgAgTgsQgFAEAAAGQAAAFAFAEQAFADAIACIAAgdQgJAAgEAFg");
	this.shape_22.setTransform(-44.4,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBOIAAhUIgSAAIAAgaIASAAIAAgGQAAgMAEgJQAGgJAIgEQAHgFALAAQAGAAAGABQAFACAEACIgFAVIgFgCIgFAAQgGAAgEADQgDAFgBAHIAAAGIAXAAIAAAaIgXAAIAABUg");
	this.shape_23.setTransform(-60.7,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAyQgNgIgHgNQgHgNAAgQQAAgPAHgOQAHgMANgIQANgIASgBQASABANAIQANAIAIAMQAHAOAAAPQAAAQgHANQgIANgNAIQgNAIgSAAQgSAAgNgIgAgPgbQgGAEgDAIQgEAHAAAIQAAAJAEAHQADAHAGAFQAHAFAIgBQAJABAGgFQAHgFADgHQADgHAAgJQAAgIgDgHQgDgIgHgEQgGgEgJgBQgIABgHAEg");
	this.shape_24.setTransform(-71.4,6.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAzQgNgHgHgNQgJgNAAgSQABgPAHgNQAHgNANgJQANgHAQgBQAQABANAHQAMAIAIAOQAGANABASIAAAGIhSAAQABAHAEAGQAEAGAGADQAIAEAIAAQAIAAAIgDQAIgDAFgFIAOATQgJAIgMAEQgMADgNAAQgRAAgNgHgAAcgJQAAgGgDgGQgDgGgGgDQgFgEgKAAQgIAAgGAEQgGADgDAGQgDAGgBAGIA2AAIAAAAg");
	this.shape_25.setTransform(66.1,-18.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaA2QgNgFgJgIIANgVQAEAEAGAEQAHADAHADQAHACAGAAQAKAAAEgEQAFgDAAgEQgBgGgGgDQgGgDgJgCIgTgEQgKgEgHgGQgHgGAAgOQAAgJAFgIQAFgHALgFQAKgFANgBQAOAAAMAFQALAEAIAHIgMAUQgFgFgJgFQgIgDgLAAQgGAAgFACQgFAEAAAEQAAAFAGADQAGADAIABIAPAEQAIACAHADQAGAEAFAGQAEAHAAAJQAAALgGAIQgFAIgLAFQgLAEgPAAQgOAAgNgEg");
	this.shape_26.setTransform(54.1,-18.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeA3QgIgFgHgIQgFgIAAgNQAAgNAFgHQAHgHAIgDQAJgEAJAAQALAAAIAEQAKADAFAGIAAgPQAAgJgHgEQgGgGgKAAQgJABgJADQgHADgIAGIgLgTQAKgJANgEQAMgFANAAQAMAAALAFQAMAEAGAIQAHAKAAAPIAABHIgdAAIAAgLQgGAHgJAEQgIADgLAAQgJAAgJgDgAgPAKQgGAEAAAIQAAAIAGAFQAGADAIAAQAHABAGgDQAHgDADgEIAAgOQgDgFgHgCQgGgDgHAAQgIAAgGAFg");
	this.shape_27.setTransform(42.1,-18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAXBNIAAhEQAAgKgGgFQgFgEgKAAQgHAAgHAEQgGAEgEAEIAABLIgdAAIAAiZIAdAAIAAA5QAFgHAKgFQAJgFAOAAQASAAAJAJQAJAJAAARIAABOg");
	this.shape_28.setTransform(29.5,-20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAzQgNgIgIgNQgHgNAAgRQAAgRAHgNQAIgNANgHQANgIARAAQALAAAIAEQAJADAGAEQAGAEADAGIgTASQgEgHgGgCQgGgEgHAAQgNABgIAIQgIAJAAAOQAAAPAIAIQAIAJANAAQAHAAAGgDQAGgDAEgGIATASQgDAFgGAFQgGAFgJACQgIADgLAAQgRAAgNgHg");
	this.shape_29.setTransform(17.2,-18.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfA5IAAhuIAdAAIAAAPQAFgIAJgFQAKgFAKAAIAAAdIgDgBIgFAAIgKABIgKAFQgEADgCADIAABJg");
	this.shape_30.setTransform(7.7,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqAwQgJgJAAgRIAAhOIAdAAIAABDQAAALAGAEQAFAFAJAAQAIgBAHgDQAGgEAEgFIAAhKIAdAAIAABuIgdAAIAAgOQgGAHgKAEQgIAGgOAAQgTgBgIgIg");
	this.shape_31.setTransform(-3.6,-18.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag3BOIAAiYIAdAAIAAAOQAGgIAJgFQAJgEAJAAQAPAAALAHQALAHAGAMQAGAOAAASQAAATgGAMQgGANgLAHQgLAGgPABQgJAAgIgFQgJgEgHgIIAAA4gAgPgvQgHADgEAGIAAAmQAEAFAHAEQAHAEAHAAQAMgBAHgIQAIgIAAgPQAAgOgIgJQgHgJgMAAQgHAAgHAEg");
	this.shape_32.setTransform(-16.6,-16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcA0QgJgEgFgIQgGgHAAgMQAAgNAGgHQAFgHAJgDQAIgDAJAAQAKAAAIADQAJADAFAGIAAgOQAAgIgGgFQgGgFgKAAQgIAAgIADQgIAEgHAGIgKgTQAJgJAMgEQAMgEAMAAQAMAAALAEQAKAEAHAJQAGAIAAAQIAABDIgcAAIAAgLQgFAHgJADQgIAEgKAAQgJAAgIgEgAgOAKQgGAEAAAHQAAAIAGAEQAFAEAJAAQAGAAAGgCQAGgDADgEIAAgNQgDgFgGgCQgGgDgGAAQgJAAgFAFg");
	this.shape_33.setTransform(-35.7,-18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWA2IAAg/QAAgKgGgFQgFgFgJABQgHAAgGADQgGAEgEAFIAABGIgcAAIAAhpIAcAAIAAAOQAFgGAKgGQAIgEANAAQASAAAIAJQAJAIAAARIAABJg");
	this.shape_34.setTransform(-53.3,-18.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAwQgNgHgGgNQgHgNAAgPQAAgOAHgNQAGgMANgIQAMgHARgBQASABAMAHQANAIAGAMQAHANAAAOQAAAPgHANQgGANgNAHQgMAIgSAAQgRAAgMgIgAgOgaQgGAFgDAHQgDAHAAAHQAAAJADAHQADAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQADgHAAgJQAAgHgDgHQgDgHgGgFQgGgEgJAAQgIAAgGAEg");
	this.shape_35.setTransform(-66,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,-36.2,183.5,72.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEQgNgCgRgEQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape.setTransform(15.8,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYB1IgfhLIgaAAIAABLIhHAAIAAjpIB8AAQAbABATAKQASALAKASQAKASAAAWQAAAVgHAOQgGANgKAJQgJAJgKAEIAqBTgAghgQIAqAAQAKAAAGgFQAHgGAAgKQAAgJgHgFQgGgGgKAAIgqAAg");
	this.shape_1.setTransform(-6,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_2.setTransform(-28.3,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_3.setTransform(-49,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrB1IAAjpICNAAQAYABAPAJQAQAJAHANQAHAOAAAOQAAAWgLAOQgLAOgSADQAUADAMAPQAMAPABAXQAAARgIAOQgHAPgQAJQgPAIgXABgAgkA7IA4AAQAHAAAFgEQAEgFAAgGQAAgHgEgFQgFgEgHAAIg4AAgAgkgdIA1AAQAGAAAEgEQAEgEABgHQgBgGgEgEQgEgEgGAAIg1AAg");
	this.shape_4.setTransform(-71.3,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBvQgTgKgNgRQgNgRgGgWQgGgVAAgYQAAgXAGgWQAGgVANgRQANgRATgKQAUgKAZAAQAaAAATAKQAUAKANARQAMARAHAVQAGAWABAXQgBAYgGAVQgHAWgMARQgNARgUAKQgTAJgaABQgZgBgUgJgAgXgrQgJAOABAdQgBAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_5.setTransform(-103.6,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQAMARAHAVQAGAWAAAXQAAAYgGAVQgHAWgMARQgNARgTAKQgUAJgaABQgagBgSgJgAgXgrQgJAOAAAdQAAAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_6.setTransform(-125.4,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BuQgZgJgRgPIAlguQAMAJAQAFQAQAGAQAAQAQgBAIgGQAIgHAAgJQAAgIgHgGQgIgHgPAAQgNAAgLAFQgLADgIAJIgxgLIAAiMICxAAIAAA7IhuAAIAAAlQALgIANgFQAMgFAPAAQAUAAASAKQAQAIALASQAKAPABAYQgBAngbAWQgbAXgwAAQggAAgYgJg");
	this.shape_7.setTransform(-147,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeApIAMgIQAHgFAFgGQAFgHACgHIgDABIgGABQgMgBgJgJQgIgIAAgPQAAgLAEgIQAGgIAIgFQAIgFAKAAQAJAAAJAFQAKAGAGAKQAFAKAAAOQAAAWgMAUQgLAUgUAOg");
	this.shape_8.setTransform(-162.8,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhZB3IAAg3IA/gtQAYgRAKgKQAMgKADgGQAEgGAAgHQgBgJgIgEQgHgFgMAAQgRAAgPAGQgPAHgNALIgmgvQANgOARgJQARgJARgEQASgDAQAAQAeAAAWAKQAWAKANASQAMASAAAYQAAAQgHAOQgHAPgSAPQgRAPggATIBTAAIAAA+g");
	this.shape_9.setTransform(-178.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZA+IAAhIQAAgMgGgGQgGgEgKAAQgJgBgHAFQgHAEgEAFIAABRIggAAIAAh4IAgAAIAAAQQAGgHALgGQAKgGAPAAQATAAAKALQAKAKAAASIAABUg");
	this.shape_10.setTransform(6.6,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgRAIgNQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIANAAARQAAARgIAPQgHAOgPAJQgOAIgUAAQgTAAgOgIgAgQgdQgHAFgDAHQgEAJAAAIQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgIgEgJQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_11.setTransform(-7.7,-15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA7QgOgGgKgIIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgHgGgDQgHgCgJgCIgWgGQgLgDgHgGQgIgIAAgOQAAgLAGgIQAGgIALgGQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAGAGACQAGADAKADIAQADQAIACAIAFQAHADAFAHQAEAGAAAMQAAALgGAIQgGAJgMAGQgLAEgRAAQgPAAgOgEg");
	this.shape_12.setTransform(-27.1,-15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdA3QgPgHgIgOQgJgPAAgTQAAgRAIgOQAJgOANgJQAOgIASgBQASABAOAIQANAIAIAQQAIAPAAASIAAAHIhZAAQABAIAEAGQAFAHAHADQAHAEAKAAQAIAAAJgDQAIgDAHgGIAOAVQgKAIgNAFQgNADgOAAQgSABgOgJgAAegKQAAgGgDgGQgCgGgHgFQgHgEgKAAQgJAAgGAEQgHAFgDAGQgDAFAAAHIA5AAIAAAAg");
	this.shape_13.setTransform(-39.6,-15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYA3QgOgHgJgPQgIgOAAgTQAAgSAIgOQAJgOAOgIQAOgIASgBQAMABAKADQAJADAHAFQAGAFAEAGIgVATQgEgHgHgDQgGgDgIAAQgOAAgJAJQgJAKAAAPQAAAQAJAJQAJAKAOAAQAIAAAGgDQAHgEAEgFIAVATQgEAGgGAEQgHAFgJAEQgKACgMAAQgSABgOgJg");
	this.shape_14.setTransform(-52.5,-15.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBXIAAh4IAfAAIAAB4gAgNg2QgEgFgBgJQABgHAEgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAJgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_15.setTransform(-62,-17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA+IAAh4IAgAAIAAARQAFgJALgFQAKgGALAAIAAAfIgEgBIgEAAQgGAAgGACQgGACgFADQgEADgCAEIAABPg");
	this.shape_16.setTransform(-68.9,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag8BVIAAimIAgAAIAAAQQAHgKAJgEQAKgFAKAAQAQAAAMAHQAMAIAGAOQAHAOAAAVQAAATgHAOQgGAOgMAIQgMAHgQAAQgKAAgJgFQgKgEgHgJIAAA9gAgRg0QgHAEgEAGIAAAqQAEAGAHAEQAIADAIABQANAAAIgKQAIgJAAgPQAAgRgIgJQgIgJgNAAQgIAAgIADg");
	this.shape_17.setTransform(-80.8,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBGQgJgJAAgQIAAg+IgUAAIAAgbIAUAAIAAghIAfAAIAAAhIAYAAIAAAbIgYAAIAAA2QAAAGADADQACAEAGAAIAGgBIAFgCIAGAXQgDAEgHACQgGACgKAAQgQAAgIgIg");
	this.shape_18.setTransform(-98.8,-16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA7QgOgGgKgIIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgHgGgDQgHgCgJgCIgWgGQgLgDgHgGQgIgIAAgOQAAgLAGgIQAGgIALgGQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAGAGACQAGADAKADIAQADQAIACAIAFQAHADAFAHQAEAGAAAMQAAALgGAIQgGAJgMAGQgLAEgRAAQgPAAgOgEg");
	this.shape_19.setTransform(-109,-15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA3QgPgHgIgOQgJgPABgTQAAgRAHgOQAJgOAOgJQAOgIARgBQASABANAIQAOAIAIAQQAHAPAAASIAAAHIhYAAQABAIAEAGQAFAHAHADQAHAEAJAAQAJAAAJgDQAIgDAHgGIANAVQgIAIgNAFQgOADgOAAQgRABgPgJgAAfgKQAAgGgEgGQgDgGgGgFQgHgEgKAAQgJAAgGAEQgGAFgDAGQgEAFgBAHIA7AAIAAAAg");
	this.shape_20.setTransform(-121.6,-15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZA8IgZhRIgYBRIgjAAIgkh3IAhAAIAWBQIAbhQIAbAAIAaBQIAXhQIAhAAIglB3g");
	this.shape_21.setTransform(-138,-15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgRAIgNQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIANAAARQAAARgIAPQgHAOgPAJQgOAIgUAAQgTAAgOgIgAgQgdQgHAFgDAHQgEAJAAAIQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgIgEgJQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_22.setTransform(-154.7,-15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIAkAAIAACGIBFAAIAAAfg");
	this.shape_23.setTransform(-167.8,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-34.1,382.4,68.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BuQgagJgTgSIAlg0QANANATAIQAUAJAWAAQALAAAHgDQAIgEAAgHQAAgGgHgEQgJgEgRgEQgNgCgRgEQgRgEgPgIQgPgHgJgNQgKgNAAgWQAAgUALgRQALgRAVgLQAWgKAfgBQAdAAAZAIQAZAIAUARIgmAyQgQgMgRgGQgSgFgNAAQgNAAgEAEQgFADABAFQAAAGAIAEQAIADARADIAfAHQARAEAOAIQAPAHAJAMQAJANABAUQgBAngaAVQgbAVgvABQgkgBgbgKg");
	this.shape.setTransform(15.8,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYB1IgfhLIgaAAIAABLIhHAAIAAjpIB8AAQAbABATAKQASALAKASQAKASAAAWQAAAVgHAOQgGANgKAJQgJAJgKAEIAqBTgAghgQIAqAAQAKAAAGgFQAHgGAAgKQAAgJgHgFQgGgGgKAAIgqAAg");
	this.shape_1.setTransform(-6,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_2.setTransform(-28.3,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYB1IAAjpICxAAIAAA7IhqAAIAAAbIBnAAIAAA6IhnAAIAAAeIBqAAIAAA7g");
	this.shape_3.setTransform(-49,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrB1IAAjpICNAAQAYABAPAJQAQAJAHANQAHAOAAAOQAAAWgLAOQgLAOgSADQAUADAMAPQAMAPABAXQAAARgIAOQgHAPgQAJQgPAIgXABgAgkA7IA4AAQAHAAAFgEQAEgFAAgGQAAgHgEgFQgFgEgHAAIg4AAgAgkgdIA1AAQAGAAAEgEQAEgEABgHQgBgGgEgEQgEgEgGAAIg1AAg");
	this.shape_4.setTransform(-71.3,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBvQgTgKgNgRQgNgRgGgWQgGgVAAgYQAAgXAGgWQAGgVANgRQANgRATgKQAUgKAZAAQAaAAATAKQAUAKANARQAMARAHAVQAGAWABAXQgBAYgGAVQgHAWgMARQgNARgUAKQgTAJgaABQgZgBgUgJgAgXgrQgJAOABAdQgBAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_5.setTransform(-103.6,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBvQgUgKgNgRQgNgRgGgWQgGgVgBgYQABgXAGgWQAGgVANgRQANgRAUgKQASgKAaAAQAaAAAUAKQATAKANARQAMARAHAVQAGAWAAAXQAAAYgGAVQgHAWgMARQgNARgTAKQgUAJgaABQgagBgSgJgAgXgrQgJAOAAAdQAAAdAJAPQAHAOAQAAQARAAAHgOQAJgPgBgdQABgdgJgOQgHgPgRABIAAAAQgQAAgHAOg");
	this.shape_6.setTransform(-125.4,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BuQgZgJgRgPIAlguQAMAJAQAFQAQAGAQAAQAQgBAIgGQAIgHAAgJQAAgIgHgGQgIgHgPAAQgNAAgLAFQgLADgIAJIgxgLIAAiMICxAAIAAA7IhuAAIAAAlQALgIANgFQAMgFAPAAQAUAAASAKQAQAIALASQAKAPABAYQgBAngbAWQgbAXgwAAQggAAgYgJg");
	this.shape_7.setTransform(-147,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeApIAMgIQAHgFAFgGQAFgHACgHIgDABIgGABQgMgBgJgJQgIgIAAgPQAAgLAEgIQAGgIAIgFQAIgFAKAAQAJAAAJAFQAKAGAGAKQAFAKAAAOQAAAWgMAUQgLAUgUAOg");
	this.shape_8.setTransform(-162.8,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhZB3IAAg3IA/gtQAYgRAKgKQAMgKADgGQAEgGAAgHQgBgJgIgEQgHgFgMAAQgRAAgPAGQgPAHgNALIgmgvQANgOARgJQARgJARgEQASgDAQAAQAeAAAWAKQAWAKANASQAMASAAAYQAAAQgHAOQgHAPgSAPQgRAPggATIBTAAIAAA+g");
	this.shape_9.setTransform(-178.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZA+IAAhIQAAgMgGgGQgGgEgKAAQgJgBgHAFQgHAEgEAFIAABRIggAAIAAh4IAgAAIAAAQQAGgHALgGQAKgGAPAAQATAAAKALQAKAKAAASIAABUg");
	this.shape_10.setTransform(6.6,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgRAIgNQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIANAAARQAAARgIAPQgHAOgPAJQgOAIgUAAQgTAAgOgIgAgQgdQgHAFgDAHQgEAJAAAIQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgIgEgJQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_11.setTransform(-7.7,-15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA7QgOgGgKgIIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgHgGgDQgHgCgJgCIgWgGQgLgDgHgGQgIgIAAgOQAAgLAGgIQAGgIALgGQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAGAGACQAGADAKADIAQADQAIACAIAFQAHADAFAHQAEAGAAAMQAAALgGAIQgGAJgMAGQgLAEgRAAQgPAAgOgEg");
	this.shape_12.setTransform(-27.1,-15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdA3QgPgHgIgOQgJgPAAgTQAAgRAIgOQAJgOANgJQAOgIASgBQASABAOAIQANAIAIAQQAIAPAAASIAAAHIhZAAQABAIAEAGQAFAHAHADQAHAEAKAAQAIAAAJgDQAIgDAHgGIAOAVQgKAIgNAFQgNADgOAAQgSABgOgJgAAegKQAAgGgDgGQgCgGgHgFQgHgEgKAAQgJAAgGAEQgHAFgDAGQgDAFAAAHIA5AAIAAAAg");
	this.shape_13.setTransform(-39.6,-15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYA3QgOgHgJgPQgIgOAAgTQAAgSAIgOQAJgOAOgIQAOgIASgBQAMABAKADQAJADAHAFQAGAFAEAGIgVATQgEgHgHgDQgGgDgIAAQgOAAgJAJQgJAKAAAPQAAAQAJAJQAJAKAOAAQAIAAAGgDQAHgEAEgFIAVATQgEAGgGAEQgHAFgJAEQgKACgMAAQgSABgOgJg");
	this.shape_14.setTransform(-52.5,-15.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBXIAAh4IAfAAIAAB4gAgNg2QgEgFgBgJQABgHAEgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAJgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_15.setTransform(-62,-17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA+IAAh4IAgAAIAAARQAFgJALgFQAKgGALAAIAAAfIgEgBIgEAAQgGAAgGACQgGACgFADQgEADgCAEIAABPg");
	this.shape_16.setTransform(-68.9,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag8BVIAAimIAgAAIAAAQQAHgKAJgEQAKgFAKAAQAQAAAMAHQAMAIAGAOQAHAOAAAVQAAATgHAOQgGAOgMAIQgMAHgQAAQgKAAgJgFQgKgEgHgJIAAA9gAgRg0QgHAEgEAGIAAAqQAEAGAHAEQAIADAIABQANAAAIgKQAIgJAAgPQAAgRgIgJQgIgJgNAAQgIAAgIADg");
	this.shape_17.setTransform(-80.8,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBGQgJgJAAgQIAAg+IgUAAIAAgbIAUAAIAAghIAfAAIAAAhIAYAAIAAAbIgYAAIAAA2QAAAGADADQACAEAGAAIAGgBIAFgCIAGAXQgDAEgHACQgGACgKAAQgQAAgIgIg");
	this.shape_18.setTransform(-98.8,-16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA7QgOgGgKgIIAOgWIALAIQAHADAIACQAIADAHAAQAKAAAFgEQAFgDAAgFQgBgHgGgDQgHgCgJgCIgWgGQgLgDgHgGQgIgIAAgOQAAgLAGgIQAGgIALgGQALgFAOgBQAQABAMAFQAMAEAJAHIgNAWQgFgGgKgEQgJgEgLAAQgIAAgFADQgFADAAAFQAAAGAGACQAGADAKADIAQADQAIACAIAFQAHADAFAHQAEAGAAAMQAAALgGAIQgGAJgMAGQgLAEgRAAQgPAAgOgEg");
	this.shape_19.setTransform(-109,-15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA3QgPgHgIgOQgJgPABgTQAAgRAHgOQAJgOAOgJQAOgIARgBQASABANAIQAOAIAIAQQAHAPAAASIAAAHIhYAAQABAIAEAGQAFAHAHADQAHAEAJAAQAJAAAJgDQAIgDAHgGIANAVQgIAIgNAFQgOADgOAAQgRABgPgJgAAfgKQAAgGgEgGQgDgGgGgFQgHgEgKAAQgJAAgGAEQgGAFgDAGQgEAFgBAHIA7AAIAAAAg");
	this.shape_20.setTransform(-121.6,-15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZA8IgZhRIgYBRIgjAAIgkh3IAhAAIAWBQIAbhQIAbAAIAaBQIAXhQIAhAAIglB3g");
	this.shape_21.setTransform(-138,-15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghA3QgOgJgIgOQgIgPAAgRQAAgRAIgNQAIgPAOgJQAOgIATgBQAUABAOAIQAPAJAHAPQAIANAAARQAAARgIAPQgHAOgPAJQgOAIgUAAQgTAAgOgIgAgQgdQgHAFgDAHQgEAJAAAIQAAAKAEAHQADAIAHAGQAHAEAJAAQAKAAAHgEQAHgGADgIQAEgHAAgKQAAgIgEgJQgDgHgHgFQgHgFgKAAQgJAAgHAFg");
	this.shape_22.setTransform(-154.7,-15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIAkAAIAACGIBFAAIAAAfg");
	this.shape_23.setTransform(-167.8,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-34.1,382.4,68.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA+QgQgIgJgRQgKgQAAgVQAAgTAJgQQAJgQAQgKQAPgJAUAAQAVAAAPAJQAPAKAIARQAJAQAAAVIAAAIIhkAAQACAJAEAHQAFAHAJAEQAIAFAKAAQAKAAAKgEQAKgEAHgGIAPAXQgKAJgPAFQgPAFgQAAQgTAAgRgJgAAigMQAAgHgDgGQgEgIgHgEQgHgEgMgBQgKABgHAEQgHAEgEAIQgDAGgBAHIBBAAIAAAAg");
	this.shape.setTransform(87.9,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBFIAAiGIAjAAIAAASQAGgJAMgGQAMgGANAAIAAAjIgFgBIgGAAQgGAAgGACQgGACgGADQgFADgDAFIAABYg");
	this.shape_1.setTransform(75.8,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA9QgRgKgIgPQgIgRgBgTQABgTAIgPQAIgQARgLQAQgJAVAAQAXAAAPAJQARALAIAQQAJAPAAATQAAATgJARQgIAPgRAKQgPAKgXAAQgVAAgQgKgAgSghQgHAFgEAJQgFAJAAAKQAAAKAFAKQAEAJAHAFQAIAFAKAAQALAAAIgFQAHgFAEgJQAFgKAAgKQAAgKgFgJQgEgJgHgFQgIgGgLAAQgKAAgIAGg");
	this.shape_2.setTransform(62.1,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCBFIAAhUQAAgKgFgGQgEgGgLAAQgKAAgHAFQgHAFgEAGIAABaIgjAAIAAhUQAAgKgFgGQgEgGgLAAQgJAAgIAFQgHAFgEAGIAABaIgkAAIAAiGIAkAAIAAASQADgFAGgEQAHgFAJgEQAJgDAKAAQAPAAAIAGQAKAHAEALQAEgGAHgGQAHgFAJgEQAJgDAKAAQATAAAKAKQALAKAAAUIAABhg");
	this.shape_3.setTransform(42.1,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBFIAAiGIAjAAIAAASQAGgJAMgGQAMgGANAAIAAAjIgFgBIgGAAQgGAAgGACQgGACgGADQgFADgDAFIAABYg");
	this.shape_4.setTransform(18.6,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA9QgRgKgIgPQgIgRgBgTQABgTAIgPQAIgQARgLQAQgJAVAAQAXAAAPAJQAQALAJAQQAJAPAAATQAAATgJARQgJAPgQAKQgPAKgXAAQgVAAgQgKgAgSghQgHAFgEAJQgFAJAAAKQAAAKAFAKQAEAJAHAFQAIAFAKAAQALAAAIgFQAHgFAEgJQAFgKAAgKQAAgKgFgJQgEgJgHgFQgIgGgLAAQgKAAgIAGg");
	this.shape_5.setTransform(4.9,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBYQgOgIgKgOQgJgOgFgRQgEgRAAgSQAAgRAEgRQAFgSAJgOQAKgNAOgIQAPgJATABQAUgBAPAJQAOAIAKANQAJAOAFASQAEARAAARQAAASgEARQgFARgJAOQgKAOgOAIQgPAIgUAAQgTAAgPgIgAgUg0QgJAIgDAOQgEAOAAAQQAAARAEAOQADAOAJAIQAIAIAMAAQANAAAIgIQAIgIAEgOQAEgOAAgRQAAgQgEgOQgEgOgIgIQgIgIgNAAQgMAAgIAIg");
	this.shape_6.setTransform(-19,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBYQgRgIgMgNIAVgbQAKAKANAFQANAFAPAAQAPAAAJgIQAJgIAAgMQAAgNgIgHQgKgIgPAAQgLAAgJAEQgLADgHAIIgcgHIAAhqIB/AAIAAAiIhYAAIAAAvQAHgHALgEQAKgFANAAQAPAAAOAHQANAIAJANQAIANAAATQAAAUgJAOQgJAOgRAIQgQAIgWAAQgYAAgTgHg");
	this.shape_7.setTransform(-35.9,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKB5IAAgYQgWgCgQgIQgQgIgMgMIAVgeQAIAIALAHQAMAGAOADIAAgsQgPgEgNgFQgOgHgJgJQgJgMgBgSQABgOAHgNQAHgMANgIQAOgIATgCIAAgaIAZAAIAAAbQARACAPAGQAOAHALAKIgVAdQgIgHgJgEQgJgFgKgCIAAAnQAPADAOAHQAOAGAKAKQAIALABATQAAAQgHAMQgHANgNAHQgOAJgVACIAAAZgAANA+QAMgCAGgGQAFgGAAgGQAAgIgGgFQgGgEgLgDgAgYg2QgFAFAAAHQAAAHAGAEQAGAEAJACIAAgkQgKACgGAFg");
	this.shape_8.setTransform(-53.3,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYBfIAAhnIgWAAIAAgfIAWAAIAAgIQAAgOAHgLQAFgLAKgFQAKgGANAAQAHAAAIACIALAEIgIAZIgFgCIgGgBQgIAAgEAFQgEAFgBAKIAAAHIAbAAIAAAfIgbAAIAABng");
	this.shape_9.setTransform(-73.1,8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmA9QgQgKgIgPQgJgRAAgTQAAgTAJgPQAIgQAQgLQAQgJAWAAQAWAAARAJQAPALAJAQQAIAPAAATQAAATgIARQgJAPgPAKQgRAKgWAAQgWAAgQgKgAgSghQgIAFgDAJQgEAJgBAKQABAKAEAKQADAJAIAFQAIAFAKAAQALAAAIgFQAHgFAFgJQADgKAAgKQAAgKgDgJQgFgJgHgFQgIgGgLAAQgKAAgIAGg");
	this.shape_10.setTransform(-86.1,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA+QgQgIgJgRQgKgPAAgWQAAgTAJgQQAJgQAQgKQAPgJAUAAQAVAAAPAJQAPAKAIAQQAJARAAAWIAAAHIhkAAQACAJAEAHQAFAHAJAEQAIAEAKAAQAKAAAKgDQAKgEAHgGIAPAXQgKAJgPAFQgPAFgQAAQgTAAgRgJgAAigMQAAgGgDgIQgEgGgHgFQgHgFgMAAQgKAAgHAFQgHAFgEAGQgDAIgBAGIBBAAIAAAAg");
	this.shape_11.setTransform(82.3,-19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBCQgQgGgKgKIAPgZIANAJQAHAEAJADQAJACAIAAQALAAAFgDQAGgEAAgGQAAgHgIgEQgHgDgLgCIgYgGQgMgEgJgHQgHgJgBgQQAAgLAHgJQAGgKAMgGQAMgGARAAQASAAANAFQANAGALAHIgOAZQgHgHgKgEQgLgFgNAAQgIAAgGAEQgFADgBAGQAAAGAIADQAGADALACIATAEQAJADAIAFQAIAEAFAHQAFAIABAMQAAANgIAKQgGAKgNAFQgOAGgSAAQgRAAgQgFg");
	this.shape_12.setTransform(67.8,-19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkBCQgLgFgHgKQgHgJgBgQQABgPAHgKQAHgIALgFQAKgEALAAQAOAAAKAEQALAFAHAHIAAgSQAAgKgIgHQgIgGgNAAQgLAAgJAEQgKAEgJAIIgNgYQAMgKAPgGQAPgFAQAAQAPAAAOAFQANAFAIALQAIALABATIAABXIgkAAIAAgOQgHAIgLAFQgKAEgOAAQgLAAgKgFgAgSAMQgIAFAAAKQAAAKAIAFQAHAFALAAQAHAAAIgDQAIgDAEgGIAAgQQgEgGgIgDQgIgDgHAAQgLAAgHAFg");
	this.shape_13.setTransform(53.2,-19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcBeIAAhTQAAgNgHgFQgHgGgLABQgKAAgHAEQgIAFgFAGIAABbIgkAAIAAi7IAkAAIAABGQAGgIANgHQALgFARgBQAWAAALALQALAMAAATIAABgg");
	this.shape_14.setTransform(37.9,-22.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbA+QgQgJgJgRQgKgPABgVQgBgUAKgQQAJgQAQgJQAQgJAUAAQAOAAAKAEQALADAHAGQAHAFAEAGIgWAWQgFgHgHgEQgIgDgJAAQgPgBgKALQgLALAAARQAAASALAKQAKALAPABQAJAAAIgFQAHgDAFgIIAWAWQgEAGgHAHQgHAFgLAEQgKADgOAAQgUAAgQgJg");
	this.shape_15.setTransform(23,-19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmBFIAAiGIAjAAIAAASQAGgJAMgGQAMgGANAAIAAAjIgFgBIgGAAQgGAAgGACQgGACgGADQgFADgDAFIAABYg");
	this.shape_16.setTransform(11.4,-19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0A6QgLgLABgUIAAhfIAjAAIAABRQABAOAGAFQAGAGAMAAQAKgBAIgEQAHgFAFgGIAAhaIAkAAIAACGIgkAAIAAgRQgHAIgMAGQgLAGgQAAQgXAAgLgLg");
	this.shape_17.setTransform(-2.4,-19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhEBfIAAi5IAkAAIAAAQQAIgKALgFQAKgFAMAAQARAAAOAIQANAIAIAQQAHAQABAWQgBAYgHAOQgIAQgNAIQgOAJgRAAQgLAAgLgFQgLgFgIgKIAABEgAgTg6QgIAEgFAHIAAAvQAFAGAIAFQAJAEAIABQAPgBAJgLQAJgJABgTQgBgRgJgLQgJgLgPABQgIAAgJAEg");
	this.shape_18.setTransform(-18.3,-17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkBCQgLgFgHgKQgHgJgBgQQABgPAHgKQAHgIALgFQAKgEALAAQAOAAAKAEQALAFAHAHIAAgSQAAgKgIgHQgIgGgNAAQgLAAgJAEQgKAEgJAIIgNgYQAMgKAPgGQAPgFAQAAQAPAAAOAFQANAFAIALQAIALABATIAABXIgkAAIAAgOQgHAIgLAFQgKAEgOAAQgLAAgKgFgAgSAMQgIAFAAAKQAAAKAIAFQAHAFALAAQAHAAAIgDQAIgDAEgGIAAgQQgEgGgIgDQgIgDgHAAQgLAAgHAFg");
	this.shape_19.setTransform(-42.1,-19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcBFIAAhRQAAgNgHgGQgGgGgMAAQgJAAgJAFQgHAFgFAGIAABaIgjAAIAAiGIAjAAIAAASQAHgJAMgGQALgGAQAAQAXAAALALQAKAMABAUIAABeg");
	this.shape_20.setTransform(-64.5,-19.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglA9QgRgKgIgQQgIgPgBgUQABgSAIgRQAIgQARgKQAQgJAVAAQAXAAAPAJQAQAKAJAQQAJARAAASQAAAUgJAPQgJAQgQAKQgPAJgXABQgVgBgQgJgAgSghQgHAFgEAJQgFAJAAAKQAAALAFAIQAEAJAHAGQAIAFAKABQALgBAIgFQAHgGAEgJQAFgIAAgLQAAgKgFgJQgEgJgHgFQgIgFgLAAQgKAAgIAFg");
	this.shape_21.setTransform(-80.6,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-40.5,217.4,155);


// stage content:
(lib.GO_728x90_Prices_template = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA Get coupon copy 2
	this.instance = new lib.Tween52("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(133.3,168.9,0.727,0.726,0,0,0,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(285).to({_off:false},0).to({regX:0.4,regY:0.1,scaleX:0.92,scaleY:0.91,x:133,y:65.5},10).wait(63));

	// Layer 1
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(401.7,142.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(401.7,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},285).to({state:[{t:this.instance_2}]},10).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).to({_off:true,y:43.3},10).wait(63));

	// sAVE 10 copy 2
	this.instance_3 = new lib.Tween50("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.5,129.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(285).to({_off:false},0).to({y:28.4},10).wait(63));

	// Lowest prices on beer 
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(444.2,194.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(444.4,42);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({_off:true,x:444.4,y:42},11).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(241).to({_off:false},11).wait(27).to({startPosition:0},0).to({y:-64.4},10).wait(69));

	// Beer Bottles
	this.instance_6 = new lib.Tween37("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(75,176,1.96,1.96);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween38("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(75,21,1.96,1.96);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween42("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(75,-77,1.96,1.768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},241).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_7}]},27).to({state:[{t:this.instance_8}]},10).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(241).to({_off:false},0).to({_off:true,y:21},11).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(241).to({_off:false},11).wait(27).to({startPosition:0},0).to({_off:true,scaleY:1.77,y:-77},10).wait(69));

	// Lowest prices on spirtis
	this.instance_9 = new lib.Tween32("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(363.7,197.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({_off:false},0).to({y:45.2},12).wait(27).to({startPosition:0},0).to({y:-50.6},10).to({_off:true},67).wait(43));

	// Spirit bottles
	this.instance_10 = new lib.Tween33("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(75,177,1.969,1.969);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween34("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(75,21,1.969,1.969);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(199).to({_off:false},0).to({_off:true,y:21},12).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(199).to({_off:false},12).wait(27).to({startPosition:0},0).to({y:-90},10).to({_off:true},67).wait(43));

	// Lowest prices on wines
	this.instance_12 = new lib.Tween28("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(364.3,197.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(159).to({_off:false},0).to({y:77.5},6).to({y:46.7},5).wait(27).to({startPosition:0},0).to({y:-51.6},8).to({_off:true},42).wait(111));

	// Wine Bottles
	this.instance_13 = new lib.Tween30("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(66.2,178.2,1.96,1.96,0,0,0,-0.6,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(159).to({_off:false},0).to({y:23.2},11).wait(27).to({regX:0,regY:0,scaleY:1.96,x:67.7,y:23},0).to({scaleY:1.96,y:-81.9},8).to({_off:true},42).wait(111));

	// Lowest prices
	this.instance_14 = new lib.Tween24("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(160.8,121.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120).to({_off:false},0).to({y:60.8},10).wait(25).to({startPosition:0},0).to({y:-43.2},11).wait(192));

	// Ballston Glebe & Wilson
	this.instance_15 = new lib.Tween20("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(407.8,134.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).to({x:408.3,y:47.8},10).wait(45).to({startPosition:0},0).to({y:-40.2},10).to({_off:true},8).wait(226));

	// Grand Opening
	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(139,132.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(139,44.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({_off:false},0).to({y:44.7},10).to({_off:true},45).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(114).to({_off:false},0).to({y:-35.7},10).to({_off:true},8).wait(226));

	// TWM Logo Frame 2
	this.instance_18 = new lib.Tween44("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(634.2,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({y:47.6},9).wait(349));

	// Layer 3
	this.instance_19 = new lib.Tween2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(404.1,135.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:404.5,y:52.3},9).wait(45).to({x:404.9,y:42.4},0).to({x:405.8,y:-48.6},13).wait(291));

	// sAVE 10 copy
	this.instance_20 = new lib.Tween50("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(138.5,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:46.3},9).wait(45).to({startPosition:0},0).to({y:-45.7},13).wait(291));

	// Background 
	this.instance_21 = new lib.background();
	this.instance_21.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(358));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,249.8);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/background.jpg", id:"background"},
		{src:"images/Image_2.png", id:"Image_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;