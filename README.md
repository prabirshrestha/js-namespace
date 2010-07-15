# js-namespace Javascript Library

## License: Dual licensed under the MIT or GPL version 2 licenses.
http://github.com/prabirshrestha/js-namespace/raw/master/LICENSE.txt

### Basic Usage
&lt;script type="text/javascript" src="js-namespace.min.js">&lt;/script>
&lt;script type="text/javascript">
	if(!NS.exists('Prabir.Shrestha'))
		NS.register('Prabir.Shrestha');
		Prabir.Shrestha.MySDK = function(){
		 return {
			  public_method : function() {
				   alert('I am a public method');
			  }
		 };
	};
	var mySdk = new Prabir.Shrestha.MySDK();
	mySdk.public_method();
&lt;/script>