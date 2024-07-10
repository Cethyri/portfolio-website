import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import configurations from "src/assets/unity/configurations";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"],
})
export class PlayComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      var projectName = params.get("projectName");
      if (projectName != null) {
        this.loadUnityInstance(projectName);
      }
    });
  }

  loadUnityInstance(projectName: string): void {
	var buildUrl = `assets/unity/${projectName}/`;
	var loaderUrl = buildUrl + `${projectName}.asm.loader.js`;
    var gameConfig = configurations[projectName];

	var config: any = {
		loaderUrl: buildUrl + `${projectName}.loader.js`,
		dataUrl: buildUrl + `${projectName}.data`,
		frameworkUrl: buildUrl + `${projectName}.framework.js`,
		codeUrl: buildUrl + `${projectName}.wasm`,
		streamingAssetsUrl: buildUrl + "StreamingAssets",
		companyName: "Thya Robinson",
		productName: gameConfig.productName,
    	productVersion: gameConfig.productVersion
	}

    var title: HTMLDivElement = document.querySelector("#unity-build-title");
    title.innerHTML = config.productName;

    var container: HTMLDivElement = document.querySelector("#unity-container");
    var canvas: HTMLCanvasElement = document.querySelector("#unity-canvas");
    var loadingBar: HTMLDivElement = document.querySelector(
      "#unity-loading-bar"
    );
    var progressBarFull: HTMLDivElement = document.querySelector(
      "#unity-progress-bar-full"
    );
    var fullscreenButton: HTMLButtonElement = document.querySelector(
      "#unity-fullscreen-button"
    );

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
      config.devicePixelRatio = 1;
    } else {
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientWidth / 1.6}px`;
    }
    loadingBar.style.display = "block";

    var script = document.createElement("script");
    script.src = config.loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
      })
        .then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        })
        .catch((message) => {
          alert(message);
        });
    };
    document.body.appendChild(script);
  }
}
