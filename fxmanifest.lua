fx_version 'adamant'

game 'gta5'

description 'mardel Identity'

version '1.6.5'

shared_script '@es_extended/imports.lua'

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
	'locales/*.lua',
	'config.lua',
	'server/main.lua'
}

client_scripts {
	'@es_extended/locale.lua',
	'locales/*.lua',
	'config.lua',
	'client/main.lua'
}

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/js/script.js',
	'html/css/cursor.png',
	'html/css/style.css',
	'html/css/logo.png',
	'html/css/bg1.jpg',
	'html/css/bg2.jpg',
	'html/css/bg3.jpg',
	'html/css/bg4.jpg',
	'html/css/materialdesignicons.min.css',
	'html/css/bootstrap.min.css',
	'html/css/mobile.css',
	'html/css/pageclip.css',
	'html/css/owl.carousel.min.css',
	'html/css/owl.theme.desaul.min.css',
	'html/js/bootstrap.bundle.min.js',
	'html/js/bootstrap.js',
	'html/js/bootstrap.min.js',
	'html/js/jquery.avatargenerate.js',
	'html/js/jquery.avatargenerate.min.js',
	'html/js/jquery.easing.min.js',
	'html/js/jquery/js',
	'html/js/jquery.min.js',
	'html/js/jquery.tipsy.js',
	'html/js/loading-images.js',
	'html/js/mobileCheck.js',
	'html/js/owl.carousel.min.js',
	'html/js/owl.init.js',
}

dependency 'es_extended'
