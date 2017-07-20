// Generated by IcedCoffeeScript 108.0.11
(function() {
  var db, e, iced, r, weg, wegweg, _, __iced_deferrals, __iced_k, __iced_k_noop,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  iced = {
    Deferrals: (function() {
      function _Class(_arg) {
        this.continuation = _arg;
        this.count = 1;
        this.ret = null;
      }

      _Class.prototype._fulfill = function() {
        if (!--this.count) {
          return this.continuation(this.ret);
        }
      };

      _Class.prototype.defer = function(defer_params) {
        ++this.count;
        return (function(_this) {
          return function() {
            var inner_params, _ref;
            inner_params = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            if (defer_params != null) {
              if ((_ref = defer_params.assign_fn) != null) {
                _ref.apply(null, inner_params);
              }
            }
            return _this._fulfill();
          };
        })(this);
      };

      return _Class;

    })(),
    findDeferral: function() {
      return null;
    },
    trampoline: function(_fn) {
      return _fn();
    }
  };
  __iced_k = __iced_k_noop = function() {};

  require('iced-coffee-script').register();

  _ = require('lodash');

  module.exports = wegweg = function(opt) {
    var async, fs, needle, portrange;
    if (opt == null) {
      opt = {};
    }
    if (!(((opt != null ? opt.globals : void 0) != null) && opt.globals === false)) {
      process.setMaxListeners(0);
      if (root.log == null) {
        root.log = function() {
          var x;
          x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          try {
            return console.log.apply(console, x);
          } catch (_error) {}
        };
      }
      if (!(((opt != null ? opt.shelljs : void 0) != null) && opt.shelljs === false)) {
        require('shelljs/global');
      }
    }
    _.cmap = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return _.compact(_.map.apply(_, x));
    };
    _.unique = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return _.uniq.apply(_, x);
    };
    _.ucmap = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return _.unique(_.compact(_.map.apply(_, x)));
    };
    async = _.async = require('async');
    _.par = async.parallel;
    _.parl = async.parallelLimit;
    _.series = async.series;
    _.fns = _.functions;
    _.vals = _.values;
    fs = require('fs');
    _.reads = function(x) {
      return fs.readFileSync(x).toString();
    };
    _.writes = fs.writeFileSync;
    _.base = require('path').basename;
    _.resolve = require('path').resolve;
    _.isDir = _.is_dir = function(f) {
      var stat;
      stat = fs.statSync(f);
      if (stat) {
        return stat.isDirectory();
      }
      return false;
    };
    _.isFile = _.is_file = function(f) {
      var stat;
      stat = fs.statSync(f);
      if (stat) {
        return stat.isFile();
      }
      return false;
    };
    _.every = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return require('every-time-mirror').apply(null, x);
    };
    _["in"] = function(str, fn) {
      var result;
      result = require('english-time-mirror')(str);
      return setTimeout(fn, result);
    };
    _.secs = _.seconds = function(str) {
      var result;
      result = require('english-time-mirror')(str);
      return Math.round(parseInt(result / 1000));
    };
    _.type = function(o) {
      if (o === 'undefined' || o === null) {
        return false;
      }
      return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
    };
    _.uuid = function() {
      return (require('shortid')).generate();
    };
    _.stats = fs.statSync;
    _.exists = fs.existsSync;
    _.md5 = function(x) {
      var c;
      c = require('crypto').createHash('md5');
      c.update(x);
      return c.digest('hex');
    };
    _.b64_encode = _.b64 = function(str) {
      return new Buffer(str).toString('base64');
    };
    _.b64_decode = function(str) {
      return new Buffer(str, 'base64').toString('ascii');
    };
    _.time = function() {
      var d;
      d = new Date().getTime() / 1000;
      return Math.round(d);
    };
    _.today = function(unix_input) {
      var d;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      d.setHours(0, 0, 0, 0);
      return Math.round(d.getTime() / 1000);
    };
    _.yesterday = function(unix_input) {
      var d, day;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      day = _.today(d.getTime() / 1000) - _.secs('2 hours');
      return _.today(day);
    };
    _.hour = function(unix_input) {
      var d;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      d.setHours(new Date().getHours(), 0, 0, 0);
      return Math.round(d.getTime() / 1000);
    };
    _.minute = function(unix_input) {
      var d;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      d.setMinutes(new Date().getMinutes(), 0, 0);
      return Math.round(d.getTime() / 1000);
    };
    _.week = function(unix_input) {
      var d;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      while (d.getDay() !== 1) {
        d.addDays(-1);
      }
      d.clearTime();
      return d.getTime() / 1000;
    };
    _.month = function(unix_input) {
      var d;
      if (unix_input == null) {
        unix_input = null;
      }
      d = new Date;
      if (unix_input) {
        d = new Date(unix_input * 1000);
      }
      d.setDate(1);
      d.setHours(0, 0, 0, 0);
      return Math.round(d.getTime() / 1000);
    };
    _.mime = function() {
      var x, _ref;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = require('mime')).lookup.apply(_ref, x);
    };
    _.rand = function(min, max) {
      var _ref;
      if (min > max) {
        _ref = [max, min], min = _ref[0], max = _ref[1];
      }
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    _.random_string = function(length, pool) {
      var str, x, _i;
      if (length == null) {
        length = 32;
      }
      if (!pool) {
        pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
      }
      str = '';
      for (x = _i = 1; 1 <= length ? _i <= length : _i >= length; x = 1 <= length ? ++_i : --_i) {
        pool = _.shuffle(pool);
        str += pool[0];
      }
      return str;
    };
    _.is_email = function(x) {
      return /\S+@\S+\.\S+/.test(x);
    };
    _.enc = function(x, salt) {
      var ec;
      ec = require('easycrypto').getInstance();
      return ec.encrypt(JSON.stringify(x), salt || '2reh9zmtlsfy5gbi');
    };
    _.dec = function(x, salt) {
      var ec;
      ec = require('easycrypto').getInstance();
      return JSON.parse(ec.decrypt(x, salt || '2reh9zmtlsfy5gbi'));
    };
    _.mongo = _.mongodb = (function(uri) {
      var db, mongo;
      mongo = require('mongojs');
      db = mongo(uri);
      db.uri = (function() {
        var database, obj, up;
        obj = _.parse_uri(uri);
        if (uri.match('@')) {
          up = uri.split('@')[0] + '@';
        } else {
          up = '';
        }
        database = uri.split('/').pop();
        return "mongodb://" + up + obj.hostname + ":" + (obj.port || 27017) + ('/' + database || '');
      })();
      db.mid = function(str) {
        if (_.isString(str)) {
          return mongo.ObjectId(str);
        }
        return str;
      };
      db.find = function() {
        var cb, coll, extra, fields, options, query, _i;
        coll = arguments[0], options = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
        query = options[0], fields = options[1], extra = options[2];
        return db.collection(coll).find(query || {}, fields || [], cb);
      };
      db.findOne = function() {
        var cb, coll, extra, fields, options, query, _i;
        coll = arguments[0], options = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
        query = options[0], fields = options[1], extra = options[2];
        if ((query != null ? query._id : void 0) != null) {
          query._id = mongo.ObjectId(query._id);
        }
        return db.collection(coll).findOne(query || {}, fields || [], extra || {}, cb);
      };
      db.insert = function(coll, doc, cb) {
        return db.collection(coll).insert(doc, cb);
      };
      db.update = function() {
        var cb, coll, extra, options, query, update, _i;
        coll = arguments[0], options = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
        query = options[0], update = options[1], extra = options[2];
        return db.collection(coll).update(query || {}, update || {}, extra || {}, cb);
      };
      db.count = function() {
        var cb, coll, options, query, _i;
        coll = arguments[0], options = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
        query = options[0];
        return db.collection(coll).count(query || {}, cb);
      };
      db.remove = function() {
        var cb, coll, just_one, options, query, _i;
        coll = arguments[0], options = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
        query = options[0], just_one = options[1];
        return db.collection(coll).remove(query || {}, just_one || false, cb);
      };
      db.distinct = function() {
        var cb, coll, extra, field, options, _i;
        coll = arguments[0], field = arguments[1], options = 4 <= arguments.length ? __slice.call(arguments, 2, _i = arguments.length - 1) : (_i = 2, []), cb = arguments[_i++];
        extra = options[0];
        return db.collection(coll).distinct(field, extra || {}, cb);
      };
      return db;
    });
    _.redis = function(uri) {
      var Redis, parts, _ref;
      Redis = require('ioredis');
      if (uri) {
        if (!uri.includes('://')) {
          uri = "redis://" + uri;
        }
        parts = require('url').parse(uri);
        return new Redis((_ref = parts.port) != null ? _ref : 6379, parts.hostname);
      } else {
        return new Redis;
      }
    };
    _.memcached = _.memcache = _.mem = function(uri) {
      var Memcached, parts, _ref;
      Memcached = require('memcached');
      if (uri) {
        if (!uri.includes('://')) {
          uri = "memcached://" + uri;
        }
        parts = require('url').parse(uri);
        return new Memcached("" + parts.hostname + ":" + ((_ref = parts.port) != null ? _ref : '11211'));
      } else {
        return new Memcached("localhost:11211");
      }
    };
    portrange = 45032;
    _.port = function(cb) {
      var port, server;
      port = portrange;
      portrange += 1;
      server = net.connect(port, function() {
        server.destroy();
        return _.port(cb);
      });
      return server.on('error', function() {
        return cb(port);
      });
    };
    _.weight = function(arr) {
      var Weighter, w, x, _i, _len;
      Weighter = (function() {
        Weighter.prototype.items = [];

        function Weighter() {}

        Weighter.prototype.add = function(item, weight) {
          return this.items.push({
            item: item,
            weight: weight
          });
        };

        Weighter.prototype.pick = function() {
          var cur, rand, t, x, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2, _results;
          t = 0;
          _ref = this.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            x = _ref[_i];
            t += x.weight;
          }
          rand = _.rand(1, t);
          cur = 1;
          _ref1 = this.items;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            x = _ref1[_j];
            if (__indexOf.call((function() {
              _results = [];
              for (var _k = cur, _ref2 = cur + x.weight; cur <= _ref2 ? _k < _ref2 : _k > _ref2; cur <= _ref2 ? _k++ : _k--){ _results.push(_k); }
              return _results;
            }).apply(this), rand) >= 0) {
              return x.item;
            } else {
              cur += x.weight;
            }
          }
          try {
            return this.items[0].item;
          } catch (_error) {}
        };

        return Weighter;

      })();
      w = new Weighter;
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        x = arr[_i];
        w.add(x, x.weight || 1);
      }
      return w.pick();
    };
    _.arg = function(str) {
      var a, base, exists, i, next, value, x, _i, _len;
      a = process.argv.slice(2);
      i = 0;
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        x = a[_i];
        base = x.split('-').join('');
        if (base === str) {
          exists = true;
          if (next = a != null ? a[i + 1] : void 0) {
            if (next.substr(0, 1 !== '-')) {
              value = next;
              break;
            }
          }
        }
        ++i;
      }
      if ((exists != null) && (value == null)) {
        return true;
      } else if ((exists != null) && (value != null)) {
        return value;
      } else {
        return false;
      }
    };
    needle = _.needle = require('needle');
    _.get = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return needle.get.apply(needle, x);
    };
    _.post = function() {
      var x;
      x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return needle.post.apply(needle, x);
    };
    _.app = (function(opt) {
      var app, base_dir, body_parser, dir, express, val, _i, _len;
      if (opt == null) {
        opt = {};
      }
      express = require('express');
      app = express();
      app.disable('x-powered-by');
      if (opt.body_parser) {
        body_parser = require('body-parser');
        app.use(body_parser.urlencoded({
          extended: false
        }));
        app.use(body_parser.json());
      }
      app.use(function(req, res, next) {
        var tmp;
        if ((tmp = req.headers['x-forwarded-for'])) {
          req.real_ip = tmp.split(',').shift().trim();
        } else {
          req.real_ip = req.ip;
        }
        return next();
      });
      if (opt["static"]) {
        val = opt["static"];
        if (_.type(val) === 'string') {
          val = [val];
        }
        for (_i = 0, _len = val.length; _i < _len; _i++) {
          dir = val[_i];
          base_dir = _.base(dir);
          app.use("/" + base_dir, require('serve-static')("./" + base_dir));
        }
      }
      return app;
    });
    _.minify = (function(code) {
      var Ugly, compressor, stream, toplevel;
      Ugly = require('uglify-js');
      toplevel = Ugly.parse(code, {
        toplevel: toplevel
      });
      toplevel.figure_out_scope();
      compressor = Ugly.Compressor({
        warnings: false
      });
      toplevel = toplevel.transform(compressor);
      toplevel.figure_out_scope();
      toplevel.compute_char_frequency();
      toplevel.mangle_names({});
      stream = Ugly.OutputStream({});
      toplevel.print(stream);
      return stream.toString() + '';
    });
    _.parse_uri = (function(uri) {
      var num, parts;
      if (num = parseInt(uri) > 1) {
        return {
          hostname: 'localhost',
          port: uri
        };
      }
      if (!uri.includes('://')) {
        uri = "lala://" + uri;
      }
      parts = require('url').parse(uri);
      return {
        hostname: parts.hostname,
        port: parts.port
      };
    });
    _.emitter = _.events = _.eve = (function() {
      var EventEmitter2, emitter;
      EventEmitter2 = require('eventemitter2').EventEmitter2;
      opt = {
        wildcard: true,
        delimiter: ':',
        maxListeners: 9999
      };
      emitter = new EventEmitter2(opt);
      emitter.setMaxListeners(9999);
      return emitter;
    });
    _.ucfirst = (function(str) {
      if (str && str !== '') {
        return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
      }
    });
    _.ucwords = (function(str) {
      var arr, w, x, _i, _len;
      if ((str != null) && str !== '') {
        arr = str.split(' ');
        w = '';
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
          x = arr[_i];
          w += x.slice(0, 1).toUpperCase() + x.slice(1, x.length) + ' ';
        }
        return w.trim();
      }
    });
    _.uri_title = (function(str, dash, max_len) {
      if (!dash) {
        dash = '-';
      }
      if (!max_len) {
        max_len = 50;
      }
      str = str.toLowerCase().trim();
      str = str.replace(/[^a-z0-9]/g, ' ');
      while (str.includes('  ')) {
        str = str.replace('  ', ' ');
      }
      if (str.length > max_len) {
        str = str.slice(0, max_len);
      }
      return str.trim().replace(/\s/g, dash);
    });
    _.pixel = (function() {
      var p;
      p = 'R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
      return new Buffer(p, 'base64');
    });
    return _;
  };

  if (process.env.TAKY_DEV) {
    console.log('---');
    weg = wegweg();
    log(weg.seconds('3 days'));
    log(weg.base('/wojf/wefoj/wefoj.png'));
    log(weg.uuid());
    log(weg.mime('image.png'));
    log(weg.enc('hello'));
    log(weg.cmap([1, 2, 3, 4, 5], function(x) {
      if (x === 1 || x === 2 || x === 3) {
        return null;
      }
      return x;
    }));
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          filename: "/home/nick/www/wegweg/src/module.iced"
        });
        weg.get('http://example.com', __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              e = arguments[0];
              return r = arguments[1];
            };
          })(),
          lineno: 403
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        log(e);
        log(r.body);

        /*
        app = weg.app({
          static: './build'
          body_parser: yes
        })
        
        app.listen 8081
        log ":8081"
         */
        log(weg.minify(_.reads('./build/module.js')));
        db = weg.mongo('localhost/wegweg-test');
        log(weg.fns(db));
        log(weg.ucfirst('john'));
        log(weg.ucwords('john smith'));
        return __iced_k(log(weg.uri_title('john smith\'s newest fantastic post')));
      };
    })(this));
  } else {
    __iced_k();
  }

}).call(this);
