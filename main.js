/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayDom.js":
/*!***************************!*\
  !*** ./src/displayDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayDom\": () => (/* binding */ displayDom)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ \"./src/gameBoardFactory.js\");\n\r\n\r\n\r\nconst displayDom=function(playerDeck,compDeck,clickEvent){\r\n    const playerBoard=document.querySelector(\".player-board\");\r\n    const compBoard=document.querySelector(\".comp-board\");\r\n    const board=document.querySelector(\".board\");\r\n    \r\n    playerBoard.innerHTML='';\r\n    compBoard.innerHTML='';\r\n    playerBoard.style.setProperty('--gridRow',10);\r\n    compBoard.style.setProperty('--gridRow',10);\r\n    compBoard.style.setProperty('--gridCol',10);\r\n    playerBoard.style.setProperty('--gridCol',10);\r\n    \r\n    //comp board\r\n    for(let i=0;i<10;i++){\r\n        for(let j=0;j<10;j++){\r\n            let newDiv=document.createElement(\"div\"); \r\n            newDiv.addEventListener('click',clickEvent);\r\n            newDiv.classList.add(\"compcell\");\r\n            newDiv.setAttribute(\"data-X\",i);\r\n            newDiv.setAttribute(\"data-Y\",j);            \r\n            compBoard.appendChild(newDiv);                                                \r\n            if(compDeck.getBoard()[i][j]==='x'){\r\n                newDiv.classList.add('clicked')\r\n            }\r\n            \r\n        }\r\n        \r\n             \r\n    }; \r\n    //player board\r\n    for(let i=0;i<10;i++){\r\n        for(let j=0;j<10;j++){\r\n            let newDiv=document.createElement(\"div\");             \r\n            newDiv.setAttribute(\"data-X\",i);\r\n            newDiv.setAttribute(\"data-Y\",j);\r\n            playerBoard.appendChild(newDiv);\r\n            if(playerDeck.getBoard()[i][j]==='0'){\r\n                newDiv.classList.add(\"cleanShip\");\r\n            }\r\n        };\r\n             \r\n    }; \r\n\r\n\r\n};\n\n//# sourceURL=webpack://battleship/./src/displayDom.js?");

/***/ }),

