/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
(function webpackMissingModule() { throw new Error("Cannot find module \"serve\""); }());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

  $('select').selectric({
    maxHeight: 200
  });

  $(function () {
    //on selecting category
    $('select').on('change', function (event) {

      //prevent defaults
      event.preventDefault();

      // variable declarations
      var userInput = '',
          url = '',
          result = {},
          hasImage = {},
          twelveArticles = {},
          articleImage = '';

      // clear articles and footer error
      $('.articles').empty();
      $('#error').empty();

      // show loader    
      $('#loader').show();

      // keep footer on bottom
      $('footer').addClass('absolute-footer');

      // move header top
      $('header').removeClass('clean').addClass('busy');

      // = user selection
      userInput = $('#selector').val();

      // nyt api address creation
      url = 'https://api.nytimes.com/svc/topstories/v2/';
      url += userInput + '.json?';
      url += $.param({
        'api-key': '90324784f44b48cd8cd582865f7b09d2'
      }); // end of url declaration

      //make ajax call
      $.ajax({
        url: url,
        method: 'GET'
      }).done(function (data) {

        result = data.results;
        hasImage = result.filter(function (filterArray) {
          return filterArray.multimedia.length > 0;
        });
        twelveArticles = hasImage.slice(0, 12);

        $('.articles').show();

        $.each(twelveArticles, function (key, value) {
          //get image url
          articleImage = value.multimedia[4].url;

          //append markup
          $('.articles').append('<li>' + '<a href="' + value.url + '">' + '<div class="article-box"' + 'style="background-image: url(' + articleImage + ')">' + '<p>' + value.abstract + '</p>' + '</div>' + '</a>' + '</li>'); //end append
        }); //end each
      }) //end done

      .fail(function (err) {
        $('header').removeClass('busy').addClass('clean');

        // error message in footer
        $('footer').prepend('<p id="error">Sorry! There was a problem, please try again.</p>'); //end append
        throw err;
      }).always(function () {
        //remove absolute footer
        $('footer').removeClass('absolute-footer');

        //remove load
        $('#loader').hide();
      }); //end ajax call
    }); // end selector
  });
}); //end main

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGEwNzMzZjRkNDRjNDc1NzIzMTIiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdHJpYyIsIm1heEhlaWdodCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsInVybCIsInJlc3VsdCIsImhhc0ltYWdlIiwidHdlbHZlQXJ0aWNsZXMiLCJhcnRpY2xlSW1hZ2UiLCJlbXB0eSIsInNob3ciLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsIiwicGFyYW0iLCJhamF4IiwibWV0aG9kIiwiZG9uZSIsImRhdGEiLCJyZXN1bHRzIiwiZmlsdGVyIiwiZmlsdGVyQXJyYXkiLCJtdWx0aW1lZGlhIiwibGVuZ3RoIiwic2xpY2UiLCJlYWNoIiwia2V5IiwidmFsdWUiLCJhcHBlbmQiLCJhYnN0cmFjdCIsImZhaWwiLCJlcnIiLCJwcmVwZW5kIiwiYWx3YXlzIiwiaGlkZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUU1QkYsSUFBRSxRQUFGLEVBQVlHLFNBQVosQ0FBc0I7QUFDcEJDLGVBQVc7QUFEUyxHQUF0Qjs7QUFJQUosSUFBRSxZQUFXO0FBQ2I7QUFDQUEsTUFBRSxRQUFGLEVBQVlLLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFVBQVNDLEtBQVQsRUFBZ0I7O0FBRXZDO0FBQ0FBLFlBQU1DLGNBQU47O0FBRUE7QUFDQSxVQUFJQyxZQUFZLEVBQWhCO0FBQUEsVUFDSUMsTUFBTSxFQURWO0FBQUEsVUFFSUMsU0FBUyxFQUZiO0FBQUEsVUFHSUMsV0FBVyxFQUhmO0FBQUEsVUFJSUMsaUJBQWlCLEVBSnJCO0FBQUEsVUFLSUMsZUFBZSxFQUxuQjs7QUFPQTtBQUNBYixRQUFFLFdBQUYsRUFBZWMsS0FBZjtBQUNBZCxRQUFFLFFBQUYsRUFBWWMsS0FBWjs7QUFFQTtBQUNBZCxRQUFFLFNBQUYsRUFBYWUsSUFBYjs7QUFFQTtBQUNBZixRQUFFLFFBQUYsRUFBWWdCLFFBQVosQ0FBcUIsaUJBQXJCOztBQUVBO0FBQ0FoQixRQUFFLFFBQUYsRUFBWWlCLFdBQVosQ0FBd0IsT0FBeEIsRUFBaUNELFFBQWpDLENBQTBDLE1BQTFDOztBQUVBO0FBQ0FSLGtCQUFZUixFQUFFLFdBQUYsRUFBZWtCLEdBQWYsRUFBWjs7QUFFQTtBQUNBVCxZQUFNLDRDQUFOO0FBQ0FBLGFBQU9ELFlBQVksUUFBbkI7QUFDQUMsYUFBT1QsRUFBRW1CLEtBQUYsQ0FBUTtBQUNiLG1CQUFXO0FBREUsT0FBUixDQUFQLENBaEN1QyxDQWtDbkM7O0FBRUo7QUFDQW5CLFFBQUVvQixJQUFGLENBQU87QUFDTFgsYUFBS0EsR0FEQTtBQUVMWSxnQkFBUTtBQUZILE9BQVAsRUFJQ0MsSUFKRCxDQUlNLFVBQVNDLElBQVQsRUFBZTs7QUFFbkJiLGlCQUFTYSxLQUFLQyxPQUFkO0FBQ0FiLG1CQUFXRCxPQUFPZSxNQUFQLENBQWMsVUFBU0MsV0FBVCxFQUFzQjtBQUM3QyxpQkFBT0EsWUFBWUMsVUFBWixDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBdkM7QUFDRCxTQUZVLENBQVg7QUFHQWhCLHlCQUFpQkQsU0FBU2tCLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWpCOztBQUVBN0IsVUFBRSxXQUFGLEVBQWVlLElBQWY7O0FBRUFmLFVBQUU4QixJQUFGLENBQU9sQixjQUFQLEVBQXVCLFVBQVNtQixHQUFULEVBQWNDLEtBQWQsRUFBb0I7QUFDekM7QUFDQW5CLHlCQUFlbUIsTUFBTUwsVUFBTixDQUFpQixDQUFqQixFQUFvQmxCLEdBQW5DOztBQUVBO0FBQ0FULFlBQUUsV0FBRixFQUFlaUMsTUFBZixDQUNFLFNBQ0UsV0FERixHQUNnQkQsTUFBTXZCLEdBRHRCLEdBQzRCLElBRDVCLEdBRUksMEJBRkosR0FHTSwrQkFITixHQUd3Q0ksWUFIeEMsR0FHdUQsS0FIdkQsR0FJUSxLQUpSLEdBSWdCbUIsTUFBTUUsUUFKdEIsR0FJaUMsTUFKakMsR0FLSSxRQUxKLEdBTUUsTUFORixHQU9BLE9BUkYsRUFMeUMsQ0FjdEM7QUFDSixTQWZELEVBVm1CLENBeUJmO0FBQ0wsT0E5QkQsRUE4Qkc7O0FBOUJILE9BZ0NDQyxJQWhDRCxDQWdDTSxVQUFTQyxHQUFULEVBQWM7QUFDbEJwQyxVQUFFLFFBQUYsRUFBWWlCLFdBQVosQ0FBd0IsTUFBeEIsRUFBZ0NELFFBQWhDLENBQXlDLE9BQXpDOztBQUVBO0FBQ0FoQixVQUFFLFFBQUYsRUFBWXFDLE9BQVosQ0FDSSxpRUFESixFQUprQixDQU1mO0FBQ0gsY0FBTUQsR0FBTjtBQUNELE9BeENELEVBeUNDRSxNQXpDRCxDQXlDUSxZQUFVO0FBQ2hCO0FBQ0F0QyxVQUFFLFFBQUYsRUFBWWlCLFdBQVosQ0FBd0IsaUJBQXhCOztBQUVBO0FBQ0FqQixVQUFFLFNBQUYsRUFBYXVDLElBQWI7QUFFRCxPQWhERCxFQXJDdUMsQ0FxRm5DO0FBQ0wsS0F0RkQsRUFGYSxDQXdGVDtBQUNILEdBekZEO0FBMEZELENBaEdELEUsQ0FnR0ksVSIsImZpbGUiOiJzcmMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGEwNzMzZjRkNDRjNDc1NzIzMTIiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIFxuICAkKCdzZWxlY3QnKS5zZWxlY3RyaWMoe1xuICAgIG1heEhlaWdodDogMjAwXG4gIH0pO1xuXG4gICQoZnVuY3Rpb24oKSB7XG4gIC8vb24gc2VsZWN0aW5nIGNhdGVnb3J5XG4gICQoJ3NlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgLy9wcmV2ZW50IGRlZmF1bHRzXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uc1xuICAgIHZhciB1c2VySW5wdXQgPSAnJyxcbiAgICAgICAgdXJsID0gJycsXG4gICAgICAgIHJlc3VsdCA9IHt9LFxuICAgICAgICBoYXNJbWFnZSA9IHt9LFxuICAgICAgICB0d2VsdmVBcnRpY2xlcyA9IHt9LFxuICAgICAgICBhcnRpY2xlSW1hZ2UgPSAnJztcblxuICAgIC8vIGNsZWFyIGFydGljbGVzIGFuZCBmb290ZXIgZXJyb3JcbiAgICAkKCcuYXJ0aWNsZXMnKS5lbXB0eSgpO1xuICAgICQoJyNlcnJvcicpLmVtcHR5KCk7XG5cbiAgICAvLyBzaG93IGxvYWRlciAgICBcbiAgICAkKCcjbG9hZGVyJykuc2hvdygpO1xuXG4gICAgLy8ga2VlcCBmb290ZXIgb24gYm90dG9tXG4gICAgJCgnZm9vdGVyJykuYWRkQ2xhc3MoJ2Fic29sdXRlLWZvb3RlcicpO1xuXG4gICAgLy8gbW92ZSBoZWFkZXIgdG9wXG4gICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NsZWFuJykuYWRkQ2xhc3MoJ2J1c3knKTtcbiAgXG4gICAgLy8gPSB1c2VyIHNlbGVjdGlvblxuICAgIHVzZXJJbnB1dCA9ICQoJyNzZWxlY3RvcicpLnZhbCgpO1xuICAgIFxuICAgIC8vIG55dCBhcGkgYWRkcmVzcyBjcmVhdGlvblxuICAgIHVybCA9ICdodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92Mi8nO1xuICAgIHVybCArPSB1c2VySW5wdXQgKyAnLmpzb24/JztcbiAgICB1cmwgKz0gJC5wYXJhbSh7XG4gICAgICAnYXBpLWtleSc6ICc5MDMyNDc4NGY0NGI0OGNkOGNkNTgyODY1ZjdiMDlkMidcbiAgICB9KTsgLy8gZW5kIG9mIHVybCBkZWNsYXJhdGlvblxuICAgIFxuICAgIC8vbWFrZSBhamF4IGNhbGxcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pXG4gICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgXG4gICAgICByZXN1bHQgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBoYXNJbWFnZSA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZmlsdGVyQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlckFycmF5Lm11bHRpbWVkaWEubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgICAgdHdlbHZlQXJ0aWNsZXMgPSBoYXNJbWFnZS5zbGljZSgwLCAxMik7XG5cbiAgICAgICQoJy5hcnRpY2xlcycpLnNob3coKTtcbiAgICAgIFxuICAgICAgJC5lYWNoKHR3ZWx2ZUFydGljbGVzLCBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgICAgLy9nZXQgaW1hZ2UgdXJsXG4gICAgICAgIGFydGljbGVJbWFnZSA9IHZhbHVlLm11bHRpbWVkaWFbNF0udXJsO1xuICAgICAgICBcbiAgICAgICAgLy9hcHBlbmQgbWFya3VwXG4gICAgICAgICQoJy5hcnRpY2xlcycpLmFwcGVuZChcbiAgICAgICAgICAnPGxpPicgK1xuICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgdmFsdWUudXJsICsgJ1wiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFydGljbGUtYm94XCInICtcbiAgICAgICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyArIGFydGljbGVJbWFnZSArICcpXCI+JyArXG4gICAgICAgICAgICAgICAgICAnPHA+JyArIHZhbHVlLmFic3RyYWN0ICsgJzwvcD4nICtcbiAgICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvYT4nICtcbiAgICAgICAgICAnPC9saT4nXG4gICAgICAgICk7IC8vZW5kIGFwcGVuZFxuICAgICAgfSk7IC8vZW5kIGVhY2hcbiAgICB9KSAvL2VuZCBkb25lXG4gICAgXG4gICAgLmZhaWwoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnYnVzeScpLmFkZENsYXNzKCdjbGVhbicpO1xuICAgICAgXG4gICAgICAvLyBlcnJvciBtZXNzYWdlIGluIGZvb3RlclxuICAgICAgJCgnZm9vdGVyJykucHJlcGVuZChcbiAgICAgICAgICAnPHAgaWQ9XCJlcnJvclwiPlNvcnJ5ISBUaGVyZSB3YXMgYSBwcm9ibGVtLCBwbGVhc2UgdHJ5IGFnYWluLjwvcD4nXG4gICAgICApOyAvL2VuZCBhcHBlbmRcbiAgICAgIHRocm93IGVycjtcbiAgICB9KVxuICAgIC5hbHdheXMoZnVuY3Rpb24oKXtcbiAgICAgIC8vcmVtb3ZlIGFic29sdXRlIGZvb3RlclxuICAgICAgJCgnZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ2Fic29sdXRlLWZvb3RlcicpO1xuXG4gICAgICAvL3JlbW92ZSBsb2FkXG4gICAgICAkKCcjbG9hZGVyJykuaGlkZSgpO1xuXG4gICAgfSk7IC8vZW5kIGFqYXggY2FsbFxuICB9KTsgLy8gZW5kIHNlbGVjdG9yXG4gIH0pO1xufSk7IC8vZW5kIG1haW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==