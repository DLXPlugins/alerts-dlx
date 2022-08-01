module.exports = function (grunt) {
	grunt.initConfig({
		compress: {
			main: {
			  options: {
				archive: 'quotes-dlx.zip'
			  },
			  files: [
				{src: ['quotes-dlx.php'], dest: '/', filter: 'isFile'}, // includes files in path
				{src: ['readme.md'], dest: '/', filter: 'isFile'}, // includes files in path
				{src: ['readme.txt'], dest: '/', filter: 'isFile'},
				{src: ['php/**'], dest: '/'}, // includes files in path and its subdirs
				{src: ['images/**'], dest: '/'},
				{src: ['lib/**'], dest: '/'}, // includes files in path and its subdirs
				{src: ['dist/**'], dest: '/'}, // includes files in path and its subdirs
				{src: ['build/**'], dest: '/'}, // includes files in path and its subdirs
			  ]
			}
		  }
	  });
	  grunt.registerTask('default', ["compress"]);

 
 
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
   
 };