/***/ "./src/gameBoardFactory.js":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\r\n\r\n\r\nconst gameBoard=(ships)=>{\r\n    let board=[];\r\n    for(let i=0;i<10;i++){\r\n        board[i]=[];\r\n        for(let j=0;j<10;j++){\r\n            board[i][j]='';\r\n        }\r\n    }\r\n    let missed=[];\r\n    let allSunk=false;\r\n    let alreadyHit=[];\r\n    \r\n    function placeHorizontal(ship){\r\n        let clean;\r\n        do{\r\n            clean=true;\r\n            let rnd=Math.floor(Math.random()*10);\r\n            let rnd2;\r\n            do{\r\n                rnd2=Math.floor(Math.random()*10);\r\n            }while(rnd2+ship.getLength()>9)\r\n            for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                if(board[rnd][i]!=''){\r\n                    clean=false;\r\n                    break;\r\n                }\r\n            }\r\n            if(clean){\r\n                let shipArr=ship.getHitPoints();\r\n                let j=0;\r\n                for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                    board[rnd][i]=shipArr[j];\r\n                    ship.setCord(rnd,i,j);\r\n                    j++;\r\n                }\r\n            }\r\n        }while(!clean)\r\n    };\r\n    function placeVertical(ship){\r\n        let clean;\r\n        do{\r\n            clean=true;\r\n            let rnd=Math.floor(Math.random()*10);\r\n            let rnd2;\r\n            do{\r\n                rnd2=Math.floor(Math.random()*10);\r\n            }while(rnd2+ship.getLength()>9)\r\n            for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                if(board[i][rnd]!=''){\r\n                    clean=false;\r\n                    break;\r\n                }\r\n            }\r\n            if(clean){\r\n                let shipArr=ship.getHitPoints();\r\n                let j=0;\r\n                for(let i=rnd2;i<rnd2+ship.getLength();i++){\r\n                    board[i][rnd]=shipArr[j];\r\n                    ship.setCord(i,rnd,j);\r\n                    j++;\r\n                }\r\n            }\r\n        }while(!clean)\r\n    }\r\n    for(let i=0;i<ships.length;i++){\r\n        let rnd=Math.floor(Math.random()*2);\r\n        \r\n        if(rnd===1){\r\n            placeHorizontal(ships[i]);\r\n        }else{\r\n            placeVertical(ships[i]);\r\n        }\r\n\r\n    }\r\n\r\n    const receieveAttack=(x,y)=>{\r\n        \r\n        allSunk=true;\r\n        for(let i=0;i<ships.length;i++){\r\n            let ship=ships[i];\r\n            let hitPoints=ship.getHitPoints();\r\n            let coord=ship.getCord();\r\n            coord.map(arr=>{\r\n                if((arr[0]===x && arr[1]===y) && (hitPoints[arr[2]]==='0' ) ){\r\n                    board[x][y]='x';                                      \r\n                    alreadyHit.push([x,y]);\r\n                    ships[i].hit(arr[2]); \r\n                }else{\r\n                    if(missed.length===0){\r\n                        missed.push([x,y]);\r\n                    }else{\r\n                        let missEqual=true;\r\n                        missed.map(arr=>{\r\n                                if((arr[0]===x) && (arr[1]===y)){\r\n                                    missEqual=false;\r\n                                }\r\n                        });\r\n                        if(missEqual){\r\n                            missed.push([x,y]);\r\n                        }\r\n                    }\r\n                                   \r\n                }\r\n            });\r\n            \r\n            if(!ships[i].isSunk()){\r\n                allSunk=false;\r\n            }\r\n\r\n        };\r\n      \r\n\r\n\r\n    }\r\n    const getAlreadyHit=()=>alreadyHit;\r\n    const getAllSunk=()=>allSunk;\r\n    const getMissed=()=>missed;\r\n    const getBoard=()=>board;\r\n    const getShips=()=>ships;\r\n\r\n    return{getBoard,getMissed,receieveAttack,getAllSunk,getAlreadyHit,getShips};\r\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDom */ \"./src/displayDom.js\");\n/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ \"./src/gameBoardFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n\r\nconst modal = document.querySelector(\".modal\");\r\nconst checkWinner = (winner, gamePlay) => {\r\n  const winnerText = document.querySelector(\".winner\");\r\n  const button = document.querySelector(\".btn\");\r\n  if (winner.length != 0) {\r\n    winnerText.textContent = `The Winner Is ${winner} !`;\r\n    modal.style.display = \"block\";\r\n  }\r\n  button.addEventListener(\"click\", gamePlay);\r\n};\r\nconst gamePlay = () => {\r\n  modal.style.display = \"none\";\r\n  let winner = \"\";\r\n  const playerShips = [\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(5),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(4),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(3),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(2),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(1),\r\n  ];\r\n  const compShips = [\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(5),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(4),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(3),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(2),\r\n    (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.makeShip)(1),\r\n  ];\r\n  const playerDeck = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(playerShips);\r\n  const compDeck = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__.gameBoard)(compShips);\r\n  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.player)();\r\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_3__.player)();\r\n  computer.setTurn(false);\r\n  const compGuess = () => {\r\n    if (!playerDeck.getAllSunk() && computer.getTurn()) {\r\n      let [x, y] = computer.guessShip(playerDeck);\r\n\r\n      playerDeck.receieveAttack(x, y);\r\n\r\n      let div = document.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\r\n      if (playerDeck.getBoard()[x][y] === \"x\") {\r\n        div.classList.add(\"fired\");\r\n      } else if (playerDeck.getBoard()[x][y] === \"\") {\r\n        div.classList.add(\"missed\");\r\n      }\r\n      if (playerDeck.getAllSunk()) {\r\n        winner = \"The Computer\";\r\n        checkWinner(winner, gamePlay);\r\n      }\r\n      player1.setTurn(true);\r\n      computer.setTurn(false);\r\n    }\r\n  };\r\n  const clickAttack = (e) => {\r\n    if (!compDeck.getAllSunk() && player1.getTurn()) {\r\n      let x = +e.target.dataset.x;\r\n      let y = +e.target.dataset.y;\r\n      if (player1.playerClick(compDeck, x, y)) {\r\n        compDeck.receieveAttack(x, y);\r\n        if (compDeck.getBoard()[x][y] === \"x\") {\r\n          e.target.classList.add(\"fired\");\r\n        } else if (compDeck.getBoard()[x][y] === \"\") {\r\n          e.target.classList.add(\"missed\");\r\n        }\r\n        if (compDeck.getAllSunk()) {\r\n          winner = \"You\";\r\n          checkWinner(winner, gamePlay);\r\n          console.log(winner);\r\n        }\r\n        player1.setTurn(false);\r\n        computer.setTurn(true);\r\n        compGuess();\r\n      }\r\n    }\r\n  };\r\n  if (winner) {\r\n    console.log(winner);\r\n  }\r\n\r\n  (0,_displayDom__WEBPACK_IMPORTED_MODULE_0__.displayDom)(playerDeck, compDeck, clickAttack);\r\n};\r\ngamePlay();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n\r\nconst player=()=>{\r\n    \r\n    let turn=true;\r\n    let rndX,rndY;\r\n    let lastHit=[];\r\n    let check=false;\r\n    \r\n    \r\n    const guessShip=(board)=>{        \r\n        let alreadyHit=board.getAlreadyHit();\r\n        let missed=board.getMissed();\r\n        let ok;\r\n        \r\n        if(lastHit.length!=0 && board.getBoard()[lastHit[0]][lastHit[1]]==='x'){\r\n            check=true;            \r\n            let rnd=Math.floor(Math.random()*4);\r\n            if(!rnd){\r\n                rndX=++lastHit[0];\r\n                rndY=lastHit[1];\r\n            }else if(rnd===1){\r\n                rndX=--lastHit[0];\r\n                rndY=lastHit[1];\r\n            }else if(rnd===2){\r\n                rndX=lastHit[0];\r\n                rndY=++lastHit[1];\r\n            }else{\r\n                rndX=lastHit[0];\r\n                rndY=--lastHit[1];\r\n            }\r\n        }\r\n        if(check){\r\n            if(rndX>9 || rndX<0 || rndY>9 || rndY<0){\r\n                check=false;\r\n            }\r\n        }\r\n            do {\r\n                ok = true;\r\n                if(!check){\r\n                    rndX = Math.floor(Math.random() * 9);\r\n                    rndY = Math.floor(Math.random() * 9);\r\n                }\r\n                \r\n                \r\n                alreadyHit.map((arr) => {\r\n                  if (arr[0] === rndX && arr[1] === rndY) {                    \r\n                    ok= false;\r\n                    check=false;\r\n                  }\r\n                });\r\n      \r\n                missed.map((arr) => {\r\n                  if (arr[0] === rndX && arr[1] === rndY) {                    \r\n                   ok= false;\r\n                   check=false;\r\n                  }\r\n                });\r\n               \r\n              } while (ok === false);\r\n       check=false;\r\n       lastHit=[rndX,rndY];       \r\n       \r\n       return [rndX,rndY];\r\n\r\n    }   \r\n\r\n    const playerClick=(board,x,y)=>{\r\n        let alreadyHit=board.getAlreadyHit();\r\n        let missed=board.getMissed();\r\n        let ok = true;       \r\n        alreadyHit.map((arr) => {\r\n          if ((arr[0] === x) && (arr[1] === y)) {\r\n           ok=false;\r\n          }\r\n        });\r\n        missed.map((arr) => {\r\n          if ((arr[0] === x) && (arr[1] === y)) {\r\n            ok= false;\r\n          }\r\n        });   \r\n        \r\n        return ok;\r\n         \r\n    }\r\n\r\n    const setTurn=value=>{\r\n        turn=value;\r\n    }\r\n    const getTurn=()=>turn;\r\n\r\n    return {setTurn,getTurn,guessShip,playerClick};\r\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeShip\": () => (/* binding */ makeShip)\n/* harmony export */ });\nconst makeShip=(length)=>{\r\n\r\n    let hitPoints=[];\r\n    let coordinates=[];\r\n    for(let i=0;i<length;i++){\r\n        hitPoints[i]=\"0\";\r\n    }\r\n    const hit=(pos)=>{\r\n        if((pos<0 || pos>length-1) || (hitPoints[pos]==='x')){\r\n            throw new TypeError('Can\\'t hit this position');\r\n        }else{\r\n            hitPoints[pos]=\"x\";\r\n        }        \r\n        \r\n    }\r\n    const setCord=(x,y,j)=>{\r\n        coordinates.push([x,y,j]);\r\n    };\r\n    const getCord=()=>coordinates;\r\n    const getLength=()=>length;\r\n    const getHitPoints=()=>hitPoints;\r\n    const isSunk=()=>{\r\n        let sunk=true;\r\n        for(let i=0;i<length;i++){\r\n            if(hitPoints[i]!=\"x\"){\r\n                sunk=false;\r\n                break;\r\n            }\r\n        }\r\n        return sunk;\r\n    }\r\n    return {hit,isSunk,getHitPoints,getLength,setCord,getCord}\r\n}\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;