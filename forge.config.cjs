const name = require('./package.json').name;

module.exports = {
	packagerConfig: {
		executableName: name
	},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				authors: 'YOU',
				exe: name
			},
			platforms: ['linux']
		},
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin']
		},
		{
			name: '@electron-forge/maker-deb',
			config: {}
		},
		{
			name: '@electron-forge/maker-rpm',
			config: {}
		}
	]
};
