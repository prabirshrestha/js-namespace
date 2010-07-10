/*!
 * js-namespace Javascript Library v1.0
 *
 * http://www.prabir.me
 * http://github.com/prabirshrestha/js-namespace
 *
 * Copyright 2010, Prabir Shrestha
 * Dual licensed under the MIT or GPL version 2 licenses.
 * http://github.com/prabirshrestha/js-namespace/raw/master/LICENSE.txt
 * http://www.prabir.me
 */
NS = {
	register: function(ns,container){
		var root = container || window;
		var nsParts = ns.split('.');
		var length = nsParts.length;
		for(var i = 0; i < length; ++i)
			root = root[nsParts[i]] = root[nsParts[i]] || {};
		return root;
	},
	exists: function(ns,container){
		var root = container || window;
		var nsParts = ns.split('.');
		var length = nsParts.length;
		for(var i = 0; i < length; ++i){
			if(!root[nsParts[i]])
				return false;
			root = root[nsParts[i]];
		}
		return true;
	}
};
// alias
NS.r = NS.register;
NS.e = NS.exists;