import axios from 'axios'
import moment from 'moment';
import { toast } from "sonner";
// require('dotenv').config()
// import { useLanguage } from "@/context/LanguageContext";

// import 'moment/locale/zh-cn.js'
// import 'moment/locale/id.js'

export default class Base{
	host = ""
	url_api = this.host + "/api"
	version = ""
	locale_string = "id-ID"
	locale_timezone = "Asia/Jakarta"
	local_currency = "Rp."
	local_area_phone = "+62"
	wait_time = 1500
	app_version = '0.2.0066'

	max_width_size = "1400px"
	height_aerial = 'aerial-height'

	// objLang = useLanguage();
	lang = 'en'

	// arrBaseJS = [
	// 	// window.location.href + "/js/scripts.js",
	// 	window.location.origin + "/js/jquery.min.js",
	// 	// window.location.origin + "/js/bootstrap.min.js",
	// 	window.location.origin + "/js/bootstrap.bundle.min.js",
	// 	window.location.origin + "/js/moment.min.js",
	// 	window.location.origin + "/js/fancybox.min.js",
	// 	window.location.origin + "/js/swiper.min.js",
	// 	// window.location.origin + "/js/datepicker.min.js",
	// 	// window.location.origin + "/js/daterangepicker.js",
	// 	window.location.origin + "/js/bootstrap-datepicker.min.js",
	// 	window.location.origin + "/js/smooth-scrollbar.js",
	// 	// window.location.origin + "/js/overscroll.js",
	// 	window.location.origin + "/js/TweenMax.min.js",

	// ];
	// arrCustomJS = [

	// 	window.location.origin + "/js/scripts.js",

	// ]

	constructor(){
		this.host = import.meta.env.VITE_BACKEND_URL
		this.url_api = this.host + "/api"

		// if(window.location.origin.includes("moozhotel.com")){
		// 	this.host = "https://moozhotel.com/admin"
		// 	this.url_api = this.host + "/api"
		// }
		// else if(window.location.origin.includes("quantumtri.com")){
		// 	this.host = "https://safe-lock-api-v2.quantumtri.com"
		// 	this.url_api = this.host + "/api"
		// }
		// else if(window.location.origin.includes("localhost")){
		// 	// this.host = "https://moozhotel.com/admin"
		// 	this.host = "https://safe-lock-api-v2.quantumtri.com"
		// 	this.url_api = this.host + "/api"
		// }

		// this.getLang()
	}

	async getLang(){
		this.lang = await window.localStorage.getItem('lang')
		moment.locale(this.lang.toLowerCase())
	}

	async request(url, method = 'get', data = {}, with_lang = true, with_modal = true, onUploadProgress = () => {}){
		try{
			axios.defaults.headers.common['Accept'] = 'application/json'
			axios.defaults.timeout = 3600000

			var context = this
			var header = {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Type": "web",
				"timeout": 3600000,
			}
			var token = await window.localStorage.getItem('token')
			if(token != null && token != '')
				header['Authorization'] = token

			var response
			if(method === 'get'){
				for(let x in data)
					url += (url.includes('?') ? '&' : '?') + x + "=" + JSON.stringify(data[x])

				var lang = with_lang ? await window.localStorage.getItem('lang') : 'en'
				url += (url.includes('?') ? '&' : '?') + "lang=" + (lang != null ? lang : 'en')

				response = await axios.get(url, {
					headers: header,
				})
				.catch(function (error) {
					if (error.response.code != 200) {
						context.show_error(error.response.data)
					}
					else if (error.response) {
						context.show_error(JSON.stringify(error.response.data))
					}
				})
			}
			else if(method === 'post')
				response = await axios.post(url, data, {
					headers: header,
					onUploadProgress
				})
				.catch(function (error) {
					if (error.response.code != 200) {
						context.show_error(error.response.data)
					}
					else if (error.response) {
						context.show_error(JSON.stringify(error.response.data))
					}
				})
			else if(method === 'put')
				response = await axios.put(url, data, {
					headers: header,
					onUploadProgress
				})
				.catch(function (error) {
					if (error.response.code != 200) {
						context.show_error(error.response.data)
					}
					else if (error.response) {
						context.show_error(JSON.stringify(error.response.data))
					}
				})
			else if(method === 'delete')
				response = await axios.delete(url, {
					headers: header,
					data: data,
				})
				.catch(function (error) {
					if (error.response.code != 200) {
						context.show_error(error.response.data)
					}
					else if (error.response) {
						context.show_error(JSON.stringify(error.response.data))
					}
				})

			if(with_modal){
				setTimeout(() => {
				}, 500)
			}

			return response.data
		} catch(error){
			// console.log(error.response.data)
			return {status: null}
		}
	}

