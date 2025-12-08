module.exports = function( grunt ) {
	grunt.initConfig( {
		compress: {
			main: {
				options: {
					archive: 'alerts-dlx.zip',
				},
				files: [
					{ src: [ 'alerts-dlx.php' ], dest: '/', filter: 'isFile' },
					{ src: [ 'readme.txt' ], dest: '/', filter: 'isFile' },
					{ src: [ 'php/**' ], dest: '/' },
					{ src: [ 'lib/**' ], dest: '/' },
					{ src: [ 'dist/**' ], dest: '/' },
					{ src: [ 'build/**' ], dest: '/' },
					{ src: [ 'assets/**' ], dest: '/' },
				],
			},
		},
	} );
	grunt.registerTask( 'default', [ 'compress' ] );

	grunt.loadNpmTasks( 'grunt-contrib-compress' );
};
