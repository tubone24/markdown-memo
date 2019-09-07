const fs = require('fs');
const path = require('path');

const dirpath = "./posts";
const dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
});
const sidebarArray = ["/"].concat(dirs.map((dir) => {
  return {
    title: dir,
    collapsable: true,
    children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
      return dirpath + "/" + dir + "/" + childDir
    })
  }
}));

module.exports = {
  title: 'My Vuepress',
  description: 'Just playing around',
  config: (md) => {
    md.options.linkify = true
  },
  themeConfig: {
    sidebar: sidebarArray
  }
};
