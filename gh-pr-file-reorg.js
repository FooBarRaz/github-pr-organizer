var getFileName = node => node.getElementsByClassName("file-header")[0].getAttribute("data-path");
var transformFilename = node => getFileName(node).replace("/src/main/", "/src/").replace("/src/test/", "/src/");
var sortByFileName = (a, b) => {
  var nameA = transformFilename(a);
  var nameB = transformFilename(b);

  return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
}

setTimeout(() => {
  var fileList = document.getElementById('files');
  var fileDivs = document.getElementsByClassName('file');
  var sortedFileElements  = [].slice.call(fileDivs).sort(sortByFileName);
  console.log(`Found ${sortedFileElements.length} files`);
  sortedFileElements.forEach(node => console.log(getFileName(node)));

  sortedFileElements.forEach(el => {
    el.remove();
    fileList.appendChild(el);
  });

}, 5000);
