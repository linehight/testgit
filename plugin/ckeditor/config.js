/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.language = 'es';
	config.uiColor = '#F7B42C';
	 config.image_previewText = ' '; //预览区域显示内容
		config.filebrowserBrowseUrl =  '/plugin/ckfinder/ckfinder.html' ;  
	    config.filebrowserImageBrowseUrl =  '/plugin/ckfinder/ckfinder.html?type=Images' ;  
	    config.filebrowserFlashBrowseUrl =  '/plugin/ckfinder/ckfinder.html?type=Flash' ;  
	    config.filebrowserUploadUrl =  '/plugin/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files' ;  
	    config.filebrowserImageUploadUrl =  '/plugin/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images' ;  
	    config.filebrowserFlashUploadUrl =  '/plugin/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash' ;  
	    config.filebrowserWindowWidth = '1000';  
	    config.filebrowserWindowHeight = '700';  
		config.fullPage = "";
		config.enterMode = CKEDITOR.ENTER_BR ;    // p | div | br 
		//config.uiColor = '#abc';
		config.width = "1000"; //文本域宽度
	    config.height = "300";//文本域高度
};
