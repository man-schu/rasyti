const ICONS = 'docs/images/icons/icon';

module.exports = {
  packagerConfig: {
    icon: ICONS,
    appBundleId: 'eu.blueseal.rasyti',
    asar: true,
    // Ship only the web app and runtime deps, not repo files.
    ignore: (p) => p !== '' && !/^\/(docs|node_modules|package\.json)(\/|$)/.test(p),
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: (arch) => ({
        name: 'rasyti',
        setupExe: `Rasyti-${require('./package.json').version}-${arch}.Setup.exe`,
        setupIcon: `${ICONS}.ico`,
        iconUrl: 'https://raw.githubusercontent.com/zeleniy/rasyti/main/docs/images/icons/icon.ico',
      }),
    },
    {
      name: '@electron-forge/maker-dmg',
      config: { icon: `${ICONS}.icns` },
    },
    {
      name: '@electron-forge/maker-deb',
      config: { options: { icon: `${ICONS}.png` } },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: { options: { icon: `${ICONS}.png` } },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: { owner: 'zeleniy', name: 'rasyti' },
        draft: true,
      },
    },
  ],
};
