"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("regenerator-runtime/runtime");

var functions = _interopRequireWildcard(require("firebase-functions"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // app.use(cors({origin: true}));

app.use(function (req, res, next) {
  // console.log( "RES", res);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use((0, _compression["default"])()); // parse application/json

app.use(_bodyParser["default"].json());
app.get("/", function (req, res) {
  res.status(200).json({
    ok: "ALIVE"
  });
});
exports.c2gLicences = functions.https.onRequest(app);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiYm9keVBhcnNlciIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInJlcSIsInJlcyIsIm5leHQiLCJzZXRIZWFkZXIiLCJqc29uIiwiZ2V0Iiwic3RhdHVzIiwib2siLCJleHBvcnRzIiwiYzJnTGljZW5jZXMiLCJmdW5jdGlvbnMiLCJodHRwcyIsIm9uUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBRywwQkFBWjtBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsdUJBQVdDLFVBQVgsQ0FBc0I7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBdEIsQ0FBUixFLENBQ0E7O0FBRUFKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUNJLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzFCO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjLDZCQUFkLEVBQTZDLEdBQTdDO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUNFLDhCQURGLEVBRUUsd0NBRkY7QUFJQUYsRUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQ0UsOEJBREYsRUFFRSw2Q0FGRjtBQUlBRixFQUFBQSxHQUFHLENBQUNFLFNBQUosQ0FBYyxrQ0FBZCxFQUFrRCxJQUFsRDtBQUNBRCxFQUFBQSxJQUFJO0FBQ0wsQ0FiRDtBQWVBUCxHQUFHLENBQUNDLEdBQUosQ0FBUSw4QkFBUixFLENBRUE7O0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyx1QkFBV08sSUFBWCxFQUFSO0FBRUFULEdBQUcsQ0FBQ1UsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDTCxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QkEsRUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBRUcsSUFBQUEsRUFBRSxFQUFFO0FBQU4sR0FBckI7QUFDRCxDQUZEO0FBTUFDLE9BQU8sQ0FBQ0MsV0FBUixHQUFzQkMsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxTQUFoQixDQUEwQmpCLEdBQTFCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSBcImZpcmViYXNlLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbi8vIGFwcC51c2UoY29ycyh7b3JpZ2luOiB0cnVlfSkpO1xuXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyggXCJSRVNcIiwgcmVzKTtcbiAgcmVzLnNldEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsXG4gICAgXCJHRVQsIFBPU1QsIE9QVElPTlMsIFBVVCwgUEFUQ0gsIERFTEVURVwiXG4gICk7XG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsXG4gICAgXCJBdXRob3JpemF0aW9uLCBPcmlnaW4sIENvbnRlbnQtVHlwZSwgQWNjZXB0XCJcbiAgKTtcbiAgcmVzLnNldEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCIsIHRydWUpO1xuICBuZXh0KCk7XG59KTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gcGFyc2UgYXBwbGljYXRpb24vanNvblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiBcIkFMSVZFXCIgfSk7XG59KTtcblxuXG5cbmV4cG9ydHMuYzJnTGljZW5jZXMgPSBmdW5jdGlvbnMuaHR0cHMub25SZXF1ZXN0KGFwcCk7XG4iXX0=