# js-namespace Javascript Library

## License: Dual licensed under the MIT or GPL version 2 licenses.
http://github.com/prabirshrestha/js-namespace/raw/master/LICENSE.txt

### Basic Usage

```js
<script type="text/javascript" src="js-namespace.min.js"></script>
<script type="text/javascript">
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
</script>
```