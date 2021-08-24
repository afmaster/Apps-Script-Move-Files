function MoviFiles() {
  
  const parentFolder = DriveApp.getFolderById("ID OF 'FROM' FOLDER");
  const destinationFolder = DriveApp.getFolderById("ID OF DESTINATION FOLDER");


  let files = parentFolder.getFiles();
    while (files.hasNext()) {
      let file = files.next();
      let fileStr = file.toString();
      Logger.log(fileStr);
      
      // IF one needs to add some criteria based on file's name (otherwise just remove de 'if' statement):
      if (fileStr.split(".").includes("bl")){
        destinationFolder.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
    }
}
