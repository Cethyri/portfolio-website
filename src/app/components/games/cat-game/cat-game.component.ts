import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cat-game",
  templateUrl: "./cat-game.component.html",
  styleUrls: ["./cat-game.component.scss"],
})
export class CatGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
	this.loadUnityInstance();
  }

  loadUnityInstance(): void {
	var buildUrl = "assets/cat-game/Build";
	var loaderUrl = buildUrl + "/cat-game.loader.js";
	var config = {
		dataUrl: buildUrl + "/cat-game.data",
		frameworkUrl: buildUrl + "/cat-game.framework.js",
		codeUrl: buildUrl + "/cat-game.wasm",
		streamingAssetsUrl: "StreamingAssets",
		companyName: "Christopher Robinson",
		productName: "Cat Game: Heavy Machinery",
		productVersion: "1.0.3",
	};

	var container = document.querySelector("#unity-container");
	var canvas = document.querySelector("#unity-canvas");
	var loadingBar = document.querySelector("#unity-loading-bar");
	var progressBarFull = document.querySelector("#unity-progress-bar-full");
	var fullscreenButton = document.querySelector("#unity-fullscreen-button");

	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		container.className = "unity-mobile";
		(config as any).devicePixelRatio = 1;
	} else {
		(canvas as any).style.width = "960px";
		(canvas as any).style.height = "600px";
	}
	(loadingBar as any).style.display = "block";

	var script = document.createElement("script");
	script.src = loaderUrl;
	script.onload = () => {
		createUnityInstance(canvas, config, (progress) => {
			(progressBarFull as any).style.width = 100 * progress + "%";
		}).then((unityInstance) => {
			(loadingBar as any).style.display = "none";
			(fullscreenButton as any).onclick = () => {
				unityInstance.SetFullscreen(1);
			};
		}).catch((message) => {
			alert(message);
		});
	};
	document.body.appendChild(script);
  }
}