	validate_email(email){
		return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	}

	check_phone_format(data){
		return data.length > 0 && data[data.length - 1].match(/^[\d\s]+$/g) == null ? data.substring(0, data.length - 1) : data
	}

	str_to_double(data, default_value = '0'){
		var value
		if(data != '')
			value = parseFloat(data.replace(/\./g,'').replace(/,/g,'.'))
		else
			value = default_value
		return value
	}

	responsive_scroll_threshold(value, additional_margin = 0){
		if(window.screen.width < 720)
			value = value * (12 / 16) + additional_margin
		else if(window.screen.width >= 720 && window.screen.width < 1024)
			value = value * (8 / 16)
		// console.log(value)
		return value
	}

	capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}

	check_start_animation(scrollY, flag, arr_factor, scroll_threshold = 0, additional_margin = 0){
		var temp = true
		for(let factor of arr_factor){
			if(!factor){
				temp = false
				break
			}
		}

		return (flag || (!flag && scrollY >= this.responsive_scroll_threshold(scroll_threshold, additional_margin))) && temp
	}

	phone_validation(data, max_length = 12){
		data = String(this.str_to_double(data, ''))
		if(isNaN(data))
			data = '0'
		if(data.charAt(0) === '0')
			data = data.slice(1)
		if(max_length > 0 && data.length > max_length)
			data = data.substring(0, max_length)
		return data
	}

	to_currency_format(data, max_number = 100000000, max_comma_length = 2){
		var value = data

		if(value[value.length - 1] !== ","){
			var is_include_comma = false
			var is_convert_double = true
			var index_comma = 0
			for(let x = 0; x < value.length; x++){
				if(value[x] === ","){
					is_include_comma = true
					index_comma = x
				}
				else if(is_include_comma && x == value.length - 1 && value[x] === "0")
					is_convert_double = false
			}

			if(is_include_comma){
				is_convert_double = value.length - index_comma > max_comma_length && value[value.length - 2] !== "0"
				value = value.substring(0, index_comma + 1 + max_comma_length)
			}


			if(is_convert_double){
				value = this.str_to_double(value)
				if(isNaN(value))
					value = 0
				if(value > max_number)
					value = max_number
			}
		}

		return value.toLocaleString(this.locale_string)
	}

	addScript(arr, index = 0) {
		var scriptTag = document.createElement("script");
		scriptTag.src = arr[index];
		document.getElementsByTagName("head")[0].appendChild(scriptTag);
		// console.log(scriptTag.src);
		if (arr[index + 1] != null) {
			var context = this
			setTimeout(() => {
				context.addScript(arr, index + 1);
			}, 10);
		}
		// else
		// $('#please_wait_modal').modal('hide')
	}

	async toDataURLPromise(url) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.onload = function() {
				var reader = new FileReader();
				reader.onloadend = function() {
					resolve(reader.result);
				}
				reader.readAsDataURL(xhr.response);
			};
			xhr.open('GET', url);
			xhr.responseType = 'blob';
			xhr.send();
		})
	}

	show_error(message = ""){
		// showSnackBar({
		//   message: message,
		//   textColor: '#FFF',      // message text color
		//   position: 'top',  // enum(top/bottom).
		//   confirmText: '', // button text.
		//   duration: 2000,   // (in ms), duartion for which snackbar is visible.
		// })
		toast.error(message)
		// alert(message)
		// console.log(message)
		// this.$toasted.show(message)
		// sessionStorage.removeItem('message')
	}
}