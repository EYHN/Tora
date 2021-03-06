"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
var middlewares_1 = require("./middlewares");
var Tora_1 = require("./libs/Tora");
var PluginsManager_1 = require("./libs/PluginsManager");
var express = require("express");
var index_1 = require("./models/index");
var conf_1 = require("./utils/conf");
var Logger_1 = require("./utils/Logger");
var mongodbURL_1 = require("./utils/mongodbURL");
var app = express();
middlewares_1.default(app);
index_1.connectDatabase(mongodbURL_1.default(conf_1.default.get('database:host'), conf_1.default.get('database:port'), conf_1.default.get('database:table'))).then(function () {
    Logger_1.default.info('Database connect success!');
    Tora_1.default.eventEmitter.emit('connectDatabaseSuccess');
}).catch(function (err) {
    Logger_1.default.error('Unable to connect to the database!\n', err);
    Tora_1.default.eventEmitter.emit('connectDatabaseError', err);
});
var server = app.listen(conf_1.default.get('server:port') || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    Logger_1.default.info('Example app listening at http://%s:%s', host, port);
});
PluginsManager_1.loadPlugins();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsUUFBd0I7QUFDeEIsNEJBQWlEO0FBQ2pELHFCQUErQjtBQUcvQiwrQkFBb0Q7QUFDcEQsc0JBQW1DO0FBQ25DLHNCQUFpRDtBQUVqRCxxQkFBa0M7QUFDbEMsdUJBQW9DO0FBQ3BDLDJCQUE0QztBQUU1QyxJQUFNLEFBQUcsTUFBRyxBQUFPLEFBQUUsQUFBQztBQUV0QixjQUFvQixRQUFDLEFBQUcsQUFBQyxBQUFDO0FBRTFCLFFBQWUsZ0JBQUMsYUFBVSxRQUFDLE9BQU0sUUFBQyxBQUFHLElBQUMsQUFBZSxBQUFDLGtCQUFFLE9BQU0sUUFBQyxBQUFHLElBQUMsQUFBZSxBQUFDLGtCQUFFLE9BQU0sUUFBQyxBQUFHLElBQUMsQUFBZ0IsQUFBQyxBQUFDLEFBQUMsb0JBQ2hILEFBQUksS0FBQztBQUNKLGFBQU0sUUFBQyxBQUFJLEtBQUMsQUFBMkIsQUFBQyxBQUFDO0FBQ3pDLFdBQUksUUFBQyxBQUFZLGFBQUMsQUFBSSxLQUFDLEFBQXdCLEFBQUMsQUFBQyxBQUNuRDtBQUFDLEFBQUMsR0FDRCxBQUFLLE1BQUMsVUFBQyxBQUFHO0FBQ1QsYUFBTSxRQUFDLEFBQUssTUFBQyxBQUFzQyx3Q0FBRSxBQUFHLEFBQUMsQUFBQztBQUMxRCxXQUFJLFFBQUMsQUFBWSxhQUFDLEFBQUksS0FBQyxBQUFzQix3QkFBRSxBQUFHLEFBQUMsQUFBQyxBQUN0RDtBQUFDLEFBQUMsQUFBQztBQUVMLElBQU0sQUFBTSxhQUFPLEFBQU0sT0FBQyxPQUFNLFFBQUMsQUFBRyxJQUFDLEFBQWEsQUFBQyxrQkFBSSxBQUFJLE1BQUU7QUFDM0QsUUFBTSxBQUFJLE9BQUcsQUFBTSxPQUFDLEFBQU8sQUFBRSxVQUFDLEFBQU8sQUFBQztBQUN0QyxRQUFNLEFBQUksT0FBRyxBQUFNLE9BQUMsQUFBTyxBQUFFLFVBQUMsQUFBSSxBQUFDO0FBRW5DLGFBQU0sUUFBQyxBQUFJLEtBQUMsQUFBdUMseUNBQUUsQUFBSSxNQUFFLEFBQUksQUFBQyxBQUFDLEFBQ25FO0FBQUMsQUFBQyxBQUFDLENBTFksQUFBRztBQVFsQixpQkFBVyxBQUFFLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBJbmplY3Rpb25NaWRkbGV3YXJlcyBmcm9tICcuL21pZGRsZXdhcmVzJztcbmltcG9ydCBUb3JhIGZyb20gJy4vbGlicy9Ub3JhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4vbW9kZWxzL3Bvc3QnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbnMgfSBmcm9tICcuL2xpYnMvUGx1Z2luc01hbmFnZXInO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGNvbm5lY3REYXRhYmFzZSB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IHNldHVwTmNvbmYgfSBmcm9tICcuL3V0aWxzL2NvbmYnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL3V0aWxzL2NvbmYnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL3V0aWxzL0xvZ2dlcic7XG5pbXBvcnQgbW9uZ29kYlVSTCBmcm9tICcuL3V0aWxzL21vbmdvZGJVUkwnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbkluamVjdGlvbk1pZGRsZXdhcmVzKGFwcCk7XG5cbmNvbm5lY3REYXRhYmFzZShtb25nb2RiVVJMKGNvbmZpZy5nZXQoJ2RhdGFiYXNlOmhvc3QnKSwgY29uZmlnLmdldCgnZGF0YWJhc2U6cG9ydCcpLCBjb25maWcuZ2V0KCdkYXRhYmFzZTp0YWJsZScpKSlcbiAgLnRoZW4oKCkgPT4ge1xuICAgIExvZ2dlci5pbmZvKCdEYXRhYmFzZSBjb25uZWN0IHN1Y2Nlc3MhJyk7XG4gICAgVG9yYS5ldmVudEVtaXR0ZXIuZW1pdCgnY29ubmVjdERhdGFiYXNlU3VjY2VzcycpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIExvZ2dlci5lcnJvcignVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlIVxcbicsIGVycik7XG4gICAgVG9yYS5ldmVudEVtaXR0ZXIuZW1pdCgnY29ubmVjdERhdGFiYXNlRXJyb3InLCBlcnIpO1xuICB9KTtcblxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3Rlbihjb25maWcuZ2V0KCdzZXJ2ZXI6cG9ydCcpIHx8IDMwMDAsICgpID0+IHtcbiAgY29uc3QgaG9zdCA9IHNlcnZlci5hZGRyZXNzKCkuYWRkcmVzcztcbiAgY29uc3QgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcblxuICBMb2dnZXIuaW5mbygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIGF0IGh0dHA6Ly8lczolcycsIGhvc3QsIHBvcnQpO1xufSk7XG5cbi8vIExvYWQgUGx1Z2luc1xubG9hZFBsdWdpbnMoKTtcbiJdfQ==